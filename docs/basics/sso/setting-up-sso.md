---
id: setting-up-sso
title: Setting Up SSO
sidebar_label: Setting Up SSO
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceDBlue">Enterprise Plans only</span></p>

Sauce Labs supports Identity Provider (IdP)-initiated and Service Provider (SP)-initiated Single Sign-On (SSO). This feature allows your authorized employees to access Sauce Labs in a moderated fashion, as an alternative to using credentials. SSO is available to invoiced accounts, and can only be implemented by the organization admin of the account. If you are an invoice customer, the following sections will guide you on how to set up SSO.

## What You'll Need

- An enterprise license for Sauce Labs
- Organization admin access (see [User Roles](/basics/acct-team-mgmt/managing-user-info) for more information)

## Setup Overview

First, set up a new SAML application in your [Identity Provider (IdP)](#setting-up-identity-provider). Next, enable and configure SSO in [Sauce Labs Team Management Panel](#integrating-with-sauce-labs-service-provider).

:::note
SSO at Sauce Labs is global. In other words, it does not matter in which region 
you set it up. Unlike to the [old SSO implementation](/basics/sso-deprecated/setting-up-single-sign-on), which has been deprecated.
:::

## Setting Up Identity Provider

1. Obtain SAML metadata from Sauce Labs Service Provider, which is served under [this link](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp).
2. Log in to your IdP admin account, such as Okta, OneLogin, or Microsoft Azure Active Directory, etc.
3. Create a new SAML application.
   - In the IdP, go to the "Applications" or "Integrations" section and create a new SAML application.
   - Follow the instructions from your IdP to provide the Sauce Labs SAML metadata obtained in step 1. If your IdP does not allow uploading service provider metadata, set up the integration manually using the information provided [in the paragraphs below](#service-provider-saml-requirements).
4. Export SAML metadata of your new SAML application.
   - It will be used to set up the SSO at Sauce Labs in [Team Management Panel](#integrating-with-sauce-labs-service-provider).

### Service Provider SAML Requirements

Here is the list of settings that are required by Sauce Labs Service Provider:

| Setting                      | Value                                                                  |
| ---------------------------- | ---------------------------------------------------------------------- |
| Entity ID                    | `https://accounts.saucelabs.com/sp`                                    |
| Audience URI                 | `https://accounts.saucelabs.com/sp`                                    |
| Assertion Consumer Service   | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp` |
| Recipient URL                | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp` |
| Destination URL              | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp` |
| Name ID format               | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`               |
| Binding                      | `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`                       |

### Signature

Either the SAML Assertion or SAML Response **must be signed**.

A digital signature is required to ensure that only your IdP generated the assertion.

### Encryption

Encryption of the SAML Assertion **is not mandatory**.

You can enable encryption if you want an additional layer of security. You will need to use the certificate (with alias _encryption_) from [the Sauce Labs metadata](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp).

:::tip

#### Possible Issues

If you start to see errors after enabling encryption, make sure that you use the encryption certificate that is provided in Sauce Labs metadata (in the tag `<KeyDescriptor use="encryption">`) and the encryption algorithm matches the algorithm provided in Sauce Labs metadata (value of the attribute `Algorithm` in the tag `EncryptionMethod`).
:::

### Name ID

Name ID format must be set to `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`.

The value of the attribute NameID in SAML Response must be **a valid email address**. We do not accept values which are not email addresses, for instance usernames, IDs, etc.

### SAML Claims

Sauce Labs Service Provider does not require any extra attributes in the SAML Response.

### Certificate rotation

:::note
This section is relevant only for identity providers that enabled encryption of SAML Assertions.
:::

If you enabled encryption of SAML Assertions in your IdP, you must upload the certificate that is provided in Sauce Labs [metadata](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp).

The certificate is valid for one year. **120 days** before the expiration date the new certificate will be available in Sauce Labs [metadata](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp). Upload the new certificate in your IdP.

If you encounter any issues during the certificate rotation, you can safely go back to the old certificate (until the expiration date). Both certificates will work.

:::warning
If you do not replace the encryption certificate in your IdP on time, once the certificate expires, any user from your organization will not be able to authenticate via SSO.  
:::

## Integrating With Sauce Labs Service Provider

1. On Sauce Labs, click **Account**, and then click **Team Management**.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-tm-menu.png')} alt="Team Management Menu" width="300" />

2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **View Settings**.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-org-settings-btn.png')} alt="Organization Setting Button" width="800" />

3. On the **Organization Settings** page, click the **SINGLE SIGN-ON** tab.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-sso-tab.png')} alt="SSO Tab" width="400" />

4. Upload the SAML metadata file provided by your IdP.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-upload-metadata.png')} alt="Upload Metadata Button" width="500" />

5. In the **Status** section, toggle the switch to **Enabled**. For more information about adding new users and SSO considerations, see [Adding and Deactivating Users](/basics/acct-team-mgmt/adding-deactivating-users).

<img src={useBaseUrl('img/basics/sso/setup-sso-enable-sso.png')} alt="Enable SSO" width="500" />

6. [Test the integration](/basics/sso/logging-in-via-sso).

### Email domains

We strongly recommend that you assign your company email domains to your Sauce Labs organization. This allows users who do not have an account at Sauce Labs to initiate SSO at [the Sauce Labs login page](https://accounts.saucelabs.com).

<img src={useBaseUrl('img/basics/sso/setup-sso-sso-btn.png')} alt="SSO Login Button" width="400" />

:::note
<a href="mailto:help@saucelabs.com">Contact support</a> to assign email domains to your organization.

You can assign multiple domains.
:::

### Enforce SAML SSO

As an additional security measure, you can require users from your organization to sign in only via SAML SSO (IdP and SP-initiated flow). All other authentication methods will not be allowed.

You can toggle this setting in SSO settings:

<img src={useBaseUrl('img/basics/sso/setup-sso-sso-only.png')} alt="SSO Required" width="800" />

### Just-In-Time (JIT) Provisioning

Organization admins do not have to manually create accounts at Sauce Labs for new SSO users. JIT makes the onboarding process much more efficient.

New users can sign up via SP or IdP-initiated SSO and the new accounts at Sauce Labs will be created automatically.

#### Team placement

Users who are created via SSO are placed into the default team.

Organization admins can [assign users to other teams](/basics/acct-team-mgmt/assigning-removing-users-teams).

## Unsupported features

The following SSO-related features are currently not supported:

- SCIM (System for Cross-domain Identity Management)
- SLO (Single Logout)
- a staging environment for pre-integration testing of SSO
- integration with multiple identity providers in a single Sauce Labs organization
