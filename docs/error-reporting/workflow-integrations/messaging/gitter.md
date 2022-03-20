---
id: gitter
title: Gitter
sidebar_label: Gitter
description: Integrate Backtrace with Gitter.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Gitter Integration
This guide goes through the steps necessary to integrate Backtrace with Gitter.

The steps in this process are:
- Generate a personal access token
- Set up the integration

## Generate A Personal Access Token
To set up integration for Gitter, you must generate a token. While logged into Gitter, go to https://developer.gitter.im/apps and generate a personal access token.

You will use this token in the next step.

## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

For Gitter, the required settings are the personal access token and the name of the room.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/gitter-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to [Common Settings](https://support.backtrace.io/hc/en-us/articles/360040516791-Common-Workflow-Integration-Settings) to finish configuring the integration.
