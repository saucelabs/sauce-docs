---
id: insights
title: Insights API Endpoints
sidebar_label: Insights
description: Retrieve Sauce Labs raw analytics data.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the Insights API methods to retrieve analytics data about your Sauce Labs jobs that you can then use to populate a dashboard that is meaningful for your organization.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## Analytics

### Get Test Results

<details>
    <summary><span className="api get">GET</span> <code>/v1/analytics/tests</code></summary>
<p/>

Return run data for all tests that match the request criteria.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build_missing</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Limit results to those without the build name provided. Default value is <code>false</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>descending</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Sort results by test creation time. Default value is <code>true</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>error</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those that threw the specified error message.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with the specified name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>from</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Begin results list from this record number. Default value is <code>0</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>owner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to the provided owner (username).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>scope</code></td>
     <td>
         <p><small>| QUERY | OPTIONAL | STRING |</small></p>
         <p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p>
         <p>
     <ul>
      <li><code>me</code> - owner is the logged-in requestor.</li>
      <li><code>organization</code> - owner is all users the logged-in requestor's organization.</li>
      <li><code>single</code> - owner is one or more users in the logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li>
    </ul>
     </p>
     </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>size</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The maximum number of results to return. Default value is <code>10</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p>
            <p>Limit results to only those with a specified status. Supported values are:</p>
            <p>
                <ul>
                    <li><code>passed</code></li>
                    <li><code>errored</code></li>
                    <li><code>failed</code></li>
                    <li><code>complete</code></li>
                </ul>
            </p>
        </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p>
            <p>The amount of time backward from the current time that represents the period during which the test runs are executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p>
        </td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/tests" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/tests" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "has_more": true,
  "items": [
    {
      "ancestor": "<ancestor>",
      "browser": "<browser>",
      "browser_normalized": "<browser>",
      "build": "build123",
      "creation_time": "2023-04-19T10:01:44.785Z",
      "details_url": "<url>",
      "duration": 5,
      "end_time": "2023-04-19T10:01:44.785Z",
      "error": "<error>",
      "id": "123",
      "name": "<name>",
      "os": "<os>",
      "os_normalized": "<os>",
      "owner": "<owner>",
      "start_time": "2023-04-19T10:01:44.785Z",
      "status": "complete"
    }
  ],
  "meta": {
    "status": 200
  }
}
```

</details>

---

### Get a Summary of Test Metrics

<details>
<summary><span className="api get">GET</span> <code>/v1/analytics/insights/test-metrics</code></summary>
<p/>

Return an aggregate of metric values for runs of a specified test during the specified period.

#### Parameters

:::note
This call requires <code>start</code> and <code>end</code> parameters OR the <code>time_range</code> parameter.
:::

<table id="table-api">
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
       <td><p><small>| QUERY | REQUIRED | DURATION + UNIT |</small></p><p>The amount of time backward from the current time that represents the period during which the test runs are executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
    </tr>
  </tbody>
   <tbody>
    <tr>
     <td><code>query</code></td>
     <td><p><small>| QUERY | REQUIRED | STRING |</small></p><p>The name of the test for which results are requested.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>scope</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p>
            <p>
                <ul>
                    <li><code>me</code> - owner is the logged-in requestor.</li>
                    <li><code>organization</code> - owner is all users the logged-in requestor's organization.</li>
                    <li><code>single</code> - owner is one or more users in the logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li>
                </ul>
            </p>
        </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>owner</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>The name of one or more users in the requestor's organization who executed the requested tests. This parameter is required if the <code>scope</code> parameter is set to <code>single</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with a specified status. Supported values are:</p>
            <p>
                <ul>
                    <li><code>passed</code></li>
                    <li><code>errored</code></li>
                    <li><code>failed</code></li>
                    <li><code>complete</code></li>
                </ul>
            </p>
        </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/insights/test-metrics?start=1515687172&end=1516291972&query=AnalyticsSeleniumTest%20on%20OS%20X%2010.10" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/insights/test-metrics?start=1515687172&end=1516291972&query=AnalyticsSeleniumTest%20on%20OS%20X%2010.10" | json_pp
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
    <td colSpan='2'>Bad Request. May include additional error messages, such as "start and end parameters are required."</td>
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
  "meta": {
    "status": 200
  },
  "aggs": {
    "count": 1008,
    "fastestRun": {
      "id": "1cc127f6af024184a45fc45817672a341",
      "owner": "a-team",
      "ancestor": "a-team",
      "name": "AnalyticsSeleniumTest on OS X 10.10",
      "build": "",
      "creation_time": "2018-01-12T11:50:02Z",
      "start_time": "2018-01-12T11:50:02Z",
      "end_time": "2018-01-12T11:50:27Z",
      "duration": 25,
      "status": "passed",
      "error": "",
      "os": "OS X Yosemite (10.10)",
      "os_normalized": "",
      "browser": "Chrome 51.0",
      "browser_normalized": "",
      "details_url": "https://saucelabs.com/rest/v1.1/a-team/jobs/1cc127f6af024184a45fc45817672a341"
    },
    "slowestRun": {
      "id": "faf35305919245ebaceab93712d009b0",
      "owner": "a-team",
      "ancestor": "a-team",
      "name": "AnalyticsSeleniumTest on OS X 10.10",
      "build": "",
      "creation_time": "2018-01-15T19:10:01Z",
      "start_time": "2018-01-15T19:10:01Z",
      "end_time": "2018-01-15T19:40:59Z",
      "duration": 1858,
      "status": "errored",
      "error": "Test exceeded maximum duration after 1800 seconds",
      "os": "OS X Yosemite (10.10)",
      "os_normalized": "",
      "browser": "Chrome 51.0",
      "browser_normalized": "",
      "details_url": "https://saucelabs.com/rest/v1.1/a-team/jobs/faf35305919245ebaceab93712d009b0"
    },
    "statuses": {
      "errored": 7,
      "failed": 1,
      "passed": 1000
    },
    "totalQueueTime": 0.3843098311817279,
    "totalRunTime": 33.18867924528302
  }
}
```

</details>

---

### Get Test Trends

<details>
    <summary><span className="api get">GET</span> <code>/v1/analytics/trends/tests</code></summary>
<p/>

Return a set of data "buckets" representing tests that were run in each time interval defined by the request parameters.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>scope</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p>
            <p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p>
            <p>
                <ul>
                    <li><code>me</code> - owner is the logged-in requestor.</li>
                    <li><code>organization</code> - owner is all users the logged-in requestor's organization.</li>
                    <li><code>single</code> - owner is one or more users in the logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li>
                </ul>
            </p>
        </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td>
         <p><small>| QUERY | OPTIONAL | STRING |</small></p>
         <p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p>
     </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
       <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>The amount of time backward from the current time that represents the period during which the test runs are executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td>
         <p><small>| QUERY | OPTIONAL | STRING |</small></p>
         <p>Limit results to only those with a specified status. Supported values are:</p>
         <p>
     <ul>
      <li><code>passed</code></li>
      <li><code>errored</code></li>
      <li><code>failed</code></li>
      <li><code>complete</code></li>
    </ul></p>
     </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul>Default value is <code>or</code>.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/trends/tests" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/trends/tests" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "meta": {
    "status": "complete"
  },
  "buckets": [
    {
      "timestamp": 1681844306,
      "datetime": "2023-04-19T11:03:28.158Z",
      "count": 3,
      "aggs": {
        "browser": [
          {
            "name": "<browser>",
            "count": 3
          }
        ],
        "browserError": [
          {
            "name": "<browser>",
            "count": 6
          }
        ],
        "browserFail": [
          {
            "name": "<browser>",
            "count": 1
          }
        ],
        "device": [
          {
            "name": "<device>",
            "count": 2
          }
        ],
        "deviceError": [
          {
            "name": "<device>",
            "count": 4
          }
        ],
        "deviceFail": [
          {
            "name": "<device>",
            "count": 3
          }
        ],
        "errorMessage": [
          {
            "name": "<error>",
            "count": 6
          }
        ],
        "framework": [
          {
            "name": "<framework>",
            "count": 7
          }
        ],
        "frameworkError": [
          {
            "name": "<framework>",
            "count": 4
          }
        ],
        "frameworkFail": [
          {
            "name": "<framework>",
            "count": 1
          }
        ],
        "os": [
          {
            "name": "<os>",
            "count": 2
          }
        ],
        "osError": [
          {
            "name": "<os>",
            "count": 5
          }
        ],
        "osFail": [
          {
            "name": "<os>",
            "count": 3
          }
        ],
        "owner": [
          {
            "name": "<owner>",
            "count": 4
          }
        ],
        "status": [
          {
            "name": "complete",
            "count": 2
          }
        ]
      }
    }
  ],
  "metrics": {
    "additionalProp1": {
      "additionalProp1": 1,
      "additionalProp2": 4,
      "additionalProp3": 6
    },
    "additionalProp2": {
      "additionalProp1": 2,
      "additionalProp2": 4,
      "additionalProp3": 4
    },
    "additionalProp3": {
      "additionalProp1": 2,
      "additionalProp2": 3,
      "additionalProp3": 4
    }
  }
}
```

</details>

---

### Get Builds and Tests

<details>
<summary><span className="api get">GET</span> <code>/v1/analytics/trends/builds_tests</code></summary>
<p/>

Return the set of all tests run in the specified period, grouped by whether each test was part of a build or not.

#### Parameters

:::note
This call requires <code>start</code> and <code>end</code> parameters OR the <code>time_range</code> parameter.
:::

<table id="table-api">
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
       <td><p><small>| QUERY | REQUIRED | DURATION + UNIT |</small></p><p>The amount of time backward from the current time that represents the period during which the test runs are executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>scope</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p><p><ul><li><code>me</code> - owner is the logged-in requestor.</li><li><code>organization</code> - owner is all users the logged-in requestor's organization.</li><li><code>single</code> - owner is one or more users in the logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>owner</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>The name of one or more users in the requestor's organization who executed the requested tests. This parameter is required if the <code>scope</code> parameter is set to <code>single</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>passed</code></li><li><code>errored</code></li><li><code>failed</code></li><li><code>complete</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend </code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/trends/builds_tests?start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/trends/builds_tests?start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z" | json_pp
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
    <td colSpan='2'>Bad Request. May include additional error messages, such as "start and end parameters are required."</td>
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
  "meta": {
    "status": 200
  },
  "builds": {
    "items": [
      {
        "name": "build-123",
        "tests_count": 34,
        "duration": 1916,
        "start_time": "2017-03-01T12:09:16Z",
        "end_time": "2017-03-01T12:41:25Z",
        "tests": [
          {
            "id": "a1a2b38812hy42e5affbd54p9757re5t",
            "owner": "USERNAME",
            "ancestor": "USERNAME",
            "name": "TestStatus",
            "creation_time": "2017-03-01T12:09:16Z",
            "end_time": "2017-03-01T12:10:44Z",
            "status": "failed",
            "error": "",
            "os": "Linux",
            "browser": "Android 5.1",
            "details_url": "https://saucelabs.com/rest/v1.1/a-team/jobs/a1a2b38812hy42e5affbd54p9757re5t"
          },
          // up to 10 items
        ],
        "has_more": true,
        "aggs": {
          "status": [
            {
              "name": "complete",
              "count": 23
            },
            {
              "name": "passed",
              "count": 9
            },
            {
              "name": "failed",
              "count": 2
            }
          ]
        }
      },
      // up to 25 builds
    ],
    "has_more": true
  },
  "tests_missing_build": {
    "items": [],
    "has_more": false
  }
}
```

</details>

## Filters

### Get Filter Items

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/filters</code></summary>
<p/>

Return data for all tests that match the request criteria.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td><td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>passed</code></li><li><code>error</code></li><li><code>failed</code></li><li><code>complete</code></li></ul></p>Default value is: <code>["error", "failed", "passed", "complete"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul> Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>must_have</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It supports <code>error</code> as a value. When you set <code>must_have=error</code>, jobs took to calculate the response must have ended with an error.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with the specified name.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/filters?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/filters?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "automation_backend": [
    {
      "name": "<automation_backend>",
      "count": 5
    }
  ],
  "browser": [
    {
      "name": "<browser>",
      "count": 7
    }
  ],
  "build": [
    {
      "name": "<build>",
      "count": 2
    }
  ],
  "os": [
    {
      "name": "<os>",
      "count": 4
    }
  ],
  "device": [
    {
      "name": "<device>",
      "count": 8
    }
  ],
  "tag": [
    {
      "name": "<tag>",
      "count": 8
    }
  ]
}
```

</details>

---

### Get Filter Items from All Sources

<details>
<summary><span className="api get">GET</span> <code>/insights/v2/filters</code></summary>
<p/>

Return data from all sources for all tests that match the request criteria.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>passed</code></li><li><code>error</code></li><li><code>failed</code></li><li><code>complete</code></li></ul></p>Default value is: <code>["error", "failed", "passed", "complete"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul> Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>must_have</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It supports <code>error</code> as a value. When you set <code>must_have=error</code>, jobs took to calculate the response must have ended with an error.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with the specified name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p>Default value is: <code>["vdc", "rdc"]</code></td>
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
--request GET "https://api.us-west-1.saucelabs.com/insights/v2/filters?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/insights/v2/filters?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "automation_backend": [
    {
      "name": "<automation_backend>",
      "count": 5
    }
  ],
  "browser": [
    {
      "name": "<browser>",
      "count": 7
    }
  ],
  "build": [
    {
      "name": "<build>",
      "count": 2
    }
  ],
  "os": [
    {
      "name": "<os>",
      "count": 4
    }
  ],
  "device": [
    {
      "name": "<device>",
      "count": 8
    }
  ],
  "tag": [
    {
      "name": "<tag>",
      "count": 8
    }
  ]
}
```

</details>

## Activity

### Get Activity

<details>
<summary><span className="api get">GET</span> <code>/rest/v1/users/&#123;user_id&#125;/activity</code></summary>
<p/>

Return daily statistics about test results and concurrency usage for the specified <code>user_id</code>.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>user_id</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>since</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>Return only jobs ran from the provided Unix timestamp on.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>until</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>Return only jobs ran until the provided Unix timestamp.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>level</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the ownership level. Supported values are:<ul><li><code>user</code></li><li><code>organization</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/rest/v1/users/<user_id>/activity" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/rest/v1/users/<user_id>/activity" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "ccy_exec_mean": [
    0
  ],
  "ccy_exec_peak": [
    0
  ],
  "datestamp": [
    "2023-04-18"
  ],
  "jobs": [
    0
  ],
  "minutes": [
    0
  ]
}
```

</details>

---

### Get Activity for Users

<details>
<summary><span className="api get">GET</span> <code>/rest/v1/users_activity</code></summary>
<p/>

Return daily statistics about test results and concurrency usage.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>users</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to specific users.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>since</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>Return only jobs ran from the provided Unix timestamp on.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>until</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>Return only jobs ran until the provided Unix timestamp.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/rest/v1/users_activity" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/rest/v1/users_activity" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "additionalProp1": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  },
  "additionalProp2": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  },
  "additionalProp3": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  }
}
```

</details>

---

### Get Activity for Teams

<details>
<summary><span className="api get">GET</span> <code>/rest/v1/activity/teams</code></summary>
<p/>

Return daily statistics about test results and concurrency usage for teams.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Return results for the specified team <code>id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>since</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>Return only jobs ran from the provided Unix timestamp on.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>until</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>Return only jobs ran until the provided Unix timestamp.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/rest/v1/activity/teams" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/rest/v1/activity/teams | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "additionalProp1": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  },
  "additionalProp2": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  },
  "additionalProp3": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  }
}
```

</details>

---

### Get Activity for Org

<details>
<summary><span className="api get">GET</span> <code>/rest/v1/activity/organization</code></summary>
<p/>

Return daily statistics about test results and concurrency usage for organization.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>since</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>Return only jobs ran from the provided Unix timestamp on.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>until</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>Return only jobs ran until the provided Unix timestamp.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/rest/v1/activity/organization" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/rest/v1/activity/organization | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "additionalProp1": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  },
  "additionalProp2": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  },
  "additionalProp3": {
    "ccy_exec_mean": [
      0
    ],
    "ccy_exec_peak": [
      0
    ],
    "datestamp": [
      "2023-04-18"
    ],
    "jobs": [
      0
    ],
    "minutes": [
      0
    ]
  }
}
```

</details>

## Errors

### Get Errors

<details>
<summary><span className="api get">GET</span><code>/v2/insights/&#123;source&#125;/errors</code></summary>
<p/>

Return an array of errors with occurrence count on all tests run in the specified period.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p>
            <p>
                Relative date filter. Available values are: <ul>
                <li><code>1m</code> (1 month)</li>
                <li><code>15m</code> (15 months)</li>
                <li><code>1h</code> (1 hour)</li>
                <li><code>6h</code> (6 hours)</li>
                <li><code>12h</code> (12 hours)</li>
                <li><code>1d</code> (1 day)</li>
                <li><code>7d</code> (7 days)</li>
                <li><code>30d</code> (30 days)</li>
            </ul>Default value is <code>1d</code>
            </p>
        </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the number of records to return. Default value is <code>50</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Specifies the number of items to be skipped from the beginning of the list. Default value is <code>0</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/rdc/errors?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/rdc/errors?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "buckets": [
    {
      "name": "abc123",
      "count": 1
    }
  ],
  "all_items_count": 2,
  "total": 3
}
```

</details>

---

### Get Errors Trends

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/errors/trends</code></summary>
<p/>

Return past and current data about errors for comparison.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_zone</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specified the time zone. Default value is <code>+00:00</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/rdc/errors/trends?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/rdc/errors/trends?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "histogram": [
    {
      "count": 2,
      "datetime": "2017-03-01T12:16:22Z"
    }
  ],
  "trend": {
    "current": 2,
    "past": 4,
    "tests_count": 7
  }
}
```

</details>

## Test Cases

### Get Tests

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/tests</code></summary>
<p/>

Return an array of tests with details.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul>Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>error</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those that threw the specified error message.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with the specified name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the number of records to return. Default value is <code>50</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Specifies the number of items to be skipped from the beginning of the list. Default value is <code>0</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort_by</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset by the specified value. Available values are: <ul><li><code>duration</code></li><li><code>creation_time</code></li></ul>Default value is <code>creation_time</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset in ascending or descending order. Available values are: <ul><li><code>asc</code></li><li><code>desc</code></li></ul>Default value is <code>desc</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If <code>source</code> is <code>rdc</code>, return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/tests?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/tests?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "items": [
    {
      "id": "abc123",
      "name": "test1",
      "status": "complete",
      "creation_time": "2017-03-01T12:13:39Z",
      "modification_time": "2017-03-03T14:23:25Z",
      "error": "<error>",
      "passed": true,
      "browser_normalized": "<browser_normalized>",
      "os_normalized": "<os_normalized>",
      "device_name": "<device_name>",
      "device_group": "<device_group>",
      "build": "abcd1234",
      "automation_backend": "<automation_backend>",
      "duration": 15,
      "tags": [
        "build_abcd1234"
      ],
      "owner": "<owner>",
      "ancestor": "<ancestor>",
      "user_id": "<user_id>",
      "team_id": "<team_id>",
      "group_id": "<group_id>",
      "org_id": "<org_id>",
      "start_time": "2023-04-18T17:51:14.654Z",
      "end_time": "2023-04-18T17:51:14.654Z",
      "deletion_time": "2023-04-18T17:51:14.654Z",
      "is_expired": true
    }
  ],
  "total": 3,
  "statuses": {
    "additionalProp1": 2,
    "additionalProp2": 5,
    "additionalProp3": 7
  },
  "max_duration": 10
}
```

</details>

---

### Get Common Tests

<details>
<summary><span className="api get">GET</span> <code>/insights/v2/tests</code></summary>
<p/>

Return an array of tests with details.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p>Default value is: <code>["vdc", "rdc"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul> Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>error</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those that threw the specified error message.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with the specified name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the number of records to return. Default value is <code>50</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Specifies the number of items to be skipped from the beginning of the list. Default value is <code>0</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort_by</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset by the specified value. Available values are: <ul><li><code>duration</code></li><li><code>creation_time</code></li></ul> Default value is <code>creation_time</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset in ascending or descending order. Available values are: <ul><li><code>asc</code></li><li><code>desc</code></li></ul> Default value is <code>desc</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>complete</code></li><li><code>error</code></li><li><code>passed</code></li><li><code>failed</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build_missing</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Limit results to those without the build name provided. Default value is <code>false</code>.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/insights/v2/tests?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/insights/v2/tests?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "items": [
    {
      "id": "abc123",
      "name": "test1",
      "source": "rdc",
      "status": "complete",
      "creation_time": "2023-06-05T14:47:21.209Z",
      "modification_time": "2023-06-05T14:47:21.209Z",
      "error": "<error>",
      "passed": true,
      "browser_normalized": "<broser>",
      "os_normalized": "<os>",
      "device_name": "<device>",
      "device_group": "private",
      "build": "<build>",
      "automation_backend": "<automation_backend>",
      "duration": 0,
      "org_id": "<ord_id>",
      "user_id": "<user_id>",
      "team_id": "<team_id>",
      "group_id": "<group_id>",
      "tags": [
        "<tag>"
      ],
      "owner": "<owner>",
      "ancestor": "<ancestor>",
      "start_time": "2023-06-05T14:47:21.209Z",
      "end_time": "2023-06-05T14:47:21.209Z",
      "deletion_time": "2023-06-05T14:47:21.209Z",
      "is_expired": false
    }
  ],
  "total": 5,
  "statuses": {
    "additionalProp1": 3,
    "additionalProp2": 5,
    "additionalProp3": 2
  },
  "max_duration": 10
}
```

</details>

---

### Get Test Cases

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/test-cases</code></summary>
<p/>

Return an array of test cases (grouped by name) with statistical details.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>complete</code></li><li><code>error</code></li><li><code>passed</code></li><li><code>failed</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul>Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the number of records to return. Default value is <code>50</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Specifies the number of items to be skipped from the beginning of the list. Default value is <code>0</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort_by</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset by the specified value. Available values are: <ul><li><code>total_runs</code></li><li><code>name</code></li><li><code>complete_count</code></li><li><code>error_count</code></li><li><code>fail_count</code></li><li><code>pass_count</code></li><li><code>complete_rate</code></li><li><code>error_rate</code></li><li><code>failure_rate</code></li><li><code>pass_rate</code></li><li><code>avg_duration</code></li><li><code>median_duration</code></li><li><code>total_duration</code></li></ul>Default value is <code>total_runs</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset in ascending or descending order. Available values are: <ul><li><code>asc</code></li><li><code>desc</code></li></ul>Default value is <code>desc</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If <code>source</code> is <code>rdc</code>, return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/test-cases?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/test-cases?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "test_cases": [
    {
      "name": "abc123",
      "statuses": {
        "additionalProp1": 3,
        "additionalProp2": 2,
        "additionalProp3": 0
      },
      "total_runs": 5,
      "complete_rate": 5,
      "error_rate": 2,
      "fail_rate": 1,
      "pass_rate": 4,
      "avg_duration": 16,
      "median_duration": 10,
      "total_duration": 20
    }
  ],
  "total": 4,
  "statuses": {
    "additionalProp1": 3,
    "additionalProp2": 5,
    "additionalProp3": 1
  },
  "avg_runtime": 15
}
```

</details>

---

### Get Test Cases CSV

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/test-cases/csv</code></summary>
<p/>

Return an array of test cases (grouped by name) with statistical details as a CSV file.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>complete</code></li><li><code>error</code></li><li><code>passed</code></li><li><code>failed</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul>Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort_by</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset by the specified value. Available values are: <ul><li><code>total_runs</code></li><li><code>name</code></li><li><code>complete_count</code></li><li><code>error_count</code></li><li><code>fail_count</code></li><li><code>pass_count</code></li><li><code>complete_rate</code></li><li><code>error_rate</code></li><li><code>failure_rate</code></li><li><code>pass_rate</code></li><li><code>avg_duration</code></li><li><code>median_duration</code></li><li><code>total_duration</code></li></ul>Default value is <code>total_runs</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset in ascending or descending order. Available values are: <ul><li><code>asc</code></li><li><code>desc</code></li></ul>Default value is <code>desc</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If <code>source</code> is <code>rdc</code>, return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/test-cases/csv?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/test-cases/csv?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{}
```

</details>

---

### Get Test Cases Stats

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/test-cases/stats</code></summary>
<p/>

Return an array of test cases (grouped by name) with statistical details.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>complete</code></li><li><code>error</code></li><li><code>passed</code></li><li><code>failed</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul>Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If <code>source</code> is <code>rdc</code>, return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/test-cases/stats?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/test-cases/stats?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "consistently_complete": 5,
  "consistently_error": 1,
  "consistently_failing": 0,
  "consistently_passing": 6,
  "total_test_cases": 12,
  "total_test_cases_limited": 15
}
```

</details>

---

### Get Status Trend

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/test-cases/trends</code></summary>
<p/>

Return a histogram with test statistic details grouped by specific period.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>groupby</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Time period for grouping. Available values are: <ul><li><code>1h</code></li><li><code>1d</code></li><li><code>7d</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_zone</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specified the time zone. Default value is <code>+00:00</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul>Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with the specified name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If <code>source</code> is <code>rdc</code>, return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/test-cases/trends?groupby=<groupby>&org_id=<org_id>&start=<start>&end=<end>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/test-cases/trends?groupby=<groupby>&org_id=<org_id>&start=<start>&end=<end>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "histogram": [
    {
      "timestamp_s": 1,
      "timestamp_ms": 60,
      "complete": 10,
      "error": 2,
      "failed": 3,
      "passed": 5
    }
  ]
}
```

</details>

## Concurrency

### Get Max Concurrency Report CSV

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/concurrency/max/csv</code></summary>
<p/>

Return information about concurrency usage in a CSV format.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud. Supported values are:</p><p><ul><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start_date</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end_date</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/concurrency/max/csv?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/concurrency/max/csv?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{}
```

</details>

---

### Get Max Concurrency Report JSON

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/concurrency/max/json</code></summary>
<p/>

Return information about concurrency usage.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud. Supported values are:</p><p><ul><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start_date</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end_date</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/concurrency/max/json?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/concurrency/max/json?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{}
```

</details>

## Coverage

### Get Coverage

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/coverage/&#123;coverage_field&#125;</code></summary>
<p/>

Return information about tests coverage for the specified <code>coverage_field</code>.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>coverage_field</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Available values are:<ul><li><code>device</code></li><li><code>browser</code></li><li><code>os</code></li></ul></p><p></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Return results only for the specified framework used to run the test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort_by</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset by the specified value. Available values are: <ul><li><code>name</code></li><li><code>count</code></li><li><code>total_duration</code></li></ul>Default value is <code>count</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset in ascending or descending order. Available values are: <ul><li><code>asc</code></li><li><code>desc</code></li></ul>Default value is <code>desc</code>.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/coverage/<coverage_field>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/coverage/<coverage_field>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "coverage": [
    {
      "name": "<name>",
      "count": 3,
      "total_duration": 5
    }
  ],
  "max_count": 7
}
```

</details>

---

### Get Coverage from All Sources

<details>
<summary><span className="api get">GET</span> <code>/insights/v2/coverage/&#123;coverage_field&#125;</code></summary>
<p/>

Return information from all sources about test coverage for the specified <code>coverage_field</code>.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>coverage_field</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Available values are:<ul><li><code>device</code></li><li><code>browser</code></li><li><code>os</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Return results only for the specified framework used to run the test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort_by</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset by the specified value. Available values are: <ul><li><code>name</code></li><li><code>count</code></li><li><code>total_duration</code></li></ul> Default value is <code>count</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>sort</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Sort the dataset in ascending or descending order. Available values are: <ul><li><code>asc</code></li><li><code>desc</code></li></ul> Default value is <code>desc</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p>Default value is: <code>["vdc", "rdc"]</code></td>
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
--request GET "https://api.us-west-1.saucelabs.com/insights/v2/coverage/<coverage_field>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/insights/v2/coverage/<coverage_field>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "coverage": [
    {
      "name": "<name>",
      "count": 3,
      "total_duration": 5
    }
  ],
  "max_count": 7
}
```

</details>

---

### Get Coverage CSV

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/coverage/&#123;coverage_field&#125;/csv</code></summary>
<p/>

Return information about tests coverage for the specified `coverage_field` in a CSV format.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>coverage_field</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Available values are:<code>device</code>, <code>browser</code>, <code>os</code>.</p><p></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Return results only for the specified framework used to run the test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/coverage/<coverage_field>/csv" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/coverage/<coverage_field>/csv" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{}
```

</details>

---

### Get Coverage CSV from All Sources

<details>
<summary><span className="api get">GET</span> <code>/insights/v2/coverage/&#123;coverage_field&#125;/csv</code></summary>
<p/>

Return information from all sources about test coverage for the specified `coverage_field` in a CSV format.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
      <td><code>coverage_field</code></td>
        <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Available values are:<ul><li><code>device</code></li><li><code>browser</code></li><li><code>os</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Return results only for the specified framework used to run the test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p>Default value is: <code>["vdc", "rdc"]</code></td>
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
--request GET "https://api.us-west-1.saucelabs.com/insights/v2/coverage/<coverage_field>/csv" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/insights/v2/coverage/<coverage_field>/csv" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{}
```

</details>

## Trends

### Get Trends Tests

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/trends/tests</code></summary>
<p/>

Return an array of buckets with aggregations, such as number of tests run on a specific browser or device.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_zone</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specified the time zone. Default value is <code>+00:00</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>complete</code></li><li><code>error</code></li><li><code>passed</code></li><li><code>failed</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul> Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If <code>source</code> is <code>rdc</code>, return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/trends/tests?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/trends/tests?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "meta": {
    "status": "complete"
  },
  "buckets": [
    {
      "timestamp": 1681844306,
      "datetime": "2017-03-01T12:13:39Z",
      "count": 3,
      "aggs": {
        "browser": [
          {
            "name": "<browser>",
            "count": 3
          }
        ],
        "browserError": [
          {
            "name": "<browser>",
            "count": 1
          }
        ],
        "browserFail": [
          {
            "name": "<browser>",
            "count": 4
          }
        ],
        "device": [
          {
            "name": "<device>",
            "count": 6
          }
        ],
        "deviceError": [
          {
            "name": "<device>",
            "count": 2
          }
        ],
        "deviceFail": [
          {
            "name": "<device>",
            "count": 5
          }
        ],
        "errorMessage": [
          {
            "name": "<error>",
            "count": 0
          }
        ],
        "framework": [
          {
            "name": "<framework>",
            "count": 0
          }
        ],
        "frameworkError": [
          {
            "name": "<framework>",
            "count": 0
          }
        ],
        "frameworkFail": [
          {
            "name": "<framework>",
            "count": 0
          }
        ],
        "os": [
          {
            "name": "<os>",
            "count": 8
          }
        ],
        "osError": [
          {
            "name": "<os>",
            "count": 2
          }
        ],
        "osFail": [
          {
            "name": "<os>",
            "count": 7
          }
        ],
        "owner": [
          {
            "name": "<owner>",
            "count": 0
          }
        ],
        "status": [
          {
            "name": "<status>",
            "count": 0
          }
        ]
      }
    }
  ],
  "metrics": {
    "additionalProp1": {
      "additionalProp1": 1,
      "additionalProp2": 4,
      "additionalProp3": 5
    },
    "additionalProp2": {
      "additionalProp1": 6,
      "additionalProp2": 8,
      "additionalProp3": 3
    },
    "additionalProp3": {
      "additionalProp1": 6,
      "additionalProp2": 7,
      "additionalProp3": 2
    }
  }
}
```

</details>

---

### Get Trends Tests from All Sources

<details>
<summary><span className="api get">GET</span> <code>/insights/v2/trends/tests</code></summary>
<p/>

Return an array of buckets with aggregations, such as the number of tests from all sources run on a specific browser or device.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_zone</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specified the time zone. Default value is <code>+00:00</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p>Default value is: <code>["vdc", "rdc"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>passed</code></li><li><code>error</code></li><li><code>failed</code></li><li><code>complete</code></li></ul></p>Default value is: <code>["error", "failed", "passed", "complete"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul> Default value is <code>or</code>.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/insights/v2/trends/tests?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/insights/v2/trends/tests?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "meta": {
    "status": "complete"
  },
  "buckets": [
    {
      "timestamp": 1681844306,
      "datetime": "2017-03-01T12:13:39Z",
      "count": 3,
      "aggs": {
        "browser": [
          {
            "name": "<browser>",
            "count": 3
          }
        ],
        "browserError": [
          {
            "name": "<browser>",
            "count": 1
          }
        ],
        "browserFail": [
          {
            "name": "<browser>",
            "count": 4
          }
        ],
        "device": [
          {
            "name": "<device>",
            "count": 6
          }
        ],
        "deviceError": [
          {
            "name": "<device>",
            "count": 2
          }
        ],
        "deviceFail": [
          {
            "name": "<device>",
            "count": 5
          }
        ],
        "errorMessage": [
          {
            "name": "<error>",
            "count": 0
          }
        ],
        "framework": [
          {
            "name": "<framework>",
            "count": 0
          }
        ],
        "frameworkError": [
          {
            "name": "<framework>",
            "count": 0
          }
        ],
        "frameworkFail": [
          {
            "name": "<framework>",
            "count": 0
          }
        ],
        "os": [
          {
            "name": "<os>",
            "count": 8
          }
        ],
        "osError": [
          {
            "name": "<os>",
            "count": 2
          }
        ],
        "osFail": [
          {
            "name": "<os>",
            "count": 7
          }
        ],
        "owner": [
          {
            "name": "<owner>",
            "count": 0
          }
        ],
        "status": [
          {
            "name": "<status>",
            "count": 0
          }
        ]
      }
    }
  ],
  "metrics": {
    "additionalProp1": {
      "additionalProp1": 1,
      "additionalProp2": 4,
      "additionalProp3": 5
    },
    "additionalProp2": {
      "additionalProp1": 6,
      "additionalProp2": 8,
      "additionalProp3": 3
    },
    "additionalProp3": {
      "additionalProp1": 6,
      "additionalProp2": 7,
      "additionalProp3": 2
    }
  }
}
```

</details>

---

### Get Trends Errors

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/trends/errors</code></summary>
<p/>

Return statistics for errors that occurred in tests run in the specified period.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>complete</code></li><li><code>error</code></li><li><code>passed</code></li><li><code>failed</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul>Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If <code>source</code> is <code>rdc</code>, return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/trends/errors?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/trends/errors?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "meta": {
    "status": "complete"
  },
  "buckets": [
    {
      "name": "<name>",
      "count": 3,
      "items": [
        {
          "id": "abc123",
          "owner": "<owner>",
          "ancestor": "<ancestor>",
          "name": "<name>",
          "build": "build123",
          "creation_time": "2023-04-18T21:14:29.374Z",
          "start_time": "2023-04-18T21:14:29.374Z",
          "end_time": "2023-04-18T21:14:29.374Z",
          "duration": 4,
          "status": "complete",
          "error": "<error>",
          "os": "<os>",
          "os_normalized": "<os>",
          "browser": "<browser>",
          "browser_normalized": "<browser>",
          "details_url": "<url>"
        }
      ],
      "has_more": true
    }
  ],
  "all_items_count": 4
}
```

</details>

---

### Get Trends Errors from All Sources

<details>
<summary><span className="api get">GET</span> <code>/insights/v2/trends/errors</code></summary>
<p/>

Return statistics from all sources for errors that occurred on tests run in the specified period.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p>Default value is: <code>["vdc", "rdc"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>passed</code></li><li><code>error</code></li><li><code>failed</code></li><li><code>complete</code></li></ul></p>Default value is: <code>["error", "failed", "passed", "complete"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul> Default value is <code>or</code>.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/insights/v2/trends/errors?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/insights/v2/trends/errors?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "meta": {
    "status": "complete"
  },
  "buckets": [
    {
      "name": "<name>",
      "count": 3,
      "items": [
        {
          "id": "abc123",
          "owner": "<owner>",
          "ancestor": "<ancestor>",
          "name": "<name>",
          "build": "build123",
          "creation_time": "2023-04-18T21:14:29.374Z",
          "start_time": "2023-04-18T21:14:29.374Z",
          "end_time": "2023-04-18T21:14:29.374Z",
          "duration": 4,
          "status": "complete",
          "error": "<error>",
          "os": "<os>",
          "os_normalized": "<os>",
          "browser": "<browser>",
          "browser_normalized": "<browser>",
          "details_url": "<url>"
        }
      ],
      "has_more": true
    }
  ],
  "all_items_count": 4
}
```

</details>

---

### Get Trends Builds Tests

<details>
<summary><span className="api get">GET</span> <code>/v2/insights/&#123;source&#125;/trends/builds_tests</code></summary>
<p/>

Return information about builds and tests run included in the build. Also, it provides information about tests without build names.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Relative date filter. Available values are: <ul><li><code>1m</code> (1 month)</li><li><code>15m</code> (15 months)</li><li><code>1h</code> (1 hour)</li><li><code>6h</code> (6 hours)</li><li><code>12h</code> (12 hours)</li><li><code>1d</code> (1 day)</li><li><code>7d</code> (7 days)</li><li><code>30d</code> (30 days)</li></ul>Default value is <code>1d</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>complete</code></li><li><code>error</code></li><li><code>passed</code></li><li><code>failed</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul>Default value is <code>or</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If <code>source</code> is <code>rdc</code>, return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v2/insights/<source>/trends/builds_tests?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v2/insights/<source>/trends/builds_tests?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "meta": {
    "status": "passed"
  },
  "builds": {
    "items": [
      {
        "name": "<name>",
        "tests_count": 5,
        "owner": "<owner>",
        "duration": 4,
        "duration_absolute": 6,
        "duration_test_max": 9,
        "start_time": "2023-04-18T21:32:45.153Z",
        "end_time": "2023-04-18T21:32:45.153Z",
        "tests": [
          {
            "id": "abc123",
            "owner": "<owner>",
            "ancestor": "<ancestor>",
            "name": "<name>",
            "build": "build123",
            "creation_time": "2023-04-18T21:32:45.153Z",
            "start_time": "2023-04-18T21:32:45.153Z",
            "end_time": "2023-04-18T21:32:45.153Z",
            "duration": 9,
            "status": "passed",
            "error": "<error>",
            "os": "<os>",
            "os_normalized": "<os>",
            "browser": "<browser>",
            "browser_normalized": "<browser>",
            "details_url": "<url>",
            "is_expired": true
          }
        ],
        "aggs": {
          "status": [
            {
              "name": "passed",
              "count": 8
            }
          ]
        }
      }
    ],
    "has_more": true,
    "total": 10
  },
  "tests_missing_build": {
    "items": [
      {
        "id": "def456",
        "owner": "<owner>",
        "ancestor": "<ancestor>",
        "name": "<name>",
        "build": "build456",
        "creation_time": "2023-04-18T21:32:45.153Z",
        "start_time": "2023-04-18T21:32:45.153Z",
        "end_time": "2023-04-18T21:32:45.153Z",
        "duration": 10,
        "status": "failed",
        "error": "<error>",
        "os": "<os>",
        "os_normalized": "<os>",
        "browser": "<browser>",
        "browser_normalized": "<browser>",
        "details_url": "<url>",
        "is_expired": true
      }
    ],
    "has_more": true,
    "total": 0
  }
}
```

</details>

---

### Get Trends Builds Tests from All Sources

<details>
<summary><span className="api get">GET</span> <code>/insights/v2/trends/builds-tests</code></summary>
<p/>

Return information from all sources about builds and tests run included in the build. Also, it provides information about tests without build names.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>user_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return only jobs that belongs to the specified <code>user_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>group_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>group_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>automation_backend</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified framework.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>browser</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified browsers.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>build</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to those grouped by this build name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified device.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>device_group</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for the specified device group. Available values are: <ul><li><code>private</code></li><li><code>public</code></li></ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>os</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified operating systems.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>source</code></td>
       <td><p><small>| QUERY | OPTIONAL | ARRAY |</small></p><p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p><p><ul><li><code>rdc</code> - Real Device Cloud</li><li><code>vdc</code> - Virtual Device Cloud</li></ul></p>Default value is: <code>["vdc", "rdc"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>status</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p><ul><li><code>passed</code></li><li><code>error</code></li><li><code>failed</code></li><li><code>complete</code></li></ul></p>Default value is: <code>["error", "failed", "passed", "complete"]</code></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY OF STRINGS |</small></p><p>Limit results to only those run on the specified tag.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag_filter_mode</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>It changes the default behavior of <code>tag</code> filters: when you add multiple <code>tag</code> filters, the default behavior is <code>or</code>. When you add <code>tag_filter_mode=and</code>, the results are limited to only those with all <code>tags</code> provided. Available values are: <ul><li><code>and</code></li><li><code>or</code></li></ul> Default value is <code>or</code>.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/insights/v2/trends/builds-tests?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/insights/v2/trends/builds-tests?org_id=<org_id>" | json_pp
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
    <td><code>422</code></td>
    <td colSpan='2'>Validation Error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "meta": {
    "status": "passed"
  },
  "builds": {
    "items": [
      {
        "name": "<name>",
        "tests_count": 5,
        "owner": "<owner>",
        "duration": 4,
        "duration_absolute": 6,
        "duration_test_max": 9,
        "start_time": "2023-04-18T21:32:45.153Z",
        "end_time": "2023-04-18T21:32:45.153Z",
        "tests": [
          {
            "id": "abc123",
            "owner": "<owner>",
            "ancestor": "<ancestor>",
            "name": "<name>",
            "build": "build123",
            "creation_time": "2023-04-18T21:32:45.153Z",
            "start_time": "2023-04-18T21:32:45.153Z",
            "end_time": "2023-04-18T21:32:45.153Z",
            "duration": 9,
            "status": "passed",
            "error": "<error>",
            "os": "<os>",
            "os_normalized": "<os>",
            "browser": "<browser>",
            "browser_normalized": "<browser>",
            "details_url": "<url>",
            "is_expired": true
          }
        ],
        "aggs": {
          "status": [
            {
              "name": "passed",
              "count": 8
            }
          ]
        }
      }
    ],
    "has_more": true,
    "total": 10
  },
  "tests_missing_build": {
    "items": [
      {
        "id": "def456",
        "owner": "<owner>",
        "ancestor": "<ancestor>",
        "name": "<name>",
        "build": "build456",
        "creation_time": "2023-04-18T21:32:45.153Z",
        "start_time": "2023-04-18T21:32:45.153Z",
        "end_time": "2023-04-18T21:32:45.153Z",
        "duration": 10,
        "status": "failed",
        "error": "<error>",
        "os": "<os>",
        "os_normalized": "<os>",
        "browser": "<browser>",
        "browser_normalized": "<browser>",
        "details_url": "<url>",
        "is_expired": true
      }
    ],
    "has_more": true,
    "total": 0
  }
}
```

</details>
