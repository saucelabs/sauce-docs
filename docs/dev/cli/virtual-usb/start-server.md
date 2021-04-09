---
id: start-server
title: "Virtual USB CLI: Start the Server"
sidebar_label: Start Server
---

The `server` command connects your local machine to the Sauce Labs Data Center where your Real Device Cloud private devices are hosted.

## Required

### `--datacenter`
__Description__: defines the Data Center where your Real Device Cloud private devices are hosted. Possible values: `EU` or `US`.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar server --datacenter US
```

## Optional

These flags provide additional configuration options.

### `--serverHost`
__Description__: specifies a Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: specifies a Virtual USB server port. Default value: `33657`.

### `--adbPortMin`
__Description__: specifies a Virtual USB server Android Debug Bridge (ADB) port. Default value: `7000`.

### `--adbPortRange`
__Description__: specifies a Virtual USB server ADB port range. Default value: `100`.

### `--proxyHost`
__Description__: specifies a HTTP proxy host.

### `--proxyPort`
__Description__: specifies a HTTP proxy port. Default value: `0`.

### `--proxyUser`
__Description__: specifies a HTTP proxy user.

### `--proxyPassword`
__Description__: specifies a HTTP proxy password.

### `--startUsbmuxd`
__Description__: starts the `usbmuxd` server immediately. Default value: `false`.

```bash title="Full Example (includes some optional flags)"
java -jar virtual-usb-client.jar server \
    --datacenter us-west-1 \
    --adbPortRange 700 \
    --adbPortMin 1000 \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
    --startUsbmuxd true
```
