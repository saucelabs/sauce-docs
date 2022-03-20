---
id: opsgenie
title: OpsGenie
sidebar_label: OpsGenie
description: Integrate Backtrace with OpsGenie.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## OpsGenie Integration
This guide goes through the steps necessary to integrate Backtrace with OpsGenie. Setting up integration with the OpsGenie ticketing system requires a valid OpsGenie REST API URL, as well as a valid username and password.

The steps in this process are:
- Generate an API key
- Set up the integration

## Generate an API Key
In OpsGenie, click Integrations in the left navbar and click "Add" on "API". Note the API Key - you will need this in the next step - then modify the API integration as necessary, and click Save Integration.

## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

These are the settings that you can configure for your OpsGenie integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/opsgenie-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.
