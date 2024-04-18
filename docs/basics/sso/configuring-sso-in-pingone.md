---
id: configuring-sso-in-pingone
title: Configuring SSO in PingOne
sidebar_label: Configuring PingOne
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

Complete the following steps to set up SAML SSO integration between PingOne and Sauce Labs:

1. Log in to **PingOne** administrator panel.
2. In the **Connections** menu click **Application Catalog**.
   <img src={useBaseUrl('img/basics/sso/idp-config/pingone/apps.png')} alt="Menu Application Catalog" width="200" />

3. Enter **Sauce Labs** in the search box and click **+**.
   <img src={useBaseUrl('img/basics/sso/idp-config/pingone/search-and-add-app.png')} alt="Search and add app" width="800" />

4. Change the name of the application or leave the default value and click **Next**.
   <img src={useBaseUrl('img/basics/sso/idp-config/pingone/change-app-name.png')} alt="Change App Name" width="600" />

5. Make sure that the **SAML_SUBJECT** is set to **Email address**. Sauce Labs Service Provider requires [valid email addresses](/basics/sso/setting-up-sso/#name-id) during SAML SSO authentication. Click **Next**.
   <img src={useBaseUrl('img/basics/sso/idp-config/pingone/nameid.png')} alt="NameID" width="600" />

6. Optionally, choose which groups should have access to Sauce Labs via this SAML application and click **Save**.
   <img src={useBaseUrl('img/basics/sso/idp-config/pingone/assign-groups-save-app.png')} alt="NameID" width="600" />

7. Click the arrow to expand **Connection details**. And next click **Download metadata**.
   <img src={useBaseUrl('img/basics/sso/idp-config/pingone/download-metadata.png')} alt="Download Metadata" width="600" />

8. Use the metadata file from the previous step and set up the SSO integration at Sauce Labs in [Organization Management Panel](/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider).

9. Test the integration using the [IdP-initiated and the SP-initiated login](/basics/sso/logging-in-via-sso).
