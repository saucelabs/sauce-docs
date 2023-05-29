---
id: ping-id
title: Ping Identity
sidebar_label: Ping Identity
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in PingIdentity. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with the `login with sso` button.

[Request a demo](https://testfairy.com/products/solutions/enterprise#request-a-demo).

## Setting Up Ping Identity In Your Account

1. Log in to Ping Identity's admin dashboard. Click on **Add Application** and select **Search Application Catalog**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-1.png')} alt="Search Application Catalog link"/>

2. Type `TestFairy` into the search box and select the application. Click on the "expand" arrow.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-2.png')} alt="search for testfairy"/>

3. Click on **Setup**. There is no need to change the configuration.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-3.png')} alt="setup button"/>

4. Click on **Continue to Next Step**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-4.png')} alt="continue to next step"/>

5. Type in the ACS URL and Entity ID. For `ACS URL`, use the following format `https://acme.testfairy.com/login/sso`, and replace 'acme' with your subdomain.

   For `Entity ID`, use the same format, `https://acme.testfairy.com`, and again, replace 'acme' with your subdomain.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-5.png')} alt="acs url and entity id"/>

6. Click on **Continue to Next Step**, no other configuration need to be changed.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-6.png')} alt="continue to next step"/>
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-7.png')} alt="continue to next step"/>

7. Click on **Save & Publish**, and then click on **Finish**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-8.png')} alt="save and publish"/>
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-9.png')} alt="finish"/>

8. Next, download `SAML Metadata`.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-10.png')} alt="download link"/>

9. Now login to TestFairy, and select **Preferences**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-11.png')} alt="preferences"/>

10. Copy the contents of the file you just downloaded, and paste it into the textbox. Click on **Update SAML ID Provider Metadata**:
    <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-12.png')} alt="Update SAML ID Provider Metadata"/>

11. TestFairy-side configuration is now done.
    <img src={useBaseUrl('/img/test-fairy/acct-mgmt/ping-identity-13.png')} alt="success"/>

Now log out, and ensure you see the "Login with SSO" button.
