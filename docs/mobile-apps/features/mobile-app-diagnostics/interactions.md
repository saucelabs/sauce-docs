---
id: interactions
title: Interactions
sidebar_label: Interactions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Interactions is a functionality that allows you to record every test session’s action and check how it interacted with the app’s UI. By reviewing the taps you can check if certain interface elements failed to load or crashed.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- A native Android, iOS, or iPadOS mobile app

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

## Interaction Metrics

You can use Interactions to understand what happened in your test session and improve your app's performance, stability, and more. At the top of the [Test Results](/test-results) page, you can see the data on activities that occurred during the testing session. To get more detailed information, click on the dropdown icon next to an action you want to investigate.

<br/><img src={useBaseUrl('img/mobile-apps/interactions-screenshot-3.png')} alt="Mobile app settings navigation" width="800"/>

<br/><img src={useBaseUrl('img/mobile-apps/interactions-screenshot-1.png')} alt="Mobile app settings navigation" width="800"/>

The following table lists the available metrics:

| Name               | Description                                                        |
| :----------------- | :----------------------------------------------------------------- |
| label              | The user-readable label for a particular activity.                 |
| viewTag            | A tag that provides additional information associated with a view. |
| viewId             | Identifier that defines view attributes.                           |
| className          | The class name of an element.                                      |
| contentDescription | The description of an element.                                     |
| xPosition          | The horizontal position of the tap.                                |
| yPosition          | The vertical position of the tap.                                  |
| xPath              | Used to locate an element in the XML structure of the app.         |

:::note
You can use the xPath value to build your Appium test quickly!
:::

## Accessing Interactions Metrics

You can access Interactions metrics from the [Live Test Results](/mobile-apps/live-testing/live-mobile-app-testing/) or [Automated Test Results](/mobile-apps/automated-testing/) page:
<br/><img src={useBaseUrl('img/mobile-apps/DEvice-Vitals-screenshot-2.png')} alt="Mobile app settings navigation" width="200"/>
<br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-7.png')} alt="Mobile app settings navigation" width="200"/>

You can also download the results using the API call below:

```java
 curl --compressed \
-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/insights.json
```

## Limitations

:::note
Webviews and hybrid apps are not supported
:::

## More Information

- [Sauce Labs Test Results](/test-results)
