---
id: acct-settings
title: Account Settings
sidebar_label: Account Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To access the Settings page, click **Account** and then click **Sauce Mobile App Distribution Settings**.

<img src={useBaseUrl('img/testfairy/acct-settings-nav.png')} alt="Accessing Settings page" width="250"/>

## SDK App Token

<img src={useBaseUrl('img/testfairy/acct-settings-sdk-token.png')} alt="SDK App Token page" width="700"/>

Your app token initializes the Sauce Mobile App Distribution SDK. See [Adding the Sauce Mobile App Distribution SDK to your App](/testfairy/sdk/adding-tf-sdk) for more information.

## Sauce Mobile App Distribution Access Key

<img src={useBaseUrl('img/testfairy/acct-settings-tf-access-key.png')} alt="Sauce Mobile App Distribution Access Key page" width="700"/>

Your Access Key (API key) is used to authenticate REST API requests. You can use the Sauce Mobile App Distribution API to upload builds, manage testers, and automate workflows.

:::tip Best Practice
For CI/CD pipelines and automated processes, create dedicated [service accounts](/testfairy/security/service-accounts) rather than using personal user accounts. This improves security, auditability, and operational continuity.
:::

For more information, see:
- [Service Accounts and API Keys](/testfairy/security/service-accounts) - Creating and managing service accounts
- [REST API Reference](/testfairy/api-reference/rest-api) - Complete API documentation
- [Upload API](/testfairy/api-reference/upload-api) - Build upload automation

## Sauce Mobile App Distribution

On the Sauce Mobile App Distribution page you can access the **Rename version number if file already exists** setting.

<img src={useBaseUrl('img/testfairy/acct-settings-app-distribution.png')} alt="Sauce Mobile App Distribution page" width="450"/>

## Notifications

On the Notifications page, you can define what types of messages you want to receive about new builds, crashes, and user feedback.

<img src={useBaseUrl('img/testfairy/acct-settings-notifications.png')} alt="Notifications page" width="700"/>

## Integrations

You can integrate your Sauce Mobile App Distribution account with different services to customize and streamline your work processes.

- Simple Mail Transfer Protocol (SMTP) and Gmail - See [SMTP and Gmail](/testfairy/integrations/smtp-gmail) for information about connecting your SMTP email server or Gmail account. This ensures you send the emails from the same account you used to register.

- Slack - See [Slack](/testfairy/integrations/slack) for information about integrating your Slack account with Sauce Mobile App Distribution.

- Webhooks - You can use Sauce Mobile App Distribution webhooks to connect to services. See [Microsoft Teams](/testfairy/integrations/ms-teams) for more information.

<img src={useBaseUrl('img/testfairy/acct-settings-integrations.png')} alt="Integrations page" width="700"/>

## Email Templates

Sauce Mobile App Distribution lets you customize the invitation emails it sends. This feature is available only if you use a custom email server. See [SMTP and Gmail](/testfairy/integrations/smtp-gmail) for more information.

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

