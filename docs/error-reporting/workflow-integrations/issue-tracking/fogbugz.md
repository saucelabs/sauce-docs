---
id: fogbugz
title: FogBugz Integration with Backtrace
sidebar_label: FogBugz
description: Integrate Backtrace with FogBugz.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with FogBugz. Setting up integration with the Fogbugz ticketing system requires a valid FogBugz server name and an API token (See: [Fogbugz documentation](https://support.fogbugz.com/hc/en-us/articles/360011351813-Access-Tokens-and-Integration-Servers) for instructions on how to get a token).

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **FogBugz** and fill in the required settings (name, server, API token, and tags).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/fogbugz-settings.png')} alt="" />

For more detailed information about these settings, see [The Fogbugz API Documentation](https://support.fogbugz.com/hc/en-us/articles/360011242374-FogBugz-API-Introduction).

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
