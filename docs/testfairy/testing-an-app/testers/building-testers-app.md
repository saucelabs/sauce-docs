---
id: building-testers-app
title: Build the Testers App
sidebar_label: Build the Testers App
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy provides customers who run the service on a [private cloud](/test-fairy/sdk/private-cloud-int) to build their own TestFairy Testers App.

This way, you can customize and brand it as you wish.

To do that, do the following:

## Android

### Source Code

Fork this project: [https://github.com/testfairy/testers-app-android](https://github.com/testfairy/testers-app-android)

### Code Changes

Change [Base_URL](https://github.com/testfairy/testers-app-android/blob/master/TestFairyApp/src/main/java/com/testfairy/app/MainActivity.java#L49)

```java
private static final String BASE_URL = "https://<YOUR_SUBDOMAIN_HERE>.testfairy.com";
```

## iOS

### Source Code

Fork this project: [https://github.com/testfairy/testers-app-ios](https://github.com/testfairy/testers-app-ios)

### Code Changes

Change [ViewController.swift](https://github.com/testfairy/testers-app-ios/blob/master/TestFairy/ViewController.swift#L9)

```js
let TESTFAIRY_URL = "https://<YOUR_SUBDOMAIN_HERE>.testfairy.com"
```
