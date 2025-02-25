---
id: acct-settings
title: Account Settings
sidebar_label: Account Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To access the Settings page, click **Account** and then click **TestFairy Settings**.

<img src={useBaseUrl('img/testfairy/acct-settings-nav.png')} alt="Accessing Settings page" width="250"/>

## SDK App Token

<img src={useBaseUrl('img/testfairy/acct-settings-sdk-token.png')} alt="SDK App Token page" width="700"/>

Your app token initializes the TestFairy SDK. See [Adding the TestFairy SDK to your App](/testfairy/sdk/adding-tf-sdk) for more information.

## TestFairy Access Key

<img src={useBaseUrl('img/testfairy/acct-settings-tf-access-key.png')} alt="TestFairy Access Key page" width="700"/>

You can use the TestFairy API to upload builds and invite testers directly. For more information, see [Upload API](/testfairy/api-reference/upload-api).

## App Distribution

On the App Distribution page you can access the **Rename version number if file already exists** setting.

<img src={useBaseUrl('img/testfairy/acct-settings-app-distribution.png')} alt="App Distribution page" width="450"/>

## Notifications

On the Notifications page, you can define what types of messages you want to receive about new builds, crashes, and user feedback.

<img src={useBaseUrl('img/testfairy/acct-settings-notifications.png')} alt="Notifications page" width="700"/>

## Integrations

You can integrate your TestFairy account with different services to customize and streamline your work processes.

- Simple Mail Transfer Protocol (SMTP) and Gmail - See [SMTP and Gmail](/testfairy/integrations/smtp-gmail) for information about connecting your SMTP email server or Gmail account. This ensures you send the emails from the same account you used to register.

- Slack - See [Slack](/testfairy/integrations/slack) for information about integrating your Slack account with TestFairy.

- Webhooks - You can use TestFairy webhooks to connect to services. See [Microsoft Teams](/testfairy/integrations/ms-teams) for more information.

<img src={useBaseUrl('img/testfairy/acct-settings-integrations.png')} alt="Integrations page" width="700"/>

## Email Templates

TestFairy lets you customize the invitation emails it sends. This feature is available only if you use a custom email server. See [SMTP and Gmail](/testfairy/integrations/smtp-gmail) for more information.

The email is HTML based and can use custom tags.

<img src={useBaseUrl('img/testfairy/acct-settings-email-templates.png')} alt="Email templates page" width="700"/>

## Security

To ensure testers first login to their tester accounts before downloading your app, select the **Require user login before app download**.

<img src={useBaseUrl('img/testfairy/acct-settings-security.png')} alt="Security page" width="700"/>

### SAML/Single Sign-On

Add the SSO metadata definitions file here. When you add SAML/Single Sign-On, the file contains your ID, URL, and X.509 certificate. See [SSO](/testfairy/security/sso/sso-intro) for more information.

## Account

On the **Account** page you can access the following settings:

- Change Timezone
- Data Retention
- Session Quota

<img src={useBaseUrl('img/testfairy/acct-settings-account.png')} alt="Account page" width="700"/>

