---
id: session-attributes
title: Session Attributes
sidebar_label: Session Attributes
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Sauce Mobile Beta SDK (formerly the TestFairy SDK) can attach key-value attributes to a session, which helps you generate better insights and lets you search sessions by your own values.

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
TestFairy.setAttribute("<key>", "<value>");
```

Example

```java
// Be sure to import the SDK
import com.testfairy.TestFairy;

TestFairy.setAttribute("payment-method","free");
TestFairy.setAttribute("account-type","driver");
TestFairy.setAttribute("phone","+1-672-154-5109");
TestFairy.setAttribute("level","20");
```

</TabItem>

<TabItem value="ios">

```objectivec
[TestFairy setAttribute:@"<key>" withValue:@"<value>"];
```

Example

```objectivec
// Be sure to import the SDK
#import "TestFairy.h"

[TestFairy setAttribute:@"name" withValue:@"John Snow"];
[TestFairy setAttribute:@"phone" withValue:@"+672-14-5109"];
[TestFairy setAttribute:@"age" withValue:@"20"];
[TestFairy setAttribute:@"favorite_color" withValue:@"blue"];
```

Swift

```swift
import TestFairy

TestFairy.setAttribute("name", withValue: "John Snow")
TestFairy.setAttribute("favorite_color", withValue: "blue")
```

</TabItem>

<TabItem value="cordova">

```js
TestFairy.setAttribute("<key>", "<value>");
```

Example

```js
TestFairy.setAttribute("name","John Snow");
TestFairy.setAttribute("phone","+672-14-5109");
TestFairy.setAttribute("age","20");
TestFairy.setAttribute("favorite_color","blue");
```

</TabItem>

<TabItem value="react">

```js
TestFairy.setAttribute("<key>", "<value>");
```

Example

```js
// Be sure to import the SDK
import TestFairy from '@saucelabs/mobile-beta-react-native';

TestFairy.setAttribute("name","John Snow");
TestFairy.setAttribute("phone","+672-14-5109");
TestFairy.setAttribute("age","20");
TestFairy.setAttribute("favorite_color","blue");
```

</TabItem>

<TabItem value="native">

```js
TestFairySDK.setAttribute("<key>", "<value>");
```

Example

```js
// Be sure to import the SDK
import { TestFairySDK } from 'nativescript-testfairy';

TestFairySDK.setAttribute("name","John Snow");
TestFairySDK.setAttribute("phone","+672-14-5109");
TestFairySDK.setAttribute("age","20");
TestFairySDK.setAttribute("favorite_color","blue");
```

</TabItem>

<TabItem value="xamarin">

```csharp
TestFairy.SetAttribute ("<key>", "<value>");
```

Example

```csharp
// Be sure to import the SDK
using TestFairyLib;

TestFairy.SetAttribute ("name","John Snow");
TestFairy.SetAttribute ("phone","+672-14-5109");
TestFairy.SetAttribute ("age","20");
TestFairy.SetAttribute ("favorite_color","blue");
```

</TabItem>

<TabItem value="unity">

```csharp
TestFairy.setAttribute("<key>", "<value>");
```

Example

```csharp
// Be sure to import the SDK
using TestFairyUnity;

TestFairy.setAttribute("name","John Snow");
TestFairy.setAttribute("phone","+672-14-5109");
TestFairy.setAttribute("age","20");
TestFairy.setAttribute("favorite_color","blue");
```

</TabItem>

<TabItem value="adobe">

```actionscript
AirTestFairy.setAttribute("<key>", "<value>");
```

Example

```actionscript
// Be sure to import the SDK
import com.testfairy.AirTestFairy;

AirTestFairy.setAttribute("name","John Snow");
AirTestFairy.setAttribute("phone","+672-14-5109");
AirTestFairy.setAttribute("age","20");
AirTestFairy.setAttribute("favorite_color","blue");
```

</TabItem>

<TabItem value="titanium">

```js
TiTestFairy.setAttribute("<key>", "<value>");
```

Example

```js
// Be sure to import the SDK
var TiTestFairy = require('com.testfairy.titestfairy');

TiTestFairy.setAttribute("name","John Snow");
TiTestFairy.setAttribute("phone","+672-14-5109");
TiTestFairy.setAttribute("age","20");
TiTestFairy.setAttribute("favorite_color","blue");
```

</TabItem>

</Tabs>

The first value is a string `key` to help you search for the attribute in your session. The second parameter, `value`, is any string value for the attribute associated with the session. Neither value can be nil. These attributes are available later in the session recording page, are available via API, and are searchable.

Adding these lines will mark this session with the values above, so when you review the recording, you have more information about the person running the app.

:::note

- `setAttribute` may be called many times.
- You may call `setAttribute` before or after `beginWithoutCrashHandler` (or `begin`). Attributes set before the session starts are kept by the SDK and applied to every session it starts, including the new session created after `stop()` and resume.
- Limits: 64 attributes per session, keys of up to 64 characters, and values of up to 1000 characters on iOS and 1024 characters on Android. On Android and iOS, `setAttribute` returns a boolean and returns `false` when the attribute is rejected, for example when the limit is exceeded.

:::

## Reserved Attributes for Backtrace Coexistence

When you run the SDK together with Backtrace (Sauce Labs Error Reporting), a small set of attributes is shared by both SDKs so that a crash report in Backtrace and the session recording in Sauce Labs Mobile App Distribution can be joined. Treat these keys as reserved: set them with `setAttribute` before `beginWithoutCrashHandler`, send the same values to Backtrace, and do not reuse the keys for anything else.

| Attribute | Meaning |
|---|---|
| `sauce.correlation_id` | One lowercase UUID v4 generated per app launch before either SDK starts; the join key between a Backtrace report and its session. |
| `sauce.sdk.coexistence_mode` | Always `backtrace_crash_owner`: Backtrace owns crash reporting and the SDK is crashless. |
| `sauce.environment` | Deployment environment of the build, for example `beta` or `production`. |
| `sauce.release` | Release identifier in the form `<appId>@<version>` (application or bundle ID and marketing version). |
| `sauce.dist` | Build number (`versionCode` on Android, `CFBundleVersion` on iOS). |
| `mad.distribution_id` | Mobile App Distribution distribution ID; set it only when your build is distributed through it. |

```java
// Android example; the keys and values are identical on iOS and React Native.
String correlationId = UUID.randomUUID().toString(); // generated before either SDK starts

TestFairy.setAttribute("sauce.correlation_id", correlationId);
TestFairy.setAttribute("sauce.sdk.coexistence_mode", "backtrace_crash_owner");
TestFairy.setAttribute("sauce.environment", "beta");
TestFairy.setAttribute("sauce.release", BuildConfig.APPLICATION_ID + "@" + BuildConfig.VERSION_NAME);
TestFairy.setAttribute("sauce.dist", String.valueOf(BuildConfig.VERSION_CODE));
TestFairy.beginWithoutCrashHandler(getApplicationContext(), "<sauce-mobile-beta-token>");
```

The reverse link is written on the Backtrace side only: on every session start, the app copies the session URL into the Backtrace attributes `sauce.mobile_beta.session_url` and `sauce.mobile_beta.session_started` (`"true"` or `"false"`) from a session state listener (`TestFairy.addSessionStateListener` on Android and React Native, `TestFairy.setSessionStateDelegate` on iOS). A launch can produce several sessions (`stop()` followed by resume), so overwrite these values on every start; never set them once.

Do not use the deprecated `setCorrelationId` or `identify` for `sauce.correlation_id`: they write the user-identity field, not an attribute. Keep `setUserId` for the real user; see [Identifying Your Users](/testfairy/sdk/identifying-users/).

In Backtrace, a custom attribute becomes filterable once it is indexed under Project Settings, Attributes (see [Backtrace attributes](/error-reporting/project-setup/attributes/)); index `sauce.correlation_id` with the UUID format. In the Sauce Labs Mobile App Distribution dashboard, search the session list for the same value. The initialization order and complete examples for each platform are in [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).
