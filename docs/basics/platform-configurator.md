---
id: platform-configurator
title: Configuring Your Tests with the Platform Configurator
sidebar_label: Platform Configurator
---

The [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) is a tool developed by Sauce Labs to help you correctly configure test capabilities required for your Appium and Selenium tests.

1. Select the **API** you want to use in your test, Appium or Selenium.
The option you choose here will determine the other configuration options you can set.
2. Select the type of **Device** you want to test against.
Note that Selenium includes options for iOS, Android, and desktop devices, while Appium only has options for mobile devices.
3. Select the **Operating System** you want to test against.
4. For Selenium tests, select the **Browser** you want to test against. For Appium tests, select the type of test you want to run:
   * Web Testing: Use this option if you want to use a mobile or desktop browser to test a website
   * Hybrid Testing: Use this option if you want to test a mobile client that is used to access an HTML-based site or application. If you choose this option, you will be prompted to provide the path to the client application that you want to test in [Application Storage](/mobile-apps/app-storage) or another location.
   * App Testing: Use this option if you want to test a native mobile application. If you choose this option, you will be prompted to provide the path to the client application that you want to test in [Application Storage](/mobile-apps/app-storage) or another location.
5. Under **Advanced Configurations**, the options to capture screenshots and record video are set by default. Clear these options of you don't want screenshots or video of your test. You can also specify the **Resolution** for your test.
6. Under **Copy Code**, select the scripting language you prefer, and you'll see the capabilities you've selected in the correct format and syntax for your language. Copy the code into your test script and you're ready to run!
