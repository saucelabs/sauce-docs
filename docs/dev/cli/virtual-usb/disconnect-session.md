---
id: disconnect-session
title: "Virtual USB CLI: Disconnect Session"
sidebar_label: Disconnect Session
---

The `disconnect` command provides the server with your test session ID, then disconnects the real device from your local machine.

## Required

### `--sessionId`
__Description__: your test session ID number.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar disconnect --sessionID 37D274BC3A65A34BB3DA4DDF7B77E341
```

## Optional

These flags provide additional configuration options.

### `--serverHost`
__Description__: specifies a Virtual USB server host. Default: `http://127.0.0.1`.

### `--serverPort`
__Description__: specifies a Virtual USB server port. Default: `33657`.

```bash title="Full Example (includes some optional flags)"
java -jar virtual-usb-client.jar disconnect \
    --sessionId 12345 \
    --serverHost http://127.0.0.1 \
    --serverPort 33657 \
```
