---
id: quickstart
title: Appium Quickstart
sidebar_label: Quickstart
description: Use our demo scripts to quickly set up and run automated tests and view the results in Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Appium](http://appium.io/) is an automation testing framework that allows you to write tests using the [Selenium](https://www.selenium.dev) syntax that are for use in testing native, mobile web, and hybrid apps on iOS and Android devices. Run your Appium tests on Sauce Labs to benefit from speed, parallelization, clear test result history, failure analysis, issue tracking, and more.

- Don't have Appium tests but want to try? The Appium Demo Repo includes a sample project structure, working configuration specifications, and sample Java tests so you can get up and running in less than 10 minutes using the instructions on this page.
- Already have Appium tests to run? Take advantage of the Sauce Labs library of real devices, Emulators and Simulators, and OS/browser combinations to maximize your digital confidence on every version of every device.

## What You'll Need

The following list of prerequisites are specific to running tests written in Java, per this demonstration. For information about other supported languages, refer to the demo projects in the [Sauce Labs Training Repo](https://github.com/saucelabs-training).

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- The Sauce Labs [Appium Demo Project](https://github.com/saucelabs-training/quickstart-appium-java)
- A [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) account
- [Git](https://git-scm.com/downloads)
- The [Swag Labs iOS Real Device Sample App](https://github.com/saucelabs/sample-app-mobile/releases)
- Local installation of JDK, Maven, and an IDE such as IntelliJ.

## Step 1: Clone the Sample Project

The [Appium Quickstart for Java](https://github.com/saucelabs-training/quickstart-appium-java) demo repository contains all the project files necessary to run a test against a mobile app or a web app accessed through a mobile browser. Clone the project in your local environment to get started.

```
git clone https://github.com/saucelabs-training/quickstart-appium-java.git
```

## Step 2: Link your Sauce Labs Account

Set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as environment variables to avoid having to enter them with each command and to protect them from exposure in your tests.

1. Check to see whether your credentials are already set using the following command:

```bash title="Check Environment Variables"
echo $SAUCE_USERNAME
echo $SAUCE_ACCESS_KEY
```

2. If nothing is returned, use the following command to set your credentials:

```
export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your Sauce access key"
```

## Step 3: Upload the Sample App

1. Download the iOS Real Device Swag Labs App from [here](https://github.com/saucelabs/my-demo-app-rn/releases/).
2. Rename the app from `iOS-Real-Device-MyRNDemoApp.*.*.*-*.ipa` to `iOS-Real-Device-MyRNDemoApp.ipa` .
3. Upload it to your Sauce Labs account, either through the Sauce Labs UI or by calling the API.

- Sauce Labs UI: From [Sauce Labs > App Management](https://app.saucelabs.com/app-management), select **Upload App** and browse to find the `iOS-Real-Device-MyRNDemoApp.ipa` file you just downloaded and renamed.
- API: Use the [Upload File to App Storage](/dev/api/storage/#upload-file-to-app-storage) API request to upload the sample app to your account.
  ```title="Example API Upload Request"
  curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
  --request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \
  --form 'payload=@"<path to the iOS file>/iOS-Real-Device-MyRNDemoApp.ipa"' \
  --form 'name="iOS-Real-Device-MyRNDemoApp.ipa"'
  ```

## Step 4: Run the Tests

:::caution
You must have JDK and Maven installed to run this sample test, and you must have set their paths in your `.bash_profile`, for example:

```
## Maven Variables
export M2_HOME=/Applications/apache-maven-3.8.2
export M2=$M2_HOME/bin

export PATH=$PATH:$M2:$JAVA_HOME/bin:$PATH
```

:::

If you are using an IDE, such as IntelliJ, open the `quickstart-appium-java` project you cloned in step 2, then right-click the `src/test/java/tests/RDC/AppiumIosRdcAppTest` and choose `Run`.

Alternatively, you can run the following command in your terminal:

```bash title="Terminal Command"
cd quickstart-appium-java
mvn clean install -DtestngXmlFile=appium_ios_rdc_app_test.xml -Dregion=us
```

Once your tests complete, you should be able to see the results in your Sauce Labs account under [Automated > Test Results > Real Devices](https://app.saucelabs.com/dashboard/tests/rdc).
