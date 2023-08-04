---
id: hack-n-plan
title: HackNPlan Integration with Backtrace
sidebar_label: HackNPlan
description: Integrate Backtrace with HackNPlan.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with HackNPlan. Setting up integration with the HackNPlan ticketing system requires a valid project name to use for creating work items, a valid HackNPlan board to put work items on, and an API token (See: [HackNPlan documentation](https://hacknplan.com/knowledge-base/api-authentication/) for instructions on how to get a token).

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **HackNPlan** and fill in the required settings.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/HackNPlan.webp')} alt="" />

For more detailed information about these settings, see [The HackNPlan API Documentation](https://hacknplan.com/knowledge-base/category/api/).

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
