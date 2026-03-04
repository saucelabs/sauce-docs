---
id: connect-adb-and-xcode-to-remote-devices
title: Connect ADB and Xcode to Sauce Labs Remote Devices
sidebar_label: Connect ADB and Xcode
---

Testing on real devices shouldn't mean maintaining a device lab. But until now, using low-level tools like ADB or Xcode Instruments on cloud devices required a proprietary client and a complex setup.

The Real Device Access API changes that. Reserve a device with a single API call, then connect your existing tools — `adb`, Xcode, Instruments, `idevicesyslog`, any libimobiledevice utility — as if the device were on your desk. All you need is a local reverse proxy and your Sauce Labs credentials. No proprietary software. No Java runtime. Just your tools, talking to our devices.

Here's how it works: when you start a session, the API returns a WebSocket endpoint for your device. This endpoint carries the raw binary device protocol — the same bytes that would normally flow over a USB cable to a device on your desk — encapsulated in WebSocket frames over TLS. A lightweight local reverse proxy like `websocat` bridges your localhost to this endpoint, which directs the bytes straight to the remote device. On Android, `adb connect localhost:50371` then works exactly as if the device were plugged in. On iOS, the local usbmuxd socket at `/var/run/usbmuxd` is bridged to the remote device, so Xcode, Instruments, and every libimobiledevice tool discovers it automatically. You already know `adb shell` and `ideviceinfo` — your existing scripts, profilers, and workflows carry over unchanged.

## What You'll Need

- `curl`, `jq`
- **Android:** `websocat`, `adb`
- **iOS:** `websocat`, `socat`, `libimobiledevice`, root access

## How It Works

When a device is physically connected via USB, your tools communicate through a local protocol — ADB on Android, usbmuxd on iOS. The Real Device Access API preserves this exact interface but routes the connection over the internet.

The technical challenge is getting the raw device protocol bytes from your machine to a device in the Sauce Labs cloud — reliably and securely, across the public internet. The solution: encode them into WebSocket frames on your end, transport them over TLS, and decode them back on the other end. Everything in between — the reverse proxy, the WebSocket connection, the TLS encryption — is just transport. Your tools send the same bytes they always do, and the device receives the same bytes it always would.

```
Your Tools ──TCP──▶ Local Reverse Proxy ──WSS──▶ Sauce Labs API ──────▶ Remote Device
(adb, Xcode)        (websocat, socat)            (api.*.saucelabs.com)   (adb daemon / usbmuxd)
```

1. **Your tools** connect to `localhost` — they don't know or care that the device is remote.
2. **The local reverse proxy** (`websocat`, `socat`) accepts that local connection, encodes the bytes into WebSocket frames, and sends them over TLS to the Sauce Labs API.
3. **The Sauce Labs API** decodes the frames and delivers the raw bytes to the device in our cloud.
4. **The remote device** receives the same protocol stream it would over USB.

## Setup

### 1. Create a Session and Get the WebSocket Endpoint

Start a session and, once it's active, grab the WebSocket endpoint from the response — `links.adbUrl` for Android, `links.usbmuxdUrl` for iOS.

```shell
export BASE_URL="https://api.us-west-1.saucelabs.com/rdc/v2"
export AUTH="$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"

# Create the session
curl -X POST -u $AUTH \
  -H "Content-Type: application/json" \
  -d '{"device": {"os": "android"}}' \
  "$BASE_URL/sessions"

# Once active, extract the endpoint
curl -s -u $AUTH "$BASE_URL/sessions/{session_id}" | jq '.links'
```

### 2. Connect Your Tools

**Android:**

```shell
websocat -b tcp-l:127.0.0.1:50371 "$ADB_URL" \
  --basic-auth "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  -H "sessionId: $SESSION_ID" &
```

This starts `websocat` listening on local TCP port 50371. Every byte that arrives on that port is wrapped into a WebSocket frame and sent to the Sauce Labs endpoint, which forwards it to the device's ADB daemon. The `-b` flag ensures binary mode — no text conversion, just raw bytes in both directions.

Now point `adb` at that local port:

```shell
adb connect localhost:50371
```

`adb` thinks it's talking to a device on the local network. In reality, every command — `adb shell`, `adb install`, `adb push` — travels through the WebSocket tunnel to the remote device.

Verify with `adb devices` — you should see `localhost:50371` listed.

**iOS (requires root):**

```shell
# Back up the real usbmuxd socket
sudo mv /var/run/usbmuxd /var/run/usbmuxd.real

# Bridge the socket to the remote device
socat UNIX-LISTEN:/var/run/usbmuxd,fork,mode=0666 \
  EXEC:"websocat --binary $USBMUXD_URL \
    --basic-auth $SAUCE_USERNAME:$SAUCE_ACCESS_KEY \
    -H 'sessionId: $SESSION_ID'" &
```

This replaces the system usbmuxd socket with one that tunnels to the remote device. `socat` listens on the Unix socket and, for each incoming connection, spawns a `websocat` process that bridges it to the Sauce Labs endpoint.

Wait a few seconds, then verify:

```shell
idevice_id -l
```

The remote device's UDID should appear. From here, Xcode, Instruments, `idevicesyslog`, and all libimobiledevice tools will discover and interact with the device as if it were connected via USB.
