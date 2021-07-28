---
id: slack
title: Slack
sidebar_label: Slack
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Integrate Screener into your Slack app to get notifications of build status changes. For example:

<img src={useBaseUrl('img/visual/e2e-slack-notification.png')} alt="E2E Slack Notification Settings" />

Receive notifications for the following build statuses:

* `Build Failed`
* `Build Error`
* `Build Success`

## Setup Steps

1. [Create an Incoming Webhook](https://api.slack.com/incoming-webhooks) in Slack, following steps 1 to 3 [here](https://api.slack.com/incoming-webhooks).

2. Copy the Incoming Webhook URL from Slack.

3. In Screener, open **Account** > **Webhooks**, and click **Add Webhook Endpoint**.

4. In the Add Webhook dialog, enter your Webhook URL.

  <img src={useBaseUrl('img/visual/e2e-add-webhook.png')} alt="E2E Add Webhook for Slack" />

  Optionally, you can filter notifications by project and/or events.

5. Click **Add Endpoint**, and your Slack integration will be added.

  <img src={useBaseUrl('img/visual/e2e-webhooks.png')} alt="E2E Webhooks" />
