---
id: rdc
title: Real Device API Endpoints
sidebar_label: Real Devices
description: Retrieve information related to real device availability, device/platform/browser combinations, and currently running tests.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Real Device Cloud (RDC) API allows you to manage real devices and jobs in your data center. Use the RDC API methods to:
* Look up device types and availability
* View current device activity
* Manage real device jobs by stopping, deleting, or updating job details
* Assign a private device to a team
* Update private device settings

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## Real Devices

### Get Devices

<details>
<summary><span className="api get">GET</span> <code>/v1/rdc/devices</code></summary>
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
        "supportsXcuiTest": false
    },
    {...more devices},
]
```

</details>

---

### Get a Specific Device

<details>
<summary><span className="api get">GET</span> <code>/v1/rdc/devices/&#123;device_id&#125;</code></summary>
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

<details>
<summary><span className="api get">GET</span> <code>/v1/rdc/devices/available</code></summary>
<p/>

Returns a list of Device IDs for all devices in the data center that are currently free for testing.

:::note Deprecated Endpoint
This endpoint is deprecated. Please transition to the status endpoint for continued service.
:::

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

### Get Devices Status

<details>
<summary><span className="api get">GET</span> <code>/v1/rdc/devices/status</code></summary>
<p/>

Returns a list of devices in the data center along with their current states. Each device is represented by a descriptor, 
indicating its model, and includes information on availability, usage status, and whether it is designated as a private device.

:::note
The `inUseBy` field is exposed only for private devices `isPrivateDevice: true`. 
Users can view information about who is currently using the device only if they have the required permissions.
Lack of permissions will result in the inUseBy field being omitted from the response for private devices.
:::

#### List of Available States:

| State           | Description                                                     |
|-----------------|-----------------------------------------------------------------|
| `AVAILABLE`     | Device is available and ready to be allocated                   |
| `IN_USE`        | Device is currently in use                                      |
| `CLEANING`      | Device is being cleaned (only available for private devices)    |
| `MAINTENANCE`   | Device is in maintenance (only available for private devices)   |
| `REBOOTING`     | Device is rebooting (only available for private devices)        |
| `OFFLINE`       | Device is offline (only available for private devices)          |

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
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/devices/status' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/devices/status' | json_pp
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
    "devices": [
        {
            "descriptor": "iPhone_12_mini_16_real_private",
            "state": "IN_USE",
            "inUseBy": [
                {
                    "username": "user-name"
                }
            ],
            "isPrivateDevice": true
        },
        {
            "descriptor": "iPhone_12_16_real",
            "state": "CLEANING",
            "inUseBy": [],
            "isPrivateDevice": true
        },
        {
            "descriptor": "Google_Pixel_7_Pro_14_real",
            "state": "MAINTENANCE",
            "inUseBy": [],
            "isPrivateDevice": true
        },
        {
            "descriptor": "Samsung_Galaxy_S10_real",
            "state": "REBOOTING",
            "inUseBy": [],
            "isPrivateDevice": true
        },
        {
            "descriptor": "iPhone_XS_13_real",
            "state": "OFFLINE",
            "inUseBy": [],
            "isPrivateDevice": true
        },
        {
            "descriptor": "iPhone_8_Plus_13_4_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Google_Pixel_4_10_real",
            "state": "IN_USE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Samsung_Galaxy_S21_5G_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Samsung_Galaxy_A7_2018_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "iPad_Pro_11_2021_17_real",
            "state": "IN_USE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Google_Pixel_5_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Samsung_Galaxy_A9s_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "iPhone_SE_15_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "iPhone_13_mini_17_real_2",
            "state": "IN_USE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Google_Pixel_4_XL_13_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Samsung_Galaxy_S23_14_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Samsung_Galaxy_Tab_S8_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Samsung_Galaxy_A8_2018_real",
            "state": "IN_USE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "iPad_10_2_14_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "iPad_mini_2_12_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "iPad_10_2_2020_16_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Samsung_Galaxy_S21_5G_13_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "Huawei_Mate_30_Pro_real",
            "state": "IN_USE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "iPad_Pro_10_5_2017_15_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        {
            "descriptor": "iPad_Pro_11_2022_16_real",
            "state": "AVAILABLE",
            "inUseBy": [],
            "isPrivateDevice": false
        },
        ...
    ]
}
```

</details>

---

## Jobs

### Get Real Device Jobs

<details>
<summary><span className="api get">GET</span> <code>/v1/rdc/jobs</code></summary>
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

<details>
<summary><span className="api get">GET</span> <code>/v1/rdc/jobs/&#123;job_id&#125;</code></summary>
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
      "supportsXcuiTest" : false
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
   "crash_log_url": "https://api.us-west-1.saucelabs.com/v1/rdc/jobs/c6dd70531df5454290e110514dc7ca8b/crash.json",
   "used_cached_device" : null,
   "video_url" : "https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/51873a114a6141239c933042e948aa54/video.mp4"
}
```

</details>


---

### Download a Specific Real Device Job's Asset

<details>
<summary><span className="api get">GET</span> <code>/v1/rdc/jobs/&#123;job_id&#125;/&#123;asset_type&#125;</code></summary>
<p/>

Download a specific asset for a job after it has completed running on a real device at the data center. The available assets for a specific job depend on the test framework and whether the corresponding feature was enabled during the test.

#### Assets

<table id="table-api">
  <thead>
    <tr>
     <td>Asset Type</td>
     <td>Path</td>
     <td>Test Framework</td>
     <td>Feature</td>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td>Device Logs</td>
     <td>deviceLogs</td>
     <td>Appium, Espresso, XCUITest</td>
     <td>-</td>
    </tr>
    <tr>
     <td>Appium Logs</td>
     <td>appiumLogs</td>
     <td>Appium</td>
     <td>-</td>
    </tr>
    <tr>
     <td>Appium Requests</td>
     <td>appiumRequests</td>
     <td>Appium</td>
     <td>-</td>
    </tr>
    <tr>
     <td>JUnit XML</td>
     <td>junit.xml</td>
     <td>Espresso, XCUITest</td>
     <td>-</td>
    </tr>
    <tr>
     <td>XCUITest Logs</td>
     <td>xcuitestLogs</td>
     <td>XCUITest</td>
     <td>-</td>
    </tr>
    <tr>
     <td>Video</td>
     <td>video.mp4</td>
     <td>Appium, Espresso, XCUITest</td>
     <td>-</td>
    </tr>
    <tr>
     <td>Screenshots</td>
     <td>screenshots.zip</td>
     <td>Appium, Espresso</td>
     <td><a href="/mobile-apps/automated-testing/espresso-xcuitest/espresso-capture/">Espresso Screenshot Capture</a></td>
    </tr>
    <tr>
     <td>App Logs</td>
     <td>deviceLogs</td>
     <td>Appium, Espresso, XCUITest</td>
     <td><a href="/mobile-apps/features/mobile-app-diagnostics/app-logs/">App Logs</a></td>
    </tr>
    <tr>
     <td>Network Logs</td>
     <td>network.har</td>
     <td>Appium, Espresso, XCUITest</td>
     <td><a href="/mobile-apps/features/network-capture/">Network Capture</a></td>
    </tr>
    <tr>
     <td>Device Vitals</td>
     <td>insights.json</td>
     <td>Appium, Espresso, XCUITest</td>
     <td><a href="/mobile-apps/features/mobile-app-diagnostics/device-vitals/">Device Vitals</a></td>
    </tr>
    <tr>
     <td>Crash Logs</td>
     <td>crash.json</td>
     <td>Appium</td>
     <td><a href="/mobile-apps/features/mobile-app-diagnostics/crash-error-reporting/">Crash/Error Reporting</a></td>
    </tr>
  </tbody>
</table>

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of a job running on a real device in the data center. You can look up job IDs using the <a href="#get-real-device-jobs">Get Real Device Jobs</a> endpoint.</p></td>
    </tr>
    <tr>
     <td><code>asset_type</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The specific file path for the asset.</p></td>
    </tr>
    <tr>
     <td><code>download</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Whether to force the download of the compressed version of the file. Defaults to (<code>false</code>).</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/293d84fb2f634ff29a750c3f8eaee592/deviceLogs'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/48c6d12f9ef944439453b5abc6715b54/deviceLogs'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. File is returned and downloaded.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

</details>

---

### Start a XCTest, XCUITest or Espresso Job

<details>
<summary><span className="api post">POST</span> <code>/v1/rdc/native-composer/tests</code></summary>
<p/>

Start a XCTest.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>test_framework</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The type of 'native' test you want to run, either 'XCUITEST', 'XCTEST', or 'ANDROID_INSTRUMENTATION' (Espresso).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>app_id</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The id of the app you want to test. The app must be uploaded to Sauce Labs AppStorage. Format: `storage://filename=AnApp.ipa`, or `storage://{file_id}`, or just `{file_id}`.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>xc_test_run_file</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The id of the `xctestrun` file (the xctest config). The file must be uploaded to Sauce Labs AppStorage. Format: `storage://filename=Runner.xctestrun`, or `storage://{file_id}`, or just `{file_id}`.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_query</code></td>
       <td><p><small>| BODY | REQUIRED | OBJECT |</small></p><p>Defines on which device you want to run you test. The available attributes are:<ul><li><code>type</code> - <small>String of 'DynamicDeviceQuery'</small></li><li><code>device_name</code> - <small>String - regular expression to select a device.</small></li><li><code>os_version</code> - <small>String - regular expression to select a device version.</small></li></ul></p><p>The <code>type</code> parameter is required..</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnel_name</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Assign a sauce connect tunnel to the job.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnel_owner</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Define the name of the tunnel owner of the sauce connect tunnel you want to use.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>settings_overwrite</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Define instrumentations settings you want to apply to your app.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>test_name</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Assign a name to the job, to be displayed in the UI.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Assign the job to a build. You can specify an existing build name or create a new one.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tags</code></td>
       <td><p><small>| BODY | OPTIONAL | ARRAY |</small></p><p>The set of tags to apply to the job.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/v1/rdc/native-composer/tests' \
--header 'Content-Type: application/json'
--data-raw '{
    "test_framework": "XCTEST",
    "test_name": "Your XCTest POC",
    "app_id": "9349d683-5d26-46eb-a943-267cbe8b4deb",
    "xc_test_run_file": "37eef454-a7f8-4a6d-a340-d39865ad6db3",
    "device_query": {
      "type": "DynamicDeviceQuery"
    }
}'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/rdc/native-composer/tests' \
--header 'Content-Type: application/json'
--data-raw '{
    "test_framework": "XCTEST",
    "test_name": "Your XCTest POC",
    "app_id": "9349d683-5d26-46eb-a943-267cbe8b4deb",
    "xc_test_run_file": "37eef454-a7f8-4a6d-a340-d39865ad6db3",
    "device_query": {
      "type": "DynamicDeviceQuery"
    }
}'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad Request.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "test_report": {
    "id": "ef6058735d8d4dfa9e0077d250757aac",
    "url": "https://api.eu-central-1.saucelabs.com/tests/ef6058735d8d4dfa9e0077d250757aac"
  }
}
```

</details>

---

### Stop a Job

<details>
<summary><span className="api put">PUT</span> <code>/v1/rdc/jobs/&#123;job_id&#125;/stop</code></summary>
<p/>

Stops a running job described by the `job_id`.

:::note
This API can be used to stop actively running Appium, Espresso and XCUITest jobs.
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

### Update a Job

<details>
<summary><span className="api put">PUT</span> <code>/v1/rdc/jobs/&#123;job_id&#125;</code></summary>
<p/>

Edit job attributes based on parameters passed in the request, including setting the status and name of the job. Any parameter for which a new value is provided in the request will replace the existing value. For example, if you provide a set of tags, they will not be added to the current tags; they will replace them, so make sure you pass the entire set you wish to assign.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the job to be updated. You can look up job IDs using the <a href="#get-jobs">Get Jobs</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>A new name for the job.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Assign the job to a build. You can specify an existing build name or create a new one.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>passed</code></td>
       <td><p><small>| BODY | OPTIONAL | BOOLEAN |</small></p><p>Asserts whether the job passed (<code>true</code>) or not (<code>false</code>).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tags</code></td>
       <td><p><small>| BODY | OPTIONAL | ARRAY |</small></p><p>The set of distinguishing tags to apply to the job.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/a2f60bf3ea5f43fa90126f82c0ba2cf6' \
--header 'Content-Type: application/json'
--data-raw '{
    "name": "New Test Name",
    "tags": [
        "e2e",
        "release_team",
        "other_tag"
    ],
    "build": "build-2023-02-15T10:44:10Z"
}'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/a2f60bf3ea5f43fa90126f82c0ba2cf6' \
--header 'Content-Type: application/json'
--data-raw '{
    "name": "New Test Name",
    "tags": [
        "e2e",
        "release_team",
        "other_tag",
    ],
    "build": "build-2023-02-15T10:44:10Z"
}'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad Request.</td>
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
    "application_summary": {
        "appStorageId": "b5e4fde9-a45b-485d-9bc6-92204f97adf3",
        "groupId": 827303,
        "filename": "iosHttpRequest.ipa",
        "name": "httpRequest",
        "packageName": "com.saucelabs.httpRequest",
        "version": "1",
        "versionCode": null,
        "shortVersion": "1.0",
        "minSdkLevel": null,
        "targetSdkLevel": null,
        "minOsVersion": "11.4",
        "targetOsVersion": "15.5"
    },
    "assigned_tunnel_id": null,
    "device_type": "real_device",
    "owner_sauce": "sauce-rdc-us-staging-tests",
    "automation_backend": "xcuitest",
    "base_config": {},
    "build": "a5daf4aff92a43ed9b8b1ff9ba7afa4e",
    "collects_automator_log": true,
    "consolidated_status": "passed",
    "creation_time": 1676034279072,
    "device_descriptor": {
        "abiType": "arm64",
        "apiLevel": 0,
        "cpuCores": 2,
        "cpuFrequency": 3200,
        "defaultOrientation": "PORTRAIT",
        "dpi": 460,
        "hasOnScreenButtons": true,
        "id": "iPhone_13_real_us",
        "internalOrientation": "PORTRAIT",
        "internalStorageSize": 13312,
        "isArm": true,
        "isKeyGuardDisabled": false,
        "isPrivate": false,
        "isRooted": false,
        "isTablet": false,
        "manufacturer": [
            "Apple"
        ],
        "modelNumber": "iPhone14,5",
        "name": "iPhone 13",
        "os": "IOS",
        "osVersion": "15.4",
        "pixelsPerPoint": 3,
        "ramSize": 4096,
        "resolutionHeight": 2532,
        "resolutionWidth": 1170,
        "screenSize": 6.1,
        "sdCardSize": 0,
        "supportsAppiumWebAppTesting": true,
        "supportsGlobalProxy": false,
        "supportsMinicapSocketConnection": true,
        "supportsMockLocations": true,
        "cpuType": "ARM",
        "deviceFamily": "IPHONE",
        "dpiName": "xxhdpi",
        "isAlternativeIoEnabled": true,
        "supportsManualWebTesting": true,
        "supportsMultiTouch": true,
        "supportsXcuiTest": true
    },
    "end_time": 1676034310292,
    "error": null,
    "id": "a5daf4aff92a43ed9b8b1ff9ba7afa4e",
    "framework_log_url": "https://api.staging.saucelabs.net/v1/rdc/jobs/a5daf4aff92a43ed9b8b1ff9ba7afa4e/xcuitestLogs",
    "device_log_url": "https://api.staging.saucelabs.net/v1/rdc/jobs/a5daf4aff92a43ed9b8b1ff9ba7afa4e/deviceLogs",
    "requests_url": null,
    "test_cases_url": "https://api.staging.saucelabs.net/v1/rdc/jobs/a5daf4aff92a43ed9b8b1ff9ba7afa4e/testCases",
    "junit_log_url": "https://api.staging.saucelabs.net/v1/rdc/jobs/a5daf4aff92a43ed9b8b1ff9ba7afa4e/junit.xml",
    "manual": false,
    "modification_time": 1676034310292,
    "name": "New Test Name",
    "os": "iOS",
    "os_version": "15.4",
    "device_name": "iPhone 13",
    "passed": true,
    "proxied": false,
    "record_screenshots": true,
    "screenshots": [],
    "record_video": true,
    "start_time": 1676034300063,
    "status": "passed",
    "tags": [
        "e2e",
        "xcuitest",
        "team"
    ],
    "video_url": "https://api.staging.saucelabs.net/v1/rdc/jobs/a5daf4aff92a43ed9b8b1ff9ba7afa4e/video.mp4",
    "remote_app_file_url": null,
    "appium_session_id": null,
    "device_session_id": null,
    "client": "saucectl/0.117.1",
    "network_log_url": null,
    "testfairy_log_url": null,
    "crash_log_url": null,
    "test_report_type": "XCUITEST"
}
```

</details>

---

### Delete a Job

<details>
<summary><span className="api delete">DELETE</span> <code>/v1/rdc/jobs/&#123;job_id&#125;</code></summary>
<p/>

Delete a job and all of its assets from the Sauce Labs test history.

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
--request DELETE 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/a2f60bf3ea5f43fa90126f82c0ba2cf6' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/a2f60bf3ea5f43fa90126f82c0ba2cf6' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Job successfully deleted.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

No payload is returned with the successful deletion.

</details>

---

## Private Real Device Management

Learn more about how to [manage your private devices](/basics/acct-team-mgmt/private-device-mgmt).

### Get Private Devices
<details>
<summary><span className="api get">GET</span> <code>/v1/rdc/device-management/devices</code></summary>
<p/>

Get a list of private devices with their device information and settings.

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
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/device-management/devices' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/device-management/devices' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. List of private devices is returned.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[
    {
        "id": "iPhone_12_17_sl",
        "name": "iPhone 12",
        "os": {
            "name": "iOS",
            "version": "17.6"
        },
        "screenSize": 6.1,
        "resolutionWidth": 1170,
        "resolutionHeight": 2532,
        "state": "AVAILABLE",
        "team": null,
        "appWhitelist": [
            "com.google.chrome.ios"
        ],
        "accountWhitelist": [],
        "systemAppAllowlist": [],
        "applePaySupportEnabled": false,
        "skipCleaningFolders": []
    },
    {...more devices},
]
```

</details>

---

### Manage Device Assignment to Teams
<details>
<summary><span className="api put">PUT</span> <code>/v1/rdc/device-management/devices/&#123;device_id&#125;/teams</code></summary>
<p/>

Assign a private device to specified teams, or remove its assignment by providing an empty list or a new set of teams.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>device_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of a device in the Sauce Labs data center. You can look up device IDs using the <a href="#get-devices">Get Devices</a> endpoint. (Example: <code>iPhone_12_17_sl</code>)</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>ids</code></td>
     <td><p><small>| BODY | REQUIRED | ARRAY |</small></p><p>List of unique identifiers of teams in the Sauce Labs organization. New team assignments will replace the existing ones.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/v1/rdc/device-management/devices/iPad_Pro_11_14_2018_real/teams' \
--header 'Content-Type: application/json' \
--data-raw '{
"ids": ["8f0444d7762548bd81ae46722a14e1c6, 1ae46722a14e1c68f0444d7762548bd8"]
}'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/v1/rdc/device-management/devices/iPad_Pro_11_14_2018_real/teams' \
--header 'Content-Type: application/json' \
--data-raw '{
"ids": ["8f0444d7762548bd81ae46722a14e1c6, 1ae46722a14e1c68f0444d7762548bd8"]
}'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Device successfully assigned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Device not found.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>422</code></td>
    <td colSpan='2'>Team not found.</td>
  </tr>
</tbody>
</table>

No payload is returned with the successful assignment.

</details>

---

### Update Device Settings
<details>
<summary><span className="api put">PUT</span> <code>/v1/rdc/device-management/devices/&#123;device_id&#125;/settings</code></summary>
<p/>

Update device settings to allow apps, system apps, and accounts to persist between sessions. Check out the 
[available device settings](/basics/acct-team-mgmt/private-device-mgmt/#app-allow-list) for more information on each setting. The old values will be replaced with the new ones.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>device_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of a device in the Sauce Labs data center. You can look up device IDs using the <a href="#get-devices">Get Devices</a> endpoint.  (Example: <code>iPhone_12_17_sl</code>)</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>appWhitelist</code></td>
       <td><p><small>| BODY | REQUIRED | ARRAY |</small></p><p><a href="/basics/acct-team-mgmt/private-device-mgmt/#app-allow-list">Persist installed apps</a> and app data between sessions.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>accountWhitelist</code></td>
       <td><p><small>| BODY | REQUIRED | ARRAY |</small></p><p>Preserve <a href="/basics/acct-team-mgmt/private-device-mgmt/#account-allow-list">store and payment account sign-ins</a> for Google accounts and Apple IDs between sessions for each account email.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>systemAppAllowlist</code></td>
       <td><p><small>| BODY | REQUIRED | ARRAY |</small></p><p>Access <a href="/basics/acct-team-mgmt/private-device-mgmt/#system-app-allow-list-ios">iOS preinstalled applications</a>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>applePaySupportEnabled</code></td>
       <td><p><small>| BODY | REQUIRED | BOOLEAN |</small></p><p>Enable to test Apple Pay. Please contact your CSM/SE or Sauce Labs Support for <a href="/basics/acct-team-mgmt/private-device-mgmt/#enable-apple-pay">additional configuration</a>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>skipCleaningFolders</code></td>
       <td><p><small>| BODY | REQUIRED | ARRAY |</small></p><p><a href="/basics/acct-team-mgmt/private-device-mgmt/#retain-foldersfilepath-android">Retain specific file paths or folders</a> on your private Android devices between sessions. </p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/v1/rdc/device-management/devices/iPhone_12_17_sl/settings' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "iPhone_12_17_sl",
    "appWhitelist": ["com.google.chrome.ios"],
    "accountWhitelist": ["qa-tester@saucelabs.com"],
    "systemAppAllowlist": ["com.apple.calculator"],
    "applePaySupportEnabled": false,
    "skipCleaningFolders": []
}'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/v1/rdc/device-management/devices/iPhone_12_17_sl/settings' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "iPhone_12_17_sl",
    "appWhitelist": ["com.google.chrome.ios"],
    "accountWhitelist": ["qa-tester@saucelabs.com"],
    "systemAppAllowlist": ["com.apple.calculator"],
    "applePaySupportEnabled": false,
    "skipCleaningFolders": []
}'
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Device settings successfully updated.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Device not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[
    {
        "id": "iPhone_12_17_sl",
        "name": "iPhone 12",
        "os": {
            "name": "iOS",
            "version": "17.6"
        },
        "screenSize": 6.1,
        "resolutionWidth": 1170,
        "resolutionHeight": 2532,
        "state": "AVAILABLE",
        "team": null,
        "appWhitelist": [
            "com.google.chrome.ios"
        ],
        "accountWhitelist": [
            "qa-tester@saucelabs.com"
        ],
        "systemAppAllowlist": [
            "com.apple.calculator"
        ],
        "applePaySupportEnabled": false,
        "skipCleaningFolders": []
    },
    {...more devices},
]
```

</details>

---
