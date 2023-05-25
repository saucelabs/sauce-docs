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

## Setting up Ping Identity in your account

1. Login to Ping Identity's admin dashboard. Click on **Add Application** and select **Search Application Catalog**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-1.png')} alt=""/>

2. Type `TestFairy` into the search box, and select the application. Click on the "expand" arrow.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-2.png')} alt=""/>

3. Click on **Setup**. There is no need to change configuration.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-3.png')} alt=""/>

4. Click on **Continue to Next Step**.  
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-4.png')} alt=""/>

5. Type in the ACS URL and Entity ID. For `ACS URL`, please use the following format `https://acme.testfairy.com/login/sso`, and replace 'acme' with your own subdomain.

For `Entity ID`, please use the same format `https://acme.testfairy.com`, and again, replace 'acme' with your own subdomain.
<img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-5.png')} alt=""/>

6. Click on **Continue to Next Step**, no other configuration need to be changed.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-6.png')} alt=""/>  
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-7.png')} alt=""/>

7. Click on **Save & Publish**, and then click on **Finish**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-8.png')} alt=""/>  
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-9.png')} alt=""/>

8. Next, download `SAML Metadata`.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-10.png')} alt=""/>

9. Now login to TestFairy, and select **Preferences**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-11.png')} alt=""/>

10. Copy the contents of the file you just downloaded, and paste it into the textbox. Click on **Update**:
    <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-12.png')} alt=""/>

11. TestFairy-side configuration is now done!
    <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-13.png')} alt=""/>

Now please logout, and make sure you see the "Login with SSO" button.
