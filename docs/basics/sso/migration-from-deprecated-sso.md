---
id: migration-from-deprecated-sso
title: Migration From The deprecated SSO
sidebar_label: Migration From The Deprecated SSO
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

This guide explains how to migrate from the [deprecated SSO](/basics/sso-deprecated/setting-up-single-sign-on/) to the [new SSO](/basics/sso/setting-up-sso/).

Before you begin the migration process, review the differences between the two implementations listed below.

:::tip
Both the deprecated SSO integration and the new SSO integration can work independently and concurrently. This means that you can set up the new SSO and test it while your users continue to use the deprecated integration.

You will have access to the configuration panels of both integrations in the Team Management UI, allowing you to manage and configure them separately.
:::

## Differences In The New SSO

| Feature                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Global Configuration              | The new SSO is configured globally, meaning it is not bound to a specific region, unlike the deprecated SSO which was region-specific.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| SP-initiated Flow                 | The new SSO supports both [Service Provider (SP) initiated and Identity Provider (IdP) initiated SSO](/basics/sso/logging-in-via-sso), whereas the deprecated SSO only supports IdP-initiated flow.                                                                                                                                                                                                                                                                                                                                                                           |
| Email Domains                     | Assign your [company email domains](/basics/sso/setting-up-sso/#email-domains) to your SSO integration at Sauce Labs to allow for provisioning of new accounts via SP-initiated flow. <br/><br/> The deprecated SSO does not require email domains as it does not support SP-initiated flow.                                                                                                                                                                                                                                                                                  |
| JIT Provisioning                  | In the new SSO, JIT (Just-In-Time) provisioning is enabled by default and cannot be disabled. This means that if a user from your Identity Provider (IdP) does not have a Sauce Labs account, one will be automatically created for them. <br/><br/> However, in the deprecated SSO, it was possible to disable this feature. In such cases, it's important to note that users from the IdP who do not have accounts in Sauce Labs will still be able to provision accounts automatically. Keep this in mind during the migration process from deprecated SSO to the new SSO. |
| Enforce SAML SSO                  | This [setting](/basics/sso/setting-up-sso/#enforce-saml-sso---big-bang-configuration) is also present in the new SSO, but it is common to both the new SSO and the deprecated SSO. When turned on, it allows authentication only via either the new SSO or the deprecated SSO. When turned off, users can also log in via username and password, in addition to SSO authentication.                                                                                                                                                                                                                    |
| User Identifier (NameID)          | The [Name ID format](/basics/sso/setting-up-sso/#name-id) must be set to `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` in the new SSO. The value of the attribute NameID in the SAML response must be a valid email address. We do not accept non-email address values, such as usernames or IDs. <br/><br/> The deprecated SSO accepts any value in NameID, such as usernames, email addresses, or other user identifiers.                                                                                                                                        |
| No Unique Identifier String (UIS) | In the new SSO, there is no need to specify the [Unique Identifier String](/basics/acct-team-mgmt/org-settings/#single-sign-on-settings-deprecated-flow) which was used in the deprecated SSO to generate usernames for new users.<br/><br/>Usernames for accounts provisioned via the new SSO are generated according to the [following pattern](/basics/sso/setting-up-sso/#usernames).                                                                                                                                                                                     |
| Team Placement                    | New users are provisioned in the [default team](/basics/sso/setting-up-sso/#team-placement) in the new SSO, unlike the deprecated SSO where you can specify a team for new user provisioning.                                                                                                                                                                                                                                                                                                                                                                                 |

## Migration Tutorial

### Prerequisites

1. Before starting the migration process, ensure that your organization is currently using the deprecated SSO integration. To confirm this, follow the steps provided in [this guide](/basics/sso-deprecated/setting-up-single-sign-on/#how-do-i-know-if-my-organization-uses-the-deprecated-sso-integration).

2. Next, on Sauce Labs click **Account**, and then click **Team Management**.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-tm-menu.png')} alt="Team Management Menu" width="300" />

2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **View Settings**.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-org-settings-btn.png')} alt="Organization Setting Button" width="800" />

3. On the **Organization Settings** page, click the **SINGLE SIGN-ON** tab.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-sso-tab.png')} alt="SSO Tab" width="400" />

4. If your organization is eligible for migrating to the new SSO, you will see the following banner. It is important to be aware that the migration wizard may not be enabled for your organization yet. If you don't see the banner, it means our development team is still working on enabling the migration wizard for your organization.
   <img src={useBaseUrl('img/basics/sso/migration-to-the-new-sso/migration-banner.png')} alt="SSO Migration Banner" width="800" />

### Migration Wizard

1. First, follow the instructions provided in [this guide](/basics/sso/setting-up-sso/#setting-up-identity-provider) to create a new SAML integration in your Identity Provider.

2. Next, on Sauce Labs in the organization settings in the **Single Sign-On** tab, click **Migrate to new SSO**.

<img src={useBaseUrl('img/basics/sso/migration-to-the-new-sso/migration-wizard-button.png')} alt="SSO Migration Banner" width="800" />

3. If some users from your organization have their email addresses empty at Sauce Labs, you will see the following pop-up. Otherwise, email addresses for all users are set up correctly, and you can proceed to the step 4.  
<img src={useBaseUrl('img/basics/sso/migration-to-the-new-sso/provide-missing-emails.png')} alt="Provide Missing Email Addresses" width="800" />

   - Click **Download as CSV** to download a CSV file containing the list of users with missing email addresses.  
   - Fill in the email addresses for the users in the CSV file in the second column **valid_email_address** and then upload the file and click **Continue**.  
   - You will get error messages for any invalid email addresses. Correct the email addresses and upload the file again.
   <img src={useBaseUrl('img/basics/sso/migration-to-the-new-sso/missing-emails-errors.png')} alt="Missing Email Addresses Validation" width="800" />
   - After successfully uploading the file, you will be able to proceed to the step 4 to upload the metadata file.

4. Upload the XML file containing your Identity Provider metadata generated in the first step, and then click **Enable new SSO**.  
  
<img src={useBaseUrl('img/basics/sso/migration-to-the-new-sso/upload-metadata.png')} alt="Upload metadata" width="700" />  

5. After successfully uploading the metadata, you will see a confirmation message and the configuration panel for managing the new SSO.

<img src={useBaseUrl('img/basics/sso/migration-to-the-new-sso/success-new-ui.png')} alt="Successful Setup" width="800" />

6. Test the new integration using the [IdP and the SP initiated login](/basics/sso/logging-in-via-sso).

7. Keep in mind that the deprecated SSO integration continues to work independently and concurrently. It is not affected by the migration and remains enabled. You can manage this integration in the Team Management UI. To disable the deprecated SSO, toggle the **Enable Single Sign on** option after validating the new integration. You may also permanently delete the metadata file of your previous integration by clicking **Delete metadata file**.

<img src={useBaseUrl('img/basics/sso/migration-to-the-new-sso/legacy-sso-ui.png')} alt="Deprecated SSO Configuration Panel" width="800" />
