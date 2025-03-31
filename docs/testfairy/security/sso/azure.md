---
id: azure
title: Azure Active Directory
sidebar_label: Azure 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single sign-on enables you to manage users and testers outside of TestFairy.
Azure Active Directory stores a list of permitted users, testers, and passwords.

When SSO is configured into your account, the login page is replaced with a **Login with sso** button.

## Adding an Enterprise App

1. On the Home screen, click **Azure Active Directory** to open the **Directory overview**.
1. From the menu options, select **Enterprise Applications**.
1. Click **+Add application**.
1. Select **Non-gallery application**, add an app name, and click **Add**.

## Adding an SSO Login Option

1. Return to the menu and select **Single sign-on**.
1. Select **SAML**.
1. Click the pencil icon to edit the **Basic SAML Configuration** - `Identifier` and `Reply URL` fields. Add `https://acme.testfairy.com/` to the `Identifier` field and `https://acme.testfairy.com/login/sso` to the `Reply URL`. Change `acme` to your own **TestFairy** subdomain.
    - Please [contact Sauce Labs Support](https://support.saucelabs.com/s/submit-a-request?language=en_US) to provision a custom subdomain 
1. Download the XML file in the `Federation Data`. You need it later for uploading to your TestFairy Dashboard Security settings.

## Adding Users to the Application

1. Go to **Users and Groups** and click **+Add User**.
1. In **Add assignment**, click the `Users and groups` line and select the user(s) you want to add from **Users and groups**. Once all users are added to the **Selected items**, click **Select**.
1. To finish the action click **Assign**. The users are all now part of the application.

## Adding SAML Details To TestFairy

1. Go to your TestFairy account preferences and select **Security**.
1. Open the XML file previously saved and copy its content to the **ID Provider metadata** field.
1. Click on **Update SAML ID Provider Metadata** when done.
1. After saving the configuration, you see a success message. Now, log out and make sure you can see the **Login with Azure** button when trying to log in.
