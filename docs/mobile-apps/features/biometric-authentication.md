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

1. Click **LIVE** > **Mobile App** to navigate to Sauce Labs real devices.
1. If you haven't already, upload your app file.
1. Hover over your app row and click **Settings**.
1. Set **Biometrics Interception** to **Enabled**.
1. Hover over your app and click **Choose Device**.
1. Hover an available device from the menu and click **Launch** to start your live test.
1. Once in the test, if a login screen appears, but the facial or fingerprint recognition prompt does not appear, you may need to allow biometrics in the app itself. For example, in the Sauce Labs My Demo App:
    1. Click **Menu** at the bottom of the device screen.
    1. Choose **FaceID** from the menu.
    1. Enable **Allow login with FaceID**.
    :::note
    In your own app, if the first screen is the login screen and you have not enabled biometrics, you will need to log into the app manually to enable biometrics, then log out to be able to test it. You do not need to access the device settings because Sauce Labs performs that instrumentation automatically when you enable biometric interception for your app in our platform.
    :::
1. Return to the Login screen to trigger the biometric interception prompt, then click the **More Device Options** icon in the right-side toolbar and select the **Biometric Authentication** fingerprint icon.

    <img src={useBaseUrl('img/mobile-apps/bio-toolbar-icons.png')} alt="Biometric toolbar icons" width="300"/>

1. Select a response to send a successful or failed authentication result to the app.  

<img src={useBaseUrl('img/mobile-apps/biometric-auth-1.png')} alt="Biometric authorization live testing" width="500"/>



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
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.ios.sauce.rdc.conf.ts#L33
  ```

2. Use the following commands to trigger a successful or failed authentication in response to a biometric prompt:
  * `driver.execute('sauce:biometrics-authenticate=true');` passes a successful authentication to the prompt.
  * `driver.execute('sauce:biometrics-authenticate=false');` passes a failed authentication to the prompt.
3. Sauce Labs intercepts this command to trigger an authentication reponse prior to engaging Appium, which is why the result is not captured in the Appium logs.

The following sample test script shows the selectors for Android and iOS, as well as the command to execute the authentication.

```js reference title="JS-Demo Biometrics Test Sample"
https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.rdc.spec.ts#L25-L41
```


### iOS Simulators

Testing biometric interception on Sauce Labs iOS simulators or on your local machine involves writing your script to ensure biometrics is enabled for both the device and the app, and then simulating either a successful or failed authentication to ensure that the expected behavior results.

1. In your test script, check the device setting for biometrics, as shown in the `prepareBiometrics` function in our demo script:

  ```js reference title="WebdriverIO Biometrics Check Sample"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L10-L31
  ```

  :::note Setting allowTouchIdEnroll capability is optional
  You can set the desired capability `allowTouchIdEnroll` to `true` to enable enrollment by default for your app, but if you are checking the enrollment in your script anyway, this is not required.
  :::

2. If biometrics is disabled, call the `driver.toggleEnrollTouchId(true)` method to enable it.

  ```js reference title="WebdriverIO Toggle Biometrics Sample"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L33-L41
  ```

3. Now that biometrics is enabled for the device, make sure it is also enabled for the app.

  ```js reference title="WebdriverIO Enable Biometrics in App"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L48-L49
  ```

4. Wait for the login screen to appear, then call the `submitBiometrics(true)` method to simulate a successful biometric authentication.

  ```js reference title="WebdriverIO Submit Bio Auth Sample"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L60-L71
  ```

5. Run your test. Call:
  * Local environment: `npm run test.local.ios.simulator`
  * Sauce Labs US Data Center: `npm run test.sauce.ios.simulator.us`
  * Sauce Labs EU Data Center: `npm run test.sauce.ios.simulator.eu`



### Android Emulators

As with iOS, when testing on Android emulators, you can first perform a check to see whether the device is enabled for biometric authentication. The test script in this samples is actually the same script for both iOS and Android -- the only difference is in setting the device enrollment.

1. In your test script, check the device setting for biometrics, as shown in the `prepareBiometrics` function in our demo script:

  ```js reference title="WebdriverIO Biometrics Check Sample"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L10-L31
  ```
2. Android does not have a capability to control the device's biometric enablement. Instead, you must go through the device's enrollment process and call an ADB command to set the PIN values representing the successful and failed authentication. Our demo repo uses a separate script to do this, and then calls the script in the test.

  ```js reference title'"AndroidSettings Biometric Enrollment Script Sample"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/screen-objects/AndroidSettings.ts#L87-L105
  ```

  ```js reference title="Enable Device Biometrics in Test Sample"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L42-L46
  ```

3. Now that biometrics is enabled for the device, make sure it is also enabled for the app.

  ```js reference title="WebdriverIO Enable Biometrics in App"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L48-L49
  ```

4. Wait for the login screen to appear, then call the `submitBiometrics(true)` method to simulate a successful biometric authentication.

  ```js reference title="WebdriverIO Submit Bio Auth Sample"
  https://github.com/saucelabs-training/demo-js/blob/main/webdriverio/appium-app/examples/biometric-login/test/specs/biometrics.emusim.spec.ts#L60-L71
  ```

5. Run your test. Call:
  * Local environment: `npm run test.local.ios.simulator`
  * Sauce Labs US Data Center: `npm run test.sauce.ios.simulator.us`
  * Sauce Labs EU Data Center: `npm run test.sauce.ios.simulator.eu`


## Additional Resources
* Our [Biometrics Demo](https://github.com/saucelabs-training/demo-js/tree/main/webdriverio/appium-app/examples/biometric-login) contains all the configuration, helper, and test script files demonstrating Biometric Login use cases for both Android and iOS real and virtual devices, including:
    * React Native Sample App for Android and iOS
    * Test script to validate successful biometric login
    * Test script to validate failed biometric login
    * Test script to exit out of biometric auth modal
* [Appium Documentation for iOS simulator Face ID](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/touch-id.md)
