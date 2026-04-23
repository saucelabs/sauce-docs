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
- Android workflows: `websocat` and `adb`.
- iOS workflows: Docker (used for the reference Caddy proxy).

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

Use `websocat` to create a bridge between your local machine and the remote device. The `vusbUrl` encapsulates a binary ADB connection, so your local `adb` client can interact with the device as if it were plugged in.
:::tip
For more information on using `websocat` and connecting to WebSockets, refer to the [Integration Guide](integration-guide.md#websocket-for-live-event-streaming).
:::

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

## Reference Script (`api-connect.sh`)

Use `api-connect.sh` to automate the setup for both Android and iOS.

### Requirements

For the script to run correctly, you'll need the following tools installed locally:

* `curl`
* `jq`
* `websocat` (Android only)
* `adb` (Android only)
* `docker` (iOS only)

### Environment Variables

Set the following environment variables:

* `SAUCE_USERNAME`: Your Sauce Labs username.
* `SAUCE_ACCESS_KEY`: Your Sauce Labs API access key.
* `SAUCE_API_URL`: One of:
    * https://api.us-west-1.saucelabs.com
    * https://api.eu-central-1.saucelabs.com
    * https://api.us-east-4.saucelabs.com

### Usage

1. **Start an Access API session:** Use the `curl` commands above or a REST client to create a session.
2. **Wait for activation:** Poll the session endpoint until the state becomes `ACTIVE`.
3. **Save the script:** Copy [The Script](#the-script) content into `api-connect.sh`.
4. **Run the script:** Provide your `sessionId`:
```shell
./api-connect.sh <sessionId>
```

Depending on the device OS, the script will:

- **Android:** Forward the ADB connection to `localhost:50371`.
- **iOS:** Start a local Caddy proxy that forwards WebDriverAgent to `localhost:8100`.

### The Script
Save the following content to a file named `api-connect.sh` and mark it as runnable (`chmod +x api-connect.sh`).

```shell reference
https://github.com/saucelabs/real-device-api/blob/main/scripts/api-connect.sh
```