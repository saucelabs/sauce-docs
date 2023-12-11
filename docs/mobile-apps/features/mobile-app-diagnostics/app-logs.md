---
id: app-logs
title: App Logs
sidebar_label: App Logs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

App Logs is a functionality that provides you with a detailed view of logs for your mobile apps. This feature provides you with visibility into events, errors, and warnings that occur during testing, making it easier to troubleshoot and diagnose issues.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- A native Android, iOS, or iPadOS mobile app
- [Instrumentation](/mobile-apps/features/mobile-app-diagnostics/app-logs/#enabling-instrumentation) enabled.

## Accessing App Logs for Real Devices​

To access the App Logs, follow these steps:

1. On Sauce Labs, click **Live** > **Test Results**.

   <br/><img src={useBaseUrl('img/mobile-apps/app-logs-1.png')} alt="App Logs" width="300"/>

2. Click on the device name for the test session that needs debugging.
   <br/><img src={useBaseUrl('img/mobile-apps/app-logs-2.png')} alt="App Logs" width="800"/>

3. Click the **Logs** tab and select **device.log** from the drop down menu.

<br/><img src={useBaseUrl('img/mobile-apps/app-logs-9.png')} alt="App Logs" width="800"/>

The App Logs feature includes different log types, such as errors, warnings, infos, and verbose Logs. Each log type provides a different view of the application logs, allowing you to filter and focus on specific types of information.

You can use the [regrex](https://regex101.com/) functionality to analyze your logs.

## Downloading the App Logs

You can download the App Logs as a text file to save and share with Sauce Labs support for further analysis. This feature allows you to keep a record of the App Logs and use them for future reference or troubleshooting:

<br/><img src={useBaseUrl('img/mobile-apps/app-logs-10.png')} alt="App Logs" width="700"/>

You can also download the results using the API call below and send it to your development team:

```java
Sample Request:

curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/8ed051b303b4414f861e88eeb1732d02/deviceLogs' | json_pp
```

:::note Limitations

- The feature works only with instrumentation enabled.
- Emulators and Simulators are not supported.

:::

## Enabling Instrumentation

1. On Sauce Labs, in the left navigation, click **App Mangement**.

<br/><img src={useBaseUrl('img/mobile-apps/app-logs5.png')} alt="App Logs" width="300"/>

2. Upload your mobile app to Sauce Labs.

<br/><img src={useBaseUrl('img/mobile-apps/app-logs-8.png')} alt="App Logs" width="700"/>

3. After you’ve uploaded your app, hover your mouse over your app, then select **Settings**.

<br/><img src={useBaseUrl('img/mobile-apps/app-logs-6.png')} alt="App Logs" width="700"/>

4.  Under **Real Device Settings** toggle **Instrumentation** to **Enabled**.

<br/><img src={useBaseUrl('img/mobile-apps/app-logs-7.png')} alt="App Logs" width="700"/>
