---
id: setup
title: Setting Up Backtrace for iOS
sidebar_label: Setup
description: Add Backtrace to your Swift and Objective-C Cocoa projects for iOS.
---
Add Backtrace to your iOS project to automatically detect and report handled and unhandled exceptions, errors, and crashes that occur in your apps written in Swift or Objective-C.

After you've completed the steps on this page, the Backtrace client will be installed and setup with the default configuration settings. Crash and error reports will include the following metadata:
* system
* machine
* signal
* exception
* thread
* process

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Supported Platforms
* iOS 10+
* macOS 10.10+
* tvOS 10+

## What You'll Need
* A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
* Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
* A Backtrace project and a submission token.

:::tip Generate a Submission Token
   1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
   1. Select **+**.
:::

### System Requirements
* Xcode 10 or above
* [CocoaPods](https://cocoapods.org/)

## Install the SDK
Use CocoaPods to install the reporting library. To use CocoaPods, add the following to your `Podfile`:

```
pod 'Backtrace'
```

## Initialize the Backtrace Client

<Tabs>
<TabItem value="swift" label="Swift">

```swift
let backtraceCredentials = BacktraceCredentials(endpoint: URL(string: "https://backtrace.io")!, token: "token")
BacktraceClient.shared = try? BacktraceClient(credentials: backtraceCredentials)
```

</TabItem>
<TabItem value="objc" label="Objective-C">

```objc
BacktraceCredentials *backtraceCredentials = [[BacktraceCredentials alloc]
                                             initWithEndpoint: [NSURL URLWithString: @"https://backtrace.io"]
                                             token: @"token"];
BacktraceClient.shared = [[BacktraceClient alloc] initWithCredentials: backtraceCredentials error: error];
```

</TabItem>
</Tabs>
