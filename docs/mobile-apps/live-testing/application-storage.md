---
id: application-storage
title: Application Storage
sidebar_label: Application Storage
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


When testing mobile applications, you now have the option to upload your application to our new temporary application storage. Application storage is quite different and more flexible than our previous iteration (Sauce Storage) in multiple ways:

Upload all your apps to the same location for cross-device automated and live testing with both virtual or real devices
Share your uploaded apps between your team members
Store apps in the new application storage for 60 days rather than 7 in Sauce Storage
See the following sections for more information:

## What You'll Need
* A Sauce Labs account
* A mobile app you wish to test. If you don't have one, you can use the Sauce Labs sample mobile app

## Upload an App to Real Devices with App-Upload
1. Log in to Sauce Labs and select **LIVE > Mobile-App** from the options in the left-hand navigation
2. You will see a list of previously uploaded apps
3. To the right of the page, select the **App Upload** button to upload a new application.

:::note Live Testing on Real Devices Only
App-Upload UI currently supports Live Testing on Real Devices only. Use the REST API to upload apps for use with virtual devices.
:::

<img src={useBaseUrl('img/live-testing/live-test-mobile-app.png')} alt="Live App Upload UI" width="700" />

You can either drag and drop and application, or browse for the file. Supported application file types include:
* `.APK` For Android native app and mobile browser tests
* `IPA` for IOS native app Tests
* `.ZIP` for IOS mobile browser tests.  (.ZIP must include a valid iOS application bundle) files of up to 4 GB.

<img src={useBaseUrl('img/live-testing/app-upload.png')} alt="App Upload UI" width="700" />

Non-app file uploads are not supported in the UI at this time, but can be uploaded through the API.

:::note Using Previous Uploads
To use an app you've previously uploaded, select "Check out the old repository" link at the bottom of the page. This will re-direct you to the legacy TestObject App Management UI with all your previously uploaded.
<img src={useBaseUrl('img/live-testing/old-repository.png')} alt="Previous App Upload UI" width="700" />
:::

## Delete Apps with the Delete Button
The Delete button will delete a whole application (e.g., a group of builds belonging to the same app package). Files associated with app identifiers (i.e., belong to the same platform and are accessible to the same team) are indicated by the + symbol next to version number. Also, the version number shown is the most recently updated file.

<img src={useBaseUrl('img/live-testing/latest-version.png')} alt="App Upload UI" width="700" />

## Upload Files with the REST API
Below are some examples of how to use the Sauce Labs REST API to upload your mobile file to Sauce Storage. If you do not have a file to test, consider using the Sauce Labs Swag Labs sample app for validating this process.

### REST API Authentication
The APIs and authorization credentials are located here: app.saucelabs.com. A recommended best practice is to set your credentials as environment variables like so:

```
SAUCE_USERNAME=<valid.username>
SAUCE_ACCESS_KEY=<valid.key>
```

<!-- For specific instructions on how to set environment variables visit, the following links:

[Set Environment Variables with Windows 10](URL)
[Set Environment Variables with MacOS}(URL)
[Set Environment Variables with Linux](URL) -->

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

<!-- Read the (Storage API docs)[link] for information on how to  save requests to Storage -->
