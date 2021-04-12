---
id: find-session-id
title: "Virtual USB CLI: Find Session ID"
sidebar_label: Find Session ID
---

The `sessions` command returns a list of active real device sessions based on the Sauce Labs credentials you enter. This can be useful if you've lost track of your session ID and need to find it to run other commands (i.e., deleting or disconnecting a session).

## Required

### `--username`
__Description__: Your Sauce Labs username.

### `--accessKey`
__Description__: Your Sauce Labs access key.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client sessions --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

## Optional

These flags provide additional configuration options.

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.

```bash title="Full Example (includes some optional flags)"
java -jar virtual-usb-client.jar sessions \
    --sessionId 12345 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
```
