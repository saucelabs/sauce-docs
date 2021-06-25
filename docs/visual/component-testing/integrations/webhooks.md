---
id: webhooks
title: Webhooks Integration with Visual Component Testing
sidebar_label: Webhooks
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Screener can send webhook events that notify your application any time an event happens on your account. Webhooks can be useful for extending Screener, and triggering external processes and services. Multiple webhook endpoints can be registered, and each webhook can be filtered by project and/or event types.

Screener has the following event types:

* build.status.error
* build.status.failure
* build.status.success

## Setup Steps
1. In Screener, go to **Open Account** > **Webhooks** > **Add Webhook Endpoint**.
2. In the **Add Webhook** dialog, enter your Webhook URL. Optionally, you can filter notifications by project and/or events.
<img src={useBaseUrl('img/visual/component-add-webhook.png')} alt="Component Add Webhook" width="550px" />

3. Click **Add Endpoint**, and your Webhook will be added.
<img src={useBaseUrl('img/visual/component-webhooks.png')} alt="Component Webhooks" />
