---
id: pagerduty-webhooks
title: PagerDuty and Webhook Connectors
sidebar_label: PagerDuty and Webhooks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our **Connector** feature enables you to track your Sauce Labs API Testing results in third-party apps outside of our platform. It seamlessly integrates API Testing into your day-to-day operations without disrupting workflows. Data is sent as an HTTP POST request containing a JSON payload.

:::tip
To stay organized and make monitoring easier, make sure to add clear names and/or tags to your Sauce Labs API Tests and Projects.
:::

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* A [PagerDuty account](https://www.pagerduty.com/) (for the PagerDuty connector only).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## PagerDuty Connector Setup

The PagerDuty Connector will trigger an incident in PagerDuty upon failure and then resolve that incident when the next automation execution succeeds.

* Notifies on-call responders based on failures in your API tests.
* Sends critical information on test failures as well as a link to the test report.
* Creates high and low urgency incidents based on the severity of the failure via dynamic tags in the test.

To set up this feature:
1. Log in to Sauce Labs > click **API Testing**.
2. Click on any Project.
3. Within that Project, go to **Settings** > **Connector** > **Create Connector**.
4. Under the **Choose Connector Type** dropdown, select **PagerDuty**.
5. In the **Template** section, you'll need to replace the `“routing_key"` value with your PagerDuty Integration Key. You can find this in PagerDuty by creating an App in Developer Mode.<br/><img src={useBaseUrl('img/api-fortress/2022/pagerduty-template.png')} alt="pagerduty-template field"/>
   * **URL** field is pre-populated with the PagerDuty URL (no action required).
   * **Content-Type** field will pre-populate with **application/json** (no action required).
   * **Headers** Key/Value pair fields are optional.
   * **On_success**
     * Turn the toggle to **True** if you'd like to receive data on all events, including successes, which can be handy when the service needs to log everything or alter a state.
     * Turn the toggle to **False** to receive notifications for test failures only. This is typical for stateless services such as Slack.



## Webhook Connector Setup

We also offer Webhook integrations to import and export data between Sauce Labs API Testing and third-party apps.


### Outgoing Webhooks

Like the PagerDuty Connector, setting up an outgoing webbook connector allows Sauce Labs API Testing to send test data to external sources. To enable:

1. Find the webhook URL for the third-party app you'd like to integrate.
2. Log in to Sauce Labs > click **API Testing**.
2. Click on any Project.
3. Within that Project, go to **Settings** > **Connector** > **Create Connector**.
4. Under the **Choose Connector Type** dropdown, select **Webhook**.
5. In the **URL** field, you'll need to enter the webhook URL for the third-party app you want to integrate.
   * **Content-Type** field will pre-populate with **application/json** (no action required).
   * **Headers** Key/Value pair fields are optional.
   * **Template** section is pre-populated with the JSON payload indicating what data will be sent from API Testing to the third-party app (no action required).
   * **On_success**
     * Turn the toggle to **True** if you'd like to receive data on all events, including successes, which can be handy when the service needs to log everything or alter a state.
     * Turn the toggle to **False** to receive notifications for test failures only. This is typical for stateless services such as Slack.


### Incoming Webhooks
See [Adding Incoming Webhooks](/api-testing/integrations/apifctl-cicd-integration/#adding-incoming-webhooks).


## More Information
* [PagerDuty / API Testing Integration](https://www.pagerduty.com/integrations/api-fortress/)
