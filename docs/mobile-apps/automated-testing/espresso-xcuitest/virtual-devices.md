---
id: virtual-devices
title: Virtual Device Testing with Espresso
sidebar_label: Virtual Device Testing
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<p> <Highlight color="#eb7734">BETA</Highlight> </p>

Sauce Labs offers the ability to run tests on our virtual device cloud emulators using popular native frameworks such as Espresso, a native testing framework for running user interface tests on Android devices. At this time, XCUITest is not supported.

To get started, you'll need to download Sauce Runner for Virtual Devices to your local machine, then launch it from your command line using the [required and optional parameters](/dev/cli/espresso-xcuitest.md).

## System Requirements
* You must have network connectivity to saucelabs.com on `port 443`
* Your local machine must have 4GB of free RAM
* You must have a 64-bit operating system, running Windows 7+, Mac OS X 10.11+, or Linux

### Supported Espresso Package Versions
| Package | Minimum Version |
| :------------- | :------------- |
| com.android.support.test.espresso:espresso-core | 3.0.2 |
| com.android.support.test.espresso:espresso-web | 3.0.2 |
| com.android.support.test:runner | 1.0.2 |
| com.android.support.test:rules | 1.0.2 |
| junit:junit | 4.12 |

## Download
Download a `sauce-runner-virtual` package from the links below.

| Download Link | SHA1 Checksum
| :-------------------------- | :---
| [Mac OS X 10.11+](https://saucelabs.com/downloads/sauce-runner-virtual-0.1.2-osx.zip) | 0cfc478d0649968d494441c1bfe71b77d13e7fd8
| [Windows 7+ 64-bit](https://saucelabs.com/downloads/sauce-runner-virtual-0.1.2-windows.zip) | aece75d0bc5fb68eba45e3c2f0cfdb381933ae78
| [Linux 64-bit](https://saucelabs.com/downloads/sauce-runner-virtual-0.1.2-linux.zip) | 18bc0a7573ff8182b6f01d2e09353d0b75efa9dd

## Installation
1. Unzip the download package contents to any folder on your system.
1. Go to the `sauce-runner-virtual` application. which will be in the `bin` folder.
1. In a console or terminal window, navigate to and run the application.
1. Check out [Command Reference for Sauce Runner for Virtual Devices](https://wiki.saucelabs.com/pages/viewpage.action?pageId=72746736) for more information on using Sauce Runner for Virtual Devices.

## Setup and Configuration
The [Command Reference for Sauce Runner for Virtual Devices](https://wiki.saucelabs.com/pages/viewpage.action?pageId=72746736) contains a list of the options you can use to configure Sauce Runner to run tests with Espresso.

## Android Emulator Settings
Following [Google's recommendation to avoid flakey tests](https://developer.android.com/training/testing/espresso/setup), we disable system animations on emulators during Espresso tests. Specifically the following three system animations are disabled:

* Window animation scale
* Transition animation scale
* Animator duration scale

:::note Three-Hour Test Limit
Recommended maximum execution time for Espresso jobs is one hour, however, the emulators are capable of running Espresso jobs for three hours, and are shutdown after three hours.
:::

### Exit Status Codes
Sauce Runner for Virtual Devices returns the following status codes based on test execution results:

| Status Code        | Description           
| :------------- |:-------------
| 0  | All the tests passed on all devices.
| 1  | This status code can mean multiple things, it is important to refer to the logs to identify the problem: <ul><li>One or more tests failed during execution</li><li>User error like an invalid path to test files or invalid arguments</li><li>Sauce Labs infrastructure error while executing the test</li></ul>   

## Troubleshooting
When testing on Sauce emulators, one error to look out for is Espresso test suites running as expected on one Android version, but failing on another version (e.g., "Internal Server Error").

**Potential Cause**: Application under test requires a minimum Android version or above.

**Recommendation**: Check the `minSdkVersion` in `build.gradle` for your application project.
