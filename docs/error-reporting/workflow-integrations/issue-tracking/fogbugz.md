---
id: fogbugz
title: FogBugz
sidebar_label: FogBugz
description: Integrate Backtrace with FogBugz.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## FogBugz Integration
This guide goes through the steps necessary to integrate Backtrace with Fogbugz. Setting up integration with the Fogbugz ticketing system requires a valid Fogbugz server name and an API token (See: [Fogbugz documentation](https://support.fogbugz.com/hc/en-us/articles/360011351813-Access-Tokens-and-Integration-Servers) for instructions on how to get a token).

## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

These are the settings that you can configure for your Fogbugz integration:

For more detailed information about these settings, see [The Fogbugz API Documentation](https://support.fogbugz.com/hc/en-us/articles/360011242374-FogBugz-API-Introduction).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/fogbugz-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.
