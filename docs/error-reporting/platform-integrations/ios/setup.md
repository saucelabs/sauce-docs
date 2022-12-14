---
id: setup
title: Setting Up Backtrace for iOS
sidebar_label: Setup
description: Add Backtrace to your Swift and Objective-C Cocoa projects for iOS.
---

Add Backtrace to your iOS project to automatically detect and report handled and unhandled exceptions, errors, and crashes that occur in your apps written in Swift or Objective-C.

After you've completed the steps on this page, the Backtrace client will be installed and setup with the default configuration settings. Crash and error reports will include the following metadata:

- system
- machine
- signal
- exception
- thread
- process

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Supported Platforms

- iOS 10+
- macOS 10.10+
- tvOS 10+

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.
   :::

### System Requirements

- Xcode 10 or above

## Install the SDK

Use [CocoaPods](https://cocoapods.org/) to install the latest version of the reporting library. To use CocoaPods, add the [Backtrace pod](https://cocoapods.org/pods/Backtrace) to your `Podfile`:

```
pod 'Backtrace'
```

:::note
Make sure to specify `use_frameworks!` in your `Podfile`.
:::

## Initialize the Backtrace Client

To initialize `BacktraceClient`, create a `BacktraceCredentials` object with the name of your subdomain and submission token, and supply it as a parameter in the `BacktraceCredentials` constructor:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
// provide the name of the subdomain for your Backtrace instance and a submission token
let backtraceCredentials = BacktraceCredentials(submissionUrl: URL(string: "https://submit.backtrace.io/{subdomain-name}/{submission-token}/plcrash")!)
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
// provide the name of the subdomain for your Backtrace instance and a submission token
BacktraceCredentials *backtraceCredentials = [[BacktraceCredentials alloc] initWithSubmissionUrl: [NSURL URLWithString: @"https://submit.backtrace.io/{subdomain-name}/{submission-token}/plcrash"]];
```

</TabItem>
</Tabs>

## Upload Debug Symbols

After compiling your application with the new backtrace-cocoa library, make sure symbol files are generated in dSYM format and are uploaded to Backtrace to symbolicate incoming crashes.

For information on how to upload debug symbols, see [Symbol Formats and Upload Methods](/error-reporting/project-setup/symbolication/#symbol-formats-and-upload-methods).

### Set Debug Symbol Format

When building your iOS game in Xcode, make sure to configure the build settings to generate dSYM files for any build that you want to debug with Backtrace. By default, Xcode may only generate DWARF files.

To generate debug symbols in dSYM format:

1. In Xcode, go to your project target's **Build Settings**.
1. Under **Build Options**, set **Debug Information Format** to **DWARF with dSYM File**.
   <img src={useBaseUrl('img/error-reporting/ios/xcode-set-debug-format.png')} alt="" />

### Find Debug Symbols

To find dSYM files while building the project:

1. In Xcode, build your project.
1. From the **Products** folder, select your iOS app. <br/>
   <img src={useBaseUrl('img/error-reporting/ios/xcode-products.png')} width="400" alt="" />
1. Right-click, then click **Show in Finder**.
1. Zip all the dSYM files and upload to Backtrace.
   <img src={useBaseUrl('img/error-reporting/ios/finder-dsyms-products.png')} width="600" alt="" />

To find dSYM files while archiving the project:

1. In Xcode, archive your project.
1. To open the Archives organizer, go to **Window > Organizer** and click **Archives**.
1. Select your iOS app, then click **Show in Finder**. dSYMs are stored in a `.xcarchive` file.
   <img src={useBaseUrl('img/error-reporting/ios/xcode-organizer.png')} width="900" alt="" />
1. Right-click, then click **Show Package Contents**.
   <img src={useBaseUrl('img/error-reporting/ios/finder-xcarchive.png')} width="700" alt="" />
1. Search for the **dSYMs** folder.
1. Zip all the dSYM files and upload to Backtrace. <br/>
   <img src={useBaseUrl('img/error-reporting/ios/finder-dsyms-archive.png')} width="400" alt="" />

## Verify the Setup

At this point, you've installed and setup the Backtrace client to automatically capture exceptions, errors, and crashes in your iOS app.

To test the integration, throw an error an exception to send a report to your Backtrace instance.

### Send an Error/NSError

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
@objc func send(completion: ((BacktraceResult) -> Void))
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
 - (void) sendWithCompletion: (void (^)(BacktraceResult * _Nonnull)) completion;
```

</TabItem>
</Tabs>

### Send an NSException

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
@objc func send(exception: NSException, completion: ((BacktraceResult) -> Void))
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
 - (void) sendWithException: NSException completion: (void (^)(BacktraceResult * _Nonnull)) completion;
```

</TabItem>
</Tabs>

### Send macOS Exceptions

If you want to catch additional exceptions on macOS which are not forwarded by macOS runtime, set `NSPrincipalClass` to `Backtrace.BacktraceCrashExceptionApplication` in your `Info.plist` file.

Alternatively, you can set:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
UserDefaults.standard.register(defaults: ["NSApplicationCrashOnExceptions": true])
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
[[NSUserDefaults standardUserDefaults] registerDefaults:@{ @"NSApplicationCrashOnExceptions": @YES }];
```

</TabItem>
</Tabs>

:::caution
Make sure to use `@try ... @catch` or your app will crash.
:::
