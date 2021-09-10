---
id: config-okta
title: Configuring Okta
sidebar_label: Configuring Okta
---
1. Log in to **Okta** with administrator credentials.
2. On the **Applications** tab, search for and select the **Sauce Labs** application.
3. Click **Add**.
4. On the **General Settings** page of the setup wizard, enter an **Application label**, and next to **Browser plugin auto-submit**, select the **Automatically log in when user lands on login page** checkbox.
5. Click **Next**.
6. On the **Sign-On Options** page of the setup wizard, in the SAML 2.0 section, click the **Identity Provider metadata** link to download the metadata file. You will need to upload this file to Sauce Labs when you configure single sign-on.
7. Under **Credential Details**, next to **Application username format**, select **Email**.
8. Click **Done**.
9. On the application details page, in the **Assign** dropdown, click **Assign to People**.
10. In the **Assign Sauce Labs to People** window, next to the users or groups you want to give SSO access to, click **Assign**.
11. Click **Done**.
12. Follow the instructions in [Single Sign-On Settings](/basics/acct-team-mgmt/org-settings) to complete the integration of Sauce Labs with your Okta instance.

:::note
The Sauce Labs app on the Okta Application Network only supports access to **us-west-1**. If you need to configure access for another data center, please follow the instructions for general setup of SSO.
:::
