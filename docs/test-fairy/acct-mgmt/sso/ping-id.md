---
id: ping-id
title: Ping Identity
sidebar_label: Ping Identity
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in PingIdentity. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple `login with sso` button.

Talk to us! Request a demo at https://testfairy.com/products/solutions/enterprise#request-a-demo

#### Setting up Ping Identity in your account

- Login to Ping Identity's admin dashboard. Click on 'Add Application' and select 'Search Application Catalog':
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-1.png)

- Type "TestFairy" into the search box, and select the application. Click on the "expand" arrow.
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-2.png)

- Click on 'Setup'. There is no need to change configuration:
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-3.png)
- Click on "Continue to Next Step"
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-4.png)
- Type in the ACS URL and Entity ID. For _ACS URL_, please use the following format `https://acme.testfairy.com/login/sso`, and replace 'acme' with your own subdomain.

For _Entity ID_, please use the same format `https://acme.testfairy.com`. and again, replace 'acme' with your own subdomain.
![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-5.png)

- Click on "Continue to Next Step", no other configuration need to be changed.
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-6.png)
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-7.png)
- Click on "Save & Publish", and then click on "Finish"
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-8.png)
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-9.png)

- Next, download "SAML Metadata".
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-10.png)
- Now login to TestFairy, and select Preferences.
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-11.png)
- Copy the contents of the file you just downloaded, and paste it into the textbox. Click on "Update":
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-12.png)
- TestFairy-side configuration is now done!
  ![](https://docs.testfairy.com/img/sso/pingidentity/ping-identity-13.png)

Now please logout, and makre sure you see the "Login with SSO" button.
