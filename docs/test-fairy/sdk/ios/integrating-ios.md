---
id: integrating-ios
title: Integrating iOS SDK
sidebar_label: Integrating iOS SDK
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Note: Requires Xcode 12+. Screenshots taken from Xcode 13.1Select your project from the Xcode navigator to open your project's configurationMake sure your project is selected from Project and Target list.Click the "Package Dependencies" Toolbar itemClick the '+' icon to add a packageIn the newly opened dialog search for the TestFairy package repository using the URL: github.com/testfairy/testfairy-ios-sdk-swift-package in the top right search barClick the "Add Pacakge" buttonAfter the package has been downloaded, in the newly opened dialog, make sure the TestFairy package is selcted in the "Package Product" columnMake sure the right target is selected in the "Add to target" columnClick the "Add Package" button

Add the TestFairy pod to your Podfile by inserting the following line where applicable:
`pod 'TestFairy'`

Run the $ pod install command to install the TestFairy dependency.

Once you have Carthage installed, you can begin adding frameworks to your project. Note that Carthage only supports dynamic frameworks, which are only available on iOS 8 or later (or any version of OS X).
Add `binary "https://app.testfairy.com/sdk/ios/carthage.json"` to your Cartfile.
Run carthage update.
On your application targets’ “General” settings tab, in the “Linked Frameworks and Libraries” section, drag and drop the TestFairy framework from the [Carthage/Build][] folder on disk.
On your application targets’ “Build Phases” settings tab, click the “+” icon and choose “New Run Script Phase”. Create a Run Script in which you specify your shell (ex: `bin/sh`), add the following contents to the script area below the shell:
`/usr/local/bin/carthage copy-frameworks`
and add the paths to the TestFairySDK frameworks under “Input Files”, e.g.:
`${SRCROOT}/Carthage/Build/iOS/TestFairySDK.framework`

Download the framework from our Download page.

Unzip files and drag them into your project tree.
Make sure Copy items if needed is checked when dragging files to your project.

Add the following framework:

In Xcode, select the project file from the project navigator, on the left side of the project window.

Show Projects and Target List.

In the project settings editor, select the target to which you would like to add frameworks.
Select the “Build Phases” tab, and click the small triangle next to “Link Binary With Libraries” to view all of the frameworks in your application.

`SystemConfiguration.framework`
