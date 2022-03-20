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
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

These are the settings that you can configure for your IRC integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/irc-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to [Common Settings](https://support.backtrace.io/hc/en-us/articles/360040516791-Common-Workflow-Integration-Settings) to finish configuring the integration.
