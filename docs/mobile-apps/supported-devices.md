---
id: supported-devices
title: Using Real and Virtual Mobile Devices for Testing
sidebar_label: Supported Mobile Devices
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Getting the most out of your live and automated testing means including a healthy mix of Emulators, Simulators, and real devices as your mobile testing platforms. Why? Most aspects of the mobile experience you can test on Emulators or Simulators, while some scenarios require testing on physical real devices (e.g., memory consumption, CPU usage, location-based apps that use manufacturer-specific device sensors).

There are a variety of use cases to consider when you're deciding on the mix of Emulators, Simulators, and real devices to use in your testing.

We support thousands of device/OS combinations and test automation frameworks such as Appium, Espresso, XCUITest, and Robotium. For a full list, see [Supported Browsers & Devices](https://saucelabs.com/platform/supported-browsers-devices).

## When to Test on Emulators and Simulators

### Use Cases

If you need:

- Massive concurrency.
- To reduce build times.
- To save costs.
- Immediate availability.
- Extremely low error rates for your test environment.
- Longer test times -- native framework tests on real devices enforce a maximum test duration limit of 60 minutes.

### System Requirements

|                        |                                                                                                                                                                     iOS Mobile Apps                                                                                                                                                                     |                                                                                                                                                                                                             Android Mobile Apps                                                                                                                                                                                                             |
| :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    **Requirements**    |             <p>Your iOS app must be:</p><p>Compiled for the simulator/device version of your choice</p><p>Compressed into a .zip package/archive file (must include app directory)</p><p>[Uploaded and hosted](mobile-apps/app-storage.md) in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Labs App Storage)</p>              | <p>Your Android app must be:</p><p>Compiled for the simulator/device version of your choice</p><p>Configured to have internet permissions</p><p>Built into an .apk or .aab package/archive file</p><p>[Uploaded and hosted](mobile-apps/app-storage.md) in a place that Sauce Labs can access (for example: AWS, GitHub, or Sauce Labs App Storage).</p> <p>_Appium only. For Espresso, `saucectl` uploads the referenced app for you._</p> |
| **Versions supported** |                                                                                                                                                              iOS versions 14.0 and higher                                                                                                                                                               |                                                                                                                                                                                                       Android versions 5.0 and higher                                                                                                                                                                                                       |
|        **Tips**        | <p>If you're using App Storage, get the returned location, which will look something like storage:filename=myApplication.zip.</p><p>In your [test capabilities](/dev/test-configuration-options), specify the location of the .zip file, or the `storage:filename=myApplication.zip` URL as described in [App Storage](mobile-apps/app-storage.md).</p> |                                                                             <p>This StackOverflow article contains instructions on how to build an .apk file in Eclipse.</p><p>In your test capabilities, specify the location of the .apk  or  .aab file, or the `storage:filename=app.apk` URL as described in [App Storage](mobile-apps/app-storage.md).</p>                                                                             |

## When to Test on Real Devices

The Sauce Labs Real Device Cloud (RDC) provides you with the ability to run live and automated tests across Android and iOS devices. [Learn more here](https://saucelabs.com/platform/real-device-cloud).

### Use Cases

If you need:

- A breadth of device types for panel/compatibility testing.
- Manual, interactive testing on actual physical devices.
- To replicate an issue to match exact model as reported.
- Pixel-perfect display testing.
- To test hardware dependencies like CPU, memory, display, GPS.
- To test native ARM Libraries.
- To test on a custom OS (e.g., Samsung TouchWiz, OnePlus OxygenOS)
- To test on a native framework like Espresso and Robotium.
- To test scenarios that require carrier network connectivity (e.g., making phone calls and sending SMS messages to devices with SIM cards).

### Supported OS versions and devices

- Available major OS versions for iOS/iPadOS real devices: 18.X, 17.X, 16.X, 15.X, 14.X, 13.X 
- Available major OS versions for Android real devices: 16.X, 15.X, 14.X, 13.X, 12.X, 11.X, 10.X, 9.X
- Our support is limited to real devices manufactured within the last 6 years. 
- Devices manufactured longer than 6 years ago are not supported.

### Public Device Cloud

Our public cloud, available to all users regardless of pricing plan, contains a wide selection of thoroughly cleaned devices. They are subject to availability. On the mobile device selection screen, if a device is in use, it'll be marked with a [**In Use** flag](/mobile-apps/live-testing/live-mobile-app-testing/#public-vs-private-devices).

Here are some use cases:

- The devices available on the public cloud are sufficient for your testing coverage.
- You need to reproduce bugs on a selection of hundreds of iOS and Android devices.
- You need to upload and spot check apps on devices you don’t have access to.
- You need to share manual test sessions and devices across teams worldwide.
- You are looking for a low-cost real device testing option.

### Private Device Cloud

<p><span className="sauceGreen">Enterprise Only</span></p>

This is a dedicated pool of devices just for your organization. On the mobile device selection screen, your private devices are marked with a [green device icon](/mobile-apps/live-testing/live-mobile-app-testing/#public-vs-private-devices). Here are some use cases:

- You need to use a very specific set of devices that aren't supported on the public cloud.
- Your security team insists on dedicated devices.
- You want to run automated parallel tests across multiple devices simultaneously.
- You need specific settings which are set on the devices all the time.
- You need to establish a secure [IPSec VPN connection](/secure-connections/ipsec-vpn) between your network and the Sauce Labs cloud.
- You want to test your apps with MDM Distribution (Intune).
- You want to test securely payment workflow with Apple Payment, or In-App Purchase, and retain your card data on your own dedicated device.
- You want to test eSIM/SIM card-related workflows.

### System Requirements

|                        |                                                                                                                                                                                 iOS Mobile Apps                                                                                                                                                                                 |                                                                                                                                                                                                       Android Mobile Apps                                                                                                                                                                                                       |
| :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    **Requirements**    | <p>Your iOS app must be:</p><p>Formatted as a .app or .ipa file. Refer to the documentation on [how to create an .ipa file](/mobile-apps/automated-testing/ipa-files)</p><p>Uploaded and hosted in [Sauce Labs storage](/mobile-apps/app-storage.md) or installed from a remote location.</p><p>_Appium only. For XCUITest, `saucectl` uploads the referenced app for you._</p> | <p>Your Android app must be:</p><p>Built into an .apk or .aab package/archive file.</p><p>Configured to have [internet permissions](http://developer.android.com/reference/android/Manifest.permission.html#INTERNET)</p><p>Uploaded and hosted in [Sauce Labs storage](/mobile-apps/app-storage.md) or installed from a remote location.</p><p>_Appium only. For Expresso, `saucectl` uploads the referenced app for you._</p> |
| **Versions supported** |                                                                                                                                                                         iOS versions 13.X and higher                                                                                                                                                                          |                                                                                                                                                                                                 Android versions 9.0 and higher                                                                                                                                                                                                 |

For the full list of supported real devices, see [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices).

### Security

#### Real Device Cleaning

We use a proprietary process that wipes every real device clean at the end of the testing session:

- User accounts and data are cleared from the device.
- History and user data is removed from the default system browser. Non-default browsers are uninstalled.
- Network settings are reset.
- Device settings are reset.
- Your app is uninstalled.
- Cached data is deleted.
- Device is de-allocated from you.

:::caution
While we take these actions to clean public real devices after each test session, we do not perform factory resets nor do we have anti-virus software installed on them. It is possible that other users of the public RDC may engage in malicious, careless or unsecure activity, and that sophisticated, persistent malware could therefore be present on any device in the public RDC.
:::

:::caution
If you test a Progressive Web Application (PWA) and install it on the home screen of the device, make sure that you remove the PWA manually before you close your session. At the moment we can’t remove the PWA and its data during our cleaning process.
:::

#### Data Center Security

Real Device Cloud Data Center security is described in [Data Center Endpoints](/basics/data-center-endpoints).

### Static and Dynamic Device Allocation

Regardless of the test frameworks you're using (Appium, Espresso, XCUITest), you can configure your real device tests using static and dynamic device allocation. While the syntax may be different (i.e., `--device`, `deviceName`), the functionality is the same across all frameworks.

#### Static Device Allocation

This is specifying an exact device for your test by setting `deviceName` to the Device ID, which you can find under **Live** > **Mobile-App** > **Choose device** > Find Your Device > **Details** > **ID**.
<img src={useBaseUrl('img/mobile-apps/static-allocation-data.jpg')} alt="Sauce Labs Static Allocation data" width="750"/>

When using this, there's no need to specify the `platformName` and `platformVersion` because they'll be set by default (i.e., if you include these separately included in your test script, they will be ignored).

<Tabs
defaultValue="Appium-android"
values={[
{label: 'Appium (Android)', value: 'Appium-android'},
{label: 'Appium (iOS)', value: 'Appium-ios'},
{label: 'Espresso', value: 'Espresso'},
{label: 'XCUITest', value: 'XCUITest'},
]}>

<TabItem value="Espresso">

Static allocation example — exact device names are provided.

```yml
devices:
  - id: Google_Pixel_7_Pro_real_us
```

</TabItem>
<TabItem value="XCUITest">

Static allocation example — exact device names are provided.

```yml
devices:
  - id: iPhone_11_13_5_real_us
```

</TabItem>
<TabItem value="Appium-android">

Static allocation examples — exact device name are provided.

```java
capabilities.setCapability("appium:deviceName", "Google_Pixel_7_Pro_real_us");
```

</TabItem>
<TabItem value="Appium-ios">

Static allocation examples — exact device name are provided.

```java
capabilities.setCapability("appium:deviceName", "iPhone_11_13_5_real_us");
```

</TabItem>
</Tabs>
<br/>

#### Dynamic Device Allocation

This is specifying basic parameters for your test by setting `deviceName` to the Display Name and or `platformVersion` to the OS Version by [regular expressions (regex)](https://en.wikipedia.org/wiki/Regular_expression) to dynamically allocate a device. (If you want to use the OS Version you need to remove the `Android` or `iOS` prefix from the OS version). A device(s) with your specifications will be selected from the real device pool.

You can find the Display Name or OS Version under **Live** > **Mobile-App** > **Choose device** > Find Your Device > **Details** > **Title|OS**.

<img src={useBaseUrl('img/mobile-apps/dynamic-allocation-data.jpg')} alt="Sauce Labs Dynamic Allocation data" width="750"/>

:::note
The more strict you set the capabilities, the smaller the pool of available devices will be and the longer you might need to wait for an available device.
:::

##### Based on Display Name

| Regex Input                                                                | Dynamic Allocation Action                                                                                                                                      |
| :------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"iPhone.*" ,  "iPhone .*"`                                                | Allocates any iPhone device. See [example](https://regex101.com/r/PC63Dw/1) or this [example](https://regex101.com/r/WzEPxP/1).                                |
| `".*nexus.*"`                                                              | Allocates any device with the word "nexus" in its display name. See [example](https://regex101.com/r/dzDlCh/1).                                                |
| `"iPhone [67]"` or `"iPhone [6-7]"`                                        | Both will allocate either an iPhone 7 or iPhone 6 device. See [example](https://regex101.com/r/KE9vt1/1) or this [example](https://regex101.com/r/xe0FgY/1).   |
| `"iPhone [67]S"` or `"iPhone [6-7]S"`                                      | Both will allocate either an iPhone 7S or iPhone 6S device. See [example](https://regex101.com/r/fkzBJj/2) or this [example](https://regex101.com/r/fkzBJj/3). |
| `"iPhone 7.*"`                                                             | Allocates any device that starts with the display name "iPhone 7" (e.g., iPhone 7, iPhone 7S). See [example](https://regex101.com/r/oTpgdA/1).                 |
| <code>"^(?!Nokia.\*&vert;Oppo.\*&vert;Huawei.\*&vert;Xiaomi.\*).\*"</code> | Allocates any Android devices, **except** Nokia, Oppo, Huawei, and Xiaomi. See [example](https://regex101.com/r/YKdiQQ/1).                                     |
| <code>"^(?=Nokia.\*&vert;Oppo.\*&vert;Huawei.\*&vert;Xiaomi.\*).\*"</code> | Allocates **only** Nokia, Oppo, Huawei, and Xiaomi devices. See [example](https://regex101.com/r/yhQ3oy/2).                                                    |

<Tabs
defaultValue="Appium-android"
values={[
{label: 'Appium (Android)', value: 'Appium-android'},
{label: 'Appium (iOS)', value: 'Appium-ios'},
{label: 'Espresso', value: 'Espresso'},
{label: 'XCUITest', value: 'XCUITest'},
]}>

<TabItem value="Espresso">

Dynamic allocation example - finds any device that starts with the display name "Google".

```yml
devices:
  - name: "^Google.*"
```

Dynamic allocation example - finds all Android devices except the Oppo ones.

```yml
devices:
  - name: "^(?!Oppo).*"
```

</TabItem>

<TabItem value="XCUITest">

Dynamic allocation example - finds any device that starts with the display name "iPhone".

```yml
devices:
  - name: "^iPhone.*"
```

Dynamic allocation example - finds all iPhone devices except 5 and 5S.

```yml
devices:
  - name: "^iPhone\s+(?!(5|5S)).*"
```

</TabItem>
<TabItem value="Appium-android">

Dynamic allocation example - finds any device that starts with the display name "Google".

```java
capabilities.setCapability("appium:deviceName", "^Google.*");
```

Dynamic allocation example - finds all Android devices except the Oppo ones.

```java
capabilities.setCapability("appium:deviceName", "^(?!Oppo).*");
```

</TabItem>
<TabItem value="Appium-ios">

Dynamic allocation example - finds any device that starts with the display name "iPhone".

```java
capabilities.setCapability("appium:deviceName", "^iPhone.*");
```

Dynamic allocation example - finds all iPhone devices except 5 and 5S.

```java
capabilities.setCapability("appium:deviceName", "^iPhone\s+(?!(5|5S)).*");
```

</TabItem>
</Tabs>

##### Based on platform version

| Regex Input                      | Dynamic Allocation Action                                                                                                                      |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>"^1[3-4&vert;6].\*"</code> | Will match `13`, `14` and `16`, but not 15, see [example](https://regex101.com/r/ExICgZ/1).                                                    |
| `"^(?!15).*"`                    | Will exclude version `15` with all it's minors and patches, but will match all other versions, see [example](https://regex101.com/r/UqqYrM/1). |

<Tabs
defaultValue="Appium-android"
values={[
{label: 'Appium (Android)', value: 'Appium-android'},
{label: 'Appium (iOS)', value: 'Appium-ios'},
{label: 'Espresso', value: 'Espresso'},
{label: 'XCUITest', value: 'XCUITest'},
]}>

<TabItem value="Espresso">

Dynamic allocation example - finds any device that starts with the display name "Google" and uses Android 11, 12 or 13.

```yml
devices:
  - name: "^Google.*"
    platformVersion: "^1[1-3].*"
```

</TabItem>

<TabItem value="XCUITest">

Dynamic allocation example - finds any device that starts with the display name "iPhone" and does not have iOS 15.

```yml
devices:
  - name: "^iPhone.*"
    platformVersion: "^(?!15).*"
```

</TabItem>
<TabItem value="Appium-android">

Dynamic allocation example - finds any device that starts with the display name "Google" and uses Android 11, 12 or 13.

```java
capabilities.setCapability("appium:deviceName", "^Google.*");
capabilities.setCapability("appium:platformVersion", "^1[1-3].*");
```

</TabItem>
<TabItem value="Appium-ios">

Dynamic allocation example - finds any device that starts with the display name "iPhone" and does not have iOS 15.

```java
capabilities.setCapability("appium:deviceName", "^iPhone.*");
capabilities.setCapability("appium:platformVersion", "^(?!15).*");
```

</TabItem>
</Tabs>

:::note

- A matching device must be present in your account in order for the test to run.
- Regex values are not case-sensitive (i.e., `"iphone .*S"` and `"IPHONe .*s"` are the same).

:::

<div width="100%">
<iframe src="https://vercel.live/open-feedback/dynamic-allocation-git-add-signup-api-wswebcreation.vercel.app?via=pr-comment-visit-preview-link&passThrough=1" width="100%" height="600"></iframe>
</div>

## Additional Resources

- [Appium Testing on Real Devices](/mobile-apps/automated-testing/appium/real-devices)
- [Test Configuration Options](/dev/test-configuration-options)
- [Espresso and XCUITest Testing](/mobile-apps/automated-testing/espresso-xcuitest)
- [Sauce Labs Blog: How to Choose Mobile Devices for Testing](https://saucelabs.com/blog/how-to-choose-mobile-devices-for-testing)
- [Better Together: Using Real Devices, Simulators, and Emulators for Mobile Testing](https://saucelabs.com/blog/better-together-real-devices-emulators-simulators-for-mobile-testing)
- [Mobile Testing Basics: Live Testing vs. Automated Testing](https://saucelabs.com/blog/mobile-testing-basics-manual-vs-automated-testing)
