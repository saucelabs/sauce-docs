---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Screener can send webhook events that notify your application any time an event happens on your account. Webhooks can be useful for extending Screener, and triggering external processes and services. Multiple webhook endpoints can be registered, and each webhook can be filtered by project and/or event types.

Screener has the following event types:

* `build.status.error`
* `build.status.failure`
* `build.status.success`

## Setup Steps

1. In Screener, open **Account > Webhooks**, and click **Add Webhook Endpoint**.

2. In the Add Webhook dialog, enter your Webhook URL.

<img src={useBaseUrl('img/visual/e2e-add-webhook.png')} alt="E2E Add Webhook" />

Optionally, you can filter notifications by project and/or events.

3. Click **Add Endpoint**, and your Webhook will be added.

<img src={useBaseUrl('img/visual/e2e-webhooks.png')} alt="E2E Webhooks" />
