---
id: slack
title: Slack
sidebar_label: Slack
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Integrate Screener into your Slack app to get notifications of build status changes. For example:

Receive notifications for the following build statuses:

* Build Failed
* Build Error
* Build Success


## Setup Steps

1. [Create an Incoming Webhook](https://api.slack.com/incoming-webhooks) in Slack, following steps 1 to 3 [here](https://api.slack.com/incoming-webhooks).

2. Copy the Incoming Webhook URL from Slack.

3. In Screener, open **Account > Webhooks**, and click **Add Webhook Endpoint**.

4. In the Add Webhook dialog, enter your Webhook URL:
(Optionally filter notifications by project and/or events)

5. Click **Add Endpoint**, and your Slack integration will be added.
