---
id: real-device-access-api-local-appium
title: Local Appium over Real Device Access API
sidebar_label: Local Appium
---

# Introduction
Although we encourage using [our hosted Appium solution](/mobile-apps/automated-testing/appium/), certain scenarios benefit from running Appium locally—for example, custom plugins, in-depth debugging, or networking requirements. This guide shows how to connect a local Appium server to Sauce Labs Android and iOS devices through the Real Device Access API.

## Prerequisites
- Real Device Access API enabled for your account (see the [Integration Guide](integration-guide.md)).
- `curl` and `jq` installed locally.
- The [`access-api-connect`](https://github.com/saucelabs/access-api-connect) binary on your `PATH` — pre-built for macOS, Linux, and Windows on the project's [Releases page](https://github.com/saucelabs/access-api-connect/releases).
- Android workflows: `adb`.
- iOS workflows: a macOS or Linux host with `sudo`. *Windows is not supported for iOS — see the iOS section below.*

## Technical Specification

Appium requires a local ADB connection for Android devices and a WebDriverAgent (WDA) tunnel for iOS.

## Android

Use the session’s `vusbUrl` to bridge an ADB connection from the remote device to your local machine.

### Example Workflow

#### 1. Start a Session
```shell
curl -X POST -u $AUTH \
  -H "Content-Type: application/json" \
  -d '{
    "device": {
      "os": "android"
    }
  }' \
  "$BASE_URL/sessions"
```
See the [Integration Guide](integration-guide.md#base-urls) for the `$BASE_URL` definition.

#### 2. Get `vusbUrl` Link

Wait for the session to reach `ACTIVE`, then run:

```shell
curl -X GET -u $AUTH "$BASE_URL/sessions/{session_id}"
```

Copy the WebSocket URL in `links -> vusbUrl`. The API returns this value in the `links.vusbUrl` field described in the specification.

#### 3. Establish an ADB Proxy Between Your Local Machine and the Remote Device

Use [`access-api-connect`](https://github.com/saucelabs/access-api-connect) to bridge `adb` to the remote device:

```shell
export SAUCE_USERNAME=...        # your Sauce Labs username
export SAUCE_ACCESS_KEY=...      # your access key
export SAUCE_REGION=US           # or US_EAST / EU — case-insensitive

access-api-connect <sessionId>   # listens on 127.0.0.1:7001
```

Once it prints `Ready`, point `adb` at it:

```shell
adb connect localhost:7001
adb devices                       # should list localhost:7001
```

`access-api-connect` uses the session's multiplex-capable `vusbUrl` to carry the ADB connection over a single WebSocket — your local `adb` client interacts with the device as if it were plugged in. Press `Ctrl+C` to stop the agent.

## iOS

Expose the device’s WebDriverAgent (WDA) endpoint on a local port by using the Access API HTTP forward endpoints.

### Example Workflow

#### 1. Start a Session
```shell
curl -X POST -u $AUTH \
  -H "Content-Type: application/json" \
  -d '{
    "device": {
      "os": "ios"
    }
  }' \
  "$BASE_URL/sessions"
```

#### 2. Wait for the Session to Be Established

Confirm the session state is `ACTIVE`:

```shell
curl -X GET -u $AUTH "$BASE_URL/sessions/{session_id}"
```

#### 3. Forward the WDA Port

The Access API exposes an HTTP proxy endpoint on the device. Appium expects WDA on `localhost`, so run a local reverse proxy that:
* Adds the Access API basic auth headers
* Converts outbound HTTPS to plain HTTP for Appium
* Rewrites the path so the WDA endpoint appears at the root

Any reverse proxy works; our reference script uses [Caddy](https://caddyserver.com/). Forward requests to the HTTP proxy path defined in the API spec:

```
/sessions/{session_id}/device/proxy/http/localhost/8100
```

## Reference Agent (`access-api-connect`)

Use the official [`access-api-connect`](https://github.com/saucelabs/access-api-connect) agent to automate the bridge setup. It replaces the older `api-connect.sh` shell reference and ships as a single binary for macOS, Linux, and Windows.

### Requirements

* `curl` and `jq` (only to create the session)
* `adb` (Android workflows)
* macOS or Linux + `sudo` (iOS workflows — required to take over `/var/run/usbmuxd`)
* The `access-api-connect` binary on your `PATH` — download from the [Releases page](https://github.com/saucelabs/access-api-connect/releases) or `make build` from source.

### Environment Variables

Set the following before invoking the agent:

* `SAUCE_USERNAME` — your Sauce Labs username.
* `SAUCE_ACCESS_KEY` — your Sauce Labs API access key.
* `SAUCE_REGION` — one of `US` (us-west-1), `US_EAST` (us-east-4), `EU` (eu-central-1). Case-insensitive.

(`SAUCE_API_URL` is also accepted and takes precedence over `SAUCE_REGION` when both are set — use it only for non-standard endpoints.)

### Usage

1. **Create an Access API session** using the `curl` commands above (or a REST client).
2. **Wait for it to become `ACTIVE`** by polling the session endpoint.
3. **Run the agent** with your `sessionId`:

   ```shell
   # Android
   access-api-connect <sessionId>

   # iOS (macOS / Linux only)
   sudo -E access-api-connect <sessionId>
   ```

Depending on the device OS, the agent will:

- **Android:** Listen on `127.0.0.1:7001`. Run `adb connect localhost:7001` in another terminal.
- **iOS:** Mount the session over `/var/run/usbmuxd`. Appium with `appium:automationName: XCUITest` can address the device by its UDID and use the bundled WDA over usbmuxd — no separate Caddy forwarder needed.

For flag-by-flag documentation, troubleshooting, and building from source, see the [project README](https://github.com/saucelabs/access-api-connect#readme).

### Alternative: WDA-only iOS forwarder (no root)

If you specifically need to expose only WebDriverAgent on `localhost:8100` and want to avoid `sudo`, you can still run any reverse proxy (e.g. [Caddy](https://caddyserver.com/)) against the Access API's HTTP proxy path described in the [iOS section above](#3-forward-the-wda-port). That approach doesn't require root but only exposes WDA — Xcode, Instruments, and `libimobiledevice` tools won't see the device.