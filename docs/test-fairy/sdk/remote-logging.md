---
id: remote-logging
title: Remote Logging
sidebar_label: Remote Logging
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy allows developers to log items with a session, without logging to the console output. In some cases, there are workarounds that allow you to wrap the TestFairy remote logging method in a way that will both log to the console and to the session.

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
TestFairy.setServerEndpoint("<your private cloud url here>");
```

Example

```js
// Be sure to import TestFairy
import com.testfairy.TestFairy;

TestFairy.setServerEndpoint("my-subdomain.testfairy.com");
TestFairy.begin(context, "<your app token here>");
```

</TabItem>

<TabItem value="ios">

```js
[TestFairy setServerEndpoint:@"<your private cloud url here>"];
```

Example

```js
// Be sure to import TestFairy
#import "TestFairy.h"

[TestFairy setServerEndpoint:@"my-subdomain.testfairy.com"];
[TestFairy begin:@"<your app token here>"];
```

</TabItem>

<TabItem value="cordova">

```js
TestFairy.setServerEndpoint("<your private cloud url here>");
```

Example

```js
TestFairy.setServerEndpoint("my-subdomain.testfairy.com");
TestFairy.begin("<your app token here>");
```

</TabItem>

<TabItem value="react">

```js
TestFairy.setServerEndpoint("<your private cloud url here>");
```

Example

```js
// Be sure to import TestFairy
const TestFairy = require('react-native-testfairy');

TestFairy.setServerEndpoint("my-subdomain.testfairy.com");
TestFairy.begin("<your app token here>");
```

</TabItem>

<TabItem value="native">

```js
TestFairySDK.setServerEndpoint("<your private cloud url here>");
```

Example

```js
// Be sure to import TestFairy
import { TestFairySDK } from 'nativescript-testfairy';

TestFairySDK.setServerEndpoint("my-subdomain.testfairy.com");
TestFairySDK.begin("<your app token here>");
```

</TabItem>

<TabItem value="xamarin">

```js
TestFairy.SetServerEndpoint ("<your private cloud url here>");
```

Example

```js
// Be sure to import TestFairy
using TestFairyLib;

TestFairy.SetServerEndpoint ("my-subdomain.testfairy.com");
TestFairy.Begin ("<your app token here>");
```

</TabItem>

<TabItem value="unity">

```js
TestFairy.setServerEndpoint("<your private cloud url here>");
```

Example

```js
// Be sure to import TestFairy
using TestFairyUnity;

TestFairy.setServerEndpoint("my-subdomain.testfairy.com");
TestFairy.begin("<your app token here>");
```

</TabItem>

<TabItem value="adobe">

```js
AirTestFairy.setServerEndpoint("<your private cloud url here>");
```

Example

```js
// Be sure to import TestFairy
import com.testfairy.AirTestFairy;

AirTestFairy.setServerEndpoint("my-subdomain.testfairy.com");
AirTestFairy.begin("<your app token here>");
```

</TabItem>

<TabItem value="titanium">

```js
TiTestFairy.setServerEndpoint("<your private cloud url here>");
```

Example

```js
// Be sure to import TestFairy
var TiTestFairy = require('com.testfairy.titestfairy');

TiTestFairy.setServerEndpoint("my-subdomain.testfairy.com");
TiTestFairy.begin("<your app token here>");
```

</TabItem>

</Tabs>
