---
id: acct-settings
title: Account Settings
sidebar_label: Account Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can manage the global account settings on the **Preferences** page.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-1.png')} alt="Account Settings" width="600"/>

The first two menu items are your SDK and API app tokens.

### SDK Token

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-2.png')} alt="Account Settings" width="600"/>

Your app token initializes the [TestFairy SDK](https://docs.testfairy.com/SDK/Adding_The_Testfairy_SDK_To_Your_App.html).

### API Key

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-3.png')} alt="Account Settings" width="600"/>

You can use the TestFairy API to upload builds and invite testers directly. For more information, see [Upload API](/test-fairy/api-reference/upload-api).

### Notifications

With the notifications options, you can define what type of messages you want to receive about new builds, crashes, and user feedback.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-4.png')} alt="Account Settings" width="600"/>

### Integrations

You can integrate your TestFairy account with different services to customize and streamline your work processes.

- Simple Mail Transfer Protocol (SMTP) and Gmail - See [SMTP and Gmail](/test-fairy/integrations/smtp-gmail) for information about connecting your SMTP email server or Gmail account. This ensures you send the emails from the same account you used to register.

- Slack - See [Slack](/test-fairy/integrations/slack) for information about integrating your Slack account with TestFairy.

- Zendesk - See [ZenDesk](/test-fairy/integrations/zendesk) for information about integrating your Zendesk account with TestFairy.

- Webhooks - You can use TestFairy webhooks to connect to services. See [Microsoft Teams](/test-fairy/integrations/ms-teams) for more information.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-5.png')} alt="Account Settings" width="600"/>

### Bug Systems

You can connect your bug system to TestFairy to report bugs directly to your [Jira Cloud](/test-fairy/testing-an-app/bug-tracking/jira-cloud), [GitHub](/test-fairy/testing-an-app/bug-tracking/github), or [Trello](/test-fairy/testing-an-app/bug-tracking/trello) account.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-6.png')} alt="Account Settings" width="600"/>

### Email Templates

TestFairy lets you customize the invitation emails it sends. This feature is available only if you use a custom email server (see [SMTP and Gmail](/test-fairy/integrations/smtp-gmail) for more information).

The email is HTML based and can use custom tags.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-7.png')} alt="Account Settings" width="600"/>

### Security

- **Require user login before app download** - If you want testers to first login to their tester account prior to downloading your app.
- **Require [Google] Sign on for all users** - Users must sign in using a Google email address.
- `[after adding SAML/Single Sign-on]` (optional) - Grants access to all apps to testers who sign in with SSO.

#### SAML/Single Sign-On

Add the [SSO](/test-fairy/acct-mgmt/sso/sso-intro) metadata definitions file here. When you add SAML/Single Sign-On, the file contains your ID, URL, and X.509 certificate.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-8.png')} alt="Account Settings" width="600"/>

### Account

The **Account** menu provides access to the following settings:

- First and last name
- Company name
- Subdomain
- User name and password
- Timezone

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-9.png')} alt="Account Settings" width="600"/>

### Billing

Here you see your account invoices.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-10.png')} alt="Account Settings" width="600"/>

### Users Allowlist

Allows recording of specific users instead of recording all user sessions. It helps in cases in which customer support teams want to record users who are having issues.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-11.png')} alt="Account Settings" width="600"/>

## Adding and Managing Users

Use the Team page to manage your team members:

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-12.png')} alt="Account Settings" width="600"/>

To add admins to your account, visit [Sauce Labs Team Management](https://docs.saucelabs.com/basics/acct-team-mgmt-hub/).

### Deleting Your Account

At TestFairy, we understand that you may want to delete your data. We are sad to see you leaving us, but we will help you make it happen.

First, this document is for **developers**, users who uploaded apps to TestFairy, added the TestFairy SDK to their app, and invited testers to their project.
If you are a developer, please continue reading.

If you are a **tester**, get in touch with the developer who invited you to their project and ask to be removed.

#### How to Delete Your Developer Account

To delete your TestFairy account, follow these steps:

1. Start by removing all the other admins from your account. Log in, go to the [Team](https://app.testfairy.com/settings/cpanel/) menu, select all admins in the account, and remove them:

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-13.png')} alt="Account Settings" width="600"/>

2. Once all admins are removed, go to your [Account Preferences](https://app.testfairy.com/settings/account/) > Account and press **Delete my account**.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-14.png')} alt="Account Settings" width="600"/>

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-15.png')} alt="Account Settings" width="600"/>

Your account is now deleted.

#### How to Delete the Data of a Specific Tester

TestFairy helps developers record videos showing how users use their apps.
To track the sessions of a specific user, you must call **setUserId()** with a unique identifier that can help you locate the particular session(s).

If one of your testers asked you to delete their data, do the following.

1. Remove the tester from your [testers list](https://app.testfairy.com/testers)

2. Search for the [sessions](https://app.testfairy.com/search) of this user and delete them one by one.

If you did not call `setUserId()` or have no other way to locate the specific sessions that need to be deleted, delete the builds that the user used.
