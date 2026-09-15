---
id: sso-saml
title: SSO / SAML
sidebar_label: SSO / SAML
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Configure SAML-based Single Sign-On so users can log in with your identity provider (Okta, Azure AD, OneLogin, Google Workspace, PingIdentity, etc.).

:::info
Only **Account Owners** and **Org Admins** can configure SSO.
:::

## Setting Up SSO

1. Create a SAML application in your identity provider using the values from the [Service Provider Details](#service-provider-details) table below. Your IdP needs these (in particular the ACS / redirect URL) before it can issue the metadata and signing certificate.
2. Go to **gear icon → SSO Settings**.
3. Paste your **Identity Provider's SAML metadata XML** into the text area. This is usually available at a URL like `https://your-idp/.well-known/saml-metadata`.
4. Click **Save Metadata**.

The system automatically extracts the Entity ID, SSO URL, and certificate from the metadata.

## SSO Options

Once metadata is saved, the following options become available:

| Option | Description |
| --- | --- |
| **Enable SSO** | Show the SSO login button on your subdomain's login page. |
| **SSO Only Mode** | Block password login entirely. Users must authenticate via SSO. |
| **Allow Password Login Override** | Show a fallback "Login with email and password" link on the SSO login page. Useful for admin recovery. |
| **Auto-create Users on SSO Login** | Automatically create new user accounts when someone logs in via SSO for the first time. If disabled, only existing users can log in. |

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

Replace `your-org` with your organization's subdomain. The SAML response must be delivered to the ACS URL via HTTP `POST`.

## Certificate Expiry

The IdP certificate expiry date is shown on the settings page. You will see a warning badge when the certificate is about to expire or has already expired. Update the metadata XML with a fresh copy from your IdP to renew it.
