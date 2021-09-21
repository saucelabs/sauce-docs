---
id: jobs
title: Jobs API Methods
sidebar_label: Jobs
description: View and manage jobs and builds running on Sauce Labs.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Jobs API methods allow you to review and edit the metadata associated with the tests you are running on Sauce Labs. You can also stop tests, delete jobs, and filter lists of jobs by a variety of attributes, such as owner, time period, build, or environment.

:::note
These calls are specific to jobs running in simulation. For methods related to Real Device testing, see [Real Device API Methods](/dev/api/rdc).
:::

Refer to [Getting Started](/dev/api) for Authentication and Server information.


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)


## Jobs Methods

The set of methods defined in this section are applicable to tests that are not associated with builds.

### Get Jobs

<details><summary><span className="api get">GET</span> <code>/rest/v1/&#123;username&#125;/jobs</code></summary>
<p/>

Get a list of recent jobs run by the specified user.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs user whose jobs you are looking up. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The maximum number of jobs to return.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>skip</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Returns only the jobs beginning after this index number.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>from</code></td>
     <td><p><small>| QUERY | OPTIONAL | DATE-TIME |</small></p><p>Return only jobs that ran on or after this Unix timestamp.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>to</code></td>
     <td><p><small>| QUERY | OPTIONAL | DATE-TIME |</small></p><p>Return only jobs that ran on or before this Unix timestamp.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>format</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The format in which you want the results. Valid values are <code>json</code> or <code>csv</code>.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jsmith/jobs?from=1616262316&to=1618940716' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jsmith/jobs?from=1616262316&to=1618940716' | json_pp
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
        "status": "complete",
        "base_config": {
            "username": "jsmith",
            "name": "demoPageTitle",
            "accesskey": "******",
            "platform": "macOS 10.12",
            "browserName": "safari",
            "version": "11.0",
            "extendedDebugging": true,
            "capturePerformance": true
        },
        "command_counts": {
            "All": 4,
            "Error": 2
        },
        "deletion_time": null,
        "url": null,
        "org_id": "******",
        "creation_time": 1618283133,
        "id": "3bad2bfb82404fb184c74716b668d65f",
        "team_id": "******",
        "performance_enabled": true,
        "assigned_tunnel_id": null,
        "container": false,
        "group_id": "******",
        "public": "team",
        "breakpointed": null
    },
    {...},
```
</details>

---

### Get Job Details

<details><summary><span className="api get">GET</span> <code>/rest/v1/&#123;username&#125;/jobs/&#123;job_id&#125;</code></summary>
<p/>

Get detailed information about a specific job.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs user whose jobs you are looking up. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the job you are looking up. You can look up job IDs using the <a href="#get-jobs">Get Jobs</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jsmith/jobs/eed5eb4999d840f89f67f8b6d60a2da3' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jsmith/jobs/eed5eb4999d840f89f67f8b6d60a2da3' | json_pp
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
    "browser_short_version": "89",
    "video_url": "https://assets.saucelabs.com/jobs/eed5eb4999d840f89f67f8b6d60a2da3/video.mp4",
    "creation_time": 1618860861,
    "custom-data": null,
    "browser_version": "89.0.4389.72",
    "owner": "jsmith",
    "automation_backend": "cypress",
    "id": "eed5eb4999d840f89f67f8b6d60a2da3",
    "collects_automator_log": false,
    "record_screenshots": true,
    "record_video": true,
    "build": "Release",
    "passed": true,
    "public": "team",
    "assigned_tunnel_id": "***",
    "status": "complete",
    "log_url": "https://assets.saucelabs.com/jobs/eed5eb4999d840f89f67f8b6d60a2da3/selenium-server.log",
    "start_time": 1618860862,
    "proxied": true,
    "modification_time": 1618860985,
    "tags": [
        "e2e",
        "release team",
        "other tag"
    ],
    "name": "Testing Cypress Support - login test",
    "commands_not_successful": 0,
    "consolidated_status": "passed",
    "selenium_version": null,
    "manual": false,
    "end_time": 1618860985,
    "error": null,
    "os": "Windows 10",
    "breakpointed": null,
    "browser": "googlechrome"
}
```
</details>

---

### Update a Job

<details><summary><span className="api put">PUT</span> <code>/rest/v1/&#123;username&#125;/jobs/&#123;job_id&#125;</code></summary>
<p/>

Edit job attributes based on parameters passed in the request, including setting the status of the job. Any parameter for which a new value is provided in the request will replace the existing value. For example, if you provide a set of tags, they will not be added to the current tags; they will replace them, so make sure you pass the entire set you wish to assign.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the owner of the job you are updating. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-usersaccounts/">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
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
     <td><code>tags</code></td>
       <td><p><small>| BODY | OPTIONAL | ARRAY |</small></p><p>The set of distinguishing tags to apply to the job.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>public</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Specifies the level of visibility permitted for the job. Valid values are:
         <ul>
           <li><code>public</code> - Visibility is unrestricted and available to anyone on the internet.</li>
           <li><code>public restricted</code> - Visibility is limited to the results page and video/screenshot assets. Logs and other metadata is hidden from unauthorized viewers.</li>
           <li><code>share</code> - You can share your test using a dedicated link, but it is not listed publicly or indexed by search engines.</li>
           <li><code>team</code> - Only members of the same team as the job owner can view the job.</li>
           <li><code>private</code> - The owner of the job is the only person who is allowed to view it.</li>
         </ul></p><p>Specify multiple roles as comma-separated values.</p></td>
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
     <td><code>build</code></td>
       <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Assign the job to a build. You can specify an existing build name or create a new one.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>custom-data</code></td>
       <td><p><small>| BODY | OPTIONAL | ARRAY of KEY:VALUE Pairs |</small></p><p>Any relevant attributes you wish to add to the job details.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/rest/v1/walkerlj0/jobs/a2f60bf3ea5f43fa90126f82c0ba2cf6' \
--header 'Content-Type: application/json'
--data-raw '{
    "name": "Cypress Training Test",
    "tags": [
        "e2e",
        "release team",
        "other tag",
        "training",
        "sauce-school"
    ],
    "custom-data": {
        "tcd": "true",
        "editor": "nsweeney"
    }
}'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/rest/v1/walkerlj0/jobs/a2f60bf3ea5f43fa90126f82c0ba2cf6' \
--header 'Content-Type: application/json'
--data-raw '{
    "name": "Cypress Training Test",
    "tags": [
        "e2e",
        "release team",
        "other tag",
        "training",
        "sauce-school"
    ],
    "custom-data": {
        "tcd": "true",
        "editor": "nsweeney"
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
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "browser_short_version": "81.0",
    "video_url": "https://assets.saucelabs.com/jobs/a2f60bf3ea5f43fa90126f82c0ba2cf6/video.flv",
    "creation_time": 1618355254,
    "custom-data": {
        "tcd": "true",
        "editor": "nsweeney"
    },
    "browser_version": "81.0.4044.138",
    "owner": "walkerlj0",
    "id": "a2f60bf3ea5f43fa90126f82c0ba2cf6",
    "record_screenshots": true,
    "record_video": true,
    "build": "Release ",
    "passed": false,
    "public": "team",
    "assigned_tunnel_id": null,
    "status": "complete",
    "log_url": "https://assets.saucelabs.com/jobs/a2f60bf3ea5f43fa90126f82c0ba2cf6/selenium-server.log",
    "start_time": 1618355254,
    "proxied": false,
    "modification_time": 1618867580,
    "tags": [
        "e2e",
        "release team",
        "other tag",
        "training",
        "sauce-school"
    ],
    "name": "Cypress Training Test",
    "commands_not_successful": 0,
    "consolidated_status": "failed",
    "end_time": 1618355281,
    "error": "",
    "os": "saucelabs/stt-cypress-mocha-node:v6.0.2",
    "breakpointed": null,
    "browser": "chrome"
}
```
</details>

---

### Stop a Job

<details><summary><span className="api put">PUT</span> <code>/rest/v1/&#123;username&#125;/jobs/&#123;job_id&#125;/stop</code></summary>
<p/>

Get detailed information about a specific job.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the owner of the job to stop. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the job to stop. You can look up job IDs using the <a href="#get-jobs">Get Jobs</a> endpoint.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/rest/v1/nancy.sweeney/jobs/ec92ec2e200d40b8a75a4f6c06e2226f/stop' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.us-west-1.saucelabs.com/rest/v1/nancy.sweeney/jobs/ec92ec2e200d40b8a75a4f6c06e2226f/stop' | json_pp
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
    "browser_short_version": "89",
    "video_url": "https://assets.saucelabs.com/jobs/ec92ec2e200d40b8a75a4f6c06e2226f/video.mp4",
    "creation_time": 1618870023,
    "custom-data": null,
    "browser_version": "89.0.4389.72",
    "owner": "nancy.sweeney",
    "id": "ec92ec2e200d40b8a75a4f6c06e2226f",
    "record_screenshots": true,
    "record_video": true,
    "build": null,
    "passed": null,
    "public": "team",
    "assigned_tunnel_id": null,
    "status": "complete",
    "log_url": "https://assets.saucelabs.com/jobs/ec92ec2e200d40b8a75a4f6c06e2226f/selenium-server.log",
    "start_time": 1618870025,
    "proxied": false,
    "modification_time": 1618870063,
    "tags": [],
    "name": "Performance test for https://paypal.com (on \"Good 3G\" and 4x CPU throttling)",
    "commands_not_successful": 2,
    "consolidated_status": "complete",
    "end_time": 1618870063,
    "error": null,
    "os": "Windows 10",
    "breakpointed": null,
    "browser": "googlechrome"
}
```
</details>

---

### Delete a Job

<details><summary><span className="api delete">DELETE</span> <code>/rest/v1.1/jobs/&#123;job_id&#125;</code></summary>
<p/>

Delete a job and all of its assets from the Sauce Labs test history.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the job to delete. You can look up job IDs using the <a href="#get-jobs">Get Jobs</a> endpoint.</p></td>
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
--request DELETE 'https://api.us-west-1.saucelabs.com/rest/v1.1/jobs/a521fd8a78c4426fb10ab765ab1f6831' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.eu-central-1.saucelabs.com/rest/v1.1/jobs/a521fd8a78c4426fb10ab765ab1f6831' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>204</code></td>
    <td colSpan='2'>No Content.</td>
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

### Delete All of a User's Jobs

<details><summary><span className="api delete">DELETE</span> <code>/rest/v1.1/&#123;username&#125;/jobs</code></summary>
<p/>

Delete the entire test history and all assets for the specified user.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs user whose jobs you are deleting. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request DELETE 'https://api.us-west-1.saucelabs.com/rest/v1.1/nancy.sweeney/jobs' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.us-west-1.saucelabs.com/rest/v1.1/nancy.sweeney/jobs' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>204</code></td>
    <td colSpan='2'>No Content.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Not found.</td>
  </tr>
</tbody>
</table>

A successful call returns no payload.

</details>

---

### List Job Assets

<details><summary><span className="api get">GET</span> <code>/rest/v1/&#123;username&#125;/jobs/&#123;job_id&#125;/assets</code></summary>
<p/>

Get a list of files associated with a specific test, such as the logs, video, and screenshots.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the owner of the job. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the job for which you are retrieving the asset list. You can look up job IDs using the <a href="#get-jobs">Get Jobs</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/nancy.sweeney/jobs/bc3d1dbd96fd4479925f2afa8efbc090/assets' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/nancy.sweeney/jobs/bc3d1dbd96fd4479925f2afa8efbc090/assets' | json_pp
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
    "automator.log": "automator.log",
    "network.har": "network.har",
    "video.mp4": "video.mp4",
    "selenium-log": "selenium-server.log",
    "performance.json": "performance.json",
    "sauce-log": "log.json",
    "video": "video.mp4",
    "screenshots": [
        "0000screenshot.png",
        "0001screenshot.png",
        "0002screenshot.png"
    ]
}
```
</details>

---

### Get a Job Asset File

<details><summary><span className="api get">GET</span> <code>/rest/v1/&#123;username&#125;/jobs/&#123;job_id&#125;/assets/&#123;file_name&#125;</code></summary>
<p/>

Retrieve one of the asset files associated with a job, such as a log file, video, or screenshot. The response contains the output of the requested file.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the owner of the job. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the job for which you are retrieving the asset list. You can look up job IDs using the <a href="#get-jobs">Get Jobs</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>file_name</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The name of the asset file you wish to download. You can look up file names using the <a href="#list-job-assets">List Job Assets</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/nancy.sweeney/jobs/bc3d1dbd96fd4479925f2afa8efbc090/assets/performance.json' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/nancy.sweeney/jobs/bc3d1dbd96fd4479925f2afa8efbc090/assets/performance.json' | json_pp
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
        "lighthouseVersion": "6.3.0",
        "timestamp": 1618922245243,
        "loaderId": "806270ED1EF8FA367C4CDC4083079F32",
        "score": 0.61,
        "url": "https://www.paypal.com/",
        "value": {
            "mainThreadWorkBreakdown": [
                {
                    "group": "scriptEvaluation",
                    "duration": 498
                },
                {
                    "group": "other",
                    "duration": 304
                },
                {
                    "group": "styleLayout",
                    "duration": 236
                },
                {
                    "group": "paintCompositeRender",
                    "duration": 102
                },
                {
                    "group": "parseHTML",
                    "duration": 24
                },
                {
                    "group": "garbageCollection",
                    "duration": 22
                },
                {
                    "group": "scriptParseCompile",
                    "duration": 18
                }
            ],
            "diagnostics": {
                "numRequests": 33,
                "numScripts": 12,
                "numStylesheets": 1,
                "numFonts": 4,
                "numTasks": 266,
                "numTasksOver10ms": 16,
                "numTasksOver25ms": 7,
                "numTasksOver50ms": 5,
                "numTasksOver100ms": 2,
                "numTasksOver500ms": 0,
                "rtt": 8,
                "throughput": 1446875.3581661892,
                "maxRtt": 26,
                "maxServerLatency": 581,
                "totalByteWeight": 3646672,
                "totalTaskTime": 1204,
                "mainDocumentTransferSize": 37202
            },
            "metrics": {
                "estimatedInputLatency": 19,
                "timeToFirstByte": 572,
                "serverResponseTime": 572,
                "domContentLoaded": 4057,
                "firstVisualChange": 4111,
                "firstPaint": 4115,
                "firstContentfulPaint": 4115,
                "firstMeaningfulPaint": 4115,
                "lastVisualChange": 17642,
                "firstCPUIdle": 7608,
                "firstInteractive": 7608,
                "load": 5043,
                "speedIndex": 6431,
                "totalBlockingTime": 200,
                "largestContentfulPaint": 4115,
                "cumulativeLayoutShift": 0
            },
            "scoreOverview": {
                "firstContentfulPaint": {
                    "score": 0.47,
                    "value": 4114.5,
                    "weight": 15
                },
                "speedIndex": {
                    "score": 0.4,
                    "value": 6431,
                    "weight": 15
                },
                "largestContentfulPaint": {
                    "score": 0.47,
                    "value": 4114.5,
                    "weight": 25
                },
                "firstInteractive": {
                    "score": 0.47,
                    "value": 7607.5,
                    "weight": 15
                },
                "totalBlockingTime": {
                    "score": 0.97,
                    "value": 200,
                    "weight": 25
                },
                "cumulativeLayoutShift": {
                    "score": 1,
                    "value": 0,
                    "weight": 5
                }
            },
            "requestTypes": {
                "Document": {
                    "size": 106595,
                    "encoded": 0,
                    "count": 1
                },
                "Font": {
                    "size": 73360,
                    "encoded": 0,
                    "count": 4
                },
                "Stylesheet": {
                    "size": 316022,
                    "encoded": 0,
                    "count": 1
                },
                "Image": {
                    "size": 191384,
                    "encoded": 0,
                    "count": 7
                },
                "Script": {
                    "size": 1587992,
                    "encoded": 0,
                    "count": 12
                },
                "XHR": {
                    "size": 39994,
                    "encoded": 0,
                    "count": 2
                },
                "Other": {
                    "size": 6876,
                    "encoded": 0,
                    "count": 2
                },
                "Media": {
                    "size": 1360299,
                    "encoded": 0,
                    "count": 2
                }
            },
            "warnings": {}
        },
        "type": "hard"
    }
]
```
</details>

---

### Delete Job Assets

<details><summary><span className="api delete">DELETE</span> <code>/rest/v1/&#123;username&#125;/jobs/&#123;job_id&#125;/assets</code></summary>
<p/>

Sauce Labs retains job asset files for 30 days, after which, they are purged, but you can delete the asset files for a job before that, if desired. This request deletes all of the asset files associated with a job. Deleting a single asset file is not supported at this time.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the owner of the job. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The Sauce Labs identifier of the job for which you are retrieving the asset list. You can look up job IDs using the <a href="#get-jobs">Get Jobs</a> endpoint.</p></td>
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
--request DELETE 'https://api.us-west-1.saucelabs.com/rest/v1/nancy.sweeney/jobs/bc3d1dbd96fd4479925f2afa8efbc090/assets' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE 'https://api.eu-central-1.saucelabs.com/rest/v1/nancy.sweeney/jobs/bc3d1dbd96fd4479925f2afa8efbc090/assets' | json_pp
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
    [
        "0000screenshot.png",
        11305
    ],
    [
        "0001screenshot.png",
        55109
    ],
    [
        "0002screenshot.png",
        55109
    ],
    [
        "_crmuxdriver.log",
        100136
    ],
    [
        "_lhr_806270ED1EF8FA367C4CDC4083079F32.json.gz",
        46316
    ],
    [
        "_tracelog_806270ED1EF8FA367C4CDC4083079F32.json.gz",
        1690435
    ],
    [
        "automator.log",
        281824
    ],
    [
        "log.json",
        6201
    ],
    [
        "network.har",
        14118
    ],
    [
        "performance.json",
        4812
    ],
    [
        "selenium-server.log",
        341436
    ],
    [
        "video.mp4",
        210140
    ]
]
```
</details>

---

## Builds Methods

The set of methods defined in this section are applicable to builds, or groups of associated tests.


### Get Builds

<details><summary><span className="api get">GET</span> <code>/rest/v1/&#123;username&#125;/builds</code></summary>
<p/>

Get a list of recent builds run by the specified user.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>username</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The username of the Sauce Labs users whose builds you are looking up. You can look up Sauce Labs users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1/jsmith/builds' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/rest/v1/jsmith/builds' | json_pp
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
        "status": "failed",
        "jobs": {
            "completed": 0,
            "finished": 44,
            "queued": 0,
            "failed": 22,
            "running": 0,
            "passed": 22,
            "errored": 0,
            "public": 0
        },
        "name": "Release",
        "deletion_time": null,
        "org_id": "******",
        "start_time": 1618847969,
        "creation_time": 1618847979,
        "number": null,
        "public": false,
        "modification_time": 1618860999,
        "prefix": null,
        "end_time": 1618860985,
        "passed": false,
        "owner": "jsmith",
        "run": 9,
        "team_id": "******",
        "group_id": "******",
        "id": "45d7c21d1df748abbe9c425ab0ecbe4b"
    },
    {...}
]
```
</details>

---
