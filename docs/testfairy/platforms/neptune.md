---
id: neptune
title: Neptune Software
sidebar_label: Neptune Software
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Sauce Mobile App Distribution for Neptune plugin allows you to integrate Sauce Mobile App Distribution functionality into your Neptune project. By following the steps below, you can enable the Sauce Mobile App Distribution plugin and initialize the Sauce Mobile App Distribution SDK in your Neptune application.


## Enable the Sauce Mobile App Distribution Plugin

To enable the Sauce Mobile App Distribution plugin in your Neptune project, follow these steps:

1. Open the Neptune Cockpit.
2. Add the following to the `config.xml` file in the Neptune Cockpit under **Run** > **Mobile Client** > **Device**:

```xml
<plugin name="com.testfairy.cordova-plugin" source="npm"/>
```

## Initialize the Sauce Mobile App Distribution SDK:

After enabling the Sauce Mobile App Distribution plugin, you need to initialize the Sauce Mobile App Distribution SDK in your Neptune application. Follow these steps:

1. Open the App Designer in Neptune.
2. Add the following code to your `init` script:

```js
document.addEventListener("deviceready", function() {
    TestFairy.begin("APP TOKEN");
});
```

:::note
Ensure that you replace **APP TOKEN** with your actual Sauce Mobile App Distribution app token. You can find the app token in your Sauce Mobile App Distribution [User Preferences](https://app.testfairy.com/settings/).
:::

