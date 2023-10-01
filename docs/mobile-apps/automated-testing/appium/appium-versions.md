---
id: appium-versions
title: Appium Versions
sidebar_label: Appium Versions
description: Appium Versions and EOL strategy.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Appium 1 End-of-life
The Appium core team does not maintain Appium 1.x anymore since the [1st of January 2022](https://github.com/appium/appium). This means that:

- bugfixes will not be released for Appium 1.x anymore and requires you to [migrate to Appium 2](./appium-2-migration.md)
- Appium 1 and it's packaged drivers are no longer 100% compatible with Android 13/iOS 16 and higher and require Appium 2 to run stably.

Sauce Labs still supports Appium 1.x in limited versions, but we recommend [migrating to Appium 2](./appium-2-migration.md) to keep your tests up-to-date and compatible with the latest platform versions.
:::

## Selecting Appium Versions

You can select a specific Appium version by using the `appiumVersion` capability as part of the `"sauce:options"`. The below examples show how to select the Appium version for your test and are using Android with Chrome as an example. See our [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) to help you construct your capabilities for the specific platform and Real Device/Android Emulator/iOS Simulator you want to test on.

The active Appium versions can be found in the [Real Devices](#real-devices), [Android Emulators](#android-emulators) and [iOS Simulators](#ios-simulators) sections.

<Tabs
groupId="capability-ex-emusim"
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
MutableCapabilities capabilities = new MutableCapabilities();

capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("platformName", "android");
capabilities.setCapability("appium:platformVersion", "14");
capabilities.setCapability("appium:deviceName", "Google Pixel 7 Pro");
capabilities.setCapability("appium:automationName", "uiautomator2");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
// Check below for the available versions
sauceOptions.put("appiumVersion", "latest"); 
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="js">

<!-- prettier-ignore -->
```js
const capabilities = {
    browserName: 'chrome',
    platformName: 'android',
    'appium:platformVersion': '14',
    'appium:deviceName': 'Google Pixel 7 Pro',
    'appium:automationName': 'uiautomator2',
    'sauce:options': {
        // Check below for the available version
        appiumVersion: 'latest'
    }
}
```

</TabItem>
<TabItem value="python">

<!-- prettier-ignore -->
```py
capabilities = {
    "browserName" : "chrome",
    "platformName" : "android",
    "appium:platformVersion" : "14",
    "appium:deviceName" : "Google Pixel 7 Pro",
    "appium:automationName": "uiautomator2",
    "sauce:options" : {
        # Check below for the available version
        "appiumVersion" : "latest"
    }
}
```

</TabItem>
<TabItem value="ruby">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "browserName" => "chrome",
    "platformName" => "android",
    "appium:platformVersion" => "14",
    "appium:deviceName" => "Google Pixel 7 Pro",
    "appium:automationName" => "uiautomator2",
    "sauce:options" => {
        # Check below for the available version
        "appiumVersion" => "latest"
    }
}
```

</TabItem>
<TabItem value="csharp">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();

capabilities.AddAdditionalCapability("browserName", "chrome");
capabilities.AddAdditionalCapability("platformName", "android");
capabilities.AddAdditionalCapability("appium:platformVersion", "14");
capabilities.AddAdditionalCapability("appium:deviceName", "Google Pixel 7 Pro");
capabilities.AddAdditionalCapability("appium:automationName", "uiautomator2");

HashMap<String, Object> sauceOptions = new Dictionary<string, object>();
// Check below for the available version
sauceOptions.Add("appiumVersion", "latest");
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

## End-of-Life and Release Strategy

To improve your testing experience, we're ending support for select versions of Appium 1 and certain bundles of Appium 2. A single stable Appium 1 release will ensure better compatibility and stability, especially on older Android and iOS devices. For Appium 2, we recommend using the most recent drivers to benefit from new features and bug fixes.

Our Appium 2 release strategy is as follows:

- A regularly updated 'latest' version, refreshed every two weeks.
- A monthly 'bundled' version, released on the first day of each month, that includes the latest Appium 2 drivers available as of the first day of the preceding month.
- These bundled versions, referred to by the `appiumVersion` capability, will carry the name `appium2-YYYYMMDD`. They will reach their end-of-life 11 months post-release.

This strategy is designed to ease the complexities you face in mobile app testing.

You can find which versions are currently supported in the [Real Devices](#real-devices), [Android Emulators](#android-emulators) and [iOS Simulators](#ios-simulators) sections, including their end-of-life dates.

## Real Devices

### Appium 2.x

<table>
    <thead>
        <tr>
            <th>Appium Version</th>
            <th>EOL Date</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>latest</code></td>
            <td><span className="sauceGreen">Active</span></td>
            <td>
                This will hold a collection of drivers that are compatible with the latest Appium server and driver versions that are installed in our cloud. We try to keep versions up to date every two weeks. You can find the exact versions in the first 20 log lines of the Appium logs of your executed test by going to <code>Test Details page > Logs > Appium Logs</code>
            </td>
        </tr>
        <tr>
            <td><code>2.0.0</code></td>
            <td><span className="sauceGold">January 31st, 2024</span></td>
            <td>
                This was the "old" alias for getting the latest Appium 2 drivers that were installed in the Sauce Labs Real Device Cloud. This alias is deprecated due to being unclear and is replaced by <code>latest</code>.<br />
                The alias <code>2.0.0</code> is a collection of the following drivers<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.0.1" target="_blank"><code>appium</code>: 2.0.1</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.20.2" target="_blank"><code>appium-flutter-driver</code>: 1.20.2</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.4" target="_blank"><code>appium-uiautomator2-driver</code>: 2.29.4</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.33.2" target="_blank"><code>appium-xcuitest-driver</code>: 4.33.2</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>appium2-20231001</code></td>
            <td><span className="sauceGold">September 30th, 2024</span></td>
            <td>
                This is a collection of drivers that were released in October 1st 2023<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.1.3" target="_blank"><code>appium</code>: 2.1.3</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.21.1" target="_blank"><code>appium-flutter-driver</code>: 1.21.1</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.5" target="_blank"><code>appium-uiautomator2-driver</code>: 2.29.5</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.35.0" target="_blank"><code>appium-xcuitest-driver</code>: 4.35.0</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>appium2-20230901</code></td>
            <td><span className="sauceGold">August 31st, 2024</span></td>
            <td>
                This is a collection of drivers that were released in September 1st 2023<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.1.3" target="_blank"><code>appium</code>: 2.1.3</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.21.1" target="_blank"><code>appium-flutter-driver</code>: 1.21.1</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.5" target="_blank"><code>appium-uiautomator2-driver</code>: 2.29.5</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.35.0" target="_blank"><code>appium-xcuitest-driver</code>: 4.35.0</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Appium 1.x

| Appium Version                                                    | EOL Date                                               | Notes                                                                                                                         |
| ----------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) | <span className="sauceGreen">Active</span>             |                                                                                                                               |
| [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.22.0`](https://github.com/appium/appium/releases/tag/v1.22.0) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.19.0`](https://github.com/appium/appium/releases/tag/v1.19.0) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.17.0`](https://github.com/appium/appium/releases/tag/v1.17.0) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.15.1`](https://github.com/appium/appium/releases/tag/v1.15.1) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.14.0`](https://github.com/appium/appium/releases/tag/v1.14.0) | <span className="sauceGold">December 31st, 2023</span> | Update to [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) or [migrate to Appium 2](./appium-2-migration.md) |

## Virtual Devices

### Android Emulators

| OS Version   | Supported Appium Versions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Default Appium Version                                            | Recommended Appium Version                                        | EOL Date |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | -------- |
| Android 13.0 | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.22.0`](https://github.com/appium/appium/releases/tag/v1.22.0), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [`2.0.0`](#appium-2-versions)                                     | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 12.0 | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.22.0`](https://github.com/appium/appium/releases/tag/v1.22.0), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 11.0 | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0)                                                                                                                                                                                                                                                                                                                                                                                                             | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 10.0 | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.11.1`](https://github.com/appium/appium/releases/tag/v1.11.1), [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)                                                                    | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 9.0  | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.12.1`](https://github.com/appium/appium/releases/tag/v1.12.1), [`1.11.1`](https://github.com/appium/appium/releases/tag/v1.11.1), [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0) | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 8.1  | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.12.1`](https://github.com/appium/appium/releases/tag/v1.12.1), [`1.11.1`](https://github.com/appium/appium/releases/tag/v1.11.1), [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0) | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 8.0  | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.12.1`](https://github.com/appium/appium/releases/tag/v1.12.1), [`1.11.1`](https://github.com/appium/appium/releases/tag/v1.11.1), [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0) | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 7.1  | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.12.1`](https://github.com/appium/appium/releases/tag/v1.12.1), [`1.11.1`](https://github.com/appium/appium/releases/tag/v1.11.1), [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0) | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 7.0  | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.12.1`](https://github.com/appium/appium/releases/tag/v1.12.1), [`1.11.1`](https://github.com/appium/appium/releases/tag/v1.11.1), [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0) | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 6.0  | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.12.1`](https://github.com/appium/appium/releases/tag/v1.12.1), [`1.11.1`](https://github.com/appium/appium/releases/tag/v1.11.1), [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0) | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`2.0.0`](#appium-2-versions)                                     |          |
| Android 5.1  | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1), [`1.20.2`](https://github.com/appium/appium/releases/tag/v1.20.2), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.12.1`](https://github.com/appium/appium/releases/tag/v1.12.1), [`1.11.1`](https://github.com/appium/appium/releases/tag/v1.11.1), [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)                                                                                                                                                                                                                     | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) |          |

### iOS Simulators

| Platform Version | Supported Appium Versions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Default Appium Version                                            | Recommended Appium Version                                      | EOL Date |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------- | -------- |
| iOS 16.2         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [`2.0.0`](#appium-2-versions)                                     | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 16.1         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [`2.0.0`](#appium-2-versions)                                     | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 16.0         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [`2.0.0`](#appium-2-versions)                                     | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 15.5         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 15.4         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 15.2         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2)                                                                                                                                                                                                                                                                                                                                                                                                                   | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 15.0         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.22.0`](https://github.com/appium/appium/releases/tag/v1.22.0)                                                                                                                                                                                                                                                                                                                                                | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 14.5         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.20.0`](https://github.com/appium/appium/releases/tag/v1.20.0)                                                                                                                                                                                                          | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 14.4         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.20.0`](https://github.com/appium/appium/releases/tag/v1.20.0)                                                                                                                                                                                                          | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 14.3         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1), [`1.20.0`](https://github.com/appium/appium/releases/tag/v1.20.0)                                                                                                                                                                                                          | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 14.0         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.19.1`](https://github.com/appium/appium/releases/tag/v1.19.1), [`1.18.3`](https://github.com/appium/appium/releases/tag/v1.18.3)                                                                                                                                       | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 13.4         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.19.1`](https://github.com/appium/appium/releases/tag/v1.19.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1)                                                                                                                                       | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 13.2         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.19.1`](https://github.com/appium/appium/releases/tag/v1.19.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0)                                                                    | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 13.0         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.19.2`](https://github.com/appium/appium/releases/tag/v1.19.2), [`1.19.1`](https://github.com/appium/appium/releases/tag/v1.19.1), [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1), [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0), [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0) | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 12.4         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0)                                                                                                                                                                                                                                                                             | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 12.2         | [`2.0.0`](#appium-2-versions), [`2.0.0-beta66`](#appium-2-versions), [`2.0.0-beta56`](#appium-2-versions), [`2.0.0-beta44`](#appium-2-versions), [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3), [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2), [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0), [`1.13.0`](https://github.com/appium/appium/releases/tag/v1.13.0), [`1.12.1`](https://github.com/appium/appium/releases/tag/v1.12.1)                                                                                                                                                                                                          | [`1.22.3`](https://github.com/appium/appium/releases/tag/v1.22.3) | [`2.0.0`](#appium-2-versions)                                   |          |
| iOS 12.0         | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1)   | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1) |          |
| iOS 11.3         | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)   | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1) |          |
| iOS 11.2         | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)   | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1) |          |
| iOS 11.1         | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)   | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1) |          |
| iOS 11.0         | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)   | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1) |          |
| iOS 10.3         | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1), [`1.8.1`](https://github.com/appium/appium/releases/tag/v1.8.1), [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [`1.8.0`](https://github.com/appium/appium/releases/tag/v1.8.0)   | [`1.9.1`](https://github.com/appium/appium/releases/tag/v1.9.1) |          |

### Appium 2 Versions

The Appium 2 versions for Virtual Devices are also collections of drivers that are installed in our cloud. The below table shows the Appium 2 versions with their drivers that are available for Virtual Devices.

<table>
    <thead>
        <tr>
            <th>Appium Version</th>
            <th>EOL Date</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>latest</code></td>
            <td><span className="sauceGreen">Active</span></td>
            <td>
                This will hold a collection of drivers that are compatible with the latest Appium server and driver versions that are installed in our cloud. We try to keep versions up to date every two weeks. You can find the exact versions in the first 20 log lines of the Appium logs of your executed test by going to <code>Test Details page > Logs > Appium Logs</code>
            </td>
        </tr>
        <tr>
            <td><code>2.0.0</code></td>
            <td><span className="sauceGold">January 31st, 2024</span></td>
            <td>
                This was the "old" alias for getting the latest Appium 2 drivers that were installed in the Sauce Labs Real Device Cloud. This alias is deprecated due to being unclear and is replaced by <code>latest</code>.<br />
                The alias <code>2.0.0</code> is a collection of the following drivers<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.0.0" target="_blank"><code>appium</code>: 2.0.0</a></li>
                    <li><a href="https://github.com/appium/appium-espresso-driver/releases/tag/v2.24.0" target="_blank"><code>appium-espresso-driver</code>: 2.24.0</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.15.0" target="_blank"><code>appium-flutter-driver</code>: 1.15.0</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.2" target="_blank"><code>appium-uiautomator2-driver</code>: 2.29.2</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.32.11" target="_blank"><code>appium-xcuitest-driver</code>: 4.32.11</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>2.0.0-beta66</code></td>
            <td><span className="sauceGold">December 31st, 2023024</span></td>
            <td>
                This is a collection of drivers that were released in April 20th 2023<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.0.0-beta.66" target="_blank"><code>appium</code>: 2.0.0-beta.66</a></li>
                    <li><a href="https://github.com/appium/appium-espresso-driver/releases/tag/v2.22.0" target="_blank"><code>appium-espresso-driver</code>: 2.22.0</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.14.3" target="_blank"><code>appium-flutter-driver</code>: 1.14.3</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.24.0" target="_blank"><code>appium-uiautomator2-driver</code>: 2.24.0</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.27.0" target="_blank"><code>appium-xcuitest-driver</code>: 4.27.0</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>2.0.0-beta56</code></td>
            <td><span className="sauceGold">December 31st, 2023</span></td>
            <td>
                This is a collection of drivers that were released in February 24th 2023<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.0.0-beta.56" target="_blank"><code>appium</code>: 2.0.0-beta.56</a></li>
                    <li><a href="https://github.com/appium/appium-espresso-driver/releases/tag/v2.15.4" target="_blank"><code>appium-espresso-driver</code>: 2.15.4</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.13.0" target="_blank"><code>appium-flutter-driver</code>: 1.13.0</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.12.6" target="_blank"><code>appium-uiautomator2-driver</code>: 2.12.6</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.18.2" target="_blank"><code>appium-xcuitest-driver</code>: 4.18.2</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>2.0.0-beta44</code></td>
            <td><span className="sauceGold">December 31st, 2023</span></td>
            <td>
                This is a collection of drivers that were released in September 7th 2022<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.0.0-beta.44" target="_blank"><code>appium</code>: 2.0.0-beta.44</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.7.0" target="_blank"><code>appium-uiautomator2-driver</code>: 2.7.0</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.11.1" target="_blank"><code>appium-xcuitest-driver</code>: 4.11.1</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
