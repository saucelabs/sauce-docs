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

### Swift Package Manager

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
### Cocoapods

### Carthage

### Manual