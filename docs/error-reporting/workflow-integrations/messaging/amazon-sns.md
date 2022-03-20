---
id: amazon-sns
title: Amazon SNS
sidebar_label: Amazon SNS
description: Integrate Backtrace with Amazon SNS.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Amazon SNS Integration
This guide will go through the steps necessary to integrate Backtrace with Amazon SNS.

There are two main steps for setting up Amazon SNS:
- Create a topic
- Set up the integration

## Create a Topic
If you haven't already done so, create an Amazon SNS topic that will receive Backtrace notifications. For information on how to do this, see [Amazon SNS - Create a Topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html).

Also remember to [Create Subscriptions](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html) to this topic.

## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

For Amazon SNS, the required settings are:
- Topic Name
- Access Key - Make sure this user has permission to publish to the provided SNS topic.
- Secret Access Key

<img src={useBaseUrl('img/error-reporting/workflow-integrations/sns-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to [Common Settings](https://support.backtrace.io/hc/en-us/articles/360040516791-Common-Workflow-Integration-Settings) to finish configuring the integration.
