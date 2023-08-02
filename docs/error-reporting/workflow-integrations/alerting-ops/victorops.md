---
id: victorops
title: VictorOps Integration with Backtrace
sidebar_label: VictorOps
description: Integrate Backtrace with VictorOps.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with VictorOps. Setting up integration with the VictorOps incident management system requires a valid VictorOps REST Endpoint for sending alerts.

These are the main steps for setting up VictorOps:

- Generate a REST endpoint
- Set up the integration

## Generate a REST Endpoint

Within VictorOps, click settings on the upper-left, then Integrations on the navbar at the top. In the incoming alerts section on the right, click on REST Endpoint, then on the green "Enable Integration" button.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/victorops-add-endpoint.png')} alt="" />

Once this is done, you'll use the Post URL that appears as the URL in the configuration below.

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **VictorOps** and fill in the required settings (name, endpoint URL, and message type).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/victorops-settings.png')} alt="" />

For more details, see the [VictorOps Alert API Documentation](https://victorops.secure.force.com/knowledgebase/articles/Integration/Alert-Ingestion-API-Documentation/).

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
