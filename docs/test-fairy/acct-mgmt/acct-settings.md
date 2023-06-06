---
id: acct-settings
title: Account Settings
sidebar_label: Account Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



Global account settings can be managed on the **Preferences** page.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-1.png')} alt="Account Settings" width="600"/>

The first two menu items are your SDK and API app tokens.

### SDK Token
<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-2.png')} alt="Account Settings" width="600"/>

Your app token is used to initialize the [TestFairy SDK](https://docs.testfairy.com/SDK/Adding_The_Testfairy_SDK_To_Your_App.html).

### API Key
<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-3.png')} alt="Account Settings" width="600"/>

You can use the TestFairy API to directly upload builds and invite testers. For more information, see [Upload API](https://docs.testfairy.com/API/Upload_API.html).

### Notifications
The notifications options are used to define what type of messages you want to receive about new builds, crashes, and user feedback.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-4.png')} alt="Account Settings" width="600"/>

### Integrations
You can integrate your TestFairy account with different services to customize and streamline your work processes.

* SMTP and Gmail - See [SMTP and Gmail](https://docs.testfairy.com/Integrations/SMTP_and_Gmail.html) for information about connecting your SMTP email server or your Gmail account. This ensures the emails you send from your TestFairy account will be sent from the email account you used to register.

* Slack - See [Slack](https://docs.testfairy.com/Integrations/Slack.html) for information about integrating your Slack account with TestFairy.

* Zendesk - See [ZenDesk](https://docs.testfairy.com/Integrations/Zendesk.html) for information about integrating your Zendesk account with TestFairy.

* Webhooks - You can use TeftFairy webhooks to connect to services. See [Microsoft Teams](https://docs.testfairy.com/Integrations/Microsoft_Teams.html) for more information.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-5.png')} alt="Account Settings" width="600"/>

### Bug Systems
You can connect your bug system to TestFairy to report bugs directly to your [Jira Cloud](https://docs.testfairy.com/Bug_Tracking/JIRA_Cloud.html), [GitHub](https://docs.testfairy.com/Bug_Tracking/Github.html), or [Trello](https://docs.testfairy.com/Bug_Tracking/Trello.html) account.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-6.png')} alt="Account Settings" width="600"/>

### Email Templates
TestFairy lets you customize the invitation emails it sends. This feature is available only if you use a custom email server (see [SMTP and Gmail](https://docs.testfairy.com/Integrations/SMTP_and_Gmail.html) for more information).

The email is HTML based and can use custom tags.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-7.png')} alt="Account Settings" width="600"/>

### Security
* **Require user login before app download** - If you want testers to first login to their tester account prior to downloading your app.
* **Require [Google] Sign on for all users** - Users must sign in using a Google email address.
* ``[after adding SAML/Single Sign-on]`` (optional) - Grants access to all apps to testers who sign in with SSO.

#### SAML/Single Sign-On
Here you can add the [SSO](https://docs.testfairy.com/Single_Sign-On/SSO.html) metadata definitions file. When you add SAML/Single Sign-On, the file will contain your ID, URL and x509 certificate.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-8.png')} alt="Account Settings" width="600"/>

### <a name="account"></a>Account

The **Account** menu provides access to the following settings:

* First and last name
* Company name
* Subdomain
* User name and password
* Timezone

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-9.png')} alt="Account Settings" width="600"/>

### Billing

Here you will see your account invoices.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-10.png')} alt="Account Settings" width="600"/>

### Users Whitelist

Allows recording of specific users, instead of recording all user sessions. This is useful in cases in which customer support teams want to record users who are having issues.

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-11.png')} alt="Account Settings" width="600"/>

##Adding and Managing Users

Use the Team page to manage your team members:

<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-12.png')} alt="Account Settings" width="600"/>

To add admins to your account, go to the [Sauce Labs Team Management page](https://docs.saucelabs.com/basics/acct-team-mgmt-hub/).

### Deleting Your Account 

At TestFairy we understand that at some point you may want to delete your data. As much as we are sad to see you leaving us, we will help you make it happen.

First, this document is for __developers__, users who uploaded apps to TestFairy, added the TestFairy SDK to their app, and invited testers to their project. 
If you are a developer, please continue reading.


If you are a __tester__, please contact the developer who invited you to their project and ask to be removed.

#### How to delete your developer account:

In order to delete your TestFairy account please follow these steps:

  1. Start by removing all the other admins from your account. Log in, go to the [Team](https://app.testfairy.com/settings/cpanel/) menu at the top right, select all admins in the account and remove them:
  
  <br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-13.png')} alt="Account Settings" width="600"/>

  2. Once all admins are removed go to your [Account Preferences](https://app.testfairy.com/settings/account/) → Account section and at the bottom of the screen press the `Delete my account` button
  
<br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-14.png')} alt="Account Settings" width="600"/>
  
  <br/><img src={useBaseUrl('img/test-fairy/acc-settings/acc-set-15.png')} alt="Account Settings" width="600"/>
  
Your account is now deleted.

#### How to delete the data of a specific tester:

TestFairy helps developers record videos showing how users used their apps. 
In order to be able to track the sessions of a specific user, you must call __setUserId()__ with a unique identifier that can help you locate the specific session/s. 


If one of your testers asked you to delete their data please do the following.

1. Remove the tester from your [testers list](https://app.testfairy.com/testers)

2. Search for the [sessions](https://app.testfairy.com/search) of this user and delete them one by one.

If you did not call setUserId() or you don't have any other way to locate the specific sessions that need to be deleted, please delete the builds that were used by the user.
