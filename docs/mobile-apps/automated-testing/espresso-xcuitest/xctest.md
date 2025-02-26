---
id: xctest
title: XCTest & XCTest plans
sidebar_label: XCTest & XCTest plans
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Apple's native testing framework, [XCTest](https://developer.apple.com/documentation/xctest) , supports the creation of unit tests, UI tests, and performance tests. In XCTest, [XCUITest](https://developer.apple.com/documentation/xctest/user-interface-tests) is specifically designed for UI testing. Additionally, Apple allows you to organize and configure your tests into [Test Plans](https://developer.apple.com/documentation/xcode/organizing-tests-to-improve-feedback), enabling you to bundle multiple test targets into a single test run.

**To run your XCTest plan on Sauce Labs infrastructure we require the following test artifacts from you:**
1. All iOS apps that are part of your XCTest plan as an `.app` or `.ipa` file.
2. All XCUITest apps that are part of your XCTest plan as an `.app` or `.ipa` file (only if your Test plan actually includes a UI test).
3. The `.xctestrun` file for your XCTest plan. The [.xctestrun file](https://keith.github.io/xcode-man-pages/xcodebuild.xctestrun.5.html) is a compiled version of your XCTest plan and contains all the configuration for your tests. This file contains the same config that Xcode uses when it runs your tests on your development machine.


### Content
1. [How to build the '.app' and '.xctestrun' files from your XCode project.](#1-how-to-build-the-app-and-xctestrun-files)
2. [How to run your entire XCTest plan on Sauce Labs infrastructure.](#2-how-to-run-your-xctest-plan-on-sauce-labs-infrastructure)
3. [Special cases and trouble shooting](#3-special-cases-and-trouble-shooting)
3. [Sample Implementation](#4-example-implementation)


## 1. How to build the '.app' and '.xctestrun' files
By default, Xcode will not persist the `.xctestrun` file if you kick off an XCTest on your development machine. To persist the `.xctestrun` file we need to use the `xcodebuild build-for-testing` command. Make sure you are using the correct `scheme` so it includes your desired tests.

```shell
# Example xcodebuild command to build your scheme.
output="./saucelabs_integration"
xcodebuild build-for-testing \
  -scheme YourTestScheme \
  -sdk iphoneos \
  -derivedDataPath ${output}

# the test artifacts will now be present in your output directory: In this case `saucelabs_integration/Build/Products
ls ${output}/Build/Products
```
Explanation:
1. `output` a variable for the output directory, choose whatever path you prefer
2. `xcodebuild build-for-testing` builds all test artifacts, but does not run the tests.
3. `-scheme` builds the selected scheme. Make sure you select the scheme that contains the XCTest plan you want to run.
4. `sdk iphoneos` build binaries for iOS devices
5. `-derivedDataPath` (optional) defines where the test artifacts should be written to.


## 2. How to Run Your XCTest Plan on Sauce Labs Infrastructure
To run your XCTest plan on Sauce Labs, you have two options: use `saucectl` or integrate with our APIs yourself. If you are unfamiliar with our APIs, we recommend using `saucectl` for ease of use and getting you started quickly.


### 2.1. Run XCTests via saucectl
First install [saucectl](/docs/dev/cli/saucectl.md#installing-saucectl). **Note: minimum version is `0.192.0`.** Then you can use `saucectl` command to configure and run your test on Sauce Labs infrastructure.

```shell
# If it's the first time you're using saucectl, run:
saucectl configure

# follow the steps to configure your XCTest, with your `.app`/`.ipa` file and the `.xctestrun` test config. Use `Real Device` not `Virtual Device`
saucectl init xctest

# run the newly created XCTest config.
saucectl run
```

For further configuration options and info on how to use `saucectl` visit [/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md](/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md)

### 2.2. Run XCTests Without Saucectl

If you prefer not to use saucectl, you can directly integrate with our APIs.

**First**, compile your `.app` as an `.ipa` file as described [here](/docs/mobile-apps/automated-testing/ipa-files.md#building-an-ipa-from-an-app-bundle).

**Second**, upload your `.ipa` and `.xctestrun` files to our AppStorage backend, see [AppStorage APIs](/docs/mobile-apps/app-storage.md#upload-apps-via-rest-api).

**Third**, call our native testing API with the AppStorage IDs of the two files you just uploaded. See [RDC native /test API](/docs/dev/api/rdc.md#start-a-xctest-xcuitest-or-espresso-job).

**Fourth**, poll the state of the job and wait until the `status` is `passed|failed|error|complete`. You can do this through the [Jobs API](/docs/dev/api/rdc.md#get-a-specific-real-device-job).


## 3. Special Cases And Trouble Shooting

### 3.1. XCTest Plan Contains A XCUITest
XCUITests require a second app that simulates the user interactions with your app under test. They usually have the suffix `UITests-Runner.app`. Before we can run this as part of your tests, this app will need to be installed on the device, just like any other app. You can do this through the [otherApps capability](/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md#otherapps).

### 3.2. XCTest Plan Contains A Target That Is For A Different App
A XCTest plan can contain multiple Test Targets, even for different apps. If this is the case they will need to be installed on the device before we can run the tests. If a scheme or XCTest plan contains multiple apps, they will be written to the same directory that you defined in [step 1](#1-how-to-build-the-app-and-xctestrun-files). To install them on a device you can use the [otherApps capability](/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md#otherapps).


## 4. Example Implementation

For a practical example of how to set up and run your XCTest and XCUITest plans on Sauce Labs infrastructure, you can refer to
the [demo-xctest repository](https://github.com/saucelabs-training/demo-xctest).

This repository contains multiple examples of how to run XCTest plan on Sauce Labs cloud, along with the source code for the demonstration app
used in these examples. By leveraging `xctestplan` and `xctestrun` configuration files, this demo shows how to execute an XCTest plan, similar to
using the following xcodebuild command:

```shell
xcodebuild test-without-building -xctestrun $(PATH_TO_XCTESTRUN_FILE)
```

Visit the repo to see how everything is configured and try running your own XCTest plan on Sauce Labs' real devices.