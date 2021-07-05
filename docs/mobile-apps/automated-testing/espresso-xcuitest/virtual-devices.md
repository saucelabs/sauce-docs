---
id: virtual-devices
title: Virtual Device Testing with Espresso
sidebar_label: Virtual Devices
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

:::warning Now Available on saucectl
**Espresso testing for virtual devices is now supported on `saucectl`, our CLI tool used with Testrunner Toolkit. For details, see:**

* **[About `saucectl`](/testrunner-toolkit)**
* **[`saucectl` Installation](/testrunner-toolkit/installation)**
* **[`saucectl` CLI Reference](/testrunner-toolkit/saucectl)**
:::

<br/>
<br/>
<br/>

Sauce Runner for Virtual Devices provides the ability to run automated Android app UI tests on Sauce Labs emulators from your local Espresso environment. At this time, XCUITest is not supported.

## What You'll Need

* Your Sauce Labs username and access key.
* Your mobile app file and mobile test file. Accepted file types are .ipa for iOS and .apk for Android.
  * For details on how to build .ipa files for use with Sauce Runner for Real Devices, see [Creating .ipa Files for Appium and XCUITest](mobile-apps/creating-ipa-files.md).

If you'd like to try out this functionality but don't have an app on hand, [download our Sauce Labs demo app file and test file](https://github.com/saucelabs-training/demo-espresso/tree/master/emulators).

## System Requirements
* Network connectivity to saucelabs.com on `port 443`.
* 4GB of free RAM on your local machine.
* A 64-bit operating system running Windows 7+, Mac OS X 10.11+, or Linux.

### Supported Espresso Package Versions
| Package | Minimum Version |
| :------------- | :------------- |
| com.android.support.test.espresso:espresso-core | 3.0.2 |
| com.android.support.test.espresso:espresso-web | 3.0.2 |
| com.android.support.test:runner | 1.0.2 |
| com.android.support.test:rules | 1.0.2 |
| junit:junit | 4.12 |

## Download Runner
1. To get started, download one of Sauce Runner for Virtual Devices packages to your local machine.

| Download Link | SHA1 Checksum
| :-------------------------- | :---
| [Mac OS X 10.11+](https://saucelabs.com/downloads/sauce-runner-virtual-0.1.2-osx.zip) | 0cfc478d0649968d494441c1bfe71b77d13e7fd8
| [Windows 7+ 64-bit](https://saucelabs.com/downloads/sauce-runner-virtual-0.1.2-windows.zip) | aece75d0bc5fb68eba45e3c2f0cfdb381933ae78
| [Linux 64-bit](https://saucelabs.com/downloads/sauce-runner-virtual-0.1.2-linux.zip) | 18bc0a7573ff8182b6f01d2e09353d0b75efa9dd

## Set Up Project Folder

2. Unzip the download package contents to any folder on your local machine.

3. Create a new folder for your project and drop the `saucelabs-native-test-runner` application, your app .apk file, and test .apk file here, so that your folder structure looks like this:

  ```bash
  |_{root / your project folder}
    |_saucelabs-native-test-runner.jar
    |_SauceLabs.Mobile.Sample.Espresso.App.apk
    |_SauceLabs.Mobile.Sample.Espresso.Tests.apk
  ```

## Gather Your Credentials

4. Find your Sauce Labs `username`, `accessKey`, and the emulator `deviceName` you wish to test on. The list of devices is located under **Live** > **Cross-Browser** > **Mobile Virtual**.
   * **Set Environment Variables (Optional)**: Setting your Sauce Labs `username` and `accessKey` as [environment variables](/basics/environment-variables) provides an extra layer of security for your credentials when you reference them from within your tests.

## Configure Your Test

:::tip CLI Reference
See [Sauce Runner for Virtual Devices CLI Reference](/dev/cli/espresso-xcuitest/virtual-devices). To view these commands in your CLI, run the `--help` option:
```java
java -jar saucelabs-native-test-runner.jar --help
```
:::
<br/>

5. Open a new command line window, then enter the [required commands and flags](/dev/cli/espresso-xcuitest/virtual-devices):

   ```java title="Required Commands and Flags"
   ./sauce-runner-virtual -f <your test framework (espresso or xcuitest)> -u <your username> -k <your access key> --app <your app file name> --test-app <your test file name> -d ''<your device name>''
   ```

   ```java title="Basic Example"
   ./sauce-runner-virtual -f espresso -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxxx --app ./SauceLabs.Mobile.Sample.Espresso.App.apk --test-app ./SauceLabs.Mobile.Sample.Espresso.Tests.apk -d 'deviceName=Google Pixel GoogleAPI Emulator,platformVersion=7.1'
   ```

  In this example, Sauce Runner will install the Android app (SauceLabs.Mobile.Sample.Espresso.App.apk) on the Google Pixel emulator and then launch the Espresso test suite (SauceLabs.Mobile.Sample.Espresso.Tests.apk).

  If needed, you can also add [optional parameters](/dev/cli/espresso-xcuitest/virtual-devices) to configure Sauce Runner with your Espresso tests. For example, you could add another device to the above code script by adding the line `--d 'deviceName=Samsung Galaxy S8 HD GoogleAPI Emulator,platformVersion=7.0'`.

## Run Your Test

6. In your command line window, execute the above commands and options. This will launch the Sauce Runner connection and begin running your test.

Wait for the runner to upload both files and execute the tests on Sauce Labs emulator(s). Our emulators are capable of running Espresso jobs for up to three hours, however, a one-hour execution time is recommended.

<details><summary><strong>Click here to view the example response</strong></summary>

```bash title="Basic Example Response"  
2021-04-14 13:12:55 - [INFO] Using sauce-runner v0.1.2
2021-04-14 13:12:55 - [INFO] Selected framework: espresso
2021-04-14 13:12:55 - [INFO] Using user: john.smith
2021-04-14 13:12:55 - [INFO] Using apikey: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX0e03
2021-04-14 13:12:55 - [INFO] Using local App: ./SauceLabs.Mobile.Sample.Espresso.App.apk
2021-04-14 13:12:55 - [INFO] Using local Test App: ./SauceLabs.Mobile.Sample.Espresso.Tests.apk
2021-04-14 13:12:55 - [INFO] No include-tests filters specified
2021-04-14 13:12:55 - [INFO] No exclude-tests filters specified
2021-04-14 13:12:55 - [INFO] Set device: Google Pixel GoogleAPI Emulator - 7.0
2021-04-14 13:12:55 - [INFO] Trying to upload file ./SauceLabs.Mobile.Sample.Espresso.App.apk to storage
2021-04-14 13:13:20 - [INFO] File uploaded: SauceLabs.Mobile.Sample.Espresso.App.apk(4f040be9f28bc84b58f6fd5af5300c2f) - Size:28830014
2021-04-14 13:13:20 - [INFO] Trying to upload file ./SauceLabs.Mobile.Sample.Espresso.Tests.apk to storage
2021-04-14 13:13:20 - [INFO] File uploaded: SauceLabs.Mobile.Sample.Espresso.Tests.apk(30b317176beed44cf66f2a92387fa073) - Size:521075
2021-04-14 13:13:20 - [INFO] JUnit reports will be saved locally at the end of the tests
2021-04-14 13:13:20 - [INFO] Jobs created
2021-04-14 13:13:25 - [INFO] Getting job status
2021-04-14 13:13:25 - [INFO] Job status: In progress
2021-04-14 13:13:25 - [INFO] Google Pixel GoogleAPI Emulator - 7.0 - Status: test queued
2021-04-14 13:13:40 - [INFO] Getting job status
2021-04-14 13:13:40 - [INFO] Job status: In progress
2021-04-14 13:13:40 - [INFO] Google Pixel GoogleAPI Emulator - 7.0 - Status: test queued
2021-04-14 13:13:55 - [INFO] Getting job status
2021-04-14 13:13:56 - [INFO] Job status: In progress
2021-04-14 13:13:56 - [INFO] Google Pixel GoogleAPI Emulator - 7.0 - Status: test session in progress
2021-04-14 13:13:56 - [INFO] https://saucelabs.com/beta/tests/1ee70f37535f4e81ba19a1ab17ec2839/watch
2021-04-14 13:14:11 - [INFO] Getting job status
2021-04-14 13:14:11 - [INFO] Job status: In progress
2021-04-14 13:14:11 - [INFO] Google Pixel GoogleAPI Emulator - 7.0 - Status: test session in progress
2021-04-14 13:14:26 - [INFO] Getting job status
2021-04-14 13:14:26 - [INFO] Job status: Complete
2021-04-14 13:14:26 - [INFO] Google Pixel GoogleAPI Emulator - 7.0 - Status: test complete
2021-04-14 13:14:41 - [INFO] Tests results for Google Pixel GoogleAPI Emulator - 7.0
2021-04-14 13:14:41 - [INFO] com.swaglabsmobileapp.LoginTest.noMatchLogin...pass
2021-04-14 13:14:41 - [INFO] com.swaglabsmobileapp.LoginTest.noPasswordLogin...pass
2021-04-14 13:14:41 - [INFO] com.swaglabsmobileapp.LoginTest.noUsernameLogin...pass
2021-04-14 13:14:41 - [INFO] com.swaglabsmobileapp.LoginTest.lockedUserLogin...pass
2021-04-14 13:14:41 - [INFO] com.swaglabsmobileapp.LoginTest.successfulLogin...pass
2021-04-14 13:14:41 - [INFO] com.swaglabsmobileapp.SwagLabsFlow.completeFlow...pass
2021-04-14 13:14:41 - [INFO] Total time: 25.883
2021-04-14 13:14:41 - [INFO] Tests passed: 6
2021-04-14 13:14:41 - [INFO] Tests failed: 0
2021-04-14 13:14:41 - [INFO] Getting JUnit report for Google Pixel GoogleAPI Emulator - 7.0
```
</details>
<br/>

7. Sauce Runner for Virtual Devices will return the following exit status codes, based on test execution results:
   * Status Code 0: all the tests passed on all devices.
   * Status Code 1: this can mean multiple things: one or more tests failed during execution, user error (e.g., invalid path to test files, invalid arguments), Sauce Labs infrastructure error while executing the test. Please refer to your log to identify the problem.

## Closing Your Test

8. Sauce Runner will exit when all the tests have completed.

Go to the [Sauce Labs Training GitHub repository](https://github.com/saucelabs-training/demo-espresso/tree/master/emulators) to browse more example scripts and Espresso test cases on Sauce Labs Emulators.

## Troubleshooting

## System Animations Disabled

To help prevent flakey Espresso tests, we've followed Google's recommendation to [disable system animations on Sauce Labs Android emulators](https://developer.android.com/training/testing/espresso/setup):

* Window animation scale
* Transition animation scale
* Animator duration scale

### Internal Server Error

When testing on Sauce Labs emulators, one possible error is **Internal Server Error**. This happens when an Espresso test suite runs as expected on one Android version, but fails on another version.

**Potential Cause**: Minimum Android version not met for your application under test.

**Recommendation**: Check the `minSdkVersion` in `build.gradle` for your application project.
