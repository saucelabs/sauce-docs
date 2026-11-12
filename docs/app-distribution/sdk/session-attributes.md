---
id: session-attributes
title: Session Attributes
sidebar_label: Session Attributes
description: Attach key-value attributes to Sauce Mobile Beta SDK sessions to generate better insights and search sessions by your own values.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

The Sauce Mobile Beta SDK can attach key-value attributes to a session, which helps you generate better insights and lets you search sessions by your own values.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'React Native', value: 'react'},
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

</Tabs>

The first value is a string `key` to help you search for the attribute in your session. The second parameter, `value`, is any string value for the attribute associated with the session. Neither value can be nil. These attributes are available later in the session recording page, are available via API, and are searchable.

Adding these lines will mark this session with the values above, so when you review the recording, you have more information about the person running the app.

:::note

- `setAttribute` may be called many times.
- You may call `setAttribute` before or after `beginWithoutCrashHandler` (or `begin`). Attributes set before the session starts are kept by the SDK and applied to every session it starts, including the new session created after `stop()` and resume.
- Limits: 64 attributes per session, keys of up to 64 characters, and values of up to 1000 characters on iOS and 1024 characters on Android. On Android and iOS, `setAttribute` returns a boolean and returns `false` when the attribute is rejected, for example when the limit is exceeded.
- Three of the keys that the SDK manages for Backtrace coexistence (`sauce.correlation_id`, `sauce.mobile_beta.session_started`, and `sauce.mobile_beta.session_url`) are reserved. `setAttribute` ignores them with a warning. See [SDK-Managed Attributes](#sdk-managed-attributes).

:::

## SDK-Managed Attributes

When the SDK runs together with Backtrace (Sauce Labs Error Reporting), a set of attributes links a crash report in Backtrace to the session recording in Sauce Labs Mobile App Distribution. The SDK sets most of them itself: it generates a new `sauce.correlation_id` at every session start, attaches it to the session, and writes the full set to Backtrace itself (through `BacktraceClient.shared` on iOS, the client passed to `setBacktraceClient` on Android, and `BacktraceClient.instance` in React Native). Two attributes stay with your app.

| Attribute | Set by | Value |
|---|---|---|
| `sauce.correlation_id` | The SDK, at every session start. Attached to the session and sent to Backtrace. | Lowercase UUID v4, new for every session. It is the join key between a Backtrace report and its session. |
| `sauce.sdk.coexistence_mode` | The SDK. Attached to the session and sent to Backtrace. | Always `backtrace_crash_owner`: Backtrace owns crash reporting and the SDK does not install a crash handler. |
| `sauce.mobile_beta.session_started` | The SDK. Sent to Backtrace only. | `"false"` at session start, `"true"` once Sauce Labs accepts the session, `"false"` if the start fails. |
| `sauce.mobile_beta.session_url` | The SDK. Sent to Backtrace only. | Empty at session start, then the URL of the session recording. |
| `sauce.release` | The SDK. Sent to Backtrace only. | Release identifier in the form `<appId>@<version>` (application or bundle ID and marketing version). |
| `sauce.dist` | The SDK. Sent to Backtrace only. | Build number (`versionCode` on Android, `CFBundleVersion` on iOS). |
| `sauce.environment` | Your app, with `setAttribute` and in the Backtrace attributes. | Deployment environment of the build, for example `beta` or `production`. |
| `mad.distribution_id` | Your app, with `setAttribute` and in the Backtrace attributes. | The Mobile App Distribution distribution ID. Set it only when your build is distributed through it. |

`sauce.correlation_id`, `sauce.mobile_beta.session_started`, and `sauce.mobile_beta.session_url` are reserved. `setAttribute` ignores them, logs a warning once per key, and returns `true` on iOS and Android, so the value the SDK generates for the session always wins. The 64-attribute limit counts your own keys only. To read the current id, call `sessionCorrelationId` (`getSessionCorrelationId` on Android and React Native), or implement the `onSessionCorrelationIdChanged` callback (`sessionCorrelationIdDidChange:` on iOS) of the session state listener.

```java
// Android example; the keys and values are identical on iOS and React Native.
TestFairy.setBacktraceClient(backtrace);
TestFairy.setAttribute("sauce.environment", "beta");
TestFairy.setServerEndpoint("<server-endpoint>");
TestFairy.beginWithoutCrashHandler(getApplicationContext(), "<sauce-mobile-beta-token>");

// Later, for example to tag your own analytics events with the session:
String correlationId = TestFairy.getSessionCorrelationId();
```

Do not use the deprecated `setCorrelationId` or `identify` for `sauce.correlation_id`: they write the user-identity field, not an attribute. Keep `setUserId` for the real user. See [Identifying Your Users](/app-distribution/sdk/identifying-users/).

In Backtrace, a custom attribute becomes filterable once it is indexed under Project Settings, Attributes (see [Backtrace attributes](/error-reporting/project-setup/attributes/)). Index `sauce.correlation_id` with the UUID format. In the Sauce Labs Mobile App Distribution dashboard, search the session list for the same value. The initialization order, how each platform links Backtrace, and complete examples are in [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence/).
