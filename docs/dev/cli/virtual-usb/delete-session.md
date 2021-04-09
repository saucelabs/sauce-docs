---
id: delete-session
title: "Virtual USB CLI: Delete Session"
sidebar_label: Delete Session
---

The `delete` command provides the server with your session ID and user credentials, then deletes your test session from your local machine.

## Required

### `--sessionId`
__Description__: your test session ID number.

### `--username`
__Description__: your Sauce Labs username.

### `--accessKey`
__Description__: your Sauce Labs access key for authentication.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar deleteSession --sessionId 12345 --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

## Optional

These flags provide additional configuration options.

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.

```bash title="Full Example"
java -jar virtual-usb-client.jar deleteSession \
    --sessionId 12345 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
```
