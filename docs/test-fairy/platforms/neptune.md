---
id: neptune
title: Neptune Software
sidebar_label: Neptune Software
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In order to add the TestFairy plugin to a Neptune project, you need to do the following procedure.

## Enable the TestFairy plugin

Add the following to the `config.xml` file in the Neptune Cockpit under Run / Mobile Client / Device.

```xml
<plugin name="com.testfairy.cordova-plugin" source="npm"/>
```

## Initialize the TestFairy SDK:

Add the following code to your `init` script in the App Designer:

```js
document.addEventListener("deviceready", function() {
    TestFairy.begin("APP TOKEN");
});
```

Remember to replace **APP TOKEN** with your own app token as displayed in [User Preferences](https://app.testfairy.com/settings/)
