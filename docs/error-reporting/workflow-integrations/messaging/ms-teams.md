---
id: ms-teams
title: Microsoft Teams Integration with Backtrace
sidebar_label: Microsoft Teams
description: Integrate Backtrace with Microsoft Teams.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with Microsoft Teams. With Microsoft Teams integration, Backtrace can send an alert message for new crashes or crash groups to a specified channel on a Microsoft Teams server. This message will contain a URL to view more detailed information about the crash in the Web Console.

:::info
Existing integrations with Microsoft Teams need to be updated.

Microsoft Teams connectors are transitioning to a new URL to enhance security. Please update URLs as directed in [this Microsoft document](https://learn.microsoft.com/en-us/microsoftteams/m365-custom-connectors#update-connectors-url) to re-establish the integration with Microsoft Teams.

[Manage Microsoft 365 connectors and custom connectors](https://learn.microsoft.com/en-us/microsoftteams/m365-custom-connectors#update-connectors-url)
:::

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **Microsoft Teams** and fill in the required settings.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/ms-teams-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
