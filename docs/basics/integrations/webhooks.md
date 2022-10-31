---
id: webhooks
title: Webhooks Integration
sidebar_label: Webhooks Integration
description: Setup a webhook to which Sauce Labs test results are automatically pushed.
keywords:
- get-test-results
- webhooks
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Sauce Labs Webhooks integration allows you to specify a URL to which Sauce Labs will push test result data as it becomes available, rather than forcing you to constantly poll for updates.

## What You'll Need

* A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* A URL able to consume events data pushed from Sauce Labs


## Configure a Webhook

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.saucelabs.com/integrations) page.
1. Click the Webhooks **Enable** button.
1. Enter the URL of the endpoint to which you would like Sauce Labs events pushed.
1. Select the events you wish to receive:
    * **Virtual Devices**: Receive test result events for jobs run on Sauce Labs desktop browsers and mobile emulators and simulators.
    * **Real Devices**: Receive test result events for Appium jobs run on Sauce Labs real devices.
1. For each selected event type, choose whether you wish to receive data for all completed tests or only tests that failed.
1. Click **Save** to complete your configuration. Your webhook enablement appears under the **Saved Configurations** section. You can configure up to ten webhook integrations.


## Delete a Webhook

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.saucelabs.com/integrations) page.
1. Click the Webhooks **Enable** button.
1. In the **Saved Configurations** section, click the trashcan icon of the webhook configuration you wish to delete.



## Event Payload

Each event sends a POST request containing the job object with the following data fields as its payload:

|Data Field|Format|Description|
|---|---|---|
|`id` | STRING | Sauce Labs unique identifier of the test.|
|`creation_time` | DATE-TIME | The date-time value, in `YYYY-MM-DDTHH:mm:ssZ` format, at which the test launched.|
|`modification_time` | DATE-TIME | The date-time value, in `YYYY-MM-DDTHH:mm:ssZ` format, at which the test changed. This is typically due to a change in status, which triggers a new event and new webhook post.|
|`owner` | STRING | The Sauce Labs user who initiated the test.|
|`owner_id` | STRING | The unique identifier of the test owner.|
|`org_id` | STRING | The unique identifier of the Sauce Labs organization to which the test owner belongs.|
|`team_id` | STRING | The unique identifier of the Sauce Labs team of which the test owner is a member.|
|`team_name` | STRING | The name of the team of which the test owner is a member.|
|`group_id` | STRING | The unique identifier of the Sauce Labs group of which the test owner is a member.|
|`status` | ENUM | The status of the test at the time the webhook event was triggered. Possible values are:<br/><ul><li>`COMPLETE`</li><li>`PASSED`</li><li>`FAILED`</li><li>`ERRORED`</li></ul>|
|`passed` | BOOLEAN | If the test includes pass/fail assertions, this field states whether the test passed. This field is optional, possible values are:<br/><ul><li>`1` true</li><li>`0` false</li><li>`null`</li></ul>|
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
|`commit_id` | STRING | Commit information related to your development repo, if you have added the [`custom-data.commit`](/dev/test-configuration-options/#custom-data) capability to your test. Currently this field is not supported for RDC events and it will always appear as an empty string. |
|`branch_name` | STRING | The relevant branch of the referenced commit, if you have added the [`custom-data.branch`](/dev/test-configuration-options/#custom-data) capability to your test. Currently this field is not supported for RDC events and it will always appear as an empty string. |
|`build` | STRING | A custom value that can group multiple related tests.|
|`automation_backend` | STRING | The framework on which the test is run. Currently this field is not supported for RDC events and it will always appear as an empty string. |
|`data_type` | ENUM | The type of event that triggered the webhook. Possible values are: <br/><ul><li>`vdc`</li><li>`rdc`</li></ul>|
