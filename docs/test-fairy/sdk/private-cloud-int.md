---
id: private-cloud-int
title: Private Cloud Integration
sidebar_label: Private Cloud Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can install the TestFairy enterprise suite on a private cloud on any AWS location in the US, Europe, Asia, or South America. According to your security policy, servers can be protected by custom firewall rules allowing access only from your offices.

With this installation, all data is stored privately using your resources.

## Setting Your Endpoint

Once your private cloud is set up, get the URL endpoint your app will direct all of its data towards. This URL must be passed into the SDK before the `begin` method is called.

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
