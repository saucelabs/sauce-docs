---
id: disconnect-session
title: "Virtual USB CLI: Disconnect Session"
sidebar_label: Disconnect Session
---

The [`disconnect`](/mobile-apps/features/virtual-usb#close-test) command closes out live Virtual USB test sessions that were started originally in Sauce Labs and linked to your Virtual USB client using the [`connect`](/dev/cli/virtual-usb/connect-session) command.

## Required

---
### `--sessionId`
__Description__: your test session ID number, which you can find using the `sessions` command.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar disconnect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465
```

```java title="Response Example"        
07:57:34.700 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
Disconnected
```

:::note Android Only
After completing the above step, you'll also need to [disconnect your device from ADB](/mobile-apps/features/virtual-usb#close-test) by running `adb disconnect` followed by your `<IPAddress>:<portNumber>`.  

:::

## Optional

Use these flags to provide additional configuration options.

---
### `--serverHost`
__Description__: specifies a Virtual USB server host. Default: `http://127.0.0.1`.

---
### `--serverPort`
__Description__: specifies a Virtual USB server port. Default: `33657`.

```bash title="Full Example (includes optional flags)"
java -jar virtual-usb-client.jar disconnect \
    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \
    --serverHost http://127.0.0.1 \
    --serverPort 33657 \
```
