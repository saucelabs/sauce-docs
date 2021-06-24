---
id: slack
title: Slack Integration with Visual Component Testing
sidebar_label: Slack
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Integrate Screener into your Slack app to get notifications of build status changes. For example:
<img src={useBaseUrl('img/visual/component-slack-notification.png')} alt="Component Slack Notification" />

Receive notifications for the following build statuses:
* Build Failed
* Build Error
* Build Success

## Setup Steps
1. In Slack, create an Incoming Webhook by following steps 1 to 3 [here](https://api.slack.com/incoming-webhooks).
2. Copy the Incoming Webhook URL from Slack.
3. In Screener, open **Account** > **Webhooks** > **Add Webhook Endpoint**.
4. In the **Add Webhook** dialog, enter your Webhook URL. Optionally, you can also filter notifications by project and/or events.
<img src={useBaseUrl('img/visual/component-add-webhook.png')} alt="Component Add Webhook Slack" width="550px" />
5. Click **Add Endpoint**, and your Slack integration will be added.
<img src={useBaseUrl('img/visual/component-webhooks.png')} alt="Component Add Webhooks" width="550px" />
