---
id: real-device-access-api-integration-guide
title: RDC Access API Integration Guide
sidebar_label: Integration Guide
---

# Sauce Labs Real Device Access API

Sauce Labs Real Device Access API v2 lets you programmatically interact with real mobile devices in the Sauce Labs cloud for functional testing, debugging, and observability.
This guide walks you through the essentials—checking device status, creating sessions, managing them, and streaming live logs—so you can get productive quickly.

## Five-Minute Onboarding Checklist

1. **Choose your data center** (US West, EU Central, or US East) and export `BASE_URL`.
2. **Grab your credentials** from Sauce Labs User Settings and export `SAUCE_USERNAME`/`SAUCE_ACCESS_KEY`.
3. **Verify access** by listing devices with `curl -u $AUTH "$BASE_URL/devices/status"`.
4. **Create a session** with `POST /sessions` and wait for the `ACTIVE` state.
5. **Attach tooling**: connect via WebSockets for logs or start Appium (local or hosted) using the session details.

Each step is expanded in the sections below with copy‑and‑paste snippets.

## Base URLs
Sauce Labs offers three production environments for the Real Device Cloud (RDC) API v2. Use the base URL that matches your account's data center:
* US West: https://api.us-west-1.saucelabs.com/rdc/v2/
* EU Central: https://api.eu-central-1.saucelabs.com/rdc/v2/
* US East: https://api.us-east-4.saucelabs.com/rdc/v2/

```shell
export BASE_URL="https://api.us-west-1.saucelabs.com/rdc/v2"
export AUTH="{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}"
```

In the examples below, `$BASE_URL` and `$AUTH` act as placeholders.

## Authentication
The API uses Basic Authentication. Retrieve your Sauce Labs username and access key from **Account → User Settings**.

All examples use `curl` and expect you to set `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` (or inline `YOUR_USERNAME:YOUR_ACCESS_KEY`).
```shell
curl -u $AUTH "$BASE_URL/devices/status"
```

## Device Identification and Filtering
Understanding how devices are labeled helps you target exactly what you need:

- `descriptor`: Static identifier (for example, `iPhone_13_real`) consistent across the API.
- `deviceName`: Descriptive label you see in the UI (for example, `iPhone 13 real private`).

The `deviceName` query parameter accepts an exact value or regular expression and matches against both `descriptor` and `deviceName`. This holds true for every endpoint that takes `deviceName`.

> Need the full schema for these fields? See `Device` and `Session` definitions in the [OpenAPI spec](https://raw.githubusercontent.com/saucelabs/real-device-api/main/open_api_specification.yaml).

## Quick Start Examples

### Check Device Status
You can retrieve a list of all available real devices and filter them based on various criteria.

#### List All Devices
```shell
curl -X GET \
  -u $AUTH \
  "$BASE_URL/devices/status"
```

#### Device Filtering Options
The `/devices/status` endpoint supports the following query parameters:

- `state`: Filter by device state (`AVAILABLE`, `IN_USE`, `CLEANING`, `REBOOTING`, `MAINTENANCE`, `OFFLINE`).
- `privateOnly`: Set to `true` to show only your account's private devices.
- `deviceName`: Filter by descriptor or friendly name. Accepts regular expressions (for example, `iPhone.*`).

#### Examples:
```shell
# Get all devices
curl -X GET -u $AUTH "$BASE_URL/devices/status"

# Filter by device state
curl -X GET -u $AUTH "$BASE_URL/devices/status?state=AVAILABLE"

# Show only private devices
curl -X GET -u $AUTH \
  "$BASE_URL/devices/status?privateOnly=true"

# Filter by device identifier (supports regular expression patterns)
curl -X GET -u $AUTH \
  "$BASE_URL/devices/status?deviceName=iPhone.*"

# Combine multiple filters
curl -X GET -u $AUTH \
  "$BASE_URL/devices/status?state=AVAILABLE&privateOnly=true&deviceName=iPhone.*"
```

#### Example Response

```json
{
  "devices": [
    {
      "descriptor": "iPhone_13_real",
      "isPrivateDevice": true,
      "status": "AVAILABLE"
    },
    {
      "descriptor": "Samsung_Galaxy_S21_real",
      "isPrivateDevice": false,
      "status": "IN_USE",
      "inUseBy": [
        {
          "username": "john.smith"
        }
      ]
    }
  ]
}
```

### Create a Device Session
Start a new session with a `POST` request to `/sessions`.
> ***Note:*** The `deviceName` and `os` parameters are optional. If omitted, Sauce Labs selects an available device automatically. You can also include the optional `configuration` object from the API spec to set `sessionDuration` (ISO-8601) or attach a Sauce Connect `tunnel`.

#### Example
```shell
curl -X POST -u $AUTH \
  -H "Content-Type: application/json" \
  -d '{
    "device": {
      "deviceName": "iPhone_16_real",
      "os": "ios"
    }
  }' \
  "$BASE_URL/sessions"
```

#### Example Response

```json
{
  "id": "{session_id}",
  "state": "PENDING",
  "links": null,
  "device": null,
  "error": null
}
```

### Session Lifecycle Cheat Sheet

1. `POST /sessions` → returns `id` and initial `state` (`PENDING` or `CREATING`).
2. `GET /sessions/{id}` → poll until `state` becomes `ACTIVE`. Capture the links block: `ioWebsocketUrl`, `eventsWebsocketUrl`, optional `vusbUrl`, `appiumserver`, etc.
3. Run your automations. Use other endpoints (install apps, run shell commands, use the HTTP proxy) against the same `sessionId`.
4. `DELETE /sessions/{id}` → releases the device. Optionally add `?rebootDevice=true` for private devices.

### Manage Device Sessions
Once a session is created, you can list your sessions, get details for a specific session, and close it when you are done.

#### List All Sessions
Filter sessions by `state` and `deviceName`.

##### Session Filtering Options
The `/sessions` endpoint supports:

- `state`: Session lifecycle state (`PENDING`, `CREATING`, `ACTIVE`, `CLOSING`, `CLOSED`, `ERRORED`).
- `deviceName`: Specific descriptor or regular expression (for example, `iPhone_16_real` or `Samsung.*`).

Combine both filters to surface, for example, all `ACTIVE` sessions on a private device.

##### Examples
```shell
# Get all sessions
curl -X GET -u $AUTH "$BASE_URL/sessions"

# Filter by session state
curl -X GET -u $AUTH "$BASE_URL/sessions?state=ACTIVE"

# Filter by device ID
curl -X GET -u $AUTH "$BASE_URL/sessions?deviceName=iPhone_16_real"

# Combine multiple filters - active sessions on specific device
curl -X GET -u $AUTH \
  "$BASE_URL/sessions?state=ACTIVE&deviceName=iPhone_16_real"
```

##### Example Response
```json
{
  "sessions": [
    {
      "sessionId": "123e4567-e89b-12d3-a456-426614174000",
      "state": "ACTIVE",
      "device": {
        "descriptor": "Samsung_Galaxy_S8_real2",
        "deviceName": "Samsung Galaxy S8",
        "os": "ANDROID",
        "osVersion": "9",
        "resolutionWidth": 1440,
        "resolutionHeight": 2960,
        "screenSize": 5.7
      },
      "links": {
        "ioWebsocketUrl": "wss://api.saucelabs.com/rdc/v2/sessions/123e4567-e89b-12d3-a456-426614174000/wss/io",
        "eventsWebsocketUrl": "wss://api.saucelabs.com/rdc/v2/sessions/123e4567-e89b-12d3-a456-426614174000/wss/events",
        "self": "https://api.saucelabs.com/rdc/v2/sessions/123e4567-e89b-12d3-a456-426614174000"
      },
      "error": null
    }
  ]
}
```

#### Get Session Details
Retrieve information for a single session using its `SESSION_ID`.
```shell
curl -X GET -u $AUTH "$BASE_URL/sessions/{session_id}"
```

##### Example Response
```json
{
  "sessionId": "123e4567-e89b-12d3-a456-426614174000",
  "state": "ACTIVE",
  "device": {
    "descriptor": "Samsung_Galaxy_S8_real2",
    "deviceName": "Samsung Galaxy S8",
    "os": "ANDROID",
    "osVersion": "9",
    "resolutionWidth": 1440,
    "resolutionHeight": 2960,
    "screenSize": 5.7
  },
  "links": {
    "ioWebsocketUrl": "wss://api.saucelabs.com/rdc/v2/sessions/123e4567-e89b-12d3-a456-426614174000/wss/io",
    "eventsWebsocketUrl": "wss://api.saucelabs.com/rdc/v2/sessions/123e4567-e89b-12d3-a456-426614174000/wss/events",
    "self": "https://api.saucelabs.com/rdc/v2/sessions/123e4567-e89b-12d3-a456-426614174000"
  },
  "error": null
}
```

#### Close a Session
Terminate a device session and release the device. When you close a session, its state will transition from `ACTIVE` → `CLOSING` → `CLOSED`.

##### Session Closure Options
- **Basic closure** (default): terminate the session, clean the device, return it to the device pool marked as AVAILABLE.
- **Reboot option** (private devices only): perform the standard cleanup and then reboot to guarantee a pristine state.

***Note:*** The `rebootDevice` parameter has no effect on public/shared devices.

##### Examples
```shell
# Basic session termination
curl -X DELETE -u $AUTH \
  $BASE_URL/sessions/123e4567-e89b-12d3-a456-426614174000

# Close session with device reboot (private devices only)
curl -X DELETE -u $AUTH \
  "$BASE_URL/sessions/123e4567-e89b-12d3-a456-426614174000?rebootDevice=true"
```

##### Example Response
```json
{
  "id": "f64b3cc1-7c56-42b5-bb59-d31711337ce9",
  "state": "CLOSING",
  "links": {
    "ioWebsocketUrl": "wss://api.saucelabs.com/rdc/v2/socket/alternativeIo/0501a5ee-76e1-4b1e-8302-82379025a275",
    "eventsWebsocketUrl": "wss://api.saucelabs.com/rdc/v2/socket/companion/0501a5ee-76e1-4b1e-8302-82379025a275",
    "deviceUrl": null,
    "self": "https://api.saucelabs.com/rdc/v2/sessions/f64b3cc1-7c56-42b5-bb59-d31711337ce9"
  },
  "device": {
    "descriptor": "Samsung_Galaxy_S8_real2",
    "deviceName": "Samsung Galaxy S8",
    "os": "ANDROID",
    "osVersion": "9",
    "resolutionWidth": 1440,
    "resolutionHeight": 2960,
    "screenSize": 5.7
  },
  "error": null
}
```

### WebSocket for Live Event Streaming
Connect to a WebSocket to receive real-time logs and events from an active session.

***Prerequisites:***
- Active device session (state must be `ACTIVE`)
- The `eventsWebsocketUrl` from the session details response.
- A WebSocket client tool like `websocat` or `wscat`.

#### Live Streaming with Websocat (Recommended)
`websocat` is a versatile command-line WebSocket client.

##### Installation:
```shell
# macOS (Homebrew)
brew install websocat

# For other systems, see: https://github.com/vi/websocat/releases
```

##### Usage:

```shell
# Set your credentials and session ID
SESSION_ID="YOUR_SESSION_ID"
DATA_CENTER="us-west-1" # or eu-central-1, us-east-4


# Generate a Base64 authentication token
AUTH_TOKEN=$(echo -n $AUTH | base64)

echo "Auth token: $AUTH_TOKEN"

# Connect to the WebSocket
websocat -H="Authorization: Basic $AUTH_TOKEN" "wss://api.${DATA_CENTER}.saucelabs.com/rdc/v2/socket/companion/${SESSION_ID}"
```

#### Alternative Tool: Wscat (Node.js)
If you have Node.js installed, you can use `wscat`.

##### Installation:
```shell
# Install wscat globally
npm install -g wscat
```

##### Usage:

```shell
# Set your credentials and session ID
SESSION_ID="YOUR_SESSION_ID"
DATA_CENTER="us-west-1" # or eu-central-1, us-east-4

# Generate a Base64 authentication token
AUTH_TOKEN=$(echo -n $AUTH | base64)

echo "Auth token: $AUTH_TOKEN"

# Connect to the WebSocket
wscat -c "wss://api.${DATA_CENTER}.saucelabs.com/rdc/v2/socket/companion/$SESSION_ID" \
  -H "Authorization: Basic $AUTH_TOKEN"
```