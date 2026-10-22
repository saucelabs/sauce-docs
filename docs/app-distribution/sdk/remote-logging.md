---
id: remote-logging
title: Remote Logging
sidebar_label: Remote Logging
description: Log messages to a Mobile App Distribution session from your app with the Sauce Mobile Beta SDK remote logging methods.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

Sauce Labs Mobile App Distribution allows developers to log items with a session without logging into the console output. In some cases, workarounds allow you to wrap the Sauce Labs Mobile App Distribution remote logging method in a way that both log to the console and the session.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS Objective C', value: 'iosC'},
{label: 'iOS Swift', value: 'iosS'},
{label: 'React Native', value: 'react'},
]}>

<TabItem value="android">

```java
TestFairy.log("<tag>", "<message>");
```

Example

```java
// Be sure to import the SDK
import com.testfairy.TestFairy;

TestFairy.log("Tag", "Hello, Sauce Labs Mobile App Distribution!");
```

</TabItem>

<TabItem value="iosC">

```objectivec
TFLog(@"<message with format>", <arguments>);
[TestFairy log:@"<message>"];
```

Example

```objectivec
// Be sure to import the SDK
#import "TestFairy.h"

TFLog(@"Hello, %@", @"Sauce Labs Mobile App Distribution!");
[TestFairy log:@"Hello, Sauce Labs Mobile App Distribution!"];
```

We recommend sending all calls to <code>NSLog</code> to the SDK so you can continue to use <code>NSLog</code> and see all your log statements in your session.<br/>
To enable this, you have to redefine <code>NSLog</code> using a macro with the following lines. This macro allows you to continue using <code>NSLog</code> in your code while also adding the logs to the matching session in Sauce Labs Mobile App Distribution).

### Changing Your Prefix Header

```objectivec
#import "TestFairy.h"
#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)
```

1. Add the above line to a global header in your project, accessible to every class file.
2. Update or create a Prefix Header (.pch) for your project. If you do not have a PCH file in your project, you can follow the steps in the next section.

### Creating a New Prefix Header

If your project doesn’t already include a Prefix Header (.pch):<br/>

1. Create a new file under iOS &gt; Other &gt; PCH File.
2. Name your file `PCH file`.
3. Add these lines of code to the file:

```objectivec
#import "TestFairy.h"
#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)
```

4. From the **Project Navigator**, select your project and the corresponding target.
5. Project &gt; Build Settings &gt; Search: "Prefix Header".
6. Under the compiler settings group, you get the Prefix Header key.
7. Type the file's path, for example: `$(SRCROOT)/$(PROJECT_NAME)/ProjectName-Prefix.pch`. Your file may be at a different location.
8. Make sure the option `Precompile Prefix Header` is set to YES.
9. Clean your project, and rebuild.

</TabItem>

<TabItem value="iosS">

```swift
TestFairy.log("<message>")
```

Example

```swift
// Be sure to import the SDK
import TestFairy

TestFairy.log("Hello, Sauce Labs Mobile App Distribution!")
```

To forward existing `print` or `NSLog` output as well, call `TestFairy.log` from your logging helper. The Objective-C `NSLog` macro approach in the Objective C tab does not apply to Swift `print`.

</TabItem>

<TabItem value="react">

```js
TestFairy.log("<message>");
```

Example

```js
// Be sure to import the SDK
import TestFairy from '@saucelabs/mobile-beta-react-native';

TestFairy.log("Hello, Sauce Labs Mobile App Distribution!");
```

Objects passed to `log` are serialized to JSON before they are sent.

</TabItem>

</Tabs>
