---
id: live-testing-mobile
title: Live Testing on Mobile Browsers
sidebar_label: Live Testing on Mobile Browsers
---
With Sauce Labs you can run live tests of your web apps using native browsers for Android and iOS on both virtual and real mobile devices.

## What You'll Need
Know if your app is designed to run on internal or otherwise restricted networks. If it does and you're testing on real devices, use Sauce Connect Proxy to connect. For more information, see [Sauce Connect Proxy Setup for Real Device Cloud](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Setup+for+Real+Device+Cloud?src=sidebar).

## Real Devices
1. Log in to Sauce Labs and go to **Live > Cross-Browser** from the options in the left-hand navigation.
2. Select **Mobile Real**.
3. Use the filter options or **Search** field to find the type of real device you want to use in your test, and select it.
4. To mark a device as a favorite so you can find it easily in the future, click the star next to the device name.

<device-favorite.png>

The default sorting for the device list is **Starred First**.

5. For **Test URL**, enter the URL of the website you want to test in the browser.
6. If you are using Sauce Connect Proxy to access the web app you want to test, enter the ID of the tunnel to use.
7. Click **Start Session**.
You'll see a loading screen, and then the URL you entered will launch in a live test window using the real device you selected.

## Virtual Devices
1. Log in to Sauce Labs and select **Live > Cross Browser** from the options in the left-hand navigation.
2. Select **Mobile Virtual**.
3. Select the specifications for the virtual device you want to use from the **Manufacturer**, **Device**, and **OS Version** menus.
4. For **Test URL**, enter the URL of the website you want to test in the browser.
5. If you are using Sauce Connect Proxy to access the web app you want to test, enter the ID of the tunnel to use.
6. Click **Start Session**.
You'll see a loading screen, and then the URL you entered will launch in a live test window using the virtual device you selected.

### Running Tests in Parallel

You can run multiple live test sessions at the same time, with the number of tests limited by the concurrency allowance associated with your account. To run tests in parallel, open a new browser tab and follow the steps to set up the new session. You can switch back and forth between the sessions by clicking on the browser tabs.
