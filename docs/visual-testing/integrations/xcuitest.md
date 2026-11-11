---
id: xcuitest
title: XCUITest Integration
sidebar_label: XCUITest
description: Use the Sauce Visual XCUITest SDK to add visual checks to your iOS, iPadOS, tvOS, and macOS UI tests.
keywords:
- xcuitest
- visual-testing
- ios
- swift
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[XCUITest](https://developer.apple.com/documentation/xctest/user_interface_tests) is Apple's framework for automating user interface tests on iOS, iPadOS, tvOS, and macOS, written in Swift or Objective-C in Xcode. The Sauce Visual integration with XCUITest lets you take screenshots during your UI tests and compare them with approved baselines, so you can catch unintended visual changes in your app.

## How It Works

The Sauce Visual XCUITest SDK (`SauceVisual`) runs inside your UI test target. XCUITest runs your tests in a separate runner process that drives the app from outside, so the app under test doesn't need the SDK.

When a test calls `sauceVisualCheck()`, the SDK:

1. Takes a screenshot of the app, or of one element when you clip or capture a full page.
2. Uploads the screenshot to Sauce Visual and adds it to a build. The first check in the test run creates the build.
3. Names the snapshot after the running test, using the test class as the suite name and the test method as the test name.

Sauce Visual compares each snapshot with the baseline that has the same name, device, and OS version. The first time a snapshot runs, it becomes the baseline. Later runs are compared with it, and any differences are marked for review.

When the last test ends, the SDK finishes the build and prints a link to it. You review the results in [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings). See [Authentication](#authentication).
- An Xcode project with an XCUITest UI test target.
- One of the following platforms:
  - iOS or iPadOS 15 or later
  - tvOS 15 or later
  - macOS 14 or later

## Set Up the Integration

Add the `SauceVisual` SDK to your **UI test target only**, not to your app target. The SDK links XCTest, so an app that embeds it won't launch outside a test run.

You can add the SDK with Swift Package Manager or as an XCFramework.

<Tabs>
<TabItem value="spm" label="Swift Package Manager" default>

1. In Xcode, select **File** > **Add Package Dependencies**.
2. Enter the SauceVisual package URL `<SAUCEVISUAL_PACKAGE_URL>`, and then add the `SauceVisual` product to your UI test target.
3. Select the UI test target and open **Build Phases**.
4. Select **+** > **New Copy Files Phase**, set **Destination** to **Frameworks**, and leave **Subpath** empty. You can rename the phase to **Embed Frameworks**.
5. Click **+** in the new phase, add the `SauceVisual` product, and make sure **Code Sign On Copy** is selected.
6. Build the UI test target, and check that `MyAppUITests-Runner.app/PlugIns/MyAppUITests.xctest/Frameworks/SauceVisual.framework` exists.

:::note
`SauceVisual` is a dynamic framework, and Xcode copies it into the test bundle only if the UI test target has a **Copy Files** phase for it. Without this phase, Debug runs on a Simulator still work, because the Simulator loads the framework from the build folder in DerivedData. Runs on a physical device fail with `Library not loaded: @rpath/SauceVisual.framework/SauceVisual`.
:::

</TabItem>
<TabItem value="xcframework" label="XCFramework">

1. Download `SauceVisual.xcframework` from `<SAUCEVISUAL_XCFRAMEWORK_URL>`.
2. Add `SauceVisual.xcframework` to your UI test target.
3. Set the framework to **Embed & Sign**.

The archive includes dSYMs, and your UI test target signs the framework.

</TabItem>
</Tabs>

:::note
On macOS, UI tests need a signed runner. Ad-hoc signing (**Sign to Run Locally**) is enough. macOS may ask once to let Xcode control the computer under **Privacy & Security** > **Accessibility**.
:::

## Authentication

The SDK authenticates with Sauce Labs using your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). Store them as the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables, rather than writing them into your test code.

```bash
export SAUCE_USERNAME="<username>"
export SAUCE_ACCESS_KEY="<access-key>"
```

Tests on a Simulator or device don't inherit your shell environment. When you run tests with `xcodebuild`, pass each variable with the `TEST_RUNNER_` prefix. `xcodebuild` removes the prefix before it passes the variable to your tests:

```bash
TEST_RUNNER_SAUCE_USERNAME="$SAUCE_USERNAME" TEST_RUNNER_SAUCE_ACCESS_KEY="$SAUCE_ACCESS_KEY" \
  xcodebuild test -scheme MyAppUITests -destination 'platform=iOS Simulator,name=iPhone 17'
```

When you run tests from Xcode, set the variables under **Edit Scheme** > **Test** > **Arguments** > **Environment Variables**.

:::caution
Don't add your access key to a shared scheme that is committed to source control.
:::

To pass credentials and the region in code instead, create the client with `VisualCredentials`. Values passed in code take precedence over environment variables.

```swift
let visual = try VisualClient(
    credentials: VisualCredentials(username: "<username>", accessKey: "<access-key>"),
    region: .euCentral1
)
```

## Configure

### Build Options

Use `VisualBuildOptions` to set the build's name and context. These values decide which baselines new snapshots are compared with. For more information, see [Baseline Matching](../../visual-testing.md#baseline-matching).

```swift
import SauceVisual

let visual = try VisualClient(options: VisualBuildOptions(
    name: "Checkout",
    project: "iOS app",
    branch: "feature-checkout",
    defaultBranch: "main",
    tags: ["smoke"]
))
```

| Option | Description | Required | Example |
| :-------- | :-------- | :------- | :--------- |
| `name`    | The build name shown in the Sauce Visual dashboard. | No  | `"Checkout"` |
| `project`       | The project to associate the build with.      | No  | `"iOS app"`  |
| `branch`        | Your current Git branch.    | No   | `"feature-checkout"`   |
| `defaultBranch` | The branch that baselines come from, usually `main`. | No   | `"main"` |
| `tags`          | Tags to add to a new build. Tags set in code replace `SAUCE_VISUAL_TAGS`. An empty list means no tags. | No  | `["smoke", "nightly"]` |
| `customId`      | Your own ID for the build, such as a CI pipeline ID. A running build with this ID is reused; otherwise, one is created.  | No  | `ciPipelineId`|
| `buildId`       | The ID of an existing Sauce Visual build to add snapshots to. | No  |`"<build-id>"`  |
| `finishDelay`   | The number of seconds Sauce Visual waits before it finishes a shared build. Requires `customId`. | No  | `120` |

Every `VisualClient` in a test process shares one build, so all clients must use the same region, credentials, and build options.

### Environment Variables

The SDK reads the same environment variables as the other Sauce Visual SDKs. Values passed in code take precedence. Remember to add the `TEST_RUNNER_` prefix when you pass these variables to `xcodebuild`.

| Variable | Description  | Required | Example |
| :------- | :--------- | :------- | :-------- |
| `SAUCE_USERNAME` | Your Sauce Labs username. | Yes      | `<username>`    |
| `SAUCE_ACCESS_KEY` | Your Sauce Labs access key.  | Yes      | `<access-key>`  |
| `SAUCE_REGION`  | The Sauce Labs region: `us-west-1` (default), `us-east-4`, `eu-central-1`, or `asia-south-2`. | No | `eu-central-1`  |
| `SAUCE_VISUAL_BUILD_NAME` | The build name shown in the Sauce Visual dashboard. | No | `Checkout` |
| `SAUCE_VISUAL_PROJECT` | The project to associate the build with. | No   | `iOS app` |
| `SAUCE_VISUAL_BRANCH`  | Your current Git branch. | No | `feature-login` |
| `SAUCE_VISUAL_DEFAULT_BRANCH` | The branch that baselines come from. | No | `main` |
| `SAUCE_VISUAL_TAGS` | A comma-separated list of tags for a new build. | No | `smoke,nightly` |
| `SAUCE_VISUAL_CUSTOM_ID` | Your own ID for the build.  | No  | `<pipeline-id>` |
| `SAUCE_VISUAL_BUILD_ID` | The ID of an existing Sauce Visual build to add snapshots to. | No | `<build-id>` |

## Verify the Integration

1. Add a visual check to one of your UI tests:

   ```swift
   import XCTest
   import SauceVisual

   final class CheckoutUITests: XCTestCase {
       let visual = try! VisualClient(options: VisualBuildOptions(name: "Checkout"))

       @MainActor
       func testCheckoutPage() async throws {
           let app = XCUIApplication()
           app.launch()

           try await visual.sauceVisualCheck("Checkout page")
       }
   }
   ```

2. Run the test.
3. In the test log, find the `Sauce Visual: finished build` line and open the build link. You can also open [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).
4. Confirm that the build contains the `Checkout page` snapshot.

Because this is the first run, the snapshot becomes the baseline for later runs.

## Use the Integration

After you set up the integration, you can add visual checks at any point in your UI tests.

To add a visual check:

1. In your UI test class, create a `VisualClient`.
2. In a test, drive the app to the screen you want to compare.
3. Call `sauceVisualCheck()` with a name for the snapshot.

```swift
try await visual.sauceVisualCheck("Checkout page")
```

**Result:** The snapshot appears in the build in Sauce Visual. If it differs from its baseline, the differences are marked for review.

`sauceVisualCheck()` runs on the main actor, like the XCUI APIs. You don't need to finish the build, because the SDK finishes it when the last test ends.

### Check Options

Pass `VisualCheckOptions` to `sauceVisualCheck()` to change how a snapshot is taken and compared. Every option is optional.

```swift
try await visual.sauceVisualCheck("Products page", options: VisualCheckOptions(
    diffingMethod: .balanced,
    diffingMethodSensitivity: .high,
    diffingMethodTolerance: DiffingMethodTolerance(minChangeSize: 3)
))
```

| Option  | Description  |
| :--------- | :--------- |
| `testName`, `suiteName`  | Override the names taken from the running test.   |
| `clipElement` | Take a snapshot of one element only. See [Clip to an Element](#clip-to-an-element).|
| `ignoreRegions`, `ignoreElements` | Areas and elements to leave out of the comparison. See [Ignore Regions and Elements](#ignore-regions-and-elements). |
| `regions` | Areas to compare with their own rules. See [Selective Diffing](#selective-diffing). |
| `diffingMethod` | `.balanced` (default) or `.experimental`. See [Diffing Engines](../diffing-engines.md). |
| `diffingOptions` | The kinds of change to report: `.visual`, `.position`, `.dimensions`, and, with `captureDom`, `.content`, `.structure`, and `.style`. |
| `diffingMethodSensitivity`, `diffingMethodTolerance` | How strictly the `.balanced` method compares pixels. |
| `baselineOverride` | Compare against another snapshot's baseline. See [Baseline Overrides](#baseline-overrides). |
| `captureDom`  | Also upload the element tree. Off by default. See [Capture the Element Tree](#capture-the-element-tree). |
| `fullPage`  | Scroll an element and take a snapshot of all its content. See [Full-Page Screenshots](#full-page-screenshots). |

### Ignore Regions and Elements

Use `ignoreElements` to leave specific elements out of the comparison. Each element must exist when the check runs.

```swift
try await visual.sauceVisualCheck("Inventory page", options: VisualCheckOptions(
    ignoreElements: [app.staticTexts["timestamp"]]
))
```

Use `ignoreRegions` to leave rectangular areas out of the comparison. Rectangles are in points, like `XCUIElement.frame`, and the SDK converts them to screenshot pixels. Parts outside the screen are clipped.

```swift
try await visual.sauceVisualCheck("Inventory page", options: VisualCheckOptions(
    ignoreRegions: [CGRect(x: 0, y: 0, width: 402, height: 62)]
))
```

### Selective Diffing

Use `regions` to compare specific areas with their own rules. A region can be a rectangle or an element:

- `.ignoreChanges(in:)`: Ignore all changes in the area.
- `.detectChanges(in:_:)`: Report only the listed kinds of change in the area.

```swift
try await visual.sauceVisualCheck("Products page", options: VisualCheckOptions(
    regions: [
        .detectChanges(in: app.images["logo"], [.visual]),
        .ignoreChanges(in: app.otherElements["banner"])
    ]
))
```

The `.content`, `.structure`, and `.style` change kinds require `captureDom`. For more information, see [Selective Diffing](../selective-diffing.md).

### Clip to an Element

Use `clipElement` to take a snapshot of one element instead of the whole screen.

```swift
try await visual.sauceVisualCheck("Cart button", options: VisualCheckOptions(
    clipElement: app.otherElements["cart"]
))
```

Parts of the element that are off screen are cut off. Ignored regions still use screen coordinates.

### Full-Page Screenshots

Pass a scrollable element, such as a table, list, or web view, to take a snapshot of all its content instead of only the visible part.

```swift
try await visual.sauceVisualCheck("Products", options: VisualCheckOptions(
    fullPage: FullPageScreenshot(scrollElement: app.collectionViews["products"])
))
```

| Option | Description | Required | Example |
| :----- | :-----------| :------- | :------ |
| `scrollElement` | The scrollable element to capture. | Yes | `app.collectionViews["products"]` |
| `scrollLimit`   | The maximum number of screenshots to take. | No | `10` (default) |
| `delayAfterScroll` | The number of seconds to wait after each scroll. | No | `0.5` (default) |

The SDK scrolls the element down and takes a screenshot after each scroll, until the content stops moving or it reaches `scrollLimit`. It then stitches the screenshots into one image of the element. Keep the following in mind:

- Capture starts from the current scroll position. Scroll to the top first if needed.
- Ignored regions are relative to the element. If `clipElement` is set to a different element, it takes precedence and the full page is skipped.
- Bars that stay in place while the content scrolls, such as the status bar, a pinned header, or the Safari toolbar, appear once, at the top or bottom of the image.
- Capture stops early when screenshots can't be lined up, for example when the overlapping part is blank.
- With `captureDom`, the element tree covers only the first screen.

:::note
Full-page screenshots aren't available on tvOS.
:::

### Capture the Element Tree

Set `captureDom` to `true` to upload the screen's element tree with the snapshot. The dashboard then shows which element changed, and `diffingOptions` can compare text, structure, and style.

```swift
try await visual.sauceVisualCheck("Order summary", options: VisualCheckOptions(
    clipElement: app.otherElements["orderSummary"],
    diffingOptions: [.content, .position, .dimensions],
    captureDom: true
))
```

- The tree comes from the app under test, or from `clipElement` when it is set.
- In Safari or a web view, the tree holds the page's accessibility elements, not its HTML. Clip to the web view to capture it.
- If the tree can't be read, the snapshot is uploaded without it and a warning is printed.

### Baseline Overrides

Use `baselineOverride` to compare a snapshot against a different baseline. For example, to keep comparing against iOS 26.5 baselines after the Simulator moves to a newer iOS version:

```swift
try await visual.sauceVisualCheck("Checkout page", options: VisualCheckOptions(
    baselineOverride: BaselineOverride(operatingSystemVersion: "26.5")
))
```

Each field can be:

- **Not set:** Keep the snapshot's own value.
- **A value:** Match baselines with that value, such as `operatingSystemVersion: "26.5"` or `operatingSystem: .ios`.
- **`.null`:** Match baselines that have no value for that field, such as `device: .null`.

Baselines also match on the test and suite names. To compare with a snapshot from another test, override `testName` too. To set an override for every check, pass it to the client with `VisualClient(baselineOverride:)`. A check's own override replaces it.

### Use Objective-C

The SDK also supports Objective-C. Use `@import SauceVisual;` with Swift Package Manager, or the compatibility header with the XCFramework:

```objc
#import <SauceVisual/SauceVisual-Swift.h>

NSError *error = nil;
SLVBuildOptions *options = [[SLVBuildOptions alloc] initWithName:@"Checkout" project:@"iOS app"
    branch:@"feature-checkout" defaultBranch:@"main" customId:nil buildId:nil finishDelay:nil tags:nil];
SLVClient *visual = [[SLVClient alloc] initWithOptions:options error:&error];
if (visual == nil) {
    NSLog(@"Initialization failed: %@", error.localizedDescription);
    return;
}

SLVCheckOptions *checkOptions = [[SLVCheckOptions alloc] init];
checkOptions.ignoreElements = @[app.staticTexts[@"timestamp"]];
checkOptions.captureDom = YES;
[visual sauceVisualCheckWithName:@"Checkout page" options:checkOptions completion:^(SLVSnapshot *snapshot, NSError *failure) {
    if (failure != nil) {
        NSLog(@"Check failed: %@", failure.localizedDescription);
    }
}];
```

Pass `nil` for any build option you don't set. `SLVCheckOptions` supports the following options:

- `testName` and `suiteName`
- `clipElement`
- `ignoreRegions` (`NSValue` rectangles in points) and `ignoreElements`
- `diffingMethod`
- `captureDom`
- `fullPageScrollElement`, `fullPageScrollLimit`, and `fullPageDelayAfterScroll`
- `baselineOverride` (`SLVBaselineOverride`)

To pass credentials in code, use `initWithUsername:accessKey:region:options:error:`.

## CI/CD Integration

In a CI pipeline, run your UI tests with `xcodebuild` and pass your Sauce Labs credentials and build options as environment variables with the `TEST_RUNNER_` prefix:

```bash
TEST_RUNNER_SAUCE_USERNAME="$SAUCE_USERNAME" \
TEST_RUNNER_SAUCE_ACCESS_KEY="$SAUCE_ACCESS_KEY" \
TEST_RUNNER_SAUCE_VISUAL_BRANCH="$CI_BRANCH" \
TEST_RUNNER_SAUCE_VISUAL_DEFAULT_BRANCH="main" \
  xcodebuild test -scheme MyAppUITests -destination 'platform=iOS Simulator,name=iPhone 17'
```

Each test process creates its own build, so running the same tests on several devices creates one build per device. To add snapshots from several workers to one build, give every worker the same `customId`, for example your CI pipeline ID, and set a `finishDelay`:

```swift
let visual = try VisualClient(options: VisualBuildOptions(customId: ciPipelineId, finishDelay: 120))
```

- The first worker creates the build, and the other workers reuse it.
- Each worker finishes the build when its tests end. Sauce Visual waits `finishDelay` seconds after the last worker before it finishes the build, so set it longer than the gap between workers.

:::note
A build set through `buildId`, or through `customId` without a `finishDelay`, stays open when your tests end, because other workers may still be adding snapshots to it. Finish it from a pipeline step that runs after all test jobs.
:::

For more information, see [Continuous Integration](../workflows/ci.md).

## Troubleshooting

<details>
<summary>**`Library not loaded: @rpath/SauceVisual.framework/SauceVisual` on a device**</summary>

The UI test target links `SauceVisual` but doesn't embed it. Add the **Copy Files** phase described in [Set Up the Integration](#set-up-the-integration).

</details>

<details>
<summary>**A UI test run from Xcode hangs on a device**</summary>

`Setting up automation session` can take about a minute, and a later `Wait for <bundle ID> to idle` step doesn't finish. The test log contains this line:

```text
The executable does not contain "get-task-allow" in its entitlements, so the debugger will fail to attach.
```

When **Debug executable** is on (**Edit Scheme** > **Test** > **Info**), Xcode waits for the debugger to resume the app. The debugger can attach only to an app signed for development, so the cause is the app's signing, not the SauceVisual SDK.

Sign the app target for development in the configuration that the Test action builds, usually Debug: set `CODE_SIGN_STYLE` to `Automatic`, set `CODE_SIGN_IDENTITY` to `Apple Development`, and remove `PROVISIONING_PROFILE_SPECIFIER`. Check the `[sdk=iphoneos*]` variants of these settings too. Apply distribution signing when you export the archive instead.

To check a built app, run the following command. A development-signed app shows `"get-task-allow" => true`:

```bash
codesign -d --entitlements - --xml "MyApp.app" | plutil -p - | grep get-task-allow
```

Simulator runs and test runs started with `xcodebuild` aren't affected.

</details>

<details>
<summary>**`VisualError.invalidCredentials`**</summary>

The SDK couldn't find valid Sauce Labs credentials. Check that `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` are set for the test run, with the `TEST_RUNNER_` prefix when you use `xcodebuild`. See [Authentication](#authentication).

</details>

<details>
<summary>**`VisualError.elementNotFound`**</summary>

An element in `ignoreElements` or `regions` doesn't exist when the check runs. Wait for the element before the check, or remove it from the options.

</details>

<details>
<summary>**`VisualError.clipElementOffScreen`**</summary>

The `clipElement` or full-page `scrollElement` is entirely off screen. Scroll it into view before the check.

</details>

<details>
<summary>**`VisualError.conflictingConfiguration`**</summary>

Two `VisualClient` instances in the same test process use different regions, credentials, or build options. Use the same configuration for every client.

</details>

<details>
<summary>**`VisualError.buildAlreadyCompleted`**</summary>

The build with this `customId` is already finished. Use a new `customId` for each test run, for example your CI pipeline ID.

</details>

## Next Steps

- [XCUITest example project](https://github.com/saucelabs/visual-examples/tree/main/xcuitest)
- [Baseline Matching](../../visual-testing.md#baseline-matching)
- [Selective Diffing](../selective-diffing.md)
- [Diffing Engines](../diffing-engines.md)
- [Continuous Integration](../workflows/ci.md)
