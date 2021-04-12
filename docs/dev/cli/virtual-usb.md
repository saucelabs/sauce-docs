---
id: virtual-usb
title: Virtual USB CLI Reference
sidebar_label: General Usage
---

Virtual USB (vUSB) is an app debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable. This section outlines the required and optional parameters for the vUSB client test runner. For step-by-step instructions on how to use vUSB, see [Virtual USB Testing on Real Mobile Devices](/mobile-apps/virtual-usb).

The command line structure for all vUSB requests is as follows:

`<main class> [options] [command] [command options]`.

<br/>

:::tip

You can also view the vUSB CLI directly in the command line terminal by running the `--help` flag.
```java
java -jar virtual-usb-client.jar --help
```
:::