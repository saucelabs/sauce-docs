---
id: identifying-users
title: Identifying Your Users
sidebar_label: Identifying your Users
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With the user identification feature of the Sauce Mobile Beta SDK (formerly the TestFairy SDK), you can enhance your testing and debugging process by efficiently correlating session recordings with specific users and their traits. This capability empowers you to gain deeper insights into how different users interact with your app and aids in the diagnosis of user-specific issues during testing.

## Example Configuration

Below are code examples illustrating how to use the SDK's `setUserId` method on various platforms:

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Cordova', value: 'cordova'},
{label: 'React Native', value: 'react'},
{label: 'Nativescript', value: 'native'},
{label: 'Xamarin', value: 'xamarin'},
{label: 'Unity', value: 'unity'},
{label: 'Adobe Air', value: 'adobe'},
{label: 'Titanium', value: 'titanium'},
]}>

<TabItem value="android">

```java
TestFairy.setUserId("<userId>");
```

Example

```java
// Be sure to import the SDK
import com.testfairy.TestFairy;

TestFairy.setUserId("john@example.com");
```

</TabItem>

<TabItem value="ios">

```objectivec
[TestFairy setUserId:@"<userId>"];
```

Example

```objectivec
// Be sure to import the SDK
#import "TestFairy.h"

[TestFairy setUserId:@"john@example.com"];
```

Swift

```swift
import TestFairy

TestFairy.setUserId("john@example.com")
```

</TabItem>

<TabItem value="cordova">

```js
TestFairy.setUserId("<userId>");
```

Example

```js
TestFairy.setUserId("john@example.com");
```

</TabItem>

<TabItem value="react">

```js
TestFairy.setUserId("<userId>");
```

Example

```js
// Be sure to import the SDK
import TestFairy from '@saucelabs/mobile-beta-react-native';

TestFairy.setUserId("john@example.com");
```

</TabItem>

<TabItem value="native">

```js
TestFairySDK.setUserId("<userId>");
```

Example

```js
// Be sure to import the SDK
import { TestFairySDK } from 'nativescript-testfairy';

TestFairySDK.setUserId("john@example.com");
```

</TabItem>

<TabItem value="xamarin">

```csharp
TestFairy.SetUserId ("<userId>");
```

Example

```csharp
// Be sure to import the SDK
using TestFairyLib;

TestFairy.SetUserId ("john@example.com");
```

</TabItem>

<TabItem value="unity">

```csharp
TestFairy.setUserId("<userId>");
```

Example

```csharp
// Be sure to import the SDK
using TestFairyUnity;

TestFairy.setUserId("john@example.com");
```

</TabItem>

<TabItem value="adobe">

```actionscript
AirTestFairy.setUserId("<userId>");
```

Example

```actionscript
// Be sure to import the SDK
import com.testfairy.AirTestFairy;

AirTestFairy.setUserId("john@example.com");
```

</TabItem>

<TabItem value="titanium">

```js
TiTestFairy.setUserId("<userId>");
```

Example

```js
// Be sure to import the SDK
var TiTestFairy = require('com.testfairy.titestfairy');

TiTestFairy.setUserId("john@example.com");
```

</TabItem>

</Tabs>

Where `userId` is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID your app may use. This value may not be nil and is searchable via API and web search.

## Important Notes

To make the most effective use of user identification, keep the following in mind:

- `setUserId` is the supported identity API. Call it with a non-null value chosen from user attributes such as email, phone number, or the user ID your app uses.
- You can call `setUserId` multiple times to update the identifier, before or after starting a session with `beginWithoutCrashHandler` (or `begin`).
- The user identifier you set with `setUserId` is searchable through the Sauce Labs Mobile App Distribution API and web search interface.
- `setCorrelationId` and `identify` are deprecated. They write the same user-identity field that `setUserId` writes (on Android, only the first call per process takes effect), so they overwrite, or are overwritten by, your real user ID. Replace `identify(id, traits)` with `setUserId(id)` plus one `setAttribute` call per trait; see [Session Attributes](/testfairy/sdk/session-attributes/). The methods remain only so that legacy TestFairy SDK 1.x code keeps compiling.
- Do not use `setCorrelationId` or `identify` for the Backtrace correlation id. The value that links a Backtrace crash report to a Sauce Mobile Beta session is the session attribute `sauce.correlation_id`, set with `setAttribute` before the session starts and sent to Backtrace as well. Keep `setUserId` for the real user. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/) and [Reserved Attributes for Backtrace Coexistence](/testfairy/sdk/session-attributes/#reserved-attributes-for-backtrace-coexistence).
