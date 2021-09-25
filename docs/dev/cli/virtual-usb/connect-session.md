---
id: connect-session
title: "Virtual USB CLI: Connect to Existing Session"
sidebar_label: Connect to Session
---

The [`connect`](https://docs.saucelabs.com/mobile-apps/features/virtual-usb#start-test-session) command uses your user credentials and `sessionId` to connect to an existing live session, which will then connect the device to your local machine. This is one of two ways to start a Virtual USB test; the other is to [start a new test session from the command line](/dev/cli/virtual-usb/start-session).

## Required

---
### `--sessionId`
__Description__: your test session ID, which you can find using the `sessions` command.

---
### `--username`
__Description__: your Sauce Labs username.

---
### `--accessKey`
__Description__: your Sauce Labs access key for authentication.<br/>

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar connect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

```bash title="Sample Response"
07:51:46.814 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
localhost:7000  online
```

## Optional

These flags provide additional configuration options.

---
### `--serverHost`
__Description__: specifies a Virtual USB server host. Default: `http://127.0.0.1`.

---
### `--serverPort`
__Description__: specifies a Virtual USB server port. Default: `33657`.

```bash title="Full Example (includes optional flags)"
java -jar virtual-usb-client.jar connect \
    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
```
