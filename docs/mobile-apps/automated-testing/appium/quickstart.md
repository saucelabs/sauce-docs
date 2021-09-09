---
id: quickstart
title: Appium Quickstart
sidebar_label: Quickstart
description: Use our demo scripts to quickly set up and run automated tests and view the results in Sauce Labs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Appium](http://appium.io/) is an automation testing framework that allows you to write tests using the [Selenium](https://www.selenium.dev) syntax that are for use in testing native, mobile web, and hybrid applications on iOS and Android devices. Run your Appium tests on Sauce Labs to benefit from speed, parallelization, clear test result history, failure analysis, issue tracking, and more.

* Don't have Appium tests but want to try? The [Appium Demo](https://github.com/saucelabs-training/quickstart-appium-java) Repo includes a sample project structure, working configuration specifications, and sample Java tests so you can get up and running in less than 10 minutes using the Quickstart instructions on this page!
* Already have Appium tests to run? Take advantage of the Sauce Labs library of real devices, emulators and simulators, and OS/browser combinations to maximize your digital confidence on every version of every device.


## What You'll Need

The following list of prerequisites are specific to running tests written in Java, per this demonstration. For information about other supported languages, refer to the demo projects in the [Sauce Labs Training Repo](https://github.com/saucelabs-training).

* A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* The Sauce Labs [Appium Demo Project](https://github.com/saucelabs-training/quickstart-appium-java)
* The [Swag Labs Sample App](https://github.com/saucelabs/sample-app-mobile/releases)
* [Java Testing Dependencies](https://training.saucelabs.com/codelabs/Module1-SeleniumJava/index.html?index=..%2F..SeleniumJava#4)


## Step 1: Check out the Sample Project

The [Appium Quickstart for Java](https://github.com/saucelabs-training/quickstart-appium-java) demo repo contains all the project files necessary to execute a test against a mobile app or a web app accessed through a mobile browser. Clone the project in your local environment to get started.

```
git clone https://github.com/saucelabs-training/quickstart-appium-java.git
```

## Step 2: Link your Sauce Labs Account

Set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as [environment variables](https://www.youtube.com/watch?v=3K1Eu0eTha8) to avoid having to enter them with each command and to protect them from exposure in your tests.


## Step 3: Upload the App

Download the iOS version of the [Swag Labs App](https://github.com/saucelabs/sample-app-mobile/releases) and upload it to your Sauce Labs account. You can do this through the Sauce Labs UI or by calling the API.

* Sauce Labs UI: From the [Sauce Labs Live Testing](https://app.saucelabs.com/live/app-testing) page, select **App Upload** and select the `iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa` file.
* API: Use the [Upload File to App Storage](https://docs.saucelabs.com/dev/api/storage#upload-file-to-app-storage) API request to upload the sample app to your account.

    ```title="Example API Upload Request"
    curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
    --request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \
    --form 'payload=@"/Users/lindsaywalker/Git/Example_Tests/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"' \
    --form 'name="iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa"'
    ```

## Step 4: Run the Tests

You can run the test from a terminal on your machine or from within your IDE.

```bash title="Terminal Command"
mvn clean test
```
Alternatively, you can right click the test and choose `Run` from most IDE interfaces.


Following this quickstart, you should be able to see the [results of your test](https://app.saucelabs.com/dashboard/tests/vdc) in Sauce Labs.
