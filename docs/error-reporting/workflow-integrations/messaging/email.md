---
id: email
title: Email
sidebar_label: Email
description: Integrate Backtrace with Email.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Email Integration
This guide will go through the steps necessary to integrate Backtrace with email.

## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

The destination e-mail address is the only required setting. You may also specify Return Address, Subject Prefix, SMTP Server, SMTP Port Number, whether to use SSL-TLS, and Username & Password.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/email-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to [Common Settings](https://support.backtrace.io/hc/en-us/articles/360040516791-Common-Workflow-Integration-Settings) to finish configuring the integration.
