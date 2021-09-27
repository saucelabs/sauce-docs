---
id: builds
title: Builds API Methods
sidebar_label: Builds
description: Retrieve information about the Sauce Labs tests that have been grouped together in builds.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Builds are a means of categorizing your jobs on Sauce Labs, allowing you to view related jobs together for greater insight. The Builds API methods retrieve information about the builds and the jobs assigned to them.

:::note
Builds are exclusive to the device source on which the jobs were run, meaning you cannot group real device tests and emulator/simulator tests in the same build. Therefore, all Build API methods require a `{build_source}` parameter.
:::

Refer to [Getting Started](/dev/api) for Authentication and Server information.

### Lookup Builds

<details><summary><span className="api get">GET</span> <code>/v2/builds/&#123;build_source&#125;/</code></summary>
<p/>

Queries the requesting account and returns a summary of each build matching the query, including the `ID` value, which may be a required parameter of other API calls related to a specific build.

You can narrow the results of your query using any of the optional filtering parameters.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>build_source</code></td>
     <td><p><small>| PATH | REQUIRED | ENUM |</small></p><p>The type of device for which you are getting builds. Valid values are:
       <ul>
         <li><code>rdc</code> - Real Device Builds</li>
         <li><code>vdc</code> - Emulator or Simulator Builds</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Returns any builds owned by the specified user that the authenticated user is authorized to view. You can look up the IDs of users in your organization using the <a href="/dev/api/accounts/#lookup-users">Lookup Users</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Returns all builds in the specified organization that the authenticated user is authorized to view.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Returns all builds associated with the specified group that the authenticated user is authorized to view.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Returns all builds for the specified team that the authenticated user is authorized to view.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY |</small></p><p>Returns only builds where the status matches the list of values specified. Valid values are:
       <ul>
         <li><code>running</code> - Any job in the build has a state of <i>running</i>, <i>new</i>, or <i>queued</i>.</li>
         <li><code>error</code> - The build is not <b>running</b> and at least one job in the build has a state of <i>errored</i>.</li>
         <li><code>failed</code> - The build is not <b>running</b> or <b>error</b> and at least one job in the build has a state of <i>failed</i>.</li>
         <li><code>complete</code> - The build is not <b>running</b>, <b>error</b>, or <b>failed</b>, but the number of jobs with a state of <i>finished</i> does not equal the number of jobs marked <i>passed</i>, so at least one job has a state other than <i>passed</i>.</li>
         <li><code>success</code> -- All jobs in the build have a state of <i>passed</i>.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
     <td><p><small>| QUERY | OPTIONAL | DATE-TIME |</small></p><p>Returns only builds where the earliest job ran on or after this Unix timestamp.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
     <td><p><small>| QUERY | OPTIONAL | DATE-TIME |</small></p><p>Returns only builds where the latest job ran on or before this Unix timestamp.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The maximum number of builds to return in the response.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Begins the set of results at this index number.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort</code></td>
     <td><p><small>| QUERY | OPTIONAL | ENUM |</small></p><p>Sorts the results in alphabetically ascending or descending order. Valid values are:
       <ul>
         <li><code>asc</code> - Ascending</li>
         <li><code>desc</code> - Descending</li>
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
--request GET 'https://api.us-west-1.saucelabs.com/v2/builds/vdc/' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v2/builds/vdc/' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Build info returned.</td>
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error. One or more of the parameters in the request is not formatted properly. The error response `msg` property may contain additional details about the specific failure.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "builds": [
        {
            "creation_time": 1631824314,
            "deletion_time": null,
            "end_time": 1631824422,
            "group_id": "8cdb4afe7cba4846b5cae339a87e3b70",
            "id": "780fbea7d2313b258a935e1b7f7e48e2",
            "jobs": {
                "completed": 0,
                "errored": 0,
                "failed": 0,
                "finished": 3,
                "passed": 3,
                "public": 0,
                "queued": 0,
                "running": 0
            },
            "modification_time": 1631824426,
            "name": "DevX SS",
            "org_id": "7fb25570b4064716b9b6daae1a846790",
            "owner_id": "5c207d581a48462e9c0eb21d30b931e2",
            "passed": null,
            "public": false,
            "run": 0,
            "start_time": 1631824314,
            "status": "success",
            "team_id": "98b9f34e596047d99abba56f517846a9"
        },
        {more build results...}
    ]
}
```
</details>

---

### Get a Specific Build

<details><summary><span className="api get">GET</span> <code>/v2/builds/&#123;build_source&#125;/&#123;build_id&#125;/</code></summary>
<p/>

Retrieve the details related to a specific build by passing its unique ID in the request.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>build_source</code></td>
     <td><p><small>| PATH | REQUIRED | ENUM |</small></p><p>The type of test device associated with the build. Valid values are:
       <ul>
         <li><code>rdc</code> - Real Device Builds</li>
         <li><code>vdc</code> - Emulator or Simulator Builds</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the build to retrieve. You can look up build IDs in your organization using the <a href="#lookup-builds">Lookup Builds</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/v2/builds/vdc/6027d9672cc430c89582fa69e96ae7b8/' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v2/builds/vdc/6027d9672cc430c89582fa69e96ae7b8/' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Build info returned.</td>
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error. One or more of the parameters in the request is not formatted properly. The error response `msg` property may contain additional details about the specific failure.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "creation_time": 1632226660,
    "deletion_time": null,
    "end_time": 1632226689,
    "group_id": "8cdb4afe7cba4846b5cae339a87e3b70",
    "id": "6027d9672cc430c89582fa69e96ae7b8",
    "jobs": {
        "completed": 0,
        "errored": 0,
        "failed": 1,
        "finished": 3,
        "passed": 2,
        "public": 0,
        "queued": 0,
        "running": 0
    },
    "modification_time": 1632226691,
    "name": "insights-vdc-test-20210921-121737",
    "org_id": "7fb25570b4064716b9b6daae1a846790",
    "owner_id": "c315e56ecd954018b9a0bc6e85732826",
    "passed": null,
    "public": false,
    "run": 0,
    "start_time": 1632226659,
    "status": "failed",
    "team_id": "64e0d884a79b4f81ba6bc1025c10eb63"
}
```
</details>

---

### Lookup the Build for a Specific Job

<details><summary><span className="api get">GET</span> <code>/v2/builds/&#123;build_source&#125;/jobs/&#123;job_id&#125;/build/</code></summary>
<p/>

Retrieves the build details for a known job.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>build_source</code></td>
     <td><p><small>| PATH | REQUIRED | ENUM |</small></p><p>The type of test device associated with the job and build. Valid values are:
       <ul>
         <li><code>rdc</code> - Real Device Builds</li>
         <li><code>vdc</code> - Emulator or Simulator Builds</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the job whose build you are looking up. You can look up job IDs in your organization using the <a href="/dev/api/jobs/#get-jobs">Get Jobs</a> endpoint.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/v2/builds/vdc/jobs/eacde1439dd0437e807b61845d8e92b8/build/' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v2/builds/vdc/jobs/eacde1439dd0437e807b61845d8e92b8/build/' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Build info returned.</td>
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error. One or more of the parameters in the request is not formatted properly. The error response `msg` property may contain additional details about the specific failure.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "creation_time": 1631824314,
    "deletion_time": null,
    "end_time": 1631824422,
    "group_id": "8cdb4afe7cba4846b5cae339a87e3b70",
    "id": "780fbea7d2313b258a935e1b7f7e48e2",
    "jobs": {
        "completed": 0,
        "errored": 0,
        "failed": 0,
        "finished": 3,
        "passed": 3,
        "public": 0,
        "queued": 0,
        "running": 0
    },
    "modification_time": 1631824426,
    "name": "DevX SS",
    "org_id": "7fb25570b4064716b9b6daae1a846790",
    "owner_id": "5c207d581a48462e9c0eb21d30b931e2",
    "passed": null,
    "public": false,
    "run": 0,
    "start_time": 1631824314,
    "status": "success",
    "team_id": "98b9f34e596047d99abba56f517846a9"
}
```
</details>

---

### Lookup Jobs in a Build

<details><summary><span className="api get">GET</span> <code>/v2/builds/&#123;build_source&#125;/&#123;build_id&#125;/jobs/</code></summary>
<p/>

Returns information about all jobs associated with the specified build. You can limit which jobs are returned using any of the optional filtering parameters.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>build_source</code></td>
     <td><p><small>| PATH | REQUIRED | ENUM |</small></p><p>The type of test device associated with the build and its jobs. Valid values are:
       <ul>
         <li><code>rdc</code> - Real Device Builds</li>
         <li><code>vdc</code> - Emulator or Simulator Builds</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the build whose jobs you are looking up. You can look up build IDs in your organization using the <a href="#lookup-builds">Lookup Builds</a> endpoint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>modified_since</code></td>
     <td><p><small>| QUERY | OPTIONAL | DATE-TIME |</small></p><p>Returns only jobs that have been modified after this unicode timestamp.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>completed</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on whether they completed, meaning the tests ran uninterrupted to completion:
       <ul>
         <li><code>true</code> - Return jobs that have a completed state of true.</li>
         <li><code>false</code> - Return jobs that have a completed state of false.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>errored</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on their <code>errored</code> state:
       <ul>
         <li><code>true</code> - Return jobs that have an errored state of true.</li>
         <li><code>false</code> - Return jobs that have an errored state of false.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>failed</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on their <code>failed</code> state:
       <ul>
         <li><code>true</code> - Return jobs that have a failed state of true.</li>
         <li><code>false</code> - Return jobs that have a failed state of false.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>finished</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on whether they have finished, meaning they are no longer <i>running</i>, but may not have run to completion:
       <ul>
         <li><code>true</code> - Return jobs that have a finished state of true.</li>
         <li><code>false</code> - Return jobs that have a finished state of false.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>new</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on their <code>new</code> state:
       <ul>
         <li><code>true</code> - Return jobs that have a new state of true.</li>
         <li><code>false</code> - Return jobs that have a new state of false.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>passed</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on their <code>passed</code> state:
       <ul>
         <li><code>true</code> - Return jobs that have a passed state of true.</li>
         <li><code>false</code> - Return jobs that have a passed state of false.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>public</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on whether they were run on public devices:
       <ul>
         <li><code>true</code> - Return jobs that have a public state of true.</li>
         <li><code>false</code> - Return jobs that have a public state of false.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>queued</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on whether their current state is <i>queued</i>:
       <ul>
         <li><code>true</code> - Return jobs that have a queued state of true.</li>
         <li><code>false</code> - Return jobs that have a queued state of false.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>running</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on whether they are currently in a <i>running</i> state:
       <ul>
         <li><code>true</code> - Return jobs that are currently running.</li>
         <li><code>false</code> - Return jobs that are not currently running.</li>
       </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>faulty</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Returns jobs based on whether they are identified as <i>faulty</i>, meaning either <i>errored</i> or <i>failed</i> state is true.
       <ul>
         <li><code>true</code> - Return jobs that have a faulty state of true.</li>
         <li><code>false</code> - Return jobs that have a faulty state of false.</li>
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
--request GET 'https://api.us-west-1.saucelabs.com/v2/builds/vdc/a633354c3bc232ee8871f24332046cb9/jobs/?finished=true' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v2/builds/rdc/fe121deb65333ba5948c2c5b45418bbf/jobs/?passed=true' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Build info returned.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>403</code></td>
    <td colSpan='2'>Forbidden. The authenticating account does not have permission to make the request.</td>
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error. One or more of the parameters in the request is not formatted properly. The error response `msg` property may contain additional details about the specific failure.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "jobs": [
        {
            "creation_time": 1632236598,
            "deletion_time": null,
            "id": "ac50bd0253834f78abdee6d5afea89ba",
            "modification_time": 1632236607,
            "state": {
                "completed": false,
                "errored": false,
                "failed": false,
                "finished": true,
                "new": false,
                "passed": true,
                "public": false,
                "queued": false,
                "running": false
            }
        },
        {more job results...}
    ]
}
```
</details>

---
