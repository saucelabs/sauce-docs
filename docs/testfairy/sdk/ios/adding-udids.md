---
id: adding-udids
title: Adding UDIDs to iOS Development Profile
sidebar_label: Adding UDIDs
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This documentation provides instructions on how to add testers' UDIDs (Unique Device Identifiers) to your iOS app development profile using Ad-Hoc certificates. This process enables you to distribute your app to specific devices for testing purposes. Please note that this guide pertains to Ad-Hoc certificates and assumes you have a basic understanding of the Apple Developer Portal and App Distribution.

:::note
While this guide offers general guidance, it is not a legal document. Always refer to Apple's official [iOS Developer Enterprise Program](https://developer.apple.com/programs/ios/enterprise/) for precise terms of service related to any Apple service.
:::

## What You'll Need

- An active Apple Developer account.
- Access to the App Distribution platform for managing testers.
- A list of testers' UDIDs obtained through the App Distribution platform.

## Adding UDIDs to Your Development Profile

In order to add a UDID to your Ad-Hoc certificate please follow the following instructions:

1. Open your App Distribution [testers page](https://app.testfairy.com/testers) and invite new testers. You can add multiple addresses, one per line.
   Your testers will get an email asking them to register their device. Once they register, you will get an email with your tester's UDID and their device details will be listed in https://app.testfairy.com/testers

2. Once you have all your testers' UDIDs [export their details](https://app.testfairy.com/testers/export/).

3. Log into the Apple Developer Portal and go to the [Devices area](https://developer.apple.com/account/resources/devices/list).

4. Click on the + icon

5. You may register one or multiple devices.

   5.1 For adding one device add the device details in the **Register a Device** form.

   5.2 Use **Register multiple devices** for registering devices from a file, choose your file and continue.

6. Follow the on screen instructions.

7. Click on **profiles** [distribution section](https://developer.apple.com/account/resources/profiles/list)

8. Follow the on screen process to generate the profile.

9. Generate the new profile and download the file.

10. Make sure to delete the previous profile files.
