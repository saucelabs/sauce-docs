---
id: configuring-sso-in-auth0
title: Configuring SSO in Auth0
sidebar_label: Configuring Auth0
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

1. Log into **Auth0** administrator panel.
2. In the **Applications** menu, click **SSO Integrations**.
   <img src={useBaseUrl('img/basics/sso/idp-config/auth0/apps.png')} alt="Menu Applications" width="230" />

3. Click **+ Create SSO Integration**.
   <img src={useBaseUrl('img/basics/sso/idp-config/auth0/add-app.png')} alt="Add App" width="750" />

4. Type **Sauce Labs** in the search box and choose the app **Sauce Labs** from the search results.
   <img src={useBaseUrl('img/basics/sso/idp-config/auth0/search-app.png')} alt="Search App" width="400" />

5. Click **Continue** to accept required permissions.
   <img src={useBaseUrl('img/basics/sso/idp-config/auth0/accept-permissions.png')} alt="Accept Permissions" width="700" />

6. Change the name of the application or leave the default value and click **Save**.
   <img src={useBaseUrl('img/basics/sso/idp-config/auth0/change-app-name.png')} alt="Change App Name" width="750" />

7. Copy the link to the identity provider metadata and open it in a new tab. You will download an XML file with metadata.
   <img src={useBaseUrl('img/basics/sso/idp-config/auth0/download-metadata.png')} alt="Download Metadata" width="800" />

8. Use the metadata from the previous step and set up the SSO integration at Sauce Labs in [Organization Management Panel](/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider).

9. Test the integration using the [IdP-initiated and the SP-initiated login](/basics/sso/logging-in-via-sso).
