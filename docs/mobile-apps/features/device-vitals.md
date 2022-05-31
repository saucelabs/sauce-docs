---
id: device-vitals
title: Device Vitals
sidebar_label: Device Vitals
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Device Vitals is a functionality that gives you the ability to debug and observe a mobile app’s performance during test execution for both, [Live](/mobile-apps/live-testing/live-mobile-app-testing/) and [Automated](/mobile-apps/automated-testing/) testing. With this feature, the app's performance is recorded on our side during the test session and displayed for your test results.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* A native Android, iOS, or iPadOS mobile app
  
## Using Device Vitals for Real Devices

By default, Device Vitals is enabled if the instrumentation feature is enabled.
To enable device instrumentation:

1. On Sauce Labs, click **Live** > **Mobile App**.
2. [Upload your mobile app to Sauce Labs](/mobile-apps/app-storage/) through the UI or CLI.
3. After you’ve uploaded your app, return to the **Live** > **Mobile App** page, hover your mouse over your app, then select **Settings**. <br/><img src={useBaseUrl('img/mobile-apps/networkcapturescr.png')} alt="Mobile app settings navigation" width="600"/>
4. Under **Default Settings**, toggle **Instrumentation** on. 
   <br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-1.png')} alt="Mobile app settings navigation" width="600"/>

Now you can start your live or automated testing session. Your Device Vitals will be captured and be part of your test results. 

## Device Vitals Metrics Overview

When enabled, Device Vitals functionality uses metrics to monitor resources and gives you valuable insight into app’s current performance. The Device Vitals functionality exposes a number of metrics, including :

* CPU Performance
* Memory Performance
* Responsivenes <span className="sauceDBlue">Android Only</span>

### CPU Performance
CPU Performance determines how quickly the CPU can retrieve and interpret instructions. It shows the average CPU utilization by computations of the app. This functionality detects CPU leaks and over-usage which lead to overheating, battery drains, crashes, and performance issues.

<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-4.png')} alt="Mobile app settings navigation" width="600"/>

### Memory Performance
This metric determines the amount of physical memory allocated to the app’s process. It allows you to track and analyze your memory footprint so you can reduce the memory leaks efficiently. You can also utilize the charts to identify the location of outliers. 

<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-5.png')} alt="Mobile app settings navigation" width="600"/>

### Responsivenes <span className="sauceDBlue">Android Only</span>
The Responsiveness metric allows you to quickly assess the app’s health by tracking how long it takes for an app to respond to action and monitoring the delay of the app’s UI responsiveness. Currently, this metric is only available for Android devices.

<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-6.png')} alt="Mobile app settings navigation" width="600"/>

## Accessing Device Vitals Metrics

You can access Device Vitals metrics from the Test Results page:
<br/><img src={useBaseUrl('img/mobile-apps/DEvice-Vitals-screenshot-2.png')} alt="Mobile app settings navigation" width="200"/>

You will be able to compare your results and analyze the app performance:
<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-Screenshot-3.png')} alt="Mobile app settings navigation" width="800"/>

## Limitations

:::note 
* Emulators and Simulators are not yet supported. 
* Cross-browser testing is not yet available. 
:::

## More Information
* [Sauce Labs Test Results](/test-results)
