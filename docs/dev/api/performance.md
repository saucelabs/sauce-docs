---
id: performance
title: Performance API Methods
sidebar_label: Performance
description: View and  manage front-end performance test data.
---

The Performance REST API methods allow you to manage your front-end performance testing as programmatic data so you can represent them in a custom dashboard that is meaningful for your organization.

`POST	 /v2/performance/metrics/`
### Collect Performance Metrics for a URL

<details><summary><span className="api get">GET</span> <code>/v2/performance/metrics/</code></summary>
<p/>

Retrieves the results of performance tests run by the requesting account for the specified URL and returns the metric values for those tests.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>page_url</code></td>
     <td><p><small>| QUERY | REQUIRED | STRING |</small></p><p>The URL used in the test.</p></td>
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

```jsx title="Sample Request"
curl --location --request POST 'https://api.staging.saucelabs.net/team-management/v1/users/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic USERNAME:ACCESS_KEY' \
--data-raw '{
    "first_name": "Jim",
    "last_name": "Smith",
    "email": "jsmith@icloud.com",
    "username": "jsmith",
    "password": "$m1th*RULES",
    "role": 4,
    "team": "b3de7078b79841b59d2e54127269afe3"
}'
```

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Success. User created.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Unauthorized.</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Bad input.</td>
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
    "id": "631dfdc7c20f499e9f9de19680543c35",
    "username": "jsmith",
    "email": "jsmith@icloud.com",
    "first_name": "Jim",
    "last_name": "Smith",
    "is_active": true,
    "created_at": "2021-04-06T16:35:02.047237Z",
    "updated_at": "2021-04-06T16:35:02.713149Z",
    "teams": [
        {
            "id": "b3de7078b79841b59d2e54127269afe3",
            "name": "Doc-Team",
            "settings": {
                "virtual_machines": 100,
                "real_devices": 0,
                "live_only": true
            },
            "group": {...},
            "is_default": false,
            "org_uuid": "bed0a8a559404117b3d10d3bfff4c8ab"
        }
    ],
    "roles": [
        {
            "name": "team admin",
            "role": 4
        }
    ],
    "is_staff": false,
    "is_superuser": false,
    "user_type": "subaccount",
    "groups": [...],
    "organization": {...},
    "is_organization_admin": false,
    "is_team_admin": true
}
```
</details>

---

`POST	 /v2/performance/metrics/<JOB_ID>`

`POST	 /v2/performance/metrics/<JOB_ID>/assert/`

`GET	 /v2/performance/metrics/<JOB_ID>/baseline/`

`GET	 /v2/performance/metrics/<JOB_ID>/baseline/reset/`

`POST	 /v2/performance/metrics/<JOB_ID>/baseline/reset/`

`GET	 /v2/performance/metrics/<JOB_ID>/discarded/`

`POST	 /v2/performance/metrics/<JOB_ID>/discarded/`

`GET	 /v2/performance/metrics/<JOB_ID>/history/`

`GET	 /v2/performance/metrics/<JOB_ID>/regimes/`

`POST	 /v2/performance/metrics/<JOB_ID>/regimes/acknowledge/`
