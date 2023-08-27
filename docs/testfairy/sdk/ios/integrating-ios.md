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

* Track app use.
* Handle crashes and report to server.
* Record screen video and other metrics.
* Understand user flow, using checkpoints.
* Grab NSLogs from client and report to server.
* Automatically update if a new build is available.

## Adding the SDK


<Tabs
defaultValue="Swift Package Manager"
values={[
{label: 'Swift Package Manager', value: 'Swift Package Manager'},
{label: 'Cocoapods', value: 'Cocoapods'},
{label: 'Carthage', value: 'Carthage'},
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

1. In the newly opened dialog search for the TestFairy package repository using the URL: https://github.com/testfairy/testfairy-ios-sdk-swift-package in the top right search bar.
2. Click the **Add Pacakge** button.
<img src={useBaseUrl('img/mobile-apps/xcframework-2.png')} alt="" width="800"/>

1. After the package has been downloaded, in the newly opened dialog, make sure the TestFairy package is selcted in the "Package Product" column
2. Make sure the right target is selected in the "Add to target" column
3. Click the **Add Pacakge** button
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
</Tabs>
