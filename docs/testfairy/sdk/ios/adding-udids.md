---
id: adding-udids
title: Adding UDIDs to iOS Development Profile
sidebar_label: Adding UDIDs
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are two ways to sign iOS apps.

There is the enterprise certificate that technically allows you to send your app to any iOS device, and there is the Ad-Hoc certificate that requires you to get the user's device ID before sending them an ipa file.

This document refers to ad-hoc certificates and explains how to add a testers' UDID to your app development profile in the Apple developer portal.

We warmly recommend any company to apply to Apple's [iOS Developer Enterprise Program](https://developer.apple.com/programs/ios/enterprise/), and sign iOS apps for internal use with an Enterprise certificate. Please note that this is not a legal document, and refer to Apple's website for the exact terms of service for any Apple service.

In order to add a UDID to your Ad-Hoc certificate please follow the following instructions:

1. Open your TestFairy [testers page](https://app.testfairy.com/testers) and invite new testers. You can add multiple addresses, one per line.
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
