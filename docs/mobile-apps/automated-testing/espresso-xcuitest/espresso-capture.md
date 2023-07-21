---
id: espresso-capture
title: Espresso Screenshot Capture
sidebar_label: Espresso Screenshot Capture
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

The Espresso Screenshot Capture functionality allows you to take screenshots of errors to support the visual verification of your debugging process.

## Capturing Screenshots

To take screenshots during an Espresso test run, follow the steps below. Make sure to handle exceptions in your test code to ensure a proper test run.

### To capture screenshots:

1. Add the utility class to your project. See our Java example below:

```java reference title="SauceLabsCustomScreenshot Class"
  https://github.com/saucelabs/my-demo-app-android/blob/1.0.13-docs/app/src/androidTest/java/com/saucelabs/mydemoapp/android/screenshot/SauceLabsCustomScreenshot.java
```

2. Add the following code to your Espresso test scripts.

```java
SauceLabsCustomScreenshot.capture("my-screenshot");
```

See our Java example below:

```java reference title="Sample Espresso test script"
  https://github.com/saucelabs/my-demo-app-android/blob/2daaab68f6b75dcd78533dda7ac1715eec070f99/app/src/androidTest/java/com/saucelabs/mydemoapp/android/view/activities/LoginTest.java#L131-L165
```

3. Run your test on [Sauce Labs Real Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/).

4. After the test has run successfully, on the **Test Cases** page, click the **Download Screenshots** tab to download a .zip file with all the screenshots for each test case as shown below:
   <br/><img src={useBaseUrl('img/live-testing/rdc-espresso-capture.png')} alt="Mobile app settings navigation" width="800"/>

You can also use the API to fetch captured screenshots. To fetch the screenshots use the following API request:

```java
 curl --compressed \
-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/screenshots.zip
```

The endpoint will return a .zip file of all screenshots captured during the session.

## Limitations

:::note
The screenshots cannot exceed more than 200 MB in size.
:::
