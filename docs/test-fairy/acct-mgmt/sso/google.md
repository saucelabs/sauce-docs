---
id: google
title: Google
sidebar_label: Google 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in Google Apps. Therefore onboarding a new developer into the team is an easy task.

When SSO is configured into your account, the login page is replaced with a simple `Login with Google` button.

Talk to us! Request a demo at [https://testfairy.com/products/solutions/enterprise#request-a-demo](https://testfairy.com/products/solutions/enterprise#request-a-demo)

Sections:

- [Installation](#installation)
- [Troubleshooting](#troubleshooting)

<a name="installation"></a>

#### Setting up Login With Google in your account

1. Login to Google Apps as admin, go to the admin console and select **Apps**, click on **SAML apps**, and click on **Add**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-1.png')} alt=""/>
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-2.png')} alt=""/>
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-3.png')} alt=""/>

2. In the popup window, select **Setup my own custom app**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-4.png')} alt=""/>

3. In Step 2, click on **Option 2: IDP metadata** to download an xml file, and click **next**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-5.png')} alt=""/>

4. In step 3, enter "TestFairy" as the name of the application, and click **next**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-6.png')} alt=""/>

5. In step 4, we will add the service provider details. Change `acme` to your enterprise subdomain name on TestFairy.com in the ACS URL: `https://acme.testfairy.com/login/sso`

Entity ID: `https://acme.testfairy.com`

(remember to change to your subdomain)

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-7.png')} alt=""/>

6. Review and then click **next** and then click **Finish** when done.

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-8.png')} alt=""/>

- you will see a message confirming the setup.
  <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google41.png')} alt=""/>

7. To finish the setup please make sure the service is `on`.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-100-1.png')} alt=""/>

8. If not then go to **EDIT SERVICE** and change it to **ON** for everyone.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-101.png')} alt=""/>

9. Now, go to your TestFairy account, click on **Account Preferences** in the topright menu, and select **security** from the left menu. Paste the contents of the file you saved previosuly in the ID Provider metadata field. Click on **Update SAML ID Provider metadata** when done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/google-9.png')} alt=""/>

Now, please log out and make sure you can see the "Login with Google" button.

#### Troubleshooting

- `Error: app_not_configured_for_user`. If you are seeing this error message on Google, then it means that you:
  - Didn't enable this app for the current user or for all users. Please see in installation section above, how to enable the newly created app for all users.
  - Accidentally provided wrong **ACS URL** or **Entity ID**. Please see installation section above for the correct values. Notice that every single character matters as values _MUST_ be identical for verification.
