---
id: amazon-sns
title: Amazon SNS Integration with Backtrace
sidebar_label: Amazon SNS
description: Integrate Backtrace with Amazon SNS.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide will go through the steps necessary to integrate Backtrace with Amazon SNS.

There are two main steps for setting up Amazon SNS:

- Create a topic
- Set up the integration

## Create a Topic

If you haven't already done so, create an Amazon SNS topic that will receive Backtrace notifications. For information on how to do this, see [Amazon SNS - Create a Topic](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html).

Also remember to [Create Subscriptions](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html) to this topic.

## Set Up the Integration

To set up the integration, first go to the **Project Settings** page for the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/set-up-workflow-integration.webp')} alt="" />

Then click **Integrations** in the left-hand menu, and the plus sign to create a new integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-wf-integration.webp')} alt="" />

Select **Amazon SNS** and fill in the required settings:

- Integration name
- Topic name
- Access key (make sure this user has permission to publish to the provided SNS topic)
- Secret access key

<img src={useBaseUrl('img/error-reporting/workflow-integrations/sns-settings.png')} alt="" />

Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration.
