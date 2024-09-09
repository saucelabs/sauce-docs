---
id: setting-up-sso
title: Setting Up SSO
sidebar_label: Setting Up SSO
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

:::caution
If you have previously implemented the [deprecated SSO integration](/basics/sso-deprecated/setting-up-single-sign-on/) and wish to migrate to the new SSO implementation, follow our [step-by-step migration tutorial](/basics/sso/migration-from-deprecated-sso/).
:::
<br/>

Sauce Labs supports Identity Provider (IdP)-initiated and Service Provider (SP)-initiated Single Sign-On (SSO) via SAML 2.0 protocol. This feature allows your authorized employees to access Sauce Labs in a moderated fashion, as an alternative to using credentials. SAML SSO is available to invoiced accounts, and can only be implemented by the organization admin of the account. If you are an invoice customer, the following sections will guide you on how to set up SAML SSO.

Sauce Labs supports the following features:

- [SP-initiated SSO](/basics/sso/logging-in-via-sso/#service-provider-sp-initiated-sso).
- [IdP-initiated SSO](/basics/sso/logging-in-via-sso/#identity-provider-idp-initiated-sso).
- [JIT (Just-In-Time) Provisioning](#just-in-time-jit-provisioning).
- [Force authentication](#enforce-saml-sso---big-bang-configuration).

## What You'll Need

- An enterprise license for Sauce Labs.
- Organization admin access (see [User Roles](/basics/acct-team-mgmt/managing-user-info) for more information).

## Special Cases

- If your company has more than one organization at Sauce Labs to be integrated with SAML SSO and your Identity Provider requires a unique entity ID for Service Providers, [see these special setup steps](/basics/sso/setting-up-sso-special-cases#single-identity-provider-and-multiple-organizations-at-sauce-labs).
- If your company has multiple organizations at Sauce Labs to be integrated with
SAML SSO, and you want to use the same [email domain](#email-domains) across 
multiple organizations, please refer to [this section](/basics/sso/setting-up-sso-special-cases/#multiple-organizations-with-the-same-email-domain-at-sauce-labs).

## Setup Overview

First, set up a new SAML application in your [Identity Provider (IdP)](#setting-up-identity-provider). Next, enable and configure SSO in [Sauce Labs Organization Management Panel](#integrating-with-sauce-labs-service-provider).

:::note
SSO at Sauce Labs is global. In other words, it does not matter in which region you set it up. Unlike to the [former SSO implementation](/basics/sso-deprecated/setting-up-single-sign-on), which has been deprecated.
:::

## Setting Up Identity Provider

:::tip

We provide preconfigured SAML applications for some identity providers. They allow you to set up SSO integration with a few clicks. Choose your provider and follow the configuration steps:

- [Auth0](/basics/sso/configuring-sso-in-auth0)
- [Google](/basics/sso/configuring-sso-in-google)
- [Microsoft Azure Active Directory](/basics/sso/configuring-sso-in-ms-azure-ad)
- [Okta](/basics/sso/configuring-sso-in-okta)
- [OneLogin](/basics/sso/configuring-sso-in-onelogin)
- [PingOne](/basics/sso/configuring-sso-in-pingone)

We support also a manual setup for any other identity provider which implements SAML 2.0, for example:

- Microsoft Active Directory Federation Services (MS ADFS)
- Google Workspace (formerly G Suite)
- Oracle Identity Cloud Service
- ForgeRock
- Salesforce
- JumpCloud
- CyberArk
- KeyCloak

:::

If you use a custom identity provider or if we do not provide a preconfigured Sauce Labs SAML application for your identity provider, please complete the manual setup:

1. Obtain SAML metadata from Sauce Labs Service Provider, which is served under [this link](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp).
2. Log in to your identity provider administrator panel.
   - For example in Okta, you log into your account and click the **Admin** button.
     <img src={useBaseUrl('img/basics/sso/setup-sso-idp-admin-login.png')} alt="IdP Admin Login" width="900" />
3. Create a new SAML application.
   - In the IdP, go to the "Applications" or "Integrations" section and create a new SAML application.
   - Follow the instructions from your IdP to provide the Sauce Labs SAML metadata obtained in Step 1. If your IdP does not allow uploading service provider metadata, set up the integration manually using [Service Provider SAML Requirements](#service-provider-saml-requirements).
4. Export SAML metadata of your new SAML application.
   - It will be used to set up the SSO at Sauce Labs in [Organization Management Panel](#integrating-with-sauce-labs-service-provider).

### Service Provider SAML Requirements

Here is the list of settings that are required by Sauce Labs Service Provider:

| Setting                                         | Value                                                                        |
| ----------------------------------------------- | ---------------------------------------------------------------------------- |
| Entity ID                                       | `https://accounts.saucelabs.com/sp`                                          |
| Audience (Recipient)                            | `https://accounts.saucelabs.com/sp`                                          |
| Assertion Consumer Service (ACS URL, Reply URL) | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp`       |
| Recipient URL                                   | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp`       |
| Destination URL                                 | `https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp`       |
| Name ID (Unique User Identifier)                | `email`/`mail`                                                               |
| Name ID format/policy                           | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`                     |
| Binding                                         | `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`                             |
| Login/Application/Sign on URL                   | `https://accounts.saucelabs.com/am/XUI/#sso-login/`                          |
| SAML claims                                     | [List of supported optional claims](/basics/sso/setting-up-sso/#saml-claims) |

### Signature

Either the SAML Assertion or SAML Response **must be signed**.

A digital signature is required to ensure that only your IdP generated the assertion.
The IdP signs SAML requests or assertions with the private key, and Sauce Labs Service Provider verifies the signature using the public key from the IdP metadata uploaded in [SSO settings in the Organization Management UI](/basics/sso/setting-up-sso/#integrating-with-sauce-labs-service-provider).

If you rotate the signing certificate in your Identity Provider, you have to [reupload the IdP metadata](#identity-provider-signing-certificate-rotation) in the Sauce Labs Organization Management UI.

### Encryption

Encryption of the SAML Assertion **is not mandatory**.

You can enable encryption if you want an additional layer of security. You will need to use the certificate (with alias _encryption_) from [the Sauce Labs metadata](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp).

In the encryption process, the Identity Provider encrypts the SAML Assertion using the public key from [the Sauce Labs metadata](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp), and Sauce Labs Service Provider decrypts it using the private key. When Sauce Labs updates its encryption certificate, customers are required to [update their configurations with the new certificate (public key)](#sauce-labs-encryption-certificate-rotation).

:::tip

#### Possible Issues

If you start to see errors after enabling encryption, make sure that you use the encryption certificate that is provided in Sauce Labs metadata (in the tag `<KeyDescriptor use="encryption">`) and the encryption algorithm matches the algorithm provided in Sauce Labs metadata (value of the attribute `Algorithm` in the tag `EncryptionMethod`).
:::

### Name ID

Name ID format must be set to `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`.

The value of the attribute NameID in SAML Response must be **a valid email address**. We do not accept values which are not email addresses, for instance usernames, IDs, etc.

If your Identity Provider does not provide the email address in the NameID attribute, please refer to the instructions provided in the [Special Cases](/basics/sso/setting-up-sso-special-cases#nameid-is-not-a-real-email-address-but-a-user-identifier) section.

### SAML Claims

Sauce Labs Service Provider supports the following SAML custom claims:

- `first_name`
- `last_name`
- `contact_email` (Click [here](/basics/sso/setting-up-sso-special-cases#nameid-is-not-a-real-email-address-but-a-user-identifier) to see the use case)

These attributes are **optional**.

Incorporating these attributes can improve user identification and personalization within the Sauce Labs platform.

### Identity Provider (Signing) Certificate Rotation

SAML certificates have a predetermined expiration date. It is possible that your identity provider will notify you in advance or provide an alert regarding the certificate's expiry.

If the [signing certificate](#signature) for the Sauce Labs app from your identity provider is nearing expiration or has already expired, follow these steps:

1. Generate a new certificate for the Sauce Labs app within your identity provider. This new certificate will replace the expired one and will be reflected in the identity provider metadata.
2. Export or copy the updated metadata file from your identity provider, then upload it to Sauce Labs. For information on how to upload the metadata file, see [Integrating With Sauce Labs Service Provider](#integrating-with-sauce-labs-service-provider).

### Sauce Labs (Encryption) Certificate Rotation

:::note
This section is relevant only for identity providers that enabled encryption of SAML Assertions.
:::

If you enabled [encryption of SAML Assertions](#encryption) in your IdP, you must upload the certificate that is provided in Sauce Labs [metadata](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp).

The certificate is valid for one year. **120 days** before the expiration date the new certificate will be available in Sauce Labs [metadata](https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp).

During the rotation period, the Sauce Labs metadata contains two valid certificates. If you are unsure which certificate to upload, copy the content of the `<ds:X509Certificate>` tag and paste it into a [certificate decoder](https://www.sslshopper.com/certificate-decoder.html). Then, select the certificate that has a longer validity period.

To convert the certificate from the metadata into the PEM format required by most identity providers, you can use the [online tool provided by OneLogin](https://www.samltool.com/format_x509cert.php). Follow these steps:

1. Copy the content of the `<ds:X509Certificate>` tag, paste it into the **X.509 cert** text box, then click **FORMAT X.509 CERTIFICATE**.
2. Copy the content of the **X.509 cert with header** textbox and save it in a text file, for example `saucelabs-sso.pem`.
3. Upload the new certificate in your IdP.

If you encounter any issues during the certificate rotation, you can safely go back to the old certificate (until the expiration date). Both certificates will work.

:::warning
If you do not replace the encryption certificate in your IdP on time, once the certificate expires, any user from your organization will not be able to authenticate via SSO.  
:::

## Integrating With Sauce Labs Service Provider

1. On Sauce Labs, click **Account**, and then click **Organization Management**.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-tm-menu.png')} alt="Organization Management Menu" width="300" />

2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **View Settings**.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-org-settings-btn.png')} alt="Organization Setting Button" width="800" />

3. On the **Organization Settings** page, click the **SINGLE SIGN-ON** tab.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-sso-tab.png')} alt="SSO Tab" width="400" />

4. Upload the SAML metadata file provided by your IdP.

<img src={useBaseUrl('img/basics/sso/setup-sso-sp-upload-metadata.png')} alt="Upload Metadata Button" width="500" />

5. In the **Status** section, toggle the switch to **Enabled**. For more information about adding new users and SSO considerations, see [Adding and Deactivating Users](/basics/acct-team-mgmt/adding-deactivating-users).

<img src={useBaseUrl('img/basics/sso/setup-sso-enable-sso.png')} alt="Enable SSO" width="500" />

6. [Test the integration](/basics/sso/logging-in-via-sso).
7. In case of any error, please refer to the [Troubleshooting section](/basics/sso/troubleshooting-sso).

### Email domains

We strongly recommend that you assign your company email domains to your Sauce Labs organization. This allows users who do not have an account at Sauce Labs to initiate SSO at [the Sauce Labs login page](https://accounts.saucelabs.com).

<img src={useBaseUrl('img/basics/sso/login-sso-btn.png')} alt="SSO Login Button" width="400" />

:::note
<a href="mailto:help@saucelabs.com">Contact support</a> to assign email domains to your organization.

You can assign multiple domains.
:::

### Enforce SAML SSO - Big Bang configuration

As an additional security measure, you can require users from your organization to sign in only via SAML SSO (IdP and SP-initiated flow). All other authentication methods will not be allowed.

You can toggle this setting in SSO settings:

<img src={useBaseUrl('img/basics/sso/setup-sso-sso-only.png')} alt="SSO Required" width="800" />

:::warning Read this before you enable Enforcing SAML login (Big Bang configuration)
Enabling SAML affects all users who use this application.
Users won't be able to sign in to SauceLabs using their regular sign-in page with login and password.
They are able to access the app through the SSO provider service.
:::

### Just-In-Time (JIT) Provisioning

Organization admins do not have to manually create accounts at Sauce Labs for new SSO users. JIT makes the onboarding process much more efficient.

New users can sign up via SP or IdP-initiated SSO and the new accounts at Sauce Labs will be created automatically.

:::tip
Make sure that you assign your [company email domains](#email-domains) to your SSO integration at Sauce Labs so that new accounts can be provisioning via the SP-initiated flow.
:::

#### Team placement

Users who are created via SSO are placed into the default team.

Organization admins can [assign users to other teams](/basics/acct-team-mgmt/assigning-removing-users-teams).

Additionally, you have the option to limit concurrency, which controls the number of virtual machines and real devices available for running tests simultaneously, for newly provisioned accounts. This can be configured in the [default team settings](/basics/acct-team-mgmt/concurrency/managing-concurrency).

#### Usernames

Usernames for new accounts provisioned via SSO are generated according to the following pattern:

```
sso-<USERNAME_FROM_EMAIL_ADDRESS>-<EMAIL_HASH>
```

For example, if a new user has `johndoe@example.com` as their email address, their generated username would be:

```
sso-johndoe-4a74a9a
```

Including a random suffix is essential to guarantee the uniqueness of usernames in the Sauce Labs database.

### Email Verification in SSO Login

When a user logs in via SSO without having previously verified their email address, the system will automatically verify the account if the email address associated with the account matches the one provided by the Identity Provider. This process ensures that successful SSO login serves as a validation of the user's email address.

## Unsupported features

The following SSO-related features are currently not supported:

- SCIM (System for Cross-domain Identity Management)
- SLO (Single Logout)
- a staging environment for pre-integration testing of SSO
- integration with multiple identity providers in a single Sauce Labs organization
