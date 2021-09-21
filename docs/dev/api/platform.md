---
id: platform
title: Sauce Platform API Methods
sidebar_label: Platform
description: Retrieve information about the Sauce Labs supported automation environments and platform status.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Platform APIs provide insight into the current state of the Sauce Labs platform in order to either validate your calls in advance or troubleshoot unexpected results.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

### Get Sauce Labs TestStatus

<details><summary><span className="api get">GET</span> <code>/rest/v1/info/status</code></summary>
<p/>

Returns the current (30 second cache) availability of the Sauce Labs platform.

#### Parameters

This method takes no parameters


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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/info/status' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/info/status' \
--header 'Content-Type: application/json' | json_pp
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
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "wait_time": 0.5714026162790697,
    "service_operational": true,
    "status_message": "Basic service status checks passed."
}
```
</details>

---

### Get Supported Platforms

<details><summary><span className="api get">GET</span> <code>rest/v1/info/platforms/&#123;automation_api&#125;/</code></summary>
<p/>

Returns the set of supported operating system and browser combinations for the specified automation framework.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>automation_api</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The framework for which you are requesting supported platforms. Valid values are:</p><p>
     <ul>
      <li><code>all</code></li>
      <li><code>appium</code></li>
      <li><code>webdriver</code></li>
     </ul></p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/info/platforms/all' \
--header 'Content-Type: application/json' | json_pp
--data-raw ''
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/info/platforms/all' \
--header 'Content-Type: application/json' | json_pp
--data-raw ''
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
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[
    {
        "short_version": "11.3",
        "long_name": "iPad Simulator",
        "api_name": "ipad",
        "long_version": "11.3.",
        "device": "iPad Simulator",
        "latest_stable_version": "",
        "automation_backend": "webdriver",
        "os": "Mac 10.13"
    },
    {
        "deprecated_backend_versions": [],
        "short_version": "11.3",
        "long_name": "iPad Simulator",
        "recommended_backend_version": "1.9.1",
        "long_version": "11.3.",
        "api_name": "ipad",
        "supported_backend_versions": [
            "1.8.1",
            "1.9.1"
        ],
        "device": "iPad Simulator",
        "latest_stable_version": "",
        "automation_backend": "appium",
        "os": "Mac 10.13"
    },
    {
        "short_version": "12.0",
        "long_name": "iPad Simulator",
        "api_name": "ipad",
        "long_version": "12.0.",
        "device": "iPad Simulator",
        "latest_stable_version": "",
        "automation_backend": "webdriver",
        "os": "Mac 10.13"
    },
    {
        "deprecated_backend_versions": [],
        "short_version": "12.0",
        "long_name": "iPad Simulator",
        "recommended_backend_version": "1.9.1",
        "long_version": "12.0.",
        "api_name": "ipad",
        "supported_backend_versions": [
            "1.9.1"
        ],
        "device": "iPad Simulator",
        "latest_stable_version": "",
        "automation_backend": "appium",
        "os": "Mac 10.13"
    },
    //{...more results}
]
```
</details>

---

### Get End of Life Dates for Appium Versions

<details><summary><span className="api get">GET</span> <code>/rest/v1/info/platforms/appium/eol</code></summary>
<p/>

Returns the expected date (in Unix time) on which Sauce Labs support for each Appium version is to be discontinued.

#### Parameters

This method takes no parameters


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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/info/platforms/appium/eol' \
--header 'Content-Type: application/json' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/info/platforms/appium/eol' \
--header 'Content-Type: application/json' | json_pp
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
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "1.20.2": null,
    "1.15.0": null,
    "1.4.7": 1463270400,
    "1.6.2": 1481328000,
    "1.6.3": 1554336000,
    "1.6.0": 1494288000,
    "1.6.1": 1480550400,
    "1.6.4": 1554336000,
    "1.6.5": 1554336000,
    "1.9.1": null,
    "1.19.2": null,
    "1.19.1": null,
    "1.8.0": null,
    "1.7.2": 1554336000,
    "1.7.1": 1554336000,
    "1.4.0": 1460160000,
    "1.4.3": 1460160000,
    "1.18.3": null,
    "1.18.1": null,
    "1.5.1": 1468972800,
    "1.5.0": 1465776000,
    "1.20.1": null,
    "1.5.2": 1543622400,
    "1.13.0": null,
    "1.3.7": 1460160000,
    "1.5.3": 1543622400,
    "1.20.0": null,
    "1.12.1": null,
    "1.11.1": null,
    "1.8.1": null,
    "1.16.0": null,
    "1.17.1": null,
    "1.3.6": 1460160000,
    "1.4.13": 1468972800,
    "1.4.10": 1460160000,
    "1.4.11": 1463270400,
    "1.4.16": 1543622400,
    "1.4.14": 1460160000,
    "1.4.15": 1460160000
}
```
</details>

---
