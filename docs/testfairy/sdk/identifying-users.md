---
id: identifying-users
title: Identifying Your Users
sidebar_label: Identifying your Users
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With App Distribution's user identification feature, you can enhance your testing and debugging process by efficiently correlating session recordings with specific users and their traits. This capability empowers you to gain deeper insights into how different users interact with your app and aids in the diagnosis of user-specific issues during testing.

## Example Configuration

Below are code examples illustrating how to utilize App Distribution's `setUserId` method on various platforms:

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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
var TiTestFairy = require('com.testfairy.titestfairy');

TiTestFairy.setUserId("john@example.com");
```

</TabItem>

</Tabs>

Where `userId` is a string representing an association to your backend. We recommend passing values such as email, phone number, or user ID your app may use. This value may not be nil and is searchable via API and web search.

## Important Notes

To make the most effective use of App Distribution's user identification feature, it's essential to keep in mind the following important notes:

- The `setUserId` method can be called multiple times to update the user identifier for different sessions.
- You can call `setUserId` before or after initializing a session with `begin`.
- The user identifier you provide must not be null and should be chosen from user attributes like email, phone number, or user ID.
- The user identifier you set using setUserId() will be searchable through the App Distribution API and web search interface.

