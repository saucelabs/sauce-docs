---
id: authoring
title: AI Test Authoring API Endpoints
sidebar_label: Test Authoring
description: Manage your test cases, suites and schedules created by Sauce AI for Test Authoring.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The AI Test Authoring API allows you to manage AI-authored test cases, test suites, and test schedules. Use these methods to create, retrieve, update, delete, and run your AI-authored tests programmatically.

Refer to [Getting Started](/dev/api) for Authentication and Server information.

## What You'll Need

- A Sauce Labs enterprise account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/))
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings)

## Test Cases

### List Test Cases

<details>
<summary><span className="api get">GET</span> <code>/v1/ai-authoring/testcases</code></summary>

Returns a paginated list of test cases. Supports filtering by search term, date range, user, team, and test suite.


#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>search</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Case-insensitive search term matched against the test case name.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>startDate</code></td>
     <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>ISO 8601 start date filter — only return test cases created on or after this date.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>endDate</code></td>
     <td><p><small>| QUERY | OPTIONAL | DATE |</small></p><p>ISO 8601 end date filter — only return test cases created on or before this date.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>userId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filter by creator user UUID.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>teamId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filter by team UUID.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>testSuiteId</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY of STRINGS |</small></p><p>Filter by test suite UUID(s). Pass <code>null</code> to find unassigned test cases. Accepts a single value or an array.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>skip</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Number of results to skip (for offset-based pagination). Default value is <code>0</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Maximum number of results to return. Set to <code>0</code> to only retrieve the total count.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/ai-authoring/testcases" | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testcases" | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Returns paginated list of test cases</td>
  </tr>
    <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid query string parameters</td>
  </tr>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "data": {
    "total": 8,
    "items": [
      {
        "id": "69c164bcd27d5bfc3e3ef8a7",
        "orgId": "<orgId>",
        "teamId": "<teamId>",
        "creatorUserId": "<creatorID>",
        "lastModifierUserId": "<userId>",
        "testSuiteId": "<suiteId>",
        "name": "Saucedemo - Backpack and bike light flow",
        "creationDate": "2026-03-23T16:05:16.333Z",
        "lastUpdateDate": "2026-03-23T16:06:42.915Z",
        "runSettings": {
          "testUrl": "https://www.saucedemo.com/",
          "primaryTarget": {
            "capabilities": {
              "browserName": "chrome",
              "browserVersion": "latest",
              "platformName": "Windows 11",
              "sauce:options": {},
              "goog:chromeOptions": {
                "prefs": {
                  "profile.password_manager_leak_detection": false
                }
              }
            },
            "isRdc": false
          },
  ...
```

</details>

---

### Get a Test Case

<details>
<summary><span className="api get">GET</span> <code>/v1/ai-authoring/testcases/&#123;id&#125;</code></summary>

Returns the details of a specific test case.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Test Case Id (24-character hex string)</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/ai-authoring/testcases/<id>" | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testcases/<id>" | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Test case details</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid path parameters</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test case not found</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
    "data": {
        "id": "<id>",
        "orgId": "<orgId>",
        "teamId": "<teamId>",
        "creatorUserId": "<userId>",
        "lastModifierUserId": "<userId>",
        "testSuiteId": "<suiteId>",
        "name": "Saucedemo - Backpack and bike light flow",
        "creationDate": "2026-03-23T16:05:16.333Z",
        "lastUpdateDate": "2026-03-23T16:06:42.915Z",
        "runSettings": { ... },
        "revisions": [ ... ],
        "creatorUserName": "sauceBot",
        "lastModifierUserName": "sauceBot"
    }
}
```
</details>

---

### Delete a Test Case

<details>
<summary><span className="api delete">DELETE</span> <code>/v1/ai-authoring/testcases/&#123;id&#125;</code></summary>

Deletes the specified test case.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Test case Id (24-character hex string).</p></td>
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
--request DELETE "https://api.us-west-1.saucelabs.com/v1/ai-authoring/testcases/<id>"
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testcases/<id>"
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>204</code></td>
    <td colSpan='2'>Test case deleted</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid path parameters</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test case not found</td>
  </tr>
</tbody>
</table>

</details>

---

### Run a Test Case

<details>
<summary><span className="api post">POST</span> <code>/v1/ai-authoring/testcases/&#123;id&#125;/run</code></summary>

Starts a test case run. Optionally target a specific revision by appending <code>revisionId</code> to the path.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Test case Id (24-character hex string).</p></td>
    </tr>
  </tbody>
  <tbody>
  <tr>
    <td><code>buildName</code></td>
    <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The name of the build to associate with the test case run. Defaults to test case name if not set.</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>targets</code></td>
    <td><p><small>| BODY | OPTIONAL | ARRAY of OBJECTS |</small></p><p>A list of target device configurations. Each object can contain the following attributes:</p><ul><li><code>capabilities</code> - <small>OBJECT</small> - The desired Sauce Labs capabilities for the run.</li></ul></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>scTunnelName</code></td>
    <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The name of the Sauce Connect tunnel to use for the run.</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/v1/ai-authoring/testcases/<id>/run' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testcases/<id>/run' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Test case run initiated</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>
    <ul>
      <li>Invalid path parameters</li>
      <li>Invalid request body</li>
      <li>No run targets configured</li>
      <li>Sauce Connect tunnel not found</li>
    </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>
      <ul>
        <li>Test case not found</li>
        <li>Revision not found</li>
      </ul>
    </td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "build" : "Saucedemo - Backpack checkout - 2",
      "creationDate" : "2026-03-24T20:31:57.869Z",
      "id" : "<id>",
      "jobs" : [ ... ],
      "orgId" : "<orgId>",
      "teamId" : "<teamId>",
      "testCaseId" : "<testCaseId>",
      "testUrl" : "https://www.saucedemo.com/",
      "userId" : "<userId>"
   }
}

```

</details>

---

### Rename a Test Case

<details>
<summary><span className="api post">POST</span> <code>/v1/ai-authoring/testcases/&#123;id&#125;/rename</code></summary>
<p/>

Renames the specified test case.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Test case Id (24 character hex string)</p></td>
    </tr>
  </tbody>
    <tbody>
    <tr>
     <td><code>name</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The updated name of the test case</p></td>
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
--request POST  'https://api.us-west-1.saucelabs.com/v1/ai-authoring/testcases/<id>/rename' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Updated Test Name"
  }' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST  'https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testcases/<id>/rename' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Updated Test Name"
  }' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Successfully updated test case name</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>
    <ul>
      <li>Invalid path parameters</li>
      <li>Invalid request body</li>
    </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test case not found</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "creationDate" : "2026-03-17T15:35:55.794Z",
      "creatorUserId" : "<userId>",
      "creatorUserName" : "<userId>",
      "id" : "<id>",
      "lastModifierUserId" : "<userId>",
      "lastModifierUserName" : "sauceBot",
      "lastUpdateDate" : "2026-03-24T20:57:31.086Z",
      "name" : "Updated test name",
      "orgId" : "7fb25570b4064716b9b6daae1a846790",
      "revisions" : [ ... ],
      "runSettings" : { ... },
      "teamId" : "<teamId>",
      "testSuiteId" : "<testSuiteId>"
   }
}
```

</details>

---

## Test Suites

### List Test Suites

<details>
<summary><span className="api get">GET</span> <code>/v1/ai-authoring/testsuites</code></summary>
<p/>

Returns a list of all test suites in your account.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>ids</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY&lt;STRING&gt; |</small></p><p>Filter by specific test suite UUID(s). Accepts a single value or an array</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>search</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Case-insensitive search term matched against the suite name</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>startDate</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>ISO 8601 start date filter — only return suites created on or after this date</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>endDate</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>ISO 8601 end date filter — only return suites created on or before this date</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>userId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filter by creator user UUID</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>teamId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filter by team UUID</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>skip</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Number of results to skip (for offset-based pagination). Defaults to <code>0</code></p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Maximum number of results to return</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/ai-authoring/testsuites" | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testsuites" | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Returns paginated list of test suites</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid query string parameters</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
  "data": {
    "items": [
      {
        "id": "<id>",
        "orgId": "<orgId>",
        "teamId": "<teamId>",
        "name": "Smoke tests",
        "tags": [
            "string"
        ],
        "creationDate": "2024-01-15T10:00:00Z",
        "lastUpdate": "2024-01-15T10:00:00Z",
        "creatorUserId": "<userId>",
        "creatorUserName": "<userId>",
        "lastModifierUserId": "<userId>",
        "lastModifierUserName": "sauceBot",
        "testCaseCount": 10
    },
    {...}
    ],
    "total": 30
  }
}
```

</details>

---

### Create a Test Suite

<details>
<summary><span className="api post">POST</span> <code>/v1/ai-authoring/testsuites</code></summary>
<p/>

Creates a new test suite.

#### Parameters

Request body parameters.

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
--request POST 'https://api.us-west-1.saucelabs.com/v1/ai-authoring/testsuites' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Sauce Smoke tests",
    "testCases": [
        "<testCaseId>"
    ]
}' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testsuites' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Sauce Smoke tests",
    "testCases": [
        "<testCaseId>"
    ]
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Created test suite</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid request body</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>One or more test cases not found</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "creationDate" : "2026-03-24T22:28:20.224Z",
      "creatorUserId" : "<userId>",
      "creatorUserName" : "sauceBot",
      "id" : "<id>",
      "lastModifierUserId" : "<userId>",
      "lastModifierUserName" : "sauceBot",
      "lastUpdate" : "2026-03-24T22:28:20.224Z",
      "name" : "Sauce Smoke Tests",
      "orgId" : "<orgId>",
      "runCount" : 0,
      "tags" : [],
      "teamId" : "<teamId>",
      "testCaseCount" : 0
   }
}
```

</details>

---

### Get a Test Suite

<details>
<summary><span className="api get">GET</span> <code>/v1/ai-authoring/testsuites/&#123;id&#125;</code></summary>
<p/>

Returns the details of a specific test suite.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>UID of the test suite</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/ai-authoring/testsuites/<id>" | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testsuites/<id>" | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success in getting test suite details</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid path parameters</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test suite not found</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "creationDate" : "2026-03-24T22:28:20.224Z",
      "creatorUserId" : "<userId>",
      "creatorUserName" : "sauceBot",
      "id" : "<id>",
      "lastModifierUserId" : "<userId>",
      "lastModifierUserName" : "sauceBot",
      "lastUpdate" : "2026-03-24T22:28:20.224Z",
      "name" : "Sauce Smoke Tests",
      "orgId" : "<orgId>",
      "runCount" : 0,
      "tags" : [],
      "teamId" : "<teamId>",
      "testCaseCount" : 0
   }
}
```

</details>

---

### Update a Test Suite

<details>
<summary><span className="api post">POST</span> <code>/v1/ai-authoring/testsuites/&#123;id&#125;</code></summary>
<p/>

Updates the specified test suite.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>UUID of the test suite to update</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/v1/ai-authoring/testsuites/<id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Updated smoke tests",
    "testCaseIds": [
        "<testCaseId>"
    ]
}' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testsuites/<id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Updated smoke tests",
    "testCaseIds": [
        "<testCaseId>"
    ]
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success updating test suite</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>
      <ul>
        <li>Invalid path parameters</li>
        <li>Invalid request body</li>
        <li>Invalid or missing test cases</li>
        <li>Test cases not found</li>
      </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test suite not found</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "creationDate" : "2026-03-24T22:40:55.113Z",
      "creatorUserId" : "<userId>",
      "creatorUserName" : "sauceBot",
      "id" : "<id>",
      "lastModifierUserId" : "<userId>",
      "lastModifierUserName" : "sauceBot",
      "lastUpdate" : "2026-03-24T22:42:48.163Z",
      "name" : "Updated smoke tests",
      "orgId" : "<orgId>",
      "runCount" : 15,
      "tags" : [],
      "teamId" : "<teamId>",
      "testCaseCount" : 3
   }
}
```

</details>

---

### Delete a Test Suite

<details>
<summary><span className="api delete">DELETE</span> <code>/v1/ai-authoring/testsuites/&#123;id&#125;</code></summary>

Deletes the specified test suite.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The unique identifier of the test suite to delete</p></td>
    </tr>
  </tbody>
    <tbody>
    <tr>
     <td><code>deleteTestCases</code></td>
     <td><p><small>| BODY | OPTIONAL | BOOLEAN |</small></p><p>If set to true, test cases assigned to this test suite will be deleted</p></td>
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
--request DELETE "https://api.us-west-1.saucelabs.com/v1/ai-authoring/testsuites/<id>"
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testsuites/<id>"
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>204</code></td>
    <td colSpan='2'>Test suite deleted (No Content)</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>
      <ul>
        <li>Invalid path parameters</li>
        <li>Invalid request body</li>
      </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test suite not found</td>
  </tr>
</tbody>
</table>

</details>

---

### Run All Test Cases in a Suite

<details>
<summary><span className="api post">POST</span> <code>/v1/ai-authoring/testsuites/&#123;id&#125;/run</code></summary>

Queues test case runs for every test case in the suite.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The UUID of the test suite to run</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>buildName</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>Name of the automated test build that will run as a result of suite execution. Defaults to the test suite name.</p></td>
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
--request POST "https://api.us-west-1.saucelabs.com/v1/ai-authoring/testsuites/<id>/run" | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/testsuites/<id>/run" | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success. Runs initiated for all test cases in the suite</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
      <td colSpan='2'>
      <ul>
        <li>Invalid path parameters</li>
        <li>Invalid request body</li>
        <li>No jobs to run</li>
      </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test suite not found</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "buildName" : "E-Commerce app suite - 1",
      "id" : "<id>",
      "orgId" : "<orgId>",
      "runCount" : 12,
      "teamId" : "<teamId>",
      "userId" : "<userId>"
   }
}
```

</details>

---

## Test Schedules

### List Test Schedules

<details>
<summary><span className="api get">GET</span> <code>/v1/ai-authoring/test-schedules</code></summary>

Returns a paginated list of test schedules. Supports filtering by IDs, search term, date range, user, team, and test suite IDs.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>ids</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY&lt;STRING&gt; |</small></p><p>Filter by specific schedule UUID(s). Accepts a single value or an array.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>search</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Case-insensitive search term matched against the schedule name</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>startDate</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>ISO 8601 start date filter — only return schedules created on or after this date</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>endDate</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>ISO 8601 end date filter — only return schedules created on or before this date</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>userId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filter by creator user UUID</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>teamId</code></td>
     <td><p><small>| QUERY | OPTIONAL | STRING |</small></p><p>Filter by team UUID</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>skip</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Number of results to skip (for offset-based pagination). Defaults to <code>0</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>limit</code></td>
     <td><p><small>| QUERY | OPTIONAL | INTEGER |</small></p><p>Maximum number of results to return</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>testSuiteIds</code></td>
     <td><p><small>| QUERY | OPTIONAL | ARRAY&lt;STRING&gt; |</small></p><p>Filter schedules that contain any of these test suite UUID(s). Accepts a single value or an array.</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/ai-authoring/test-schedules" | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/test-schedules" | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Paginated list of test schedules</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid query string parameters</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "items" : [
         {
            "creationDate" : "2026-03-04T15:52:46.615Z",
            "creatorUserId" : "<userId>",
            "creatorUserName" : "sauceBot",
            "id" : "<id>",
            "lastModifierUserId" : "<userId>",
            "lastModifierUserName" : "sauceBot",
            "lastUpdateDate" : "2026-03-17T14:06:14.927Z",
            "name" : "E-Commerce App - Nightly",
            "orgId" : "<orgId>",
            "settings" : {
               "cron" : "0 15 12 * * *",
               "maxRuns" : 5,
               "runningUserId" : "<userId>",
               "startDate" : "2026-03-05T11:15:00.000Z",
               "timezone" : "Europe/Berlin"
            },
            "state" : {
               "lastRunDate" : "2026-03-10T11:15:00.652Z",
               "runCount" : 7,
               "stateName" : "DISABLED"
            },
            "teamId" : "<teamId>",
            "testSuiteIds" : [
               "<testSuiteId>"
            ]
         },
         { ... }
      ],
      "total" : 2
   }
}

```

</details>

---

### Create a Test Schedule

<details>
<summary><span className="api post">POST</span> <code>/v1/ai-authoring/test-schedules</code></summary>

Creates a new test schedule.

#### Parameters
<table id="table-api">
  <tbody>
  <tr>
    <td><code>name</code></td>
    <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>An updated name for the schedule</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>settings</code></td>
    <td>
      <p><small>| BODY | OPTIONAL | OBJECT |</small></p>
      <p>The schedule configuration for the test suite. The available attributes are:</p>
      <ul>
        <li><code>cron</code> - <small>STRING</small> - A cron expression defining the schedule interval</li>
        <li><code>timezone</code> - <small>STRING</small> - The timezone for the schedule</li>
        <li><code>runningUserId</code> - <small>STRING</small> - The user or service account under which the scheduled runs execute</li>
        <li><code>startDate</code> - <small>OPTIONAL | STRING</small> - The date when the schedule becomes active</li>
        <li><code>endDate</code> - <small>OPTIONAL | STRING</small> - The date when the schedule stops running</li>
        <li><code>maxRuns</code> - <small>OPTIONAL | INTEGER</small> - The maximum number of scheduled runs</li>
        <li><code>scTunnelName</code> - <small>OPTIONAL | STRING</small> - The name of the Sauce Connect tunnel to use</li>
        <li><code>buildName</code> - <small>OPTIONAL | STRING</small> - The name of the build to associate with scheduled runs</li>
      </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>testSuiteIds</code></td>
    <td><p><small>| BODY | OPTIONAL | ARRAY of STRINGS |</small></p><p>The suite IDs to run as part of the schedule</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>stateName</code></td>
    <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The state of the schedule</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/v1/ai-authoring/test-schedules' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "string",
  "settings": {
    "cron": "0 */1 * * *",
    "timezone": "America/New_York",
    "runningUserId": "string",
    "startDate": "string",
    "endDate": "string",
    "maxRuns": 0,
    "scTunnelName": "string",
    "buildName": "string"
  },
  "testSuiteIds": [
    "string"
  ],
  "stateName": "ENABLED"
}' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/ai-authoring/test-schedules' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "string",
  "settings": {
    "cron": "0 */1 * * *",
    "timezone": "America/New_York",
    "runningUserId": "string",
    "startDate": "string",
    "endDate": "string",
    "maxRuns": 0,
    "scTunnelName": "string",
    "buildName": "string"
  },
  "testSuiteIds": [
    "string"
  ],
  "stateName": "ENABLED"
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>201</code></td>
    <td colSpan='2'>Created test schedule</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>
      <ul>
        <li>Invalid request body</li>
        <li>Test suites not found</li>
        <li>Running user not found</li>
      </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "creationDate" : "2026-03-24T23:28:37.264Z",
      "creatorUserId" : "<userId>",
      "creatorUserName" : "sauceBot",
      "id" : "<id>",
      "lastModifierUserId" : "<userId>",
      "lastModifierUserName" : "sauceBot",
      "lastUpdateDate" : "2026-03-24T23:28:37.264Z",
      "name" : "Regression scheduled run",
      "orgId" : "<orgId>",
      "settings" : {
         "buildName" : "Build",
         "cron" : "0 1 * * *",
         "endDate" : "2026-06-25T12:00:00.000Z",
         "maxRuns" : 5,
         "runningUserId" : "<userId>",
         "scTunnelName" : "none",
         "startDate" : "2026-06-24T12:00:00.000Z",
         "timezone" : "America/New_York"
      },
      "state" : {
         "nextRunDate" : "2026-06-25T05:00:00.000Z",
         "remainingRuns" : 5,
         "runCount" : 0,
         "stateName" : "ENABLED"
      },
      "teamId" : "<teamId>",
      "testSuiteIds" : [
         "<testSuiteId>"
      ]
   }
}
```

</details>

---

### Get a Test Schedule

<details>
<summary><span className="api get">GET</span> <code>/v1/ai-authoring/test-schedules/&#123;id&#125;</code></summary>

Returns the details of a specific test schedule.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The UUID of the test schedule</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/ai-authoring/test-schedules/<id>" | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/test-schedules/<id>" | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success fetching test schedule details</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid path parameters</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test schedule not found</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "creationDate" : "2026-03-24T23:28:37.264Z",
      "creatorUserId" : "<userId>",
      "creatorUserName" : "sauceBot",
      "id" : "<id>",
      "lastModifierUserId" : "<userId>",
      "lastModifierUserName" : "sauceBot",
      "lastUpdateDate" : "2026-03-24T23:28:37.264Z",
      "name" : "Regression scheduled run",
      "orgId" : "<orgId>",
      "settings" : {
         "buildName" : "Build",
         "cron" : "0 1 * * *",
         "endDate" : "2026-06-25T12:00:00.000Z",
         "maxRuns" : 5,
         "runningUserId" : "<userId>",
         "scTunnelName" : "none",
         "startDate" : "2026-06-24T12:00:00.000Z",
         "timezone" : "America/New_York"
      },
      "state" : {
         "nextRunDate" : "2026-06-25T05:00:00.000Z",
         "remainingRuns" : 5,
         "runCount" : 0,
         "stateName" : "ENABLED"
      },
      "teamId" : "<teamId>",
      "testSuiteIds" : [
         "<testSuiteId>"
      ]
   }
}
```

</details>

---

### Update a Test Schedule

<details>
<summary><span className="api post">POST</span> <code>/v1/ai-authoring/test-schedules/&#123;id&#125;</code></summary>

Updates the specified test schedule.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The UUID of the test schedule to update</p></td>
    </tr>
  </tbody>
  <tbody>
  <tr>
    <td><code>name</code></td>
    <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>An updated name for the schedule</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>settings</code></td>
    <td>
      <p><small>| BODY | OPTIONAL | OBJECT |</small></p>
      <p>The updated schedule configuration. The available attributes are:</p>
      <ul>
        <li><code>cron</code> - <small>OPTIONAL | STRING</small> - A cron expression defining the schedule interval</li>
        <li><code>timezone</code> - <small>OPTIONAL | STRING</small> - The timezone for the schedule</li>
        <li><code>runningUserId</code> - <small>OPTIONAL | STRING</small> - The user or service account under which the scheduled runs execute</li>
        <li><code>startDate</code> - <small>OPTIONAL | STRING</small> - The date when the schedule becomes active. Can be set to <code>null</code>, which will clear the field</li>
        <li><code>endDate</code> - <small>OPTIONAL | STRING</small> - The date when the schedule stops running. Can be set to <code>null</code>, which will clear the field</li>
        <li><code>maxRuns</code> - <small>OPTIONAL | INTEGER</small> - The maximum number of scheduled runs. Can be set to <code>null</code>, which will clear the field</li>
        <li><code>scTunnelName</code> - <small>OPTIONAL | STRING</small> - The name of the Sauce Connect tunnel to use. Can be set to <code>null</code>, which will clear the field</li>
        <li><code>buildName</code> - <small>OPTIONAL | STRING</small> - The name of the build to associate with scheduled runs. Can be set to <code>null</code>, which will clear the field</li>
      </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>testSuiteIds</code></td>
    <td><p><small>| BODY | OPTIONAL | ARRAY of STRINGS |</small></p><p>The suite IDs to run as part of the schedule</p></td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>stateName</code></td>
    <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The state of the schedule</p></td>
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
--request POST 'https://api.us-west-1.saucelabs.com/v1/ai-authoring/test-schedules/<id>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Updated nightly regression",
  "settings": {
    "cron": "0 2 * * *"
  },
  "stateName": "ENABLED"
}' | json_pp
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request POST 'https://api.eu-central-1.saucelabs.com/v1/ai-authoring/test-schedules/<id>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Updated nightly regression",
  "settings": {
    "cron": "0 2 * * *"
  },
  "stateName": "ENABLED"
}' | json_pp
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Success updating test schedule</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>
      <ul>
        <li>Invalid path parameters</li>
        <li>Invalid request body</li>
        <li>Invalid test suites</li>
        <li>Test suites not found</li>
        <li>Running user not found</li>
      </ul>
    </td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test schedule not found</td>
  </tr>
</tbody>
</table>

```jsx title="Sample Response"
{
   "data" : {
      "creationDate" : "2026-03-24T23:28:37.264Z",
      "creatorUserId" : "<userId>",
      "creatorUserName" : "sauceBot",
      "id" : "<id>",
      "lastModifierUserId" : "<userId>",
      "lastModifierUserName" : "sauceBot",
      "lastUpdateDate" : "2026-03-24T23:28:37.264Z",
      "name" : "Updated nightly regression",
      "orgId" : "<orgId>",
      "settings" : {
         "buildName" : "Build",
         "cron" : "0 1 * * *",
         "endDate" : "2026-06-25T12:00:00.000Z",
         "maxRuns" : 5,
         "runningUserId" : "<userId>",
         "scTunnelName" : "none",
         "startDate" : "2026-06-24T12:00:00.000Z",
         "timezone" : "America/New_York"
      },
      "state" : {
         "nextRunDate" : "2026-06-25T05:00:00.000Z",
         "remainingRuns" : 5,
         "runCount" : 0,
         "stateName" : "ENABLED"
      },
      "teamId" : "<teamId>",
      "testSuiteIds" : [
         "<testSuiteId>"
      ]
   }
}
```

</details>

---

### Delete a Test Schedule

<details>
<summary><span className="api delete">DELETE</span> <code>/v1/ai-authoring/test-schedules/&#123;id&#125;</code></summary>

Deletes the specified test schedule.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>The UUID of the test schedule to delete.</p></td>
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
--request DELETE "https://api.us-west-1.saucelabs.com/v1/ai-authoring/test-schedules/<id>"
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request DELETE "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/test-schedules/<id>"
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>204</code></td>
    <td colSpan='2'>Test schedule deleted</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Test schedule not found</td>
  </tr>
</tbody>
</table>

</details>

---

## Storage

### Get Artifact File

<details>
<summary><span className="api get">GET</span> <code>/v1/ai-authoring/storage/&#123;id&#125;</code></summary>
<p/>

Downloads a stored artifact (for example, screenshot) by its UUID.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>id</code></td>
     <td><p><small>| PATH | REQUIRED | STRING |</small></p><p>Artifact UUID</p></td>
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
--request GET "https://api.us-west-1.saucelabs.com/v1/ai-authoring/storage/<id>" \
--output <FILE>
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET "https://api.eu-central-1.saucelabs.com/v1/ai-authoring/storage/<id>" \
--output <FILE>
```

</TabItem>
</Tabs>

#### Responses

<table id="table-api">
<tbody>
  <tr>
    <td><code>200</code></td>
    <td colSpan='2'>Artifact file stream</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>400</code></td>
    <td colSpan='2'>Invalid path parameters</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>401</code></td>
    <td colSpan='2'>Missing or invalid authentication header</td>
  </tr>
</tbody>
<tbody>
  <tr>
    <td><code>404</code></td>
    <td colSpan='2'>Artifact not found</td>
  </tr>
</tbody>
</table>

The `200` response returns the artifact as a binary file stream (`application/octet-stream`). Error responses return JSON.

</details>

---
