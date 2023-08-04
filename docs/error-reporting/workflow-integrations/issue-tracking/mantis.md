---
id: mantis
title: Mantis Bug Tracker Integration with Backtrace
sidebar_label: Mantis Bug Tracker
description: Integrate Backtrace with Mantis Bug Tracker.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with Mantis Bug Tracker. Setting up integration with the Mantis Bug Tracker ticketing system requires a valid server URL, and an Access token.

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **Mantis Bug Tracker** and fill in the required settings.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/mantis.png')} alt="" />

For more detailed information about these settings, see [The Mantis Bug Tracker API Documentation](https://documenter.getpostman.com/view/29959/mantis-bug-tracker-rest-api/7Lt6zkP/).

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
