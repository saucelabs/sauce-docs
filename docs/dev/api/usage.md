---
id: usage
title: Usage Analytics API Endpoints
sidebar_label: Usage Analytics
description: Retrieve Sauce Labs raw usage analytics data.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the Usage Analytics API methods to retrieve information about your concurrency usage that you can then use to populate a dashboard that is meaningful for your organization.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

### Organization Concurrency

<details>
    <summary>
        <span className="api get">GET</span>
        <code>/usage-analytics/v1/concurrency/org</code>
    </summary>
<p/>
Return information about concurrency usage for organization:
<ul>
<li>maximum, minimum concurrency for given granularity (monthly, weekly, daily, hourly),</li>
<li>teams' share for the organization maximum concurrency for given granularity (in percentage),</li>
<li>current limits.</li>
</ul>
Concurrency data is broken down by resource types for:
<ul>
    <li>
        Virtual Cloud:
            <ul>
                <li>virtual machines,</li>
                <li>mac virtual machines,</li>
                <li>mac arm virtual machines,</li>
                <li>total virtial machines, combining all resource types.</li>
            </ul>
    </li>
    <li>
        Real Device Cloud:
            <ul>
                <li>private devices,</li>
                <li>public devices,</li>
                <li>total virtial machines, combining all resource types.</li>
            </ul>
    </li>
</ul>

#### Parameters

:::note
This call requires <code>org_id</code> parameter.
:::

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
    <td>
        <p><small>| QUERY | OPTIONAL | ARRAY |</small></p>
        <p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p>
        <p>
     <ul>
      <li><code>rdc</code> - Real Device Cloud</li>
      <li><code>vdc</code> - Virtual Device Cloud</li>
    </ul>
    </p>
        Default value is: <code>vdc</code>
    </td>
    </tr>
  </tbody>
    <tbody>
    <tr>
        <td><code>granularity</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results grouped by given granularity:</p>
            <p>
                <ul>
                    <li><code>hourly</code></li>
                    <li><code>weekly</code></li>
                    <li><code>daily</code></li>
                    <li><code>monthly</code></li>
                </ul>
            </p>
            Default value is: <code>daily</code>
        </td>
    </tr>
    </tbody>
    <tbody>
    <tr>
        <td><code>resource_type</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p>
            <p>Return results only for given resource type</p>
            <p/>
            For the Virtual Could tests:
            <ul>
                <li><code>virtual_machine</code></li>
                <li><code>mac_virtual_machine</code></li>
                <li><code>mac_arm_virtual_machine</code></li>
                <li><code>total_virtual_machine</code></li>
            </ul>
            For the Real Devices Could tests:
            <ul>
                <li><code>private_real_device</code></li>
                <li><code>public_real_device</code></li>
                <li><code>total_real_device</code></li>
            </ul>
        </td>
    </tr>
    </tbody>
  <tbody>
    <tr>
     <td><code>start_date</code></td>
       <td><p><small>| QUERY | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end_date</code></td>
       <td><p><small>| QUERY | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/usage-analytics/v1/concurrency/org?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/usage-analytics/v1/concurrency/org?org_id=<org_id>" | json_pp
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
  "by_org": {
    "org_id": "string",
    "data": [
      {
        "time": "string",
        "values": [
          {
            "resource_type": "virtual_machine",
            "concurrency": {
              "max": 0,
              "min": 0,
              "max_org_concurrency_team_share": [
                {
                  "team_id": "string",
                  "pct": 0,
                  "avg_concurrency": 0
                }
              ]
            },
            "limits": {
              "total": 0,
              "resource": 0,
              "total_original": 0,
              "resource_original": 0
            }
          }
        ]
      }
    ]
  }
}
```

</details>

---

### Teams Concurrency

<details>
    <summary>
        <span className="api get">GET</span>
        <code>/usage-analytics/v1/concurrency/teams</code>
    </summary>
<p/>
Return information about concurrency usage for teams:
<ul>
<li>maximum, minimum concurrency for given granularity (monthly, weekly, daily, hourly),</li>
<li>current limits.</li>
</ul>
Concurrency data is broken down by resource types for:
<ul>
    <li>
        Virtual Cloud:
            <ul>
                <li>virtual machines,</li>
                <li>mac virtual machines,</li>
                <li>mac arm virtual machines,</li>
                <li>total virtial machines, combining all resource types.</li>
            </ul>
    </li>
    <li>
        Real Device Cloud:
            <ul>
                <li>private devices,</li>
                <li>public devices,</li>
                <li>total virtial machines, combining all resource types.</li>
            </ul>
    </li>
</ul>

#### Parameters

:::note
This call requires <code>org_id</code> and <code>team_id</code> parameters.
:::

<table id="table-api">
  <tbody>
    <tr>
     <td><code>org_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>org_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>team_id</code></td>
       <td><p><small>| QUERY| REQUIRED | STRING |</small></p><p>Return results only for the specified <code>team_id</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>source</code></td>
    <td>
        <p><small>| QUERY | OPTIONAL | ARRAY |</small></p>
        <p>Return results only for tests run in virtual device cloud or real device cloud. Supported values are:</p>
        <p>
         <ul>
          <li><code>rdc</code> - Real Device Cloud</li>
          <li><code>vdc</code> - Virtual Device Cloud</li>
        </ul>
        </p>
        Default value is: <code>vdc</code>
    </td>
    </tr>
  </tbody>
    <tbody>
    <tr>
        <td><code>granularity</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results grouped by given granularity:</p>
            <p>
                <ul>
                    <li><code>hourly</code></li>
                    <li><code>weekly</code></li>
                    <li><code>daily</code></li>
                    <li><code>monthly</code></li>
                </ul>
            </p>
            Default value is: <code>daily</code>
        </td>
    </tr>
    </tbody>
    <tbody>
    <tr>
        <td><code>resource_type</code></td>
        <td>
            <p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Return results only for given resource type</p>
            <p/>
            For the Virtual Could tests:
            <ul>
                <li><code>virtual_machine</code></li>
                <li><code>mac_virtual_machine</code></li>
                <li><code>mac_arm_virtual_machine</code></li>
                <li><code>total_virtual_machine</code></li>
            </ul>
            For the Real Devices Could tests:
            <ul>
                <li><code>private_real_device</code></li>
                <li><code>public_real_device</code></li>
                <li><code>total_real_device</code></li>
            </ul>
        </td>
    </tr>
    </tbody>
  <tbody>
    <tr>
     <td><code>start_date</code></td>
       <td><p><small>| QUERY | DATE |</small></p><p>The starting date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>end_date</code></td>
       <td><p><small>| QUERY | DATE |</small></p><p>The ending date of the period during which the test runs executed, in <code>YYYY-MM-DDTHH:mm:ssZ</code> (UTC) format.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/usage-analytics/v1/concurrency/teams?org_id=<org_id>" | json_pp
```

</TabItem>
<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/usage-analytics/v1/concurrency/teams?org_id=<org_id>" | json_pp
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
  "by_team": [
    {
      "team_id": "string",
      "data": [
        {
          "time": "string",
          "values": [
            {
              "resource_type": "virtual_machine",
              "concurrency": {
                "max": 0,
                "min": 0,
                "max_org_concurrency_team_share": [
                  {
                    "team_id": "string",
                    "pct": 0,
                    "avg_concurrency": 0
                  }
                ]
              },
              "limits": {
                "total": 0,
                "resource": 0,
                "total_original": 0,
                "resource_original": 0
              }
            }
          ]
        }
      ]
    }
  ]
}
```
</details>
