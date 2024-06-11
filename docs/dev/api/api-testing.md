---
id: api-testing
title: API Testing API Endpoints
sidebar_label: API Testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These API endpoints allow you to interact with Sauce Labs API Testing functionality. You can execute tests, view analytics, retrieve project information, and more.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Project

### Get Project Details

<details>
    <summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;</code></summary>
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

## Test

### List All Tests in a Project

<details>
<summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests</code></summary>
<p/>

Returns a list of all tests within a project.

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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests' | json_pp
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
</table>

```jsx title="Sample Response"
[
   {
      "id":"621ad2cefd18a5416b299e98",
      "name":"List all dog breeds",
      "description":"Returns a list of all dog breeds",
      "lastModified":"2022-02-27T07:02:35Z",
      "tags":[
         "dogs",
         "doggos"
      ],
      "user":{
         "id":"21b27f2d2aaa4a5c88c8c19df25857d6",
         "name":"$SAUCE_USERNAME"
      },
      "complete":true,
      "status":{
         "success":true,
         "lastUpdate":"2022-02-27T08:58:01Z"
      },
      "schedules":{
         "total":1,
         "active":1
      }
   },
   {
      "id":"621b20e8fd17a5416b299e9f",
      "name":"Get all retriever sub-breeds: retrievers",
      "description":"Returns an array of all the sub-breeds from a breed",
      "lastModified":"2022-02-27T07:05:25Z",
      "tags":[
         "dogs",
         "retrievers"
      ],
      "user":{
         "id":"21b27f2d2aaa4a5c88c8c19df25857d6",
         "name":"$SAUCE_USERNAME"
      },
      "complete":true,
      "status":{
         "success":true,
         "lastUpdate":"2022-02-27T09:47:33Z"
      },
      "schedules":{
         "total":1,
         "active":1
      }
   }
]
```

</details>

---

### Upload a Test

<details>
    <summary><span className="api put">PUT</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests</code></summary>
<p/>

Uploads a new test, which you need to provide in the Request Body, to the Sauce Labs API Testing cloud. You can also use this method to modify (overwrite) an existing test.

#### Parameters

<table id="table-api">
  <tbody>
  <tr>
   <td><code>hookId</code></td>
   <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
   <td><code>name</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The name of a test. If it's the same as an existing one, it will be overwritten.</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
   <td><code>description</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>Description for your Test. This parameter is required, however, the field can be left empty.</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
   <td><code>tags</code></td>
     <td><p><small>| BODY | OPTIONAL | ARRAY |</small></p><p>The set of distinguishing tags for your Test.</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
   <td><code>input</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The input of your API Test. You can obtain this by going into a Test > <strong>Compose</strong> section > toggle <strong>Code View</strong>.</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
   <td><code>unit</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>Must contain the unit of the test you want to upload to the cloud. You can obtain this by going into a Test > <strong>Compose </strong>section > toggle <strong>Code View</strong>.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "description": "Returns an array of all the sub-breeds from a breed",
    "tags": ["dogs", "retrievers"],
    "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
    "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n"
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "description": "Returns an array of all the sub-breeds from a breed",
    "tags": ["dogs", "retrievers"],
    "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
    "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n"
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "published": {
        "id": "621db955a9f2b22a5a89638f",
        "name": "Get all retriever sub-breeds",
        "description": "Returns an array of all the sub-breeds from a breed",
        "lastModified": "2022-03-01T06:12:37Z",
        "tags": ["dogs", "retrievers"],
        "user": {
            "id": "21b27f2d2aaa4a5c88c8c19df25857d6",
            "name": "$SAUCE_USERNAME"
        },
        "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
        "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n",
        "complete": true
    }
}
```

</details>

---

### Get Test Details

<details>
<summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/&#123;testId&#125;</code></summary>
<p/>

Returns the details of the specified test.

#### Parameters

<table id="table-api">
  <tbody>
  <tr>
    <td><code>hookId</code></td>
    <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
  </tr>
 </tbody>
 <tbody>
  <tr>
   <td><code>testId</code></td>
   <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The test ID. To find it, go to your project > <strong>Tests</strong> tab > Hover over your test and click <strong>Edit</strong> > Grab the test ID from your browser's URL (<code>https://app.saucelabs.com/api-testing/project/&#123;projectId&#125;/test/<strong>&#123;testId&#125;</strong>/compose</code>).</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/<testId>' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/<testId>' | json_pp
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
</table>

```jsx title="Sample Response"
{
    "published": {
        "id": "621b20e8fd17a5416b299e9f",
        "name": "Get all retriever sub-breeds",
        "description": "Returns an array of all the sub-breeds from a breed",
        "lastModified": "2022-02-27T07:05:25Z",
        "tags": ["dogs", "retrievers"],
        "user": {
            "id": "21b27f2d2aaa4a5c88c8c19df25857d6",
            "name": "$SAUCE_USERNAME"
        },
        "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
        "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n",
        "complete": true
    },
    "workingCopy": {
        "id": "621b216ca9f2b22a5a89633f",
        "user": {
            "id": "21b27f2d2aaa4a5c88c8c19df25857d7",
            "name": "$SAUCE_USERNAME"
        },
        "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
        "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n",n=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
        "lastModified": "2022-02-27T06:59:56Z"
    }
}
```

</details>

## Test Execution

When you run an API test using one of these methods, you'll receive a response immediately that contains general test details.

### Run a Test

<details>
<summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/&#123;testId&#125;/_run</code></summary>
<p></p>

Runs a single test on Sauce Labs API Testing, creates a Log in your Dashboard, and sends notifications, the same way it would when you run a test through the UI.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>testId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The test ID. To find it, go to your project > <strong>Tests</strong> tab > Hover over your test and click <strong>Edit</strong> > Grab the test ID from your browser's URL (<code>https://app.saucelabs.com/api-testing/project/&#123;projectId&#125;/test/<strong>&#123;testId&#125;</strong>/compose</code>).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel ID for running tests using <strong>Sauce Connect Proxy.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelOwner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel owner for running tests using <strong>Sauce Connect Proxy. It is recommended when using unnamed tunnels.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>params</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Specifies the environment variables you want to use in your test as key-value pairs. </p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/<testId>/_run' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
      }
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/<testId>/_run' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "contextIds": ["7492bb92-e83d-42eb-85a4-e55c1b53eb93"],
    "eventIds": ["621b2a29fd11a5416b299ea2"],
    "taskId": "a60c3f61-caa6-4261-b27e-f4eb2e218c70",
    "testIds": ["621b20e8fd17a6416b299e9f"]
}
```

</details>

---

### Run All Tests

<details>
<summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_run-all</code></summary>
<p/>

Runs all tests in a project.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel ID for running tests using <strong>Sauce Connect Proxy.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelOwner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel owner for running tests using <strong>Sauce Connect Proxy. It is recommended when using unnamed tunnels.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>params</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Specifies the environment variables you want to use in your test as key-value pairs. </p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_run-all' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
      }
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_run-all' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "contextIds": ["0d129822-13bc-42b5-96bf-c64d1d7fe6b6", "7cdc357b-ad58-4c62-9a8d-e21b376f4773"],
    "eventIds": ["621b2bad6b1fa36aa4b8b04f", "621b2bad6b1fa36aa4b8b050"],
    "taskId": "23664b46-bb90-4823-96d1-72586fb4b47b",
    "testIds": ["621ad2cefd18a5416b299e98", "621b20e8fd17a5416b299e9f"]
}
```

</details>

---

### Run Tests by Tag

<details>
<summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_tag/&#123;tag&#125;/_run</code></summary>
<p/>

Runs all tests in a project matching a tag.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tag</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>A test tag, which you can find in your project's <strong>Tests</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel ID for running tests using <strong>Sauce Connect Proxy.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelOwner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel owner for running tests using <strong>Sauce Connect Proxy. It is recommended when using unnamed tunnels.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>params</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Specifies the environment variables you want to use in your test as key-value pairs. </p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_tag/<tag>/_run' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
      }
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3<hookId>/tests/_tag/<tag>/_run' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "contextIds": ["47d3f4c1-3209-4893-8156-450ef4c570c6"],
    "eventIds": ["621b2dac6b1fa36aa3b8b051"],
    "taskId": "26d8e4b1-24b2-421a-ba03-4a0b2b956112",
    "testIds": ["621ad2cefd17a5426b299e98"]
}
```

</details>

---

### Execute a Test

<details>
<summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_exec</code></summary>
<p></p>

Executes the test you send in the request body and saves the results into the cloud. It will create a Log in the project **Dashboard**, but the test itself will not populate in your project's **Tests** section.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The name of the test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tags</code></td>
       <td><p><small>| BODY | OPTIONAL | ARRAY |</small></p><p>The set of distinguishing tags for your test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>input</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The input section of your test in the same format as in Test > <strong>Compose</strong> section > <strong>Input</strong> section > toggle <strong>Code View</strong>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>unit</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>Must contain the unit of the test you want to execute in the same format as in Test > <strong>Compose</strong> section > toggle <strong>Code View</strong>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>params</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Specifies the environment variables you want to use in your test as key-value pairs. </p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel ID for running tests using <strong>Sauce Connect Proxy.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelOwner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel owner for running tests using <strong>Sauce Connect Proxy. It is recommended when using unnamed tunnels.</strong></p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_exec'
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "tags": ["dogs", "retrievers"],
    "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
    "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n",
    "params": {}
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_exec'
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "tags": ["dogs", "retrievers"],
    "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
    "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n",
    "params": {}
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "contextIds": ["28b0fe41-5abc-46bb-bdb3-248bf5d1a067"],
    "eventIds": ["621dd63b6b1fa36aa4b8b1d0"],
    "taskId": "7be1dec0-2de2-4fae-b578-a2b06641275a",
    "testIds": ["28b0fe41-5abc-46bb-bdb3-248bf5d1a067"]
}
```

</details>

## Test Execution (synchronous)

When you run an API test synchronously, you'll receive a response containing granular test details. These API methods will wait until all results are available before showing them.

### Run a Test Synchronously

<details>
<summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/&#123;testId&#125;/_run-sync</code></summary>
<p></p>

Runs a single test synchronously.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>testId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The test ID. To find it, go to your project > <strong>Tests</strong> tab > Hover over your test and click <strong>Edit</strong> > Grab the test ID from your browser's URL (<code>https://app.saucelabs.com/api-testing/project/&#123;projectId&#125;/test/<strong>&#123;testId&#125;</strong>/compose</code>).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>format</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specified the data format returned. Available values are <code>json</code> and <code>junit</code>. The default value is <code>json</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel ID for running tests using <strong>Sauce Connect Proxy.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelOwner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel owner for running tests using <strong>Sauce Connect Proxy. It is recommended when using unnamed tunnels.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>params</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Specifies the environment variables you want to use in your test as key-value pairs. </p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/<testId>/_run-sync?format=json' -H 'Content-Type: application/json'\
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
      }
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/<testId>/_run-sync?format=json' -H 'Content-Type: application/json' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[
   {
      "id":"621b320afd17a5416b299ea3",
      "events":[
         {
            "date":1645949450067,
            "events":[
               {
                  "date":1645949450068,
                  "events":[
                     {
                        "date":1645949450068,
                        "events":[
                           {
                              "action":"get",
                              "expression":"https://dog.ceo/api/breed/retriever/list",
                              "footprint":"dog.ceo/api/breed/retriever/list",
                              "metrics":{
                                 "fetch":1,
                                 "latency":322,
                                 "overall":338
                              },
                              "requestDetails":"GET https://dog.ceo/api/breed/retriever/list\n\nGET /api/breed/retriever/list HTTP/1.1\nhost: dog.ceo\nUser-Agent: SauceLabs/API-Fortress - WSTestJS\naccept-encoding: gzip, deflate\n\n",
                              "status":200,
                              "success":true
                           },
                           {
                              "action":"assert-equals",
                              "expression":"payload_response.headers['Content-Type']==application/json",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"payload",
                              "success":true
                           },
                           {
                              "action":"assert-is",
                              "expression":"payload.message is array",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "root":"payload.message",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "root":"payload.message",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "root":"payload.message",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "root":"payload.message",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"payload.status",
                              "success":true
                           }
                        ],
                        "kind":"sequence"
                     }
                  ],
                  "kind":"inputSet",
                  "name":"default"
               }
            ],
            "inputBatteryName":"default",
            "kind":"inputBattery"
         }
      ],
      "tags":[
         "dogs",
         "retrievers"
      ],
      "criticalFailures":[

      ],
      "httpFailures":[

      ],
      "facts":{

      },
      "date":1645949450067,
      "test":{
         "name":"Get all retriever sub-breeds",
         "id":"621b20e8fd17v5416b299e9f"
      },
      "failuresCount":0,
      "warningsCount":0,
      "compressed":false,
      "run":{
         "name":"",
         "id":""
      },
      "company":{
         "name":"",
         "id":"7fb25570b4064716b9v6daae1a846790"
      },
      "project":{
         "name":"Dog CEO",
         "id":"621ad1466b1fa36aa4b8b044"
      },
      "contextId":"856c431c-4e1a-46c2-9644-c084e7c36b61",
      "temp":false,
      "expireAt":null,
      "executionTimeSeconds":1,
      "taskId":"693ddvb2-9482-4c51-95bf-52b3d70f5236",
      "agent":"wstestjs",
      "mode":"ondemand",
      "buildId":"",
      "exception":""
   }
]
```

</details>

---

### Run All Tests Synchronously

<details>
<summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_run-all-sync</code></summary>
<p/>

Runs all tests in a project synchronously.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>format</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the data format returned. Available values are <code>json</code> and <code>junit</code>. The default value is <code>json</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel ID for running tests using <strong>Sauce Connect Proxy.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelOwner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel owner for running tests using <strong>Sauce Connect Proxy. It is recommended when using unnamed tunnels.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>params</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Specifies the environment variables you want to use in your test as key-value pairs. </p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_run-all-sync?format=json' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
      }
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_run-all-sync?format=json' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[{
    "id": "621b328ea9f2b22a5a896330",
    "events": [{
        "date": 1645949582568,
        "events": [{
            "date": 1645949582567,
            "events": [{
                "date": 164599582567,
                "events": [{
                    "action": "get",
                    "expression": "https://dog.ceo/api/breed/retriever/list",
                    "footprint": "dog.ceo/api/breed/retriever/list",
                    "metrics": {
                        "fetch": 1,
                        "latency": 319,
                        "overall": 331
                    },
                    "requestDetails": "GET https://dog.ceo/api/breed/retriever/list\n\nGET /api/breed/retriever/list HTTP/1.1\nhost: dog.ceo\nUser-Agent: SauceLabs/API-Fortress - WSTestJS\naccept-encoding: gzip, deflate\n\n",
                    "status": 200,
                    "success": true
                }, {
                    "action": "assert-equals",
                    "expression": "payload_response.headers['Content-Type']==application/json",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "payload",
                    "success": true
                }, {
                    "action": "assert-is",
                    "expression": "payload.message is array",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true
                },
                // more test details... (truncated)
                ],
                "kind": "sequence"
            }],
            "kind": "inputSet",
            "name": "default"
        }],
        "inputBatteryName": "default",
        "kind": "inputBattery"
    }],
    "tags": ["dogs", "retrievers"],
    "criticalFailures": [],
    "httpFailures": [],
    "facts": {},
    "date": 1645949582568,
    "test": {
        "name": "Get all retriever sub-breeds: retrievers",
        "id": "621b20e8fd17a5416b299e9f"
    },
    "failuresCount": 0,
    "warningsCount": 0,
    "compressed": false,
    "run": {
        "name": "",
        "id": ""
    },
    "company": {
        "name": "",
        "id": "7fb25571b4064716b9b6daae1a846790"
    },
    "project": {
        "name": "Dog CEO",
        "id": "621ad1466b1fa36aa4b8b034"
    },
    "contextId": "cededd1e-252f-4482-8783-09b111e3b4bc",
    "temp": false,
    "expireAt": null,
    "executionTimeSeconds": 1,
    "taskId": "5871d8fe-822f-4fcc-9369-c7ebe4e5b48c",
    "agent": "wstestjs",
    "mode": "ondemand",
    "buildId": "",
    "exception": ""
}, {
    "id": "621b328ea9f2b22a5b89633f",
    "events": [{
        "date": 1645949582593,
        "events": [{
            "date": 1645949582593,
            "events": [{
                "date": 1645949582593,
                "events": [{
                    "action": "get",
                    "expression": "https://dog.ceo/api/breeds/list/all",
                    "footprint": "dog.ceo/api/breeds/list/all",
                    "metrics": {
                        "fetch": 1,
                        "latency": 342,
                        "overall": 353
                    },
                    "requestDetails": "GET https://dog.ceo/api/breeds/list/all\n\nGET /api/breeds/list/all HTTP/1.1\nhost: dog.ceo\nUser-Agent: SauceLabs/API-Fortress - WSTestJS\naccept-encoding: gzip, deflate\n\n",
                    "status": 200,
                    "success": true
                }, {
                    "action": "assert-equals",
                    "expression": "payload_response.headers['Content-Type']==application/json",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "payload",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "payload.message",
                    "success": true
                }, {
                    "action": "assert-is",
                    "expression": "payload.message.affenpinscher is array",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "payload.message.affenpinscher",
                    "success": true
                },
                    "action": "assert-exists",
                    "expression": "payload.status",
                    "success": true
                }
                // more test details... (truncated)
                ],
                "kind": "sequence"
            }],
            "kind": "inputSet",
            "name": "default"
        }],
        "inputBatteryName": "default",
        "kind": "inputBattery"
    }],
    "tags": ["dogs", "doggos"],
    "criticalFailures": [],
    "httpFailures": [],
    "facts": {},
    "date": 1645949582593,
    "test": {
        "name": "List all dog breeds",
        "id": "621ad2cefd18a5416b299e98"
    },
    "failuresCount": 0,
    "warningsCount": 0,
    "compressed": false,
    "run": {
        "name": "",
        "id": ""
    },
    "company": {
        "name": "",
        "id": "7fb25570b4064716b9b6daae2a846790"
    },
    "project": {
        "name": "Dog CEO",
        "id": "621ad1466b1fa36aa4b8b044"
    },
    "contextId": "ccb882a5-2404-47bb-a410-a28606bb2545",
    "temp": false,
    "expireAt": null,
    "executionTimeSeconds": 1,
    "taskId": "5871d8fe-821f-4fcc-9369-c7ebf4e5b48c",
    "agent": "wstestjs",
    "mode": "ondemand",
    "buildId": "",
    "exception": ""
}]
```

</details>

---

### Run Tests by Tag Synchronously

<details>
<summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_tag/&#123;tag&#125;/_run-sync</code></summary>
<p/>

Runs all tests in a project matching a tag synchronously.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>tag</code></td>
    <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>A test tag, which you can find in your project's <strong>Tests</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>format</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the data format returned. Available values are <code>json</code> and <code>junit</code>. The default value is <code>json</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel ID for running tests using <strong>Sauce Connect Proxy.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelOwner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel owner for running tests using <strong>Sauce Connect Proxy. It is recommended when using unnamed tunnels.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>params</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Specifies the environment variables you want to use in your test as key-value pairs. </p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>5/tests/_tag/<tag>/_run-sync?format=json' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
      }
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_tag/<tag>/_run-sync?format=json' \
-H 'Content-Type: application/json' \
-d '{
      "params": {
        "envVar1": "foo",
        "envVar2": "bar"
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[
   {
      "id":"621b3d60a9f2b22a5a896344",
      "events":[
         {
            "date":1545952352117,
            "events":[
               {
                  "date":1545952352117,
                  "events":[
                     {
                        "date":1545952352117,
                        "events":[
                           {
                              "action":"get",
                              "expression":"https://dog.ceo/api/breed/retriever/list",
                              "footprint":"dog.ceo/api/breed/retriever/list",
                              "metrics":{
                                 "fetch":1,
                                 "latency":330,
                                 "overall":343
                              },
                              "requestDetails":"GET https://dog.ceo/api/breed/retriever/list\n\nGET /api/breed/retriever/list HTTP/1.1\nhost: dog.ceo\nUser-Agent: SauceLabs/API-Fortress - WSTestJS\naccept-encoding: gzip, deflate\n\n",
                              "status":200,
                              "success":true
                           },
                           {
                              "action":"assert-equals",
                              "expression":"payload_response.headers['Content-Type']==application/json",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"payload",
                              "success":true
                           },
                           {
                              "action":"assert-is",
                              "expression":"payload.message is array",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "root":"payload.message",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "root":"payload.message",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "root":"payload.message",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "root":"payload.message",
                              "success":true
                           },
                           {
                              "action":"assert-exists",
                              "expression":"payload.status",
                              "success":true
                           }
                        ],
                        "kind":"sequence"
                     }
                  ],
                  "kind":"inputSet",
                  "name":"default"
               }
            ],
            "inputBatteryName":"default",
            "kind":"inputBattery"
         }
      ],
      "tags":[
         "dogs",
         "retrievers"
      ],
      "criticalFailures":[

      ],
      "httpFailures":[

      ],
      "facts":{

      },
      "date":1645952352117,
      "test":{
         "name":"Get all retriever sub-breeds",
         "id":"621b20e8fd17a5416b299e9f"
      },
      "failuresCount":0,
      "warningsCount":0,
      "compressed":false,
      "run":{
         "name":"",
         "id":""
      },
      "company":{
         "name":"",
         "id":"7fb25570b4064716b9b6daae2a846890"
      },
      "project":{
         "name":"Dog CEO",
         "id":"621ad1466b1fa36aa4b8b044"
      },
      "contextId":"6cb1d39a-0964-3dfb-b595-7eabb3db1840",
      "temp":false,
      "expireAt":null,
      "executionTimeSeconds":1,
      "taskId":"35bc67c7-c8ec-4686-b30d-47cc48e094hf",
      "agent":"wstestjs",
      "mode":"ondemand",
      "buildId":"",
      "exception":""
   }
]
```

</details>

---

### Execute a Test Synchronously

<details>
<summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_exec-sync</code></summary>
<p></p>

Executes synchronously the test you send in the request body and saves the results into the cloud. It will create a Log in the project **Dashboard**, however, the test itself will not populate in your project's **Tests** section.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>name</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The name of the test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tags</code></td>
       <td><p><small>| BODY | OPTIONAL | ARRAY |</small></p><p>The set of distinguishing tags for your test.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>input</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The input section of your test in the same format as in Test > <strong>Compose</strong> section > <strong>Input</strong> section > toggle <strong>Code View</strong>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>unit</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>Must contain the unit of the test you want to execute in the same format as in Test > <strong>Compose</strong> section > toggle <strong>Code View</strong>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
    <td><code>params</code></td>
      <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Specifies the environment variables you want to use in your test as key-value pairs. </p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel ID for running tests using <strong>Sauce Connect Proxy.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>tunnelOwner</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies your tunnel owner for running tests using <strong>Sauce Connect Proxy. It is recommended when using unnamed tunnels.</strong></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>format</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Specifies the data format returned. Available values are <code>json</code> and <code>junit</code>. The default value is <code>json</code></p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_exec-sync'
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "tags": ["dogs", "retrievers"],
    "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
    "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n",
    "params": {}
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/tests/_exec-sync'
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "tags": ["dogs", "retrievers"],
    "unit": "assertions:\n  - id: get\n    children:\n      - id: header\n        name: key\n        value: ABC123\n    url: ${protocol}${domain}${endpoint}\n    var: payload\n    mode: json\n  - id: assert-equals\n    expression: payload_response.headers['Content-Type']\n    value: application/json; charset=utf-8\nconfigs: []",
    "input": "- id: global\n  children:\n    - id: variable\n      name: protocol\n      value: http://\n    - id: variable\n      name: domain\n      value: demoapi.apifortress.com\n    - id: variable\n      name: endpoint\n      value: /api/retail/product\n- id: sets\n  children:\n    - id: set\n      children: []\n      name: default\n",
    "params": {}
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
    <td><code>401</code></td>
    <td colSpan='2'>Authentication error.</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
[
   {
      "id":"621dd85d6b1fa36aa4b8b1d1",
      "events":[
         {
            "date":1646122845550,
            "events":[
               {
                  "date":1646122845550,
                  "events":[
                     {
                        "date":1646122845550,
                        "events":[
                           {
                              "action":"get",
                              "expression":"https://saucelabs.com/rest/v1/public/tunnels/info/versions",
                              "footprint":"saucelabs.com/rest/v1/public/tunnels/info/versions",
                              "metrics":{
                                 "fetch":1,
                                 "latency":137,
                                 "overall":162
                              },
                              "requestDetails":"GET https://saucelabs.com/rest/v1/public/tunnels/info/versions\n\nGET /rest/v1/public/tunnels/info/versions HTTP/1.1\nhost: saucelabs.com\nUser-Agent: SauceLabs/API-Fortress - WSTestJS\naccept-encoding: gzip, deflate\n\n",
                              "status":200,
                              "success":true
                           },
                           {
                              "action":"assert-equals",
                              "expression":"payload_response.headers['Content-Type']==application/json",
                              "foundValue":"application/json; charset=utf-8",
                              "level":0,
                              "snapshot":{
                                 "domain":"dog.ceo",
                                 "endpoint":"/api/breed/retriever/list",
                                 "payload_response":{
                                    "headers":[
                                       {
                                          "name":"server",
                                          "value":"nginx"
                                       },
                                       {
                                          "name":"date",
                                          "value":"Tue, 01 Mar 2022 08:20:45 GMT"
                                       },
                                       {
                                          "name":"content-type",
                                          "value":"application/json; charset=utf-8"
                                       },
                                       {
                                          "name":"content-length",
                                          "value":"617"
                                       },
                                       {
                                          "name":"connection",
                                          "value":"close"
                                       },
                                       {
                                          "name":"x-ratelimit-limit",
                                          "value":"10"
                                       },
                                       {
                                          "name":"x-ratelimit-remaining",
                                          "value":"9"
                                       },
                                       {
                                          "name":"x-ratelimit-reset",
                                          "value":"60"
                                       },
                                       {
                                          "name":"vary",
                                          "value":"*"
                                       },
                                       {
                                          "name":"cache-control",
                                          "value":"no-cache"
                                       },
                                       {
                                          "name":"x-sl-request-id",
                                          "value":"adc111d8b5cc4dde89f64ebca253e1aa"
                                       },
                                       {
                                          "name":"x-envoy-upstream-service-time",
                                          "value":"90"
                                       },
                                       {
                                          "name":"x-backend",
                                          "value":"tunnel-resto"
                                       },
                                       {
                                          "name":"x-frame-options",
                                          "value":"SAMEORIGIN"
                                       },
                                       {
                                          "name":"x-content-type-options",
                                          "value":"nosniff"
                                       },
                                       {
                                          "name":"x-xss-protection",
                                          "value":"1; mode=block"
                                       },
                                       {
                                          "name":"strict-transport-security",
                                          "value":"max-age=63072000; includeSubDomains"
                                       }
                                    ],
                                    "statusCode":"200"
                                 },
                                 "payload_source":"a2c6057726bf89ba6bbfccbb64ac0e4754535b9b2774cb393c16070bed947966",
                                 "protocol":"https://"
                              },
                              "success":false
                           },
                           {
                              "action":"assert-exists",
                              "expression":"payload",
                              "success":true
                           },
                           {
                              "action":"assert-is",
                              "expression":"payload.message is array",
                              "level":0,
                              "snapshot":{
                                 "domain":"dog.ceo",
                                 "endpoint":"/api/breed/retriever/list",
                                 "payload_response":{
                                    "headers":[
                                       {
                                          "name":"server",
                                          "value":"nginx"
                                       },
                                       {
                                          "name":"date",
                                          "value":"Tue, 01 Mar 2022 08:20:45 GMT"
                                       },
                                       {
                                          "name":"content-type",
                                          "value":"application/json; charset=utf-8"
                                       },
                                       {
                                          "name":"content-length",
                                          "value":"617"
                                       },
                                       {
                                          "name":"connection",
                                          "value":"close"
                                       },
                                       {
                                          "name":"x-ratelimit-limit",
                                          "value":"10"
                                       },
                                       {
                                          "name":"x-ratelimit-remaining",
                                          "value":"9"
                                       },
                                       {
                                          "name":"x-ratelimit-reset",
                                          "value":"60"
                                       },
                                       {
                                          "name":"vary",
                                          "value":"*"
                                       },
                                       {
                                          "name":"cache-control",
                                          "value":"no-cache"
                                       },
                                       {
                                          "name":"x-sl-request-id",
                                          "value":"adc111d8a5cc4dde89f64ebca253e1aa"
                                       },
                                       {
                                          "name":"x-envoy-upstream-service-time",
                                          "value":"90"
                                       },
                                       {
                                          "name":"x-backend",
                                          "value":"tunnel-resto"
                                       },
                                       {
                                          "name":"x-frame-options",
                                          "value":"SAMEORIGIN"
                                       },
                                       {
                                          "name":"x-content-type-options",
                                          "value":"nosniff"
                                       },
                                       {
                                          "name":"x-xss-protection",
                                          "value":"1; mode=block"
                                       },
                                       {
                                          "name":"strict-transport-security",
                                          "value":"max-age=63072000; includeSubDomains"
                                       }
                                    ],
                                    "statusCode":"200"
                                 },
                                 "payload_source":"a2c6057726bf89ba6bbfccbb64ac0e4854535b9b2774cb393c16070bed947966",
                                 "protocol":"https://"
                              },
                              "success":false
                           },
                           {
                              "action":"assert-exists",
                              "expression":"_1",
                              "level":0,
                              "root":"payload.message",
                              "snapshot":{
                                 "domain":"dog.ceo",
                                 "endpoint":"/api/breed/retriever/list",
                                 "payload_response":{
                                    "headers":[
                                       {
                                          "name":"server",
                                          "value":"nginx"
                                       },
                                       {
                                          "name":"date",
                                          "value":"Tue, 01 Mar 2022 08:20:45 GMT"
                                       },
                                       {
                                          "name":"content-type",
                                          "value":"application/json; charset=utf-8"
                                       },
                                       {
                                          "name":"content-length",
                                          "value":"617"
                                       },
                                       {
                                          "name":"connection",
                                          "value":"close"
                                       },
                                       {
                                          "name":"x-ratelimit-limit",
                                          "value":"10"
                                       },
                                       {
                                          "name":"x-ratelimit-remaining",
                                          "value":"9"
                                       },
                                       {
                                          "name":"x-ratelimit-reset",
                                          "value":"60"
                                       },
                                       {
                                          "name":"vary",
                                          "value":"*"
                                       },
                                       {
                                          "name":"cache-control",
                                          "value":"no-cache"
                                       },
                                       {
                                          "name":"x-sl-request-id",
                                          "value":"adc211d8a5cc4dde89f64ebca253e1aa"
                                       },
                                       {
                                          "name":"x-envoy-upstream-service-time",
                                          "value":"90"
                                       },
                                       {
                                          "name":"x-backend",
                                          "value":"tunnel-resto"
                                       },
                                       {
                                          "name":"x-frame-options",
                                          "value":"SAMEORIGIN"
                                       },
                                       {
                                          "name":"x-content-type-options",
                                          "value":"nosniff"
                                       },
                                       {
                                          "name":"x-xss-protection",
                                          "value":"1; mode=block"
                                       },
                                       {
                                          "name":"strict-transport-security",
                                          "value":"max-age=63072000; includeSubDomains"
                                       }
                                    ],
                                    "statusCode":"200"
                                 },
                                 "payload_source":"a2c6057722bf89ba6bbfccbb64ac0e4754535b9b2774cb393c16070bed947966",
                                 "protocol":"https://"
                              },
                              "success":false
                           },
                           {
                              "action":"assert-exists",
                              "expression":"payload.status",
                              "level":0,
                              "snapshot":{
                                 "domain":"dog.ceo",
                                 "endpoint":"/api/breed/retriever/list",
                                 "payload_response":{
                                    "headers":[
                                       {
                                          "name":"server",
                                          "value":"nginx"
                                       },
                                       {
                                          "name":"date",
                                          "value":"Tue, 01 Mar 2022 08:20:45 GMT"
                                       },
                                       {
                                          "name":"content-type",
                                          "value":"application/json; charset=utf-8"
                                       },
                                       {
                                          "name":"content-length",
                                          "value":"617"
                                       },
                                       {
                                          "name":"connection",
                                          "value":"close"
                                       },
                                       {
                                          "name":"x-ratelimit-limit",
                                          "value":"10"
                                       },
                                       {
                                          "name":"x-ratelimit-remaining",
                                          "value":"9"
                                       },
                                       {
                                          "name":"x-ratelimit-reset",
                                          "value":"60"
                                       },
                                       {
                                          "name":"vary",
                                          "value":"*"
                                       },
                                       {
                                          "name":"cache-control",
                                          "value":"no-cache"
                                       },
                                       {
                                          "name":"x-sl-request-id",
                                          "value":"adc111d8a5cc4dde89f64ebca253e1aa"
                                       },
                                       {
                                          "name":"x-envoy-upstream-service-time",
                                          "value":"90"
                                       },
                                       {
                                          "name":"x-backend",
                                          "value":"tunnel-resto"
                                       },
                                       {
                                          "name":"x-frame-options",
                                          "value":"SAMEORIGIN"
                                       },
                                       {
                                          "name":"x-content-type-options",
                                          "value":"nosniff"
                                       },
                                       {
                                          "name":"x-xss-protection",
                                          "value":"1; mode=block"
                                       },
                                       {
                                          "name":"strict-transport-security",
                                          "value":"max-age=63072000; includeSubDomains"
                                       }
                                    ],
                                    "statusCode":"200"
                                 },
                                 "payload_source":"a226057726bf89ba6bbfccbb64ac0e4754535b9b2774cb393c16070bed947966",
                                 "protocol":"https://"
                              },
                              "success":false
                           }
                        ],
                        "kind":"sequence"
                     }
                  ],
                  "kind":"inputSet",
                  "name":"default"
               }
            ],
            "inputBatteryName":"default",
            "kind":"inputBattery"
         }
      ],
      "tags":[
         "dogs",
         "retrievers"
      ],
      "criticalFailures":[

      ],
      "httpFailures":[

      ],
      "facts":{

      },
      "date":1646122845539,
      "test":{
         "name":"Get all retriever sub-breeds",
         "id":"e42b06a6-bb34-49a8-81a7-35c8b58b6457"
      },
      "failuresCount":4,
      "warningsCount":0,
      "compressed":false,
      "run":{
         "name":"",
         "id":""
      },
      "company":{
         "name":"",
         "id":"7fb25570b4064716b4b6daae2a846790"
      },
      "project":{
         "name":"Dog CEO",
         "id":"621ad1466b1fa36aa4b8b044"
      },
      "contextId":"e4cb06a6-bb34-44a8-81a7-35c8b58b6457",
      "temp":false,
      "expireAt":null,
      "executionTimeSeconds":1,
      "taskId":"3dd9dd20-4586-4b6b-8eb5-b319b249823b",
      "agent":"wstestjs",
      "mode":"ondemand",
      "buildId":"",
      "exception":""
   }
]
```

</details>

## Builds

### Create/Update a Build

<details>
<summary><span className="api put">PUT</span><code>/api-testing/rest/v4/&#123;hookId&#125;/builds</code></summary>
<p></p>

Creates or updates a build.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The buildId you want to create or update.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>environment</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The environment you want to assign the build to.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>branch</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The branch the build belongs to.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>issue</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The issue the build belongs to.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/builds' \
-H 'Content-Type: application/json' \
-d '{
      "id": "<buildId>",
      "metadata": {
        "environment": "<environment>",
        "branch": "<branch>",
        "issue": "<issue>"
      }
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/builds'  \
-H 'Content-Type: application/json' \
-d '{
      "id": "<buildId>",
      "metadata": {
        "environment": "<environment>",
        "branch": "<branch>",
        "issue": "<issue>"
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
</table>

```jsx title="Sample Response"
{
    "id": "<buildId>",
    "companyId": "<companyId>",
    "createdAt": "2023-04-28T13:33:29Z",
    "updatedAt": "2023-04-28T13:33:29Z",
    "projects": [],
    "totalEvents": 0,
    "successes": 0,
    "failures": 0,
    "metadata": {
        "environment": "<environment>",
        "branch": "<branch>",
        "issue": "<issue>"
    }
}
```

</details>

---

### Get Builds

<details>
<summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/builds</code></summary>
<p></p>

Returns the list of builds.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>start</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the start date, in <code>YYYY-MM-DD</code> (UTC) format.</p></td>
    </tr>
  </tbody>
  <tbody>
      <tr>
      <td><code>end</code></td>
      <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the end date, in <code>YYYY-MM-DD</code> (UTC) format. The default value is current date.</p></td>
      </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the number of records to return. The default value is 10 and the max value is 50.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Specifies the number of records to be skipped from the beginning of the list. Must be used in combination with the limit parameter.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/builds' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/builds' | json_pp
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
</table>

```jsx title="Sample Response"
[
    {
        "id": "build123",
        "createdAt": "2023-04-28T09:12:02Z",
        "updatedAt": "2023-04-28T09:12:02Z",
        "totalEvents": 22,
        "successes": 15,
        "failures": 7
    },
    {
        "id": "build456",
        "createdAt": "2023-04-28T09:08:54Z",
        "updatedAt": "2023-04-28T09:08:54Z",
        "totalEvents": 20,
        "successes": 20,
        "failures": 0
    }
]
```

</details>

---

### Get Build Details

<details>
<summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/builds/&#123;buildId&#125;</code></summary>
<p></p>

Returns the details of the specified build.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The build ID you want to retrieve the details.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/builds/<buildId>' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/builds/<buildId>' | json_pp
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
</table>

```jsx title="Sample Response"
{
    "id": "<buildId>",
    "companyId": "435c2dfcf77742e084a03b2d89261fec",
    "createdAt": "2023-04-28T09:08:54Z",
    "updatedAt": "2023-04-28T09:08:54Z",
    "projects": [
        {
            "id": "<projectId>",
            "name": "<projectName>"
        }
    ],
    "totalEvents": 22,
    "successes": 15,
    "failures": 7,
    "metadata": {}
}
```

</details>

---

## Vault

### Get Vault

<details>
<summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/vault</code></summary>
<p></p>

Returns the content of the project vault.

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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/vault' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/vault' | json_pp
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
</table>

```jsx title="Sample Response"
{
   "snippets" : {
      "temp" : "- id: get\n  children:\n    - id: header\n      name: key\n      value: ABC123\n  url: http://demoapi.apifortress.com/api/retail/product\n  var: payload\n  mode: json"
   },
   "variables" : [
      {
         "name" : "var1",
         "type" : "variable",
         "value" : "foo"
      },
      {
         "name" : "var2",
         "type" : "variable",
         "value" : "bar"
      },
      {
         "name" : "var3",
         "type" : "variable",
         "value" : "chu"
      }
   ]
```

</details>

---

### Update Vault

<details>
<summary><span className="api put">PUT</span><code>/api-testing/rest/v4/&#123;hookId&#125;/vaults</code></summary>
<p></p>

Updates the content of the project vault.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>variables</code></td>
     <td><p><small>| BODY | REQUIRED | ARRAY |</small></p><p>The array contains the variable object you want to update/add to the project vault and it can be empty. Each object contains the key/value pairs: <code>name</code> (the name of the variable you want to update/add), <code>value</code> (the value of the variable you want to update/add), <code>type</code> the value can be <code>variable</code> or <code>sensitive</code>. If the type is <code>sensitive</code> the value is <a href="/api-testing/vault/#mark-variables-as-sensitive">obfuscated</a> and cannot be seen by anyone.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>snippets</code></td>
     <td><p><small>| BODY | REQUIRED | OBJECT |</small></p><p>The object containing the snippets you want to update/add. The object contains the key/value pairs: snippet_name:snippet. It can be empty.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/vaults'  \
-H 'Content-Type: application/json' \
-d '{
      "variables": [
        {
          "name": "var3",
          "value": "chu",
          "type": "variable"
        }
      ],
      "snippets": {
        "test": "- id: get\n  url: http://demoapi.apifortress.com/api/retail/product\n  var: payload\n  mode: json"
      }
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/vault'  \
-H 'Content-Type: application/json' \
-d '{
      "variables": [
        {
          "name": "var3",
          "value": "chu",
          "type": "variable"
        }
      ],
      "snippets": {
        "test": "- id: get\n  url: http://demoapi.apifortress.com/api/retail/product\n  var: payload\n  mode: json"
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
</table>

```jsx title="Sample Response"
{
   "snippets" : {
      "snippet1" : "- id: get\n  children:\n    - id: header\n      name: key\n      value: ABC123\n  url: http://demoapi.apifortress.com/api/retail/product\n  var: payload\n  mode: json"
   },
   "variables" : [
      {
         "name" : "var1",
         "type" : "variable",
         "value" : "foo"
      },
      {
         "name" : "var2",
         "type" : "variable",
         "value" : "bar"
      },
      {
         "name" : "var3",
         "type" : "variable",
         "value" : "chu"
      }
   ]
}
```

</details>

---

## Events

### List All Events

<details>
<summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/insights/events</code></summary>
<p></p>

Lists all events in a project.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>from</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the start time, in UNIX time milliseconds. The default value is 2 days before.</p></td>
    </tr>
  </tbody>
  <tbody>
      <tr>
      <td><code>to</code></td>
      <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the end time, in UNIX time milliseconds. The default value is the current time.</p></td>
      </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the number of records to return. The default value is 100 and the max value is 500.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Specifies the number of records to be skipped from the beginning of the list. Must be used in combination with the limit parameter.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/insights/events' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/insights/events' | json_pp
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
</table>

```jsx title="Sample Response"
[{
    "_id": "621b3d18fd17a5416b299ea4",
    "tags": ["dogs", "doggos"],
    "criticalFailures": [],
    "date": 1645952280785,
    "test": {
        "name": "List all dog breeds",
        "id": "621ad2cefd18a5416b299e98"
    },
    "failuresCount": 0,
    "warningsCount": 0,
    "project": {
        "id": "621ad1467b1fa36aa4b8b044"
    },
    "taskId": "02beff07-20c9-48d7-9617-4e5d7c8dad2b",
    "agent": "wstestjs",
    "buildId": ""
    }, {
    "_id": "621b3c2aa9f2b22a5a896343",
    "tags": ["dogs", "retrievers"],
    "criticalFailures": [],
    "date": 1645952042587,
    "test": {
        "name": "Get all retriever sub-breeds: retrievers",
        "id": "621b20e8fd17a5416b299v9f"
    },
    "failuresCount": 0,
    "warningsCount": 0,
    "project": {
        "id": "621ad1466c1fa36aa4b8b044"
    },
    "taskId": "3745a2e0-676a-4930-80b8-e0ec3fa6e3d2",
    "agent": "wstestjs",
    "buildId": ""
    },
}]
```

</details>

---

### Get Event Details

<details>
<summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/insights/events/&#123;eventId&#125;</code></summary>
<p></p>

Returns the details of the specified event.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>eventId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The ID of an event, that you can retrieve from the <a href="#list-all-events">List All Events</a> response payload.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/insights/events/<eventId>' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/insights/events/<eventId>' | json_pp
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
</table>

```jsx title="Sample Response"
{
    "_id": "621b48b3a9f2b52a5a896345",
    "events": [{
        "date": 1645995253102,
        "events": [{
            "date": 1645995253102,
            "events": [{
                "date": 1645995253102,
                "events": [{
                    "action": "get",
                    "expression": "https://dog.ceo/api/breed/retriever/list",
                    "footprint": "dog.ceo/api/breed/retriever/list",
                    "metrics": {
                        "fetch": 1.0,
                        "latency": 347.0,
                        "overall": 380.0
                    },
                    "requestDetails": "GET https://dog.ceo/api/breed/retriever/list\n\nGET /api/breed/retriever/list HTTP/1.1\nhost: dog.ceo\nUser-Agent: SauceLabs/API-Fortress - WSTestJS\naccept-encoding: gzip, deflate\n\n",
                    "status": 200.0,
                    "success": true
                }, {
                    "action": "assert-equals",
                    "expression": "payload_response.headers['Content-Type']==application/json",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "payload",
                    "success": true
                }, {
                    "success": true,
                    "action": "assert-is",
                    "expression": "payload.message is array"
                }, {
                    "root": "payload.message",
                    "success": true,
                    "action": "assert-exists",
                    "expression": "_1"
                }, {
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true,
                    "action": "assert-exists"
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true
                }, {
                    "success": true,
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message"
                }, {
                    "expression": "payload.status",
                    "success": true,
                    "action": "assert-exists"
                }],
                "kind": "sequence"
            }],
            "kind": "inputSet",
            "name": "default"
        }],
        "inputBatteryName": "default",
        "kind": "inputBattery"
    }],
    "tags": ["dogs", "retrievers"],
    "criticalFailures": [],
    "httpFailures": [],
    "facts": {},
    "date": 1645955253101,
    "test": {
        "name": "Get all retriever sub-breeds",
        "id": "621b20e8fd17a5426b299e9f"
    },
    "failuresCount": 0,
    "warningsCount": 0,
    "compressed": false,
    "run": {
        "name": "",
        "id": ""
    },
    "company": {
        "name": "",
        "id": "7fb25570b4064712b9b6daae2a846790"
    },
    "project": {
        "name": "Dog CEO",
        "id": "621ad1466b2fa36aa4b8b044"
    },
    "temp": false,
    "expireAt": "2022-08-28T21:47:33Z",
    "executionTimeSeconds": 1,
    "taskId": "4e57e57a-ed37-452f-8c61-8n2e71947d07",
    "agent": "wstestjs",
    "mode": "ondemand",
    "buildId": ""
}
```

</details>

## Metrics

### Get Metrics

<details>
<summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/insights/metrics</code></summary>
<p></p>

Returns metrics for all tests in a project.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>hookId</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Your project's hook ID, which you can create and/or retrieve from your project's <strong>Webhooks</strong> tab.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>from</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the start time, in UNIX time milliseconds. The default value is 2 days before.</p></td>
    </tr>
  </tbody>
  <tbody>
      <tr>
      <td><code>to</code></td>
      <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the end time, in UNIX time milliseconds. The default value is the current time.</p></td>
      </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Identifies the number of records to return. The default value is 100 and the max value is 500.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>offset</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Specifies the number of records to be skipped from the beginning of the list. Must be used in combination with the limit parameter.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>failuresOnly</code></td>
     <td><p><small>| QUERY | OPTIONAL | BOOLEAN |</small></p><p>Filters the metrics to include only the tests that completed with failure(s).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>footprint</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filters the metrics based on the footprint.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
    <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated with a build, provide the build ID so that all resources can be associated to it.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>/insights/metrics' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/<hookId>/insights/metrics' | json_pp
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
</table>

```jsx title="Sample Response"
[{
    "_id": "621b3d4f9c65ec457f73d1a6",
    "url": "https://dog.ceo/api/breed/retriever/list",
    "path": "/api/breed/retriever/list",
    "footprint": "dog.ceo/api/breed/retriever/list",
    "query": "",
    "method": "get",
    "latency": 349,
    "fetch": 1,
    "time": "2022-02-27T08:58:55Z",
    "projectId": "621ad1466b9fa36aa4b8b044",
    "success": true,
    "code": 200,
    "buildId": ""
}, {
    "_id": "621b3d19b3d3e6cfb2fe902b",
    "url": "https://dog.ceo/api/breeds/list/all",
    "path": "/api/breeds/list/all",
    "footprint": "dog.ceo/api/breeds/list/all",
    "query": "",
    "method": "get",
    "latency": 326,
    "fetch": 1,
    "time": "2022-02-27T08:58:01Z",
    "projectId": "621ad1466b1fa36aa4m8b044",
    "success": true,
    "code": 200,
    "buildId": ""
    },
}]
```

</details>
