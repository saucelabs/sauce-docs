---
id: azure
title: Azure Active Directory
sidebar_label: Azure 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Setting up Azure Active Directory in your account

Single Sign-on enables you to manage users and testers outside of TestFairy.
A list of permitted users and testers, as well as their passwords, is stored in Azure Active Directory.

Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple `login with sso` button.

Talk to us! Request a demo at [https://testfairy.com/products/solutions/enterprise#request-a-demo](https://testfairy.com/products/solutions/enterprise#request-a-demo)

### Adding an enterprise app

1. In your Home screen click **Azure Active Directory** to open the **Directory overview**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-1.png')} alt=""/>

1. From the menu options select the **Enterprise Application**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-2.png')} alt=""/>

1. Click **+Add application**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-3.png')} alt=""/>

1. Select **Non-gallery application**, add an app name (TestFairy) and click **Add**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-4.png')} alt=""/>

### Adding an SSO login option

1. Go back to the menu and select the **Single sign-on**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-5.png')} alt=""/>

1. Select **SAML**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-6.png')} alt=""/>

1. Click the pencil icon to edit **Basic SAML Configuration** - `Identifier` and `Reply URL` fields.
   Add `https://acme.testfairy.com/` to the `Identifier` field and `https://acme.testfairy.com/login/sso` to the `Reply URL`.

Change `acme` to your own **TestFairy** subdomain.

1. Now download the XML file in the `Federation Data`. You will need it later for uploading to your [TestFairy Dashboard Security settings](https://app.testfairy.com/settings/security/).
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-17.png')} alt=""/>

### Adding users to the application

Now lets add an Azure AD user to your application.

1. Go to **Users and Groups** and click **+Add User**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-8.png')} alt=""/>

1. In **Add assignment** click the `Users and groups` line and select the user/users you want to add from the **Users and groups**.
   Once all users are added to the **Selected items** click **Select**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-9.png')} alt=""/>

1. To finish the action click **Assign**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-10.png')} alt=""/>

1. The users are all now part of the application.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-ad-11.png')} alt=""/>

### Adding the SAML details to TestFairy

1. Now, go to your TestFairy account preferences, and select **Security**.
1. Open the XML file previously saved and copy its content to the **ID Provider metadata** field.
1. Click on **Update SAML ID Provider Metadata** when done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-tf-1.png')} alt=""/>

1. After configuration has been saved, you will see a success message.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/azure-tf-2.png')} alt=""/>

Now, please log out and make sure you can see the `Login with Azure` button when trying to log in to the [TestFairy Dashboard](https://app.testfairy.com)
