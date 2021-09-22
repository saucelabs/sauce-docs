---
id: start-server
title: "Virtual USB CLI: Start the Server"
sidebar_label: Start Server
---

The [`server`](https://docs.saucelabs.com/mobile-apps/features/virtual-usb#start-server) command connects your local machine to the Sauce Labs Data Center where your Real Device Cloud private devices are hosted. You must start this command in its own separate command line terminal, since it acts as a log running continuously.

## Required

---
### `--datacenter`
__Description__: defines the Data Center where your Real Device Cloud private devices are hosted. Possible values: `EU` or `US`.

```java title="Basic Example (required flags only)"
java -jar virtual-usb-client.jar server --datacenter US
```

```java title="Sample Response"
19:06:10.060 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
19:06:11.032 [main] INFO com.saucelabs.vusb.client.server.VirtualUsbServer - Initializing vUSB-Server...
19:06:11.038 [main] INFO com.saucelabs.vusb.client.server.VirtualUsbServer - vUSB-Server initialized
19:06:11.039 [main] INFO com.saucelabs.vusb.client.server.rest.WebServer - Starting Virtual USB server on port 33657.
19:06:11.103 [main] INFO com.saucelabs.vusb.client.server.rest.WebServer - Virtual USB server is up.
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
### `--adbPortMin`
__Description__: specifies a Virtual USB server Android Debug Bridge (ADB) port. Default value: `7000`.

---
### `--adbPortRange`
__Description__: specifies a Virtual USB server ADB port range. Default value: `100`.

---
### `--proxyHost`
__Description__: specifies a HTTP proxy host.

---
### `--proxyPort`
__Description__: specifies a HTTP proxy port. Default value: `0`.

---
### `--proxyUser`
__Description__: specifies a HTTP proxy user.

---
### `--proxyPassword`
__Description__: specifies a HTTP proxy password.

---
### `--startUsbmuxd`
__Description__: starts the `usbmuxd` server. Default value: `false`.

```bash title="Full Example (includes optional flags)"
java -jar virtual-usb-client.jar server \
    --datacenter US \
    --adbPortRange 700 \
    --adbPortMin 1000 \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
    --startUsbmuxd true
```
