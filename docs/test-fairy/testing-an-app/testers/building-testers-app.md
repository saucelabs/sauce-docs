---
id: building-testers-app
title: Build the Testers App
sidebar_label: Build the Testers App
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

/FAQ/How_to_Build_the_Testers_App.html

https://github.com/testfairy/docs/blob/master/docs/800_FAQ/250_How_to_Build_the_Testers_App.md

TestFairy provides customers who run the service on a [private cloud](https://docs.testfairy.com/SDK/Private_Cloud_Integration.html) to build their own TestFairy Testers App.

This way, you can cusomtize and brand it as you wish.

In order to get do that please do the following:

# Android

### Source Code

Fork this project: [https://github.com/testfairy/testers-app-android](https://github.com/testfairy/testers-app-android)

### Code Changes

Change [Base_URL](https://github.com/testfairy/testers-app-android/blob/master/TestFairyApp/src/main/java/com/testfairy/app/MainActivity.java#L49)

```
private static final String BASE_URL = "https://<YOUR_SUBDOMAIN_HERE>.testfairy.com";
```

# iOS

### Source Code

Fork this project: [https://github.com/testfairy/testers-app-ios](https://github.com/testfairy/testers-app-ios)

### Code Changes

Change [ViewController.swift](https://github.com/testfairy/testers-app-ios/blob/master/TestFairy/ViewController.swift#L9)

```
let TESTFAIRY_URL = "https://<YOUR_SUBDOMAIN_HERE>.testfairy.com"
```
