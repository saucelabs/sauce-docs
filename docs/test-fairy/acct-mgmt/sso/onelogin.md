---
id: onelogin
title: OneLogin
sidebar_label: OneLogin 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on enables you to manage users and testers outside of TestFairy. OneLogin stores a list of permitted users, testers, and their passwords. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with the login with SSO button.

[Request a demo](https://testfairy.com/products/solutions/enterprise#request-a-demo).

## Setting Up OneLogin In Your Account

1. Log in to OneLogin, and click the **NEW APP** on the right.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-1.png')} alt="New app"/>

1. Type in "TestFairy" in the search box, and select the application.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-2.png')} alt="search for testfairy"/>

1. Click **Save**, no need to change configuration.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-3.png')} alt="Save button"/>

1. Type in your TestFairy subdomain (for example, acme) under the **Configuration** tab. Then, click **Save**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-4.png')} alt="configure subdomain"/>

1. Click on **More Actions** and select **SAML Metadata**. It downloads a file to your computer.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-5.png')} alt="SAML Metadata link"/>

1. Now login to TestFairy, and select **Preferences**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-6.png')} alt="Preferences links"/>

1. Copy the contents of the file you've just downloaded and paste it into the textbox. Click on **Update SAML ID Provider Metadata**:
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-7.png')} alt="Update SAML ID Provider Metadata button"/>

1. TestFairy-side configuration is now done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-8.png')} alt="success"/>

Now, log out and ensure you see the "Login with SSO" button.
