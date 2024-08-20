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
- [Big Bang configuration](/basics/sso/setting-up-sso/#enforce-saml-sso---big-bang-configuration).

Complete the following steps to set up SAML SSO integration between Okta and Sauce Labs:

1. Log into **Okta** administrator panel, go to **Applications** and click **Browse App Catalog**.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/browse-app-catalog.png')} alt="Browse App Catalog" width="850" />

2. Search for **Sauce Labs**, then select the [**Sauce Labs**](https://www.okta.com/integrations/sauce-labs-0/) app.
   :::caution
   Ensure that you install the new Sauce Labs app featuring the green logo. The app with the previous red logo is considered a legacy version and should not be used for new SSO integrations. It is integrated with the deprecated SSO implementation.
   :::
   <br/>
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/search-app.png')} alt="Search For Sauce Labs" width="800" />

3. Click **Add Integration**.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/add-integration.png')} alt="Add Integration" width="600" />

4. Change the name of the application or leave the default value and click **Done**.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/rename-app.png')} alt="Rename App" width="800" />

5. Next, assign users to this application. Click **Assign** and assign specific accounts or groups.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/assign-people-groups.png')} alt="Assign People or Groups" width="650" />

6. Open the **Sign On** tab.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/sign-on-tab.png')} alt="Sign On Tab" width="450" />

7. In the **Credentials Details** section, ensure that the value for **Application username format** is a [valid email address](/basics/sso/setting-up-sso/#name-id). The default format for **Okta username** is an email address, unless it has been changed in Okta Admin Console.
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/username-format.png')} alt="Username Format" width="650" />

8. In the **SAML Signing Certificates** section, click **Actions**, and then **View IdP metadata**. A new tab opens. Copy the content, and save it as an XML file. Use this metadata file to set up the SSO Integration at Sauce Labs in the [Organization Management Panel](/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider).
   <img src={useBaseUrl('img/basics/sso/idp-config/okta/metadata.png')} alt="Metadata" width="650" />

9. Test the integration using the [IdP-initiated and the SP-initiated login](/basics/sso/logging-in-via-sso).
