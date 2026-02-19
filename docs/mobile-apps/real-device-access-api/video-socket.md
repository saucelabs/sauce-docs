---
id: real-device-access-api-video-socket
title: Streaming and Controlling Devices with the Video Socket
sidebar_label: Video Socket
---

Connect to the Video Socket to receive a real-time stream of the device screen and send touch, keyboard, and navigation commands back to the device.

## Prerequisites

- **Active Session:** The session must be in an `ACTIVE` state.
- **WebSocket URL:** The `ioWebsocketUrl` found in the Session Details API response (under the `links` object).
- **Auth Token:** Your Sauce Labs `username:accessKey` encoded in Base64.
- **Client Tool:** A WebSocket client that supports both text and binary frames. We recommend `websocat` for command-line usage, or any WebSocket library (OkHttp, `ws`, etc.) for programmatic access.

## How It Works

The Video Socket is a bidirectional WebSocket connection:

| Direction | Format | Purpose |
|-----------|--------|---------|
| Server &rarr; Client | Binary frames (JPEG) | Each frame is a complete image of the current device screen |
| Client &rarr; Server | Text messages | Touch events, keyboard input, navigation commands, and frame acknowledgments |

The server sends a new frame whenever the device screen changes. Your client acknowledges each frame to signal readiness for the next one.

## 1. Get the WebSocket URL

Retrieve the session details to get the `ioWebsocketUrl`:

```shell
SESSION_ID="YOUR_SESSION_ID"

curl -u $AUTH "$BASE_URL/sessions/$SESSION_ID"
```

The response includes the WebSocket URLs in the `links` object:

```json
{
  "id": "054d8bf6-b247-43d6-8777-f8d79215e87f",
  "state": "ACTIVE",
  "links": {
    "ioWebsocketUrl": "wss://api.us-west-1.saucelabs.com/rdc/v2/socket/alternativeIo/054d8bf6-...",
    "eventsWebsocketUrl": "wss://api.us-west-1.saucelabs.com/rdc/v2/socket/companion/054d8bf6-..."
  }
}
```

Use `ioWebsocketUrl` for video and device interaction. Use `eventsWebsocketUrl` for logs and events (see [Mastering the Companion Socket](mastering-companion-socket.md)).

## 2. Connect to the Video Stream

### Using websocat

```shell
# Set up your variables
IO_URL="wss://api.us-west-1.saucelabs.com/rdc/v2/socket/alternativeIo/054d8bf6-b247-43d6-8777-f8d79215e87f"
AUTH_TOKEN=$(echo -n "username:access_key" | base64)

# Connect and save incoming binary frames as images
websocat -b -H="Authorization: Basic $AUTH_TOKEN" "$IO_URL" > frame.jpg
```

:::note
`websocat` in binary mode (`-b`) writes raw binary data to stdout. For a richer experience, use a programmatic WebSocket client that can decode frames and render them.
:::

### Using a WebSocket Library (Java Example)

```java
String wsUrl = session.getLinks().getIoWebsocketUrl();
String credentials = username + ":" + accessKey;
String authToken = Base64.getEncoder().encodeToString(credentials.getBytes());

Request request = new Request.Builder()
    .url(wsUrl)
    .header("Authorization", "Basic " + authToken)
    .build();

OkHttpClient client = new OkHttpClient.Builder()
    .readTimeout(0, TimeUnit.SECONDS)  // No timeout for long-lived connection
    .build();

client.newWebSocket(request, new WebSocketListener() {
    @Override
    public void onMessage(WebSocket ws, ByteString bytes) {
        // Each binary message is a complete JPEG frame
        BufferedImage image = ImageIO.read(
            new ByteArrayInputStream(bytes.toByteArray())
        );
        renderImage(image);

        // Acknowledge to receive the next frame
        ws.send("n/");
    }
});
```

### Using JavaScript (Node.js Example)

```javascript
const WebSocket = require("ws");

const ioUrl =
  "wss://api.us-west-1.saucelabs.com/rdc/v2/socket/alternativeIo/YOUR_SESSION_ID";
const authToken = Buffer.from("username:access_key").toString("base64");

const ws = new WebSocket(ioUrl, {
  headers: { Authorization: `Basic ${authToken}` },
});

ws.on("message", (data, isBinary) => {
  if (isBinary) {
    // data is a Buffer containing a JPEG image
    fs.writeFileSync("latest_frame.jpg", data);

    // Acknowledge to receive the next frame
    ws.send("n/");
  }
});
```

## 3. Frame Acknowledgment

After processing each binary frame, send the text message `n/` to request the next frame:

```
Client → Server:  n/
```

This flow-control mechanism prevents the server from flooding your client with frames faster than you can process them. If you stop sending acknowledgments, the server pauses frame delivery until you resume.

## 4. Send Touch Events

Touch events let you interact with the device screen. All coordinates are relative to a canvas of the specified width and height.

### Message Format

```
mt/{action} {canvasWidth} {canvasHeight} {orientation} {touchCount} {touchIndex} {x} {y}
```

| Field | Description |
|-------|-------------|
| `{action}` | `d` = touch down, `m` = touch move, `u` = touch up |
| `{canvasWidth}` | Width of your rendering canvas in pixels |
| `{canvasHeight}` | Height of your rendering canvas in pixels |
| `{orientation}` | `0` = portrait, `1` = landscape |
| `{touchCount}` | Number of simultaneous touch points (`1` for single touch, `2` for multi-touch) |
| `{touchIndex}` | Index of this touch point (`0` for first finger, `1` for second) |
| `{x}` | X coordinate of the touch point |
| `{y}` | Y coordinate of the touch point |

### Tap

A tap is a touch-down immediately followed by a touch-up at the same coordinates:

```
mt/d 1080 1920 0 1 0 540 960
mt/u 1080 1920 0 1 0 540 960
```

### Swipe

A swipe is a touch-down, one or more touch-move events, and a touch-up:

```
mt/d 1080 1920 0 1 0 540 1400
mt/m 1080 1920 0 1 0 540 1200
mt/m 1080 1920 0 1 0 540 1000
mt/m 1080 1920 0 1 0 540 800
mt/u 1080 1920 0 1 0 540 600
```

### Multi-Touch (Pinch / Zoom)

For multi-touch gestures like pinch-to-zoom, send two touch points in a single message. Set `touchCount` to `2` and append the second finger's index and coordinates:

```
mt/{action} {width} {height} {orientation} 2 0 {x1} {y1} 1 {x2} {y2}
```

**Pinch-out (zoom in) example** — two fingers moving apart:

```
mt/d 360 640 0 2 0 150 300 1 210 340
mt/m 360 640 0 2 0 120 260 1 240 380
mt/m 360 640 0 2 0 90 220 1 270 420
mt/u 360 640 0 2 0 90 220 1 270 420
```

### Canvas Coordinates

The canvas dimensions you specify should match the size of the area where you are rendering the device screen. The server translates your canvas coordinates to the device's actual resolution. For example, if you render the stream in a 360x640 panel, use `360 640` as the canvas dimensions and compute touch points relative to that area.

## 5. Send Navigation Commands

Hardware button presses use the `tt/` prefix:

| Command | Action |
|---------|--------|
| `tt/Sauce_Home_Key` | Press the Home button |
| `tt/Sauce_Back_Key` | Press the Back button (Android) |
| `tt/Sauce_Menu_Key` | Open the app switcher / recent apps |

### Example: Press Home

```
tt/Sauce_Home_Key
```

### Example: Navigate Back

```
tt/Sauce_Back_Key
```

## 6. Send Keyboard Input

Individual key presses also use the `tt/` prefix. Send the key name as it appears in standard keyboard event naming:

| Command | Action |
|---------|--------|
| `tt/a`, `tt/b`, ... `tt/z` | Letter keys |
| `tt/1`, `tt/2`, ... `tt/0` | Number keys |
| `tt/Enter` | Enter / Return |
| `tt/Backspace` | Delete / Backspace |
| `tt/ArrowLeft`, `tt/ArrowRight` | Arrow keys |
| `tt/ArrowUp`, `tt/ArrowDown` | Arrow keys |

### Example: Type "hi"

```
tt/h
tt/i
```

## 7. Putting It All Together

Here is a complete Java example that connects to the video socket, renders frames, and sends a tap:

```java
// 1. Connect
String wsUrl = session.getLinks().getIoWebsocketUrl();
String auth = Base64.getEncoder().encodeToString(
    (username + ":" + accessKey).getBytes()
);

Request request = new Request.Builder()
    .url(wsUrl)
    .header("Authorization", "Basic " + auth)
    .build();

WebSocket ws = client.newWebSocket(request, new WebSocketListener() {
    @Override
    public void onMessage(WebSocket webSocket, ByteString bytes) {
        // 2. Decode and display the frame
        BufferedImage frame = ImageIO.read(
            new ByteArrayInputStream(bytes.toByteArray())
        );
        display(frame);

        // 3. Acknowledge
        webSocket.send("n/");
    }
});

// 4. Tap the center of a 1080x1920 canvas (portrait)
ws.send("mt/d 1080 1920 0 1 0 540 960");
ws.send("mt/u 1080 1920 0 1 0 540 960");

// 5. Press Home
ws.send("tt/Sauce_Home_Key");
```

## 8. Reconnection

If the WebSocket connection drops unexpectedly, implement reconnection with exponential backoff:

1. Wait 1 second, then reconnect.
2. If that fails, wait 2 seconds, then 4, then 8, up to a maximum of 5 attempts.
3. After 5 failed attempts, surface an error to the user.

Normal closure (code `1000`) should not trigger reconnection — it means the session was intentionally ended.

## Reference

| Topic | Details |
|-------|---------|
| **WebSocket URL** | `ioWebsocketUrl` from session `links` object |
| **Authentication** | `Authorization: Basic <base64(username:accessKey)>` header |
| **Frame format** | Binary messages containing JPEG image data |
| **Frame acknowledgment** | Send text message `n/` after processing each frame |
| **Touch events** | `mt/{d\|m\|u} {width} {height} {orientation} {touchCount} {touchIndex} {x} {y}` |
| **Multi-touch** | Append second finger: `... 2 0 {x1} {y1} 1 {x2} {y2}` |
| **Navigation** | `tt/Sauce_Home_Key`, `tt/Sauce_Back_Key`, `tt/Sauce_Menu_Key` |
| **Keyboard input** | `tt/{key}` — e.g., `tt/a`, `tt/Enter`, `tt/Backspace` |
| **Reconnection** | Exponential backoff: 1s, 2s, 4s, 8s, 16s — max 5 attempts |
