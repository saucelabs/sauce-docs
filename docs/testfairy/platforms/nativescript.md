---
id: nativescript
title: Nativescript
sidebar_label: Nativescript
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Mobile App Distribution for Nativescript is a bridge to the Sauce Mobile App Distribution SDK. Integrating the Sauce Mobile App Distribution SDK into your app enables you to better understand how your app performs on real devices. It provides insights into user behavior, session recording, and metrics to optimize your user experience and code.

## Installation

To install the Nativescript Sauce Mobile App Distribution plugin, run the following command:

```js
tns plugin add nativescript-testfairy
```

## Enabling Session Recording

Once the native library is added to your project, you can now enable session recording with Sauce Mobile App Distribution:

1. Obtain an app token from your Sauce Mobile App Distribution account. You can find the app token on the [Preferences](http://app.testfairy.com/settings/) page on your Sauce Mobile App Distribution account.
2. Import the Sauce Mobile App Distribution bridge  from your JavaScript file (app.js or app.ts) into you project.
3. Invoke the `begin`  passing in the app token. The best time to invoke `begin` is usually during the `launchEvent` of your application.


Here's an example of how to start your recording in TypeScript:

```typescript
import * as application from 'tns-core-modules/application';
import { TestFairySDK } from 'nativescript-testfairy';

application.on(application.launchEvent, (args) => {
    TestFairySDK.begin(<insert ios app token here>);
});

application.start({ moduleName: "main-page" });
```

Here's the same example of starting your recording in JavaScript:

```js
require("./bundle-config");
var application = require("application");
var TestFairySDK = require('nativescript-testfairy').TestFairySDK;

application.on(application.launchEvent, (args) => {
    TestFairySDK.begin(<insert ios app token here>);
});

application.start({ moduleName: "main-page" });
```

Here's a final sample of starting your recording using Angular:

```js
import { Component } from "@angular/core";
import { TestFairySDK } from 'nativescript-testfairy';

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
	constructor() {
		TestFairySDK.begin(<insert ios app token here>);
	}
}
```

You can now log in to your [account](http://app.testfairy.com) and view your sessions. For more information regarding available APIs, see the [documentation](https://github.com/testfairy/react-native-testfairy/blob/master/index.js).

## User ID and Session Attributes

To learn how to identify users and set session attributes using the Sauce Mobile App Distribution SDK in Nativescript, refer to the [identifying users section](/testfairy/sdk/identifying-users/) in the SDK Documentation.

## Remote Logging

To understand how to perform remote logging with the Sauce Mobile App Distribution SDK in Nativescript, refer to the [remote logging section](/testfairy/sdk/remote-logging/) in the SDK Documentation.


## Hiding Views

If you want to hide certain views from session recordings, check the [Nativescript section](/testfairy/sdk/identifying-users/) in the SDK Documentation for instructions.


:::note 
To stay updated on the project, report bugs, or contribute to the Nativescript Sauce Mobile App Distribution plugin, visit the [GitHub](https://github.com/testfairy/nativescript-testfairy) repository. 
:::

