---
id: configuring-sso-in-okta
title: Configuring SSO in Okta 
sidebar_label: Configuring Okta
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

Sauce Labs app from the Okta catalog supports the following features:

- [SP-initiated SSO](/basics/sso/logging-in-via-sso/#service-provider-sp-initiated-sso).
- [IdP-initiated SSO](/basics/sso/logging-in-via-sso/#identity-provider-idp-initiated-sso).
- [JIT (Just-In-Time) Provisioning](/basics/sso/setting-up-sso/#just-in-time-jit-provisioning).
- [Force authentication](/basics/sso/setting-up-sso/#enforce-saml-sso).

Complete the following steps to set up SAML SSO integration between Okta and Sauce Labs:

1. Log into **Okta** administrator panel, go to **Applications** and click **Browse App Catalog**.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/browse-app-catalog.png')} alt="Browse App Catalog" width="850" />

2. Enter **Sauce Labs** in the search box and choose the app **Sauce Labs**.

3. Click **Add Integration**.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/add-integration.png')} alt="Add Integration" width="700" />

4. Leave the default name or rename it and click **Next**.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/general-settings.png')} alt="General Settings" width="800" />

5. Click the link **Identity Provider metadata**. The metadata will open in a new tab. Copy it and save as an XML file. Use this metadata file to set up the SSO integration at Sauce Labs in [Team Management Panel](/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider).
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/download-metadata.png')} alt="Download Metadata" width="600" />

6. In the **Credentials Details** section make sure that the value **Application username format** is a [valid email address](/basics/sso/setting-up-sso/#name-id). The default format for **Okta username** is email address, unless it was changed in Okta Admin Console.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/app-username-format.png')} alt="Application Username Format" width="650" />

7. Click **Done** to create the integration.

8. Next, assign users to this application. Click **Assign** and assign specific accounts or groups.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/assign-people-groups.png')} alt="Assign People or Groups" width="650" />

9. Test the integration using the [IdP-initiated and the SP-initiated login](/basics/sso/logging-in-via-sso).
