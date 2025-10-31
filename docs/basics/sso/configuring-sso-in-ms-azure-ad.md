---
id: configuring-sso-in-ms-azure-ad
title: Configuring SSO in Microsoft Entra ID
sidebar_label: Configuring MSFT Entra ID
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

1. Log into **Entra ID** administrator panel and go to **Active Directory**.
2. In the menu click **Enterprise Applications**.
   <img src={useBaseUrl('img/basics/sso/idp-config/azure/apps.png')} alt="Menu Applications" width="250" />

3. Click **New Application**.
   <img src={useBaseUrl('img/basics/sso/idp-config/azure/add-app.png')} alt="Add App" width="500" />

4. Type **Sauce Labs** in the search box and choose the app **Sauce Labs**.
   <img src={useBaseUrl('img/basics/sso/idp-config/azure/search-app.png')} alt="Search App" width="300" />

5. Leave the default name or rename it and click **Create**.
   <img src={useBaseUrl('img/basics/sso/idp-config/azure/create-app.png')} alt="Create App" width="500" />

6. Set up SAML Single Sign-On either by clicking **Single sign-on** in the menu on the left or by clicking the tile **Set up single sign on**.
   <img src={useBaseUrl('img/basics/sso/idp-config/azure/setup-saml-sso.png')} alt="Set up SAML SSO" width="800" />

7. Click the **SAML** tile.
   <img src={useBaseUrl('img/basics/sso/idp-config/azure/setup-saml-sso-2.png')} alt="Set up SAML SSO" width="800" />

8. Save the default configuration by clicking **Yes**.
   <img src={useBaseUrl('img/basics/sso/idp-config/azure/save-default-config.png')} alt="Save default SP configuration" width="700" />

9. In the **Attributes & Claims** section click **Edit**.
   <img src={useBaseUrl('img/basics/sso/idp-config/azure/edit-claims.png')} alt="Edit claims" width="700" />

10. Edit the value of NameID by clicking on it.
    <img src={useBaseUrl('img/basics/sso/idp-config/azure/edit-name-id.png')} alt="Edit NameID" width="700" />

11. Make sure that the source value of this claim is a **[valid email address](/basics/sso/setting-up-sso/#name-id)** (for example `user.mail`) and not a user identifier. Sauce Labs Service Provider requires valid email addresses during SAML SSO authentication. If you changed the source attribute, save the changes.
    <img src={useBaseUrl('img/basics/sso/idp-config/azure/name-id-value.png')} alt="Source attribute of NameID" width="700" />

12. Next, assign users to this application:

    1. Go to **User and groups** in the main menu of the application.
       <img src={useBaseUrl('img/basics/sso/idp-config/azure/menu-users-and-groups.png')} alt="Menu: Users and groups" width="250" />

    2. Click **Add user/group**.
       <img src={useBaseUrl('img/basics/sso/idp-config/azure/add-user-group.png')} alt="Add user/group" width="700" />

    3. Choose which groups and users should have access to Sauce Labs via this SAML application.
       <img src={useBaseUrl('img/basics/sso/idp-config/azure/assign-user.png')} alt="Assign user/group" width="800" />

13. Go back to the **Single sign-on** tab.
    <img src={useBaseUrl('img/basics/sso/idp-config/azure/menu-single-sign-on.png')} alt="Menu: Single sign-on" width="250" />

14. In the **SAML Certificates** section for **Federation Metadata XML**, click **Download**.
    <img src={useBaseUrl('img/basics/sso/idp-config/azure/download-metadata.png')} alt="Download Metadata" width="700" />

15. Use the metadata file from the previous step and set up the SSO integration at Sauce Labs in [Organization Management Panel](/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider).

16. Test the integration using the [IdP-initiated and the SP-initiated login](/basics/sso/logging-in-via-sso).

    1. The IdP-initiated flow can be tested from the **Single sign-on** tab.

       <img src={useBaseUrl('img/basics/sso/idp-config/azure/menu-single-sign-on.png')} alt="Menu: Single sign-on" width="250" />

    2. Next, in the last section **Test single sign-on with Sauce Labs** click **Test**.
       <img src={useBaseUrl('img/basics/sso/idp-config/azure/test-integration.png')} alt="Test integration" width="650" />
    3. Click **Test sign in**.
       <img src={useBaseUrl('img/basics/sso/idp-config/azure/test-sign-in.png')} alt="Test integration" width="750" />
