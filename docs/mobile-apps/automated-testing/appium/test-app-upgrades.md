---
id: test-app-upgrades
title: Test App Upgrades/Mid-Session App Installations
sidebar_label: Test App Upgrades
description: Learn how to test app upgrades or mid-session app installations.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As app developers, we often release newer versions of our applications to customers on a regular basis. In these instances, users are typically upgrading from an older version rather than installing the app from scratch. This transition may involve the migration of existing user data for the application to function correctly, which makes the testing of app upgrades a crucial step in the development process. By testing app upgrades, we can ensure that our application continues to operate as expected even following an upgrade.

But app upgrades aren't the only scenario where you might need to install apps during a running session. Sometimes, your app's functionality might rely on other dependent applications. In such cases, testing your app's interplay with these dependencies becomes essential. For instance, if your application pulls data from or interacts with another app, you'd want to ensure that this interaction remains smooth even after an upgrade. This makes the ability to install dependent apps during a run an invaluable feature for comprehensive testing.

There are scenarios where you might want to delete an app and reinstall it again during a running session. For example, if you want to test the app's behavior when a user deletes and reinstalls it, you can use the mid-session install feature to accomplish this task. (Deleting apps can be done for [Android](https://github.com/appium/appium-uiautomator2-driver#mobile-removeapp) and [iOS](https://appium.github.io/appium-xcuitest-driver/4.32/execute-methods/#mobile-removeapp) command.)

:::caution Important
Installing apps mid-session from the Sauce Storage is only supported in our Real Device Cloud.
:::

## Installing App Mid-Session

Before running your test execution, the first step involves uploading the app that is intended for upgrade (the newer version) or any dependent app. You can accomplish this task using our [REST API](/dev/api/storage/#upload-file-to-app-storage). This process is similar to how you would handle your app under test.

After uploading, you can use the following command to install apps mid-session using Appium:

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

A successful installation will return the following response which can be used to validate if the right version of the app was installed:

<Tabs
groupId="install-app-response"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>

<TabItem value="android">

<!-- prettier-ignore -->
```json
{
  "packageName": "com.saucelabs.mydemoapp.android",
  "version": "1.5.0",
  "buildNumber": "274"
}
```

</TabItem>

<TabItem value="ios">

<!-- prettier-ignore -->
```json
{
  "bundleId": "com.saucelabs.mydemoapp.ios",
  "version": "1.5.0",
  "buildNumber": "191"
}
```

</TabItem>
</Tabs>

By default, Appium will not automatically launch the app after a mid-session install. You will need to launch the app manually using the followings commands after installation:

- **iOS:** `mobile: launchApp`
- **Android:** `mobile: startActivity`

We added two extra text lines in the Appium Commands list in the Sauce Labs UI to indicate that the app has been installed and needs to be launched manually. Additionally, you will notice the execution of the command `GET /timeouts`. This command acts as a "heartbeat" to keep the session active when installation takes longer than the default timeout of 60 seconds. By setting a maximum timeout of 5 minutes, the Appium session will remain active until the app is successfully installed, ensuring that it doesn't expire prematurely.

<img src={useBaseUrl('img/mobile-apps/appium-mid-session-logs.jpg')} alt="Mid session install logs" width="800" />

The following commands will launch the newly installed app. Remember to replace the `bundleId` or `intent` with your specific application's identifier or main activity, respectively.

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

This is an example test execution that installs an app mid-session, launches it, and:

- Validates that the version has been upgraded.
- Validates that the user data from the previous version has been retained.

<video controls style={{"max-width": "800px"}}>

  <source src={useBaseUrl('img/mobile-apps/mid-session-app-upgrade.mp4')} />
</video>

## Limitations

While this feature provides a great deal of flexibility, there are certain limitations to ensure the integrity and security of the testing environment:

- Only apps uploaded to our Sauce Storage can be installed. Installations from external locations are not permitted, see [FAQ](#faq).
- Downgrading apps is not supported by Sauce Labs due to the fact that this is not a supported flow by the Apple and Google ecosystem. Sauce Labs supports only upgrading apps to newer versions and installing additional apps or dependencies necessary for testing your main application.
- We do **not** capture or provide logs for the newly installed app upgrade. This includes network logs, device vitals, and crash logs. This is primarily because our logging system is designed to track the main app under test and adding additional apps mid-session could potentially muddle the clarity and focus of the logging data.

Despite these limitations, the ability to install additional apps or upgrades mid-session significantly expands the scope and effectiveness of your testing process. It allows you to mimic real-world user behavior more accurately and test the resilience of your app in a broader set of scenarios.

## FAQ

#### I'm getting the error `Failed to install the app from Sauce Storage.`

This message indicates that there's been a problem installing the application from our storage. Ensure the file name, file ID, and storage access are correct.

#### I'm getting the error `Only apps from Sauce Storage are supported.`

This error message appears when there's an attempt to install an app from an external location, which is not supported. Make sure to upload your app to our storage first.

#### My framework times out before the app is installed.

Installing apps mid-session can take longer than the default timeout of 60 seconds. To ensure that the Appium session will not timeout before the app is installed, we implemented a heartbeat to keep the session alive. This heartbeat is implemented by calling the `GET /timeouts` endpoint every 10 seconds to keep the session alive for a maximum of 5 minutes. If your framework times out before the app is installed, you need to increase the test session timeout in your framework. Please refer to the documentation of your framework for more information.

Should you encounter any other problems or have additional questions, don't hesitate to reach out to our support team.
