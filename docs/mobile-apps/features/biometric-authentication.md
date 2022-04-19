---
id: biometric-authentication
title: Biometric Authentication
sidebar_label: Biometric Authentication
description: Learn how to test facial and fingerprint device authentication.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs provides biometrics interception for our customers to:

* Access test flows that are dependent on biometrics support, such as a mandatory security layer.
* Verify that an app responds as expected to biometrics settings (e.g., enabled/disabled and successful/unsuccessful).

Biometrics test support in Sauce Labs is not intended to test actual biometrics values for authentication.


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your mobile app file. If you don't have one on hand, consider using our [React Native Demo App](https://github.com/saucelabs/my-demo-app-rn/releases).


## Live Testing

<p><span className="sauceDBlue">Real Devices Only</span></p>

To use biometric interception in a live mobile app test, you must ensure that the functionality is enabled for your app both through Sauce Labs AND through your app before you can mock the result as passing or failing.

1. In Sauce Labs, click **LIVE** and then click **Mobile App**.
2. On the **App Selection** page, hover over the test and then click **Settings**.

  <img src={useBaseUrl('img/live-testing/live-mobile-app-settings-nav.png')} alt="Mobile app settings navigation" width="650"/>

3. On the **Settings** page, ensure that **Biometrics Interception** is enabled and then return to the **App Selection** page.

  <img src={useBaseUrl('img/live-testing/biometrics-enabled.png')} alt="Biometrics Interception - Enabled" width="650"/>

4. On the **App Selection** test page, hover over the test and then click **Choose Device**.

  <img src={useBaseUrl('img/live-testing/image-injection-choose-device.png')} alt="Image Injection - Choose Device" width="650"/>

5. On the device selection page, hover over a device and then click **Launch**.

  <img src={useBaseUrl('img/live-testing/image-injection-launch.png')} alt="Image Injection - Launch" width="650"/>

    <img src={useBaseUrl('img/mobile-apps/bio-toolbar-icons.png')} alt="Biometric toolbar icons" width="300"/>


1. In the live test window, in the right toolbar, click **More Device Options** and then click **Biometric Authentication**.

  <img src={useBaseUrl('img/live-testing/biometric-toolbar.png')} alt="Image Injection - Launch" width="450"/>

2. In the **Biometric Authentication** window, click **Pass** to imitate successful authentication or click **Fail** to imitate an unsuccessful authentication.

    <img src={useBaseUrl('img/live-testing/biometric-nav.png')} alt="Biometric Authentication" width="450"/>


## Automated Testing

### Real Devices

To enable fingerprint and facial recognition on iOS and Android real devices:

1. Add the `allowTouchIdEnroll` capability to your test configuration and set it to `true`.
  :::note
  Setting `allowTouchIdEnroll` does not update your app's biometric interception setting in Sauce Labs. It only sets the capability for the test in the event that the app setting in Sauce Labs is _different_ from the test script capability.
    * If biometric interception is ENABLED for the app in Sauce Labs, setting `allowTouchIdEnroll=true` or omitting it will have no effect, but setting `allowTouchIdEnroll=false` will disable the enrollment for the test, overriding the app setting.
    * The opposite is true if biometric interception is DISABLED for the app in Sauce Labs.
  :::

  ```js reference title="JavaScript iOS Capabilities Example"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.ios.sauce.rdc.conf.ts#L33
  ```

2. Use the following commands to trigger a successful or failed authentication in response to a biometric prompt:
  * `driver.execute('sauce:biometrics-authenticate=true');` passes a successful authentication to the prompt.
  * `driver.execute('sauce:biometrics-authenticate=false');` passes a failed authentication to the prompt.
3. Sauce Labs intercepts this command to trigger an authentication reponse prior to engaging Appium, which is why the result is not captured in the Appium logs.

The following sample test script shows the selectors for Android and iOS, as well as the command to execute the authentication.

```js reference title="JS-Demo Biometrics Test Sample"
https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.rdc.spec.ts#L25-L41
```


### iOS Simulators

Testing biometric interception on Sauce Labs iOS simulators or on your local machine involves writing your script to ensure biometrics is enabled for both the device and the app, and then simulating either a successful or failed authentication to ensure that the expected behavior results.

1. In your test script, check the device setting for biometrics, as shown in the `prepareBiometrics` function in our demo script:

  ```js reference title="WebdriverIO Biometrics Check Sample"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L10-L31
  ```

  :::note Setting allowTouchIdEnroll capability is optional
  You can set the desired capability `allowTouchIdEnroll` to `true` to enable enrollment by default for your app, but if you are checking the enrollment in your script anyway, this is not required.
  :::

2. If biometrics is disabled, call the `driver.toggleEnrollTouchId(true)` method to enable it.

  ```js reference title="WebdriverIO Toggle Biometrics Sample"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L33-L41
  ```

3. Now that biometrics is enabled for the device, make sure it is also enabled for the app.

  ```js reference title="WebdriverIO Enable Biometrics in App"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L48-L49
  ```

4. Wait for the login screen to appear, then call the `submitBiometrics(true)` method to simulate a successful biometric authentication.

  ```js reference title="WebdriverIO Submit Bio Auth Sample"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L60-L71
  ```

5. Run your test. Call:
  * Local environment: `npm run test.local.ios.simulator`
  * Sauce Labs US Data Center: `npm run test.sauce.ios.simulator.us`
  * Sauce Labs EU Data Center: `npm run test.sauce.ios.simulator.eu`



### Android Emulators

As with iOS, when testing on Android emulators, you can first perform a check to see whether the device is enabled for biometric authentication. The test script in this samples is actually the same script for both iOS and Android -- the only difference is in setting the device enrollment.

1. In your test script, check the device setting for biometrics, as shown in the `prepareBiometrics` function in our demo script:

  ```js reference title="WebdriverIO Biometrics Check Sample"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L10-L31
  ```
2. Android does not have a capability to control the device's biometric enablement. Instead, you must go through the device's enrollment process and call an ADB command to set the PIN values representing the successful and failed authentication. Our demo repo uses a separate script to do this, and then calls the script in the test.

  ```js reference title'"AndroidSettings Biometric Enrollment Script Sample"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/screen-objects/AndroidSettings.ts#L87-L105
  ```

  ```js reference title="Enable Device Biometrics in Test Sample"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L42-L46
  ```

3. Now that biometrics is enabled for the device, make sure it is also enabled for the app.

  ```js reference title="WebdriverIO Enable Biometrics in App"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L48-L49
  ```

4. Wait for the login screen to appear, then call the `submitBiometrics(true)` method to simulate a successful biometric authentication.

  ```js reference title="WebdriverIO Submit Bio Auth Sample"
  https://github.com/saucelabs-training/demo-js/blob/docs-1.1/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L60-L71
  ```

5. Run your test. Call:
  * Local environment: `npm run test.local.ios.simulator`
  * Sauce Labs US Data Center: `npm run test.sauce.ios.simulator.us`
  * Sauce Labs EU Data Center: `npm run test.sauce.ios.simulator.eu`


## Additional Resources
* Our [Biometrics Demo](https://github.com/saucelabs-training/demo-js/tree/docs-1.1/webdriverio/appium-app/examples/biometric-login) contains all the configuration, helper, and test script files demonstrating Biometric Login use cases for both Android and iOS real and virtual devices, including:
    * React Native Sample App for Android and iOS
    * Test script to validate successful biometric login
    * Test script to validate failed biometric login
    * Test script to exit out of biometric auth modal
* [Appium Documentation for iOS simulator Face ID](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/touch-id.md)
