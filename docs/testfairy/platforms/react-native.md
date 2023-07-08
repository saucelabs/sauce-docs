---
id: react-native
title: React Native
sidebar_label: React Native
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Automatic Installation

From your project root, run the following commands:

`npm install --save react-native-testfairy`

If you're using React Native > 0.60.0, you will need to run the following command in your ios directory

```
cd ios
pod install
```

## Usage

Once the native library has been added to your project, you can now enable session recording with TestFairy. You will need your app token, which you can get from your preferences page on your TestFairy account.

Next, from your JavaScript file, (index.ios.js, index.android.js or App.js for example), import the TestFairy bridge into your project, and invoke begin passing in the app token. The best time to invoke begin is usually in componentWillMount or right before you register your application.

```
const TestFairy = require('react-native-testfairy');
...
componentWillMount: function() {
  TestFairy.begin(<insert ios app token here>);
}
```
