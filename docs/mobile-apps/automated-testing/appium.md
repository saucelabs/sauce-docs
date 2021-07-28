---
id: appium
title: Appium Quickstart
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page is intended to provide you with instructions on how to quickly set up Appium tests with Java using the TestNG test runner on an Android Emulator or an iOS Real Device, and run tests using the Sauce Labs App with the Virtual Device and Real Device Cloud. To see a comprehensive list of test examples, [check out the appium directory in our demo-java repo](https://github.com/saucelabs-training/demo-java/tree/dff5fd61b8e152efe59e4a8c9e75c644de4e51e0/appium-examples).

You can see more detailed and comprehensive instructions for all use cases in the [Real Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices) and [Virtual Devices](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/virtual-devices) docs.


## What You'll Need

* [Sample Tests](https://github.com/saucelabs-training/quickstart-appium-java)
* The [Swag Labs Sample App](https://github.com/saucelabs/sample-app-mobile/releases)
* A [Sauce Labs Username and Access Key](https://app.saucelabs.com/user-settings)
* An IDE such as [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=mac)
* [Maven](https://maven.apache.org/install.html)

## Test a Mobile Web Browser on Sauce Labs VMs

### Step 1: Install Dependencies
Make sure you [have Java, an IDE, and Maven installed](https://training.saucelabs.com/codelabs/Module1-SeleniumJava/index.html?index=..%2F..SeleniumJava#4) on your computer.

Set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as [environment variables](https://www.youtube.com/watch?v=3K1Eu0eTha8).

### Step 2: Get Test Code
Open and review your test code in the [Sauce Appium sample repo](https://github.com/saucelabs-training/quickstart-appium-java/tree/main/src/test/java/tests), and open the test file located in `/src/test/java/tests/EmuSim` directory called `AppiumAndroidEmuWebTest.java`.

Update the `testngXmlFile` tag [in `pom.xml`](https://github.com/saucelabs-training/quickstart-appium-java/blob/main/pom.xml) to use the correct TestNG xml file.

```
<testngXmlFile>appium_android_emu_web_test.xml</testngXmlFile>
```

You can see the contents of this file in the [`/resources/xml` directory](https://github.com/saucelabs-training/quickstart-appium-java/tree/main/src/test/resources/config).


### Step 3: Set Up Capabilities
[Update your Capabilities](https://saucelabs.com/platform/platform-configurator) to run on Sauce Labs Emulators to have these required Appium Capabilities to run an Android web browser test:

```
deviceName: “Android GoogleAPI Emulator”
platforName: “Android”
automationName: “UiAutomator2”
```

### Step 4: Add Capabilities for the Browser
[Set the capabilities](https://docs.saucelabs.com/dev/test-configuration-options#desktop-browser-capabilities-sauce-specific--optional) according to the browser on which you want to test:

```
browserName: "Chrome"
```
At a minimum, you must set the `browserName` capability, however different browsers have other options you can set.

<img src={useBaseUrl('img/mobile-apps/appium-web-capabilities.png')} alt="Appium Capabilities" width="800"/>

## Test a Mobile App on Sauce Labs Real Devices

### Step 1: Install Dependencies
Make sure you [have Java, an IDE, and Maven installed](https://training.saucelabs.com/codelabs/Module1-SeleniumJava/index.html?index=..%2F..SeleniumJava#4) on your computer.

Set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as [environment variables](https://www.youtube.com/watch?v=3K1Eu0eTha8).


### Step 2: Get Test Code

Open and review your test code in the [Sauce Appium sample repo](https://github.com/saucelabs-training/quickstart-appium-java/tree/main/src/test/java/tests), and open the test file located in the `/src/test/java/tests/RDC` directory called `AppiumIosRdcAppTest.java`

Update the `testngXmlFile` tag [in `pom.xml`](https://github.com/saucelabs-training/quickstart-appium-java/blob/main/pom.xml) to use the correct TestNG xml file.

```
<testngXmlFile>appium_ios_rdc_app_test.xml</testngXmlFile>
```


You can view the contents of the .xml file in the`/resources/xml` [directory](https://github.com/saucelabs-training/quickstart-appium-java/tree/main/src/test/resources/config).


### Step 3: Set Up Your App
Use your own app, or grab the latest [Swag Labs App](https://github.com/saucelabs/sample-app-mobile/releases).

On the [Sauce Labs App](https://app.saucelabs.com/live/app-testing), you can upload an .ipa file, or use the API for [Mobile Application Storage](https://docs.saucelabs.com/mobile-apps/app-storage/index.html#uploading-apps-via-rest-api).

The easiest way to do this is to set environment variables for your Sauce username & access key, then use this command:

```
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \
--form 'payload=@"/Users/lindsaywalker/Git/Example_Tests/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
--form 'name="iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"'
```
:::note
Different file types are required for testing in different environments:
* An Android emulator or real device needs to have an .apk-file
* An iOS simulator needs to have an .app file which needs to be zipped for the Sauce Labs emulators (.zip file upload)
* An iOS real device needs to have an .ipa-file
:::

### Step 4: Set Up Capabilities
Update your Capabilities to run on Sauce Labs Real Devices to have the minimum required Appium Capabilities to run an iOS App test:

```
String appName = "iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa";
```
```
platformName: "iOS"
deviceName: "iPhone 12"
automationName: "XCuiTest"
capabilities.setCapability("app", "storage:filename="+appName);,
```

<img src={useBaseUrl('img/mobile-apps/appium-app-capabilities.png')} alt="Appium Capabilities" width="800"/>

## Run Your Tests

From you machine, either use the command `mvn clean test` or right click on the test you would like to run from your IDE to run your tests.  If you would like to skip Step 2, simply add the flag `-DtestngXmlFile=appium_ios_rdc_app_test.xml` and to change data centers, add the flag `-Dregion=us`

:::note
Java tests using the TestNG framework rely on the `pom.xml` file to import dependencies. Make sure the dependencies like [Appium Java Binding version](https://github.com/appium/java-client) and [TestNG version](https://testng.org/doc/download.html) are all up to date in the properties tag of `pom.xml`
```
<properties>
    <testngXmlDir>src/test/resources/config</testngXmlDir>
    <testngXmlFile>appium_ios_rdc_app_test.xml</testngXmlFile>
    <testng.version>6.14.3</testng.version>
    <commons-logging.version>1.2</commons-logging.version>
    <selenium.version>3.141.59</selenium.version>
    <maven-failsafe-plugin.version>2.19.1</maven-failsafe-plugin.version>
    <appium.version>7.5.1</appium.version>
</properties>
```
:::

### Optional Appium Capabilities

Sauce Labs will set default values for platform (operating system) and Appium versions, however you may want to specify versions you know are supported and compatible to avoid errors.

**Appium Version** – By default your tests will run on the [latest version](https://saucelabs.com/platform/platform-configurator#/) of Appium supported by Sauce Labs for that device or OS, however you can set the [`appiumVersion` capability](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/virtual-devices/index.html#set-your-appiumversion).

**Platform Version** - By default, Sauce Labs will pick a platform (depending on what's available if you are testing on Real Devices) and set an operating system for the device you are using, however you can also choose the version of the operating system with the [`platformVersion` capability](https://docs.saucelabs.com/dev/test-configuration-options/index.html#platformversion).  

See the [Complete list of Optional Capabilities on Docs](https://docs.saucelabs.com/dev/test-configuration-options/index.html#mobile-app-capabilities-sauce-specific--optional)
