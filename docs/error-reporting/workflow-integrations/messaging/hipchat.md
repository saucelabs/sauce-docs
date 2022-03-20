---
id: hipchat
title: HipChat
sidebar_label: HipChat
description: Integrate Backtrace with HipChat.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## HipChat Integration
This guide goes through the steps necessary to integrate Backtrace with HipChat.

The steps in this process are:
- Generate room tokens
- Set up the integration

## Generate Room Tokens
To set up the integration for HipChat, you must generate a room token for each room you want to send messages to. In HipChat, select "My Account", the "Rooms" tab (https://yourorg.hipchat.com/admin/rooms), then click on the room you want to create a token for. In the navbar on the left, click "Tokens", and look for "Create new token" below.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/hipchat-generate-room-token.png')} alt="" />

The label you pick will show up as the sender of each message. Make sure the "Send Notification" scope is selected.

Once the token is created, you will use it in the next step.

## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

For HipChat, the required settings are the HipChat API Endpoint, and a list of Room API IDs and their tokens (created above).

To get your Room API ID, click on Profile in the menu in the upper-right of HipChat, then Rooms in the upper-left, then click the desired Room name. The API ID will be displayed near the bottom of the Room Details list. It should simply be a series of numbers.

Next: After filling in the integration-specific settings, proceed to [Common Settings](https://support.backtrace.io/hc/en-us/articles/360040516791-Common-Workflow-Integration-Settings) to finish configuring the integration.
