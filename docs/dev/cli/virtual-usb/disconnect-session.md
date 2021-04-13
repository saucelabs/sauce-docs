---
id: disconnect-session
title: "Virtual USB CLI: Disconnect Session"
sidebar_label: Disconnect Session
---

<<<<<<< HEAD
The [`disconnect`](https://docs.saucelabs.com/mobile-apps/virtual-usb#close-test) command closes out live Virtual USB test sessions that were started originally in Sauce Labs and linked to your Virtual USB client using the [`connect`](dev/cli/virtual-usb/connect-session) command.
=======
The [`disconnect`](https://docs.saucelabs.com/mobile-apps/virtual-usb#close-test) command uses the `--sessionId` of a Virtual USB session started with the [`startSession`](dev/cli/virtual-usb/start-session) command to disconnect the real device from your local machine.
>>>>>>> c0f6df736e4edd9a11c63bd0e77ac92aef2ab440

## Required

### `--sessionId`
__Description__: your test session ID number, which you can find using the `sessions` command.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar disconnect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465
```

```java title="Response Example"        
07:57:34.700 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
Disconnected
```

## Optional

These flags provide additional configuration options.

### `--serverHost`
__Description__: specifies a Virtual USB server host. Default: `http://127.0.0.1`.

### `--serverPort`
__Description__: specifies a Virtual USB server port. Default: `33657`.

```bash title="Full Example (with optional flags)"
java -jar virtual-usb-client.jar disconnect \
    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \
    --serverHost http://127.0.0.1 \
    --serverPort 33657 \
```
