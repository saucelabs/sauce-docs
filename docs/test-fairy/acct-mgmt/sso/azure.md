---
id: azure
title: Azure Active Directory
sidebar_label: Azure 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Setting up Azure Active Directory in your account

Single Sign-on enables you to manage users and testers outside of TestFairy.
A list of permitted users and testers, as well as their passwords, is stored in Azure Active Directory.

Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple `login with sso` button.

Talk to us! Request a demo at [https://testfairy.com/products/solutions/enterprise#request-a-demo](https://testfairy.com/products/solutions/enterprise#request-a-demo)

#### Adding an enterprise app

- In your Home screen press the **Azure Active Directory** icon to open the **Directory overview**.

  <!-- ![](/img/sso/azure/azure-ad-1.png) -->

- From the menu options select the **`Enterprise Application`** option.

  <!-- ![](/img/sso/azure/azure-ad-2.png) -->

- Press the **`+Add application`** button.

  <!-- ![](/img/sso/azure/azure-ad-3.png) -->

- Select the **Non-gallery application**, add an app name (TestFairy) and press the **`Add`** button.

  <!-- ![](/img/sso/azure/azure-ad-4.png) -->

#### Adding an SSO login option

- Go back to the menu and select the **`Single sign-on`** menu option.

  <!-- ![](/img/sso/azure/azure-ad-5.png) -->

- Select the **`SAML`** option.

  <!-- ![](/img/sso/azure/azure-ad-6.png) -->

- Press the pencil icon to edit the **`Basic SAML Configuration`** - `Identifier` and `Reply URL` fields.
  Add `https://acme.testfairy.com/` to the `Identifier` field and `https://acme.testfairy.com/login/sso` to the `Reply URL`.

  Change `acme` to your own **TestFairy** subdomain.

  Now download the XML file in the `Federation Data`. You will need it later for uploading to your [TestFairy Dashboard Security settings](https://app.testfairy.com/settings/security/).

  <!-- ![](/img/sso/azure/azure-ad-17.png)   -->

#### Adding users to the application

Now lets add an Azure AD user to your application.

- Go to **`Users and Groups`** and press the `+Add User` button.

  <!-- ![](/img/sso/azure/azure-ad-8.png) -->

- In the **`Add assignment`** column press the `Users and groups` line and select the user/users you want to add from the **`Users and groups`** column.

  Once all users are added to the **`Selected items`** press the `Select` Button.

  <!-- ![](/img/sso/azure/azure-ad-9.png) -->

- To finish the action press the **`Assign`** button.

  <!-- ![](/img/sso/azure/azure-ad-10.png) -->

- The users are all now part of the application.

  <!-- ![](/img/sso/azure/azure-ad-11.png) -->

#### Adding the SAML details to TestFairy

- Now, please go to your TestFairy account preferences, and select the Security menu item.
  Open the XML file previously saved and copy its content to the **ID Provider metadata** field.

  Click on `Update SAML ID Provider Metadata` when done.

<!-- ![](/img/sso/azure/azure-tf-1.png) -->

- After configuration has been saved, you will see a success message.

 <!-- ![](/img/sso/azure/azure-tf-2.png) -->

Now, please log out and make sure you can see the `Login with Azure` button when trying to log in to the [TestFairy Dashboard](https://app.testfairy.com)
