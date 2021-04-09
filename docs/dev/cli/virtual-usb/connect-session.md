---
id: connect-session
title: "Virtual USB CLI: Connect to Existing Session"
sidebar_label: Connect to Session
---

The `connect` command provides the server with your user credentials and session ID for an existing live test, then connects the device to your local machine. This is one of two ways to start a Virtual USB test; the other is to [start a new test session from the command line](dev/cli/virtual-usb/start-session).

## Required

### `--sessionId`
__Description__: your test session ID.

### `--username`
__Description__: your Sauce Labs username.

### `--accessKey`
__Description__: your Sauce Labs access key for authentication.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar connect --sessionId 12345 --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

## Optional

These flags provide additional configuration options.

### `--serverHost`
__Description__: specifies a Virtual USB server host. Default: `http://127.0.0.1`.

### `--serverPort`
__Description__: specifies a Virtual USB server port. Default: `33657`.

```bash title="Full Example (includes some optional flags)"
java -jar virtual-usb-client.jar connect \
    --sessionId 12345 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
```
