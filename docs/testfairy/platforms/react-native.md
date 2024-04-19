---
id: react-native
title: React Native
sidebar_label: React Native
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy is a powerful tool that allows you to integrate session recording capabilities into your React Native applications. With TestFairy, you can gain valuable insights into how users interact with your app, identify and debug issues more effectively, and optimize the user experience.

## Installation

To integrate TestFairy into your React Native project, follow these steps:

1. Open your project's root directory in a terminal.
2. Run the following command to install the TestFairy package as a dependency:
   `npm install --save react-native-testfairy`

:::note
If you are using React Native version 0.60.0 or higher, you will need to run the following command in your iOS directory:

```
cd ios
pod install
```

:::

## Usage

After you have successfully installed the TestFairy library, you can enable TestFairy session recording in your React Native application. You will need your app token, which you can get from your preferences page on your TestFairy account. Follow these steps to get started:

1. Obtain your app token from the [user preferences](https://app.testfairy.com/settings/) on your TestFairy account.
2. Import the TestFairy bridge from your JavaScript file (e.g., index.ios.js, index.android.js, or App.js), and invoke begin passing in the app token. The best time to invoke begin is usually in componentWillMount or right before you register your application.

```
const TestFairy = require('react-native-testfairy');
...
componentWillMount: function() {
  TestFairy.begin(<insert ios app token here>);
}
```
