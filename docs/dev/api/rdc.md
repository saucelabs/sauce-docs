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
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/devices' | jq
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/devices' | jq
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
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/devices/iPad_Pro_11_14_2018_real' | jq
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/devices/iPad_Pro_11_14_2018_real' | jq
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
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/devices/available' | jq
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/devicesavailable' | jq
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
     <td><code>device_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The maximum number of jobs to return.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Limit results to those following this index number. Defaults to <code>1</code>.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs?limit=5' | jq
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs?limit=5' | jq
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
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/293d84fb2f634ff29a750c3f8eaee592' | jq
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/48c6d12f9ef944439453b5abc6715b54' | jq
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
    "application_summary": null,
    "assigned_tunnel_id": null,
    "device_type": "real_device",
    "owner_sauce": "walkerlj",
    "automation_backend": "appium",
    "base_config": {},
    "build": null,
    "collects_automator_log": true,
    "consolidated_status": "passed",
    "creation_time": 1618283145280,
    "device_descriptor": {
        "abiType": "arm64-v8a",
        "apiLevel": 23,
        "cpuCores": 4,
        "cpuFrequency": 2100,
        "defaultOrientation": "PORTRAIT",
        "dpi": 577,
        "hasOnScreenButtons": false,
        "id": "Samsung_Galaxy_S6_Edge_Plus_real",
        "internalOrientation": "PORTRAIT",
        "internalStorageSize": 32768,
        "isArm": true,
        "isKeyGuardDisabled": false,
        "isPrivate": false,
        "isRooted": false,
        "isTablet": false,
        "manufacturer": [
            "Samsung"
        ],
        "modelNumber": "G928F",
        "name": "Samsung Galaxy S6 Edge+",
        "os": "ANDROID",
        "osVersion": "6.0.1",
        "pixelsPerPoint": 1,
        "ramSize": 3072,
        "resolutionHeight": 2560,
        "resolutionWidth": 1440,
        "screenSize": 5.1,
        "sdCardSize": 0,
        "supportsAppiumWebAppTesting": true,
        "supportsGlobalProxy": false,
        "supportsMinicapSocketConnection": false,
        "supportsMockLocations": true,
        "cpuType": "ARM",
        "deviceFamily": "ANY",
        "dpiName": "xxxhdpi",
        "isAlternativeIoEnabled": true,
        "supportsManualWebTesting": true,
        "supportsMultiTouch": true,
        "supportsXcuiTest": true
    },
    "end_time": 1618283183147,
    "error": null,
    "id": "293d84fb2f634ff29a750c3f8eaee592",
    "framework_log_url": "https://api.us-west-1.saucelabs.com/v1/rdc/jobs/293d84fb2f634ff29a750c3f8eaee592/appiumLogs",
    "device_log_url": "https://api.us-west-1.saucelabs.com/v1/rdc/jobs/293d84fb2f634ff29a750c3f8eaee592/deviceLogs",
    "requests_url": "https://api.us-west-1.saucelabs.com/v1/rdc/jobs/293d84fb2f634ff29a750c3f8eaee592/appiumRequests",
    "test_cases_url": null,
    "manual": false,
    "modification_time": 1618283183147,
    "name": "validLoginFlow",
    "os": "Android",
    "os_version": "6.0.1",
    "device_name": "Samsung Galaxy S6 Edge+",
    "passed": true,
    "proxied": false,
    "record_screenshots": true,
    "screenshots": [],
    "record_video": true,
    "start_time": 1618283145280,
    "status": "passed",
    "tags": [],
    "video_url": "https://api.us-west-1.saucelabs.com/v1/rdc/jobs/293d84fb2f634ff29a750c3f8eaee592/video.mp4",
    "remote_app_file_url": null,
    "appium_session_id": "c05aa6ff-c0a5-4a99-ba5a-1ced73078a85",
    "device_session_id": null,
    "automated": true
}
```
</details>

---
