---
id: setup
title: Setting Up Backtrace for macOS
sidebar_label: Setup
description: Add Backtrace to your Swift and Objective-C Cocoa projects for macOS.
---

Add Backtrace to your macOS project to automatically detect and report handled and unhandled exceptions, errors, and crashes that occur in your apps written in Swift or Objective-C.

The Backtrace Cocoa SDK supports iOS, macOS, and tvOS. This guide covers macOS-specific setup. If you're looking for iOS setup, see [Setting Up Backtrace for iOS](/error-reporting/platform-integrations/ios/setup).

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

- macOS 12+

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

### System Requirements

- Xcode 10 or above

## Install the SDK

You can install the SDK with Swift Package Manager (SPM) or CocoaPods. The SDK is the same `backtrace-cocoa` package used for iOS — it includes macOS support out of the box.

<Tabs>
  <TabItem value="xcode" label="Xcode" default>
   <ol>
   <li>In <b>Xcode</b> select <b>File > Add Packages</b>, then search for and add <code>https://github.com/backtrace-labs/backtrace-cocoa.git</code>.</li>
   <li>Verify your project <b>Package Dependencies</b> list for backtrace-cocoa.</li>
   <li>Add Backtrace to your macOS target's <b>Frameworks, Libraries, and Embedded Content</b>.</li>
   </ol>
  </TabItem>
  <TabItem value="SPM" label="Swift Package Manager">
   Add the following dependency to your <code>Package.swift</code> file:

```
.package(url: "https://github.com/backtrace-labs/backtrace-cocoa.git, branch: "feature/SwiftPM")
```

  </TabItem>
  <TabItem value="cocoapods" label="CocoaPods">
   Add the following to your <code>Podfile</code>:
   <ol>
   <li>Set the platform to macOS with <code>platform :osx, '12.0'</code>.</li>
   <li>Specify <code>use_frameworks!</code>.</li>
   <li>
       Add the <code>Backtrace</code> pod:

```ruby
pod 'Backtrace'
```

   </li>
   </ol>

:::note
When using CocoaPods for macOS, specify `platform :osx` (not `platform :ios`).
:::

  </TabItem>
</Tabs>

## Initialize the Backtrace Client

To initialize `BacktraceClient`, create a `BacktraceCredentials` object with the name of your subdomain and submission token, and supply it as a parameter in the `BacktraceCredentials` constructor.

On macOS, you initialize the Backtrace client in `applicationDidFinishLaunching(_:)` (an `NSApplicationDelegate` method) instead of the iOS `application(_:didFinishLaunchingWithOptions:)`:

<Tabs groupId="languages">
<TabItem value="swift" label="Swift">

```swift
import Cocoa
import Backtrace

@main
class AppDelegate: NSObject, NSApplicationDelegate {

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        let backtraceCredentials = BacktraceCredentials(
            submissionUrl: URL(string: "https://submit.backtrace.io/{subdomain-name}/{submission-token}/plcrash")!)
        let backtraceConfiguration = BacktraceClientConfiguration(credentials: backtraceCredentials)
        BacktraceClient.shared = try? BacktraceClient(configuration: backtraceConfiguration)
    }
}
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
#import "AppDelegate.h"
@import Backtrace;

@interface AppDelegate () <BacktraceClientDelegate>
@end

@implementation AppDelegate

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {
    BacktraceCredentials *credentials = [[BacktraceCredentials alloc]
                                         initWithSubmissionUrl: [NSURL URLWithString: @"https://submit.backtrace.io/{subdomain-name}/{submission-token}/plcrash"]];
    BacktraceClientConfiguration *configuration = [[BacktraceClientConfiguration alloc]
                                                   initWithCredentials: credentials];
    BacktraceClient.shared = [[BacktraceClient alloc] initWithConfiguration: configuration error: nil];
}

@end
```

</TabItem>
</Tabs>

## Catch Uncaught macOS Exceptions {#catch-uncaught-exceptions}

By default, the macOS runtime does not forward all uncaught exceptions to crash reporters. To ensure that Backtrace captures these additional exceptions, you have two options:

### Option 1: Set `NSPrincipalClass` (Recommended)

Set `NSPrincipalClass` in your app's `Info.plist` to `Backtrace.BacktraceCrashExceptionApplication`. This replaces the default `NSApplication` with a Backtrace subclass that automatically intercepts and reports uncaught exceptions.

```xml
<key>NSPrincipalClass</key>
<string>Backtrace.BacktraceCrashExceptionApplication</string>
```

:::info
`BacktraceCrashExceptionApplication` is an `NSApplication` subclass that overrides `reportException(_:)` to automatically send uncaught exceptions to your Backtrace instance. This is macOS-only and has no iOS equivalent.
:::

### Option 2: Enable `NSApplicationCrashOnExceptions`

If you cannot change `NSPrincipalClass` (for example, if you already use a custom `NSApplication` subclass), you can instead opt into crashing on exceptions so that PLCrashReporter captures them:

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
When using `NSApplicationCrashOnExceptions`, your app will terminate on uncaught exceptions. Make sure to use `@try ... @catch` blocks for any exceptions you want to handle gracefully.
:::

## Upload Debug Symbols

After compiling your application with the backtrace-cocoa library, make sure symbol files are generated in dSYM format and are uploaded to Backtrace to symbolicate incoming crashes.

For information on how to upload debug symbols, see [Symbol Formats and Upload Methods](/error-reporting/project-setup/symbolication).

### Set Debug Symbol Format

When building your macOS app in Xcode, make sure to configure the build settings to generate dSYM files for any build that you want to debug with Backtrace. By default, Xcode may only generate DWARF files.

To generate debug symbols in dSYM format:

1. In Xcode, go to your project target's **Build Settings**.
1. Under **Build Options**, set **Debug Information Format** to **DWARF with dSYM File**.

### Find Debug Symbols

To find dSYM files while building the project:

1. In Xcode, build your project.
1. From the **Products** folder, select your macOS app.
1. Right-click, then click **Show in Finder**.
1. Zip all the dSYM files and upload to Backtrace.

To find dSYM files while archiving the project:

1. In Xcode, archive your project.
1. To open the Archives organizer, go to **Window > Organizer** and click **Archives**.
1. Select your macOS app, then click **Show in Finder**. dSYMs are stored in a `.xcarchive` file.
1. Right-click, then click **Show Package Contents**.
1. Search for the **dSYMs** folder.
1. Zip all the dSYM files and upload to Backtrace.

## Verify the Setup

At this point, you've installed and setup the Backtrace client to automatically capture exceptions, errors, and crashes in your macOS app.

To test the integration, throw an error or exception to send a report to your Backtrace instance.

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

## Differences from iOS

The following table summarizes the key differences between the macOS and iOS setup:

| Feature | macOS | iOS |
| --- | --- | --- |
| **Minimum OS version** | macOS 12+ | iOS 13+ |
| **App delegate method** | `applicationDidFinishLaunching(_:)` | `application(_:didFinishLaunchingWithOptions:)` |
| **App delegate protocol** | `NSApplicationDelegate` | `UIApplicationDelegate` |
| **Uncaught exception handling** | `BacktraceCrashExceptionApplication` via `NSPrincipalClass` | Not needed (UIKit forwards exceptions) |
| **CocoaPods platform** | `platform :osx, '12.0'` | `platform :ios, '13.0'` |
| **Framework import** | `Cocoa` / `AppKit` | `UIKit` |
