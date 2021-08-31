---
id: biometric-authentication
title: Biometric Authentication
sidebar_label: Biometric Authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We provide testing capabilities for mobile app biometric authentication - fingerprint and facial recognition. Please note that not all iOS and Android mobile devices offer Touch ID and Face ID.

:::caution **Security Notice**

KeyStore is normally used to implement and store fingerprint and facial recognition user biometrics for mobile apps. Because this is a cloud security risk, Sauce Labs does not mock the KeyStore on our real devices for supporting fingerprint and facial recognition; the use of KeyStore on our real devices is not supported.
:::

## Live Testing

|                      | Supported | Not Supported |   
|----------------------|:---------:|:-------------:|
| Android real devices |     &checkmark;     |               |   
| iOS real devices     |     &checkmark;     |             |   
| Android emulators    |           |   &#x2715;          |
| iOS simulators       |           |   &#x2715;      |


To enable biometric authentication:

1. Click **LIVE** > **Mobile App** to navigate to Sauce Labs real devices.
2. If you haven't already, upload your app file.
3. Hover your mouse over the line item for your app > Click **Settings**.
4. Set **Biometrics Interception** to **Enabled**.
5. Return to the app menu by clicking **Back to App Selection**.
6. Start up your live test session. Hover your mouse over your app > Click **Choose Device** > Select your device > Click **Launch**.

To initiate a fingerprint or facial recognition action in your live test session:

1. In the toolbar, click the **Authentication** fingerprint icon.
2. Select a response:
    1. When you select **PASS**, you're setting biometric authentication will have been successful.
    2. When you select **FAIL**, you're setting biometric authentication to fail.  

<img src={useBaseUrl('img/mobile-apps/biometric-auth-1.png')} alt="Biometric authorization live testing" width="200"/>
<br/>
<img src={useBaseUrl('img/mobile-apps/biometric-auth-2.gif')} alt="Biometric authorization live testing" width="650"/>

See [Live Mobile App Testing Toolbar](/mobile-apps/live-testing/live-mobile-app-testing/#app-settings) for more information.


## Automated Testing

|                      | Supported | Not Supported |   
|----------------------|:---------:|:-------------:|
| Android real devices |          |          &#x2715;       |   
| iOS real devices     |    &checkmark;      |             |   
| Android emulators    |     &checkmark;       |            |
| iOS simulators       |     &checkmark;       |       |

### iOS Simulators

To enable Touch ID and Face ID on Sauce Labs iOS simulators or on your local machine, you need to set the desired capability `allowTouchIdEnroll` to true. When the simulator starts, Touch ID enrollment will be enabled by default.

You can also toggle Touch ID enrollment during a test session by calling, for example, the WebdriverIO client method `driver.toggleEnrollTouchId(true)`. More examples in different programming languages can be found [here](http://appium.io/docs/en/commands/device/simulator/toggle-touch-id-enrollment/#toggle-touch-id-enrollment).

1. Add the `allowTouchIdEnroll` capability in your test script and set it to true. Example:
  ```js
  allowTouchIdEnroll: true,
  ```
2. When starting the device through the capabilities, or when you are running your test runtime, add the `driver.toggleEnrollTouchId` capability and set it to true. A full code spec example is available [here](https://github.com/saucelabs-training/demo-js/blob/master/webdriverio/appium-app/examples/biometric-login/test/specs/touch.face.id.spec.js). Example:
  ```js
  driver.toggleEnrollTouchId(true);
  ```
3. To run your test locally, call `npm run test.local.ios.simulator`. To run your test on an Sauce Labs iOS simulator, call one of the following data centers, based on your location:
    * US Data Center: `npm run test.sauce.ios.simulator.us`
    * EU Data Center: `npm run test.sauce.ios.simulator.eu`
4. Try running one of the below example scripts, which demonstrate the default capabilities needed to run automated tests on iOS simulators.

  <details><summary><strong>Click here</strong> to see iOS simulator test examples.</summary>

  ```js reference
  https://github.com/saucelabs-training/demo-js/blob/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.ios.sauce.sim.conf.js
  ```
  </details>

<br/>

### Android Emulators

Android emulators differ from iOS simulators in that:
* They do not have a one-off capability that enables Touch ID authentication.
* By default, you'd need to execute the same steps as you would on a physical mobile device (i.e., enabling a pin and the fingerprint) before you can use it in your tests.
* Android versions differ in their methods of enabling Fingerprint, particularly in the Fingerprint wizard steps.

To enable biometric authentication on Android emulators:

1. Open an emulator.  
2. Activate Screenlock by clicking the three dots icon > **Settings** > **Security**.
3. Go to **Fingerprint** to add a new fingerprint.
4. When prompted to place your finger on the scanner, emulate the fingerprint using this `adb` command.
  ```js
  adb -e emu finger touch <finger_id>
  ```
5. For example, `adb -e emu finger touch 1234`. The automation script would use `1234` as the fingerprint. Make sure you remember the fingerprint number you've selected; when you add the fingerprint through `adb`, you'll need to enter it there.  
6. At this point, you should see a fingerprint detected message.  
7. Return to your Android app, navigate to an action that requires fingerprint authentication, and execute the same command on the app screen.

In the script below, you'll see that the device API level is called out; each Android OS version has a corresponding API level, which may need to be reflected in your code. For more information, see [Android Platform codenames, versions, API levels, and NDK releases](https://source.android.com/setup/start/build-numbers#platform-code-names-versions-api-levels-and-ndk-releases).

```js
enableBiometricLogin() {
    if (driver.capabilities.deviceApiLevel < 26) {
        // Open the settings screen
        this.executeAdbCommand('am start -a android.settings.SECURITY_SETTINGS');
        this.waitAndClick('Fingerprint');
        this.fingerPrintWizardSevenOrLower(DEFAULT_PIN);
    } else {
        // Open the settings screen and set screen lock to pin
        this.executeAdbCommand(`am start -a android.settings.SECURITY_SETTINGS && locksettings set-pin ${DEFAULT_PIN}`);
        this.waitAndClick('Fingerprint');
        this.fingerPrintWizardEightOrHigher(DEFAULT_PIN);
    }

    // We need to end this method where we started it, which is the current running app
    // Open the app again
    driver.launchApp();
}
```

Try running one of the below example scripts, which demonstrate the default capabilities needed to run automated tests on Android emulators.

  <details><summary><strong>Click here</strong> to see the full Android emulator test examples</summary>

  ```js reference
  https://github.com/saucelabs-training/demo-js/blob/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.android.sauce.emu.conf.js
  ```
  </details>

<br/>

### iOS Real Devices

To enable Touch ID and Face ID on iOS real devices, add the `allowTouchIdEnroll` capability in your test script and set it to true, as shown in the example below:

```js reference
https://github.com/saucelabs-training/demo-js/blob/b770bf13b7f12af1187176cbff344cd3117fd3ee/webdriverio/appium-app/examples/biometric-login/test/configs/wdio.ios.sauce.real.conf.js
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
* [Support for iOS Touch ID on Real Devices](#biometric-authentication-touch-idface-id)
