---
id: phabricator
title: Phabricator Integration with Backtrace
sidebar_label: Phabricator
description: Integrate Backtrace with Phabricator.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide goes through the steps necessary to integrate Backtrace with Phabricator.

The steps in this process are:

- Generate an API token
- Set up the integration

## Generate an API Token

To set up integration for Phabricator, you must generate an API token. To do this, go to the Settings menu in Phabricator and click Conduit API Tokens under Sessions and Logs, then Generate API Token in the upper-right.

You will use this token in the next step.

## Set Up the Integration

To set up the integration, navigate to the integration settings through **Project Settings > Integrations > Issue Trackers > Phabricator**.

For Phabricator, the required settings are the name, the endpoint URL, and the API token. For the endpoint URL, you should use your Phabricator URL with /api appended (e.g. https://your.phabricator.url/api).

<img src={useBaseUrl('img/error-reporting/workflow-integrations/phab-settings.png')} alt="" />

### Synchronization

To enable synchronization from Backtrace to Phabricator make sure yes is selected for it in the Setup Behavior step.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/phab-sync.png')} alt="" />

To enable synchronization from Phabricator to Backtrace you will need to:

- Create a Herald webhook with an URL provided to you in Setup Behavior step.
- Create a global Herald rule for Maniphest Tasks which calls the webhook when description contains "View in Backtrace".

<img src={useBaseUrl('img/error-reporting/workflow-integrations/phab-set-herald-rule.webp')} alt="" />
