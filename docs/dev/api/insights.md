---
id: insights
title: Insights API Methods
sidebar_label: Insights
description: Retrieve Sauce Labs raw analytics data.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Use the Insights API methods to retrieve analytics data about your Sauce Labs jobs that you can then use to populate a dashboard that is meaningful for your organization.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

### Get Test Results

<details><summary><span className="api get">GET</span> <code>/v1/analytics/tests</code></summary>
<p/>

Returns run data for all tests that match the request criteria.

#### Parameters

:::note
This call requires <code>start</code> and <code>end</code> parameters OR the <code>time_range</code> parameter.
:::

<table id="table-api">
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
       <td><p><small>| QUERY | REQUIRED | DURATION + UNIT |</small></p><p>The amount of time backward from the current time representing the period during which the test runs executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>scope</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p><p>
     <ul>
      <li><code>me</code> - owner is the logged-in requestor.</li>
      <li><code>organization</code> - owner is all users the logged-in requestor's organization.</li>
      <li><code>single</code> - owner is one or more users in logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li>
    </ul></p></td>
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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p>
     <ul>
      <li><code>passed</code></li>
      <li><code>errored</code></li>
      <li><code>failed</code></li>
      <li><code>complete</code></li>
    </ul></p></td>
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
     <td><code>from</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Begin results list from this record number.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>mainDocumentTransferSize</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The maximum number of results to return.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>missing_build</code></td>
     <td><p><small>| QUERY | OPTIONAL | INCLUDE |</small></p><p>Requires no value. If this parameter is included in the query string, results will only include tests with no assigned build.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>query</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with this test name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>desc</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Set to <code>true</code> to sort results in descending order by creation time. Default value is <code>false</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>error</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those that threw this error message.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/tests?start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z&size=10&from=10&build=build-123"
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/tests?start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z&size=10&from=10&build=build-123"
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
    <td colSpan='2'>Bad Request. May include additional error message, such as "start and end parameters are required."</td>
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
  "items": [
    {
      "id": "50fdd2369eer3031ad912kib57b12440",
      "owner": "USERNAME",
      "ancestor": "USERNAME",
      "name": "TestGet",
      "build": "build-123",
      "creation_time": "2017-03-01T12:13:39Z",
      "end_time": "2017-03-01T12:16:22Z",
      "status": "complete",
      "error": "",
      "os": "OS X El Capitan (10.11)",
      "browser": "iPhone 10.0",
      "details_url": "https://saucelabs.com/rest/v1.1/a-team/jobs/50fdd2369eer3031ad912kib57b12440"
    },
    // 9 more tests
  ],
  "has_more": true
}
```
</details>

---


### Get Summary of Test Metrics

<details><summary><span className="api get">GET</span> <code>/v1/analytics/insights/test-metrics</code></summary>
<p/>

Returns an aggregate of metric values for runs of a specified test during the specified time period.

#### Parameters

:::note
This call requires <code>start</code> and <code>end</code> parameters OR the <code>time_range</code> parameter.
:::

<table id="table-api">
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
       <td><p><small>| QUERY | REQUIRED | DURATION + UNIT |</small></p><p>The amount of time backward from the current time representing the period during which the test runs executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>scope</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p><p>
     <ul>
      <li><code>me</code> - owner is the logged-in requestor.</li>
      <li><code>organization</code> - owner is all users the logged-in requestor's organization.</li>
      <li><code>single</code> - owner is one or more users in logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li>
    </ul></p></td>
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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p>
     <ul>
      <li><code>passed</code></li>
      <li><code>errored</code></li>
      <li><code>failed</code></li>
      <li><code>complete</code></li>
    </ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/insights/test-metrics?start=1515687172&end=1516291972&query=AnalyticsSeleniumTest%20on%20OS%20X%2010.10"
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/insights/test-metrics?start=1515687172&end=1516291972&query=AnalyticsSeleniumTest%20on%20OS%20X%2010.10"
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
    <td colSpan='2'>Bad Request. May include additional error message, such as "start and end parameters are required."</td>
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

<details><summary><span className="api get">GET</span> <code>/v1/analytics/trends/tests</code></summary>
<p/>

Returns a set of data "buckets" representing tests that were run in each time interval defined by the request parameters.

#### Parameters

:::note
This call requires <code>start</code> and <code>end</code> parameters OR the <code>time_range</code> parameter.
:::

<table id="table-api">
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
       <td><p><small>| QUERY | REQUIRED | DURATION + UNIT |</small></p><p>The amount of time backward from the current time representing the period during which the test runs executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>scope</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p><p>
     <ul>
      <li><code>me</code> - owner is the logged-in requestor.</li>
      <li><code>organization</code> - owner is all users the logged-in requestor's organization.</li>
      <li><code>single</code> - owner is one or more users in logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li>
    </ul></p></td>
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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p>
     <ul>
      <li><code>passed</code></li>
      <li><code>errored</code></li>
      <li><code>failed</code></li>
      <li><code>complete</code></li>
    </ul></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>interval</code></td>
     <td><p><small>| QUERY | REQUIRED | DURATION + UNIT |</small></p><p>The amount of time representing the boundary of each data bucket. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/trends/tests?interval=1h&start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z&os=Linux"
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/trends/tests?interval=1h&start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z&os=Linux"
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
    <td colSpan='2'>Bad Request. May include additional error message, such as "start and end parameters are required."</td>
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
  "buckets": [
    {
      "timestamp": "2017-03-09T12:00:00.000Z",
      "count": 204,
      "aggs": {
        "os": [
          {
            "name": "OS X El Capitan (10.11)",
            "count": 98
          },
          {
            "name": "Windows 7",
            "count": 65
          },
          {
            "name": "Linux",
            "count": 41
          }
        ],
        "owner": [
          {
            "name": "a-team",
            "count": 204
          }
        ],
        "status": [
          {
            "name": "complete",
            "count": 133
          },
          {
            "name": "passed",
            "count": 58
          },
          {
            "name": "failed",
            "count": 12
          },
          {
            "name": "errored",
            "count": 1
          }
        ]
      }
    },
    // more buckets...
  ],
  "metrics": {
    "os": {
      "Linux": 163,
      "OS X El Capitan (10.11)": 356,
      "Windows 7": 229
    },
    "owner": {
      "a-team": 748
    },
    "status": {
      "complete": 496,
      "errored": 2,
      "failed": 44,
      "passed": 206
    }
  }
}
```
</details>

---

### Get Builds and Tests

<details><summary><span className="api get">GET</span> <code>/v1/analytics/trends/builds_tests</code></summary>
<p/>

Returns the set of all tests run within the specified time period, grouped by whether each test was part of a build or not.

#### Parameters

:::note
This call requires <code>start</code> and <code>end</code> parameters OR the <code>time_range</code> parameter.
:::

<table id="table-api">
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
       <td><p><small>| QUERY | REQUIRED | DURATION + UNIT |</small></p><p>The amount of time backward from the current time representing the period during which the test runs executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>scope</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p><p>
     <ul>
      <li><code>me</code> - owner is the logged-in requestor.</li>
      <li><code>organization</code> - owner is all users the logged-in requestor's organization.</li>
      <li><code>single</code> - owner is one or more users in logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li>
    </ul></p></td>
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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p>
     <ul>
      <li><code>passed</code></li>
      <li><code>errored</code></li>
      <li><code>failed</code></li>
      <li><code>complete</code></li>
    </ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/trends/builds_tests?start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z"
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/trends/builds_tests?start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z"
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
    <td colSpan='2'>Bad Request. May include additional error message, such as "start and end parameters are required."</td>
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

---

### Get Error Trends

<details><summary><span className="api get">GET</span> <code>/v1/analytics/trends/errors</code></summary>
<p/>

Returns an array of errors that occurred on all tests run within the specified time period.

#### Parameters

:::note
This call requires <code>start</code> and <code>end</code> parameters OR the <code>time_range</code> parameter.
:::

<table id="table-api">
  <tbody>
    <tr>
     <td><code>start</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end</code></td>
       <td><p><small>| QUERY | REQUIRED | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYY-MM-DDTHH:MM:SSZ</code> or Unix time format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>time_range</code></td>
       <td><p><small>| QUERY | REQUIRED | DURATION + UNIT |</small></p><p>The amount of time backward from the current time representing the period during which the test runs executed. Acceptable units include <code>d</code> (day); <code>h</code> (hour); <code>m</code> (minute); <code>s</code> (second).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>scope</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the scope of the <code>owner</code> parameter. Supported values are:</p><p>
     <ul>
      <li><code>me</code> - owner is the logged-in requestor.</li>
      <li><code>organization</code> - owner is all users the logged-in requestor's organization.</li>
      <li><code>single</code> - owner is one or more users in logged-in requestor's organization. Setting this value makes the <code>owner</code> parameter required.</li>
    </ul></p></td>
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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Limit results to only those with a specified status. Supported values are:</p><p>
     <ul>
      <li><code>passed</code></li>
      <li><code>errored</code></li>
      <li><code>failed</code></li>
      <li><code>complete</code></li>
    </ul></p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/analytics/trends/errors?start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z&scope=organization"
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/analytics/trends/errors?start=2021-05-01T12:00:00Z&end=2021-05-02T12:00:00Z&scope=organization"
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
    <td colSpan='2'>Bad Request. May include additional error message, such as "start and end parameters are required."</td>
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
  "buckets": [
    {
      "name": "Selenium didn't complete your last command on time.\nFor help, please check https://docs.saucelabs.com/dev/error-messages",
      "count": 1,
      "items": [
        {
          "id": "8f5nf6370061122bb6ah4ee10a2c966d",
          "owner": "USERNAME",
          "ancestor": "USERNAME",
          "name": "TestScreenshot",
          "creation_time": "2017-03-01T17:47:35Z",
          "end_time": "2017-03-01T17:54:03Z",
          "status": "errored",
          "error": "Selenium didn't complete your last command on time.\nFor help, please check https://docs.saucelabs.com/dev/error-messages",
          "os": "Linux",
          "browser": "Android 5.1",
          "details_url": "https://saucelabs.com/rest/v1.1/USERNAME/jobs/8f5nf6370061122bb6ah4ee10a2c966d"
        }
      ],
      "has_more": false
    },
    // more errors...
  ]
}
```
</details>

---
