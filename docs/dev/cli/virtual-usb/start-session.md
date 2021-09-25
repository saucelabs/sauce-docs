---
id: start-session
title: "Virtual USB CLI: Start Test Session"
sidebar_label: Start Session
---

The [`startSession`](/mobile-apps/features/virtual-usb#start-test-session) command provides the server with your credentials and the name of the device you want to connect to, then launches a brand new live test session via the command line. This is one of two ways to start a Virtual USB test; the other is to [connect to an existing session](/dev/cli/virtual-usb/connect-session).

## Required

---
### `--username`
__Description__: your Sauce Labs username.

---
### `--accessKey`
__Description__: your Sauce Labs access key for authentication.

---
### `--deviceName`
__Description__: the name of the private device that you want to use for testing.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar startSession --username john.smith --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx --deviceName iPhone_XS
```

```java title="Sample Response"
07:43:22.551 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
Started new session:
e21abb6f-a08e-4685-ba6e-8c6586dd4264		iPhone SE 2020		IOS		14.3		https://app.eu-central-1.saucelabs.com/live/mobile/dataCenters/EU/devices/iPhone_SE_2020_14_POC05/shared/e21abb6f-a08e-4685-ba6e-8c6586dd4264
localhost:-1	online
```

## Optional

These flags provide additional configuration options.

---
### `--serverHost`
__Description__: specifies a Virtual USB server host. Default value: `http://127.0.0.1`.

---
### `--serverPort`
__Description__: specifies a Virtual USB server port. Default value: `33657`.

---
### `--proxyHost`
__Description__: specifies a proxy host to be set on the device.

---
### `--proxyPassword`
__Description__: specifies a proxy password to be set on the device.

---
### `--proxyPort`
__Description__: specifies a proxy port to be set on the device. Default value: `0`.

---
### `--proxyUser`
__Description__: specifies a proxy user to be set on the device.

---
### `--tunnelIdentifier`
__Description__: specifies a tunnel identifier for Sauce Connect Proxy.

```bash title="Full Example (includes optional flags)"
java -jar virtual-usb-client.jar startSession \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxx \
    --deviceName iPhone_XS \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
    --tunnelIdentifier my-tunnel
```
