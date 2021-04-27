---
id: app-storage
title: Mobile Application Storage
sidebar_label: Application Storage
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When testing mobile applications, you now have the option to upload your application to our new temporary application storage. Application storage is quite different and more flexible than our previous iteration (Sauce Storage) in multiple ways:

* Upload all your apps to the same location for cross-device automated and live testing with both virtual or real devices
* Share your uploaded apps between your team members
* Store apps in the new application storage for 60 days rather than 7 in Sauce Storage

## What You'll Need
* A Sauce Labs account
* A mobile app to test. If you don't have one, you can use the [Sauce Labs sample mobile app](https://github.com/saucelabs/sample-app-mobile).

## Uploading an App
For information about uploading an app via the Sauce Labs UI, see [Uploading an App](/mobile-apps/live-testing/live-mobile-app-testing.md).

>**NOTE:** The Sauce Labs UI currently supports live testing on **real devices only**. To test on virtual devices, use the REST API.

Non-app file uploads are not supported in the UI at this time, but can be uploaded through the API.

## Upload Files with the REST API

Read the [Storage API Docs](/dev/api/storage) to learn how to use the Sauce Labs REST API to upload your mobile file to Application Storage. If you do not have a file to test, consider using the [Sauce Labs Swag Labs](https://github.com/saucelabs/sample-app-mobile) sample app for validating this process.

## Accepted File Types 
App Storage recognizes Androi `.apk` and IOS `.ipa` and `.zip` files (_parsing the `.Zip`  to determine whether a valid *.app bundle exists). You can also upload and store other file types for generic use, such as a pre-run executable, package, or binary. Some of the formats for this type of use case include:

* `.js`
* `.py`
* `.tar`
* `.zip`
* `.sh`
* `.bat`

## Team Management Sync

A Sauce Labs admin (either an org admin or a team admin) can control access to individual applications with Team Management Sync to files or specific binary/script files. By default, all uploaded files are shared with the same team. Members can only access files that are shared with the team where you contribute/participate. Organization admins have access to all files in your organization.

To manage access to your organization go to **Account > Team Management**.

Read the [Storage API Docs](/dev/api/storage) for information on how to save requests to Storage
