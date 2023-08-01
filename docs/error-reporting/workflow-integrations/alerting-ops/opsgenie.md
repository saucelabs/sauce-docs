---
id: opsgenie
title: OpsGenie Integration with Backtrace
sidebar_label: OpsGenie
description: Integrate Backtrace with OpsGenie.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with OpsGenie. Setting up integration with the OpsGenie ticketing system requires a valid OpsGenie REST API URL, as well as a valid username and password.

The steps in this process are:

- Generate an API key
- Set up the integration

## Generate an API Key

In OpsGenie, click Integrations in the left navbar and click "Add" on "API". Note the API Key - you will need this in the next step - then modify the API integration as necessary, and click Save Integration.

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **OpsGenie** and fill in the required settings (name, recipients, teams, message, and API key).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/opsgenie-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
