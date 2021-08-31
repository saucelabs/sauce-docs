---
id: app-storage
title: Mobile Application Storage
sidebar_label: Application Storage
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When testing mobile apps, you have the option to upload your app to our application storage. The benefits of application storage include:

* Uploading all of your mobile apps to the same location for cross-device automated and live testing with virtual devices and real devices.
* Sharing your uploaded apps with your team members.
* Storing apps for up to 60 days.

## What You'll Need
* A Sauce Labs account.
* Your mobile app file.

If you don't have a mobile app on hand, consider using the [Sauce Labs Swag Labs sample app](https://github.com/saucelabs/sample-app-mobile) for validating this process.

## Uploading Apps via UI

For information about using the Sauce Labs UI to upload your mobile file to application storage, see [Uploading an App](https://docs.saucelabs.com/mobile-apps/live-testing/live-mobile-app-testing/index.html#uploading-an-app).

:::note
This method currently supports live testing on **real devices only**. For virtual devices, upload your apps via the REST API.
:::

## Uploading Apps via REST API

See [File Storage API Methods](/dev/api/storage) to learn how to use the Sauce Labs REST API to upload your mobile file to application storage.

There are two main contexts/branches for the storage API:

* One for working with separate application builds (individual builds, application files, etc.).
* One for working with apps (groups of application builds with the same unique identifier, belonging to the same platform and team).

:::note
[Data center-specific endpoints](/basics/data-center-endpoints/data-center-endpoints) should be used whenever possible.
:::

## Accepted File Types 
Application storage recognizes *.apk files as Android apps and *.ipa files as iOS apps. For iOS apps, can also upload a *.zip file, which will be parsed to determine whether a valid *.app bundle exists.

You can also upload and store other file types for generic use, such as a pre-run executable, package, or binary. Some of the formats for this type of use case include:

* *.js
* *.py
* *.tar
* *.zip
* *.sh
* *.bat

## Team Management Sync
By default, all uploaded files are shared with the same team. Members can only access files that are shared with the team where you contribute/participate. Organization admins have access to all files in your organization.

For more information about managing access to your organization, see [Managing User Information](https://docs.saucelabs.com/basics/acct-team-mgmt/managing-user-info).

## Using Application Storage with Automated Test Builds
After successfully uploading your file to application storage, you need to reference the unique app Identifier (`file_id`) in your test code to retrieve and use your app for automated tests.

For example, let's assume you've updated a new version of your app using the `/upload` endpoint. The JSON response would be something like:

```
{
   "item":{
      "id":"379c301a-199c-4b40-ad45-4a95e5f30a3a",
      "owner":{
         "id":"286c0fbb0cb644c4a012d505b8a0a1ac",
         "org_id":"c064890612424e34a12fca98ce4f32c6"
      },
      "name":"Android.SauceLabs.Mobile.Sample.app.2.3.0.apk",
      "upload_timestamp":1593450387,
      "etag":"0cf189b1c4c17a56656ada5e2d75cd51",
      "kind":"android",
      "group_id":2807,
      "metadata":{
         "identifier":"com.swaglabsmobileapp",
         "name":"Swag Labs Mobile App",
         "version":"2.3.0",
         "icon":"<long-serial-number>",
         "version_code":13,
         "min_sdk":16,
         "target_sdk":28
      },
      ...
      }
   }
}
```
Then the file_id would be  `"id":"379c301a-199c-4b40-ad45-4a95e5f30a3a"`. If you're unsure of the id of an existing app, you can use the [Storage API](/dev/api/storage) to lookup the ID of an application in storage or look into the apps details in the [Sauce UI](https://app.saucelabs.com/live/app-testing).

### File Name instead of File ID
You can also use the app `name` field from the storage API in the `app` capability. This approach is particularly useful if you uploaded your build to application storage via a CI pipeline, and you either don't know the id, or you do not wish to perform JSON parsing in order to retrieve the id. The filename field also includes any supported file that can be uploaded to application storage.

Example of uploading an Android .apk file:

<Tabs
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
    {label: 'JS', value: 'js'},
    {label: 'Python', value: 'python'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'C#', value: 'csharp'},
  ]}>

<TabItem value="java">

```
caps.setCapability("app", "storage:filename=<file-name>.apk");
```

</TabItem>
<TabItem value="js">

```
caps['app'] = 'storage:filename=<file-name>.apk';
```

</TabItem>
<TabItem value="python">

```
caps['app'] = "storage:filename=<file-name>.apk"
```

</TabItem>
<TabItem value="ruby">

```
caps['app'] = 'storage:filename=<file-name>.apk'
```

</TabItem>
<TabItem value="csharp">

```
caps.SetCapability("app","storage:filename=<file-name>.apk");
```

</TabItem>
</Tabs>

#### Limitations
* File names are NOT unique, therefore they will always default to the latest version.
* Currently you cannot specify the version of the app using this feature.
* `build` capability not supported in VDC at this time.

## Updating WebDriver Capabilities
If you were previously using application stored in  sauce-storage, you can convert your existing test capabilities by replacing `sauce-storage:myapp` with `storage:<file_id>`.

### Example Code
These examples assume `file_id = c8511dd6-38ec-4f58-b8b9-4ec8c23ad882`

<Tabs
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
    {label: 'JS', value: 'js'},
    {label: 'Python', value: 'python'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'C#', value: 'csharp'},
]}>

<TabItem value="java">

Before:
```
caps.setCapability("app", "sauce-storage:some-app.apk");
```
After:
```
caps.setCapability("app", "storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882");
```

</TabItem>
<TabItem value="js">

Before:
```
caps['app'] = 'sauce-storage:my_app.apk';
```
After:
```
caps['app'] = 'storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882';
```

</TabItem>
<TabItem value="python">

Before:
```
caps['app'] = "sauce-storage:my_app.apk"
```
After:
```
caps['app'] = "storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882"
```

</TabItem>
<TabItem value="ruby">

Before:
```
caps['app'] = 'sauce-storage:my_app.apk'
```
After:
```
caps['app'] = 'storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882'
```

</TabItem>
<TabItem value="csharp">

Before:
```
caps.SetCapability("app","sauce-storage:my_app.apk");
```
After:
```
caps.SetCapability("app","storage:c8511dd6-38ec-4f58-b8b9-4ec8c23ad882");
```

</TabItem>
</Tabs>

## Using Dependent Apps for a Test

<small><span class="sauceDBlue">Real Devices Only</span></small>

If your real device testing requires your app under test to have access to other apps and you, therefore, need to install those dependent apps and reference them in your tests, you can do so using the `otherApps` capability.

:::note
Dependent apps inherit the configuration of the main app under test for [`Device Language`, `Device Orientation`, and `Proxy`](https://app.saucelabs.com/live/app-testing#group-details), regardless of what settings may have been applied to the app at the time of upload, because the settings are specific to the device under test. For example, if the dependent app is intended to run in landscape orientation, but the main app is set to portrait, the dependent app will run in portrait for the test, which may have unintended consequences.
:::

### Appium Capability

For [Appium](/dev/test-configuration-options#mobile-app-capabilities-sauce-specific--optional) tests, you can specify up to seven apps that have already been uploaded to App Storage using one of the previously described methods by setting the `otherApps` desired capability and referencing the app's storage ID or filename.

```
caps.setCapability("otherApps", "storage:filename=<file-name>")
caps.setCapability("otherApps", "storage:<fileId>")
```

:::note
* Android dependent apps will not be instrumented or modified.
* iOS dependent apps will always be resigned/modified (even when resigning is disabled for the main app) because apps can't be installed on iOS devices without resigning them. If a dependent app cannot be resigned (such as a 3rd party app), the test will not work as intended.
:::

### Espresso/XCUITest Configuration

For [Espresso](/testrunner-toolkit/configuration/espresso) or [XCUITest](/testrunner-toolkit/configuration/xcuitest) testing, you can specify up to seven dependent apps to either upload from your local machine or that are already in App Storage. In your `saucectl` configuration file, specify a local filepath (relative location is `{project-root}/apps/app1.apk`) or an expanded environment variable representing the path, and `saucectl` will upload the app to App Storage for use with the test. Otherwise, specify an app in App Storage using the reference `storage:<fileId>` or `storage:filename=<filename>`.


```yaml
espresso:
  otherApps:
    - ./apps/pre-installed-app1.apk
    - $PRE_INSTALLED_APP2
    - storage:filename=pre-installed-app3.apk
```

## Uploading to Legacy Sauce Storage

:::warning
TestObject, our [Legacy Real Device Platform](https://saucelabs.com/platform/test-object-eol), reaches end-of-life September 1, 2021. Please migrate all of your apps and tests from TestObject to Sauce Labs by August 31, 2021.
:::

Sauce Storage is our legacy private storage space for apps. Files uploaded will expire seven days after upload, and be removed. You can upload the app you want to test to Sauce Storage using our REST API, and then access it for testing by specifying `sauce-storage:myapp` for the app capability in your test script. You upload apps using the `upload_file` method of the Sauce Labs REST API.

You can use any REST client; [cURL](https://curl.haxx.se/docs/manpage.html) is a convenient command-line option.

<Tabs
  defaultValue="bash"
  values={[
    {label: 'bash', value: 'bash'},
    {label: 'powershell', value: 'powershell'},
  ]}>

<TabItem value="bash">

**US-WEST Data Center**

MacOS/Linux Example:
```
$ curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" \
"https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/$APP_NAME?overwrite=true" --data-binary @path/to/your_file_name
```

**US-EAST Data Center**

MacOS/Linux Example:
```
$ curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" \
"https://us-east-1.saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/$APP_NAME?overwrite=true" --data-binary @path/to/your_file_name
```

**EU-CENTRAL Data Center**

MacOS/Linux Example:
```
$ curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" \
"https://eu-central-1.saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/$APP_NAME?overwrite=true" --data-binary @path/to/your_file_name
```

</TabItem>
<TabItem value="powershell">

**US-WEST Data Center**

Windows Example:
```
> curl -u %SAUCE_USERNAME%:%SAUCE_ACCESS_KEY% -X POST -H "Content-Type: application/octet-stream" \
"https://saucelabs.com/rest/v1/storage/%SAUCE_USERNAME%/%APP_NAME%?overwrite=true" --data-binary @path\to\your_file_name
```

**US-EAST Data Center**

Windows Example:
```
> curl -u %SAUCE_USERNAME%:%SAUCE_ACCESS_KEY% -X POST -H "Content-Type: application/octet-stream" \
"https://us-east-1.saucelabs.com/rest/v1/storage/%SAUCE_USERNAME%/%APP_NAME%?overwrite=true" --data-binary @path\to\your_file_name
```

**EU-CENTRAL Data Center**

Windows Example:
```
> curl -u %SAUCE_USERNAME%:%SAUCE_ACCESS_KEY% -X POST -H "Content-Type: application/octet-stream" \
"https://eu-central-1.saucelabs.com/rest/v1/storage/%SAUCE_USERNAME%/%APP_NAME%?overwrite=true" --data-binary @path\to\your_file_name
```

</TabItem>
</Tabs>

For information about uploading an app from a remote location, see [Uploading Mobile Apps from a Remote Location](https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/index.html#uploading-mobile-apps-from-a-remote-location).
