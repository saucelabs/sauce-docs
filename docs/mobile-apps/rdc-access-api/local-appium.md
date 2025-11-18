---
id: real-device-access-api-local-appium
title: Local Appium Over RDC Access API 
sidebar_label: Local Appium
---
# Local Appium over Access API

## Introduction
Although we encourage using [our hosted Appium solution](/mobile-apps/automated-testing/appium/), for some use cases, it can be beneficial to run Appium locally. This guide is a sample on how to connect a local Appium server to our remote Android and iOS devices.

## Technical specification

Appium requires a local ADB connection for Android devices, and a WDA forward for iOS.

### Android

To get a local ADB connection, we need to start an Acess API session as usual and then use the returned `vusbUrl` link from the session information to forward the ADB from the device.

#### Example workflow

1. Start a session

```
POST /sessions
{
  "device" : {
    "os" : "android"
  }
}
```

2. Get `vusbUrl` link

Wait for the session to stabilize, then:

```
GET /sessions/{session_id}
```

Fetch the websocket URL in `links -> vusbUrl`

3. Establish an adb proxy between your local machine and our remote device

You can use a tool like `websocat` to achieve this, using basic auth and passing the `sessionId` header with the Acess API session ID. The `vusbUrl` points to a websocket connection that encapsulates a binary adb connection to the device. Please take a look at our example [api-connect script](#Example script) for more information.

### iOS

For iOS, our solution consists of mounting the endpoint of the WebDriverAgent running on the device on a local port. This is possible by leveraging the HTTP forward endpoints in the Acess API.

#### Example workflow

1. Start a session

```
POST /sessions
{
  "device" : {
    "os" : "ios"
  }
}
```

2. Wait for the session to be established

Check the state is `ACTIVE` in

```
GET /sessions/{session_id}
```

3. Forward the WDA port

Our Acess API solution exposes an HTTP proxy endpoint running on the device. Appium needs a WDA server listening on the localhost interface to connect with it using the HTTP protocol. To achieve this, we run locally a reverse proxy to our HTTP proxy endpoint that:
* Handles the basic auth in Acess API
* Converts the SSL-encrypted HTTPS messages to plain HTTP
* Rewrites the request path so that the WDA endpoint is exposed in the root path

There are several tools to achieve this. Our reference implementation script uses [Caddy](https://caddyserver.com/). The endpoint that the HTTP calls need to be forwarded to is:

```
/sessions/{session_id}//device/proxy/http/localhost/8100
```

## Example script

We prepared the [api-connect script](scripts/api-connect.sh) as a reference implementation for achieving this.

### Requirements

For the script to run correctly, you'll need the following tools installed locally:

* `curl`
* `jq`
* `websocat` (Android only)
* `adb` (Android only)
* `docker` (iOS only)

### Usage

You'll need the following environment variables set:

* `SAUCE_USERNAME`: Your SauceLabs user.
* `SAUCE_ACCESS_KEY`: Your SauceLabs api access key.
* `SAUCE_API_URL`: The Acess API URL. Depending on the environment, it can be one of
    * https://api.us-west-1.saucelabs.com
    * https://api.eu-central-1.saucelabs.com
    * https://api.us-east-4.saucelabs.com

```
api-connect <sessionId>
```

Provide an established Acess API session ID, and depending on the device OS, it will:

1. For iOS: Start a local [Caddy](https://caddyserver.com/) that exposes the WDA endpoint on local port `8100`. You'll need to pass the `webDriverAgentUrl` capability to your local Appium server, pointing to this port on your loopback interface.
2. For Android: Forward the device ADB connection to local port `50371` (can be modified in the script) and start an ADB server connecting to this port.