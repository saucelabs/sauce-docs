---
id: building-testers-app
title: Build the Testers App
sidebar_label: Build the Testers App
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The TestFairy platform provides a unique service that allows customers to run the TestFairy Testers App on a private cloud. By doing so, you gain the ability to customize and brand the Testers App according to your requirements. This documentation will guide you through the process of building your personalized Testers App for both Android and iOS platforms.

## Android Testers App

### Source Code

To begin, you need to access the source code of the TestFairy Testers App for Android. This can be achieved by forking the project from the following [GitHub repository](https://github.com/testfairy/testers-app-android).

### Code Changes

After forking the project, you must make change to [Base_URL](https://github.com/testfairy/testers-app-android/blob/master/TestFairyApp/src/main/java/com/testfairy/app/MainActivity.java#L49) to customize the Testers App for your private cloud:

```java
private static final String BASE_URL = "https://<YOUR_SUBDOMAIN_HERE>.testfairy.com";
```

## iOS Testers App

### Source Code

To get started with building the iOS version of the Testers App, you should fork the project from the following [GitHub repository](https://github.com/testfairy/testers-app-ios).

### Code Changes

Once you have forked the iOS project, make the following changes to [ViewController.swift](https://github.com/testfairy/testers-app-ios/blob/master/TestFairy/ViewController.swift#L9):

```js
let TESTFAIRY_URL = "https://<YOUR_SUBDOMAIN_HERE>.testfairy.com"
```
