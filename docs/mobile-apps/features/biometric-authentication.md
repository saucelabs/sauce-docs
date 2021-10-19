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

To enable Touch ID and Face ID on Sauce Labs iOS simulators or on your local machine, set the desired capability `allowTouchIdEnroll` to `true`. When the simulator starts, Touch ID enrollment will be enabled by default.

You can also toggle Touch ID enrollment during a test session by calling, for example, the WebdriverIO client method `driver.toggleEnrollTouchId(true)`. More examples in different programming languages can be found [here](http://appium.io/docs/en/commands/device/simulator/toggle-touch-id-enrollment/#toggle-touch-id-enrollment).

1. Add the `allowTouchIdEnroll` capability in your test script and set it to `true`.
  ```js
  allowTouchIdEnroll: true,
  ```
2. Use the `driver.toggleEnrollTouchId` method with a value of `true` or `false` in your test script to toggle the Touch ID enrollment during the test.
  ```js reference
  https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/appium-app/examples/biometric-login/test/specs/touch.face.id.spec.js#L5-L15
  ```
3. To run your test locally, call `npm run test.local.ios.simulator`. To run your test on an Sauce Labs iOS simulator, call one of the following data centers, based on your location:
    * US Data Center: `npm run test.sauce.ios.simulator.us`
    * EU Data Center: `npm run test.sauce.ios.simulator.eu`

For additional sample tests and configurations, see our [demo repo](https://github.com/saucelabs-training/demo-js/tree/main/webdriverio/appium-app/examples/biometric-login).


### Android Emulators

Android emulators do not have a capability to enable Touch ID enrollment. Rather, you must engage the device settings to enable Fingerprint enrollment and then use a command to emulate the fingerprint with a PIN.

To enable biometric authentication on Android emulators:

1. Open an emulator.  
2. Activate Screenlock by clicking the three dots icon, then choose **Settings** > **Security**.
3. Go to **Fingerprint** to add a new fingerprint.
4. When prompted to place your finger on the scanner, emulate the fingerprint using this ADB command:
  ```js
  adb -e emu finger touch <finger_id>
  ```
  For example, `adb -e emu finger touch 1234` sets `1234` as the virtual fingerprint. When you test the fingerprint in your automation script, use this value in your `adb` command for a successful authentication, or an incorrect value to test a failed authentication.
  :::note
  Make sure you have included the helper command to allow ADB commands in your script:
  ```js reference
  https://github.com/saucelabs/sample-app-mobile/blob/518ff8950374d472afbde22c93014c15a44f72c8/tests/e2e/screenObjects/AndroidSettings.js#L141-L149
  ```
  :::

5. After adding the fingerprint, the emulator displays a fingerprint detected message.  
6. Return to your Android app, navigate to an action that requires fingerprint authentication, and execute the same command on the app screen.

```js reference
https://github.com/saucelabs/sample-app-mobile/blob/518ff8950374d472afbde22c93014c15a44f72c8/tests/e2e/screenObjects/AndroidSettings.js#L18-L35
```



## Additional Resources
* [Using Biometric Login on Sauce Labs](https://github.com/saucelabs-training/demo-js/tree/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login) contains Android and iOS device configuration demo scripts for a variety of use cases, including:
    * iOS local simulators
    * iOS simulators in our Sauce Labs Simulator Cloud
    * iOS real devices in our Legacy RDC platform
    * iOS real devices in the Sauce Labs UI
    * Android local emulators
    * Android emulators in the Sauce Labs Emulator Cloud
* [Documentation for iOS simulator Face ID | Appium on GitHub](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/touch-id.md)
