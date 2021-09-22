---
id: performance
title: Performance API Methods
sidebar_label: Performance
description: View and  manage front-end performance test data.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Performance API methods allow you to manage your front-end performance testing as programmatic data so you can represent them in a custom dashboard that is meaningful for your organization.

Refer to [Getting Started](/dev/api) for Authentication and Server information.


### Get Performance Test Results

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/</code></summary>
<p/>

Retrieves the results of performance tests run by the requesting account and returns the metric values for those tests.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>page_url</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filter results to return only tests run on a specific URL.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>metric_names</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Provide a list of specific metric values to return. If omitted, the result includes all metrics. See <a href="/performance/one-page#metric-values">Performance Metric Values</a> for a list of supported metrics.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start_date</code></td>
     <td><p><small>| QUERY | OPTIONAL | DATE_TIME STRING |</small></p><p>Filter results based on tests run on or after this date.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end_date</code></td>
     <td><p><small>| BODY | OPTIONAL | DATE-TIME STRING |</small></p><p>Filter results based on tests run on or before this date.</p></td>
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
curl --location --request GET 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/?metric_names=speedIndex' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request GET 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/?metric_names=speedIndex' | json_pp
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
    "items": [
        {
            "job_id": "0308500535c24468a977b250da266b18",
            "job_owner": "jim.smith",
            "job_name_hash": "05833b66a7c1ac61342cdcedca58b07e28298d23",
            "metric_data": {
                "speedIndex": 5645
            },
            "page_url": "https://saucelabs.com/",
            "order_index": 0,
            "job_creation_time": "2021-04-15T01:24:11Z",
            "load_id": "2ad6fbe41070fe02b9cc2fc0271ec65d736acd88",
            "loader_id": "DAC987D7B5A17D680DD6EB966B13AA56",
            "error": null
        },
        {
            "job_id": "b6bee25245724ddca6b852a7ec49f155",
            "job_owner": "jim.smith",
            "job_name_hash": "05833b66a7c1ac61342cdcedca58b07e28298d23",
            "metric_data": {
                "speedIndex": 5668
            },
            "page_url": "https://saucelabs.com/",
            "order_index": 0,
            "job_creation_time": "2021-04-15T01:23:27Z",
            "load_id": "85b9dd1c20dc7347a598566bcbca171cf9f525d3",
            "loader_id": "4F399131AA5741C0345752C066BDA29C",
            "error": null
        }
    ],
    "links": {
        "next": null,
        "previous": null
    }
}
```
</details>

---

### Get Performance Results for a Specific Test

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/&#123;job_id&#125;/</code></summary>
<p/>

Retrieves the results of a specific performance test run by the requesting account.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the requested test results.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>full</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Set to <code>false</code> to return only basic job data, excluding metric values. Defaults to <code>true</code>.</p></td>
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
curl --location --request GET 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/f62eaf7d63c9449eb0424cf7678bf6a9/' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request GET 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/f62eaf7d63c9449eb0424cf7678bf6a9/' | json_pp
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
    "items": [
        {
            "job_id": "f62eaf7d63c9449eb0424cf7678bf6a9",
            "job_owner": "jim.smith",
            "job_name_hash": "05833b66a7c1ac61342cdcedca58b07e28298d23",
            "metric_data": {
                "rtt": 0,
                "load": 15802,
                "score": 0.5,
                "maxRtt": 78,
                "numFonts": 6,
                "numTasks": 443,
                "xhr_size": 930,
                "font_size": 103884,
                "xhr_count": 4,
                "firstPaint": 5098,
                "font_count": 6,
                "image_size": 309548,
                "numScripts": 18,
                "other_size": 2184,
                "speedIndex": 5279,
                "throughput": 1424892.2246980143,
                "image_count": 31,
                "numRequests": 66,
                "other_count": 1,
                "script_size": 1099203,
                "firstCPUIdle": 9657,
                "requestsSize": 2041741,
                "script_count": 18,
                "document_size": 126423,
                "requestsCount": 66,
                "totalTaskTime": 2098,
                "document_count": 2,
                "numStylesheets": 4,
                "stylesheet_size": 399569,
                "timeToFirstByte": 577,
                "totalByteWeight": 1520499,
                "domContentLoaded": 9501,
                "firstInteractive": 9657,
                "lastVisualChange": 6867,
                "maxServerLatency": 769,
                "numTasksOver10ms": 27,
                "numTasksOver25ms": 15,
                "numTasksOver50ms": 9,
                "stylesheet_count": 4,
                "firstVisualChange": 5101,
                "numTasksOver100ms": 4,
                "numTasksOver500ms": 0,
                "totalBlockingTime": 316,
                "serverResponseTime": 577,
                "firstContentfulPaint": 5098,
                "firstMeaningfulPaint": 5098,
                "cumulativeLayoutShift": 0,
                "estimatedInputLatency": 46,
                "largestContentfulPaint": 5098,
                "mainDocumentTransferSize": 18951
            },
            "page_url": "https://saucelabs.com/",
            "order_index": 0,
            "job_creation_time": "2021-04-15T01:23:25Z",
            "load_id": "e96abdb4f49bd6f116f7e004f7d6d20ac69287c8",
            "loader_id": "58977153A6246AEDCF40874D39299AA1",
            "error": null,
            "links": {...}
        }
    ]
}
```
</details>

---

### Get Test Assertions

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/&#123;job_id&#125;/assert/</code></summary>
<p/>

Returns information about any outliers values in the test for the specified metrics.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the relevant test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>metric_names</code></td>
     <td><p><small>| QUERY | REQUIRED | ARRAY of STRINGS |</small></p><p>Provide a list of specific metric values to return. If omitted, the result includes all metrics. See <a href="/performance/one-page#metric-values">Performance Metric Values</a> for a list of supported metrics.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>order_index</code></td>
     <td><p><small>| QUERY | REQUIRED | INTEGER |</small></p><p>Return results beginning with this record number.</p></td>
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
curl --location --request GET 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/assert/?metric_names=speedIndex&order_index=1' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request GET 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/assert/?metric_names=speedIndex&order_index=1' | json_pp
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
    <td colSpan='2'>Bad Request.<p/>May contain a specific error message, such as "at least one metric_names parameter is required."</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Job not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "speedIndex": {
        "baseline": 5399.909090909091,
        "lower_boundary": 4867.525754835426,
        "upper_boundary": 5932.292426982756,
        "real_value": 5645,
        "job_id": "0308500535c24468a977b250da266b18",
        "datetime": "2021-04-15T01:24:11Z",
        "order_index": 0,
        "outlier": {
            "status": false,
            "reason": null
        }
    }
}
```
</details>

---

### Get Test Baseline

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/&#123;job_id&#125;/baseline/</code></summary>
<p/>

Returns acceptable upper and lower border values for specified metrics as determined by the baseline used for the test.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the relevant test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>metric_names</code></td>
     <td><p><small>| QUERY | REQUIRED | ARRAY of STRINGS |</small></p><p>Provide a list of specific metric values to return. If omitted, the result includes all metrics. See <a href="/performance/one-page#metric-values">Performance Metric Values</a> for a list of supported metrics.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>order_index</code></td>
     <td><p><small>| QUERY | REQUIRED | INTEGER |</small></p><p>Return results beginning with this record number.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>regime_start</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Filter results to those occurring on or after this regime.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>regime_end</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Filter results to those occurring on or before this regime.</p></td>
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
curl --location --request GET 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/baseline/?metric_names=speedIndex&order_index=0' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request GET 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/baseline/?metric_names=speedIndex&order_index=0' | json_pp
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
    <td colSpan='2'>Bad Request.<p/>May contain a specific error message, such as "at least one metric_names parameter is required."</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Job not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "speedIndex": {
        "upper_boundary": 5932.292426982756,
        "lower_boundary": 4867.525754835426,
        "baseline": 5399.909090909091,
        "values": [
            {
                "real_value": 5242,
                "datetime": "2021-04-15T01:23:25Z",
                "job_id": "4a8634a5332b48ca89984d34866cadf6"
            },
            {
                "real_value": 5482,
                "datetime": "2021-04-15T01:23:25Z",
                "job_id": "49584bc7aaa04643ab8718b66ab90d35"
            },
            {
                "real_value": 5645,
                "datetime": "2021-04-15T01:24:11Z",
                "job_id": "0308500535c24468a977b250da266b18"
            }
        ]
    }
}
```
</details>

---

### Get Test Baseline Reset History

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/&#123;job_id&#125;/baseline/reset/</code></summary>
<p/>

Indicates whether the baseline has been reset for the specified job (`true`) or not (`false`).

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the relevant test.</p></td>
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
curl --location --request GET 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/baseline/reset/' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request GET 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/baseline/reset' | json_pp
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
    "result": false
}
```
</details>

---

### Set a New Baseline Point

<details><summary><span className="api post">POST</span> <code>/v2/performance/metrics/&#123;job_id&#125;/baseline/reset/</code></summary>
<p/>

Resets the point from which the baseline for the specified job is calculated. Any tests prior to the reset point are ignored.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the relevant test.</p></td>
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
curl --location --request POST 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/baseline/reset/' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request POST 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/baseline/reset' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
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

:::note
A successful response returns no payload.
:::

</details>

---

### Get Discarded Test History

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/&#123;job_id&#125;/discarded/</code></summary>
<p/>

Returns a list of tests that have been discarded from the baseline calculation as outliers.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the relevant test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>order_index</code></td>
     <td><p><small>| QUERY | REQUIRED | INTEGER |</small></p><p>Return results beginning with this record number.</p></td>
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
curl --location --request GET 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/discarded/?order_index=0' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request GET 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/discarded/?order_index=0' | json_pp
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
    <td colSpan='2'>Bad Request.<p/>May contain a specific error message, such as "order_index is a required parameter."</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Job not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "job_ids": []
}
```
</details>

---

### Discard Outliers as Flaky

<details><summary><span className="api post">POST</span> <code>/v2/performance/metrics/&#123;job_id&#125;/discarded/</code></summary>
<p/>

Discards outlier results for a job to exclude them from future baseline calculations.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Identifies the test for which outliers will be discarded.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>order_index</code></td>
     <td><p><small>| QUERY | REQUIRED | INTEGER |</small></p><p>Discard outlier tests beginning with this record number.</p></td>
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
curl --location --request POST 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/discarded/?order_index=0' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request POST 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/discarded/?order_index=0' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad Request.<p/>May contain a specific error message, such as "order_index is a required parameter."</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Job not found.</td>
  </tr>
</tbody>
</table>

:::note
A successful response returns no payload.
:::

</details>

---

### Get Test History

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/&#123;job_id&#125;/history/</code></summary>
<p/>

Returns the test history of the specified job.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Identifies the test for which outliers will be discarded.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>order_index</code></td>
     <td><p><small>| QUERY | REQUIRED | INTEGER |</small></p><p>Discard outlier tests beginning with this record number.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>The maximum number of results to return.</p></td>
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
curl --location --request POST 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/history/?order_index=0' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request POST 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/0308500535c24468a977b250da266b18/discarded/?order_index=0' | json_pp
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
    <td colSpan='2'>Bad Request.<p/>May contain a specific error message, such as "order_index is a required parameter."</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Job not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "items": [
        {
            "job_id": "b6bee25245724ddca6b852a7ec49f155",
            "job_owner": "jim.smith",
            "job_name_hash": "05833b66a7c1ac61342cdcedca58b07e28298d23",
            "metric_data": {
                "rtt": 1,
                "load": 13662,
                "score": 0.5,
                "maxRtt": 75,
                "numFonts": 6,
                "numTasks": 391,
                "xhr_size": 932,
                "font_size": 103884,
                "xhr_count": 4,
                "firstPaint": 5455,
                "font_count": 6,
                "image_size": 309548,
                "numScripts": 18,
                "other_size": 2184,
                "speedIndex": 5668,
                "throughput": 1443800.0594353613,
                "image_count": 31,
                "numRequests": 66,
                "other_count": 1,
                "script_size": 1099203,
                "firstCPUIdle": 9565,
                "requestsSize": 2041743,
                "script_count": 18,
                "document_size": 126423,
                "requestsCount": 66,
                "totalTaskTime": 2038,
                "document_count": 2,
                "numStylesheets": 4,
                "stylesheet_size": 399569,
                "timeToFirstByte": 586,
                "totalByteWeight": 1519988,
                "domContentLoaded": 9550,
                "firstInteractive": 9565,
                "lastVisualChange": 7375,
                "maxServerLatency": 818,
                "numTasksOver10ms": 31,
                "numTasksOver25ms": 14,
                "numTasksOver50ms": 4,
                "stylesheet_count": 4,
                "firstVisualChange": 5453,
                "numTasksOver100ms": 4,
                "numTasksOver500ms": 0,
                "totalBlockingTime": 220,
                "serverResponseTime": 586,
                "firstContentfulPaint": 5455,
                "firstMeaningfulPaint": 5455,
                "cumulativeLayoutShift": 0,
                "estimatedInputLatency": 29,
                "largestContentfulPaint": 5455,
                "mainDocumentTransferSize": 18950
            },
            "page_url": "https://saucelabs.com/",
            "order_index": 0,
            "job_creation_time": "2021-04-15T01:23:27Z",
            "load_id": "85b9dd1c20dc7347a598566bcbca171cf9f525d3",
            "loader_id": "4F399131AA5741C0345752C066BDA29C",
            "error": null
        },
        {
            "job_id": "a2ae2d14dc064bcbb8fda830205054e5",
            "job_owner": "jim.smith",
            "job_name_hash": "05833b66a7c1ac61342cdcedca58b07e28298d23",
            "metric_data": {...},
            "page_url": "https://saucelabs.com/",
            "order_index": 0,
            "job_creation_time": "2021-04-15T01:23:25Z",
            "load_id": "f2dc8ce42ae21239663a026fae86bec19d20023f",
            "loader_id": "E5B13DE6FE878E6E4D3A617B76A68CE0",
            "error": null
        }
    ]
}
```

</details>

---

### Get Metric Regimes

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/&#123;job_id&#125;/regimes/</code></summary>
<p/>

Returns the starting and ending job counts in the current regime (a set of consecutive tests where the results are unchanged) for each specified metric.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the relevant test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>metric_names</code></td>
     <td><p><small>| QUERY | REQUIRED | ARRAY of STRINGS |</small></p><p>A list of specific metrics values for which you want regime info. See <a href="/performance/one-page#metric-values">Performance Metric Values</a> for a list of supported metrics.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>order_index</code></td>
     <td><p><small>| QUERY | REQUIRED | INTEGER |</small></p><p>Limit results to those beginning with this record number.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>include_baseline</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Specifies whether the regime should include baseline values. Default value is <code>false</code>.</p></td>
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
curl --location --request GET 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/b6bee25245724ddca6b852a7ec49f155/regimes/?order_index=0&metric_names=speedIndex,domContentLoaded,lastVisualChange' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request GET 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/b6bee25245724ddca6b852a7ec49f155/regimes/?order_index=0&metric_names=speedIndex,domContentLoaded,lastVisualChange' | json_pp
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
    <td colSpan='2'>Bad Request.<p/>May contain a specific error message, such as "at least one metric_names parameter is required."</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Job not found.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "speedIndex": [
        {
            "regime_start": 0,
            "regime_end": 0,
            "baseline_url": "/v2/performance/metrics/b6bee25245724ddca6b852a7ec49f155/baseline/?metric_names=speedIndex&order_index=0",
            "active": true
        }
    ],
    "domContentLoaded": [
        {
            "regime_start": 0,
            "regime_end": 0,
            "baseline_url": "/v2/performance/metrics/b6bee25245724ddca6b852a7ec49f155/baseline/?metric_names=domContentLoaded&order_index=0",
            "active": true
        }
    ],
    "lastVisualChange": [
        {
            "regime_start": 0,
            "regime_end": 0,
            "baseline_url": "/v2/performance/metrics/b6bee25245724ddca6b852a7ec49f155/baseline/?metric_names=lastVisualChange&order_index=0",
            "active": true
        }
    ]
}
```
</details>

---

### Acknowlege New Regimes

<details><summary><span className="api post">POST</span> <code>/v2/performance/metrics/&#123;job_id&#125;/regimes/acknowledge/</code></summary>
<p/>

Confirm values in a new regime (point at which a consecutive number of jobs with an unchanged result posts a different result) are acceptable.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>job_id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the relevant test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>order_index</code></td>
     <td><p><small>| QUERY | REQUIRED | INTEGER |</small></p><p>Limit results to those beginning with this record number.</p></td>
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
curl --location --request POST 'https://api.us-west-1.saucelabs.com/v2/performance/metrics/b6bee25245724ddca6b852a7ec49f155/regimes/acknowledge/?order_index=0' | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl --location --request POST 'https://api.eu-central-1.saucelabs.com/v2/performance/metrics/b6bee25245724ddca6b852a7ec49f155/regimes/acknowledge/?order_index=0' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Success.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad Request.<p/>May contain a specific error message, such as "at least one metric_names parameter is required."</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Job not found.</td>
  </tr>
</tbody>
</table>

:::note
A successful response returns no payload.
:::

</details>

---
