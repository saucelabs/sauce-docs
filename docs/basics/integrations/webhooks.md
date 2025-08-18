---
id: webhooks
title: Webhooks Integration
sidebar_label: Webhooks
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

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings)
- A URL able to consume events data pushed from Sauce Labs

## Configure a Webhook

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.saucelabs.com/integrations) page.
1. Click the Webhooks **Configure** button.
1. Click the **+ New Configuration** button to create a new webhook, or find the webhook you wish to edit, and click the pencil icon associated with the webhook.
1. Fill the form:
   1. enter the URL of the endpoint to which you would like Sauce Labs events pushed.
   2. select the event you wish to receive
      - **Virtual Device Automation | Failed tests only**: Receive information about failed jobs run on Sauce Labs desktop browsers and mobile emulators and simulators.
      - **Virtual Device Automation | All tests**: Receive all test result events for jobs run on Sauce Labs desktop browsers and mobile emulators and simulators.
      - **Real Device Automation | Failed tests only**: Receive information about failed test events for Appium jobs run on Sauce Labs real devices.
      - **Real Device Automation | All tests**: Receive all test result events for Appium jobs run on Sauce Labs real devices.
      - **Visual Testing | Build completed**: Receive information about Visual build once it is finished and its status is available.
   3. select whose events you wish to receive
      - **specific user or service accounts**: all users can create a webhook for themselves, team admins can create webhooks for each account within their team, and organinaztion admins can create a webhook for each account within the organization 
      - **specific team**: team admins can create webhooks for their team, and organinaztion admins can create a webhook for each team within the organization
      - **entire organization**: only organization admins can create webhooks with organization scope
1. Click **Save** to complete your configuration.

## Delete a Webhook

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.saucelabs.com/integrations) page.
1. Click the Webhooks **Configure** button.
1. Find the webhook you wish to delete, and click the trashcan icon associated with the webhook.

## Security tokens

### Retrieve a security token for a specific webhook
1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.saucelabs.com/integrations) page.
1. Click the Webhooks **Configure** button.
1. Find the webhook you wish to retrieve a security token for, and click the **Show security token** button associated with the webhook.
1. Click on the copy icon next to the security token to copy the secret to clipboard.

### Ensure a specific request is coming from Sauce Labs

A header `saucelabs-sign` is added to each webhook POST request which contains the request body signed with the webhook secret.
To confirm the request indeed comes from Sauce Labs, a new signature needs to be generated and compared to the received signature.
The code below show how to generate a signature in Python:

<Tabs
groupId="lang"
defaultValue="python"
values={[
{"label":"Python","value":"python"},
]}>
<TabItem value="python">

```py
import hashlib
from hmac import new

expected_signature = new([WEBHOOK_SECURITY_TOKEN].encode("utf-8"), [PAYLOAD_JSON].encode("utf-8"), hashlib.sha256).hexdigest()
```

</TabItem>
</Tabs>

## Event Payload

### Virtual and Real Device Automation events
Each event sends a POST request containing the job object with the following data fields as its payload:

| Data Field           | Format    | Description                                                                                                                                                                                                                                                                          |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                 | STRING    | Sauce Labs unique identifier of the test.                                                                                                                                                                                                                                            |
| `creation_time`      | DATE-TIME | The date-time value, in `YYYY-MM-DDTHH:mm:ssZ` format, at which the test launched.                                                                                                                                                                                                   |
| `modification_time`  | DATE-TIME | The date-time value, in `YYYY-MM-DDTHH:mm:ssZ` format, at which the test changed. This is typically due to a change in status, which triggers a new event and new webhook post.                                                                                                      |
| `owner`              | STRING    | The Sauce Labs user who initiated the test.                                                                                                                                                                                                                                          |
| `owner_id`           | STRING    | The unique identifier of the test owner.                                                                                                                                                                                                                                             |
| `org_id`             | STRING    | The unique identifier of the Sauce Labs organization to which the test owner belongs.                                                                                                                                                                                                |
| `team_id`            | STRING    | The unique identifier of the Sauce Labs team of which the test owner is a member.                                                                                                                                                                                                    |
| `team_name`          | STRING    | The name of the team of which the test owner is a member.                                                                                                                                                                                                                            |
| `group_id`           | STRING    | The unique identifier of the Sauce Labs group of which the test owner is a member.                                                                                                                                                                                                   |
| `status`             | ENUM      | The status of the test at the time the webhook event was triggered. Possible values are:<br/><ul><li>`COMPLETE`</li><li>`PASSED`</li><li>`FAILED`</li><li>`ERRORED`</li></ul>                                                                                                        |
| `passed`             | BOOLEAN   | If the test includes pass/fail assertions, this field states whether the test passed. This field is optional, possible values are:<br/><ul><li>`1` true</li><li>`0` false</li><li>`null`</li></ul>                                                                                   |
| `name`               | STRING    | The name of the test.                                                                                                                                                                                                                                                                |
| `browser_name`       | STRING    | The browser in which the test ran.                                                                                                                                                                                                                                                   |
| `browser_version`    | INTEGER   | The version of the browser in which the test ran.                                                                                                                                                                                                                                    |
| `os_name`            | STRING    | The operating system on which the test ran.                                                                                                                                                                                                                                          |
| `os_version`         | STRING    | The version of the operating system on which the test ran.                                                                                                                                                                                                                           |
| `duration_sec`       | INTEGER   | The length of time that the test took to complete. This value is only populated in the final event push for the test.                                                                                                                                                                |
| `visibility`         | ENUM      | Who within the Sauce Labs organization can see the test. Possible values are:<br/><ul><li>`PUBLIC`</li><li>`PUBLIC RESTRICTED`</li><li>`SHARE`</li><li>`TEAM`</li><li>`PRIVATE`</li></ul>See [Sharing Test Results](/test-results/sharing-test-results/) for visibility definitions. |
| `tags`               | ARRAY     | A set of string values representing custom labels for the test.                                                                                                                                                                                                                      |
| `device`             | STRING    | For mobile app tests, the Sauce Labs unique identifier of the device on which the test was run.                                                                                                                                                                                      |
| `app`                | STRING    | The App Storage identifier of uploaded test materials, such as the mobile app under test or a project test file.                                                                                                                                                                     |
| `error`              | STRING    | An error that occurred during the test.                                                                                                                                                                                                                                              |
| `exception`          | STRING    | An exception that was thrown during the test.                                                                                                                                                                                                                                        |
| `commit_id`          | STRING    | Commit information related to your development repo, if you have added the [`custom-data.commit`](/dev/test-configuration-options/#custom-data) capability to your test. Currently this field is not supported for RDC events and it will always appear as an empty string.          |
| `branch_name`        | STRING    | The relevant branch of the referenced commit, if you have added the [`custom-data.branch`](/dev/test-configuration-options/#custom-data) capability to your test. Currently this field is not supported for RDC events and it will always appear as an empty string.                 |
| `build`              | STRING    | A custom value that can group multiple related tests.                                                                                                                                                                                                                                |
| `automation_backend` | STRING    | The framework on which the test is run. Currently this field is not supported for RDC events and it will always appear as an empty string.                                                                                                                                           |
| `data_type`          | ENUM      | The type of event that triggered the webhook. Possible values are: <br/><ul><li>`vdc`</li><li>`rdc`</li></ul>                                                                                                                                                                        |


## Visual Testing Build completed event

| Data Field          | Format | Required | Description                                                                                                                                                                           |
|---------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `org_id`            | STRING | TRUE     | Build owner's Sauce Labs organization id.                                                                                                                                             |
| `user_id`           | STRING | TRUE     | Build owner's Sauce Labs user id.                                                                                                                                                     |
| `team_ids`          | ARRAY  | TRUE     | A list of Sauce Labs team ids which the build owner belongs to.                                                                                                                       |
| `creator_id`        | STRING | TRUE     | Id of build owner's Sauce Labs organization.                                                                                                                                          |
| `build_id`          | STRING | TRUE     | Sauce Labs unique identifier of the build.                                                                                                                                            |
| `build_name`        | STRING | TRUE     | The name that was given to the build.                                                                                                                                                 |
| `build_url`         | STRING | TRUE     | Direct link to the build in the Sauce Labs dashboard.                                                                                                                                 |
| `status`            | ENUM   | TRUE     | Status of the build. Possible values are:<br/><ul><li>`APPROVED`</li><li>`EMPTY`</li><li>`EQUAL`</li><li>`ERRORED`</li><li>`QUEUED`</li><li>`REJECTED`</li><li>`UNAPPROVED`</li></ul> |
| `branch`            | STRING | FALSE    | The name of the branch.                                                                                                                                                               |
| `project`           | STRING | FALSE    | The name of the project.                                                                                                                                                              |
| `summary`           | JSON   | TRUE     | Contains the number of the snapshots of the following statuses: `errored`, `approved`, `equal`,  `rejected`, `unapproved`, `queued`                                                   |
| `data_center`       | STRING | TRUE     | Data center where the build was executed.  Possible values are:<br/><ul><li>`us-west-1`</li><li>`eu-central-1`</li><li>`us-east-1`</li></ul>                                          |
