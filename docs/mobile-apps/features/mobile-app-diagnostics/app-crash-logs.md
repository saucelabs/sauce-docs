---
id: app-crash-logs
title: App Crash Logs
sidebar_label: App Crash Logs
---

import useBaseUrl from '@docusaurus/useBaseUrl';


In our latest Beta Program with App Crash Logs feature allows for the automatic capture and display of crash data during both live and automated testing on Sauce Labs' Real Device Cloud (RDC) platform, eliminating the need for integrating an SDK or connecting crash reporting tools to our system.

The App Crash Logs feature provides a centralized view and a wide range of app diagnostic signals to help teams speed up their debugging process and reduce the time it takes to resolve issues. Our goal is to create faster feedback loops for developers so that they can identify risks and ensure coverage early on in the development cycle. With our new capability, teams can prioritize errors, crashes, and test failures with complete data and context, focusing on the ones that matter the most.

Our tool is capable of detecting and recording fatal errors (crashes) that occur during testing of iOS and Android apps. The call stack details are then stored in a crash.log file along with the test results. Additionally, all non-fatal errors and warnings originating from the native application are also made visible through our interface. This allows for easy debugging and integration with other Mobile App Diagnostics components, allowing you to identify and resolve issues more efficiently.


## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- A native Android, iOS, or iPadOS mobile app
- Make sure instrumentation is enabled, no other configuration is required.

## Viewing the App Crash Logs for Real Devices​

The App Crash logs feature is automatically enabled when the instrumentation feature is enabled. Whenever a crash is detected, our system will display an App Crashed label for the corresponding test result, regardless of the test's status.

<br/><img src={useBaseUrl('img/mobile-apps/app-crash-scr1.png')} alt="Mobile app settings navigation" width="900"/>

When you navigate to the [Live Test Results](/mobile-apps/live-testing/live-mobile-app-testing/) or [Automated Test Results](/mobile-apps/automated-testing/) page, you can view all the collected crashes in a centralized location. The collected crashes are presented in the context of their respective test cases, videos, and interactions. This centralized view is designed to enable efficient collaboration within your team and improve time to resolution for any issues that may arise.

<br/><img src={useBaseUrl('img/mobile-apps/app-crash-scr2.png')} alt="Mobile app settings navigation" width="900"/>

The crash.json log provides detailed information on the stack trace, methods, classes, and lines of code that were being executed before the fatal error occurred. This detailed information facilitates the identification of the root cause of the crash, enabling your team to address the underlying issues in a timely and effective manner.

## Downloading the App Crash Log

You can download the device log as a text file to save and share with Sauce Labs support for further analysis. This feature allows you to keep a record of the device logs and use them for future reference or troubleshooting:

<br/><img src={useBaseUrl('img/mobile-apps/app-crash-scr3.png')} alt="Mobile app settings navigation" width="700"/>

:::note
You can also download the results using the API call below and send it to your development team:
```java
curl --compressed \
-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/crash.log`
```
:::

## Limitations

:::note
- Does not capture hangs and cross-platform development frameworks.
- Emulators/Simulators are not supported.

:::

## More Information

- [Sauce Labs Test Results](/test-results)