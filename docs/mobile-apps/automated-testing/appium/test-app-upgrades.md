---
id: test-app-upgrades-mid-session-app-installations
title: Test App Upgrades/Mid-Session App Installations
sidebar_label: Test App Upgrades
description: Learn how to test app upgrades or mid-session app installations.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
Installing apps mid-session from the Sauce Storage is only supported in our Real Device Cloud.
:::

## Introduction

As app developers, we often release newer versions of our applications to customers on a regular basis. In these instances, users are typically upgrading from an older version rather than installing the app from scratch. This transition may involve the migration of existing user data for the application to function correctly, which makes the testing of app upgrades a crucial step in the development process. By testing app upgrades, we can ensure that our application continues to operate as expected even following an upgrade.

But app upgrades aren't the only scenario where you might need to install apps during a running session. Sometimes, your app's functionality might rely on other dependent applications. In such cases, testing your app's interplay with these dependencies becomes essential. For instance, if your application pulls data from or interacts with another app, you'd want to ensure that this interaction remains smooth even after an upgrade. This makes the ability to install dependent apps during a run an invaluable feature for comprehensive testing.

This document will guide you through the process of installing apps mid-session in Appium, mimicking the user behavior when apps are being installed or upgraded from the App Store or Play Store.

:::caution Impotant
Note that downgrading apps is not a flow supported by Sauce Labs due to the fact that this is not a supported flow by the App Store or Play Store.
:::

## Usage

Before running your test execution, the first step involves uploading the app that is intended for upgrade (the newer version) or any dependent app. You can accomplish this task using our [REST API](/dev/api/storage/#upload-file-to-app-storage) or manually through our [Sauce Labs UI](/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app). This process is similar to how you would handle your app under test.
After uploading, you can use the following command to install apps mid-session using Appium

<Tabs
groupId="install-app"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Node.js', value: 'js'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'C#', value: 'csharp'},
]}>

<TabItem value="java">

<!-- prettier-ignore -->
```java
// When using the file name
driver.executeScript("mobile:installApp", ImmutableMap.of("appPath", "storage:filename=<file-name>.apk|ipa"));
// When using the file id
driver.executeScript("mobile:installApp", ImmutableMap.of("appPath", "storage:<file-id>"));
```

</TabItem>
<TabItem value="js">

<!-- prettier-ignore -->
```js
// When using the file name
driver.execute('mobile:installApp', {"appPath": "storage:filename=<file-name>.apk|ipa"})
// When using the file id
driver.execute('mobile:installApp', {"appPath": "storage:<file-id>"})
```

</TabItem>
<TabItem value="python">

<!-- prettier-ignore -->
```py
# When using the file name
driver.execute_script('mobile: installApp', {"appPath": "storage:filename=<file-name>.apk|ipa"})
# When using the file id
driver.execute_script('mobile: installApp', {"appPath": "storage:<file-id>"})
```

</TabItem>
<TabItem value="ruby">

<!-- prettier-ignore -->
```ruby
# When using the file name
@driver.execute_script('mobile: installApp', {"appPath" => "storage:filename=<file-name>.apk|ipa"})
# When using the file id
@driver.execute_script('mobile: installApp', {"appPath" => "storage:<file-id>"})
```

</TabItem>
<TabItem value="csharp">

<!-- prettier-ignore -->
```csharp
// When using the file name
driver.ExecuteScript("mobile: installApp", new Dictionary<string, string> { { "appPath", "storage:filename=<file-name>.apk|ipa" } });
// When using the file id
driver.ExecuteScript("mobile: installApp", new Dictionary<string, string> { { "appPath", "storage:<file-id>" } });
```

</TabItem>
</Tabs>

:::note Important
When installing apps mid-session, the app is not automatically launched. You will need to launch the app manually using the followings commands after installation.

- **iOS:** `mobile: launchApp`
- **Android:** `mobile: startActivity`

:::

These commands will launch the newly installed app. Remember to replace the `bundleId` or `intent` with your specific application's identifier or main activity, respectively.

<Tabs
groupId="start-app"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Node.js', value: 'js'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'C#', value: 'csharp'},
]}>

<TabItem value="java">

<!-- prettier-ignore -->
```java
// Android
driver.executeScript("mobile: startActivity", ImmutableMap.of("intent", "com.saucelabs.mydemoapp.rn/.MainActivity"));
// iOS
driver.executeScript("mobile: launchApp", ImmutableMap.of("bundleId", "com.saucelabs.mydemoapp.rn"));
```

</TabItem>
<TabItem value="js">

<!-- prettier-ignore -->
```js
// Android
driver.execute('mobile: startActivity', {intent: 'com.saucelabs.mydemoapp.rn/.MainActivity'});
//  
driver.execute('mobile: launchApp', { bundleId: 'com.saucelabs.mydemoapp.rn'});
```

</TabItem>
<TabItem value="python">

<!-- prettier-ignore -->
```py
# Android
driver.execute_script("mobile: startActivity", {"intent": "com.saucelabs.mydemoapp.rn/.MainActivity"})
# iOS
driver.execute_script("mobile: launchApp", {"bundleId": "com.saucelabs.mydemoapp.rn"})
```

</TabItem>
<TabItem value="ruby">

<!-- prettier-ignore -->
```ruby
# Android
@driver.execute_script("mobile: startActivity", {"intent" => "com.saucelabs.mydemoapp.rn/.MainActivity"})
# iOS
@driver.execute_script("mobile: launchApp", {"bundleId" => "com.saucelabs.mydemoapp.rn"})
```

</TabItem>
<TabItem value="csharp">

<!-- prettier-ignore -->
```csharp
// Android
driver.ExecuteScript("mobile: startActivity", new Dictionary<string, string> { { "intent", "com.saucelabs.mydemoapp.rn/.MainActivity" } });
// iOS
driver.ExecuteScript("mobile: launchApp", new Dictionary<string, string> { { "bundleId", "com.saucelabs.mydemoapp.rn" } });
```

</TabItem>
</Tabs>

This is an example test execution that installs an app mid-session, launches it and:

- validates that the version has been upgraded
- validates that the user data from the previous version has been retained

<video controls style={{"max-width": "800px"}}>

  <source src={useBaseUrl('img/mobile-apps/mid-session-app-upgrade.mp4')} />
</video>

## Supported Scenarios and Limitations

While this feature provides a great deal of flexibility, there are certain limitations for the sake of maintaining the integrity and security of the testing environment. Notably, only apps stored in our internal storage can be installed; installations from external locations are not permitted and will throw an error, see [FAQ](#faq).

Moreover, we support specific scenarios which include upgrading apps to newer versions and installing additional apps or dependencies necessary for testing your main application. However, it is important to remember that app downgrades are not supported.

## FAQ

### I'm getting the error `Failed to install the app from Sauce Storage.`

This message indicates that there's been a problem installing the application from our storage. Ensure the file name, file ID, and storage access are correct.

### I'm getting the error `Only apps from Sauce Storage are supported.`

This error message appears when there's an attempt to install an app from an external location, which is not supported. Make sure to upload your app to our storage first.

Should you encounter any other problems or have additional questions, don't hesitate to reach out to our support team.
