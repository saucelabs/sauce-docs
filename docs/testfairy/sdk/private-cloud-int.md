---
id: private-cloud-int
title: Private Cloud Integration
sidebar_label: Private Cloud Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

You can install the Sauce Labs Mobile App Distribution enterprise suite on a private cloud on any AWS location in the US, Europe, Asia, or South America. According to your security policy, servers can be protected by custom firewall rules allowing access only from your offices.

With this installation, all data is stored privately using your resources.

## Setting Your Endpoint

Once your private cloud is set up, get the URL endpoint your app will direct all of its data towards. This URL must be passed into the SDK before the `begin` method is called.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'React Native', value: 'react'},
]}>

<TabItem value="android">

```js
TestFairy.setServerEndpoint("<your-private-cloud-url>");
```

Example

```js
// Be sure to import the SDK
import com.testfairy.TestFairy;

TestFairy.setServerEndpoint("my-subdomain.testfairy.com");
TestFairy.beginWithoutCrashHandler(context, "<sauce-mobile-beta-token>");
```

</TabItem>

<TabItem value="ios">

```js
[TestFairy setServerEndpoint:@"<your-private-cloud-url>"];
```

Example

```js
// Be sure to import the SDK
#import "TestFairy.h"

[TestFairy setServerEndpoint:@"my-subdomain.testfairy.com"];
[TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
```

</TabItem>

<TabItem value="react">

```js
TestFairy.setServerEndpoint("<your-private-cloud-url>");
```

Example

```js
// Be sure to import the SDK
import TestFairy from '@saucelabs/mobile-beta-react-native';

TestFairy.setServerEndpoint("my-subdomain.testfairy.com");
TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>");
```

</TabItem>

</Tabs>
