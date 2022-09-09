---
id: espresso-capture
title: Espresso Screenshot Capture
sidebar_label: Espresso Screenshot Capture
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The Espresso Screenshot Capture functionality allows you to easily take a snapshot of the error as to support with visual verifications of your debugging process. These screenshots also help in identifying any errors or bugs within your application.


## Capturing Screenshots

To take screenshots during an Espresso test run, Sauce Labs provides the code you can add to your Espresso tests:

```bash
```

See our [sample app repository](https://github.com/saucelabs/my-demo-app-android/blob/1d2d85aad21bc76878d6aa4d77aefd889b59d3c9/app/src/androidTest/java/com/saucelabs/mydemoapp/android/screenshot/SauceLabsCustomScreenshot.java) and copy the utility class into your project. Make sure to handle exceptions in your test code to ensure a proper test run. This feature is supported on Android 4.3 and above.

#### Perform the following steps to edit your scripts and capture screenshots:

1. Add the following class to your project. (See our Java an example [here](https://github.com/saucelabs/my-demo-app-android/blob/2daaab68f6b75dcd78533dda7ac1715eec070f99/app/src/androidTest/java/com/saucelabs/mydemoapp/android/screenshot/SauceLabsCustomScreenshot.java)).
2. Modify your test scripts to capture screenshots. To take screenshots during an Espresso test run, Sauce Labs provides the code you will find below to add to your Espresso tests. (See our demo app example [here](https://github.com/saucelabs/my-demo-app-android/blob/2daaab68f6b75dcd78533dda7ac1715eec070f99/app/src/androidTest/java/com/saucelabs/mydemoapp/android/view/activities/LoginTest.java)).
   
```bash
SauceLabsCustomScreenshot.capture("my-screenshot");
```

3.  Run your test on [Sauce Labs Real Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/).

4. After the test has run successfully, on your **Test Cases** page, click the **Download Screenshots** tab to download a zip file with all the screenshots for each test case as shown below:
<br/><img src={useBaseUrl('img/live-testing/rdc-espresso-capture.png')} alt="Mobile app settings navigation" width="800"/>
   


You can also use the API to fetch captured screenshots. To fetch the screenshots through your CLI, use [Get All Screenshots](https://docs.saucelabs.com/dev/api/jobs/#get-all-screenshots) and [List Job Assets](https://docs.saucelabs.com/dev/api/jobs/#list-job-assets) endpoints (you may also use the [RDC endpoints](https://docs.saucelabs.com/dev/api/rdc/#get-a-specific-real-device-job) directly). It will return a zip file of all screenshots captured during the session.
   

## Limitations

:::note 
* The screenshots cannot exceed more than 200 MB in size.
* You cannot change the filename of the screenshot. The code we provide allows you to supply the capture method with a string, but currently the string is ignored. We use a counter for the screenshot name. 
:::
