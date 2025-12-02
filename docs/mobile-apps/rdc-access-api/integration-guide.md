---
id: real-device-access-api-integration-guide
title: RDC Access API Integration Guide
sidebar_label: Integration Guide
---


The Sauce Labs Real Device Access API v2 allows you to programmatically interact with real mobile devices in the Sauce Labs cloud. Use it for functional testing, debugging, and observability. This guide introduces the core concepts: checking device availability, creating and managing sessions, and streaming live logs. By following these steps, you can start testing in just a few minutes.

## Five-Minute Onboarding Checklist
Use this checklist to quickly set up your environment and run your first test using the Real Device Access API. These steps cover the minimum required configuration to begin interacting with real devices through the API:
1. **Choose your data center** (US West, EU Central, or US East) and export `BASE_URL`.
2. **Grab your credentials** from Sauce Labs User Settings and export `SAUCE_USERNAME`/`SAUCE_ACCESS_KEY`.
3. **Verify access** by listing devices with `curl -u $AUTH "$BASE_URL/devices/status"`.
4. **Create a session** with `POST /sessions` and wait for the `ACTIVE` state.
5. **Attach tooling**: connect via WebSockets for logs or start Appium (local or hosted) using the session details.

Each step is expanded in the sections below with copy‑and‑paste snippets.

## Base URLs
Sauce Labs has three Real Device Cloud in the following regions:
* US West: https://api.us-west-1.saucelabs.com/rdc/v2/
* EU Central: https://api.eu-central-1.saucelabs.com/rdc/v2/
* US East: https://api.us-east-4.saucelabs.com/rdc/v2/

```shell
export BASE_URL="https://api.us-west-1.saucelabs.com/rdc/v2"
export AUTH="{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}"
```


## Authentication
The API uses Basic Authentication. Retrieve your Sauce Labs username and access key from **Account → User Settings**.

All examples use `curl` and expect you to set `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` (or inline `YOUR_USERNAME:YOUR_ACCESS_KEY`).
```shell
curl -u $AUTH "$BASE_URL/devices/status"
```

## Device Identification and Filtering
Understanding how devices are labeled helps you target exactly what you need:

- `descriptor`: Device identifier, you can look up device IDs on device selection pages (for example, `iPhone_13_real`).
- `deviceName`: The human-readable name you see in the UI (for example, `iPhone 12 Pro Max`).

The `deviceName` parameter accepts an exact value or regular expression and matches against both `descriptor` and `deviceName`. This holds true for every endpoint that accepts the `deviceName` parameter.

> Need the full schema for these fields? See `Device` and `Session` definitions in the [Access API spec](/real-device-access-api).

## Quick Start Examples

### Check Device Status
You can retrieve a list of all available real devices and filter them based on various criteria.

#### List All Devices
```shell
curl  $BASE_URL/devices/status \
-u $AUTH 
```

#### Device Filtering Options
The `/devices/status` endpoint supports the following query parameters:

- `state`: Filter by device state (`AVAILABLE`, `IN_USE`, `CLEANING`, `REBOOTING`, `MAINTENANCE`, `OFFLINE`).
- `privateOnly`: Set to `true` to show only your account's private devices.
- `deviceName`: Filter by descriptor or friendly name. Accepts regular expressions (for example, `iPhone.*`).

#### Examples:
```shell
# Get all devices
curl -u $AUTH "$BASE_URL/devices/status"

# Filter by device state
curl -u $AUTH "$BASE_URL/devices/status?state=AVAILABLE"

# Show only private devices
curl -X GET -u $AUTH \
  "$BASE_URL/devices/status?privateOnly=true"

# Filter by device identifier (supports regular expression patterns)
curl -X GET -u $AUTH \
  "$BASE_URL/devices/status?deviceName=iPhone.*"

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
> ***Note:*** The `deviceName` and `os` parameters are optional. If omitted, Sauce Labs selects an available device automatically. For full configuration go to ... (link to api contract)

#### Example
```shell
curl -u $AUTH \
  -H "Content-Type: application/json" \
  -d '{
    "device": {
      "deviceName": ".*",
      "os": "ios"
    }
  }' \
  "$BASE_URL/sessions"
```

#### Example Response

```json
{
  "id": "{session_id}",
  "state": "PENDING"
}
```

### Manage Device Sessions
Once a session is created, you can list your sessions, get details for a specific session, and close it when you are done.

#### List All Sessions
Filter sessions by `state` and `deviceName`.

##### Session Filtering Options
The `/sessions` endpoint supports:

- `state`: Session lifecycle state (`PENDING`, `CREATING`, `ACTIVE`, `CLOSING`, `CLOSED`, `ERRORED`).
- `deviceName`: Specific descriptor or regular expression (for example, `iPhone_16_real` or `Samsung.*`).

##### Examples
```shell
# Get all sessions
curl  -u $AUTH "$BASE_URL/sessions"

# Filter by session state
curl -u $AUTH "$BASE_URL/sessions?state=ACTIVE"

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
  }
}
```

#### Close a Session
Terminate a device session and release the device. When you close a session, its state will transition from `ACTIVE` → `CLOSING` → `CLOSED`.

##### Session Closure Options
- **Basic closure** (default): terminate the session, [clean the device](/mobile-apps/real-device-cleaning/), return it to the device pool marked as AVAILABLE.
- **Reboot option** (private devices only): perform the standard cleanup and then reboot the device. After rebooting the device it will not be rebooted for another 10 sessions


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
  }
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