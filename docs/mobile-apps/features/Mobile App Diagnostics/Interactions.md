---
id: interactions
title: Interactions
sidebar_label: Interactions
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Interactions is a functionality that allows you to record every test session’s action and check how it interacted with the app’s UI. By reviewing the taps you can check if certain interface features failed to load or crashed.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* A native Android, iOS, or iPadOS mobile app
  
## Using Interactions for Real Devices

By default, the Interactions feature is enabled if the instrumentation feature is enabled.
To enable device instrumentation:

1. On Sauce Labs, click **Live** > **Mobile App**.
2. [Upload your mobile app to Sauce Labs](/mobile-apps/app-storage/) through the UI or CLI.
3. After you’ve uploaded your app, return to the **Live** > **Mobile App** page, hover your mouse over your app, then select **Settings**. <br/><img src={useBaseUrl('img/mobile-apps/networkcapturescr.png')} alt="Mobile app settings navigation" width="600"/>
4. Under **Default Settings**, toggle **Instrumentation** on. 
   <br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-1.png')} alt="Mobile app settings navigation" width="600"/>

Now you can start your live or automated testing session. Interactions will be captured and be part of your test results.

:::note
The Interactions feature works for all the automated test framework types. 
:::

## Integration Metrics

Just by looking at the Interactions you can immediately understand what happened in your test session and improve your app's performance, stability, and more. At the top of the [Test Results](/test-results) page, you can see the data on activities (taps) that occurred during the testing session. To get more detailed information, click on the dropdown icon next to an action tap you want to investigate.

<br/><img src={useBaseUrl('img/mobile-apps/interactions-screenshot-3.png')} alt="Mobile app settings navigation" width="800"/>

<br/><img src={useBaseUrl('img/mobile-apps/interactions-screenshot-1.png')} alt="Mobile app settings navigation" width="800"/>

The following table describes the parameter list:

|Name|Description|
|:---|:---|
|Label|The user-readable label for a particular activity.|
|View Tag|A tag that provides an extra piece of information that can be associated with a view|
|viewID|Identifier that defines view attributes.|
|className|A parameter that specifies the class name of an element.|
|contentDescription|A parameter that is used to describe a visual element.|
|xPosition|Defines the horizontal position of the tap.|
|yPosition|Defines the vertical position of the tap.|
|Xpath|A path that identifies various elements or attributes. XML Path Language uses a non-XML syntax to provide a flexible way of addressing different parts of an XML.|

:::note
You can copy the xPath and pase it to an Appium test and have it working in no time! 
:::

## Accessing Interactions Metrics

You can access Interactions metrics from the [Live Test Results](/mobile-apps/live-testing/live-mobile-app-testing/) or [Automated Test Results](/mobile-apps/automated-testing/) page:
<br/><img src={useBaseUrl('img/mobile-apps/DEvice-Vitals-screenshot-2.png')} alt="Mobile app settings navigation" width="200"/>
<br/><img src={useBaseUrl('img/mobile-apps/DEvice-Vitals-screenshot-7.png')} alt="Mobile app settings navigation" width="200"/>


You can also download the results using the API call below: 

 ```java
  curl --compressed \
-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/insights.json
  ```


## Limitations

:::note 
* Webviews and hybrid apps are not supported
:::

## More Information
* [Sauce Labs Test Results](/test-results)
