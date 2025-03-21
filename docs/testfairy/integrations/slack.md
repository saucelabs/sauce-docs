---
id: slack
title: Slack
sidebar_label: Slack
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## One-Click Integration

App Distribution integrates with Slack seamlessly, providing human-readable, real-time notifications for your selected events.

1. Head over to your App Distribution Dashboard, and select **Account Preferences**.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/preferences-link.png')} alt="account preferences"/>

1. Select **Integrations**, then click **Add integration**.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/account-settings-4.png')} alt="add integration"/>

1. Enter the domain of your Slack account:
   <img src={useBaseUrl('/img/testfairy/integrations/slack/slack-domain-1.png')} alt="slack domain"/>

1. It determines where your notifications appear. You may select an existing channel or create a new channel. Choose your channel and select **Authorize**.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/slack-1c.png')} alt="authorize channel"/>

1. You are returned to your App Distribution page with the `URL` and `Events` already filled in and selected.

   - Click **Test URL** to test the webhook.
   - Select **Save webhook** to add and confirm the Slack integration.
     <img src={useBaseUrl('/img/testfairy/integrations/slack/slack-1d.png')} alt="Save webhook"/>

1. Now, you receive notifications in your Slack channel.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/slack-message-preview.png')} alt="slack message preview"/>

:::note
Integrations require a paid account; click [https://www.testfairy.com/pricing](https://www.testfairy.com/pricing) for more information.
:::

## Manual Integration

If you need to create a manual integration with Slack, follow these steps:

1. Open the Slack [Incoming WebHooks](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks) app.

1. If you do not have the app installed in your workspace, press **Add to Slack**.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/slack-manualint-1.png')} alt="add slack"/>

1. After adding the app choose the Slack channel you want to post the messages in and press the **Add Incoming Webhooks Integration**.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/slack-manualint-2.png')} alt="Add incoming webhook integration"/>

1. Copy the `Webhook URL` link.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/slack-manualint-3.png')} alt="webhook URL"/>

1. Go to the **Integrations**, and press **Add Integration** for Slack.

1. Open your App Distribution Preferences, go to **Integrations** and click **Add integration** next to WEBHOOK.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/account-settings-4.png')} alt="Add integration"/>

1. Paste the Webhook URL into the URL field and then **Save webhook**.
   <img src={useBaseUrl('/img/testfairy/integrations/slack/slack-manualint-5.png')} alt="save webhook"/>

1. You now receive notifications in your Slack channel.
