---
id: webhooks
title: Webhooks Integration
sidebar_label: Webhooks
description: Set up a webhook to which Sauce Labs test results are automatically pushed.
keywords:
- get-test-results
- webhooks
- how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A webhook is a URL that receives data from another service as soon as an event happens. The Sauce Labs Webhooks integration lets you specify a URL to which Sauce Labs pushes test result data as it becomes available, so you don't need to constantly poll for updates.

## How It Works

You create webhook configurations in Sauce Labs. Each webhook defines the URL of the endpoint that receives the data, the event you want to receive, such as failed Virtual Device Automation tests or completed Visual Testing builds, and whose events you want to receive: a specific user or service account, a specific team, or your entire organization.

When a matching event happens, Sauce Labs sends a POST request to your endpoint with the event data as its payload. For test events, Sauce Labs sends a new request each time the test changes, which is typically due to a change in status. Each request includes a `saucelabs-sign` header, which contains the request body signed with the security token of the webhook, so your endpoint can confirm that the request comes from Sauce Labs.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- A URL able to consume events data pushed from Sauce Labs.
- The team admin or organization admin role, if you want to create webhooks for other accounts, for a team, or for your entire organization. See [Configure a Webhook](#configure-a-webhook).

## Set Up the Integration

### Configure a Webhook

**Step 1:** Inside your Sauce Labs account, click on your **profile icon** in the top-right corner, and then select **[Integrations](https://app.saucelabs.com/integrations)** from the dropdown list.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-1.png')} alt="Integrations option in the profile menu"/>

**Step 2:** Find the **Webhooks** integration and click **Configure**.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-2.png')} alt="Webhooks integration on the Integrations page"/>

**Step 3:** Click **+ New Configuration** to create a new webhook. To edit an existing webhook, find the webhook and click its pencil icon.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-3.png')} alt="New Configuration button on the Webhooks Configuration page"/>

**Step 4:** In the **Webhooks Configuration** dialog, enter the URL of the endpoint to which you want Sauce Labs to push events in the **Webhook Url** field.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-4.png')} alt="Webhook Url field in the Webhooks Configuration dialog"/>

**Step 5:** From the **Data to push** list, select the event you want to receive:

| Sr. No. | Event | Description |
| --- | --- | --- |
| 1 | **Virtual Device Automation \| Failed tests only** | Receive information about failed jobs run on Sauce Labs desktop browsers and mobile Emulators and Simulators. |
| 2 | **Virtual Device Automation \| All tests** | Receive all test result events for jobs run on Sauce Labs desktop browsers and mobile Emulators and Simulators. |
| 3 | **Real Device Automation \| Failed tests only** | Receive information about failed test events for Appium jobs run on Sauce Labs real devices. |
| 4 | **Real Device Automation \| All tests** | Receive all test result events for Appium jobs run on Sauce Labs real devices. |
| 5 | **Visual Testing \| Build completed** | Receive information about a Visual Testing build once it is finished and its status is available. |

<img src={useBaseUrl('img/integrations/webhooks/webhooks-5.png')} alt="Data to push list in the Webhooks Configuration dialog"/>

**Step 6:** From the **Get notified about events from** list, select whose events you want to receive:

| Sr. No. | Option | Who can create it |
| --- | --- | --- |
| 1 | **Specific user or service accounts** | All users can create a webhook for themselves, team admins can create webhooks for each account in their team, and organization admins can create a webhook for each account in the organization. |
| 2 | **Specific team** | Team admins can create webhooks for their team, and organization admins can create a webhook for each team in the organization. |
| 3 | **Entire organization** | Only organization admins can create webhooks with organization scope. |

<img src={useBaseUrl('img/integrations/webhooks/webhooks-6.png')} alt="Get notified about events from list in the Webhooks Configuration dialog"/>

**Step 7:** Click **Save** to complete your configuration.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-7.png')} alt="Save button in the Webhooks Configuration dialog"/>

## Authentication

Each webhook has a security token. Sauce Labs uses it to sign every request it sends to your endpoint, and you use it to confirm that a request comes from Sauce Labs. Keep the security token secret, as you would a password.

### Retrieve the Security Token for a Webhook

**Step 1:** Inside your Sauce Labs account, click on your **profile icon** in the top-right corner, and then select **[Integrations](https://app.saucelabs.com/integrations)** from the dropdown list.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-1.png')} alt="Integrations option in the profile menu"/>

**Step 2:** Find the **Webhooks** integration and click **Configure**. The **Webhooks Configuration** page opens and lists your saved webhooks under **Saved Configurations**.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-2.png')} alt="Webhooks integration on the Integrations page"/>

**Step 3:** Find the webhook you want to retrieve a security token for, and click **Show security token**.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-8.png')} alt="Show security token links on the Webhooks Configuration page"/>

**Step 4:** Click the copy icon next to the security token to copy the secret to the clipboard.

<img src={useBaseUrl('img/integrations/webhooks/webhooks-9.png')} alt="Copy icon next to the security token"/>

### Confirm That a Request Comes from Sauce Labs

A `saucelabs-sign` header is added to each webhook POST request, which contains the request body signed with the webhook secret. To confirm that the request comes from Sauce Labs, generate a new signature and compare it to the received signature. The following code shows how to generate a signature in Python:

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

## Verify the Integration

1. On the Webhooks configuration page, check that your webhook appears in the list.
2. Run a test that matches the event and scope you selected for the webhook.
3. Check that your endpoint receives a POST request with the event payload and a `saucelabs-sign` header.
4. Generate a signature with the security token of the webhook, and check that it matches the `saucelabs-sign` header. See [Confirm That a Request Comes from Sauce Labs](#confirm-that-a-request-comes-from-sauce-labs).

## Use the Integration

After you set up the integration, Sauce Labs pushes the events you selected to your endpoint as they happen.

To use the events in your endpoint:

1. Confirm that each request comes from Sauce Labs. See [Confirm That a Request Comes from Sauce Labs](#confirm-that-a-request-comes-from-sauce-labs).
2. Read the data fields from the payload of the event. See [Event Payload](#event-payload).

### Event Payload

#### Virtual and Real Device Automation Events

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

#### Visual Testing Build Completed Event

The Visual Testing Build completed event sends a POST request with the following data fields as its payload:

| Data Field         | Format | Required | Description                                                                                                                                                                           |
|--------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `org_id`           | STRING | TRUE     | Build owner's Sauce Labs organization id.                                                                                                                                             |
| `user_id`          | STRING | TRUE     | Build owner's Sauce Labs user id.                                                                                                                                                     |
| `team_id`          | ARRAY  | TRUE     | Build owner's Sauce Labs active team id.                                                                                                                                                 |
| `build_id`         | STRING | TRUE     | Sauce Labs unique identifier of the build.                                                                                                                                            |
| `build_name`       | STRING | TRUE     | The name that was given to the build.                                                                                                                                                 |
| `build_url`        | STRING | TRUE     | Direct link to the build in the Sauce Labs dashboard.                                                                                                                                 |
| `status`           | ENUM   | TRUE     | Status of the build. Possible values are:<br/><ul><li>`APPROVED`</li><li>`EMPTY`</li><li>`EQUAL`</li><li>`ERRORED`</li><li>`QUEUED`</li><li>`REJECTED`</li><li>`UNAPPROVED`</li></ul> |
| `branch`           | STRING | FALSE    | The name of the branch.                                                                                                                                                               |
| `project`          | STRING | FALSE    | The name of the project.                                                                                                                                                              |
| `summary`          | JSON   | TRUE     | Contains the number of the snapshots of the following statuses: `errored`, `approved`, `equal`,  `rejected`, `unapproved`, `queued`                                                   |
| `data_center`      | STRING | TRUE     | Data center where the build was executed.  Possible values are:<br/><ul><li>`us-west-1`</li><li>`eu-central-1`</li><li>`us-east-1`</li></ul>                                          |

### Delete a Webhook

**Step 1:** From your Sauce Labs account, go to the [Account Integrations](https://app.saucelabs.com/integrations) page.

**Step 2:** For Webhooks, click **Configure**.

**Step 3:** Find the webhook you want to delete, and click its trash can icon.

## Troubleshooting

<details>
<summary>**Your endpoint does not receive any events**</summary>

Check the URL of the endpoint in your webhook configuration, and make sure the event and scope you selected match the tests you run. For example, a **Failed tests only** webhook does not receive events for passed tests.

</details>

<details>
<summary>**You cannot create a webhook for a team or your organization**</summary>

Only team admins can create webhooks for their team, and only organization admins can create webhooks for each team or for the entire organization. See [Configure a Webhook](#configure-a-webhook).

</details>

<details>
<summary>**The generated signature does not match the `saucelabs-sign` header**</summary>

Make sure you use the security token of the webhook that sent the request, and that you sign the request body. See [Retrieve the Security Token for a Webhook](#retrieve-the-security-token-for-a-webhook).

</details>

<details>
<summary>**The `commit_id`, `branch_name`, or `automation_backend` field is empty**</summary>

These fields are currently not supported for RDC events, and they always appear as an empty string. For VDC events, `commit_id` and `branch_name` are populated only if you add the [`custom-data`](/dev/test-configuration-options/#custom-data) capability to your test.

</details>

<details>
<summary>**The `duration_sec` field is empty**</summary>

This value is only populated in the final event push for the test.

</details>

## Next Steps

- [Sharing Test Results](/test-results/sharing-test-results/)
- [Test Configuration Options](/dev/test-configuration-options/)
- [Integrations Overview](/basics/integrations-overview/)
