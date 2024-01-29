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

- bugfixes will not be released for Appium 1.x anymore and require you to [migrate to Appium 2](./appium-2-migration.md)
- Appium 1 and its packaged drivers are no longer 100% compatible with Android 13/iOS 16 and higher and require Appium 2 to run stably.

Sauce Labs still supports Appium 1.x in limited versions, but we recommend [migrating to Appium 2](./appium-2-migration.md) to keep your tests up-to-date and compatible with the latest platform versions.
:::

## Selecting Appium Versions

You can select a specific Appium version by using the `appiumVersion` capability as part of the `"sauce:options"`. The below examples show how to select the Appium version for your test and use Android with Chrome as an example. See our [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) to help you construct your capabilities for the specific platform and Real Device/Android Emulator/iOS Simulator you want to test on.

The active Appium versions can be found in the [Real Devices](#real-devices), [Android Emulators](#android-emulators), and [iOS Simulators](#ios-simulators) sections.

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

## Release Strategy

Our Appium 2 release strategy is as follows:

- On the 2nd of each month, we release a 'bundled' version of Appium 2 that includes all the latest drivers available up to the 1st of that month. This 'bundled' version allows you to maintain a stable testing environment, saving you the effort required to individually update drivers. The version is named with a timestamp in the `appiumVersion` capability, such as `appium2-YYYYMMDD`, for easy tracking. These versions have an 11-month lifespan post-release, giving you plenty of time to plan your upgrade strategy.

- Additionally, we offer a `latest` version, updated bi-weekly on the 2nd and 16th of each month. This version includes all the most recent Appium 2 drivers and server released up to the 1st and 15th of each month. This rapid update cycle enables you to quickly access new features and fixes, so you can continually enhance your testing workflows. The bi-weekly `latest` version does not have a fixed lifespan, allowing you to stay on the cutting edge.

This strategy is designed to ease the complexities you face in mobile app testing.

:::info
The current release strategy outlined above is specific to Real Devices. We are actively working to extend this to Emulators and Simulators and will announce it shortly.
:::

## End-of-Life

To improve your testing experience, we're ending support for select versions of Appium 1 and certain bundles of Appium 2. A single stable Appium 1 release will ensure better compatibility and stability, especially on older Android and iOS devices. For Appium 2, we recommend using the most recent drivers to benefit from new features and bug fixes.

You can find which versions are currently supported in the [Real Devices](#real-devices), [Android Emulators](#android-emulators) and [iOS Simulators](#ios-simulators) sections, including their end-of-life dates.

:::info
The current end-of-life strategy outlined above is specific to Real Devices. We are actively working to extend this to Emulators and Simulators and will announce it shortly.
:::

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
      <td>
        <code>latest</code>
      </td>
      <td>
        <span className="sauceGreen">Active</span>
      </td>
      <td> This will hold a collection of drivers that are compatible with the latest Appium server and driver versions that are installed in our cloud. We try to keep versions up to date every two weeks. You can find the exact versions in the first 20 log lines of the Appium logs of your executed test by going to <code>Test Details page > Logs > Appium Logs</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>2.0.0</code>
      </td>
      <td>
        <span className="sauceGreen">Active</span>
      </td>
      <td> This alias for getting the Appium 2 drivers that were installed in the Sauce Labs Real Device Cloud. <br /> The alias <code>2.0.0</code> is a collection of the following drivers <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.0.1" target="_blank">
              <code>appium</code>: 2.0.1 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.20.2" target="_blank">
              <code>appium-flutter-driver</code>: 1.20.2 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.4" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.29.4 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.33.2" target="_blank">
              <code>appium-xcuitest-driver</code>: 4.33.2 </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>appium2-20231101</code>
      </td>
      <td>
        <span className="sauceGold">October 31st, 2024</span>
      </td>
      <td> This is a collection of drivers that were released in November 1st 2023 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.2.1" target="_blank">
              <code>appium</code>: 2.2.1 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.2.0" target="_blank">
              <code>appium-flutter-driver</code>: 2.2.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.33.1" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.33.1 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v5.8.0" target="_blank">
              <code>appium-xcuitest-driver</code>: 5.8.0 </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>appium2-20231001</code>
      </td>
      <td>
        <span className="sauceGold">September 30th, 2024</span>
      </td>
      <td> This is a collection of drivers that were released in October 1st 2023 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.1.3" target="_blank">
              <code>appium</code>: 2.1.3 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.0.0" target="_blank">
              <code>appium-flutter-driver</code>: 2.0.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.10" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.29.10 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v5.4.0" target="_blank">
              <code>appium-xcuitest-driver</code>: 5.4.0 </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>appium2-20230901</code>
      </td>
      <td>
        <span className="sauceGold">August 31st, 2024</span>
      </td>
      <td> This is a collection of drivers that were released in September 1st 2023 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.1.3" target="_blank">
              <code>appium</code>: 2.1.3 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.21.1" target="_blank">
              <code>appium-flutter-driver</code>: 1.21.1 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.5" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.29.5 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.35.0" target="_blank">
              <code>appium-xcuitest-driver</code>: 4.35.0 </a>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Appium 1.x

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
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a>
      </td>
      <td>
        <span class="sauceGreen">Active</span>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.0">
          <code>1.22.0</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.21.0">
          <code>1.21.0</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.20.1">
          <code>1.20.1</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.19.0">
          <code>1.19.0</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.18.1">
          <code>1.18.1</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.17.1">
          <code>1.17.1</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.17.0">
          <code>1.17.0</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.16.0">
          <code>1.16.0</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.15.1">
          <code>1.15.1</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.15.0">
          <code>1.15.0</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.14.0">
          <code>1.14.0</code>
        </a>
      </td>
      <td>
        <span class="sauceGold">December 31st, 2023</span>
      </td>
      <td>Update to <a href="https://github.com/appium/appium/releases/tag/v1.22.2">
          <code>1.22.2</code>
        </a> or <a href="../appium-2-migration">migrate to Appium 2</a>
      </td>
    </tr>
  </tbody>
</table>

## Virtual Devices

### Android Emulators

<table>
  <thead>
    <tr>
      <th>OS Version</th>
      <th>Supported Appium Versions</th>
      <th>Default Appium Version</th>
      <th>Recommended Appium Version</th>
    </tr>
  </thead>
  <tbody><tr>
      <td>Android 14.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 13.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.0" target="_blank">
              <code>1.22.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 12.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.0" target="_blank">
              <code>1.22.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 11.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 10.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.11.1" target="_blank">
              <code>1.11.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 9.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.12.1" target="_blank">
              <code>1.12.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.11.1" target="_blank">
              <code>1.11.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 8.1</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.12.1" target="_blank">
              <code>1.12.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.11.1" target="_blank">
              <code>1.11.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 8.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.12.1" target="_blank">
              <code>1.12.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.11.1" target="_blank">
              <code>1.11.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 7.1</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.12.1" target="_blank">
              <code>1.12.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.11.1" target="_blank">
              <code>1.11.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 7.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.12.1" target="_blank">
              <code>1.12.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.11.1" target="_blank">
              <code>1.11.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 6.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.12.1" target="_blank">
              <code>1.12.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.11.1" target="_blank">
              <code>1.11.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 5.1</td>
      <td>
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
              <code>1.22.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.2" target="_blank">
              <code>1.20.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.1" target="_blank">
              <code>1.18.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.12.1" target="_blank">
              <code>1.12.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.11.1" target="_blank">
              <code>1.11.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.1" target="_blank">
          <code>1.22.1</code>
        </a>
      </td>
    </tr>
  </tbody>
</table>

### iOS Simulators

<table>
  <thead>
    <tr>
      <th>Platform Version</th>
      <th>Supported Appium Versions</th>
      <th>Default Appium Version</th>
      <th>Recommended Appium Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iOS 16.2</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 16.1</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 16.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 15.5</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 15.4</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 15.2</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 15.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.0" target="_blank">
              <code>1.22.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 14.5</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.0" target="_blank">
              <code>1.20.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 14.4</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.0" target="_blank">
              <code>1.20.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 14.3</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.1" target="_blank">
              <code>1.20.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.20.0" target="_blank">
              <code>1.20.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 14.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.1" target="_blank">
              <code>1.19.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.18.3" target="_blank">
              <code>1.18.3</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 13.4</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.1" target="_blank">
              <code>1.19.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 13.2</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.1" target="_blank">
              <code>1.19.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 13.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.2" target="_blank">
              <code>1.19.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.19.1" target="_blank">
              <code>1.19.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.17.1" target="_blank">
              <code>1.17.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.16.0" target="_blank">
              <code>1.16.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.15.0" target="_blank">
              <code>1.15.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 12.4</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 12.2</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta66</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta56</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0-beta44</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
              <code>1.22.3</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.22.2" target="_blank">
              <code>1.22.2</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.21.0" target="_blank">
              <code>1.21.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.13.0" target="_blank">
              <code>1.13.0</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.12.1" target="_blank">
              <code>1.12.1</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.22.3" target="_blank">
          <code>1.22.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.0.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 12.0</td>
      <td>
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
          <code>1.9.1</code>
        </a>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
          <code>1.9.1</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 11.3</td>
      <td>
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
          <code>1.8.0</code>
        </a>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
          <code>1.9.1</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 11.2</td>
      <td>
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
          <code>1.8.0</code>
        </a>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
          <code>1.9.1</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 11.1</td>
      <td>
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
          <code>1.8.0</code>
        </a>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
          <code>1.9.1</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 11.0</td>
      <td>
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
          <code>1.8.0</code>
        </a>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
          <code>1.9.1</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 10.3</td>
      <td>
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
              <code>1.9.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.1" target="_blank">
              <code>1.8.1</code>
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
              <code>1.8.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.8.0" target="_blank">
          <code>1.8.0</code>
        </a>
      </td>
      <td>
        <a href="https://github.com/appium/appium/releases/tag/v1.9.1" target="_blank">
          <code>1.9.1</code>
        </a>
      </td>
    </tr>
  </tbody>
</table>

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
      <td>
        <code>2.0.0</code>
      </td>
      <td>-</td>
      <td>The is a collection of the following drivers <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.0.0" target="_blank">
              <code>appium</code>: 2.0.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-espresso-driver/releases/tag/v2.24.0" target="_blank">
              <code>appium-espresso-driver</code>: 2.24.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.15.0" target="_blank">
              <code>appium-flutter-driver</code>: 1.15.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.2" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.29.2 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.32.11" target="_blank">
              <code>appium-xcuitest-driver</code>: 4.32.11 </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>2.0.0-beta66</code>
      </td>
      <td>-</td>
      <td> This is a collection of drivers that were released in April 20th 2023 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.0.0-beta.66" target="_blank">
              <code>appium</code>: 2.0.0-beta.66 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-espresso-driver/releases/tag/v2.22.0" target="_blank">
              <code>appium-espresso-driver</code>: 2.22.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.14.3" target="_blank">
              <code>appium-flutter-driver</code>: 1.14.3 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.24.0" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.24.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.27.0" target="_blank">
              <code>appium-xcuitest-driver</code>: 4.27.0 </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>2.0.0-beta56</code>
      </td>
      <td>-</td>
      <td> This is a collection of drivers that were released in February 24th 2023 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.0.0-beta.56" target="_blank">
              <code>appium</code>: 2.0.0-beta.56 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-espresso-driver/releases/tag/v2.15.4" target="_blank">
              <code>appium-espresso-driver</code>: 2.15.4 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.13.0" target="_blank">
              <code>appium-flutter-driver</code>: 1.13.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.12.6" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.12.6 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.18.2" target="_blank">
              <code>appium-xcuitest-driver</code>: 4.18.2 </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>2.0.0-beta44</code>
      </td>
      <td>-</td>
      <td> This is a collection of drivers that were released in September 7th 2022 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.0.0-beta.44" target="_blank">
              <code>appium</code>: 2.0.0-beta.44 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.7.0" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.7.0 </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.11.1" target="_blank">
              <code>appium-xcuitest-driver</code>: 4.11.1 </a>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
