---
id: feedback
title: Getting Feedback
sidebar_label: Getting Feedback
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

User/Tester's feedback can contain vital and highly relevant information when testing an app.

It can improve your app user experience and make it easier for your testers to communicate with you their thoughts on how to make your app better.

### Using In-app Feedback as is

TestFairy provides an effortless way to collect this feedback.

If you [added the TestFairy SDK](https://docs.testfairy.com/SDK/Adding_The_SDK_To_Your_App.html) to your app, then all you need to do is enable the **In-App Bug Reporting** feature in your build settings in the TestFairy dashboard, and you can start collection feedbacks from your users with `"shake to report"`:

<img src={useBaseUrl('/img/test-fairy/testing-an-app/enable_feedback.png')} alt="In-app bug reporting"/>

Users or testers will be prompted to report feedback when they shake their devices.

This feedback will be added to the existing app session they are currently running.

All feedback includes a screenshot, device information, submitter email, and text comments added. The feedback is added to the event timeline so you can find it without difficulty.

### Customizing In-app Feedback

If you wish to use the TestFairy feedback form without having the user shake their device, you can invoke the feedback form programmatically and call the method you choose. You can do it with any gesture or button click in your app if the user opens the help menu or even gets an error message they didn't expect.

Note that if you choose to invoke the feedback form programmatically, it will be shown regardless if the in-app feedback is disabled in your build settings.

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
]}>

<TabItem value="android">

```java
TestFairy.showFeedbackForm();
```

Example

```java
// Be sure to import TestFairy
import com.testfairy.TestFairy;

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.showFeedbackForm();
```

:::note

For advance customization look at [Class FeedbackOptions.Builder](https://docs.testfairy.com/reference/android/com/testfairy/FeedbackOptions.Builder.html)

:::

</TabItem>

<TabItem value="ios">

```js
[TestFairy pushFeedbackController];
```

Example

```js
// Be sure to import TestFairy
#import "TestFairy.h"

// Can be invoked on a button press
// or after your app passes a given page
[TestFairy pushFeedbackController];
```

:::note

On iOS, if the In-App Bug Reporting feature is enabled, the feedback form will also be shown when the tester takes a screenshot.

You can also choose to hide the user email field in the feedback form using the [setFeedbackEmailVisible](https://docs.testfairy.com/reference/ios/Classes/TestFairy.html#//api/name/setFeedbackEmailVisible:) class.

:::
</TabItem>

<TabItem value="cordova">

```js
TestFairy.pushFeedbackController();
```

Example

```js
// Can be invoked on a button press
// or after your app passes a given page
TestFairy.pushFeedbackController();
```

</TabItem>

<TabItem value="react">

```js
TestFairy.pushFeedbackController();
```

Example

```js
// Be sure to import TestFairy
const TestFairy = require('react-native-testfairy');

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.pushFeedbackController();
```

</TabItem>

<TabItem value="native">

```js
TestFairySDK.pushFeedbackController();
```

Example

```js
// Be sure to import TestFairy
import { TestFairySDK } from 'nativescript-testfairy';

// Can be invoked on a button press
// or after your app passes a given page
TestFairySDK.pushFeedbackController();
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

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.PushFeedbackController();
```

</TabItem>

<TabItem value="unity">

```js
TestFairy.pushFeedbackController();
```

Example

```js
// Be sure to import TestFairy
using TestFairyUnity;

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.pushFeedbackController();
```

</TabItem>

<TabItem value="adobe">

```js
AirTestFairy.pushFeedbackController();
```

Example

```js
// Be sure to import TestFairy
import com.testfairy.AirTestFairy;

// Can be invoked on a button press
// or after your app passes a given page
AirTestFairy.pushFeedbackController();
```

</TabItem>

</Tabs>
