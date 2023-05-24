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

#### Setting up OneLogin in your account

- Login to OneLogin, click on the 'NEW APP' button on the right:
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-1.png)

- Type in "TestFairy" in the search box, and select the application:
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-2.png)

- Click 'Save', no need to change configuration:
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-3.png)
- Type in your TestFairy subdomain (for example, acme), under the 'Configuration' tab. Then, click "Save":
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-4.png)
- Click on "More Actions" and select "SAML Metadata". This will download a file to your computer:
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-5.png)
- Now login to TestFairy, and select "Preferences":
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-6.png)
- Copy the contents of the file you've just downloaded, and paste it into the textbox. Click on "Update":
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-7.png)
- TestFairy-side configuration is now done.
  ![](https://docs.testfairy.com/img/sso/onelogin/onelogin-8.png)

Now please logout, and make sure you see the "Login with SSO" button.
