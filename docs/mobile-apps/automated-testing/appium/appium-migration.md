---
id: migration
title: Migrating to Appium on Sauce
sidebar_label: Legacy Migration
description: Convert your TestObject Appium setup to Sauce Labs testing.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning TestObject End-of-Life September 1, 2021

**Action Required**: If you're currently using the Appium test framework on TestObject, please migrate all of your mobile apps and test files from TestObject Storage to Sauce Labs Application Storage by August 31, 2021 using the step-by-step guide on this page. Appium real device testing is fully supported on Sauce Labs.

TestObject will remain accessible in the Sauce Labs app under **SAUCE APPS** > **LEGACY RDC** through August 31, 2021. As we begin phasing it out, we'll keep you posted on key end-of-life dates. If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support.
:::

## What You'll Need

*  Your TestObject credentials (username and API key).
*  Sauce Labs account `USERNAME` and `ACCESS_KEY` [Look them up](https://app.saucelabs.com/user-settings)
*  Your preferred Sauce Labs Data Center (e.g., US-West-1, EU-Central-1).
*  An app to test

If you don't have a mobile app or test file, you can sample our [Sauce Labs sample app](https://github.com/saucelabs/sample-app-mobile/releases).


## Sauce Labs User Management

Confirm that your TestObject entitlements and platform privileges have carried over to Sauce Labs by reviewing your organization's [Team Management](https://app.saucelabs.com/team-management/users) page in the Sauce Labs app, where you can assign users to teams, bestow user privileges, and manage device/VM concurrency.


## Modifying Real Device Test Builds

Follow the steps outlined here to modify your existing test builds to utilize and reach the new unified platform.


### Step 1: Replace Credentials

 Throughout your test files, replace your TestObject credentials with your Sauce Labs credentials.

  We recommend using [Environment Variables for Authentication](/basics/environment-variables) in order to reduce hard coding and protect your personal information from exposure.


### Step 2: Replace Remote URL Endpoint

Replace the Remote URL endpoint in your tests to access the Sauce Labs platform, for example:

|Region|Test Object URL|Sauce Labs URL|
|---|-----------|-----------|
|US|<small>`https://us1.appium.testobject.com/wd/hub`</small>|<small>`https://ondemand.us-west-1.saucelabs.com/wd/hub`</small>|
|EU|<small>`https://eu1.appium.testobject.com/wd/hub`</small>|<small>`https://ondemand.eu-central-1.saucelabs.com/wd/hub`</small>|

If you're using [Sauce Connect Proxy](/secure-connections/sauce-connect), our [REST API](/dev/api), or any other features in conjunction with real device testing, consult the documentation for that feature for applicable Sauce Labs endpoints.


### Step 3: Change Device Test Options

Not all device model and operating system combinations will carry over from the TestObject platform to Sauce Labs. You may need to adjust your device capabilities in your test configuration.

#### **Device Allocations**
To ensure your preferred [device allocations](/mobile-apps/automated-testing/appium/real-devices#configuring-appium-tests-for-real-devices) will still work when you move from TestObject to Sauce Labs, view the list of available devices for your region by logging into the Sauce Labs platform and going to **Live** > **Cross-Browser** > **Mobile Real**. For a full, non-region specific list of supported devices and platforms, see [Supported Browsers and Devices](https://saucelabs.com/platform/supported-browsers-devices).

If you switch your Sauce Labs Data Center in the UI, you may see a different set of devices. Each Data Center stores a different set of mobile real devices.

#### **Appium Capabilities**

Validate that the Appium capabilities you've used on TestObject will still work when you move tests to Sauce Labs; see [Appium Capabilities for Real Device Testing](/basics/test-config-annotation/test-config).

### Step 4: Upload your Application to Sauce Application Storage

Any mobile apps in TestObject storage will no longer be accessible after TestObject reaches end-of-life. Please upload these to Sauce Application Storage.

*   For instructions on uploading your mobile apps (.apk or .ipa files) to Sauce Labs, see [Application Storage](/mobile-apps/app-storage).
*   Update all app references in your test code capabilities. For example, in the `app` capability, you must use `storage:<app-id>` or `storage:filename=<some-app.apk>`, rather than `storage:filename=<myapp.apk>` as you would in TestObject. See [Using Appium for Automated Mobile App Testing](/mobile-apps/automated-testing/appium) for more information.
*  Migrate your [MicroSoft App Center Integration](/mobile-apps/ms-app-center) to a Sauce Labs Data Center using a post-build script.


### Step 5: Replace REST API Endpoints

Support for all TestObject REST API endpoints will cease in conjunction with the TestObject end-of-life event.

The chart below contains Sauce Labs-equivalent endpoints to use in place of the TestObject endpoints.

#### **Base URL**

Update the TestObject base URL `https://app.testobject.com/api/rest/` to the Base URL matching your Sauce Labs data center:

|Data Center|API Base URL|
|---|-------|
|US|<small>`https://api.us-west-1.saucelabs.com/`</small>|
|Europe|<small>`https://api.eu-central-1.saucelabs.com/`</small>|

#### **Storage API**

|TestObject (Legacy RDC) Endpoints|Sauce Labs RDC Endpoints|
|---------------|----------------|
|<small>`storage/upload`</small>|<small>[`v1/storage/upload`](https://docs.saucelabs.com/dev/api/storage#upload-file-to-app-storage)</small>|

#### **Appium Watcher API**

|TestObject (Legacy RDC) Endpoints|Sauce Labs RDC Endpoints|
|---------------|----------------|
|<small>`v2/appium/session/{sessionId}/skiptest`</small> | Deprecated|
|<small>`v2/appium/session/{sessionId}/test`</small> | Deprecated|

#### **Appium Suites API**

The following TestObject Appium suites API endpoints will be deprecated and not replaced with a Sauce Labs equivalent. Please review the [Sauce Labs Insights API](/dev/api/insights) for alternatives.

   *  `v2/appium/suites/{batchId}`
   *  `v2/appium/suites/{batchId}/deviceIds`
   *  `v1/appium/suites/{batchId}/reports/start`
   *  `v2/appium/suites/{batchId}/reports/{batchReportId}/finish`
   *  `v2/appium/suites/{batchId}/reports/{batchReportId}/results/{testReportId}/finish`
   *  `v2/appium/suites/{batchId}/reports/{batchReportId}/results/{testReportId}/skip`

#### **Devices API**

|TestObject (Legacy RDC) Endpoints|Sauce Labs RDC Endpoints|
|---------------|----------------|
|<small>`v2/devices`</small>|<small>[`v1/rdc/devices`](https://docs.saucelabs.com/dev/api/rdc#get-devices)</small>|
|<small>`v2/devices/available`</small>|<small>[`v1/rdc/devices/available`(https://docs.saucelabs.com/dev/api/rdc#get-available-devices)]</small>|
|<small>`v2/devices/{deviceDescriptorId}`</small>|<small>[`v1/rdc/devices/$DEVICE_ID`](https://docs.saucelabs.com/dev/api/rdc#get-a-specific-device)</small>|

#### **Test Reports API**

|TestObject (Legacy RDC) Endpoints|Sauce Labs RDC Endpoints|
|---------------|----------------|
|<small>`v2/reports/{testReportId}`</small>|<small>[`v1/rdc/jobs/$JOB_ID`](https://docs.saucelabs.com/dev/api/rdc#get-a-specific-real-device-job)</small>|

#### **Session Report API**

|TestObject (Legacy RDC) Endpoints|Sauce Labs RDC Endpoints|
|---------------|----------------|
|<small>`v1/devices/reports`</small>|<small>[`v1/rdc/jobs`](https://docs.saucelabs.com/dev/api/rdc#get-real-device-jobs)</small>|


#### **Logs API**

|TestObject (Legacy RDC) Endpoints|Sauce Labs RDC Endpoints|
|---------------|----------------|
|<small>`/v2/logs/{testReportId}/appium`</small><br/><small>`/v2/logs/{testReportId}/device`</small><br/><small>`/v2/logs/{testReportId}/vitals`</small><br/><small>`/v2/logs/{testReportId}/xcuitest`</small>|<small>[`/rest/v1/$SAUCE_RDC_USERNAME/jobs/$JOB_ID/assets/$FILE_NAME`](https://docs.saucelabs.com/dev/api/jobs#get-a-job-asset-file)</small>|
|<small>`v2/logs/{testReportId}`</small>|<small>[`rest/v1/$SAUCE_RDC_USERNAME/jobs/$JOB_ID/assets`](https://docs.saucelabs.com/dev/api/jobs#list-job-assets)</small>|


#### **Screenshot API**

|TestObject (Legacy RDC) Endpoints|Sauce Labs RDC Endpoints|
|---------------|----------------|
|<small>`v2/screenshots/{testReportId}/{screenshotId}.png`</small>|<small>[`rest/v1/$SAUCE_RDC_USERNAME/jobs/$JOB_ID/assets/$FILE_NAME`](https://docs.saucelabs.com/dev/api/jobs#get-a-job-asset-file)</small>|

#### **Session Video API**

|TestObject (Legacy RDC) Endpoints|Sauce Labs RDC Endpoints|
|---------------|----------------|
|<small>`v2/video/{videoId}.mp4`</small>|<small>`[rest/v1/$SAUCE_RDC_USERNAME/jobs/$JOB_ID/assets/$FILE_NAME`](https://docs.saucelabs.com/dev/api/jobs#get-a-job-asset-file)</small>|

#### **Suites Reports API**

The following TestObject Suites API endpoints will be deprecated with no Sauce Labs equivalent. Please review the [Sauce Labs Insights API](/dev/api/insights) for alternatives.

   *  `v2/batchReports/{batchReportId}`
   *  `v2/batchReports/{batchReportId}/xml`
