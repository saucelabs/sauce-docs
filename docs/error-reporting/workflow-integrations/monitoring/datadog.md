---
id: datadog
title: Datadog
sidebar_label: Datadog
description: Integrate Backtrace with Datadog.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## DataDog Integration
This guide goes through the steps necessary to integrate Backtrace with Datadog. Setting up integration with Datadog requires an API Key.

The steps in this process are:
- Retrieve API key
- Set up the integration

## Retrieve API Key
Within Datadog, click Integrations on the left-hand navigation menu and select APIs. Your API key is listed in the API Keys section at the top.

## Set Up the Integration
To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.png')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.png')} alt="" />

Select **Datadog** and fill in the required settings (name, tags, title, and API key).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/datadog-settings.png')} alt="" />

For more details, see the [Datadog Event API Documentation](https://docs.datadoghq.com/api/latest/events/).

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.
