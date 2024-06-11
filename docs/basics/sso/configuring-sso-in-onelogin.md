---
id: configuring-sso-in-onelogin
title: Configuring SSO in OneLogin
sidebar_label: Configuring OneLogin
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

1. Log in to **OneLogin** administrator panel.
2. In the **Applications** menu click **Applications**.
   <img src={useBaseUrl('img/basics/sso/idp-config/onelogin/apps.png')} alt="Menu Applications" width="350" />

3. Click **Add App**.
   <img src={useBaseUrl('img/basics/sso/idp-config/onelogin/add-app.png')} alt="Add App" width="250" />

4. Enter **Sauce Labs** in the search box and choose the app **Sauce Labs (New) - SAML 2.0**.
   <img src={useBaseUrl('img/basics/sso/idp-config/onelogin/search-app.png')} alt="Search App" width="800" />

5. Click **Save**.
6. In the **More actions** menu, click **SAML Metadata**. You will download identity provider metadata.
   <img src={useBaseUrl('img/basics/sso/idp-config/onelogin/download-metadata.png')} alt="Download Metadata" width="250" />

7. Use the metadata file from the previous step and set up the SSO integration at Sauce Labs in [Organization Management Panel](/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider).
8. Next, you assign users to the application in Auth0:

   1. In the **Users** menu select **Users**.
      <img src={useBaseUrl('img/basics/sso/idp-config/onelogin/menu-users.png')} alt="Menu Users" width="300" />

   2. Choose a user from the list.
   3. Click **Applications** in the left menu and click the **+** icon.
      <img src={useBaseUrl('img/basics/sso/idp-config/onelogin/user-menu-apps.png')} alt="Users - Menu Applications" width="1000" />

   4. Select the Sauce Labs application from the list and click **Continue**.
   5. You can modify **Name ID** (it has to be an [email address](/basics/sso/setting-up-sso/#name-id)), first name, or last name, and then click **Save**.
      <img src={useBaseUrl('img/basics/sso/idp-config/onelogin/assign-user-to-app.png')} alt="Assign User to App" width="500" />

9. Test the integration using the [IdP-initiated and the SP-initiated login](/basics/sso/logging-in-via-sso).
