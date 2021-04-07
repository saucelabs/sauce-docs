---
id: start-server
title: "Virtual USB CLI: Start the Server"
sidebar_label: Start Server
---

__Full Example__:

```bash
java -jar virtual-usb-client-2.0.0.jar server \
    --datacenter us-west-1 \
    --adbPortRange 700 \
    --adbPortMin 1000 \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
    --startUsbmuxd true
```
## Required

## `--datacenter`

__Description__: connects your local machine to a Sauce Labs Data Center, where your Real Device Cloud tests will run. Possible values: `EU` or `US`.

__Example__:
```java
server --datacenter US
```

## Optional

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.

### `--adbPortMin`
__Description__: Virtual USB server Android Debug Bridge (ADB) port. Default value: `7000`.

### `--adbPortRange`
__Description__: Virtual USB server ADB port range. Default value: `100`.

### `--proxyHost`
__Description__: HTTP proxy host.

### `--proxyPort`
__Description__: HTTP proxy port. Default value: `0`.

### `--proxyUser`
__Description__: HTTP proxy user.

### `--proxyPassword`
__Description__: HTTP proxy password.

### `--startUsbmuxd`
__Description__: Starts the usbmuxd server immediately. Default value: `false`.