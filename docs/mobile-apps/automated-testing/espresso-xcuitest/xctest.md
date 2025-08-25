---
id: xctest
title: XCTest & XCTest plans
sidebar_label: XCTest & XCTest plans
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Apple's native testing framework, [XCTest](https://developer.apple.com/documentation/xctest), supports creating unit, UI, and performance tests. In XCTest, [XCUITest](https://developer.apple.com/documentation/xctest/user-interface-tests) is specifically designed for UI testing. Additionally, Apple allows you to organize and configure your tests into [Test Plans](https://developer.apple.com/documentation/xcode/organizing-tests-to-improve-feedback), enabling you to bundle multiple test targets into a single test run.

**To run your XCTest plan on Sauce Labs infrastructure, we require the following test artifacts from you:**
1. All iOS apps that are part of your XCTest plan as an `.app` or `.ipa` file.
2. All XCUITest apps included in your XCTest plan as an `.app` or `.ipa` file (only if your test plan contains a UI test).
3. The `.xctestrun` file associated with your XCTest plan. The [.xctestrun file](https://keith.github.io/xcode-man-pages/xcodebuild.xctestrun.5.html) is a compiled version of your XCTest plan and includes all the configurations for your tests. This file holds the same configurations that Xcode utilizes when it runs your tests during development.


### Content
1. [How to build the '.app' and '.xctestrun' files from your XCode project.](#1-how-to-build-the-app-and-xctestrun-files)
2. [How to run your entire XCTest plan on Sauce Labs infrastructure.](#2-how-to-run-your-xctest-plan-on-sauce-labs-infrastructure)
3. [Special cases and troubleshooting](#3-special-cases-and-troubleshooting)
3. [Sample Implementation](#4-example-implementation)


## 1. How to build the '.app' and '.xctestrun' files
By default, Xcode does not persist the `.xctestrun` file when you initiate an XCTest on your development machine. To persist the `.xctestrun` file, you need to use the `xcodebuild build-for-testing` command. Ensure you use the correct `scheme` to include your desired tests.

```shell
# Example xcodebuild command to build your scheme.
output="./saucelabs_integration"
xcodebuild build-for-testing \
  -scheme YourTestScheme \
  -sdk iphoneos \
  -derivedDataPath ${output}

The test artifacts will now be available in your output directory: in this case `saucelabs_integration/Build/Products
ls ${output}/Build/Products
```
Explanation:
1. `output` a variable for the output directory; choose any path you prefer
2. `xcodebuild build-for-testing` builds all test artifacts but does not run the tests.
3. `-scheme` builds the selected scheme. Make sure you select the scheme that contains the XCTest plan you want to run.
4. `sdk iphoneos` builds binaries for iOS devices
5. `-derivedDataPath` (optional) specifies the location where the test artifacts should be written to.


## 2. How to Run Your XCTest Plan on Sauce Labs Infrastructure
To run your XCTest plan on Sauce Labs, you have two options: use `saucectl` or integrate with our APIs on your own. If you're unfamiliar with our APIs, we recommend using `saucectl` for its ease of use and for helping you get started quickly.


### 2.1. Run XCTests via saucectl
First, install [saucectl](/docs/dev/cli/saucectl.md#installing-saucectl). **Note: the minimum version is `0.192.0`.** After that, you can use the `saucectl` command to configure and run your test on Sauce Labs infrastructure.

```shell
# If it's the first time you're using saucectl, run:
saucectl configure

# follow the steps to configure your XCTest, with your `.app`/`.ipa` file and the `.xctestrun` test config. Use `Real Device` not `Virtual Device`
saucectl init xctest

# run the newly created XCTest config.
saucectl run
```

Visit the [XCTest configuration](/docs/mobile-apps/automated-testing/espresso-xcuitest/xctest-config.md) page for more options and information on `saucectl`.

### 2.2. Run XCTests Without Saucectl

You can integrate directly with our APIs if you would rather not use `saucectl`.

**First**, compile your `.app` into an `.ipa` file as described [here](/docs/mobile-apps/automated-testing/ipa-files.md#building-an-ipa-from-an-app-bundle).

**Second**, upload your `.ipa` and `.xctestrun` files to our AppStorage backend. See [AppStorage APIs](/docs/mobile-apps/app-storage.md#upload-apps-via-rest-api).

**Third**, call our native testing API using the AppStorage IDs of the two files you just uploaded. See [RDC native /test API](/docs/dev/api/rdc.md#start-a-xctest-xcuitest-or-espresso-job).

**Fourth**, poll the job status and wait until it is `passed`, `failed`, `error`, or `complete`. You can do this through the [Jobs API](/docs/dev/api/rdc.md#get-a-specific-real-device-job).


## 3. Special Cases and Troubleshooting

### 3.1. XCTest Plan Contains A XCUITest
XCUITests require a second app that simulates user interactions with your app under test. These apps typically have the suffix `UITests-Runner.app`. Before running this as part of your tests, you'll need to install this app on the device, just like any other app. You can do this through the [otherApps capability](/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md#otherapps).

### 3.2. XCTest Plan Contains A Target That Is For A Different App
An XCTest plan can contain multiple test targets, even for different apps. If this is the case, they need to be installed on the device before running the tests. If a scheme or XCTest plan includes multiple apps, they will be written to the same directory defined in [step 1](#1-how-to-build-the-app-and-xctestrun-files). To install them on a device, you can use the [otherApps capability](/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest.md#otherapps).


## 4. Example Implementation

For a practical example of how to set up and run your XCTest and XCUITest plans on Sauce Labs infrastructure, you can refer to
the [demo-xctest repository](https://github.com/saucelabs-training/demo-xctest).

This repository includes several examples of how to run an XCTest plan on Sauce Labs cloud, along with the source code for the demo app
used in these examples. By utilizing `xctestplan` and `xctestrun` configuration files, this demo shows how to run an XCTest plan, similar to
using the following xcodebuild command:

```shell
xcodebuild test-without-building -xctestrun $(PATH_TO_XCTESTRUN_FILE)
```

Visit the repository to see how everything is configured and try running your own XCTest plan on Sauce Labs' real devices.
