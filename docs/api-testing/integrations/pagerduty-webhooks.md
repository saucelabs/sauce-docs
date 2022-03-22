---
id: pagerduty-webhooks
title: PagerDuty and Webhook Connectors
sidebar_label: PagerDuty and Webhooks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our **WebHooks** and **Connectors** features enable you to track your Sauce Labs API Testing results in third-party apps outside of our platform, seamlessly integrating API Testing into your day-to-day operations without disrupting workflows.

:::tip
Stay organized and facilitate monitoring by adding [tags](/api-testing/composer/other-components/#tag) and clear naming conventions to your API Tests and Projects.
:::

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* A [PagerDuty account](https://www.pagerduty.com/) (for the PagerDuty connector only).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## Connector Setup

Our **Connectors** feature (i.e., outgoing webhook) sends Sauce Labs API Testing data and results to external sources, allowing you to integrate notifications and data with third party tools. Data is sent as an HTTP POST request containing a JSON payload.

1. Find the webhook URL for the third-party app you'd like to integrate.
2. Log in to Sauce Labs > click **API Testing**.
2. Click on any Project.
3. Within that Project, go to **Settings** > **Connectors** > **Create Connector**.<br/><img src={useBaseUrl('img/api-fortress/2022/03/createConnector.png')} alt="API Conversation and Contract" width="600"/>
4. Under the **Choose Connector Type** dropdown, select **Webhook**.
5. In the **URL** field, enter the webhook URL for the third-party app you want to integrate.
   * **Content-Type** field will pre-populate with **application/json** (no action required).
   * **Headers** Key/Value pair fields are optional.
   * **Template** section is pre-populated with the JSON payload indicating what data will be sent from API Testing to the third-party app. Optionally, you can also edit the other template values meet your needs.
   * **On_success**
     * Turn the toggle to **True** if you'd like to receive data on all events, including successes, which can be handy when the service needs to log everything or alter a state.
     * Turn the toggle to **False** to receive notifications for test failures only. This is typical for stateless services such as Slack.


### PagerDuty Connector

The PagerDuty Connector will trigger an incident in PagerDuty upon failure and then resolve that incident when the next automation execution succeeds.

* Notifies on-call responders based on failures in your API tests.
* Sends critical information on test failures as well as a link to the test report.
* Creates high and low urgency incidents based on the severity of the failure via dynamic tags in the test.

To set up this feature:
1. Log in to Sauce Labs > click **API Testing**.
2. Click on any Project.
3. Within that Project, go to **Settings** > **Connector** > **Create Connector**.
4. Under the **Choose Connector Type** dropdown, select **PagerDuty**.
5. In the **Template** section, you'll need to replace the `“routing_key"` value with your PagerDuty Integration Key, which you can find in PagerDuty by creating an App in Developer Mode. Optionally, you can also edit the other template values meet your needs.<br/><img src={useBaseUrl('img/api-fortress/2022/01/pagerduty-template.png')} alt="pagerduty-template field"/>
   * **URL** field is pre-populated with the PagerDuty URL (no action required).
   * **Content-Type** field will pre-populate with **application/json** (no action required).
   * **Headers** Key/Value pair fields are optional.
   * **On_success**
     * Turn the toggle to **True** if you'd like to receive data on all events, including successes, which can be handy when the service needs to log everything or alter a state.
     * Turn the toggle to **False** to receive notifications for test failures only. This is typical for stateless services such as Slack.

## Incoming Webhooks
Incoming webhooks allow your third-party CI/CD apps to send data to Sauce Labs API Testing. They are required in order to utilize most of our `apifctl` CI/CD integration functionalities. See [CI/CD Platform Integration with apifctl](/api-testing/integrations/apifctl-cicd-integration) for information.

To generate a webhook URL:

1. Log in to Sauce Labs, then click **API Testing**.
1. Navigate to your Project and select the **WebHooks** tab.<br/><img src={useBaseUrl('img/api-fortress/2021/04/webHooksSection.png')} alt="webhook screenshot"/>
1. Select **Create Hook**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/createHook.png')} alt="Create New WebHook" width="300"/>
1. Enter a **Hook Name** for your webhook (**Hook Description** is optional), then click **Save**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/sampleHook.png')} alt="sample webhook details" width="300" />
1. After clicking **Save**, your generated **Hook URL** will appear.
  ```bash
  https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}
  ```
  Your Sauce Labs username, Sauce Labs API Testing endpoint, and `{hook_id}` will populate automatically. For security reasons, you'll need to input the Sauce Labs access key portion of the URL.
1. Copy the URL to your clipboard, paste it somewhere secure, and input your Sauce Labs access key where noted in the URL.<br/><img src={useBaseUrl('img/api-fortress/2021/04/hookURL.png')} alt="sample Hook URL"/>
1. Copy and paste your webhook where you need, either locally or as part of a [CI build](/api-testing/integrations/apifctl-cicd-integration). 

You can reuse this webhook for future tests within that Project by returning to the **WebHooks** tab and copying it there. Webhooks are Project-specific.

## More Information
* [CI/CD Platform Integration with apifctl](/api-testing/integrations/apifctl-cicd-integration)
* [API Contract Testing](/api-testing/contract-testing/)
* [PagerDuty website | API Testing Integration](https://www.pagerduty.com/integrations/api-fortress/)
