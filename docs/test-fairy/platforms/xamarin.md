---
id: xamarin
title: Xamarin Component
sidebar_label: Xamarin Component
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy is available for both Android and iOS. You can install the bindings by 1 of 2 ways:

1. Download the latest binding DLL directly from [GitHub](https://github.com/testfairy/testfairy-xamarin/releases) for your specific platform.

1. Install the bindings through [NuGet](https://www.nuget.org/packages/TestFairy.Xamarin/).

You will need an app token (TESTFAIRY_APP_TOKEN), which can be found in your [settings page](http://app.testfairy.com/settings/)

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

## Usage

### Identifying your users

See the [SDK Documentation](/test-fairy/sdk/identifying-users#xamarin) for more information.

### Session Attributes

See the [SDK Documentation](/test-fairy/sdk/session-attributes#xamarin) for more information.

### Remote Logging

See the [SDK Documentation](/test-fairy/sdk/remote-logging#xamarin) for more information.

### Upload dSYM

With TestFairy, symbolicating crash reports is as easy as pie. A simple Build Phase script can automatically upload the compressed .dSYM file for future symbolicaton.

To enable automatic uploads of .dSYM files, please follow these steps:

#### Step 1:

Copy **upload_dsym.sh** to your project folder. [Download here](https://s3.amazonaws.com/testfairy/sdk/upload-dsym.sh).

#### Step 2:

In Xamarin Studio, click on your project in the left sidebar, then open **"Settings"** and choose **Options**.

<img src={useBaseUrl('/img/test-fairy/platform/project_options.png')} alt="project options"/>

#### Step 3:

Click on **Custom Commands** on the left, press **Select a project operation** and select **After Build**

<img src={useBaseUrl('/img/test-fairy/platform/custom_command.png')} alt="custom command"/>

#### Step 4:

Add the following command to the command line

```sh
sh upload-dsym.sh UPLOAD_API_KEY -p DSYM_PATH
```

Make sure to replace **UPLOAD_API_KEY** with your upload API key, which can be found in the [Settings](https://app.testfairy.com/settings/) page.  
Replace **DSYM_PATH** with the path of your build folder.

#### Step 5:

Set the _"Working Directory"_ to the path of _upload-dsym.sh_ file

<img src={useBaseUrl('/img/test-fairy/platform/upload_dsym_command.png')} alt="upload dsym command"/>

### Xamarin Insights Integration

With Insights, Xamarin developers can review their app usage using the Xamarin Insights component. TestFairy fills in the gap by providing additional metrics, such as CPU usage and memory allocation and even video capture from the device. Any question you may have, as a developer, will be answered in the TestFairy session reports.

<img src={useBaseUrl('/img/test-fairy/platform/xamarin-insights-integration.png')} alt="xamarin insights integration"/>

In the left sidebar of **Insights**, you will now see a link to the session recorded by TestFairy.

## Integration

By simply adding the following code, the session recorded by TestFairy will be associated in Xamarin Insights as well (as seen in the screenshot above.) Place this snippet right after initializing Xamarin.Insights and TestFairy.

```csharp
NSNotificationCenter.DefaultCenter.AddObserver (TestFairy.SessionStartedNotification, delegate (NSNotification n) {
	  NSString sessionUrl = (NSString)n.UserInfo.ObjectForKey(TestFairy.SessionStartedUrlKey);
	  Insights.Track ("TestFairy", new Dictionary<string, string> {{ "URL", sessionUrl }});
});
```

## Android

Either in your custom Android Application class, or in any Activity class, simply make a call to Com.TestFairy.TestFairy.Begin(<TESTFAIRY_APP_TOKEN>). Below, you can see an example of invoking begin from the Main Activity.

```js
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

## Telling TestFairy what to record

TestFairy can record screens cast directly from the device, as well as monitor CPU consumption and memory allocations. It grabs
logs and even enables your users to provide feedback upon shaking their device.

To configure how and what TestFairy records, visit your **Build Settings**. You will see the build after calling Begin () at
least once.

## Mixing with other crash handlers

TestFairy plays nice. There is no problem using the crash handler with another reporter.
