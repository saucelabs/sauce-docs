---
id: connect-adb-and-xcode-to-remote-devices
title: Connect ADB and Xcode to Sauce Labs Remote Devices
sidebar_label: Connect ADB and Xcode
---

Testing on real devices shouldn't mean maintaining a device lab. But until now, using low-level tools like ADB or Xcode Instruments on cloud devices required a proprietary client and a complex setup.

The Real Device Access API changes that. Reserve a device with a single API call, then connect your existing tools — `adb`, Xcode, Instruments, `idevicesyslog`, any libimobiledevice utility — as if the device were on your desk. All you need is a local reverse proxy and your Sauce Labs credentials. No proprietary software. No Java runtime. Just your tools, talking to our devices.

Your existing scripts, profilers, and workflows carry over unchanged. See [How It Works](#how-it-works) for the technical details.

## What You'll Need

- `curl`, `jq`
- **Android:** `websocat`, `adb`
- **iOS:** `websocat`, `socat`, `libimobiledevice`, root access

## How It Works

When a device is physically connected via USB, your tools communicate through a local protocol — ADB on Android, usbmuxd on iOS. The Real Device Access API preserves this exact interface but routes the connection over the internet.

The technical challenge is transporting the same bytes that would normally flow over a USB cable — reliably and securely, across the public internet. The solution: when you start a session, the API returns a WebSocket endpoint for your device. A lightweight local reverse proxy encodes the bytes into WebSocket frames, transports them over TLS to the Sauce Labs API, which decodes them and delivers them to the device. Everything in between — the reverse proxy, the WebSocket connection, the TLS encryption — is just transport. Your tools send the same bytes they always do, and the device receives the same bytes it always would.

```
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│   Your Tools     │      │  Local Reverse   │      │  Sauce Labs API  │      │  Remote Device   │
│                  │ TCP  │  Proxy           │ WSS  │                  │      │                  │
│  adb             ├─────▶│  websocat        ├─────▶│  api.*.saucelabs ├─────▶│  adb daemon      │
│  Xcode           │      │  socat           │      │  .com            │      │  usbmuxd         │
│  libimobiledevice│      │                  │      │                  │      │                  │
└──────────────────┘      └──────────────────┘      └──────────────────┘      └──────────────────┘
     localhost                  localhost                 internet               Sauce Labs cloud
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

## Use Cases

**Android — take a screenshot via ADB:**

```shell
adb shell screencap -p /sdcard/screen.png
adb pull /sdcard/screen.png ./screen.png
```

**iOS — stream device logs via libimobiledevice:**

```shell
idevicesyslog
```

## Reference Script

For a turnkey setup that handles both platforms, see the [`api-connect.sh`](https://github.com/saucelabs/real-device-api/blob/main/scripts/api-connect.sh) reference script.

## Cleanup

Close the session and stop the local reverse proxy:

```shell
# Close the session
curl -X DELETE -u $AUTH "$BASE_URL/sessions/{session_id}"

# Android: disconnect adb and stop websocat
adb disconnect localhost:50371
kill %1

# iOS: stop socat and restore the original usbmuxd socket
kill %1
sudo mv /var/run/usbmuxd.real /var/run/usbmuxd
```

## Troubleshooting

- **`adb connect` times out** — verify `websocat` is still running and the `adbUrl` is correct. Check that your credentials are valid.
- **`idevice_id -l` returns nothing** — ensure you're running as root, the original socket was backed up successfully, and `socat` is running.
- **Connection drops after a period of inactivity** — the session may have timed out. Check session state with `GET /sessions/{session_id}`.

## Limitations

- `adb reverse` is not supported — use `adb forward` instead.
- iOS access requires root to replace the `/var/run/usbmuxd` socket.
- IDE debugging and attaching debuggers (Xcode, Android Studio) is not supported.
