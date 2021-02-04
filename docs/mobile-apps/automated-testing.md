---
id: automated-testing
title: Choosing Devices for Automated Mobile App Testing
sidebar_label: Choosing Devices
---

Get the most out of your testing automation by including a healthy mix of emulators, simulators, and real devices as your mobile testing platforms. Why? Because there are aspects of the mobile experience that you can't test on emulators or simulators, such as location-based apps that use manufacturer-specific device sensors, memory consumption, and CPU usage.

There are a variety of use cases to consider when you're deciding on the mix of emulators, simulators, and real devices to use in your testing.

## When to Test on Real Devices

If you need...

* Breadth of device types for panel/compatibility testing
* To replicate an issue to match exact model as reported
* Pixel-perfect display testing
* To test hardware dependencies like CPU, memory, display, GPS
* To test native ARM Libraries
* To test on a custom OS (e.g., Samsung TouchWiz, OnePlus OxygenOS)
* To test on a native framework like Espresso and Robotium
* To test scenarios that require network connectivity (e.g., phone calls, send SMS messages)

The Sauce Labs real device cloud provides you with the ability to run either manual or automated tests across Android and iOS devices. Some of the features that are specific to our real device cloud include:

* Manual testing on real devices
* Choice of public real devices or private real devices unique to your organization
* Support for Appium, Robotium, Espresso, and XCUITest frameworks
* Support on hundreds of device/OS combinations
* IPSec VPN secure connections to private device clouds
* Devices cleaning process between sessions to ensure maximum privacy
* Carrier Network Connectivity (devices with SIM cards)

### System Requirements

See the [Automated Mobile Application Testing Admin Guide](https://wiki.saucelabs.com/display/DOCS/Mobile+Application+Testing+Admin+Guide).



## When to Test on Emulators and Simulators

If you need...

* Massive concurrency
* To reduce build times
* To save costs
* Immediate availability
* Extremely low error rates for your test environment















## Additional Resources

[Sauce Labs Blog: How to Choose Mobile Devices for Testing](https://saucelabs.com/blog/how-to-choose-mobile-devices-for-testing)
