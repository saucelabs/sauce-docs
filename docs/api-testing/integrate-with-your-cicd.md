---
id: integrate-with-your-cicd
title: "Integrate with CI/CD Platforms"
sidebar_label: "Integrate with CI/CD"
description: "Using Sauce Labs API Testing or CLI, you can seamlessly integrate continuous API testing into your CI/CD pipeline."
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Description

Execute API tests and interact with Sauce Labs API Testing (either locally or in a pipeline) using our API Testing CLI tool, `apifctl`.

## Usage

`$ docker run quay.io/saucelabs/apifctl [COMMAND] [OPTIONS]`

## What You'll Need
* A [Docker](https://docs.docker.com/get-docker/) account.
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).

### Adding Webhooks
To utilize most `apifctl` functionalities, you'll need to add a webhook to your API Testing Project by either generating one or retrieve one from your Dashboard.

Below is how webhook URLs are formatted, where `<username>` is your Sauce Labs username, `<access_key>` is your Sauce Labs access key, and the `<hookId>` is what you would generate in the API Testing UI.
```bash
https://<username>:<access_key>@domain/api-testing/rest/v4/<hookId>
```

To generate a webhook:
1. Navigate to your Project and select the **WebHooks** tab.<br/>
   <img src={useBaseUrl('img/api-fortress/2021/04/webHooksSection.png')} alt="webhook screenshot"/>
2. Select **Create Hook**.<br/>
   <img src={useBaseUrl('img/api-fortress/2021/04/createHook.png')} alt="Create New WebHook"/>
3. Enter the field details and click **Save**.<br/>
   <img src={useBaseUrl('img/api-fortress/2021/04/sampleHook.png')} alt="sample webhook details" width="500" />
4. A generated **Hook URL** will then appear. It will also become available in your [Sauce Labs user settings](https://app.saucelabs.com/user-settings). Copy the **Hook URL** to your clipboard and use it either locally or as part of CI build. <br/>
   <img src={useBaseUrl('img/api-fortress/2021/04/hookURL.png')} alt="sample Hook URL"/>



## `apifctl` Commands


### `run`

Runs a single test, using `hookId` and `testId`. The `testId` is typically located in the URL when viewing the test through the API Testing UI (e.g., `/api-testing/project/<projectId>/test/<testId>/`).

```bash
docker run quay.io/saucelabs/apifctl run
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-i &#60;test ID&#62;</code>](/api-testing/integrate-with-your-cicd/#-i-test-id) <small>| REQUIRED | STRING |</small>
* [<code>-E &#60;environment variable(s)&#62;</code>](/api-testing/integrate-with-your-cicd/#-e-environment-variables) <small>| OPTIONAL | STRING |</small>  
* [<code>-S &#60;execute synchronously&#62;</code>](/api-testing/integrate-with-your-cicd/#-s) <small>| OPTIONAL | STRING |</small>
* [<code>-T &#60;tunnel ID&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-tunnel-id) <small>| OPTIONAL | STRING |</small>  
* [<code>-f &#60;format&#62;</code>](/api-testing/integrate-with-your-cicd/#-f-data-format) <small>| OPTIONAL | STRING |</small>  

```bash title="Full Example"
docker run quay.io/saucelabs/apifctl run \
-H https://<username>:<accessKey>@api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId> \
-i 123a1a123456a12345aa1aaa
```

---
### `run-all`

Runs all the complete tests in the Project referenced by the hook.

```bash
docker run quay.io/saucelabs/apifctl run-all
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-E &#60;environment variable(s)&#62;</code>](/api-testing/integrate-with-your-cicd/#-e-environment-variables) <small>| OPTIONAL | STRING |</small>  
* [<code>-S &#60;execute synchronously&#62;</code>](/api-testing/integrate-with-your-cicd/#-s) <small>| OPTIONAL | STRING |</small>
* [<code>-T &#60;tunnel ID&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-tunnel-id) <small>| OPTIONAL | STRING |</small>  
* [<code>-f &#60;format&#62;</code>](/api-testing/integrate-with-your-cicd/#-f-data-format) <small>| OPTIONAL | STRING |</small>   

```bash title="Full Example"
docker run quay.io/saucelabs/apifctl run-all -H \
https://<username>:<accessKey>@api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId>
```

---
### `run-tag`

Runs all the tests marked with a specific tag.

```bash
docker run quay.io/saucelabs/apifctl run-tag
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-t &#60;tag(s)&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-tags) <small>| REQUIRED | STRING |</small>
* [<code>-E &#60;environment variable(s)&#62;</code>](/api-testing/integrate-with-your-cicd/#-e-environment-variables) <small>| OPTIONAL | STRING |</small>  
* [<code>-S &#60;execute synchronously&#62;</code>](/api-testing/integrate-with-your-cicd/#-s) <small>| OPTIONAL | STRING |</small>
* [<code>-T &#60;tunnel ID&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-tunnel-id) <small>| OPTIONAL | STRING |</small>  
* [<code>-f &#60;format&#62;</code>](/api-testing/integrate-with-your-cicd/#-f-data-format) <small>| OPTIONAL | STRING |</small>   

```bash title="Full Example"
docker run quay.io/saucelabs/apifctl run-tag \
-H https://<username>:<accessKey>@api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId> \
-tag production
```

---
### `exec`

Sends a test residing in the local file system (directory with `unit.xml` and `input.xml`) to the cloud for execution.

```bash
docker run quay.io/saucelabs/apifctl exec
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-p &#60;local path to test files&#62;</code>](/api-testing/integrate-with-your-cicd/#-p-local-path-to-file) <small>| REQUIRED | STRING |</small>
* [<code>-E &#60;environment variable(s)&#62;</code>](/api-testing/integrate-with-your-cicd/#-e-environment-variables) <small>| OPTIONAL | STRING |</small>  
* [<code>-S &#60;execute synchronously&#62;</code>](/api-testing/integrate-with-your-cicd/#-s) <small>| OPTIONAL | STRING |</small>
* [<code>-T &#60;tunnel ID&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-tunnel-id) <small>| OPTIONAL | STRING |</small>  
* [<code>-f &#60;format&#62;</code>](/api-testing/integrate-with-your-cicd/#-f-data-format) <small>| OPTIONAL | STRING |</small>  
* [<code>-n &#60;name of test&#62;</code>](/api-testing/integrate-with-your-cicd/#-n-name-of-test) <small>| OPTIONAL | STRING |</small>  
* [<code>-t &#60;tag(s)&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-tags) <small>| OPTIONAL | STRING |</small>


```bash title="Full Example"
docker run -v $(pwd)/tests:/tests quay.io/saucelabs/apifctl exec \
-H https://<username>:<accessKey>@api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId> \
-p /tests/test_abc \
-n local_test \
-t product,production
```

---
### `upload`

Uploads a local test residing in your local file system (directory with `unit.xml` and `input.xml`) to the cloud for storage.

```bash
docker run quay.io/saucelabs/apifctl upload
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-p &#60;local path to test files&#62;</code>](/api-testing/integrate-with-your-cicd/#-p-local-path-to-file) <small>| REQUIRED | STRING |</small>
* [<code>-n &#60;name of test&#62;</code>](/api-testing/integrate-with-your-cicd/#-n-name-of-test) <small>| OPTIONAL | STRING |</small>  
* [<code>-t &#60;tag(s)&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-tags) <small>| OPTIONAL | STRING |</small>
* [<code>-d &#60;test description&#62;</code>](/api-testing/integrate-with-your-cicd/#-d-test-description) <small>| OPTIONAL | STRING |</small>

```bash title="Full Example"
docker run -v $(pwd)/tests:/tests quay.io/saucelabs/apifctl upload \
-H https://<username>:<accessKey>@api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookId> \
-p /tests/test_abc
```

---
### `vault-get`

Displays the Project vault from the cloud.

```bash
docker run quay.io/saucelabs/apifctl vault-get
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>

---
### `vault-update`

It updates the Project vault on the cloud.

```bash
docker run quay.io/saucelabs/apifctl vault-update
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-p &#60;local path to file&#62;</code>](/api-testing/integrate-with-your-cicd/#-p-local-path-to-file) <small>| OPTIONAL | STRING |</small>
* [<code>-v &#60;variables&#62;</code>](/api-testing/integrate-with-your-cicd/#-v-variables) <small>| OPTIONAL | STRING |</small>

```bash title="Full Example"
docker run quay.io/saucelabs/apifctl vault-update \
-p /tests/vault/vault.json \
-v key=production,id=123
```

---
### `events`

Displays all events of a Project.

```bash
docker run quay.io/saucelabs/apifctl events  
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-f &#60;from time&#62;</code>](/api-testing/integrate-with-your-cicd/#-f-from-time) <small>| OPTIONAL | STRING |</small>
* [<code>-l &#60;limit&#62;</code>](/api-testing/integrate-with-your-cicd/#-l-limit) <small>| OPTIONAL | INTEGER |</small>
* [<code>-o &#60;offset&#62;</code>](/api-testing/integrate-with-your-cicd/#-o-offset) <small>| OPTIONAL | INTEGER |</small>
* [<code>-t &#60;to time&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-to-time) <small>| OPTIONAL | STRING |</small>

---
### `event`

Displays a specific event using its event ID.

```bash
docker run quay.io/saucelabs/apifctl event
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-i &#60;event ID&#62;</code>](/api-testing/integrate-with-your-cicd/#-i-event-id) <small>| REQUIRED | STRING |</small>

```bash title=Full Example"
docker run quay.io/saucelabs/apifctl event \
-H https://john.smith:{access_key}@api.us-west-1.saucelabs.com/api-testing/rest/v4/36acf9c1-d5ad-4273-a233-a85470e1f502
-i 123456789abc1a1abcdef123 \
```

---
### `metrics`

Displays metrics of a Project.

```bash
docker run quay.io/saucelabs/apifctl metrics
```

Available Options:
* [<code>-H &#60;webhook&#62;</code>](/api-testing/integrate-with-your-cicd/#-h-webhook) <small>| REQUIRED | STRING |</small>
* [<code>-f &#60;from time&#62;</code>](/api-testing/integrate-with-your-cicd/#-f-from-time) <small>| OPTIONAL | STRING |</small>
* [<code>-l &#60;limit&#62;</code>](/api-testing/integrate-with-your-cicd/#-l-limit) <small>| OPTIONAL | INTEGER |</small>
* [<code>-o &#60;offset&#62;</code>](/api-testing/integrate-with-your-cicd/#-o-offset) <small>| OPTIONAL | INTEGER |</small>
* [<code>-t &#60;to time&#62;</code>](/api-testing/integrate-with-your-cicd/#-t-to-time) <small>| OPTIONAL | STRING |</small>

---




## `apifctl` Options

### `-H <webhook>`
<p><small>| STRING |</small></p>

Specifies the webhook URL (e.g., -H `https://<username>:<accesskey>@api.us-west-1.saucelabs.com/api-testing/rest/v4/<hookID>`)

---
### `-E <environment variable(s)>`
<p><small>| STRING |</small></p>

Sets environment variables with your command. Enter your variables as a comma-separated list.

```bash
-E domain=staging.example.com,id=123
```

---
### `-f <data format>`
<p><small>| STRING |</small></p>

Sets the data format to one of two possible values: `json` or `junit`. Default is `json`.

```bash
-f junit
```

---
### `-f <from time>`
<p><small>| STRING |</small></p>

Identifies the start date of the events you want to see (e.g., `-f 2021-10-21T14:00`).

---
### `-t <to time>`
<p><small>| STRING |</small></p>

Identifies the end date of the events you want to see (e.g., `-t 2021-10-31T15:00`).

---
### `-t <tag(s)>`
<p><small>| STRING |</small></p>

Adds a set of tags to the resulting event. Format as a comma-separated list of tags you want to assign to the test (e.g., `-t product,production`).

---
### `-n <name of test>`
<p><small>| STRING |</small></p>

Identifies the name of the test you want to assign to. Default is the name of the test directory (e.g., `-n local_test`).

---
### `-i <test ID>`
<p><small>| STRING |</small></p>

Identifies the ID of a complete test (e.g., `-i 123a1a123456a12345aa1aaa`).

---
### `-S`
<p><small>| ? |</small></p>

Syncs execution so that `apifctl` will wait until all results are available, and then prints them.

---
### `-T <tunnel ID>`
<p><small>| STRING |</small></p>

Specifies your tunnel ID for running tests using Sauce Connect Proxy.

<table id="table-api">  
  <tbody>
  <tr>
  <td colSpan='2'><strong>Parameters for <code>-T</code></strong></td>
  </tr>
    <tr>
     <td><code>&#60;username&#62;:&#60;tunnelName&#62;</code></td>
     <td><p><small>| OPTIONAL | STRING |</small></p><p>In case of shared tunnels, tunnel names may have duplicates, therefore you can provide an explicit owner to exactly identify which tunnel (e.g., <code>kim:sauceconnect</code>).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>&#60;tunnelName&#62;</code></td>
     <td><p><small>| OPTIONAL | STRING |</small></p><p>Also known as "tunnel-identifier" in the Sauce Connect world. That's a named tunnel. This is the suggested way to use the tunnels (e.g., <code>-T sauceconnect</code>).</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>&#60;anonymous&#62;</code></td>
     <td><p><small>| OPTIONAL | STRING |</small></p><p>If you start an unnamed tunnel, you can use anonymous (using the same user's credentials) to use the first unnamed tunnel available. This is not recommended and SC support of this mode for the future is uncertain (e.g., <code>-T anonymous</code>.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>&#60;tunnelId&#62;</code></td>
     <td><p><small>| OPTIONAL | STRING |</small></p><p>The unique id of the tunnel. Generally used with unnamed tunnels. For the same reason as the previous mode, this is not recommended (e.g., <code>-T 1a12345678900a12345678aaa123456a</code>).</p></td>
    </tr>
  </tbody>
</table>

---
### `-p <local path to file>`
<p><small>| STRING |</small></p>

#### For the `vault-update` command
Local path to the folder containing your Vault file. Example: `-p /tests/vault/vault.json`.

#### For the  `exec` or `upload` command
Local path to the folder containing your test files (both unit.xml and input.xml). Example: `-p /tests/product_update` (where product_update is the folder containing unit.xml and input.xml).

---
### `-d <test description>`
<p><small>| STRING |</small></p>

The description you want to add to your test.

---
### `-v <variables>`
<p><small>| STRING |</small></p>

It’s a String in the format `key=value` with the list of the variable separated by a comma.

---
### `-l <limit>`
<p><small>| INTEGER |</small></p>

Identifies the maximum number of metrics to be shown in the list. Default value is `100`.

---
### `-o <offset>`
<p><small>| INTEGER |</small></p>

Specifies the number of events to be skipped from the beginning of the list. Default value is `0`.

---
### `-i <event ID>`
<p><small>| STRING |</small></p>

Identifies the ID of the event you want to see.

---

## More Information

* [Legacy API Fortress CLI tool, `apif-auto`](/api-testing/on-prem/ci/apif-auto)
