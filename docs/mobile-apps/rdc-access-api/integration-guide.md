---
id: real-device-access-api-integration-guide
title:  RDC Access API Integration Guide
sidebar_label: Integration Guide
---

# Sauce Labs Real Device Access API

Sauce Labs Real Device API v2 allows you to programmatically interact with real mobile devices in the Sauce Labs cloud
for your testing purposes. This guide provides the information you need to get started with checking device status,
creating and managing test sessions, and streaming logs.

## Base URLs
Sauce Labs offers three production environments for the Real Device Cloud (RDC) API v2. Please use the base URL that corresponds to your account's data center:
* US West: https://api.us-west-1.saucelabs.com/rdc/v2/
* EU Central: https://api.eu-central-1.saucelabs.com/rdc/v2/
* US East: https://api.us-east-4.saucelabs.com/rdc/v2/

```shell
export BASE_URL="https://api.us-west-1.saucelabs.com/rdc/v2"
export AUTH="{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}"
```

In the examples below, we will use `$BASE_URL` and `$AUTH` as a placeholder.

## Authentication
The API uses Basic Authentication. You will need your Sauce Labs username and access key to make requests.
You can find these in the `Account -> User Settings` section of the Sauce Labs UI.

All examples use curl and expect you to replace `YOUR_USERNAME` and `YOUR_ACCESS_KEY` with your credentials.
```shell
curl -u $AUTH "$BASE_URL/devices/status"
```

## Device Identification and Filtering
A key concept in the Real Device API is how devices are identified and filtered. When you query for devices or request a device for a session, you will interact with two primary fields:

- `descriptor`: A static identifier for a device (e.g., `iPhone_13_real`). This is consistent across the Real Device API
- `deviceName`: A more descriptive, user-friendly name (e.g., `iPhone 13 real private`)

When you use the `deviceName` query parameter in an API request, you are not just filtering on the `deviceName` field. Instead, this parameter accepts either a specific device ID or a regular expression and applies the filter to both the `descriptor` and `deviceName` fields.

This is the standard behavior for all endpoints that accept a `deviceName` parameter.

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
The `/devices/status` endpoint supports the following query parameters for filtering:

- `state`: Filter by device state. Possible values: `AVAILABLE`, `IN_USE`, `CLEANING`, `REBOOTING`, `MAINTENANCE`, `OFFLINE`.
- `privateOnly`: Set to `true` to show only your account's private devices.
- `deviceName`:  Filter by a device identifier. This field supports regular expressions (e.g., `iPhone.*`) and matches against both the device `descriptor` and `deviceName` fields.

#### Examples:
```shell
# Get all devices
curl -X GET -u $AUTH "$BASE_URL/devices/status"

# Filter by device state
curl -X GET -u $AUTH "$BASE_URL/devices/status?state=AVAILABLE"

# Show only private devices
curl -X GET -u $AUTH \
  "$BASE_URL/devices/status?privateOnly=true"

# Filter by device identifier (supports regex patterns)
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
To start a new testing session, you need to make a `POST` request to the `/sessions` endpoint.
> ***Note:*** The `deviceName` and `os` parameters in the request body are optional. If they are omitted, Sauce Labs will automatically select an available device for your session.

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

### Manage Device Sessions
Once a session is created, you can list your sessions, get details for a specific session, and close it when you are done.

#### List All Sessions
You can filter sessions by `state` and `deviceName.`

##### Session Filtering Options
The `/sessions` endpoint supports the following filters:

- `state`: Filter by session state
    * `PENDING` - Session is waiting to be created
    * `CREATING` - Session is being set up
    * `ACTIVE` - Session is ready for interaction
    * `CLOSING` - Session is being terminated
    * `CLOSED` - Session has ended
    * `ERRORED` - Session encountered an error

- `deviceName`: Filter by specific device identifier (e.g., `iPhone_16_real`, `Samsung_Galaxy_S21_real`, `iPhone.*`, `Samsung.*`)

You can combine both filters to get more specific results, such as finding all active sessions on a particular device.

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
The session closure endpoint provides flexible termination options:

- Basic Closure: This is the default behavior. The session is terminated, and a standard cleaning process is executed on the device. Once the cleaning process is complete, the device is marked as AVAILABLE and returned to the device pool.
- Reboot Option: **Available only for private devices**, The session is terminated, the standard cleaning process is executed, and finally, the device is rebooted. This ensures the device is in a pristine state before being returned to the pool.

***Note:*** The `rebootDevice` parameter only works with private devices. Public/shared devices cannot be rebooted through the API.

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
```yaml
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
You can connect to a WebSocket to receive real-time logs and events from an active session.

***Prerequisites:***
- Active device session (state must be `ACTIVE`)
- The `eventsWebsocketUrl` from the session details response.
- A WebSocket client tool like `websocat` or `wscat`.

#### Live Streaming with websocat (Recommended)
`websocat` is a versatile command-line client for WebSockets.

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

#### Alternative Tool: wscat (Node.js)
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
wscat -c "wss://api.${DATA_CENTER}.saucelabs.net/rdc/v2/socket/companion/$SESSION_ID" \
  -H "Authorization: Basic $AUTH_TOKEN"
```