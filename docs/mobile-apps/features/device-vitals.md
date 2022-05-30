---
id: device-vitals
title: Device Vitals
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Device Vitals is a functionality that gives you the ability to debug and observe an app’s performance during test execution for both, [Live](/mobile-apps/live-testing/live-mobile-app-testing/) and [Automated](/mobile-apps/automated-testing/) testing. With this feature, the app's performance is recorded on our side during the test session and displayed for your test results.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* A native Android, iOS, or iPadOS mobile app
  
## Using App Performance on Real Devices

App performance is enabled by default if you have the instrumentation feature enabled.
If Instrumentation is disabled, follow the steps below to enable it: 

1. On Sauce Labs, click **Live** > **Mobile App**.
2. [Upload your mobile app to Sauce Labs](/mobile-apps/app-storage/) through the UI or CLI.
3. After you’ve uploaded your app, return to the **Live** > **Mobile App** page, hover your mouse over your app, then select **Settings**. <br/><img src={useBaseUrl('img/mobile-apps/networkcapturescr.png')} alt="Mobile app settings navigation" width="600"/>
4. Under **Default Settings**, toggle **Instrumentation** on. 
   <br/><img src={useBaseUrl('img/mobile-apps/Device-Vitals-screenshot-1.png')} alt="Mobile app settings navigation" width="600"/>

Now you can start your live or automated testing session. Your device vitals will be captured and be part of your test results page. 

## Accessing the App Performance metrics 

The device vitals recording will be included in the test results page. You will be able to compare your results and analyze the app performance.

## Limitations

:::note 
* Emulators and Simulators are not yet supported. 
* Cross-browser testing is not yet available. 
:::

## More Information
* [Sauce Labs Test Results](/test-results)
