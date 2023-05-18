---
id: xcuitest-introduction
title: XCUITest Introduction
sidebar_label: XCUITest Introduction
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

XCUITest is a test automation framework used for UI testing of mobile apps and web applications on iOS devices such as iPads and iPhones. It is built into Xcode and is Apple's official testing framework for iOS. With Sauce Labs, you can easily run your XCUITests on real iOS devices. This allows you to quickly and easily test your app on a variety of devices and configurations.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- You need to set `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as environment variables.
- [saucectl](https://docs.saucelabs.com/dev/cli/saucectl/) to orchestrates XCUITest.

## Building and Testing your XCUITest on Sauce Labs

The first step is to write an XCUITest for an iOS app. Let's take this [example](https://github.com/saucelabs/saucectl-xcuitest-example/tree/main/DemoApp) to demonstrate the test workflow, you can clone the repository and use the [`DemoApp`](https://github.com/saucelabs/saucectl-xcuitest-example/tree/main/DemoApp/DemoApp).

Here is a simple implementation that displays `Hello, world!` on the UI:

```
import SwiftUI
struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("Hello, world!")
        }
        .padding()
    }
}
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

The next step is to add a class to launch the UI and do an assertion. For reference, see the example below:

```
import XCTest
final class DemoAppUITests: XCTestCase {
    override func setUpWithError() throws {
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }
    func testExample() throws {
        // UI tests must launch the application that they test.
        let app = XCUIApplication()
        app.launch()
        // Use XCTAssert and related functions to verify your tests produce the correct results.
        XCTAssert(app.staticTexts["Hello, world!"].exists)
    }
}
```

### Building the Project

To run XCUITest on Sauce VM, you need to create the [`.ipa` files](https://docs.saucelabs.com/mobile-apps/automated-testing/ipa-files/#creating-an-xcuitest-package) package.

#### Using Xcode

To create a build follow the steps below:

1. Open your app project in [Xcode](https://developer.apple.com/xcode/).
2. Select `Generic iOS Device` or `Any iOS Device (arm64)` as your project's device target.
3. Make sure that your UI tests are part of a `Target Membership` and that those Targets are selected to be built in your Xcode `Build scheme`.
   :::note
   Targets containing UI Tests are typically selected to be built at the "Test" build action.
   :::
4. Generate your test package by selecting Product > Build For > Testing.
5. Navigate to your Xcode project's Products directory and find the generated .app files.

##### Creating .ipa Files for XCUITest Testing

:::warning warning
Make sure that you set the same iOS version for your app and test runner `iOS Deployment Target`. If they don't match, your tests will run locally, but fail when you run them against Sauce Labs real devices.
:::

To set the iOS version in your Xcode Project, follow these steps:

1. Select the Project you want to build.
2. Under Build Settings, set the iOS Deployment Target to the iOS version you want to use in your test. All target outputs of this project, including the app and your test runner, will be set to the same iOS version.

To set the iOS version in your Xcode Target, follow these steps:

1. Select the Target for your Project.
2. Under Build Settings, set the iOS Deployment Target to the iOS version you want to use in your test.

#### Using Command Line Tool

Use the following command to build the project:

```
$ xcodebuild \
    CODE_SIGN_IDENTITY="" CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO \
    clean build-for-testing \
    -project DemoApp.xcodeproj \
    -scheme "DemoApp" \
    -sdk iphoneos \
    -configuration Debug \
    -derivedDataPath build
```

It generates apps folders under `build/Build/Products/Debug-iphoneos`.

```
$ ls build/Build/Products/Debug-iphoneos
DemoApp.app                DemoAppTests.swiftmodule   DemoAppUITests.swiftmodule
DemoApp.swiftmodule        DemoAppUITests-Runner.app
```

##### Creating .ipa Files for XCUITest Testing

To build an ipa file for the app, see the example below:

```
$ cd build/Build/Products/Debug-iphoneos
$ mkdir Payload
$ cp -r DemoApp.app Payload
$ zip --symlinks -r DemoApp.ipa Payload
```

To build an ipa file for the test bundle using the similar commands, see the example below:

```
$ cd build/Build/Products/Debug-iphoneos
$ mkdir Payload
$ cp -r DemoAppUITests-Runner.app Payload/
$ zip --symlinks -r DemoAppUITests-Runner.ipa Payload
```

### Running XCUITest Using `saucectl`

To run a XCUITest, set `app` and `testApp` fields in the example [.sauce/config](https://github.com/saucelabs/saucectl-xcuitest-example/blob/main/.sauce/config.yml) file.

```
xcuitest:
  app: <DemoApp.ipa-location>
  testApp: <DemoAppUITests-Runner.ipa-location>
```

:::note
For more information about `app` and `testApp`, see our [guide](https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#xcuitest).
:::

The next step is to trigger the test by following command:

```
$ saucectl run
```

`saucectl` uploads `DemoApp.ipa` and `DemoAppUITests-Runner.ipa` to Sauce VM and executes XCUITest. You can review test results on Sauce UI.

#### Sharding XCUITest

`saucectl` supports running tests in parallel. To test in parallel, configure `saucectl` as follows. See [yaml configuration](./xcuitest.md#shard) for more details.

```
suites:
  - name: "sharded suites"
    shard: concurrency
    testListFile: test_classes.txt
```

The `test_classes.txt` can be generated by following these steps.

1. Open the project in XCode and select test target.
2. Click `Build Phases`.
3. In `Build Phases`, click the `+`-sign.
4. Add one of the following scripts:

```bash reference
https://github.com/saucelabs/my-demo-app-ios/blob/1.6.1/scripts/classes.sh
```

```bash reference
https://github.com/saucelabs/my-demo-app-ios/blob/1.6.1/scripts/methods.sh
```

![add-build-script.png](/img/xcuitest/add-build-script.png)

5. The script can be triggered,
   - by Xcode:
     - Going to `Product` > `Build For` > `Testing`
       ![trigger-build-script.png](/img/xcuitest/trigger-build-script.png)
     - Or triggering a Testing build by using `Command + Shift + U`
   - by running this command

```
xcodebuild \
  CODE_SIGN_IDENTITY="" \
  CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO \
  clean build-for-testing \
  -workspace "{workspaceName}.xcworkspace" \
  -scheme "{schemeName}" \
  -sdk iphoneos
```

The generated `test_classes.txt` or `test_classes_and_tests.txt` can be found here:

![generated-file.png](/img/xcuitest/generated-file.png)

### Pipeline Setup

We also provide some examples for pipeline setup.

- [GitHub](https://github.com/saucelabs/saucectl-xcuitest-example/blob/main/.github/workflows/test.yml)
- [Circle CI](https://github.com/saucelabs/saucectl-xcuitest-example/blob/main/.circleci/config.yml)
