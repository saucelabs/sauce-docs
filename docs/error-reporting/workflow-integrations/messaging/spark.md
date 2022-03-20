---
id: spark
title: Spark
sidebar_label: Spark
description: Integrate Backtrace with Spark.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Spark Integration
This guide will go through the steps necessary to integrate Backtrace with Spark.

The steps in this process are:
- Add the bot to the desired rooms
- Set up the integration

## Add the Bot to Desired Rooms
Add backtrace@sparkbot.io (as a user) to the rooms you want in-room notifications. If you only want direct message notifications, you don't need to do anything here.


## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

For each integration recipient (room or user), add it by pressing the plus button:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/spark-add-recipients.png')} alt="" />

For Spark, the required settings are:
- emails of direct message recipients.
- room ids of rooms the bot has been added to. Getting the ids is the responsibility of the user.

Next: After filling in the integration-specific settings, proceed to [Common Settings](https://support.backtrace.io/hc/en-us/articles/360040516791-Common-Workflow-Integration-Settings) to finish configuring the integration.
