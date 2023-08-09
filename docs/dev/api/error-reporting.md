---
id: error-reporting
title: Error Reporting API Endpoints
sidebar_label: Error Reporting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These API endpoints allow you to interact with Error Reporting (Backtrace) functionality.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Project

### Get Project Details

<details><summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;</code></summary>
<p/>

Returns the details of a project.

#### Parameters

<table id="table-api">
  <tbody>
   <tr>
    <td><code>hookId</code></td>
    <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>' | json_pp
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
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
    "id": "621ad1466b1fa36aa4b8b044",
    "name": "Dog CEO",
    "teamId": null,
    "description": "Random dog images",
    "tags": ["dogs", "doggos"],
    "notes": "Collection of open source dog pictures (see https://dog.ceo/dog-api)",
    "type": "project",
    "emailNotifications": ["first.last@example.com"],
    "connectorNotifications": [{
        "WebHook": {
            "params": {
                "url": "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
                "headers": {},
                "content-type": "application/json",
                "template": "{\n    \"eventId\": \"[[${eventId}]]\",\n    \"failuresCount\": [[${failuresCount}]],\n    \"testName\": \"[[${test.name}]]\",\n    \"testId\": \"[[${test.id}]]\",\n    \"projectName\": \"[[${project.name}]]\",\n    \"projectId\": \"[[${project.id}]]\",\n    \"tags\": [\n        [# th:each=\"t,iter : ${tags}\"]\n            \"[[${t}]]\" [# th:if=\"${!iter.last}\"],[/]\n        [/]\n    ]\n}",
                "on_success": false
            }
        }
    }]
}
```

</details>
