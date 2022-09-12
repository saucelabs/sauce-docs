---
id: espresso-capture
title: Espresso Screenshot Capture
sidebar_label: Espresso Screenshot Capture
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The Espresso Screenshot Capture functionality allows you to take screenshots of errors to support the visual verification of your debugging process. These screenshots also help to identify any errors or bugs within your application.


## Capturing Screenshots

To take screenshots during an Espresso test run, follow the steps below. Make sure to handle exceptions in your test code to ensure a proper test run.

### To capture screenshots:

1. Add the utility class to your project. See our Java example on [GitHub](https://github.com/saucelabs/my-demo-app-android/blob/2daaab68f6b75dcd78533dda7ac1715eec070f99/app/src/androidTest/java/com/saucelabs/mydemoapp/android/screenshot/SauceLabsCustomScreenshot.java).
2. Add the following code to your Espresso test scripts. See our demo app example on [GitHub](https://github.com/saucelabs/my-demo-app-android/blob/2daaab68f6b75dcd78533dda7ac1715eec070f99/app/src/androidTest/java/com/saucelabs/mydemoapp/android/view/activities/LoginTest.java).
   
```bash
SauceLabsCustomScreenshot.capture("my-screenshot");
```

3.  Run your test on [Sauce Labs Real Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/).

4. After the test has run successfully, on the **Test Cases** page, click the **Download Screenshots** tab to download a .zip file with all the screenshots for each test case as shown below:
<br/><img src={useBaseUrl('img/live-testing/rdc-espresso-capture.png')} alt="Mobile app settings navigation" width="800"/>
   


You can also use the API to fetch captured screenshots. To fetch the screenshots through your CLI, use the [Get All Screenshots](https://docs.saucelabs.com/dev/api/jobs/#get-all-screenshots) and [List Job Assets](https://docs.saucelabs.com/dev/api/jobs/#list-job-assets) endpoints (you may also use the [RDC endpoints](https://docs.saucelabs.com/dev/api/rdc/#get-a-specific-real-device-job) directly). The endpoints will return a .zip file of all screenshots captured during the session.
   

## Limitations

:::note 
* The screenshots cannot exceed more than 200 MB in size.
* You cannot change the filename of the screenshot. The code we provide allows you to supply the capture method with a string, but currently the string is ignored. We use a counter for the screenshot name. This is a known bug.
:::
