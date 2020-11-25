---
id: app-upload-storage
title: Uploading Your App and Test Files to Storage
sidebar_label: Uploading Your App
---

As an alternative to using the built-in upload behavior of Sauce Runner, you can separate the upload of your application and test files to Sauce Storage via the REST API.

Implementing the separation of upload allows you to take control of when to upload a new version, which in turn helps save time by reducing the total amount of file uploads done.

Below are example `curl` commands for uploading your app build and test runners to Sauce Storage.

## Uploading Your App to Sauce Labs Storage (title revision tk)

### iOS app example

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" --data-binary @/path/to/iOSApp.ipa
```

### Android app example

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" --data-binary @/path/to/androidApp.apk
```

## Uploading Espresso and XCUITest to Storage (title revision tk)

### Uploading an iOS test runner

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: XCUITEST" --data-binary @/path/to/XCUITests-Runner.ipa
```

### Uploading an Android test runner

```sh
curl -u "username:APP_APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: ANDROID_INSTRUMENTATION_TEST" --data-binary @/path/to/androidTest.apk
```

## Uploading Espresso and XCUITest to Storage Before Execution (title revision tk)

### Uploading an iOS test runner

```sh
curl -u "username:APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/octet-stream" -H "App-Type: XCUITEST" --data-binary @/path/to/XCUITests-Runner.ipa
```

### Uploading an Android test runner

```sh
curl -u "username:APIKEY" -X POST https://app.testobject.com:443/api/storage/upload -H "Content-Type: application/oc
```
