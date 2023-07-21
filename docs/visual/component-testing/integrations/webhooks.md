---
id: webhooks
title: Webhooks Integration with Visual Component Testing
sidebar_label: Webhooks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Webhooks allow one application to send real-time HTTP POST requests to a specified URL when a specific event occurs. It enables event-driven communication between different systems, where the system generating the event (sender) notifies or pushes data to another system (receiver) by making an HTTP request to the predefined URL. Webhooks operate on a publisher-subscriber model. The application generating the event is called the publisher, and the application receiving the event is the subscriber.

Sauce Labs can send webhook events to notify your app any time an event happens on your account. You can use Webhooks to extend Sauce Labs and trigger external processes and services in your software stack. You can configure multiple webhook endpoints, and each webhook endpoint can have specific event types as filters.

Sauce Labs has the following event types:

- `build.status.error`
- `build.status.failure`
- `build.status.success`

## Configure A Webhook

1. In Sauce Labs, go to **Open Account** > **Webhooks** > **Add Webhook Endpoint**.
2. In the **Add Webhook** dialog, enter your Webhook URL. Optionally, you can filter notifications by project and/or events.
   <img src={useBaseUrl('img/visual/component-add-webhook.png')} alt="Component Add Webhook" width="550px" />
3. Click **Add Endpoint** to add your webhook.
   <img src={useBaseUrl('img/visual/component-webhooks.png')} alt="Component Webhooks" />

## Testing Webhooks

If you don’t have an existing HTTPS endpoint or URL for your webhook setup, you must deploy one on a server. For testing purposes, you can quickly inspect the payload using some public webhook testing tools. These tools act as catch-all for all kinds of HTTP requests and respond with a `200 OK` HTTP status code. You can review incoming payloads and develop your webhook services. Some of the popular tools are listed below for your convenience:

- [Beeceptor](https://beeceptor.com/): Provides mock endpoints that you can use with Webhooks. You can simulate success and failure scenarios using mock rules.
- [Webhook.site](https://webhook.site/): Provides a unique URL to test and debug Webhooks and inspect all kind of HTTP requests.
