---
id: acct-settings
title: Account Settings
sidebar_label: Account Settings
description: Find your Mobile App Distribution account settings, including your API key, notifications, integrations and security options.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Account settings are available from the user menu. Click the **Profile** icon in the top-right corner to open it, then select:

- **My Profile** for your personal settings, such as your API key, timezone and email notifications.
- **Organization Settings** for organization-wide settings, such as security and data retention. Only **Account Owners** and **Org Admins** can access Organization Settings.
- **Integrations** to connect your organization to other services.

<img src={useBaseUrl('/img/app-distribution/acct-settings/acct-settings-1.png')} alt="User menu with My Profile highlighted" width="100%"/>

## API Key

Your API key (access key) authenticates API requests. It's available from the **API Credentials** dropdown in the top navigation bar and the **API Key** section on the **My Profile** page. See [API Keys](/app-distribution/security/api-keys) for usage details.

<img src={useBaseUrl('/img/app-distribution/acct-settings/acct-settings-2.png')} alt="API Key field with the view and copy icons highlighted" width="100%"/>

For automated workflows, use dedicated [service accounts](/app-distribution/security/service-accounts).

## Notifications

On the **My Profile** page, use the **Receive emails for new builds and app assignments** toggle in the **Email Settings** section to control which emails you receive. Click **Update** to save.

<img src={useBaseUrl('/img/app-distribution/acct-settings/acct-settings-3.png')} alt="Email Settings toggle and Update button" width="100%"/>

In-app notifications are always on. See [Notifications](/app-distribution/organization/notifications) for more information.

## Integrations

You can integrate your Sauce Labs Mobile App Distribution organization with different services to customize and streamline your work processes. Click the **Profile** icon and select **Integrations** to open the **Integrations** page.

<img src={useBaseUrl('/img/app-distribution/acct-settings/acct-settings-4.png')} alt="User menu with Integrations highlighted" width="100%"/>

- **SMTP / Email** - Send emails from your own mail server. See [SMTP / Email](/app-distribution/integrations/smtp-email).
- **Webhooks** - Send event notifications to other services. See [Webhooks](/app-distribution/integrations/webhooks).

For the full list, see the **Integrations** section, starting with [Sauce Labs Connection](/app-distribution/integrations/saucelabs-connection).

## Security

To ensure testers log in before downloading your app, enable **Require login before download** in the **Security** section of **Organization Settings**, then click **Update**.

<img src={useBaseUrl('/img/app-distribution/acct-settings/acct-settings-5.png')} alt="Security section with Require login before download" width="100%"/>

### SAML/Single Sign-On

Account Owners and Org Admins can configure SAML-based Single Sign-On with your identity provider's metadata. Click the **Profile** icon, select **Integrations**, then click **Connect** next to **SSO / SAML**.

<img src={useBaseUrl('/img/app-distribution/acct-settings/acct-settings-6.png')} alt="Integrations page with Connect highlighted for SSO / SAML" width="100%"/>

See [SSO / SAML](/app-distribution/settings/sso-saml) for the full setup.

## Timezone and Data Retention

**Timezone** is set in the **Timezone Settings** section of **My Profile**. Choose a timezone from the list; if none is selected, **UTC** is used.

<img src={useBaseUrl('/img/app-distribution/acct-settings/acct-settings-7.png')} alt="Timezone Settings with the Timezone dropdown" width="100%"/>

**Data Retention** is shown in the subscription details at the top of **Organization Settings**, next to your plan and limits.

<img src={useBaseUrl('/img/app-distribution/acct-settings/acct-settings-8.png')} alt="Subscription details with Data Retention" width="100%"/>

For more information, see [My Profile](/app-distribution/settings/my-profile) and [Organization Settings](/app-distribution/settings/organization).
