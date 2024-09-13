---
id: device-vitals
title: Device Vitals
sidebar_label: Device Vitals
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

Device Vitals is a functionality that allows you to debug and observe an app’s performance during test execution for both, [Live](/mobile-apps/live-testing/live-mobile-app-testing/) and [Automated](/mobile-apps/automated-testing/) testing. With this feature, the app's performance is recorded during the test session and displayed for your test results.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- A native Android, iOS, or iPadOS mobile app

## Using Device Vitals for Real Devices

To use Device Vitals, you must ensure that the functionality is enabled for your app.

1. In Sauce Labs, from the left navigation, click **App Management**.
   <img src={useBaseUrl('img/mobile-apps/app-management.png')} alt="App Management" width="700"/>
2. Upload your mobile app.
   <img src={useBaseUrl('img/mobile-apps/app-logs-8.png')} alt="App Logs" width="700"/>
3. After you’ve uploaded your app, locate it in the table and select **Settings** from the corresponding row.
   <img src={useBaseUrl('img/mobile-apps/app-management-select-settings.png')} alt="Select Settings" width="700"/>
4. Under **Real Device Settings** first enable **Instrumentation** and then toggle **Device Vitals** on.
   <img src={useBaseUrl('img/mobile-apps/device-vitals-app-setting.png')} alt="Device Vitals App Setting" width="700"/>

Now you can start your live or automated testing session. Your Device Vitals will be captured and be part of your test results.

## Device Vitals Metrics Overview

When enabled, Device Vitals functionality uses metrics to monitor resources and gives you valuable insight into app’s current performance. The Device Vitals functionality exposes a number of metrics, including:

- CPU Performance
- Memory Performance
- Responsiveness <span className="sauceGreen">Android Only</span>

### CPU Performance

CPU Performance determines how quickly the CPU can retrieve and interpret instructions. It shows the average CPU utilization by computations of the app. This functionality detects CPU leaks and over-usage which lead to overheating, battery drains, crashes, and performance issues.

<br/><img src={useBaseUrl('img/mobile-apps/Device-vitals-screenshot-4.png')} alt="Mobile app settings navigation" width="600"/>

### Memory Performance

This metric determines the amount of physical memory allocated to the app’s process. It allows you to track and analyze your memory footprint so you can reduce the memory leaks efficiently. You can also utilize the charts to identify the location of outliers.

<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-5.png')} alt="Mobile app settings navigation" width="600"/>

### Responsiveness

<span className="sauceGreen">Android Only</span>

The Responsiveness metric allows you to quickly assess the app’s health by tracking how long it takes for an app to respond to action and monitoring the delay of the app’s UI responsiveness. Currently, this metric is only available for Android devices.

<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-6.png')} alt="Mobile app settings navigation" width="600"/>

## Accessing Device Vitals Metrics

You can access Device Vitals metrics from the [Live Test Results](/mobile-apps/live-testing/live-mobile-app-testing/) or [Automated Test Results](/mobile-apps/automated-testing/) page:
<br/><img src={useBaseUrl('img/mobile-apps/DEvice-Vitals-screenshot-2.png')} alt="Mobile app settings navigation" width="200"/>
<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-7.png')} alt="Mobile app settings navigation" width="200"/>

You will be able to compare your results and analyze the app performance:
<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-Screenshot-3.png')} alt="Mobile app settings navigation" width="800"/>

You can also download the results using the API call below:

```java
 curl --compressed \
-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/insights.json
```

## Limitations

:::note

- Emulators and Simulators are not supported.
- Cross-browser testing is not available.

:::

## More Information

- [Sauce Labs Test Results](/test-results)
