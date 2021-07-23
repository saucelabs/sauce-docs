---
id: appium
title: Quickstart
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page is intended to provide you with instructions on how to quickly setup Appium tests with Java using the TestNG test runner on an Android Emulator or iOS Simulator, and run tests using the Sauce Labs App and Virtual Device Cloud. To see a comprehensive list of example, [check out the appium directory in our demo-java repo](https://github.com/saucelabs-training/demo-java/tree/dff5fd61b8e152efe59e4a8c9e75c644de4e51e0/appium-examples).

You can see more detailed and comprehensive instructions for all use cases can be found in the [Real Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices) and [Virtual Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/virtual-devices) docs.


## What You'll Need

* [Sample Tests](https://github.com/saucelabs-training/quickstart-appium-java)
* The [Swag Labs Sample App](https://github.com/saucelabs/sample-app-mobile/releases) (App Tests)
* A [Sauce Labs Username and Access Key](https://saucelabs.com/sign-up)
* An IDE such as [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=mac)
* [Maven](https://maven.apache.org/install.html)

## Quickstart – Test a Mobile Web Browser on Sauce Labs VMs

### Step 1: Install Dependencies
Make sure you [have Java, an IDE, and Maven installed](https://training.saucelabs.com/codelabs/Module1-SeleniumJava/index.html?index=..%2F..SeleniumJava#4) on your computer. To test a mobile web browser you will need either Android Studio or XCode to run an Emulator/ Simulator for testing on.

You will also want to set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as [environment variables](https://www.youtube.com/watch?v=3K1Eu0eTha8).

### Step 2: Get Test Code
In the [Sauce Appium sample repo](https://github.com/saucelabs-training/quickstart-appium-java/tree/main/src/test/java/tests), you will be running the test in the `/src/test/java/tests` directory called `AppiumAndroidEmuWebTest.java`

With TestNG you specify the tests you want to run using an .xml file in the`/resources/xml` [directory](https://github.com/saucelabs-training/quickstart-appium-java/tree/main/src/test/resources/config), by editing the `pom.xml` file. Update the `testngXmlFile` tag to use the correct TestNG xml file:

```
<testngXmlFile>appium_android_emu_web_test.xml</testngXmlFile>
```

### Step 3: Set the Appium Version
Java tests using the TestNG framework rely on the `pom.xml` file to import the correct Appium version. At the top of `pom.xml` inside of the `properties` tag, update the `appium.version` tag to one that is [supported on Sauce Labs](https://saucelabs.com/platform/platform-configurator#/) and the device you are testing:

```
<appium.version>7.4.1</appium.version>
```

### Step 4: Set Up Capabilities
[Update your Capabilities](https://saucelabs.com/platform/platform-configurator) to run on Sauce Labs Emulators to have the minimum required Appium Capabilities to run an Android web browser test:

```
deviceName: “Android GoogleAPI Emulator”
platforName: “Android”
platformVersion: “11.0”
automationName: “UiAutomator2”
```

### Step 5: Add Capabilities for the Browser
Depending on which browser you would like to test on, you need to [set the capabilities](https://docs.saucelabs.com/dev/test-configuration-options#desktop-browser-capabilities-sauce-specific--optional) to test on that browser:

```
browserName: "Chrome"
```
At a minimum, you must set the `browserName` capability, however different browsers have other options you can set.

<img src={useBaseUrl('img/mobile-apps/appium-web-capabilities.png')} alt="Appium Capabilities" width="800"/>


<!-- ### Step 2: Setup Environment

First, start up Appium Desktop on your Computer.

<Tabs
  groupId="platforms"
  defaultValue="ios"
  values={[
    {label: 'iOS', value: 'ios'},
    {label: 'Android', value: 'android'},
  ]}>

<TabItem value="ios">
* Start Appium Desktop
* Set your Capabilities in Appium Desktop and start a session:
`  "platformName": "iOS"
  "platformVersion": "14.4"
  "deviceName": "iPhone 12"
  "automationName": "XCuiTest"`


* The XCode simulator should open with the capabilities your specified in Appium Desktop

See more in the [AppiumSetup Guide for iOS](https://docs.google.com/document/d/1e9KEhn0BP9GMGG0ynfcKSMctbLw-IS1w3mseyYAgrbI/edit?usp=sharing)


</TabItem>
<TabItem value="android">
* Start Appium Desktop
* Start Android Studio
* Set your Capabilities to match the Emulator you are running in in Appium Desktop and start a session:

`  "platformName": "Android"
  "platformVersion": "9.0"
  "deviceName": "Android Emulator"
  "automationName": "UiAutomator2"`


See more in the [Appium Setup Guide for Android](https://docs.google.com/document/d/1Q1b744PYJs7aMmpiUfgHPpnjB5SKG3nMKqWx8bYfEUs/edit?usp=sharing)

Video - **[Android Appium Test Environment Setup](https://www.youtube.com/watch?v=aRC6WkmFfzc)**
</TabItem>
</Tabs> -->

## Quickstart – Test a Mobile App on Sauce Labs Real Devices

### Step 1: Install Dependencies
Make sure you [have Java, an IDE, and Maven installed](https://training.saucelabs.com/codelabs/Module1-SeleniumJava/index.html?index=..%2F..SeleniumJava#4) on your computer.

You will also want to set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as [environment variables](https://www.youtube.com/watch?v=3K1Eu0eTha8).


### Step 2: Get Test Code
In the [Sauce Appium sample repo](https://github.com/saucelabs-training/quickstart-appium-java/tree/main/src/test/java/tests), you will be running the test in the `/src/test/java/tests` directory called `AppiumIosRdcAppTest.java`

With TestNG you specify the tests you want to run using an .xml file in the`/resources/xml` [directory](https://github.com/saucelabs-training/quickstart-appium-java/tree/main/src/test/resources/config), by editing the `pom.xml` file. Update the `testngXmlFile` tag to use the correct TestNG xml file:

```
<testngXmlFile>appium_ios_rdc_app_test.xml</testngXmlFile>
```
### Step 3: Set the Appium Version

Java tests using the TestNG framework rely on the `pom.xml` file to import the correct Appium version. At the top of `pom.xml` inside of the `properties` tag, update the `appium.version` tag to one that is [supported on Sauce Labs](https://saucelabs.com/platform/platform-configurator#/) and the device you are testing:

```
<appium.version>7.4.1</appium.version>
```

### Step 4: Set Up Your App
Use your own app, or grab the latest [Swag Labs App](https://github.com/saucelabs/sample-app-mobile/releases).

On the [Sauce Labs App](https://app.saucelabs.com/live/app-testing), you can upload an .apk, .ipa, or .zip file, or use the API for [Mobile Application Storage](https://docs.saucelabs.com/mobile-apps/app-storage/index.html#uploading-apps-via-rest-api).

The easiest way to do this is to set environment variables for your Sauce username & access key, then use this command:

```
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \
--form 'payload=@"/Users/lindsaywalker/Git/Example_Tests/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
--form 'name="iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"'
```

### Step 5: Set Up Capabilities
Update your Capabilities to run on Sauce Labs Emulators to have the minimum required Appium Capabilities to run an iOS App test:

```
platformName: "iOS"
platformVersion: "14.4"
deviceName: "iPhone 12"
automationName: "XCuiTest"
app: "iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa",
```

<img src={useBaseUrl('img/mobile-apps/appium-app-capabilities.png')} alt="Appium Capabilities" width="800"/>

## Run Your Tests

From you machine, either use the command `mvn clean test` or right click on the test you would like to run from your IDE to run your tests.  If you would like to skip Step 2, simply add the flag `-DtestngXmlFile=appium_ios_rdc_app_test.xml` and to change data centers, add the flag `-Dregion=us`
