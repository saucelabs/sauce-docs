---
id: sso-saml
title: SSO / SAML
sidebar_label: SSO / SAML
---

import useBaseUrl from '@docusaurus/useBaseUrl';

SAML-based Single Sign-On (SSO) allows users to sign in to your organization using an identity provider (IdP), such as Okta, Azure AD, OneLogin, Google Workspace, or PingIdentity.

:::info
Only **Account Owners** and **Org Admins** can configure SSO.
:::

## Setting Up SSO

Before configuring SSO, create a SAML application in your identity provider using the **[Service Provider Details](#service-provider-details)** provided in the **SSO Settings** page.

Your identity provider needs these details, particularly the **ACS/redirect URL**, to generate the SAML metadata and signing certificate.

**Step 1:** Click the **Profile** icon in the top-right corner and select **Integrations** from the user menu.

<img src={useBaseUrl('/img/app-distribution/sso-saml/sso-1.png')} alt="SSO / SAML" width="100%"/>

**Step 2:** On the **Integrations** page, find **SSO / SAML** and click **Connect**.

<img src={useBaseUrl('/img/app-distribution/sso-saml/sso-2.png')} alt="SSO / SAML" width="100%"/>

**Step 3:** Copy your **SAML metadata XML** provided by your identity provider and paste it into the metadata field. This is usually available at a URL like `https://your-idp/.well-known/saml-metadata`.

<img src={useBaseUrl('/img/app-distribution/sso-saml/sso-3.png')} alt="SSO / SAML" width="100%"/>

**Step 4:** Click **Save Metadata** to save the identity provider metadata..

<img src={useBaseUrl('/img/app-distribution/sso-saml/sso-4.png')} alt="SSO / SAML" width="100%"/>

After the metadata is saved, the system automatically extracts the **Entity ID**, **SSO URL**, and **certificate** from the metadata.

## Configure SSO Options

After saving the SAML metadata, you can configure the following options:

| Sr. No. | Option | Description |
|---:|---|---|
| 1 | **Enable SSO** | Displays the SSO login option on your organization's login page. |
| 2 | **SSO Only Mode** | Disables password login. Users must sign in through SSO. |
| 3 | **Allow Password Login Override** | Provides a **Login with email and password** option as a fallback. |
| 4 | **Auto-create Users on SSO Login** | Automatically creates a user account when a new user signs in through SSO for the first time. |

<img src={useBaseUrl('/img/app-distribution/sso-saml/sso-5.png')} alt="SSO / SAML" width="100%"/>

:::caution Important
SSO login is only available when users access the login page via your organization's subdomain (e.g. `https://your-org.testfairy.net/login`). The SSO button will not appear on the main application login page.
:::

## Service Provider Details

These are the values to enter when creating the SAML application in your identity provider (the **SSO Settings** page shows them with your exact host):

| Field | Value | Also called |
| --- | --- | --- |
| **SP Entity ID** | `https://your-org.testfairy.net` | Audience URI, Identifier (Azure AD) |
| **ACS URL** | `https://your-org.testfairy.net/login/sso` | Redirect URL, Reply URL (Azure AD), Single sign-on URL (Okta) |
| **NameID Format** | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` | Name ID format — `emailAddress` is required |
| **SSO Login URL** | `https://your-org.testfairy.net/login` | Login/start URL — where users begin an SSO login |

<img src={useBaseUrl('/img/app-distribution/sso-saml/sso-6.png')} alt="SSO / SAML" width="100%"/>

Replace `your-org` with your organization's subdomain. The SAML response must be delivered to the ACS URL via HTTP `POST`.

## Certificate Expiry

The IdP certificate expiry date is shown on the settings page. You will see a warning badge when the certificate is about to expire or has already expired. Update the metadata XML with a fresh copy from your IdP to renew it.
