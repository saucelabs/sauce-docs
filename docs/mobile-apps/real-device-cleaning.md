---
id: real-device-cleaning
title: Real Device Cleaning Process
sidebar_label: Real Device Cleaning Process
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The cleaning process runs at the end of each test session for Sauce Labs Real Devices. It resets the device back to a default state, ready for the next test. The cleaning process also removes any private data which may have been part of the prior test. If we encounter any issue during the cleaning process, or we fail to clean the device, we put those devices aside for manual inspection to prevent data and security leaks.

The cleaning process differs slightly between the Public Devices, which are shared among all our customers, and the Private Devices, where the owner has more control over the configuration of their device. It also differs between Android and iOS, due to the different features of these operating systems.

## Goals of the Cleaning Process

Our goal is to provide you access to a device that will behave in a predictable, and reliable way, and is not affected in any way by prior test sessions.

A clean device:

- Has only those apps which are provided by Sauce Labs, or which you have specifically requested to be installed.
- Has the default system settings, which are typical for a newly configured device.
- Provides some convenient locale and system account defaults.
- Has an empty file system, containing no additional media or documents.

## Public Devices

Every 5th cleaning session includes a device reboot. This ensures that the system remains
performant and any stray processes are stopped.

:::caution
Setting up VPNs on public devices is not supported. Please refer to our documentation for guidance on establishing a secure connection to your internal networks, firewalls, or endpoints. See [Sauce Connect](/secure-connections/sauce-connect-5) for more details.
:::

:::caution
On Public devices, user access to device settings is limited to app-specific configurations only. like notifications, location services, permissions, app storage, and app details. For iOS Enterprise apps, users can trust the app via settings. Access is restricted to the test application and webapps through Safari or Chrome. These rules apply to both iOS and Android public devices.

The list of restrictions on iOS:

- Face ID/Touch ID & Passcodes.
- Developer mode
- Language and region
- Reset device
- Find My Device
- Standby mode
- Create new Apple ID
- Sounds and Haptics
- Screen Time
- Auto-lock settings
- Zoom settings
- Airplay & handoff

Android restrictions:

- Biometrics and Passcode/Pincode
- Lock settings
- Google Account settings
- Developer mode
- Network settings

The following settings are allowed ONLY on Private devices, these are blocked on public devices:

- Safari developer settings
- Changing Text Size
- Battery
- VPN settings
- Cellular
- Analytics and Crash
- Control Center
- Apple Wallet
- Safari and App Passwords
- Mail settings
- Apple ID Sign In
- Proxy configuration
- Network settings

Those settings are fully available on our private device cloud offering. Please contact your account executive or our support team for access.
:::

:::note
A factory reset is not performed between test sessions, as this requires manual intervention and would slow down the time required between test runs.
:::

### Cleaning Process Steps

We use a proprietary process that wipes every real device clean at the end of the testing session:

- All apps installed by the customer are removed. Only system applications, and those required for administration by Sauce Labs, remain on the device.
- The browser history, cached website data, and cookies are deleted.
  - On iOS, only Safari remains installed.
  - On Android, only the default browser remains installed.
- AppleID’s are removed between sessions.
- WiFi/network and DNS configuration settings are reset.
- System locale, language, and time zone are reset to match those of the hosting Data Center.
  - EU devices are reset to UK-English, in the CET (UTC+1) time zone.
  - US devices are reset to US-English, in the PST (UTC-8) time zone.
- Mock GPS location is reset to that of the hosting Data Center
- US Devices: Lat 37.768, Lon -121.959, Alt 5m (San Francisco, US) and Lat 33.771 Lon -84.397, Alt 225m (Atlanta, US)
- EU devices: Lat 52.500, Lon 13.447, Alt 40m (Berlin, DE)
- Media files (Photos, Videos, Files) on the device are removed.
- PIN code/Password is removed.

## Private Devices

:::caution
On Private Devices, access to some parts of the iOS settings is restricted:

- Face ID/Touch ID & Passcodes.
- Developer mode
- Language and region
- Reset device
- Find My Device
- Standby mode
- Create new Apple ID
- Sounds and Haptics
- Screen Time
- Auto-lock settings
- Zoom settings
- Airplay & handoff

On Android the following options are restricted:

- Biometrics and Passcode/Pincode
- Lock settings
- Google Account settings
- Developer mode
- Network settings

:::

:::caution
Setting up VPNs on private devices is not supported. Please consult our documentation on how to set up a secure connection to your internal networks, firewalls, or endpoints. For more details, visit [Sauce Connect](/secure-connections/sauce-connect-5).
:::

While both Private and Public Devices follow the same cleaning process, Private Devices can be configured to allow applications and accounts to persist between sessions. Please see [Private Device Management](/basics/acct-team-mgmt/private-device-mgmt) for details.
