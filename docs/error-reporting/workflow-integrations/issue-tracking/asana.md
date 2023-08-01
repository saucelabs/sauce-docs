---
id: asana
title: Asana Integration with Backtrace
sidebar_label: Asana
description: Integrate Backtrace with Asana.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with Asana.

The steps in this process are:

- Generate a personal access token
- Set up the integration

## Generate Personal Access Token

To set up integration for Asana, you must generate a personal access token. Follow the instructions at the Asana API Page under "Personal Access Tokens"

Once the token is created, you will use it in the next step.

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **Asana** and fill in the required settings (name, assignee, personal access token, and workspace).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/asana-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
