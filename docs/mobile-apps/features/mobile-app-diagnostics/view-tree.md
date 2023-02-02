---
id: view-tree
title: Explore View Tree
sidebar_label: Explore View Tree
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Explore View Tree is a feature that is designed to help you discover all the visible elements of your mobile application while developing your test scripts. It captures a snapshot of the user interface and allows you to navigate and explore the view objects of your native apps.

Explore View Tree feature allows you to see, debug, analyze or determine the state of individual View components. It also informs you about global changes in the view tree.

:::note
This feature CANNOT be used as Appium Inspector. If you wanna use Appium Inspector please visit the following link: https://github.com/saucelabs/appium-inspector-saucelabs
Such global changes include, for example, a layout of the whole tree.
:::

The feature speeds up your debugging experience of QA SDET for automated test scripts, and expedites the debugging and validating View and UI-related issues. Finally, the Explore feature is a critical factor for easy validation of accessibility labels.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- A native Android, iOS, or iPadOS mobile app

## Using Explore View Tree for Real Devices

By default, the Explore View Tree feature is enabled if the instrumentation feature is enabled.

To enable device instrumentation:

1. On Sauce Labs, click **Live** > **Mobile App**.
2. [Upload your mobile app to Sauce Labs](/mobile-apps/app-storage/) through the UI or CLI.
3. After you’ve uploaded your app, return to the **Live** > **Mobile App** page, hover your mouse over your app, then select **Settings**. <br/><img src={useBaseUrl('img/mobile-apps/networkcapturescr.png')} alt="Mobile app settings navigation" width="600"/>
4. Under **Default Settings**, toggle **Instrumentation** on.
   <br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-1.png')} alt="Mobile app settings navigation" width="600"/>

Now you can start your live or automated testing session. View Tree will be captured and be part of your test results.

:::note
The Explore View Tree feature works for all the automated test framework types.
:::

## Accessing Explore View Tree

You can access the Explore View Tree from the [Live Test Results](/mobile-apps/live-testing/live-mobile-app-testing/) or [Automated Test Results](/mobile-apps/automated-testing/) page.

1. In Sauce Labs, click **LIVE** or **AUTOMATED** and then click **Test Results**.  
   <br/><img src={useBaseUrl('img/mobile-apps/DEvice-Vitals-screenshot-2.png')} alt="Mobile app settings navigation" width="200"/>
   <br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-7.png')} alt="Mobile app settings navigation" width="200"/>

2. Select a test result from the list.
   <br/><img src={useBaseUrl('img/mobile-apps/view-tree-screenshot-1.png')} alt="Mobile app settings navigation" width="800"/>

3. Click on **Explore** button.
   <br/><img src={useBaseUrl('img/mobile-apps/view-tree-screenshot-2.png')} alt="Mobile app settings navigation" width="600"/>

The Explore View Tree feature will display the captured snapshots of detectable view changes:

<br/><img src={useBaseUrl('img/mobile-apps/view-tree-screenshot-4.png')} alt="Mobile app settings navigation" width="700"/>

You can also download the results using the API call below:

```java
 curl --compressed \
-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/insights.json
```

### Explore View Tree Attributes

The following table lists the available attributes:

| Name        | Description                                                                |
| :---------- | :------------------------------------------------------------------------- |
| ID          | The class identifier                                                       |
| Visibility  | A value that checks if the component is present in the View Tree           |
| Focusable   | A value that provides additional information associated with accessibility |
| Alpha       | A value that describes how translucent or opaque the component is          |
| Enabled     | Checks the interactivity of the component                                  |
| ContentDesc | The accessibility description of a UI component                            |
| Text        | A text attribute of a UI component                                         |

## Limitations

<!-- prettier-ignore -->
:::note

- Webviews and hybrid apps will have additional capture limitations.
- Emulators and Simulators are not supported.
:::

## More Information

- [Sauce Labs Test Results](/test-results)
