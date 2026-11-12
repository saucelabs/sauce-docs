---
id: private-cloud-int
title: Server Endpoint
sidebar_label: Server Endpoint
description: Point the Sauce Mobile Beta SDK at your Mobile App Distribution server endpoint.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

Every Mobile App Distribution deployment has its own server endpoint: the public instances per region as well as [Private Cloud](/app-distribution/security/private-cloud) instances. The SDK's built-in default server is no longer in service, so every app must pass its endpoint to `setServerEndpoint` before `beginWithoutCrashHandler`; an app that skips this call starts no sessions.

## Setting Your Endpoint

Copy the **Server Endpoint** from **Organization Settings > SDK Settings** on your dashboard (see [Organization Settings](/app-distribution/settings/organization/#sdk-settings)). It has the form `https://<host>/services/` and must be passed to the SDK before `beginWithoutCrashHandler` is called. If it reads **Not configured**, contact Sauce Labs support.

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
TestFairy.setServerEndpoint("<server-endpoint>");
```

Example

```java
// Be sure to import the SDK
import com.testfairy.TestFairy;

TestFairy.setServerEndpoint("https://<host>/services/");
TestFairy.beginWithoutCrashHandler(context, "<sauce-mobile-beta-token>");
```

</TabItem>

<TabItem value="ios">

```objectivec
[TestFairy setServerEndpoint:@"<server-endpoint>"];
```

Example

```objectivec
// Be sure to import the SDK
#import "TestFairy.h"

[TestFairy setServerEndpoint:@"https://<host>/services/"];
[TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
```

</TabItem>

<TabItem value="react">

```js
TestFairy.setServerEndpoint("<server-endpoint>");
```

Example

```js
// Be sure to import the SDK
import TestFairy from '@saucelabs/mobile-beta-react-native';

TestFairy.setServerEndpoint("https://<host>/services/");
TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>");
```

</TabItem>

</Tabs>
