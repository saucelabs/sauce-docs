---
id: network-capture
title: Network Traffic Capture 
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Network Traffic Capture is a functionality that gives you the ability to record network traffic and HTTP/HTTPS request headers during your native Android and iOS/iPadOS mobile app app tests. This provides granular insight into your app’s behavior, facilitates debugging, and helps you determine which development team is responsible for application failure.

With this feature, traffic is recorded on our side and exposes the HAR file through your test’s endpoint, producing HTTP traffic information to help you troubleshoot. 


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* A native mobile app that makes HTTP/HTTPS requests.


## Using Network Traffic Capture

To enable network traffic capturing in your tests:

1. On Sauce Labs, click **Live** > **Mobile App**.
2. [Upload your mobile app to Sauce Labs](/mobile-apps/app-storage) through the UI or CLI.
3. After you’ve uploaded your app, return to the **Live** > **Mobile App** page, hover your mouse over your app, then select **Settings**. 

   <img src={useBaseUrl('img/mobile-apps/networkcapturescr2.png')} alt="Mobile app settings navigation" width="800"/>


4. Under **Default Settings**, toggle Instrumentation and Network Capture to enable the feature. 

   <img src={useBaseUrl('img/mobile-apps/networkcapturescr.png')} alt="Mobile app settings navigation" width="800"/>

5. For Automated Testing only: add the networkCapture capability to your test script. Click the link below corresponding to your framework:
   
   * [Appium](/dev/test-configuration-options/#network-capture)
   * Espresso via saucectl (coming soon)
   * XCUITest via saucectl (coming soon)
   

Now you can start your live or automated testing session.Your network logs will be captured and displayed in the test results page. 


## Accessing HAR Files

To download HAR files from Sauce Labs:
1. Navigate to **Test Results**.
2. Select the applicable test.
3. Click the **Network** tab in the bottom to preview network calls.
4. Click the logs tab on the right panel and select “network.har” from the dropdown menu to download the report.
   

You can also download a HAR file programmatically using the following API request:

```
curl --compressed -O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/network.har
```

   
### Viewing HAR Files

You need a HAR viewer to read HAR files. Sauce Labs provides a [React Network Viewer](https://opensource.saucelabs.com/network-viewer/) HAR viewer for your convenience. For step-by-step usage instructions, see our [Visualize HAR Files with the New React Network Viewer blog article](https://opensource.saucelabs.com/blog/react_network_viewer/).

Alternatively, some other commonly used HAR viewers include:
* Chrome devtools builtin [HAR imports](https://developer.chrome.com/blog/new-in-devtools-62/#har-imports)
* Google Admin Toolbox [HAR Analyzer](https://toolbox.googleapps.com/apps/har_analyzer/)
* Software is Hard blog [HTTP Archive Viewer](http://www.softwareishard.com/har/viewer/)
* Firefox network monitoring builtin [HAR imports](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html)

## HAR Files

[HTTP Archive Format (HAR) files](https://en.wikipedia.org/wiki/HAR_(file_format)) collect all network requests and responses made and received by the browser during testing. HAR files offer useful debugging information, such as:
* Identifying browser requests that time out
* Pinpointing requests slowing down the loading process
* Locating faulty API calls

## Limitations



:::caution
abc
:::