---
id: pagerduty
title: PagerDuty Integration with Backtrace
sidebar_label: PagerDuty
description: Integrate Backtrace with PagerDuty.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with PagerDuty. Setting up integration with the PagerDuty incident management system requires a valid PagerDuty API Service Key.

Main steps for setting up PagerDuty:

- Generate an API Service Key
- Set up the integration

## Generate an API Service Key

Within PagerDuty, click on the Configuration menu at the top, then select Services. Select the API Service (create it using the Add New Service button if it doesn't yet exist), then click the Integrations tab. Click the green New Integration button:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/pagerduty-add-integration.png')} alt="" />

Then in the Add an Integration screen, pick an Integration Name, select "Use our API directly", then click Add Integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/pagerduty-integration-settings.png')} alt="" />

Once this is done, the API Service Integrations tab will list the new integration along with the Integration Key. You'll use this key as the service_key setting in the Coronerd Configuration below.

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **PagerDuty** and fill in the required settings (name, service key, and alert subject).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/pagerduty-settings.png')} alt="" />

For more information, see: [PagerDuty Trigger Events Documentation](https://developer.pagerduty.com/api-reference/b3A6Mjc0ODI2Mw-send-an-event-to-pager-duty).

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
