---
id: setting-up-sso-special-cases
title: Setting Up SSO - Special Cases
sidebar_label: Setting Up SSO - Special Cases
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

## Single Identity Provider and Multiple Organizations at Sauce Labs

:::note
Integrating more than two Sauce Labs organizations with the same Identity Provider is not supported. If you have more than two organizations that you need integration with the same Identity Provider, contact your Customer Success Manager or [Sauce Labs Support](mailto:help@saucelabs.com).
:::

Some identity providers do not allow creating more than one SAML integration with the same service provider. In other words, they require one unique entity ID for a service provider.
If your Identity Provider has this limitation and you have two organizations at Sauce Labs to integrate with SAML SSO for that Identity Provider, follow the setup steps below:

1. In your Identity Provider set up the first SAML SSO integration/application in the [standard way](/basics/sso/setting-up-sso/#setting-up-identity-provider).
2. [Integrate the SAML SSO application](/basics/sso/setting-up-sso/#integrating-with-sauce-labs-service-provider) that you created in the previous step with one of your Sauce Labs organizations.
3. In your Identity Provider set up another SAML SSO integration/application with the auxiliary Sauce Labs Service Provider.

   - You have to use [different Sauce Labs metadata](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp1).
   - The metadata contains different entity ID and different ACS URLs (`sp1` instead of `sp`):

     | Setting                    | Value                                                                   |
     | -------------------------- | ----------------------------------------------------------------------- |
     | Entity ID                  | `https://accounts.saucelabs.com/sp1`                                    |
     | Audience URI               | `https://accounts.saucelabs.com/sp1`                                    |
     | Assertion Consumer Service | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1` |
     | Recipient URL              | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1` |
     | Destination URL            | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1` |

   - All other settings are the same as in the [standard service provider](/basics/sso/setting-up-sso/#setting-up-identity-provider).

4. Keep in mind that the SAML SSO application that you have created in the previous step has to have **different entity ID than the first one**. This is mandatory because Sauce Labs Service Provider does not allow duplicate IdP entity IDs.
   - This is an issue for example in standard setup with a single tenant in Azure Active Directory. Every SAML app that you create within the same Azure tenant will have the same entity ID in metadata. However, MS Azure provides a [solution for this multi-instancing setup](https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-multi-instancing). Follow the below steps to set up multiple Sauce Labs SAML applications within the single Azure tenant:
     1. Once you set up successfully the new SAML app in Azure in the step #3, Go to **Single sign-on** settings of your Azure app and click **Edit** in the section **Attributes & Claims**.
        <img src={useBaseUrl('img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure-edit-attributes-and-claims.png')} alt="Azure: Edit Attributes&Claims" width="1100" />
     2. In **Advanced settings** edit **Advanced SAML claims options** and select the checkbox **Append application ID to issuer**.
        <img src={useBaseUrl('img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure-append-app-id-to-issuer.png')} alt="Azure: Append app ID to issuer" width="1100" />
     3. Download the metadata file of your Azure app.
        <img src={useBaseUrl('img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure-download-metadata.png')} alt="Azure: Download metadata" width="1100" />
     4. Next, before you upload metadata in Sauce Labs UI (step #5), you have to append Azure application ID to entity ID in metadata. Copy the application ID in the tab **Overview**.
        <img src={useBaseUrl('img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure-app-id.png')} alt="Azure: App ID" width="1100" />
     5. Open the metadata file in a text editor, append the app ID to the attribute `entityID` and save the file. You will upload this modified metadata file in Sauce Labs UI in the step #5.
        <img src={useBaseUrl('img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure-edit-metadata.png')} alt="Azure: Append app ID in metadata" width="1100" />
5. [Integrate the SAML SSO application](/basics/sso/setting-up-sso/#integrating-with-sauce-labs-service-provider) that you created using the auxiliary metadata (`sp1`) with the other Sauce Labs organization.
   - The only additional action that you need to do, while you are in the Single Sign-On Configuration in Sauce Labs Team Management, is to expand the section **Advanced SSO Settings** and in the dropdown list **Service Provider** select **Auxiliary SP1**.
     <img src={useBaseUrl('img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/saucelabs-auxiliary-sp.png')} alt="Auxiliary Service Provider" width="1100" />
