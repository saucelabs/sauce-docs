---
id: azure
title: Azure Active Directory
sidebar_label: Azure 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Setting Up Azure Active Directory In Your Account

Single Sign-on enables you to manage users and testers outside of TestFairy.
Azure Active Directory stores a list of permitted users, testers, and passwords.

Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with the `login with sso` button.

[Request a demo](https://testfairy.com/products/solutions/enterprise#request-a-demo).

### Adding An Enterprise App

1. In your Home screen click **Azure Active Directory** to open the **Directory overview**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-1.png')} alt="Azure Active Directory"/>

1. From the menu options, select **Enterprise Applications**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-2.png')} alt="Enterprise Applications"/>

1. Click **+Add application**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-3.png')} alt="New application button"/>

1. Select **Non-gallery application**, add an app name (TestFairy) and click **Add**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-4.png')} alt="Non-gallery application and Add button"/>

### Adding An SSO Login Option

1. Return to the menu and select the **Single sign-on**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-5.png')} alt="Single sign-o"/>

1. Select **SAML**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-6.png')} alt="SAML"/>

1. Click the pencil icon to edit the **Basic SAML Configuration** - `Identifier` and `Reply URL` fields. Add `https://acme.testfairy.com/` to the `Identifier` field and `https://acme.testfairy.com/login/sso` to the `Reply URL`.
   Change `acme` to your own **TestFairy** subdomain.

1. Now download the XML file in the `Federation Data`. You need it later for uploading to your [TestFairy Dashboard Security settings](https://app.testfairy.com/settings/security/).
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-17.png')} alt="Federation Data"/>

### Adding Users To The Application

Now let's add an Azure AD user to your application.

1. Go to **Users and Groups** and click **+Add User**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-8.png')} alt="Add user"/>

1. In **Add assignment**, click the `Users and groups` line and select the user(s) you want to add from the **Users and groups**.
   Once all users are added to the **Selected items**, click **Select**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-9.png')} alt="select users"/>

1. To finish the action click **Assign**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-10.png')} alt="assign users"/>

1. The users are all now part of the application.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-11.png')} alt="user are assigned"/>

### Adding The SAML Details To TestFairy

1. Go to your TestFairy account preferences and select **Security**.
1. Open the XML file previously saved and copy its content to the **ID Provider metadata** field.
1. Click on **Update SAML ID Provider Metadata** when done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-tf-1.png')} alt="ID Provider metadata"/>

1. After saving the configuration, you see a success message.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-tf-2.png')} alt="success"/>

Now, log out and make sure you can see the `Login with Azure` button when trying to log in to the [TestFairy Dashboard](https://app.testfairy.com).
