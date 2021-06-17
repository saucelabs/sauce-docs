---
id: app-storage
title: Mobile Application Storage
sidebar_label: Application Storage
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When testing mobile apps, you have the option to upload your app to our Application Storage. Here are some benefits:

* Upload all of your mobile apps to the same location for cross-device Automated and Live testing with virtual devices and real devices.
* Share your uploaded apps with your team members.
* Store apps for up to 60 days.

## What You'll Need
* A Sauce Labs account.
* Your mobile app file.

If you don't have a mobile app on hand, consider using the [Sauce Labs Swag Labs sample app](https://github.com/saucelabs/sample-app-mobile) for validating this process.

## Uploading Apps via UI

See [Live Testing > Uploading an App](/mobile-apps/live-testing/live-mobile-app-testing.md) to learn how to use the Sauce Labs UI to upload your mobile file to Application Storage.

>**NOTE**: This method currently supports live testing on **real devices only**. For virtual devices, upload your apps via the REST API.

## Uploading Apps via REST API

See [API Reference > Storage](/dev/api/storage) to learn how to use the Sauce Labs REST API to upload your mobile file to Application Storage.

There are two main contexts/branches for the storage API:

* One for working with separate application builds (individual builds, application files, etc.).
* One for working with apps (groups of application builds with the same unique identifier, belonging to the same platform and team).

>**NOTE**: [Data Center-specific endpoints](/basics/data-center-endpoints/data-center-endpoints) should be used whenever possible.

## Accepted File Types 
Application Storage recognizes *.apk files as Android apps and *.ipa files as iOS apps. For iOS apps, can also upload a *.zip file, which will be parsed to determine whether a valid *.app bundle exists.

You can also upload and store other file types for generic use, such as a pre-run executable, package, or binary. Some of the formats for this type of use case include:

* *.js
* *.py
* *.tar
* *.zip
* *.sh
* *.bat

## Team Management Sync

By default, all uploaded files are shared with the same team. Members can only access files that are shared with the team where you contribute/participate. Organization admins have access to all files in your organization.

To manage access to your organization, go to **Account** > **Team Management**.
