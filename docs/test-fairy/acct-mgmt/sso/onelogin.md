---
id: onelogin
title: OneLogin
sidebar_label: OneLogin 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in OneLogin. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple login with sso button.

Talk to us! Request a demo at https://testfairy.com/products/solutions/enterprise#request-a-demo

## Setting up OneLogin in your account

1. Login to OneLogin, click on the **NEW APP** on the right.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-1.png')} alt=""/>

1. Type in "TestFairy" in the search box, and select the application.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-2.png')} alt=""/>

1. Click **Save**, no need to change configuration.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-3.png')} alt=""/>

1. Type in your TestFairy subdomain (for example, acme), under the **Configuration** tab. Then, click **Save**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-4.png')} alt=""/>

1. Click on **More Actions** and select **SAML Metadata**. This will download a file to your computer.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-5.png')} alt=""/>

1. Now login to TestFairy, and select **Preferences**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-6.png')} alt=""/>

1. Copy the contents of the file you've just downloaded, and paste it into the textbox. Click on **Update**:
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-7.png')} alt=""/>

1. TestFairy-side configuration is now done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/onelogin-8.png')} alt=""/>

Now please logout, and make sure you see the "Login with SSO" button.
