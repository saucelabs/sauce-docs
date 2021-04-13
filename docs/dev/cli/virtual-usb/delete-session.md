---
id: delete-session
title: "Virtual USB CLI: Delete Session"
sidebar_label: Delete Session
---

The [`deleteSession`](https://docs.saucelabs.com/mobile-apps/virtual-usb#close-test) command closes out Virtual USB tests session started in the command line interface using the [`startSession`](dev/cli/virtual-usb/start-session) command.

## Required

### `--sessionId`
__Description__: your test session ID number, which you can find using the [`sessions`](dev/cli/virtual-usb/find-sessionid) command.

### `--username`
__Description__: your Sauce Labs username.

### `--accessKey`
__Description__: your Sauce Labs access key for authentication.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar deleteSession --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

```java title="Response Example"
07:45:46.375 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
Disconnected
Deleted session d03a1b81-158d-4bb4-bcc9-074e43dd8465
```

## Optional

These flags provide additional configuration options.

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.

```bash title="Full Example"
java -jar virtual-usb-client.jar deleteSession \
    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
```
