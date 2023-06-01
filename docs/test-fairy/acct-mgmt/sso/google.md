---
id: google
title: Google
sidebar_label: Google 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on enables you to manage users and testers outside of TestFairy. Google Apps stores a list of permitted users, testers, and their passwords. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with the `Login with Google` button.

[Request a demo](https://testfairy.com/products/solutions/enterprise#request-a-demo).

## Setting Up Login With Google In Your Account

1. Log in to Google Apps as admin, go to the admin console and select **Apps**, click on **SAML apps**, and click on **Add**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-1.png')} alt="Apps button"/>
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-2.png')} alt="SAML apps"/>
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-3.png')} alt="Add button"/>

2. In the popup window, select **Setup my custom app**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-4.png')} alt="Setup my own custom app."/>

3. In Step 2, click on **Option 2: IDP metadata** to download an xml file, and click **next**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-5.png')} alt="Download button"/>

4. In step 3, enter "TestFairy" as the application's name, and click **next**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-6.png')} alt="Application name"/>

5. In step 4, you add the service provider details. Change `acme` to your enterprise subdomain name on TestFairy.com in the ACS URL: `https://acme.testfairy.com/login/sso`
   Entity ID: `https://acme.testfairy.com` (remember to change to your subdomain).
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-7.png')} alt="Service provider details"/>

6. Review and then click **next** and then click **Finish** when done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-8.png')} alt="Finish button"/>

   - you see a message confirming the setup.
     <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google41.png')} alt="Setup message"/>

7. Ensure the service is `on` to finish the setup.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-100-1.png')} alt="Service on"/>

8. If not then go to **EDIT SERVICE** and change it to **ON** for everyone.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-101.png')} alt="Change service settings"/>

9. Go to your TestFairy account, click on **Account Preferences** in the top-right menu, and select **security** from the left menu. Paste the previously saved file contents in the `ID Provider metadata`. Click on **Update SAML ID Provider metadata** when done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-9.png')} alt="ID Provider metadata"/>

Now, log out and make sure you can see the "Login with Google" button.

## Troubleshooting

- `Error: app_not_configured_for_user`. If you are seeing this error message on Google, then it means that you:
- Didn't enable this app for the current user or all users. See the installation section above for how to enable the newly created app for all users.
- Accidentally provided wrong **ACS URL** or **Entity ID**. See the installation section above for the correct values. Notice that every character matters as values _MUST_ be identical for verification.
