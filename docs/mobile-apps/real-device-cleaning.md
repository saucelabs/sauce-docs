---
id: real-device-cleaning
title: Real Device Cleaning Process
sidebar_label: Real Device Cleaning Process
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The cleaning process runs at the end of each test session for Sauce Labs Real Devices. It resets the device back to a default state, ready for the next test. The cleaning process also removes any private data which may have been part of the prior test. If we encounter any issue during the cleaning process, or we fail to clean the device, we put those devices aside for manual inspection to prevent data and security leaks. 

The cleaning process differs slightly between the Public Devices which are shared among all our customers, and the Private Devices, where the owner has more control over the configuration of their device. It also differs between Android and iOS, due to the different features of these operating systems.

## Public Devices

Every 5th cleaning session includes a device reboot. This ensures that the system remains 
performant, and any stray processes are stopped.

:::note
A factory reset is not performed between test sessions, as this requires manual intervention and would slow down the time required between test runs.
:::

### Cleaning Process Steps

We use a proprietary process that wipes every real device clean at the end of the testing session:

* All apps installed by the customer are removed. Only system applications, and those required for administration by Sauce Labs, remain on the device.
* The browser history, cached website data, and cookies are deleted.
  * On iOS, only Safari remains installed.
  * On Android, only the default browser remains installed.
* AppleID’s are removed between sessions.
* WiFi/network and DNS configuration settings are reset.
* System locale, language, and time zone are reset to match those of the hosting Data Center.
  * EU devices are reset to UK-English, in the CET (UTC+1) time zone.
  * US devices are reset to US-English, in the PST (UTC-8) time zone.
* Mock GPS location is reset to that of the hosting Data Center
 * US Devices: Lat 37.768, Lon -121.959, Alt 5m (San Francisco, US) and Lat 33.771 Lon -84.397, Alt 225m (Atlanta, US)
 * EU devices: Lat 52.500, Lon 13.447, Alt 40m (Berlin, DE)
* Media files (Photos, Videos, Files) on the device are removed.
* PIN code/Passcode is removed.

## Private Devices

Private Devices follow the same process as Public Devices. However, the customer can adjust the following as desired:

App allowlist:
* Apps installed on the device can be selected, by name/bundleID/package name, to be preserved between sessions. These apps and their data will not be cleaned. They can be uploaded by the customer from Sauce Storage, or installed from the App Store/Play Store.
  
Account allowlist: 
* Google accounts signed into the Play Store can be preserved between sessions.
* Apple IDs signed in to the device and App Store can be preserved between sessions.
  
## Goals of the Cleaning Process

Our goal is to provide you access to a device that will behave in a predictable, and reliable way, and is not affected in any way by prior test sessions.

A clean device:
* Has only those apps which are provided by the manufacturer and by Sauce Labs, or which you have specifically requested to be installed.
* Has the default system settings, which are typical for a newly configured device.
* Provides some convenient locale and system account defaults.
* Has an empty file system, containing no additional media or documents.