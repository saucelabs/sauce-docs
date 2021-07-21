---
id: api
title: REST API Integration with Visual E2E Testing
sidebar_label: API Reference
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What You'll Need

* Your project's **API Key**, which is available from the Project Dashboard. To access the API, each request must have a custom header named `x-api-key`, along with the value of the API key (e.g., `x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4`).
* Your project's **Project ID**, which is available from the **Project** dropdown menu.
* Depending on your test case, you may also need your **Test Group ID**, which is available from the Test Group's Project Dashboard.


## Available Actions

The **Base URL** for all endpoints below is **`https://screener.io`**. All endpoints must be prefixed with this.

### Run Test Group

<details><summary><span className="api post">POST</span><code>/projects/&#123;Project ID&#125;/groups/&#123;Group ID&#125;/queue</code></summary>
<p/>

* Runs all tests in a Test Group. If there is no available test concurrency, then the test(s) will be queued.
* Useful for automatically running Screener tests on a schedule, such as part of a Cron job. Email notifications will be sent to subscribers when changes are found.
* This API endpoint is for running Screener tests only (i.e., tests created using Screener Pages or Recorder). To run WebDriver tests, please refer to our [WebDriver documentation](/visual/e2e-testing/integrations/selenium-webdriver).
* This API endpoint only kicks off a test run; it does not wait for tests to finish, nor does it report results. To pass/fail builds based on Screener results, please refer to our [Continuous Integration documentation](/visual/e2e-testing/integrations/continuous-integration).

| Parameter |	Description
| :--- | :---
| `Project ID` | Project the test belongs to.
| `Group ID` | Valid Test Group ID for the tests you want to run.

```bash title="Sample Request"
curl --header 'x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4' --data '' https://screener.io/api/projects/524481fddbcf9eb1cd0002123/groups/52538627afa3e1f10c001112/queue
```

```jsx title="Sample Response"
{ success: true }
```
</details>

---


### Get All Projects

<details><summary><span className="api get">GET</span><code>/api/projects</code></summary>
<p/>

```bash title="Sample Request"
curl --header 'x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4' https://screener.io/api/projects
```

```jsx title="Sample Response"
{
  "list": [{
    "_id": "524481fddbcf9eb1cd0002123",
    "title": "Project Name"
  }]
}
```

</details>

---

### Get All Test Groups for a Project

<details><summary><span className="api get">GET</span><code>/api/projects/&#123;Project ID&#125;/groups</code></summary>
<p/>

| Parameter |	Description
| :--- | :---
| `Project ID` | Project the test belongs to.

```bash title="Sample Request"
curl --header 'x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4' https://screener.io/api/projects/524481fddbcf9eb1cd0002123/groups
```

```jsx title="Sample Response"
{
  "list": [{
    "_id": "52538627afa3e1f10c001112",
    "name": "Screener Smoketest",
    "baseUrl": "http://smoketest.screener.io"
  }]
}
```
</details>

---

### Get All Test Reports for a Test Group

<details><summary><span className="api get">GET</span><code>/api/projects/&#123;Project ID&#125;/groups/&#123;Group ID&#125;/report</code></summary>
<p/>

Get reporting stats on all tests for a specific Test Group. The report includes individual test totals.


| Parameter |	Description
| :--- | :---
| `Project ID` | Project the Test Group belongs to.
| `Group ID`| Valid Test Group ID for the tests you want to run.

```bash title="Sample Request"
curl --header 'x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4' https://screener.io/api/projects/524481fddbcf9eb1cd0002123/groups/52538627afa3e1f10c001112/report
```

```jsx title="Sample Response"
{
 "list": [
   {
     "_id": "54080d74872f997b04000025",
     "browserName": "chrome",
     "environment": "",
     "group": "54080cd3872f997b0400001d",
     "groupName": "Test Group Name",
     "id": "Chrome",
     "name": "Chrome",
     "project": "53ff7334fd1f9f245a000004",
     "resolution": "1600x900",
     "updatedAt": "2014-09-10T07:20:45.416Z",
     "version": "",
     "totals": {
       "new": 6,
       "changed": 3,
       "accepted": 7,
       "rejected": 0,
       "all": 16
     }
   }
 ]
}
```

</details>

---

### Get Pages Object for a Test Group

<details><summary><span className="api get">GET</span><code>/api/projects/&#123;Project ID&#125;/groups/&#123;Group ID&#125;/pages</code></summary>
<p/>

| Parameter |	Description
| :--- | :---
| `Project ID`| Project the Test Group belongs to.
| `Group ID` | Valid Test Group ID for the tests you want to run.

```bash title="Sample Request"
curl --header 'x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4' https://screener.io/api/projects/524481fddbcf9eb1cd0002123/groups/52538627afa3e1f10c001112/pages
```

```jsx title="Sample Response"
{
 "content": "{\"pages\":[{\"path\":\"/home\"}]}"
}
```
>**NOTE**: The "content" property returned will need to be parsed as JSON.

</details>

---

### Get Script for a Page

<details><summary><span className="api get">GET</span><code>/api/projects/&#123;Project ID&#125;/groups/&#123;Group ID&#125;/scripts/&#123;Page Path&#125;</code></summary>
<p/>

| Parameter |	Description
| :--- | :---
| `Project ID` | Project the Test Group belongs to.
| `Group ID` | Valid Test Group ID for the tests you want to run.
| `Page Path`	| URL-encoded page path (e.g., for `/`, the url-encoded path would be `%2F`).

```bash title="Sample Request"
curl --header 'x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4' https://screener.io/api/projects/524481fddbcf9eb1cd0002123/groups/52538627afa3e1f10c001112/scripts/%2Fhome
```

```jsx title="Sample Response"
{
 "content": "{\n  \"type\": \"script\",\n  \"seleniumVersion\": 2,\n  \"formatVersion\": 1,\n  \"steps\": []\n}"
}
```
>**NOTE**: The "content" property returned will need to be parsed as JSON.

</details>

---

### Get All States for a Test

<details><summary><span className="api get">GET</span><code>/api/projects/&#123;Project ID&#125;/groups/&#123;Group ID&#125;/tests/&#123;Test ID&#125;/states</code></summary>
<p/>

| Parameter |	Description
| :--- | :---
| `Project ID` | Project the Test Group belongs to
| `Group ID` | Valid Test Group ID for the tests you want to run
| `Test ID` | Valid Test ID in Test Group

```bash title="Sample Request"
curl --header 'x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4' https://screener.io/api/projects/524481fddbcf9eb1cd0002123/groups/52538627afa3e1f10c001112/tests/54080d74872f997b04000025/states
```

```jsx title="Sample Response"
{
 "states": [{
   "id": "i9jhfasd-5h5ago-0",
   "name": "State Name",
   "status": "accepted",
   "screenshotUrl": "https://screener.io/..."
  }]
}
```

>**NOTE**: The "screenshotUrl" for each state is a temporary url which is available for only 15 minutes from the time of the API request.

</details>

---

### Get Recent Test Run History

<details><summary><span className="api get">GET</span><code>/api/projects/&#123;Project ID&#125;/groups/&#123;Group ID&#125;/tests/history</code></summary>
<p/>

| Parameter |	Description
| :--- | :---
| `Project ID` | Project the Test Group belongs to.
| `Group ID` | Valid Test Group ID for the tests you want to run.
| `Status (Optional)` | Filter by Test Run status. Optional query string parameter (e.g., `&status=complete`).
| `Build	(Optional)` | Filter by Build ID. Optional query string parameter (e.g., `&build=build-1234`).


```bash title="Sample Request"
curl --header 'x-api-key: f092961a-63b7-42c7-8687-b999c9a903b4' https://screener.io/api/projects/524481fddbcf9eb1cd0002123/groups/52538627afa3e1f10c001112/tests/history
```

```jsx title="Sample Response"
{
"list": [
  {
    "_id": "550b6cc53c7f089004000019",
    "name": "Test 1",
    "project": "524481fddbcf9eb1cd0002123",
    "group": "52538627afa3e1f10c001112",
    "build": "build-1234",
    "resolution": "1280x1024",
    "browserName": "firefox",
    "environment": "",
    "status": "complete",
    "start": "2015-03-20T00:43:26.229Z",
    "end": "2015-03-20T00:47:53.241Z"
  }]
}
```

>**NOTE**: The Test Run is no longer running when it has one of the following statuses: complete, error, timeout, cancelled.

</details>
