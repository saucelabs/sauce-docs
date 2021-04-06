---
id: disconnect
title: "Virtual USB CLI: Disconnect"
sidebar_label: Disconnect
---

__Full Example__:

```java
java -jar virtual-usb-client-2.0.0.jar disconnect \
    --sessionId 12345 \
    --serverHost http://127.0.0.1 \
    --serverPort 33657 \
```

## Required

### `--sessionId`

__Description__: provides `server` with the session ID, then disconnects the device from your local machine.

__Example__:

```java
disconnect --sessionId 12345
```

## Optional

### `--serverHost`

__Description__: vUSB-Server host. Default: `http://127.0.0.1`.


### `--serverPort`

__Description__: vUSB-Server port. Default: `33657`.