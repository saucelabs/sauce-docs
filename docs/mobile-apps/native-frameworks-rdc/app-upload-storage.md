---
id: app-upload-storage
title: Uploading the App and Test Files to Storage Before Execution
sidebar_label: Uploading Your App
---

You can separate the upload of your Application and Test files to Sauce Storage via the REST API instead of using the built-in upload behavior of Sauce Runner. Implementing the separation of upload allows you to take control of when to upload a new version, which in turn helps save time by reducing the total amount of file uploads done. Below are example curl commands for uploading your App build and Test runners to Sauce Storage.

## Uploading the App to Storage
Example for uploading an iOS app:

```curl
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" --data-binary @/path/to/iOSApp.ipa
```

Example for uploading an Android app:

```curl
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" --data-binary @/path/to/androidApp.apk
```

## Uploading Espresso and XCUITest to Storage
Example for uploading an iOS test runner:

```curl
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: XCUITEST" --data-binary @/path/to/XCUITests-Runner.ipa
```

Example for uploading an Android test runner:

```curl
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: ANDROID_INSTRUMENTATION_TEST" --data-binary @/path/to/androidTest.apk
```
