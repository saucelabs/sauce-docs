---
id: asana
title: Asana
sidebar_label: Asana
description: Integrate Backtrace with Asana.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Asana Integration
This guide goes through the steps necessary to integrate Backtrace with Asana.

The steps in this process are:
- Generate a personal access token
- Set up the integration

## Generate Personal Access Token
To set up integration for Asana, you must generate a personal access token. Follow the instructions at the Asana API Page under "Personal Access Tokens"

Once the token is created, you will use it in the next step.

## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

For Asana, the required settings are the Asana API Endpoint, the Personal Access Token, workspace, and assignee.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/asana-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.
