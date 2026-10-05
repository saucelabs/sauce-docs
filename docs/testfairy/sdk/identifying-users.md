---
id: identifying-users
title: Identifying Your Users
sidebar_label: Identifying Your Users
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

With the user identification feature of the Sauce Mobile Beta SDK, you can enhance your testing and debugging process by efficiently correlating session recordings with specific users and their traits. This capability empowers you to gain deeper insights into how different users interact with your app and aids in the diagnosis of user-specific issues during testing.

## Example Configuration

Below are code examples illustrating how to use the SDK's `setUserId` method on various platforms:

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

</Tabs>

Where `userId` is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID your app may use. This value may not be nil and is searchable via API and web search.

## Important Notes

To make the most effective use of user identification, keep the following in mind:

- `setUserId` is the supported identity API. Call it with a non-null value chosen from user attributes such as email, phone number, or the user ID your app uses.
- You can call `setUserId` multiple times to update the identifier, before or after starting a session with `beginWithoutCrashHandler` (or `begin`).
- The user identifier you set with `setUserId` is searchable through the Sauce Labs Mobile App Distribution API and web search interface.
- `setCorrelationId` and `identify` are deprecated. They write the same user-identity field that `setUserId` writes (on Android, only the first call per session takes effect), so they overwrite, or are overwritten by, your real user ID. Replace `identify(id, traits)` with `setUserId(id)` plus one `setAttribute` call per trait. See [Session Attributes](/testfairy/sdk/session-attributes/).
- Do not use `setCorrelationId` or `identify` for the Backtrace (Sauce Labs Error Reporting) correlation id. The value that links a Backtrace crash report to a Sauce Mobile Beta session is the session attribute `sauce.correlation_id`, set with `setAttribute` before the session starts and sent to Backtrace as well. Keep `setUserId` for the real user. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/) and [Reserved Attributes for Backtrace Coexistence](/testfairy/sdk/session-attributes/#reserved-attributes-for-backtrace-coexistence).
