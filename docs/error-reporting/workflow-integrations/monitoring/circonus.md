---
id: circonus
title: Circonus Integration with Backtrace
sidebar_label: Circonus
description: Integrate Backtrace with Circonus.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with Datadog. Setting up integration with Datadog requires an API Key.

The steps in this process are:

- Generate an API key and HTTPTrap Check
- Set up the integration

## Generate API Key and HTTPTrap Check

To set up integration for Circonus, you must generate an API Key. Follow the instructions in the [Circonus API docs](https://docs.circonus.com/circonus/integrations/api/api-guide/#/) under "Personal Access Tokens".

<img src={useBaseUrl('img/error-reporting/workflow-integrations/circonus-api-token.png')} alt="" />

You'll also need to set up a HTTPTrap in Circonus. For details on setting up an HTTPTrap, see [Circonus HTTPTrap Docs](https://docs.circonus.com/circonus/integrations/library/json-push-httptrap/). You will set Host to the URL of your Backtrace object store instance (yourorganizationname.sp.backtrace.io for Backtrace-hosted instances).

Once created, you will receive a URL. You'll use this URL, the Secret you specified, and the API key in the next step.

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **Circonus** and fill in the required settings (name, webhook URL, HTTPTrap secret, and API key).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/circonus-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
