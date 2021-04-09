---
id: start-test-session
title: "Virtual USB CLI: Start Test Session"
sidebar_label: Start Test Session
---

__Full Example__:

```bash
java -jar virtual-usb-client-2.0.0.jar startSession \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxx \
    --deviceName iPhone_XS \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
    --tunnelIdentifier my-tunnel
```

## Required

### `--username`

__Description__: provides the `server` with your username credentials. then connects your local machine to your desired device (static allocation).

__Example__:
```java
startSession --username john.smith
```

### `--accessKey`

__Description__: provides the `server` with your API credentials.

__Example__:
```java
startSession --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxx 
```

### `--deviceName`

__Description__: connects your local machine to the desired device (static allocation).

__Example__:
```java
startSession --deviceName iPhone_XS
```

## Optional

### `--serverHost`

__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.


### `--serverPort`

__Description__: Virtual USB server port. Default value: `33657`.


### `--proxyHost`

__Description__: specifies a proxy host to be set on the device.


### `--proxyPassword`

__Description__: specifies a proxy password to be set on the device.


### `--proxyPort`

__Description__: specifies a proxy port to be set on the device. Default value: `0`.


### `--proxyUser`

__Description__: specifies a proxy user to be set on the device.


### `--tunnelIdentifier`

__Description__: specifies a tunnel identifier for Sauce Connect Proxy.

__Example__:
```java
startSession --tunnelIdentifier my-tunnel
```
