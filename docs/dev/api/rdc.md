---
id: rdc
title: Real Device API Methods
sidebar_label: Real Devices
description: Retrieve information related to real device availability, device/platform/browser combinations, and currently running tests.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the Real Device Cloud (RDC) API methods to look up device types and availability in your data center and view current activity on those devices.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

### Get Devices

<details><summary><span className="api get">GET</span> <code>/v1/rdc/devices</code></summary>
<p/>

Get the set of real devices located at the data center, as well as the operating system/browser combinations and identifying information for each device.

#### Parameters

This method takes no parameters.

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/devices' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/devices' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Device info returned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[
    {
        "abiType": "armeabi-v7a",
        "apiLevel": 23,
        "cpuCores": 4,
        "cpuFrequency": 2300,
        "defaultOrientation": "PORTRAIT",
        "dpi": 440,
        "hasOnScreenButtons": true,
        "id": "HTC_One_M8_real",
        "internalOrientation": "PORTRAIT",
        "internalStorageSize": 16384,
        "isArm": true,
        "isKeyGuardDisabled": false,
        "isPrivate": false,
        "isRooted": false,
        "isTablet": false,
        "manufacturer": [
            "HTC"
        ],
        "modelNumber": "HTC One_M8",
        "name": "HTC One (M8)",
        "os": "ANDROID",
        "osVersion": "6.0",
        "pixelsPerPoint": 1,
        "ramSize": 2048,
        "resolutionHeight": 1920,
        "resolutionWidth": 1080,
        "screenSize": 5.0,
        "sdCardSize": 2048,
        "supportsAppiumWebAppTesting": true,
        "supportsGlobalProxy": false,
        "supportsMinicapSocketConnection": false,
        "supportsMockLocations": true,
        "cpuType": "ARM",
        "deviceFamily": "ANY",
        "dpiName": "xxhdpi",
        "isAlternativeIoEnabled": true,
        "supportsManualWebTesting": true,
        "supportsMultiTouch": true,
        "supportsXcuiTest": true
    },
    {...more devices},
]
```

</details>

---

### Get a Specific Device

<details><summary><span className="api get">GET</span> <code>/v1/rdc/devices/&#123;device_id&#125;</code></summary>
<p/>

Get information about the device specified in the request.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>device_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of a device in the Sauce Labs data center. You can look up device IDs using the <a href="#get-devices">Get Devices</a> endpoint.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/devices/iPad_Pro_11_14_2018_real' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/devices/iPad_Pro_11_14_2018_real' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Device info returned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "abiType": "arm64",
    "apiLevel": 0,
    "cpuCores": 6,
    "cpuFrequency": 2600,
    "defaultOrientation": "LANDSCAPE",
    "dpi": 265,
    "hasOnScreenButtons": true,
    "id": "iPad_Pro_11_14_2018_real",
    "internalOrientation": "LANDSCAPE",
    "internalStorageSize": 65536,
    "isArm": true,
    "isKeyGuardDisabled": false,
    "isPrivate": false,
    "isRooted": false,
    "isTablet": true,
    "manufacturer": [
        "Apple"
    ],
    "modelNumber": "iPad8,1",
    "name": "iPad Pro 11 2018",
    "os": "IOS",
    "osVersion": "14.4.1",
    "pixelsPerPoint": 2,
    "ramSize": 4096,
    "resolutionHeight": 2388,
    "resolutionWidth": 1668,
    "screenSize": 11.0,
    "sdCardSize": 0,
    "supportsAppiumWebAppTesting": true,
    "supportsGlobalProxy": false,
    "supportsMinicapSocketConnection": true,
    "supportsMockLocations": true,
    "cpuType": "ARM",
    "deviceFamily": "IPAD",
    "dpiName": "hdpi",
    "isAlternativeIoEnabled": true,
    "supportsManualWebTesting": true,
    "supportsMultiTouch": true,
    "supportsXcuiTest": true
}
```

</details>

---

### Get Available Devices

<details><summary><span className="api get">GET</span> <code>/v1/rdc/devices/available</code></summary>
<p/>

Returns a list of Device IDs for all devices in the data center that are currently free for testing.

#### Parameters

This method takes no parameters.

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/devices/available' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/devices/available' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Device info returned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[
    "Google_Pixel_3a_XL_real",
    "Samsung_Galaxy_A5_real",
    "Google_Pixel_4_real_us",
    "iPhone_8_14_4_real_us",
    "iPhone_6_10_3_real",
    "Huawei_P10_real",
    "Samsung_Galaxy_Fold_5G_real_us",
    "iPhone_11_14_4_real_us",
    "iPhone_12_Pro_Max_real_us",
    "iPad_Pro_12_9_2018_real",
    "Samsung_Galaxy_M20_real_us",
    "Samsung_Galaxy_S10_real",
    "Samsung_Galaxy_Tab_S4_real_us",
    "OnePlus_8_real_us",
    "iPad_Mini_2_12_real_us",
    "iPad_mini_2019_real",
    "Samsung_note_5_real_us",
    "iPad_Pro_11_2020_14_real_us",
    "ZTE_Axon_7_real2_us",
    "Essential_PH_1_real",
    "Huawei_P20_Pro_real_us",
    "Samsung_Galaxy_Tab_S_105_real_us",
    "iPod_Touch_6_10_real_us",
    "Samsung_Galaxy_Tab_S3_real",
    "Amazon_Kindle_Fire_HD_7_real_us",
    "OnePlus_5T_real",
    "Sony_Xperia_10_real_us",
    "OnePlus_6_real",
    ...
]
```

</details>

---

### Get Real Device Jobs

<details><summary><span className="api get">GET</span> <code>/v1/rdc/jobs</code></summary>
<p/>

Get a list of jobs that are actively running on real devices in the data center.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The maximum number of jobs to return.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Limit results to those following this index number. Defaults to <code>1</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>type</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filter results to show manual tests only with <code>LIVE</code>.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs?limit=5' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs?limit=5' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Device info returned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "entities": [
        {
            "assigned_tunnel_id": null,
            "device_type": "real_device",
            "owner_sauce": "walkerlj",
            "consolidated_status": "failed",
            "end_time": 1618283190151,
            "id": "fdb5600685fc4779b394c552293b37da",
            "name": "lockedOutLoginFlow",
            "os": "Android",
            "os_version": "10",
            "device_name": "Samsung Galaxy A30",
            "start_time": 1618283139160,
            "status": "failed",
            "creation_time": 1618283139160,
            "automation_backend": "APPIUM",
            "automated": true
        },
        {...4 more}
    ],
    "metaData": {
        "offset": 1,
        "limit": 5,
        "searchTerm": null,
        "sortDirection": "DESCENDING",
        "moreAvailable": true
    }
}
```

</details>

---

### Get a Specific Real Device Job

<details><summary><span className="api get">GET</span> <code>/v1/rdc/jobs/&#123;job_id&#125;</code></summary>
<p/>

Get information about a specific job running on a real device at the data center.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of a job running on a real device in the data center. You can look up job IDs using the <a href="#get-real-device-jobs">Get Real Device Jobs</a> endpoint.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/293d84fb2f634ff29a750c3f8eaee592' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/48c6d12f9ef944439453b5abc6715b54' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Device info returned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "appium_session_id" : null,
   "application_summary" : {
      "appStorageId" : "861d0f58-ff75-450b-b063-344e7216cc5b",
      "filename" : "my-demo-app-android.apk",
      "groupId" : 944918,
      "minOsVersion" : null,
      "minSdkLevel" : 19,
      "name" : "My Demo App",
      "packageName" : "com.saucelabs.mydemoapp.android",
      "shortVersion" : null,
      "targetOsVersion" : null,
      "targetSdkLevel" : 31,
      "version" : "1.0.12",
      "versionCode" : "14"
   },
   "assigned_tunnel_id" : null,
   "automation_backend" : null,
   "base_config" : {},
   "build" : null,
   "client" : null,
   "collects_automator_log" : true,
   "consolidated_status" : "complete",
   "crash_log_url" : "https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/51873a114a6141239c933042e948aa54/crash.json",
   "creation_time" : 1678124750664,
   "device_descriptor" : {
      "abiType" : "arm64-v8a",
      "apiLevel" : 29,
      "cpuCores" : 8,
      "cpuFrequency" : 1950,
      "cpuType" : "ARM",
      "defaultOrientation" : "PORTRAIT",
      "deviceFamily" : "ANY",
      "dpi" : 550,
      "dpiName" : "xxhdpi",
      "hasOnScreenButtons" : true,
      "id" : "Samsung_Galaxy_S10_ws",
      "internalOrientation" : "PORTRAIT",
      "internalStorageSize" : 131072,
      "isAlternativeIoEnabled" : true,
      "isArm" : true,
      "isKeyGuardDisabled" : false,
      "isPrivate" : true,
      "isRooted" : false,
      "isTablet" : false,
      "manufacturer" : [
         "Samsung"
      ],
      "modelNumber" : "SM-G973F",
      "name" : "Samsung Galaxy S10",
      "os" : "ANDROID",
      "osVersion" : "10",
      "pixelsPerPoint" : 1,
      "ramSize" : 8192,
      "resolutionHeight" : 3040,
      "resolutionWidth" : 1440,
      "screenSize" : 6.1,
      "sdCardSize" : 0,
      "supportsAppiumWebAppTesting" : true,
      "supportsGlobalProxy" : false,
      "supportsManualWebTesting" : true,
      "supportsMinicapSocketConnection" : false,
      "supportsMockLocations" : true,
      "supportsMultiTouch" : true,
      "supportsXcuiTest" : true
   },
   "device_log_url" : "https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/51873a114a6141239c933042e948aa54/deviceLogs",
   "device_name" : "Samsung Galaxy S10",
   "device_session_id" : null,
   "device_type" : "real_device",
   "end_time" : 1678124809717,
   "error" : null,
   "framework_log_url" : null,
   "id" : "51873a114a6141239c933042e948aa54",
   "junit_log_url" : null,
   "manual" : true,
   "modification_time" : 1678124809717,
   "name" : "My Demo App (Version: 1.0.12; Build: 14)",
   "network_log_url" : "https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/51873a114a6141239c933042e948aa54/network.har",
   "os" : "Android",
   "os_version" : "10",
   "owner_sauce" : "wim.selles",
   "passed" : null,
   "proxied" : false,
   "record_screenshots" : true,
   "record_video" : true,
   "remote_app_file_url" : null,
   "requests_url" : null,
   "screenshots" : [],
   "start_time" : 1678124764713,
   "status" : "complete",
   "tags" : [],
   "test_cases_url" : null,
   "test_report_type" : "LIVE",
   "testfairy_log_url" : "https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/51873a114a6141239c933042e948aa54/insights.json",
   "used_cached_device" : null,
   "video_url" : "https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/51873a114a6141239c933042e948aa54/video.mp4"
}
```

</details>

---

### Stop a Job

<details><summary><span className="api put">PUT</span> <code>/v1/rdc/jobs/&#123;job_id&#125;/stop</code></summary>
<p/>

Stops a running job described by the `job_id`.

:::note
Only Appium jobs can be stopped while they are actively running.
:::

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of a job running on a real device in the data center. You can look up job IDs using the <a href="#get-real-device-jobs">Get Real Device Jobs</a> endpoint.</p></td>
    </tr>
  </tbody>
</table>

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/293d84fb2f634ff29a750c3f8eaee592/stop' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/48c6d12f9ef944439453b5abc6715b54/stop'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Job successfully stopped.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Session identified as 'JOB_TYPE' test. It can’t be stopped because it’s not part of the allowed test types: APPIUM</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Cannot stop test in the setup phase. Test needs to be in progress before it can be stopped</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>The test cannot be stopped because the test execution has already finished. Only tests in progress can be stopped</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Session Id is not available yet. Test needs to be in progress before it can be stopped</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Only in progress appium session can be stopped</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>500</code></td>
    <td colSpan='2'>Session could not be closed, try again</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>500</code></td>
    <td colSpan='2'>Failed to stop a session, Please try again</td>
  </tr>
</tbody>
</table>

</details>

---
