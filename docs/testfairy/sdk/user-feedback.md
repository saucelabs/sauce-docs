---
id: user-feedback
title: Submitting User Feedback
sidebar_label: Submitting User Feedback
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Getting feedback from users and testers is crucial in the app development process. It provides valuable insights and helps improve the overall user experience. App Distribution offers an effortless way to collect feedback through its In-App Feedback feature. By integrating the App Distribution SDK into your app, you can enable users to report bugs, suggest improvements, and share their thoughts directly from within the app.

## Using In-app Feedback

App Distribution provides an effortless way to collect this feedback. If you [added the App Distribution SDK](https://docs.testfairy.com/SDK/Adding_The_SDK_To_Your_App.html) to your app, then all you need to do is enable the **In-App Bug Reporting** feature in your build settings in the App Distribution dashboard, and you can start collection feedbacks from your users with `"shake to report"`:

<img src={useBaseUrl('/img/test-fairy/enable-bug-2.png')} alt="Enable Shake to Feedback"/>

Users or testers can initiate the feedback collection process by shaking their devices while using the app. When they shake the device, the feedback form will be triggered, allowing them to report bugs or share their suggestions.

This feedback will be added to the existing app session they are currently running.

All feedback includes a screenshot, device information, submitter email, and text comments added. The feedback is added to the event timeline so you can find it without difficulty.

## Feedback Contents

When users provide feedback using the In-App Bug Reporting feature, the following information will be included:

- **Screenshot** - A screenshot of the app at the moment the feedback was triggered.
- **Device Information** - Details about the device, such as model, OS version, and other relevant technical information.
- **Submitter Email** - If available, the email address of the user or tester providing the feedback.
- **Text Comments** - Users can include specific comments to describe the issue or suggestion they are reporting.
- **Event Timeline** - The feedback will be added to the app's event timeline, making it easy for developers to track and analyze the feedback.

## Customizing In-app Feedback

App Distribution allows you to customize the way In-App Feedback is collected. If you prefer not to use the shake gesture for feedback collection, you can programmatically invoke the feedback form using a button click or any other gesture within your app. This way, users can access the feedback form from a designated area within the app, like the help menu or after encountering unexpected errors.

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
// Be sure to import App Distribution
import com.testfairy.TestFairy;

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.showFeedbackForm();
```

:::note

For advanced customization, see [Class FeedbackOptions.Builder](https://docs.testfairy.com/reference/android/com/testfairy/FeedbackOptions.Builder.html).

:::

</TabItem>

<TabItem value="ios">

```js
[TestFairy pushFeedbackController];
```

Example

```js
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
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
// Be sure to import App Distribution
import com.testfairy.AirTestFairy;

// Can be invoked on a button press
// or after your app passes a given page
AirTestFairy.pushFeedbackController();
```

</TabItem>

</Tabs>
