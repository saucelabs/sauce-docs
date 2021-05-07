---
id: virtual-usb
title: Virtual USB CLI Reference
sidebar_label: General Usage
---

Virtual USB (vUSB) is an app debugging tool that simulates connecting a Sauce Labs real device directly to your local machine with a USB cable. This section outlines the required and optional parameters for the vUSB client test runner. For step-by-step instructions on how to use vUSB, see [Virtual USB Testing on Real Mobile Devices](/mobile-apps/virtual-usb).

## What You'll Need

* Your Sauce Labs account credentials.
* Your mobile app file.
* Have the Virtual USB client downloaded and installed.
* Prior to using the vUSB CLI, navigate (`cd`) to the specific folder directory on your local machine where you downloaded and placed your Virtual USB client (`virtual-usb-client.jar`).

## CLI Structure

The command line structure for all vUSB requests is as follows: `<main class> [options] [command] [command options]`.

## `--help` Option

You can also view the vUSB CLI directly in the command line terminal by running the `--help` flag.
```java
java -jar virtual-usb-client.jar --help
```

## Use Cases

See [Virtual USB for Real Devices](mobile-apps/virtual-usb).
