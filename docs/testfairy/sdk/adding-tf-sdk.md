---
id: adding-tf-sdk
title: Adding the Sauce Mobile App Distribution (TestFairy) SDK to your App
sidebar_label: Adding the Sauce Mobile App Distribution SDK
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Sauce Mobile App Distribution SDK helps you understand how users interact with your app. It can handle problems like crashes and on-screen error messages and integrate with your current development workflow.

Sauce Mobile App Distribution SDK features include:

- Recording videos of how users interact with your apps.
- Handling crashes and exceptions.
- Sending logs to the Sauce Mobile App Distribution dashboard for later inspection.
- Identifying and tagging users for searching and custom reports.
- Auto updates to ensure your users are on the latest version.

## Supported Platforms

To add the Sauce Mobile App Distribution SDK to your app, see the instructions for the relevant development platform:

- [Android](/testfairy/sdk/android/integrating-android)
- [iOS](/testfairy/sdk/ios/integrating-ios)
- [Cordova and PhoneGap](/testfairy/platforms/cordova)
- [Ionic](/testfairy/platforms/ionic)
- [React Native](/testfairy/platforms/react-native)
- [Unity](/testfairy/platforms/unity)
- [Xamarin](/testfairy/platforms/xamarin)
- [Titanium](/testfairy/platforms/titanium)
- [Nativescript](/testfairy/platforms/nativescript)
- [Neptune Software](/testfairy/platforms/neptune)
- [Flutter](/testfairy/platforms/flutter)

## Adding Events

Events are used to provide insights into how testers use your apps. They can help you track when a tester reaches key points in your app, such as visiting the in-app store.

To add an event to your timeline:

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
TestFairy.addEvent("<event name>");
```

Example

```java
public class MyActivity extends Activity {
    private void onPurchaseComplete() {
        TestFairy.addEvent("Purchase OK");
    }
}
```

</TabItem>

<TabItem value="ios">

```js
[TestFairy addEvent:@"<event name>"];
```

Example

```js
@implementation ViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    [TestFairy addEvent:@"Purchase OK"];
    //...
}
// ...
@end
```

</TabItem>

<TabItem value="react">

```js
TestFairy.addEvent("<event name>");
```

Example

```js
const TestFairy = require('react-native-testfairy');
var MyComponent = React.createClass({
    componentDidMount: function() {
        TestFairy.addEvent("Purchase OK");
    }
});
```

</TabItem>

</Tabs>

## Attaching Files To Sessions

Sauce Mobile App Distribution allows developers to attach files to sessions. As a developer, you can upload up to five files to a given session, with a maximum size of 15MB per file. Files must be local to the device.

Be sure to check the device logs for any problems uploading files. Only file extensions .jpeg, .jpg, .png, .txt, and .sqlite are supported.

To attach a file to a session, call the static instance method `attachFile` in the `TestFairy` class:

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>

<TabItem value="android">

```js
File file = ...
TestFairy.attachFile(file);
```

Example

```js
File file = new File("/path/to/file.txt");
TestFairy.attachFile(file);
```

</TabItem>

<TabItem value="ios">

```js
NSURL *file = ...
[TestFairy attachFile:file];
```

Example

```js
NSURL *file = [NSURL fileURLWithPath:"/path/to/file.txt"];
[TestFairy attachFile:file];
```

</TabItem>

</Tabs>
