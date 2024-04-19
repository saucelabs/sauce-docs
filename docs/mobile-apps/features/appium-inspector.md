---
id: appium-inspector
title: Appium Inspector
sidebar_label: Appium Inspector
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

Appium Inspector is a powerful tool built on top of the Appium test automation framework to help simplify the process of writing/debugging tests for mobile applications on real devices. This helps to automate a new application or feature in your native application. The tool is designed to help you select specific elements in your application for test automation, so you will be able to debug issues in your test automation scripts in a timely manner.
Our latest solution seamlessly integrates into the Sauce Labs environment, requires no additional configuration on your end and it removes the burden of installing a 3rd party tool.
We are using the [latest version of Appium](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/appium-versions/) to inspect the elements in your application, mirroring the experience of local debugging or attaching 3rd party inspector tools to your native Appium sessions.

<img src={useBaseUrl('img/mobile-apps/Appium-inspector-main.png')} alt="Appium Inspector during a Live Testing Session" width="800"/>

## What You'll Need

- A Sauce Labs paid account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/))
- A native Android, iOS, or iPadOS mobile app.

## Using and accessing Appium Inspector on Real Devices

1. In Sauce Labs click Live and Mobile app testing.
2. Select your native application from the dropdown or go to the App Management page and click Start Testing
3. Select your desired device and click on Start Test from the device tile.
4. Click on Developer Options in the toolbar, when your session has successfully launched and your native application screen is visible.
5. Click on Appium Inspector on the right side, and click Start Inspection, to start your Appium session.
6. Navigate to the desired page/screen in your native application
7. Click Refresh inside the Inspect View element whenever you need to take a new snapshot of your application screen.
8. We will take a snapshot of the displayed page source with all of the View Hierarchy and attributes.

Now you will be able to navigate within your application on the left side throughout the whole session.
If you want to take another snapshot of the screen of your application you just need to click Refresh in the Inspect View.

:::note Note
You must wait for your app to launch before starting Appium Inspector!
:::

## Using the Inspect View

The Inspect View gives you a snapshot of your application screen, which can be used for debugging.
You can hover over the elements, highlight them, or by clicking on these elements inspect your App Source Tree or attributes on the right side.

When you click on the desired UI element we will pin the App Source and the Selected Elements on the right side.

<img src={useBaseUrl('img/mobile-apps/Appium-inspector-inspect-refresh.png')} alt="Appium Inspector Inpect View" width="450"/>

## Using the App Source

The App Source view will get you the detailed breakdown of your native applications view hierarchy in an XML tree structure.
We are using the same getPageSource command as Appium to get the detailed source elements, attributes, and view hierarchy. [See more here.](https://appium.io/docs/en/2.4/commands/base-driver/#getpagesource)

In addition, you can Copy and Download the App Source along with its attributes for seamless debugging and collaboration with colleagues for effective troubleshooting.

<img src={useBaseUrl('img/mobile-apps/Appium-inspector-app-source.png')} alt="Appium Inspector App Source" width="450"/>

## Using Selected Element attributes

When you click on an element in the Inspect view or App Source we will display all the attributes for that given element.
You can find unique locators or IDs for your automation script with the element information.

<img src={useBaseUrl('img/mobile-apps/Appium-inspector-select-element.png')} alt="Appium Inspector Selected Attributes Views" width="450"/>

In addition, this helps to view Accessibility elements in your native application. This allows you to validate what an accessibility tool would see and what type of information can be read from your application source.

List of Selectors: (These can be used for your automated test scripts)

- id
- Accessibility id
- Class Name (Android only)
- Name (iOS only)
- -ios class chain (iOS only)
- -ios predicate string (iOS only)
- Xpath

Attributes: (These help with debugging or deciding what actions you can make with a given Selector)
Displayed
Package
Checkable
Clickable
Index
Focusable
Enabled
Password
Bounds
Focused
Checked
Long-clickable
Test
Class
Scrollable
Selected
Width
Height
x/y coordinates

## Hybrid Apps / WebView

Utilize [Dev Tools](https://docs.saucelabs.com/web-apps/live-testing/dev-tools/) to validate hybrid or web views within native applications.
This feature enables seamless validation of web content integrated within native apps, providing comprehensive testing capabilities for a
smooth user experience across different platforms.

## More Tools

### Find Element

The Find Element functionality allows you to validate locating an element using various locator strategies directly within Appium Inspector.
Once the element is successfully located, you can effortlessly trigger a tap action on it, streamlining the element identification and
interaction process for efficient testing and debugging.

## Limitations

:::note Limitations

- Emulators/Simulators are not supported
- We are always using the [latest version of Appium 2](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/appium-versions/)
- You will not be able to attach your [local Appium Inspector GUI](https://github.com/appium/appium-inspector) to our inspector tools at the moment.
- Webviews and hybrid apps will have additional capture limitations

### Learn more about the open source Appium Inspector here

- [ Open Source Appium Inspector GUI](https://appium.github.io/appium-inspector/)
