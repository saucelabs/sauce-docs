---
id: ms-teams
title: Microsoft Teams
sidebar_label: Microsoft Teams
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs Mobile App Distribution integrates with Microsoft Teams seamlessly, providing human-readable, real-time notifications for your selected events.

1. Create a new channel, or use an existing one to deliver notifications. In the image below, a new channel named `TestFairy-Notifications` is created.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/01-create-channel.png')} alt="create channel"/>

1. Add a Connector to the channel from the dropdown list.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/02-add-connector.png')} alt="add connector"/>

1. Select **Configure** or **Add** the **Incoming Webhook** from the dialog.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/03-select-incoming-webhook.png')} alt="select incoming webhook"/>

1. Give the webhook a name; in this case, the webhook is named `TestFairy Webhook`. You can also give the webhook an image.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/04-name-webhook.png')} alt="name the webhook"/>

1. Copy the webhook endpoint from the dialog.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/04-copy-webhook-endpoint.png')} alt="copy webhook endpoint"/>

1. From your account at [Sauce Labs Mobile App Distribution](http://app.testfairy.com), go to Preferences.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/05-go-to-preferences.png')} alt="go to preference"/>

1. From the Preferences, select **Webhooks** and choose **+ Add Webhook**
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/account-settings-4.png')} alt="account settings"/>

1. Paste the endpoint into **URL**. Give the webhook a name, and select the notifications you wish to receive.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/07-edit-webhook.png')} alt="edit webhook"/>

1. Optionally, test the integration. Go back to your Teams channel to verify that you can receive a notification.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/08-test-webhook.png')} alt="test webhook"/>

1. Save the webhook, and verify that you have a successful message.
   <img src={useBaseUrl('/img/testfairy/integrations/ms-teams/09-save-webhook.png)')} alt="save webhook"/>
