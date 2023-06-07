---
id: identifying-users
title: Identifying Your Users
sidebar_label: Identifying your Users
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy allows developers to correlate sessions to app-specific information such as users, server sessions, or events.
It helps in cases where sessions are anonymous or are related to server activities that are critical to understanding test behavior.

Furthermore, TestFairy enables identifying users with traits such as name, email, or phone number. These traits will later be available for the developer to search or review when looking at a specific session recording.

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

```js
TestFairy.setUserId("<userId>");
```

Example

```js
// Be sure to import TestFairy
import com.testfairy.TestFairy;

TestFairy.setUserId("john@example.com");
```

</TabItem>

<TabItem value="ios">

```js
[TestFairy setUserId:@"<userId>"];
```

Example

```js
// Be sure to import TestFairy
#import "TestFairy.h"

[TestFairy setUserId:@"john@example.com"];
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
// Be sure to import TestFairy
const TestFairy = require('react-native-testfairy');

TestFairy.setUserId("john@example.com");
```

</TabItem>

<TabItem value="native">

```js
TestFairySDK.setUserId("<userId>");
```

Example

```js
// Be sure to import TestFairy
import { TestFairySDK } from 'nativescript-testfairy';

TestFairySDK.setUserId("john@example.com");
```

</TabItem>

<TabItem value="xamarin">

```js
TestFairy.SetUserId ("<userId>");
```

Example

```js
// Be sure to import TestFairy
using TestFairyLib;

TestFairy.SetUserId ("john@example.com");
```

</TabItem>

<TabItem value="unity">

```js
TestFairy.setUserId("<userId>");
```

Example

```js
// Be sure to import TestFairy
using TestFairyUnity;

TestFairy.setUserId("john@example.com");
```

</TabItem>

<TabItem value="adobe">

```js
AirTestFairy.setUserId("<userId>");
```

Example

```js
// Be sure to import TestFairy
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
// Be sure to import TestFairy
var TiTestFairy = require('com.testfairy.titestfairy');

TiTestFairy.setUserId("john@example.com");
```

</TabItem>

</Tabs>

Where `userId` is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID your app may use. This value may not be nil and is searchable via API and web search.

:::note

- `setUserId:` may be called many times.
- You may call `setUserId` before or after `begin`.

:::
