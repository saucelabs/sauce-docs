---
id: biometric-authentication
title: Biometric Authentication
sidebar_label: Biometric Authentication
description: Learn how to test facial and fingerprint device authentication.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We provide testing capabilities for mobile app biometric authentication (fingerprint and facial recognition). Please note that not all iOS and Android mobile devices offer this feature.


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))


## Live Testing

|                      | Supported    | Not Supported |   
|----------------------|:------------:|:-------------:|
| Android real devices | &checkmark;  |               |   
| iOS real devices     | &checkmark;  |               |   
| Android emulators    |              | &#x2715;      |
| iOS simulators       |              | &#x2715;      |


To enable biometric authentication for your app:

1. Click **LIVE** > **Mobile App** to navigate to Sauce Labs real devices.
2. If you haven't already, upload your app file.
3. Hover over your app row and click **Settings**.
4. Set **Biometrics Interception** to **Enabled**.
5. Return to the app menu by clicking **Back to App Selection**.
6. Start up your live test session:
    1. Hover over your app and click **Choose Device**.
    1. Choose an available device from the menu.
    1. Click **Launch**.

To initiate a fingerprint or facial recognition action in your live test session:

1. In the toolbar, click the **Authentication** fingerprint icon.
2. Select a response:
    * Select **PASS** to imitate successful authentication.
    * Select **FAIL** to imitate unsuccessful authentication.  

<img src={useBaseUrl('img/mobile-apps/biometric-auth-1.png')} alt="Biometric authorization live testing" width="200"/>
<br/>
<img src={useBaseUrl('img/mobile-apps/biometric-auth-2.gif')} alt="Biometric authorization live testing" width="650"/>

See [Live Mobile App Testing Toolbar](/mobile-apps/live-testing/live-mobile-app-testing/#app-settings) for more information.


## Automated Testing

|                      | Supported    | Not Supported |   
|----------------------|:------------:|:-------------:|
| Android real devices | &checkmark;  |               |   
| iOS real devices     | &checkmark;  |               |  
| Android emulators    | &checkmark;  |               |
| iOS simulators       | &checkmark;  |               |

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

### Real Devices

To enable fingerprint and facial recognition on iOS and Android real devices:

1. Add the `allowTouchIdEnroll` capability to your test configuration and set it to `true`.
2. When your test triggers a biometric prompt event, you can trigger a successful or failed authentication using the following commands:
  * `driver.execute('sauce:biometrics-authenticate=true');` passes a successful authentication to the prompt.
  * `driver.execute('sauce:biometrics-authenticate=false');` passes a failed authentication to the prompt.
3. Sauce Labs intercepts this command to trigger an authentication reponse prior to engaging Appium, which is why the result is not captured in the Appium logs.

<Tabs
  defaultValue="ios"
  values={[
    {label: 'iOS', value: 'ios'},
    {label: 'Android', value: 'android'},
  ]}>

<TabItem value="ios">

```js reference title="Capabilities Example"
https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.ios.sauce.real.conf.js#L25-L26
```

</TabItem>
<TabItem value="android">

An Android demo script will be available soon.

</TabItem>
</Tabs>


## Additional Resources
* [Using Biometric Login on Sauce Labs](https://github.com/saucelabs-training/demo-js/tree/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login) contains Android and iOS device configuration demo scripts for a variety of use cases, including:
    * iOS local simulators
    * iOS simulators in our Sauce Labs Simulator Cloud
    * iOS real devices in our Legacy RDC platform
    * iOS real devices in the Sauce Labs UI
    * Android local emulators
    * Android emulators in the Sauce Labs Emulator Cloud
* [Documentation for iOS simulator Face ID | Appium on GitHub](https://github.com/appium/appium-xcuitest-driver/blob/master/docs/touch-id.md)
