---
id: mobile-apps
title: Live Testing Mobile Apps
sidebar_label: Mobile Apps
---

import useBaseUrl from '@docusaurus/useBaseUrl';

With Virtual Devices on Sauce Labs, you can test your mobile applications on a variety of Android emulators and iOS simulators. If you do not have an app, consider using the Sauce Labs [Swag Labs](https://github.com/saucelabs/sample-app-mobile) sample app for validating your account functionality as well as your tests. 

__What You'll Need__

* A Sauce Labs Account
* A Mobile Application to Test

> If you do not have an app, consider using the Sauce Labs [Swag Labs](https://github.com/saucelabs/sample-app-mobile) sample app for validating your account functionality as well as your tests.

## Upload Your Application

Before you begin a live test session, you must upload an application to [Sauce Application Storage](storage.md).

For further information regarding:

* managing your application build/version.
* modifying application startup settings.
* viewing the storage API reference.

Visit the [Sauce Labs Application Storage](storage.md) page.

## Virtual Device Testing

### Starting a Session

After you've uploaded and selected the application, you're ready to launch a live testing session. 

### Selecting a Device

### Launching a Device

## Real Device Testing

### Starting a Session

After you've uploaded and selected the application, you're ready to launch a live testing session. 

### Selecting a Device

You must select a device prior to launching a session. By default, the public devices will display in a grid format like so:
    
   <img src={useBaseUrl('img/live-testing/device-grid.png')} alt="Device Grid" />;

There is a distinction between __Public Devices__ and __Private Devices__.

* Public devices are accessible by anyone with a Sauce Labs Account and are subject to availability. If a device is in use, you will see a yellow "Busy" flag across the device thumbnail.
* Private devices are only accessible by anyone in your team or org account. Private devices are an enterprise only feature.

### Launching a Device

Hover over a device thumbnail and click on __Details__ to see the specs for that device. Once you find the desired device, select __Launch__.

<img src={useBaseUrl('img/live-testing/device-details.png')} alt="Device Details" />;