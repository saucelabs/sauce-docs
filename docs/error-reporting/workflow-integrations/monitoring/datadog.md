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
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

These are the settings that you can configure for your Datadog integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/datadog-settings.png')} alt="" />

For more details, see the [Datadog Event API Documentation](https://docs.datadoghq.com/api/latest/events/).

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.
