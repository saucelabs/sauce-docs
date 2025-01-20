---
id: flutter-integration-testing-ios
title: Flutter iOS
sidebar_label: Flutter iOS
description: Run your Flutter integration tests for iOS
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Flutter compiles iOS [integration tests](https://docs.flutter.dev/cookbook/testing/integration/introduction) into [XCTests](https://developer.apple.com/documentation/xctest) so that they can be executed on apple devices. In the following we will explain how to run your XCTests on Sauce Labs infrastructure.

**To run a XCTest (or 'flutter test') on Sauce Labs we need two test artifacts from you:**
1. Your flutter-iOS app compiled as an `.ipa` or `.app` file.
2. The `.xctestrun` file for that app. The [.xctestrun file](https://keith.github.io/xcode-man-pages/xcodebuild.xctestrun.5.html) is the config for your test, this is the same config that xcode uses when it runs your tests on your development machine.


## Contents
1. [How to compile your flutter-iOS app into an '.app' or '.ipa' file.](#1-how-to-compile-your-flutter-ios-app-into-an-ipa-or-app-file)
2. [How to generate the '.xctestrun' config file.](#2-how-to-generate-the-xctestrun-config-file)
3. [How to run the flutter-iOS integration test on Sauce Labs infrastructure.](#3-how-to-run-flutter-ios-integration-tests-on-sauce-labs-infrastructure)
4. [Sample Implementation](#example-implementation)


:::info What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for
  a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Access to Sauce Labs Real Devices. Sauce Labs only supports XCTests on Real Devices, not virtual.
- Flutter mobile app. If you don't have one, you could use our Flutter Demo App:
    - [Sauce Labs Flutter Demo App](https://github.com/saucelabs/my-demo-app-flutter)
- `xcodebuild` tools
- `zip` and/or `saucectl`
:::

## 1. How to compile your flutter-iOS app into an '.ipa' or '.app' file

:::note You need an '.app' and '.xctestrun' file

Before you compile your application into an `.ipa` or `.app` file ensure that you have setup the `integration_tests` for your flutter-ios app correctly. You can follow the [flutter documentation](https://github.com/flutter/flutter/tree/main/packages/integration_test#integration_test) to do so, the most relevant section is the part on [iOS Device Testing](https://github.com/flutter/flutter/tree/main/packages/integration_test#ios-device-testing). You can stop following flutters guide after you have executed the `xcodebuild build-for-testing` command. This command will generate the `.app` and `.xctestrun` file.
:::

To execute your xctest, we require your app (which must be packaged together with your XCTests) in '.app' or '.ipa' format. If you have that already you can skip to [step 2](#2-how-to-generate-the-xctestrun-config-file).

`saucectl` will accept both formats. If you **don't want to use saucectl** you will need to repackage your '.app' file into an '.ipa' file. [This guide explains how to transform you '.app' into an '.ipa'](/docs/mobile-apps/automated-testing/ipa-files.md#building-an-ipa-from-an-app-bundle).

To compile your flutter app into a iOS '.app' file, you will need to use the `xcodebuild build-for-testing` command. Make sure you are using the correct `scheme` so it includes your integration tests.

```shell
# Example of the xcodebuild command to build the application.
# You will need to adjust the args according to your app.
output="../build/ios_integ"
xcodebuild build-for-testing \
  -workspace Runner.xcworkspace \
  -scheme Runner \
  -xcconfig Flutter/Release.xcconfig \
  -configuration Release \
  -derivedDataPath \
  $output -sdk iphoneos

# The app will now be present in your output directory. In this case: `build/ios_integ/Products/Release-iphoneos`
```


## 2. How to generate the '.xctestrun' config file

By default xcode will not persist the `.xctestrun` file if you kick off a XCTest on your development machine. To persist the `.xctestrun` file we need to use the `xcodebuild` tool. You can follow [the offical flutter documentation](https://github.com/flutter/flutter/tree/main/packages/integration_test#ios-device-testing) until the `xcodebuild build-for-testing` step, to build your `.app` and `.xctestrun` file.

```shell
# Example of the xcodebuild command to build the application and generate the .xctestrun file.
# You will need to adjust the args according to your app.
output="../build/ios_integ"
xcodebuild build-for-testing \
  -workspace Runner.xcworkspace \
  -scheme Runner \
  -xcconfig Flutter/Release.xcconfig \
  -configuration Release \
  -derivedDataPath \
  $output -sdk iphoneos
```

After the `xcodebuild build-for-testing` command ran sucessfully the `.xctestrun` file will be located in your output directory (`Products/Release-iphoneos` by default). Remember the path to the `.xctestrun` file, we will need it in the next step.


## 3. How to run flutter-iOS integration tests on Sauce Labs infrastructure

To run your flutter XCTest on sauce you have two options: use `saucectl` or integrate with our APIs yourself. If you are unfamiliar with our APIs we recommed using `saucectl` for ease of use and getting you started quickly.

### Run XCTests via saucectl

First install [saucectl](/docs/dev/cli/saucectl.md#installing-saucectl). Then you can use `saucectl` command to configure and run your test on Sauce Labs infrastructure.

```shell
# if you did not setup saucectl yet, run:
saucectl configure

# follow the steps to configure your xctest, with your `.app`/`.ipa` file and the `.xctestrun` test config. Use `Real Device` not `Virtual Device`
saucectl init xctest

# run the newly created xctest config.
saucectl run
```

For further configuration options and info on how to use `saucectl` visit [/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md](/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md)

### Run XCTests without saucectl

If you prefer not to use saucectl, you can also directly integrate with our APIs.

**First**, you will need to compile your app as an `.ipa` file as described [above](#1-how-to-compile-your-flutter-ios-app-into-an-ipa-file). 

**Second**, you will need to upload your `.ipa` and `.xctestrun` file to our Storage backend, see [AppStorage APIs](/docs/mobile-apps/app-storage.md#upload-apps-via-rest-api).

**Third**, you will need to call our native testing API with the AppStorage ids of the two files you just uploaded, see [RDC native /test API](/docs/dev/api/rdc.md#start-a-xctest-xcuitest-or-espresso-job).

**Fourth**, you will need to poll the state of the job and wait until the `status` is `passed|failed|error|complete`. You can do this through the [Jobs API](/docs/dev/api/rdc.md#get-a-specific-real-device-job).


## Example Implementation

For a practical example of how to set up and run integration tests for Flutter apps, you can refer to
the [Sauce Labs Flutter demo application](https://github.com/saucelabs/my-demo-app-flutter) repository.
The steps outlined in this guide have already been implemented in that repository. You can follow along with the demo app to see how
everything is configured and run your tests accordingly.
