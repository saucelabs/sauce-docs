---
id: sumo
title: Sumo Logic Partner Integration
sidebar_label: Sumo Logic
description: Automatically view your Sauce Labs test results in a custom Sumo Logic dashboard.
keywords:
  - send-test-results
  - sumo logic
  - how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs has partners with Sumo Logic to provide a dynamic integration in which Sauce Labs test results are automatically pushed to a custom Sauce Labs dashboard in Sumo Logic via a webhook.

## What You'll Need

* A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* A Sumo Logic account
* A Sumo Logic webhook URL

## Collect Logs for the Sauce Labs App

1. Add a Collector.
2. Configure a source.
  a. Source type: http
  b. Gives your a URL to set up your webhook.


### Add the Source URL to your Sumo Logic Integration in Sauce Labs

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.staging.saucelabs.net/integrations) page.
1. Click the Sumo Logic **Enable** button.
1. Enter the source URL generated for you by your Sumo Logic collection.
1. Click **Save**.

Sauce Labs will now automatically push your VDC jobs data to the Sumo Logic collection.

<!-- Question: Can we configure more than one Sumo webhook URL? -->

:::note Multiple Data Centers
The Sumo Logic integration is specific to the data center that is active for your Sauce Labs account during setup. If you have access to multiple data centers, you must switch into each data center and repeat the Sumo Logic setup process in order to push jobs data from both data centers to your Sumo Logic collection.
:::

### Event Payload

Each event sends a POST request containing the job object with the following data fields as its payload:

|Data Field|Format|Description|
|---|---|---|
|`id` | STRING | Sauce Labs unique identifier of the test.|
|`creation_time` | DATE-TIME | The date-time value, in `YYYY-MM-DDTHH:mm:ss.fffZ` format, at which the test launched.|
|`modification_time` | DATE-TIME | The date-time value, in `YYYY-MM-DDTHH:mm:ss.fffZ` format, at which the test changed. This is typically due to a change in status, which triggers a new event and new webhook post.|
|`owner` | STRING | The Sauce Labs user who initiated the test.|
|`owner_id` | STRING | The unique identifier of the test owner.|
|`org_id` | STRING | The unique identifier of the Sauce Labs organization to which the test owner belongs.|
|`team_id` | STRING | The unique identifier of the Sauce Labs team of which the test owner is a member.|
|`team_name` | STRING | The name of the team of which the test owner is a member.|
|`group_id` | STRING | The unique identifier of the Sauce Labs group of which the test owner is a member.|
|`status` | ENUM | The status of the test at the time the webhook event was triggered. Possible values are:<br/><ul><li>`in-progress`</li><li>`complete`</li><li>`passed`</li><li>`failed`</li><li>`errored`</li></ul>|
|`passed` | BOOLEAN | If the test includes pass/fail assertions, this field states whether the test passed. Possible values are:<br/><ul><li>`1` true</li><li>`0` false</li></ul>|
|`name` | STRING | The name of the test.|
|`browser_name` | STRING | The browser in which the test ran.|
|`browser_version` | INTEGER | The version of the browser in which the test ran.|
|`os_name` | STRING | The operating system on which the test ran.|
|`os_version` | STRING | The version of the operating system on which the test ran.|
|`duration_sec`| INTEGER | The length of time that the test took to complete. This value is only populated in the final event push for the test.|
|`visibility`| ENUM | Who within the Sauce Labs organization can see the test. Possible values are:<br/><ul><li>`PUBLIC`</li><li>`PUBLIC RESTRICTED`</li><li>`SHARE`</li><li>`TEAM`</li><li>`PRIVATE`</li></ul>See [Sharing Test Results](/test-results/sharing-test-results/) for visibility definitions.|
|`tags`| ARRAY | A set of string values representing custom labels for the test.|
|`device` | STRING | For mobile app tests, the Sauce Labs unique identifier of the device on which the test was run. |
|`app` | STRING | The App Storage identifier of uploaded test materials, such as the mobile app under test or a project test file.|
|`error`| STRING | An error that occurred during the test.|
|`exception`| STRING | An exception that was thrown during the test.|
|`commit_id` | STRING | Commit information related to your development repo, if you have added the [`custom-data.commit`](/dev/test-configuration-options/#custom-data) capability to your test. |
|`branch_name` | STRING | The relevant branch of the referenced commit, if you have added the [`custom-data.branch`](/dev/test-configuration-options/#custom-data) capability to your test. |
|`build` | STRING | A custom value that can group multiple related tests.|
|`automation_backend` | STRING | The framework on which the test is run.|
|`data_type` | ENUM | The type of event that triggered the webhook. Possible values are: <br/><ul><li>`vdc_test`</li><li>`rdc_test` <small><span className="sauceDBlue">Coming Soon</span></small></li></ul>|


### Remove a Sumo Logic Source

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.staging.saucelabs.net/integrations) page.
1. Click the Sumo Logic **Enable** button.
1. Click **Remove Configurations**.

Sauce Labs will no longer push your VDC jobs data to the Sumo Logic collection.

## Install the Sauce Labs App in Sumo Logic
