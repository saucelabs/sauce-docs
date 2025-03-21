---
id: remote-logging
title: Remote Logging
sidebar_label: Remote Logging
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

App Distribution allows developers to log items with a session without logging into the console output. In some cases, workarounds allow you to wrap the App Distribution remote logging method in a way that both log to the console and the session.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS Objective C', value: 'iosC'},
{label: 'iOS Swift', value: 'iosS'},
{label: 'Cordova', value: 'cordova'},
{label: 'React Native', value: 'react'},
{label: 'Nativescript', value: 'native'},
{label: 'Xamarin', value: 'xamarin'},
{label: 'Unity', value: 'unity'},
{label: 'Adobe Air', value: 'adobe'},
{label: 'Titanium', value: 'titanium'},
]}>

<TabItem value="android">

```js
TestFairy.log("<tag>", "<message>");
```

Example

```js
// Be sure to import App Distribution
import com.testfairy.TestFairy;

TestFairy.log("Tag", "Hello, TestFairy!");
```

</TabItem>

<TabItem value="iosC">

```js
TFLog(@"<message with format>", <arguments>);
[TestFairy log:@"<message>"];
```

Example

```js
// Be sure to import App Distribution
#import "TestFairy.h"

TFLog(@"Hello, %@", @"TestFairy!");
[TestFairy log:@"Hello, TestFairy!"];
```

We recommend sending all calls to <code>NSLog</code> to TestFairy so you can continue to use <code>NSLog</code> and see all your log statements in your session.<br/>
To enable sending logs to TestFairy, you have to redefine <code>NSLog</code> using a macro with the following lines. This macro allows you to continue using <code>NSLog</code> in your code while also adding the logs to the matching session in App Distribution).

### Changing Your Prefix Header

```js
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

```js
#import "TestFairy.h"
#define NSLog(s, ...) do { NSLog(s, ##__VA_ARGS__); TFLog(s, ##__VA_ARGS__); } while (0)
```

4. From the **Project Navigator**, select your project and the corresponding target.
5. Project &gt; Build Settings &gt; Search: "Prefix Header".
6. Under **Apple LLVM 7.0**, you get the Prefix Header key.
7. Type the file's path, for example: `$(SRCROOT)/$(PROJECT_NAME)/ProjectName-Prefix.pch`. Your file may be at a different location.
8. Make sure the option `Precompile Prefix Header` is set to YES.
9. Clean your project, and rebuild.

</TabItem>

<TabItem value="iosS">

</TabItem>

<TabItem value="cordova">

</TabItem>

<TabItem value="react">

</TabItem>

<TabItem value="native">

</TabItem>

<TabItem value="xamarin">

</TabItem>

<TabItem value="unity">

</TabItem>

<TabItem value="adobe">

</TabItem>

<TabItem value="titanium">

</TabItem>

</Tabs>
