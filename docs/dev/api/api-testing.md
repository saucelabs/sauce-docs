---
id: api-testing
title: API Testing API Methods
sidebar_label: API Testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These API methods allow you to interact with Sauce Labs API Testing functionality. You can execute tests, view analytics, retrieve project information, and more.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* An existing API test. To learn how to create one, see the [Quickstart](/api-testing/quickstart/).

## Project Methods

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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/dce8cc01-c193-4806-9b13-668323f0add7' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/dce8cc01-c193-4806-9b13-668323f0add7' | json_pp
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



## Test Methods

### List All Tests in a Project

<details><summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests</code></summary>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests' | json_pp
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
    "id": "621ad2cefd18a5416b299e98",
    "name": "List all dog breeds",
    "description": "Returns a list of all dog breeds",
    "lastModified": "2022-02-27T07:02:35Z",
    "tags": ["dogs", "doggos"],
    "user": {
        "id": "21b27f2d2aaa4a5c88c8c19df25857d6",
        "name": "$SAUCE_USERNAME"
    },
    "complete": true,
    "status": {
        "success": true,
        "lastUpdate": "2022-02-27T08:58:01Z"
    },
    "schedules": {
        "total": 1,
        "active": 1
    }
}, {
    "id": "621b20e8fd17a5416b299e9f",
    "name": "Get all retriever sub-breeds: retrievers",
    "description": "Returns an array of all the sub-breeds from a breed",
    "lastModified": "2022-02-27T07:05:25Z",
    "tags": ["dogs", "retrievers"],
    "user": {
        "id": "21b27f2d2aaa4a5c88c8c19df25857d6",
        "name": "$SAUCE_USERNAME"
    },
    "complete": true,
    "status": {
        "success": true,
        "lastUpdate": "2022-02-27T09:47:33Z"
    },
    "schedules": {
        "total": 1,
        "active": 1
    }
}]
```

</details>

---

### Upload a Test

<details><summary><span className="api put">PUT</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests</code></summary>
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
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The input of your API Test. You can obtain this by going into a Test > **Compose** section > toggle **Code View**.</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
   <td><code>unit</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>Must contain the unit of the test you want to upload to the cloud. You can obtain this by going into a Test > **Compose** section > toggle **Code View**.</p></td>
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
--request PUT 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "description": "Returns an array of all the sub-breeds from a breed",
    "tags": ["dogs", "retrievers"],
    "unit": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"${protocol}${domain}${endpoint}\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
    "input": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>"
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request PUT 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "description": "Returns an array of all the sub-breeds from a breed",
    "tags": ["dogs", "retrievers"],
    "unit": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"${protocol}${domain}${endpoint}\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
    "input": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>"
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
        "unit": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>",
        "input": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"https://saucelabs.com/rest/v1/public/tunnels/info/versions\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
        "complete": true
    }
}
```

</details>


---

### Get Test Details

<details><summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/&#123;testId&#125;</code></summary>
<p/>

Returns the details of a test.

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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/621b20e8fd17a5416b299e9f' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/621b20e8fd17a5416b299e9f' | json_pp
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
        "unit": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"${protocol}${domain}${endpoint}\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
        "input": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>",
        "complete": true
    },
    "workingCopy": {
        "id": "621b216ca9f2b22a5a89633f",
        "user": {
            "id": "21b27f2d2aaa4a5c88c8c19df25857d7",
            "name": "$SAUCE_USERNAME"
        },
        "unit": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"${protocol}${domain}${endpoint}\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
        "input": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>",
        "lastModified": "2022-02-27T06:59:56Z"
    }
}
```

</details>



## Test Execution

When you run an API test using one of these methods, you'll receive a response immediately that contains general test details.


### Run a Test

<details><summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/&#123;testId&#125;/_run</code></summary>
<p/>

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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated to a build, the ID of the build should be provided, so that all resources can be associated to it.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/621ad2cefd18a5416b299e98/_run' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/621ad2cefd18a5416b299e98/_run' | json_pp
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

<details><summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_run-all</code></summary>
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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated to a build, the ID of the build should be provided, so that all resources can be associated to it.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_run-all' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_run-all' | json_pp
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

<details><summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_tag/&#123;tag&#125;/_run</code></summary>
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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated to a build, the ID of the build should be provided, so that all resources can be associated to it.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_tag/doggos/_run' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_tag/doggos/_run' | json_pp
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

<details><summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_exec</code></summary>
<p/>

Executes the test you send in the request body. It will create a Log in the project **Dashboard**, but the test itself will not populate in your project's **Tests** section.

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
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The input of your API Test. You can obtain this by going into a Test > **Compose** section > toggle **Code View**.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>unit</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>Must contain the unit of the test you want to upload to the cloud. You can obtain this by going into a Test > **Compose** section > toggle **Code View**.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated to a build, the ID of the build should be provided, so that all resources can be associated to it.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_exec'
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "description": "Returns an array of all the sub-breeds from a breed",
    "tags": ["dogs", "retrievers"],
    "unit": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"${protocol}${domain}${endpoint}\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
    "input": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>"
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_exec'
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "description": "Returns an array of all the sub-breeds from a breed",
    "tags": ["dogs", "retrievers"],
    "unit": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"${protocol}${domain}${endpoint}\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
    "input": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>"
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

<details><summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/&#123;testId&#125;/_run-sync</code></summary>
<p/>

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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Use this to set a response format. Possible values are <code>json</code> and <code>junit</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated to a build, the ID of the build should be provided, so that all resources can be associated to it.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/621b20e8fd17b5416b299e9f/_run-sync?format=json' -H 'Content-Type: application/json' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/621b20e8fd17b5416b299e9f/_run-sync?format=json' -H 'Content-Type: application/json' | json_pp
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
    "id": "621b320afd17a5416b299ea3",
    "events": [{
        "date": 1645949450067,
        "events": [{
            "date": 1645949450068,
            "events": [{
                "date": 1645949450068,
                "events": [{
                    "action": "get",
                    "expression": "https://dog.ceo/api/breed/retriever/list",
                    "footprint": "dog.ceo/api/breed/retriever/list",
                    "metrics": {
                        "fetch": 1,
                        "latency": 322,
                        "overall": 338
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
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "payload.status",
                    "success": true
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
    "date": 1645949450067,
    "test": {
        "name": "Get all retriever sub-breeds",
        "id": "621b20e8fd17v5416b299e9f"
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
        "id": "7fb25570b4064716b9v6daae1a846790"
    },
    "project": {
        "name": "Dog CEO",
        "id": "621ad1466b1fa36aa4b8b044"
    },
    "contextId": "856c431c-4e1a-46c2-9644-c084e7c36b61",
    "temp": false,
    "expireAt": null,
    "executionTimeSeconds": 1,
    "taskId": "693ddvb2-9482-4c51-95bf-52b3d70f5236",
    "agent": "wstestjs",
    "mode": "ondemand",
    "buildId": "",
    "exception": ""
}]
```

</details>

---

### Run All Tests Synchronously

<details><summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_run-all-sync</code></summary>
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
    <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Use this to set a response format. Possible values are <code>json</code> and <code>junit</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated to a build, the ID of the build should be provided, so that all resources can be associated to it.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_run-all-sync?format=json' -H 'Content-Type: application/json' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_run-all-sync?format=json' -H 'Content-Type: application/json' | json_pp
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

<details><summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_tag/&#123;tag&#125;/_run-sync</code></summary>
<p/>

Run all tests in a project synchronously.

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
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Use this to set a response format. Possible values are <code>json</code> and <code>junit</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated to a build, the ID of the build should be provided, so that all resources can be associated to it.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_tag/retrievers/_run-sync?format=json' -H 'Content-Type: application/json' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_tag/retrievers/_run-sync?format=json' -H 'Content-Type: application/json' | json_pp
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
    "id": "621b3d60a9f2b22a5a896344",
    "events": [{
        "date": 1545952352117,
        "events": [{
            "date": 1545952352117,
            "events": [{
                "date": 1545952352117,
                "events": [{
                    "action": "get",
                    "expression": "https://dog.ceo/api/breed/retriever/list",
                    "footprint": "dog.ceo/api/breed/retriever/list",
                    "metrics": {
                        "fetch": 1,
                        "latency": 330,
                        "overall": 343
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
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "root": "payload.message",
                    "success": true
                }, {
                    "action": "assert-exists",
                    "expression": "payload.status",
                    "success": true
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
    "date": 1645952352117,
    "test": {
        "name": "Get all retriever sub-breeds",
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
        "id": "7fb25570b4064716b9b6daae2a846890"
    },
    "project": {
        "name": "Dog CEO",
        "id": "621ad1466b1fa36aa4b8b044"
    },
    "contextId": "6cb1d39a-0964-3dfb-b595-7eabb3db1840",
    "temp": false,
    "expireAt": null,
    "executionTimeSeconds": 1,
    "taskId": "35bc67c7-c8ec-4686-b30d-47cc48e094hf",
    "agent": "wstestjs",
    "mode": "ondemand",
    "buildId": "",
    "exception": ""
}]
```

</details>


---

### Execute a Test Synchronously

<details><summary><span className="api post">POST</span><code>/api-testing/rest/v4/&#123;hookId&#125;/tests/_exec-sync</code></summary>
<p/>

Executes a test synchronously that you send in the request body. It will create a Log in the project **Dashboard**, however, the test itself will not populate in your project's **Tests** section.

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
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The input of your API Test. You can obtain this by going into a Test > **Compose** section > toggle **Code View**.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>unit</code></td>
       <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>Must contain the unit of the test you want to upload to the cloud. You can obtain this by going into a Test > **Compose** section > toggle **Code View**.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>If this execution is associated to a build, the ID of the build should be provided, so that all resources can be associated to it.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_exec-sync'
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "description": "Returns an array of all the sub-breeds from a breed",
    "tags": ["dogs", "retrievers"],
    "unit": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"${protocol}${domain}${endpoint}\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
    "input": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>"
    }'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/tests/_exec-sync'
-H 'Content-Type: application/json' \
-d '{
    "name": "Get all retriever sub-breeds",
    "description": "Returns an array of all the sub-breeds from a breed",
    "tags": ["dogs", "retrievers"],
    "unit": "<?xml version=\"1.0\"?>\n<unit>\n  <requirements/>\n  <configs/>\n  <sequence>\n    <get url=\"${protocol}${domain}${endpoint}\" params=\"[:]\" var=\"payload\" mode=\"json\"/>\n    <assert-equals expression=\"payload_response.headers['Content-Type']\" value=\"application/json\"/>\n    <assert-exists expression=\"payload\" gen=\"jag\"/>\n    <assert-is expression=\"payload.message\" type=\"array\" gen=\"jag\"/>\n    <each expression=\"payload.message\" gen=\"jag\">\n      <assert-exists expression=\"_1\" gen=\"jag\"/>\n    </each>\n    <assert-exists expression=\"payload.status\" gen=\"jag\"/>\n  </sequence>\n</unit>",
    "input": "<?xml version=\"1.0\"?>\n<sets>\n  <global>\n    <param name=\"protocol\">https://</param>\n    <param name=\"domain\">dog.ceo</param>\n    <param name=\"endpoint\">/api/breed/retriever/list</param>\n  </global>\n  <set name=\"default\"/>\n</sets>"
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
    "id": "621dd85d6b1fa36aa4b8b1d1",
    "events": [{
        "date": 1646122845550,
        "events": [{
            "date": 1646122845550,
            "events": [{
                "date": 1646122845550,
                "events": [{
                    "action": "get",
                    "expression": "https://saucelabs.com/rest/v1/public/tunnels/info/versions",
                    "footprint": "saucelabs.com/rest/v1/public/tunnels/info/versions",
                    "metrics": {
                        "fetch": 1,
                        "latency": 137,
                        "overall": 162
                    },
                    "requestDetails": "GET https://saucelabs.com/rest/v1/public/tunnels/info/versions\n\nGET /rest/v1/public/tunnels/info/versions HTTP/1.1\nhost: saucelabs.com\nUser-Agent: SauceLabs/API-Fortress - WSTestJS\naccept-encoding: gzip, deflate\n\n",
                    "status": 200,
                    "success": true
                }, {
                    "action": "assert-equals",
                    "expression": "payload_response.headers['Content-Type']==application/json",
                    "foundValue": "application/json; charset=utf-8",
                    "level": 0,
                    "snapshot": {
                        "domain": "dog.ceo",
                        "endpoint": "/api/breed/retriever/list",
                        "payload_response": {
                            "headers": [{
                                "name": "server",
                                "value": "nginx"
                            }, {
                                "name": "date",
                                "value": "Tue, 01 Mar 2022 08:20:45 GMT"
                            }, {
                                "name": "content-type",
                                "value": "application/json; charset=utf-8"
                            }, {
                                "name": "content-length",
                                "value": "617"
                            }, {
                                "name": "connection",
                                "value": "close"
                            }, {
                                "name": "x-ratelimit-limit",
                                "value": "10"
                            }, {
                                "name": "x-ratelimit-remaining",
                                "value": "9"
                            }, {
                                "name": "x-ratelimit-reset",
                                "value": "60"
                            }, {
                                "name": "vary",
                                "value": "*"
                            }, {
                                "name": "cache-control",
                                "value": "no-cache"
                            }, {
                                "name": "x-sl-request-id",
                                "value": "adc111d8b5cc4dde89f64ebca253e1aa"
                            }, {
                                "name": "x-envoy-upstream-service-time",
                                "value": "90"
                            }, {
                                "name": "x-backend",
                                "value": "tunnel-resto"
                            }, {
                                "name": "x-frame-options",
                                "value": "SAMEORIGIN"
                            }, {
                                "name": "x-content-type-options",
                                "value": "nosniff"
                            }, {
                                "name": "x-xss-protection",
                                "value": "1; mode=block"
                            }, {
                                "name": "strict-transport-security",
                                "value": "max-age=63072000; includeSubDomains"
                            }],
                            "statusCode": "200"
                        },
                        "payload_source": "a2c6057726bf89ba6bbfccbb64ac0e4754535b9b2774cb393c16070bed947966",
                        "protocol": "https://"
                    },
                    "success": false
                }, {
                    "action": "assert-exists",
                    "expression": "payload",
                    "success": true
                }, {
                    "action": "assert-is",
                    "expression": "payload.message is array",
                    "level": 0,
                    "snapshot": {
                        "domain": "dog.ceo",
                        "endpoint": "/api/breed/retriever/list",
                        "payload_response": {
                            "headers": [{
                                "name": "server",
                                "value": "nginx"
                            }, {
                                "name": "date",
                                "value": "Tue, 01 Mar 2022 08:20:45 GMT"
                            }, {
                                "name": "content-type",
                                "value": "application/json; charset=utf-8"
                            }, {
                                "name": "content-length",
                                "value": "617"
                            }, {
                                "name": "connection",
                                "value": "close"
                            }, {
                                "name": "x-ratelimit-limit",
                                "value": "10"
                            }, {
                                "name": "x-ratelimit-remaining",
                                "value": "9"
                            }, {
                                "name": "x-ratelimit-reset",
                                "value": "60"
                            }, {
                                "name": "vary",
                                "value": "*"
                            }, {
                                "name": "cache-control",
                                "value": "no-cache"
                            }, {
                                "name": "x-sl-request-id",
                                "value": "adc111d8a5cc4dde89f64ebca253e1aa"
                            }, {
                                "name": "x-envoy-upstream-service-time",
                                "value": "90"
                            }, {
                                "name": "x-backend",
                                "value": "tunnel-resto"
                            }, {
                                "name": "x-frame-options",
                                "value": "SAMEORIGIN"
                            }, {
                                "name": "x-content-type-options",
                                "value": "nosniff"
                            }, {
                                "name": "x-xss-protection",
                                "value": "1; mode=block"
                            }, {
                                "name": "strict-transport-security",
                                "value": "max-age=63072000; includeSubDomains"
                            }],
                            "statusCode": "200"
                        },
                        "payload_source": "a2c6057726bf89ba6bbfccbb64ac0e4854535b9b2774cb393c16070bed947966",
                        "protocol": "https://"
                    },
                    "success": false
                }, {
                    "action": "assert-exists",
                    "expression": "_1",
                    "level": 0,
                    "root": "payload.message",
                    "snapshot": {
                        "domain": "dog.ceo",
                        "endpoint": "/api/breed/retriever/list",
                        "payload_response": {
                            "headers": [{
                                "name": "server",
                                "value": "nginx"
                            }, {
                                "name": "date",
                                "value": "Tue, 01 Mar 2022 08:20:45 GMT"
                            }, {
                                "name": "content-type",
                                "value": "application/json; charset=utf-8"
                            }, {
                                "name": "content-length",
                                "value": "617"
                            }, {
                                "name": "connection",
                                "value": "close"
                            }, {
                                "name": "x-ratelimit-limit",
                                "value": "10"
                            }, {
                                "name": "x-ratelimit-remaining",
                                "value": "9"
                            }, {
                                "name": "x-ratelimit-reset",
                                "value": "60"
                            }, {
                                "name": "vary",
                                "value": "*"
                            }, {
                                "name": "cache-control",
                                "value": "no-cache"
                            }, {
                                "name": "x-sl-request-id",
                                "value": "adc211d8a5cc4dde89f64ebca253e1aa"
                            }, {
                                "name": "x-envoy-upstream-service-time",
                                "value": "90"
                            }, {
                                "name": "x-backend",
                                "value": "tunnel-resto"
                            }, {
                                "name": "x-frame-options",
                                "value": "SAMEORIGIN"
                            }, {
                                "name": "x-content-type-options",
                                "value": "nosniff"
                            }, {
                                "name": "x-xss-protection",
                                "value": "1; mode=block"
                            }, {
                                "name": "strict-transport-security",
                                "value": "max-age=63072000; includeSubDomains"
                            }],
                            "statusCode": "200"
                        },
                        "payload_source": "a2c6057722bf89ba6bbfccbb64ac0e4754535b9b2774cb393c16070bed947966",
                        "protocol": "https://"
                    },
                    "success": false
                }, {
                    "action": "assert-exists",
                    "expression": "payload.status",
                    "level": 0,
                    "snapshot": {
                        "domain": "dog.ceo",
                        "endpoint": "/api/breed/retriever/list",
                        "payload_response": {
                            "headers": [{
                                "name": "server",
                                "value": "nginx"
                            }, {
                                "name": "date",
                                "value": "Tue, 01 Mar 2022 08:20:45 GMT"
                            }, {
                                "name": "content-type",
                                "value": "application/json; charset=utf-8"
                            }, {
                                "name": "content-length",
                                "value": "617"
                            }, {
                                "name": "connection",
                                "value": "close"
                            }, {
                                "name": "x-ratelimit-limit",
                                "value": "10"
                            }, {
                                "name": "x-ratelimit-remaining",
                                "value": "9"
                            }, {
                                "name": "x-ratelimit-reset",
                                "value": "60"
                            }, {
                                "name": "vary",
                                "value": "*"
                            }, {
                                "name": "cache-control",
                                "value": "no-cache"
                            }, {
                                "name": "x-sl-request-id",
                                "value": "adc111d8a5cc4dde89f64ebca253e1aa"
                            }, {
                                "name": "x-envoy-upstream-service-time",
                                "value": "90"
                            }, {
                                "name": "x-backend",
                                "value": "tunnel-resto"
                            }, {
                                "name": "x-frame-options",
                                "value": "SAMEORIGIN"
                            }, {
                                "name": "x-content-type-options",
                                "value": "nosniff"
                            }, {
                                "name": "x-xss-protection",
                                "value": "1; mode=block"
                            }, {
                                "name": "strict-transport-security",
                                "value": "max-age=63072000; includeSubDomains"
                            }],
                            "statusCode": "200"
                        },
                        "payload_source": "a226057726bf89ba6bbfccbb64ac0e4754535b9b2774cb393c16070bed947966",
                        "protocol": "https://"
                    },
                    "success": false
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
    "date": 1646122845539,
    "test": {
        "name": "Get all retriever sub-breeds",
        "id": "e42b06a6-bb34-49a8-81a7-35c8b58b6457"
    },
    "failuresCount": 4,
    "warningsCount": 0,
    "compressed": false,
    "run": {
        "name": "",
        "id": ""
    },
    "company": {
        "name": "",
        "id": "7fb25570b4064716b4b6daae2a846790"
    },
    "project": {
        "name": "Dog CEO",
        "id": "621ad1466b1fa36aa4b8b044"
    },
    "contextId": "e4cb06a6-bb34-44a8-81a7-35c8b58b6457",
    "temp": false,
    "expireAt": null,
    "executionTimeSeconds": 1,
    "taskId": "3dd9dd20-4586-4b6b-8eb5-b319b249823b",
    "agent": "wstestjs",
    "mode": "ondemand",
    "buildId": "build123",
    "exception": ""
}]
```

</details>


## Events

### List All Events

<details><summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/insights/events</code></summary>
<p/>

Lists all events in a project.

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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/insights/events' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/insights/events' | json_pp
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

<details><summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/insights/events/&#123;eventId&#125;</code></summary>
<p/>

Returns the details of an event.

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
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>An event ID, which you can find in a test's response payload under “events”. You can also obtain it via the following APIs: <a href="#run-a-test">Run a Test</a>, <a href="#run-all-tests">Run All Tests</a>, <a href="#run-tests-by-tag">Run Tests by Tag</a>.</p></td>
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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/insights/events/621b48b3a9f3b22a5a896345' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/insights/events/621b48b3a9f2b23a5a896345' | json_pp
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
    "_id": "621b48b3a9f2b52a5a896345",
    "events": [{
        "date": 1.645995253102E12,
        "events": [{
            "date": 1.645995253102E12,
            "events": [{
                "date": 1.645995253102E12,
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

<details><summary><span className="api get">GET</span><code>/api-testing/rest/v4/&#123;hookId&#125;/insights/metrics</code></summary>
<p/>

Returns metrics for all tests in a project.

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
--request GET 'https://api.us-west-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/insights/metrics' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/api-testing/rest/v4/3e540e3f-50bd-4088-8c1b-97f1d1530f15/insights/metrics' | json_pp
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
