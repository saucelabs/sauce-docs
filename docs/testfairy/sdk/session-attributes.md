---
id: session-attributes
title: Session Attributes
sidebar_label: Session Attributes
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Mobile App Distribution can collect additional information from your session, which can help you generate better insights.

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
TestFairy.setAttribute("<key>", "<value>");
```

Example

```js
// Be sure to import Sauce Mobile App Distribution
import com.testfairy.TestFairy;

TestFairy.setAttribute("payment-method","free");
TestFairy.setAttribute("account-type","driver");
TestFairy.setAttribute("phone","+1-672-154-5109");
TestFairy.setAttribute("level","20");
```

</TabItem>

<TabItem value="ios">

```js
[TestFairy setAttribute:@"<key>" withValue:@"<value>"];
```

Example

```js
// Be sure to import Sauce Mobile App Distribution
#import "TestFairy.h"

[TestFairy setAttribute:@"name" withValue:@"John Snow"];
[TestFairy setAttribute:@"phone" withValue:@"+672-14-5109"];
[TestFairy setAttribute:@"age" withValue:@"20"];
[TestFairy setAttribute:@"favorite_color" withValue:@"blue"];
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
// Be sure to import Sauce Mobile App Distribution
const TestFairy = require('react-native-testfairy');

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
// Be sure to import Sauce Mobile App Distribution
import { TestFairySDK } from 'nativescript-testfairy';

TestFairySDK.setAttribute("name","John Snow");
TestFairySDK.setAttribute("phone","+672-14-5109");
TestFairySDK.setAttribute("age","20");
TestFairySDK.setAttribute("favorite_color","blue");
```

</TabItem>

<TabItem value="xamarin">

```js
TestFairy.SetAttribute ("<key>", "<value>");
```

Example

```js
// Be sure to import Sauce Mobile App Distribution
using TestFairyLib;

TestFairy.SetAttribute ("name","John Snow");
TestFairy.SetAttribute ("phone","+672-14-5109");
TestFairy.SetAttribute ("age","20");
TestFairy.SetAttribute ("favorite_color","blue");
```

</TabItem>

<TabItem value="unity">

```js
TestFairy.setAttribute("<key>", "<value>");
```

Example

```js
// Be sure to import Sauce Mobile App Distribution
using TestFairyUnity;

TestFairy.setAttribute("name","John Snow");
TestFairy.setAttribute("phone","+672-14-5109");
TestFairy.setAttribute("age","20");
TestFairy.setAttribute("favorite_color","blue");
```

</TabItem>

<TabItem value="adobe">

```js
AirTestFairy.setAttribute("<key>", "<value>");
```

Example

```js
// Be sure to import Sauce Mobile App Distribution
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
// Be sure to import Sauce Mobile App Distribution
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
- You may call `setAttribute` before or after `begin`.
- You can only store a maximum of 64 keys. The keys can be a maximum of 64 characters. The values can have a maximum of 1000 characters.

:::
