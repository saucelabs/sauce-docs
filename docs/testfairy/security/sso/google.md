---
id: google
title: Google
sidebar_label: Google 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When SSO is configured into your account, the login page is replaced with the `Login with Google` button.

## Setting Up Login With Google In Your Account

1. Log in to Google Apps as admin, go to the admin console and select **Apps**, click on **SAML apps**, and click on **Add**.
1. In the popup window, select **Setup my custom app**.
1. Click on **Option 2: IDP metadata** to download an xml file, and click **next**.
1. Enter **Sauce Labs Mobile App Distribution** as the application's name, and then click **Next**.
1. Add the service provider details. Change `acme` to your enterprise subdomain name on TestFairy.com in the ACS URL.
    -[Contact Sauce Labs Support](https://support.saucelabs.com/s/submit-a-request?language=en_US) to provision a custom subdomain 
1. Review and click **Next** and then click **Finish** when done.
1. Ensure the service is `on` to finish the setup. If it isn't, go to **EDIT SERVICE** and change it to **ON** for everyone.
1. Go to your Sauce Labs Mobile App Distribution account, click on **Account Preferences** in the top-right menu, and select **Security** from the left menu. Paste the previously saved file contents in the `ID Provider metadata`. Click on **Update SAML ID Provider metadata** when done. Log out and make sure you can see the **Login with Google** button.

## Troubleshooting

### `Error: app_not_configured_for_user`

If you are seeing this error message on Google, then it means that you:

- Didn't enable this app for the current user or all users. See the installation section above for how to enable the newly created app for all users.
- Accidentally provided wrong **ACS URL** or **Entity ID**. See the installation section above for the correct values. Notice that every character matters as values must be identical for verification.
