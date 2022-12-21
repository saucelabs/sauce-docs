---
id: uipath
title: UiPath Integration
sidebar_label: UiPath
description: Use UiPath with Sauce Labs to scale your RPA/app testing
keywords:
- uipath
- rpa
- mobile-testing
- automated-testing
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## GitLab Setup and Configuration - Sauce Labs

Revolutionize automated testing for your software, automations, and QA teams with [Test Suite](https://www.uipath.com/solutions/department/enterprise-test-suite): the resilient testing product portfolio powered by the UiPath Automation Platform. Leverage production-grade, low-code automation and AI power tools to automate testing for any technology while still managing testing your way.

### Overview

Using Test Suite in combination with Sauce Labs allows you to run mobile tests at scale with minimal configuration.

- What you need to get started
- Sauce Labs device configuration from Test Suite
- Tips and tricks on how to get the most out of the integration

### Prerequisites

- License for installed instance of UiPath Test Suite (free trial here!)
- Sauce Labs credentials and access to the Real Device Cloud
- Basic understanding of UiPath’s Mobile Device Manager (MDM), which will not be covered in this article

You need to have an automation framework (this example will assume an Appium test suite), and that you’ve created a mobile testing project within UiPath Studio.

### Device Configuration - Local

Before introducing Sauce Labs devices, it might be helpful to show an example of local device configuration. This serves as the foundation for the changes we need to make to get connected to the Sauce Labs cloud.

1. Open MDM from Studio

1. In the left navigation panel go to Devices

1. Configure your device as follows (see screenshot):

   - **Name** - Enter a name to identify your device in the **Devices** tab \* **Appium URL** - Enter the Appium server where your device is hosted.

     Locally, this would likely be an Appium server: `https://localhost:4723/wd/hub`

   - **Platform** - Click the field to select **Android** or **iOS** from the dropdown
   - **Device Name** - Enter the device name
   - **Platform Version** - Add the version number of your Android OS
   - **Additional Desired Capabilities** (_Optional_) - Add specific capabilities to customize your automation session. For more information, see [Appium Desired Capabilities](http://appium.io/docs/en/writing-running-appium/caps/#appium-desired-capabilities)
   - **Set Geo Location** (_Optional_) - Set your device location to test applications that use Location Services to generate location data

   <img src={useBaseUrl('img/integrations/uipath 2.png')} alt="UiPath Mobile Device Manager configuration form" />

1. _Optional_ - Configure logging and video recording details in the Logging tab

1. _Optional_ - Configure your development process in the Development tab
   - Close Similar Tabs (_Activated by default_): Close tabs running connections with similar devices and applications
   - Wait for Page Update (_Activated by default_): Wait for the page source to retrieve a screenshot of each action
1. Click **Save & Close** to add your device
1. Your device is added to the Devices list. For more information on how to test your device, see [Device Interaction](https://docs.uipath.com/test-suite/docs/device-interaction)

### Adding a Sauce Labs Device

A few small alterations are needed to access a Sauce Labs device. For more information on capabilities and options, see [Sauce Labs Platform Configurator](https://saucelabs.com/platform/platform-configurator)

- **Appium URL** - Enter the Appium server where your device is hosted. You can get the Appium URL from Sauce Labs by navigating to [Account > User Settings](https://app.saucelabs.com/user-settings) and copying the string from the Driver Creation. It will likely look something like this:

  `https://<username>:<access_key>@ondemand.us-west-1.saucelabs.com:443/wd/hub`

- **Device Name** - Match the device name with the value from the Device field in Sauce Labs
- **Platform Version** - Match the OS version number with the value from the Operating System field in Sauce Labs
- **Additional Desired Capabilities** - Match the value with the one from the Appium Version field in Sauce Labs

  <img src={useBaseUrl('img/integrations/uipath 1.png')} alt="UiPath MDM Sauce configuration form" />

### Conclusion

Test Suite was built to test any application, but testing mobile apps can get complicated when the device you need isn't available to you.

Sauce Labs provides thousands of real devices, with a wide range of operating systems and configurations, to help you test your mobile app when you need to, however you need to, without any hassle.

**Try it today!**

This document borrows heavily from [UiPath’s own documentation](https://docs.uipath.com/test-suite/docs/cloud-devices#adding-cloud-device) on Sauce Labs. We’re very gracious for their partnership and support.
