---
id: webex-teams
title: Webex Teams Integration with Backtrace
sidebar_label: Webex Teams
description: Integrate Backtrace with Webex Teams.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with Webex Teams. With Webex Teams integration, Backtrace can send an alert message for new crashes or crash groups to a specified channel on a Webex Teams server. This message will contain a URL to view more detailed information about the crash in the Web Console.

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **Webex Teams** and fill in the required settings.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/webex-teams-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
