---
id: xamarin
title: Xamarin Component
sidebar_label: Xamarin Component
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Mobile App Distribution allows you to gather insights and valuable data about your Xamarin-based Android and iOS applications. 

## Installation

Sauce Mobile App Distribution is available for both Android and iOS. You can install Sauce Mobile App Distribution bindings for Xamarin in one of two ways:

1. Download the latest binding DLL directly from [GitHub](https://github.com/testfairy/testfairy-xamarin/releases) for your specific platform.

1. Install the bindings through [NuGet](https://www.nuget.org/packages/TestFairy.Xamarin/).

You need an app token (TESTFAIRY_APP_TOKEN), which can be found on your [settings page](http://app.testfairy.com/settings/)

## Using the Xamarin SDK

Open `AppDelegate.cs` in your solution, and override or add the following code to `FinishedLaunching`.

```js
using TestFairyLib;
...

public override bool FinishedLaunching (UIApplication app, NSDictionary options)
{
 TestFairy.Begin (TESTFAIRY_APP_TOKEN);

 // Rest of the method here
 // ...
}
```


### Identifying Your Users

To learn how to identify users and set session attributes using the Sauce Mobile App Distribution SDK in Xamarin, refer to the [identifying users section](/testfairy/sdk/identifying-users/) in the SDK Documentation.

### Session Attributes

For information on how to set session attributes using the Sauce Mobile App Distribution Xamarin SDK, please refer to the [SDK Documentation on session attributes](/testfairy/sdk/session-attributes/).

### Remote Logging

To understand how to perform remote logging with the Sauce Mobile App Distribution SDK in Xamarin, refer to the [remote logging section](/testfairy/sdk/remote-logging/) in the SDK Documentation.

## Uploading dSYM

With Sauce Mobile App Distribution, symbolicating crash reports are as easy as pie. A simple Build Phase script can automatically upload the compressed .dSYM file for future symbolicaton.

To enable automatic uploads of .dSYM files, follow these steps:

1. Copy **upload_dsym.sh** to your project folder. [Download here](https://s3.amazonaws.com/testfairy/sdk/upload-dsym.sh).

2. In Xamarin Studio, click on your project in the left sidebar, then open **"Settings"** and choose **Options**.

<img src={useBaseUrl('/img/testfairy/platform/project_options.png')} alt="project options"/>

3. Click on **Custom Commands** on the left, press **Select a project operation** and select **After Build**

<img src={useBaseUrl('/img/testfairy/platform/custom_command.png')} alt="custom command"/>


4. Add the following to the command line.

```sh
sh upload-dsym.sh UPLOAD_API_KEY -p DSYM_PATH
```

5. Replace **UPLOAD_API_KEY** with your upload API key; you can find it on the [Settings](https://app.testfairy.com/settings/) page.
6. Replace **DSYM_PATH** with the path of your build folder.
7. Set the _"Working Directory"_ to the path of _upload-dsym.sh_ file

<img src={useBaseUrl('/img/testfairy/platform/upload_dsym_command.png')} alt="upload dsym command"/>

### Xamarin Insights Integration

With Insights, Xamarin developers can review their app usage using the Xamarin Insights component. Sauce Mobile App Distribution fills in the gap by providing additional metrics, such as CPU usage and memory allocation and even video capture from the device. Any questions you may have as a developer will be answered in the Sauce Mobile App Distribution session reports.

<img src={useBaseUrl('/img/testfairy/platform/xamarin-insights-integration.png')} alt="xamarin insights integration"/>

In the left sidebar of **Insights**, you see a link to the session recorded by Sauce Mobile App Distribution.

## Integration

By adding the following code, the session recorded by Sauce Mobile App Distribution is also associated with Xamarin Insights (as seen in the screenshot above). Place this snippet right after initializing Xamarin.Insights and Sauce Mobile App Distribution.

```csharp
NSNotificationCenter.DefaultCenter.AddObserver (TestFairy.SessionStartedNotification, delegate (NSNotification n) {
      NSString sessionUrl = (NSString)n.UserInfo.ObjectForKey(TestFairy.SessionStartedUrlKey);
      Insights.Track ("TestFairy", new Dictionary<string, string> {{ "URL", sessionUrl }});
});
```

### Android Integration

Either in your custom Android Application class or any Activity class, call `Com.TestFairy.TestFairy.Begin(<TESTFAIRY_APP_TOKEN>)`. Below is an example of invoking begin from the Main Activity.

```java
using Com.Testfairy;
...

public class MainActivity : Activity {
    protected override void OnCreate (Bundle savedInstanceState)
    {
        base.OnCreate (savedInstanceState);

        TestFairy.Begin (this, TESTFAIRY_APP_TOKEN);
        SetContentView (Resource.Layout.Main);
        ...
    }
}
```

## Telling Sauce Mobile App Distribution What To Record

Sauce Mobile App Distribution can record screen casts, monitor CPU consumption, memory allocations, grab logs, and enable user feedback by shaking their devices. To configure what Sauce Mobile App Distribution records, visit your **Build Settings** after calling Begin() at least once.


To configure how and what Sauce Mobile App Distribution records, visit your **Build Settings**. You see the build after calling `Begin ()` at least once.

## Mixing With Other Crash Handlers

Sauce Mobile App Distribution can work alongside other crash handlers without any issues.

