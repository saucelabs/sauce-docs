---
id: device-vitals-mobile
title: Device Vitals for Mobile Applications
sidebar_label: Device Vitals for Mobile Applications
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
---
Device Vitals is a feature available on Real Devices that collects useful performance data in real time from a device during a live session. Data such as network, CPU, and memory usage helps users understand the general performance of a device and the application under test. Users can view a graph of this performance data in real time as the app is processing.

Performance Metrics for Android/iOS Devices
The graph and csv file will contain these performance metrics for devices.

| Metric | Description |
| 'cpu_total' | System-wide CPU usage in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400% |
| 'cpu_user' | CPU usage for user processes in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400% |
| 'cpu_kernal' | Android OS CPU usage in percentage across all CPU cores. 4 cores at max use would be shown as a value of 400% |
| 'n_threads' | Total threads in use by the app |
| 'memory_size_kb' | Total threads in use by the app |
| 'memory_resident_kb' | Memory currently in use by application in kilobytes |
| 'memory_shared_kb' | Anonymous shared memory currently in use by system shared between application(s) and system |
| 'network_wifi_receive_b' | Data in bytes received over wifi connection |
| 'network_wifi_sent_b' | Data in bytes sent over wifi connection |
| 'network_mobile_receive_b' | Data in bytes received from the mobile carrier network |
| 'network_mobile_sent_b' | Data in bytes sent over mobile carrier network |

## Using Device Vitals
### Appium Test Automation
Device Vitals for Test Automation is supported (General Availability) for Appium Test Automation, test developers are required to add the following desired capability to their code:

'capabilities.setCapability("recordDeviceVitals", true);'

At the end of the test execution the vitals data file will be available for download from the Appium test report.

**NOTE:** This feature is only available for native and hybrid mobile applications.

### Live Testing
Device Vitals for Live Testing is currently in beta state, which means we are testing it on a few devices first. We will roll out to all devices in the coming weeks, please refer to this page for updates. See the full list of combinations available for beta below.

Where is Device Vitals available in Live Testing?

<Tabs
  defaultValue="iOS"
  values={[
    {label: 'iOS', value: 'iOS'},
    {label: 'Android', value: 'Android'},
  ]}>

<TabItem value="iOS">

Web Tests (on Safari)
| Device
--------
Platform | iPhone 11 | iPhone XR | iPhoneXS | iPhone X | iPhone 8 | iPhone 7 | iPhone 6 | iPhone 6 Plus | iPhone 6S Plus | iPhone 5S | iPhone SE | iPad Pro 11 2018 | iPad Pro | iPad Air 2019 | iPad 9.7 2017 | iPad 4 | iPad Mini 2 |

| iOS 9.3.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 10.0.2 |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |

| iOS 10.1 |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |

| iOS 10.3.3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |

| iOS 11.4 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 11.4.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 12.2 |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 12.4.1 |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 13.0 |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 13.1 | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

App Tests
| Device
--------
Platform | iPhone 11 | iPhone XR | iPhoneXS | iPhone X | iPhone 8 | iPhone 7 | iPhone 6 | iPhone 6 Plus | iPhone 6S Plus | iPhone 5S | iPhone SE | iPad Pro 11 2018 | iPad Pro | iPad Air 2019 | iPad 9.7 2017 | iPad 4 | iPad Mini 2 |

| iOS 9.3.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 10.0.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 10.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 10.3.3 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 11.4 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 11.4.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 12.2 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 12.4.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 13.0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| iOS 13.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |


</TabItem>
<TabItem value="Android">

Web Tests (on Chrome)
| Device
--------
Platform | Google Pixel XL | Google Pixel 3 | Google Pixel 3a | Motorola Moto G6 Plus | Huawei P30 | Google Pixel C | HTC U12 Plus | HTC U11 | HTC Desire 12 | Samsung Galaxy S7 | Lenovo Tab 4 | Asus Google Nexus 7 (2013) | LG G6 | LG G5 | LG G4 | Huawei P9 | Amazon Kindle Fire HD 8 |

| Android 5.1.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 6.0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 6.0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 7.0 |  |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |

| Android 7.1.1 |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |

| Android 8.0.0 |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |

| Android 8.1.0 |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 9 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 10 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 11 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

App Tests
| Device
--------
Platform | Google Pixel XL | Google Pixel 3 | Google Pixel 3a | Motorola Moto G6 Plus | Huawei P30 | Google Pixel C | HTC U12 Plus | HTC U11 | HTC Desire 12 | Samsung Galaxy S7 | Lenovo Tab 4 | Asus Google Nexus 7 (2013) | LG G6 | LG G5 | LG G4 | Huawei P9 | Amazon Kindle Fire HD 8 |

| Android 5.1.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 6.0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 6.0.1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 7.0 |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |

| Android 7.1.1 |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |  |  |

| Android 8.0.0 |  |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |

| Android 8.1.0 |  |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  |

| Android 9 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 10 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| Android 11 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

</TabItem>
</Tabs>
