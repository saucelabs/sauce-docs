---
id: integrating-ios
title: Integrating iOS SDK
sidebar_label: Integrating iOS SDK
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<iframe width="854" height="480" src="https://www.youtube.com/embed/DhRX5UukvPM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Integrating the TestFairy SDK into your app helps you better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need to optimize your user experience and code.
You get to:

- Track app use.
- Handle crashes and report to server.
- Record screen video and other metrics.
- Understand user flow, using checkpoints.
- Grab NSLogs from client and report to server.
- Automatically update if a new build is available.

## Adding the SDK

<Tabs
defaultValue="Swift Package Manager"
values={[
{label: 'Swift Package Manager', value: 'Swift Package Manager'},
{label: 'Cocoapods', value: 'Cocoapods'},
{label: 'Carthage', value: 'Carthage'},
{label: 'Manual', value: 'Manual'},
]}>

<TabItem value="Swift Package Manager">

:::note
Requires Xcode 12+. Screenshots taken from Xcode 13.1
:::

1. Select your project from the Xcode navigator to open your project's configuration.
2. Make sure your project is selected from Project and Target list.
3. Click the **Package Dependencies** Toolbar item.
4. Click the '+' icon to add a package.
   <img src={useBaseUrl('img/mobile-apps/xcframework-1.png')} alt="" width="800"/>

5. In the newly opened dialog search for the TestFairy package repository using the URL: https://github.com/testfairy/testfairy-ios-sdk-swift-package in the top right search bar.
6. Click the **Add Pacakge** button.
   <img src={useBaseUrl('img/mobile-apps/xcframework-2.png')} alt="" width="800"/>

7. After the package has been downloaded, in the newly opened dialog, make sure the TestFairy package is selcted in the "Package Product" column
8. Make sure the right target is selected in the "Add to target" column
9. Click the **Add Pacakge** button
   <img src={useBaseUrl('img/mobile-apps/xcframework-3.png')} alt="" width="800"/>

</TabItem>
<TabItem value="Cocoapods">

1. Add the TestFairy pod to your Podfile by inserting the following line where applicable:

```java
pod 'TestFairy'
```

2. Run the `$ pod install` command to install the `TestFairy` dependency.

</TabItem>

<TabItem value="Carthage">
Once you have Carthage installed, you can begin adding frameworks to your project. Note that Carthage only supports dynamic frameworks, which are **only available on iOS 8 or later** (or any version of OS X).

1. Add `binary "https://app.testfairy.com/sdk/ios/carthage.json"` to your Cartfile.
2. Run `carthage update`.
3. On your application targets’ “General” settings tab, in the “Linked Frameworks and Libraries” section, drag and drop the TestFairy framework from the [Carthage/Build][] folder on disk.
   <br/><img src={useBaseUrl('/img/mobile-apps/carthage-1.png')} alt="Carthage Integration" width="600"/>

4. On your application targets’ “Build Phases” settings tab, click the “+” icon and choose “New Run Script Phase”. Create a Run Script in which you specify your shell (ex: bin/sh), add the following contents to the script area below the shell:

```java
/usr/local/bin/carthage copy-frameworks
```

and add the paths to the TestFairySDK frameworks under “Input Files”, e.g.:

```java
${SRCROOT}/Carthage/Build/iOS/TestFairySDK.framework
```

<br/><img src={useBaseUrl('/img/mobile-apps/carthage-2.png')} alt="Carthage Integration" width="600"/>  
</TabItem>

<TabItem value="Manual">

1. Download the framework from our [Download page](https://app.testfairy.com/sdk/ios/).
2. Unzip files and drag them into your project tree.
   <br/><img src={useBaseUrl('img/mobile-apps/tutorial-unzip-files.png')} alt="Carthage Integration" width="300"/>

Make sure Copy items if needed is checked when dragging files to your project.
<br/><img src={useBaseUrl('img/mobile-apps/copy-items-if-needed.png')} alt="Carthage Integration" width="300"/>

3. Add the following framework:
   - In Xcode, select the project file from the project navigator, on the left side of the project window.
   - Show Projects and Target List.
   - In the project settings editor, select the target to which you would like to add frameworks.
   - Select the “Build Phases” tab, and click the small triangle next to “Link Binary With Libraries” to view all of the frameworks in your application.
   - `SystemConfiguration.framework`

<br/><img src={useBaseUrl('img/mobile-apps/xcode-demo-1.gif')} alt="Carthage Integration" width="800"/>

</TabItem>
</Tabs>

## Initializing the SDK

<Tabs
defaultValue="Objective C"
values={[
{label: 'Objective C', value: 'Objective C'},
{label: 'Swift', value: 'Swift'},
]}>

<TabItem value="Objective C">

1. Open your AppDelegate.m file.

2. Add this code to your app:

```java
#import "TestFairy.h"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

	[TestFairy begin:@"SDK-u6qN9qXN"];

	// below of the rest of the didFinishLaunchingWithOptions method
	// ...
}
```

</TabItem>
<TabItem value="Swift">

1. Create an Objective-C bridging header
   Since this process only needs to be done once per project, if you have already done so, just update your bridging header file.
   - Right-click on your project, select New File...
   - Select Header File.h
   - Save as Bridging.h in your project
   - Click on Bridging.h to open it in editor
   - Add the following line to the code:

```java
#import "TestFairy.h"
```

:::note
If framework wasn't uploaded manually please try:

```java
#import "TestFairy/TestFairy.h"
```

:::

Update Build Settings with the new bridging header:

- Click on your project
- Select Build Settings tab
- Select the "All" filter, in order to find Swift Compiler - General: Objective-C Bridging Header
- Edit Swift Compiler - Code Generation: Objective-C Bridging Header (double-click to edit).
- Drag "Bridging.h" from the source tree onto the edit box opened

2. Open your AppDelegate.swift file.

3. Add this code to your app:

```java
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
	TestFairy.begin("SDK-u6qN9qXN")
	// below of the rest of the didFinishLaunchingWithOptions method
	// ...
	return true
}
```

</TabItem>
</Tabs>

## Using PencilKit for Better Feedback

You can give your users a better set of tools to markup any screenshots provided during feedback by adding PencilKit to your project. Simply add the PencilKit.framework to your project.

:::note
This requires iOS 13 and Xcode 11.
:::

<br/><img src={useBaseUrl('img/mobile-apps/pencilkit.png')} alt="Pencilkit" width="600"/>

If a screenshot is attached to the feedback, your users can edit the screenshot by tapping on it and using PencilKit to mark it up.

<br/><img src={useBaseUrl('img/mobile-apps/pencilkit-feedback.png')} alt="Pencilkit Feedback" width="250"/>
