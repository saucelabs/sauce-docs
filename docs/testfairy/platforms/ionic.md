---
id: ionic
title: Ionic
sidebar_label: Ionic
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To add the Sauce Mobile App Distribution plugin to your Ioic 3 project, follow the instructions below.

## Installation

Run the following commands from your application root folder:

```bash
ionic cordova plugin add com.testfairy.cordova-plugin
```

Alternatively, you can install it directly from GitHub:

```bash
ionic cordova plugin add https://github.com/testfairy/testfairy-cordova-plugin
```

## Upgrading

To upgrade your plugin, run the following:

```bash
ionic cordova plugin update com.testfairy.cordova-plugin
```

## Usage

Initialize Sauce Mobile App Distribution with your [App Token](https://app.testfairy.com/settings/#apptoken) by calling `TestFairy.begin`. Your **APP TOKEN** is available at `https://app.testfairy.com/settings/#apptoken`.

We recommend invoking `TestFairy.begin` from `platform.ready()` in `src/app/app.component.ts`. Also, declare `TestFairy` at the top of the file.

```js
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

// Declare the Sauce Mobile App Distribution instance
declare var TestFairy: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
            TestFairy.begin(APP TOKEN);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
```

:::note
We do not support plugin mocking or browser development. During your development phase, we recommend checking for the existence of `TestFairy` on the `window` object before invoking any methods on the TestFairy object, for example

```js
// Check if TestFairy is available (will be undefined in browser)
if ((<any>window).TestFairy) {
    TestFairy.begin(APP TOKEN);
}
```

:::

## Identifying Your Users

See the SDK Documentation /testfairy/sdk/identifying-users#cordova for more information.

## Session Attributes

See the SDK Documentation /testfairy/sdk/session-attributes#cordova for more information.

## Remote Logging

See the SDK Documentation /testfairy/sdk/remote-logging#cordova for more information.

## Where To Go From Here?

Congratulations. You've successfully integrated Sauce Mobile App Distribution into your Ionic project. Visit your [dashboard](http://app.testfairy.com/), to see your app listed.

- Look at the [API documentation](https://github.com/testfairy/testfairy-cordova-plugin/blob/master/www/testfairy.js) for other calls to the Sauce Mobile App Distribution plugin.

- Follow the project on [GitHub](https://github.com/testfairy/testfairy-cordova-plugin) for updates, bug reports, or to contribute to the project.
