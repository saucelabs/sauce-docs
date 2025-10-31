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

- bugfixes will not be released for Appium 1.x anymore and require you to [migrate to Appium 2](./migration-guides/appium-2-migration.md)
- Appium 1 and its packaged drivers are no longer 100% compatible with Android 13/iOS 16 and higher and require Appium 2 to run stably.

Sauce Labs still supports Appium 1.x in limited versions, but we recommend [migrating to Appium 2](./migration-guides/appium-2-migration.md) to keep your tests up-to-date and compatible with the latest platform versions.
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


## End-of-Life

To improve your testing experience, we're ending support for select versions of Appium 1 and certain bundles of Appium 2. A single stable Appium 1 release will ensure better compatibility and stability, especially on older Android and iOS devices. For Appium 2, we recommend using the most recent drivers to benefit from new features and bug fixes.

You can find which versions are currently supported in the [Real Devices](#real-devices), [Android Emulators](#android-emulators) and [iOS Simulators](#ios-simulators) sections, including their end-of-life dates.

:::info
The current end-of-life strategy outlined above is specific to Real Devices. We are actively working to extend this to Emulators and Simulators and will announce it shortly.
:::

## Real Devices

### Real Device Appium Images

We provide several specific, dated Appium versions. Please check the supported versions for Real Devices in the
[table below](#appium-2x) and choose the one that fits your requirements.

:::warning Appium Stable Version is Being Retired
**Why We Made This Decision:**
We are retiring the `stable` image to simplify our versioning model and align with the industry standard. We believe that using specific, dated versions (like `appium2-20250901`) is the best way to have a stable environment. This makes version selection more straightforward and consistent.
:::

### Appium 3.x
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
        <code>appium3-2025-10</code>
      </td>
      <td>
        <span className="sauceGold">December 1st, 2026</span>
      </td>
      <td>
        This is a collection of drivers and plugins that were released in October 28th 2025 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%403.1.0" target="_blank">
              <code>appium</code>: 3.1.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v3.1.0" target="_blank">
              <code>appium-flutter-driver</code>: 3.1.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v6.0.2" target="_blank">
              <code>appium-uiautomator2-driver</code>: 6.0.2
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v10.2.2" target="_blank">
              <code>appium-xcuitest-driver</code>: 10.2.2
            </a>
          </li>
          <li>
            <a href="https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/releases/tag/v2.0.3" target="_blank">
              <code>appium-flutter-integration-driver</code>: 2.0.3
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/%40appium%2Fimages-plugin%404.0.2" target="_blank">
              <code>@appium/images-plugin</code>: 4.0.2
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/%40appium%2Frelaxed-caps-plugin%402.0.1" target="_blank">
              <code>@appium/relaxed-caps-plugin</code>: 2.0.1
            </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>appium3-deque-accessibility</code>
      </td>
      <td>
        <span className="sauceGreen">Active</span>
      </td>
      <td>
          <a href="https://docs.deque.com/devtools-mobile/2025.7.2/en/september-2025" target="_blank">
              Deque axe DevTools® Mobile Analyzer Accessibility tools
          </a>
          &nbsp;help you with automated accessibility testing. Contains only the latest version of Appium. The tools help to identify and to resolve accessibility issues. Requires Deque axe DevTools® license. See the <a href="../appium-deque-accessibility-testing">detailed usage documentation</a>.
        <br />
        <ul>
            <li>
                <a href="https://docs.deque.com/devtools-mobile/2025.7.2/en/september-2025" target="_blank">
                    <code>axe-appium-xcuitest-driver </code>: 2.0.0
                </a>
            </li>
            <li>
                <a href="https://docs.deque.com/devtools-mobile/2025.7.2/en/september-2025" target="_blank">
                    <code>axe-appium-uiautomator2-driver </code>: 2.0.1
                </a>
            </li>
            <li>
                <a href="https://github.com/appium/appium/releases/tag/appium%403.1.0" target="_blank">
                    <code>appium</code>: 3.1.0
                </a>
            </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

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
        <code>stable</code>
      </td>
      <td>
        <span className="sauceGold">February 16th, 2026</span>
      </td>
      <td>
        The `stable` appium version **is deprecated and will be retired on February 16th, 2026**.
        Please follow the [Migration guide](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/migration-guides/appium-stable-migration/) to update your configuration. <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.4.1" target="_blank">
              <code>appium</code>: 2.4.1
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.4.1" target="_blank">
              <code>appium-flutter-driver</code>: 2.4.1
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.43.4" target="_blank">
              <code>appium-uiautomator2-driver</code>: 2.43.4
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v5.15.1" target="_blank">
              <code>appium-xcuitest-driver</code>: 5.15.1
            </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>latest</code>
      </td>
      <td>
        <span className="sauceGreen">Active</span>
      </td>
      <td>
        We update this image conservatively. When we do update this image, we will notify you and provide a migration guide to address any breaking changes from the previous "latest" image to the new one.<br />
        This is a collection of drivers that were released in this version <br />
       <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.13.1" target="_blank">
              <code>appium</code>: 2.13.1
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.11.0" target="_blank">
              <code>appium-flutter-driver</code>: 2.11.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v3.9.6" target="_blank">
              <code>appium-uiautomator2-driver</code>: 3.9.6
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v7.35.0" target="_blank">
              <code>appium-xcuitest-driver</code>: 7.35.0
            </a>
          </li>
          <li>
            <a href="https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/releases/tag/v1.1.3" target="_blank">
              <code>appium-flutter-integration-driver</code>: 1.1.3
            </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>appium2-deque-accessibility</code>
      </td>
      <td>
        <span className="sauceGreen">Active</span>
      </td>
      <td>
          <a href="https://docs.deque.com/devtools-mobile/2025.7.2/en/august-2025" target="_blank">
              Deque axe DevTools® Mobile Analyzer Accessibility tools
          </a>
          &nbsp;help you with automated accessibility testing. Contains only the latest version of Appium. The tools help to identify and to resolve accessibility issues. Requires Deque axe DevTools® license. See the <a href="../appium-deque-accessibility-testing">detailed usage documentation</a>.
        <br />
        <ul>
            <li>
                <a href="https://docs.deque.com/devtools-mobile/2025.7.2/en/august-2025" target="_blank">
                    <code>axe-appium-xcuitest-driver </code>: 1.7.0
                </a>
            </li>
            <li>
                <a href="https://docs.deque.com/devtools-mobile/2025.7.2/en/august-2025" target="_blank">
                    <code>axe-appium-uiautomator2-driver </code>: 1.5.0
                </a>
            </li>
            <li>
                <a href="https://github.com/appium/appium/releases/tag/appium%402.19.0" target="_blank">
                    <code>appium</code>: 2.19.0
                </a>
            </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>appium2-20250901</code>
      </td>
      <td>
        <span className="sauceGold">August 31st, 2026</span>
      </td>
      <td>
        This is a collection of drivers that were released in September 1st 2025 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.19.0" target="_blank">
              <code>appium</code>: 2.19.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.19.0" target="_blank">
              <code>appium-flutter-driver</code>: 2.19.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v4.2.9" target="_blank">
              <code>appium-uiautomator2-driver</code>: 4.2.9
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v9.10.5" target="_blank">
              <code>appium-xcuitest-driver</code>: 9.10.5
            </a>
          </li>
          <li>
            <a href="https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/releases/tag/v1.3.0" target="_blank">
              <code>appium-flutter-integration-driver</code>: 1.3.0
            </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>appium2-20250501</code>
      </td>
      <td>
        <span className="sauceGold">April 30th, 2026</span>
      </td>
      <td>
        This is a collection of drivers that were released in May 1st 2025 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.18.0" target="_blank">
              <code>appium</code>: 2.18.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.15.1" target="_blank">
              <code>appium-flutter-driver</code>: 2.15.1
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v4.2.3" target="_blank">
              <code>appium-uiautomator2-driver</code>: 4.2.3
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v9.2.3" target="_blank">
              <code>appium-xcuitest-driver</code>: 9.2.3
            </a>
          </li>
          <li>
            <a href="https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/releases/tag/v1.1.3" target="_blank">
              <code>appium-flutter-integration-driver</code>: 1.1.3
            </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>appium3-2025-10</code>
      </td>
      <td>
        <span className="sauceGold">December 1st, 2026</span>
      </td>
      <td>
        This is a collection of drivers and plugins that were released in October 28th 2025 <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%403.1.0" target="_blank">
              <code>appium</code>: 3.1.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v3.1.0" target="_blank">
              <code>appium-flutter-driver</code>: 3.1.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v6.0.2" target="_blank">
              <code>appium-uiautomator2-driver</code>: 6.0.2
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v10.2.2" target="_blank">
              <code>appium-xcuitest-driver</code>: 10.2.2
            </a>
          </li>
          <li>
            <a href="https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/releases/tag/v2.0.3" target="_blank">
              <code>appium-flutter-integration-driver</code>: 2.0.3
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/%40appium%2Fimages-plugin%404.0.2" target="_blank">
              <code>appium-flutter-integration-driver</code>: 4.0.2
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/%40appium%2Frelaxed-caps-plugin%402.0.1" target="_blank">
              <code>@appium/relaxed-caps-plugin</code>: 2.0.1
            </a>
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
      <td>Please migrate to the latest Appium 2 version for better performance.</td>
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
  <tbody>
    <tr>
      <td>Android 16.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.11.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.11.0</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.11.0</code>
        </a>
      </td>
    </tr>
      <tr>
      <td>Android 15.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.11.0</code>
            </a>
          </li>
          <li>
            <a href="#appium-2-versions">
              <code>2.0.0</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.11.0</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.11.0</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>Android 14.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
              <code>2.11.0</code>
            </a>
          </li>
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
      <td>iOS 18.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.11.3</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.11.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.11.3</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 17.5</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.1.3</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.1.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.1.3</code>
        </a>
      </td>
    </tr>
    <tr>
      <td>iOS 17.0</td>
      <td>
        <ul>
          <li>
            <a href="#appium-2-versions">
              <code>2.1.3</code>
            </a>
          </li>
        </ul>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.1.3</code>
        </a>
      </td>
      <td>
        <a href="#appium-2-versions">
          <code>2.1.3</code>
        </a>
      </td>
    </tr>
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
        <code>2.11.3</code>
      </td>
      <td>-</td>
      <td>
        The is a collection of the following drivers <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.11.3" target="_blank">
              <code>appium</code>: 2.11.3
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.9.2" target="_blank">
              <code>appium-flutter-driver</code>: 2.9.2
            </a>
          </li>
          <li>
            <a href="https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/releases/tag/v1.1.3" target="_blank">
              <code>appium-flutter-integration-driver</code>: 1.1.3
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v7.24.18" target="_blank">
              <code>appium-xcuitest-driver</code>: 7.24.18
            </a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>2.11.0</code>
      </td>
      <td>-</td>
      <td>
        The is a collection of the following drivers <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.11.0" target="_blank">
              <code>appium</code>: 2.11.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-espresso-driver/releases/tag/v2.44.0" target="_blank">
              <code>appium-espresso-driver</code>: 2.44.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.8.0" target="_blank">
              <code>appium-flutter-driver</code>: 2.8.0
            </a>
          </li>
          <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v3.7.0" target="_blank"><code>appium-uiautomator2-driver</code>: 3.7.0</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>2.1.3</code>
      </td>
      <td>-</td>
      <td>
        The is a collection of the following drivers <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.1.3" target="_blank">
              <code>appium</code>: 2.1.3
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v2.9.2" target="_blank">
              <code>appium-flutter-driver</code>: 2.9.2
            </a>
          </li>
          <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v5.4.1" target="_blank"><code>appium-xcuitest-driver</code>: 5.4.1</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>2.0.0</code>
      </td>
      <td>-</td>
      <td>
        The is a collection of the following drivers <br />
        <ul>
          <li>
            <a href="https://github.com/appium/appium/releases/tag/appium%402.0.0" target="_blank">
              <code>appium</code>: 2.0.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-espresso-driver/releases/tag/v2.24.0" target="_blank">
              <code>appium-espresso-driver</code>: 2.24.0
            </a>
          </li>
          <li>
            <a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.15.0" target="_blank">
              <code>appium-flutter-driver</code>: 1.15.0
            </a>
          </li>
          <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.2" target="_blank"><code>appium-uiautomator2-driver</code>: 2.29.2</a></li>
          <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.32.11" target="_blank"><code>appium-xcuitest-driver</code>: 4.32.11</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>2.0.0-beta66</code>
      </td>
      <td>-</td>
      <td>
        This is a collection of drivers that were released in April 20th 2023 <br />
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
      <td>
        <code>2.0.0-beta56</code>
      </td>
      <td>-</td>
      <td>
        This is a collection of drivers that were released in February 24th 2023 <br />
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
      <td>
        <code>2.0.0-beta44</code>
      </td>
      <td>-</td>
      <td>
        This is a collection of drivers that were released in September 7th 2022 <br />
        <ul>
          <li>
              <a href="https://github.com/appium/appium/releases/tag/appium%402.0.0-beta.44" target="_blank">
                  <code>appium</code>: 2.0.0-beta.44
              </a>
          </li>
          <li>
              <a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.7.0" target="_blank">
                  <code>appium-uiautomator2-driver</code>: 2.7.0
              </a>
          </li>
          <li>
              <a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.11.1" target="_blank">
                  <code>appium-xcuitest-driver</code>: 4.11.1
              </a>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
