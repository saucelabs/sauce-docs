---
id: find-sessionid
title: "Virtual USB CLI: Find SessionID"
sidebar_label: Find SessionID
---

The `sessions` command returns a list of active device sessions based on the Sauce Labs credentials you enter. This is required in order to use the [`connect`](/dev/cli/virtual-usb/connect-session) command. It can also be useful if you've lost track of your session ID and need to find it to run other commands (i.e., deleting or disconnecting a session).

## Required

---
### `--username`
__Description__: your Sauce Labs username.

---
### `--accessKey`
__Description__: your Sauce Labs access key for authentication.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar sessions --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

```java title="Sample Response"
07:45:46.375 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
List of active sessions
d03a1b81-158d-4bb4-bcc9-074e43dd8465   Samsung Galaxy S10  ANDROID  10
c7729c7a-56a9-46cf-ba96-958709a86b4f   iPhone XS           IOS      14.3
e21abb6f-a08e-4685-ba6e-8c6586dd4264   iPhone SE 2020      IOS      14.3
```

## Optional

These flags provide additional configuration options.

---
### `--serverHost`
__Description__: specify a Virtual USB server host. Default value: `http://127.0.0.1`.

---
### `--serverPort`
__Description__: specify a Virtual USB server port. Default value: `33657`.

```bash title="Full Example (includes optional flags)"
java -jar virtual-usb-client.jar sessions \
    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
```
