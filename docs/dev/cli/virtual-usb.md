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

Use --help to view the full list of available commands and options. The synopsis for each command shows its parameters and their usage.:
```java
java -jar virtual-usb-client-2.0.0.jar --help
```
