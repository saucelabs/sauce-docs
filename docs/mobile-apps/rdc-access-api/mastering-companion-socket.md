---
id: real-device-access-api-mastering-companion-socket
title: Real-Time Insights Mastering the Companion Socket
sidebar_label: Mastering the Companion Socket
---

Connect to the Companion Socket to receive real-time device logs, Appium logs, and network traffic from an active session. This allows you 
to debug issues live or trigger events in your infrastructure based on device state.

## Prerequisites

- Active Session: The session must be in an ACTIVE state. 
- WebSocket URL: The `eventsWebsocketUrl` found in the Session Details API response (under the links object). 
- Auth Token: Your Sauce Labs `username:accessKey` encoded in Base64. 
- Client Tool: A WebSocket client. We recommend `websocat` for its ability to handle large data frames (like network logs), though `wscat` (Node.js) is a valid alternative.

## 1. Connecting to the Stream
***Using Websocat (Recommended)*** We recommend using the `-B` flag to increase the buffer size. This prevents crashes when streaming heavy data, such as network traffic (HAR) files.

```shell
# 1. Set up your variables
# Use the URL provided in the "links" object of the Session Details response
EVENTS_URL="wss://api.us-west-1.saucelabs.com/rdc/v2/socket/companion/054d8bf6-b247-43d6-8777-f8d79215e87f"

AUTH_TOKEN=$(echo -n "username:access_key" | base64)

# 2. Connect!
# The -B 2000000 flag increases the buffer to ~2MB to prevent crashes on large network logs.
websocat -B 2000000 -H="Authorization: Basic $AUTH_TOKEN" "$EVENTS_URL" | jq
```
## 2. Filter Device Logs
***Type:*** `device.log.message`

Stream system logs (Android Logcat or iOS Syslog) to catch app crashes, stack traces, or custom logging statements.

```shell
websocat -B 2000000 -H="Authorization: Basic $AUTH_TOKEN" "$EVENTS_URL" | \
  jq --unbuffered 'select(.type == "device.log.message")'
```

## 3. Filter Appium Logs
***Type:*** `appium.log.message`

If using an Appium server, stream these logs to debug automation commands (like `click` or `findElement`) or view raw WebDriver protocol communication.

```shell
websocat -B 2000000 -H="Authorization: Basic $AUTH_TOKEN" "$EVENTS_URL" | \
  jq --unbuffered 'select(.type == "appium.log.message")'
```

## 4. Stream Network Traffic (HAR)
***Type:*** `device.har.entry`

Capture HTTP/HTTPS traffic (API calls, image loads, analytics) in real-time. Note: Network capture is disabled by default to save resources.

***Step 1: Enable Network Capture***
Send a POST request to start capturing traffic.
```shell
curl -X POST -u $AUTH "$BASE_URL/sessions/$SESSION_ID/device/enableNetworkCapture"
```

***Step 2: Filter for Network Entries***
Now that capture is enabled, filter the socket for HAR entries.
```shell
websocat -B 2000000 -H="Authorization: Basic $AUTH_TOKEN" "$EVENTS_URL" | \
  jq --unbuffered 'select(.type == "device.har.entry")'
```

***Step 3: Disable Network Capture***
When done, stop the capture to reduce noise and overhead.
```shell
curl -X POST -u $AUTH "$BASE_URL/sessions/$SESSION_ID/device/disableNetworkCapture"
```

## Pro Tip: Split Streams to Files
You don't have to choose one log type. You can watch the stream live and automatically sort messages into separate files (`device_log.json`, `appium_log.json`, and `network_log.json`) simultaneously.

This uses `tee` and process substitution to split the stream:
```shell
websocat -B 2000000 -H="Authorization: Basic $AUTH_TOKEN" "$EVENTS_URL" | \
  tee \
    >(jq --unbuffered 'select(.type=="device.log.message")' > device_log.json) \
    >(jq --unbuffered 'select(.type=="appium.log.message")' > appium_log.json) \
    >(jq --unbuffered 'select(.type=="device.har.entry")' > network_log.json) \
  | jq --unbuffered '.' # Optional: Print everything to screen as well
```