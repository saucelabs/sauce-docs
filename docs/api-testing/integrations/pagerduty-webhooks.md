---
id: pagerduty-webhooks
title: PagerDuty and Webhook Connectors
sidebar_label: PagerDuty and Webhook Connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our **Connector** feature enables you to track your Sauce Labs API Testing results in third-party apps outside of our platform. It seamlessly integrates API Testing into your day-to-day operations without disrupting workflows. Data is sent as an HTTP POST request containing a JSON payload.

:::tip
Stay organized and facilitate monitoring by adding [tags](/api-testing/composer/other-components/#tag) and clear naming conventions to your API Tests and Projects.
:::

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- A [PagerDuty account](https://www.pagerduty.com/) (for the PagerDuty connector only).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## PagerDuty Connector Setup

The PagerDuty Connector will trigger an incident in PagerDuty upon failure and then resolve that incident when the next automation execution succeeds.

- Notifies on-call responders based on failures in your API tests.
- Sends critical information on test failures as well as a link to the test report.
- Creates high and low urgency incidents based on the severity of the failure via dynamic tags in the test.

To set up this feature:

1. Log in to Sauce Labs > click **API Testing**.
2. Click on any Project.
3. Within that Project, go to **Settings** > **Connectors** > **Create Connector**.
4. Under the **Template** dropdown, select **PagerDuty**.
5. In the **Template** section, you'll need to replace the `“routing_key"` value with your PagerDuty Integration Key, which you can find in PagerDuty by creating an App in Developer Mode. Optionally, you can also edit the other template values meet your needs.<br/><img src={useBaseUrl('img/api-testing/pagerduty_template.webp')} alt="pagerduty-template field"/>
   - **URL** field is pre-populated with the PagerDuty URL (no action required).
   - **Content-Type** field will pre-populate with **application/json** (no action required).
   - **Headers** Key/Value pair fields are optional.
   - **On_success**
     - Turn the toggle to **True** if you'd like to receive data on all events, including successes, which can be handy when the service needs to log everything or alter a state.
     - Turn the toggle to **False** to receive notifications for test failures only. This is typical for stateless services such as Slack.

## Webhook Connector Setup

We also offer Webhook integrations to export data between Sauce Labs API Testing and third-party apps.

Like the PagerDuty Connector, setting up an outgoing webbook connector allows Sauce Labs API Testing to send test result data to external sources. To enable:

1. Find the webhook URL for the third-party app you'd like to integrate.
2. Log in to Sauce Labs > click **API Testing**.
3. Click on any Project.
4. Within that Project, go to **Settings** > **Connectors** > **Create Connector**.
5. Under the **Template** dropdown, select **WebHook**.
6. In the **URL** field, you'll need to enter the webhook URL for the third-party app you want to integrate.
   - **Content-Type** field will pre-populate with **application/json** (no action required).
   - **Headers** Key/Value pair fields are optional.
   - **Template** section is pre-populated with the JSON payload indicating what data will be sent from API Testing to the third-party app. Optionally, you can also edit the other template values meet your needs.
   - **On_success**
     - Turn the toggle to **True** if you'd like to receive data on all events, including successes, which can be handy when the service needs to log everything or alter a state.
     - Turn the toggle to **False** to receive notifications for test failures only. This is typical for stateless services such as Slack.

## Testing Connectors

The Test Connectors feature tests the functionality of all connectors you have set up (as defined in their settings), but will not display any notifications on the dashboard. Testing a connector before executing it can minimize the time you spend creating connectors.

To test a connector:

1. Log in to Sauce Labs > click **API Testing**.
2. Click on any project.
3. Within that project, click **Settings** and then click **Connectors**.
4. On the **Connectors** page, click **Test Connectors**.
   <img src={useBaseUrl('img/api-testing/test-connectors-rebrand.png')} alt="Test Connectors button" width="600"/>
5. In the **Connectors Test Drive** window, select either the **Failure** or **Success** radio button, and then click **Trigger**.
   - Failure - You will receive a notification in all connector platforms in your list
   - Success - If the **On_success** toggle is set to **True**, you will receive a notification for the connector<br/>
     <img src={useBaseUrl('img/api-testing/trigger-confirmation.webp')} alt="Test Connectors dialog box" width="400"/>

:::note
To check the functionality of connectors like PagerDuty that trigger an incident upon failure, and then resolve that incident with the following success, you need to first test for **Failure** and then for **Success**.
:::

## More Information

- [PagerDuty / API Testing Integration](https://www.pagerduty.com/integrations/sauce-api-testing/)
