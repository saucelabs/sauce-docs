---
id: irc
title: IRC
sidebar_label: IRC
description: Integrate Backtrace with IRC.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## IRC Integration
This guide goes through the steps necessary to integrate Backtrace with IRC. With IRC integration, Backtrace can send an alert message for new crashes or crash groups to a specified channel on an IRC server. This message will contain a URL to view more detailed information about the crash in the Web Console.

## Set Up the Integration
To set up the integration, first go to the Project Settings page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.png')} alt="" />

Then click Integrations in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.png')} alt="" />

Select IRC and fill in the required settings.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/irc-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.
