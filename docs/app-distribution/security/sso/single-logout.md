---
id: single-logout
title: SAML Single Logout (SLO)
sidebar_label: Single Logout
description: Configure IdP-initiated SAML Single Logout to end Mobile App Distribution sessions when users log out at your identity provider.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SAML Single Logout (SLO) lets your identity provider (IdP) end a user's Sauce Labs Mobile App Distribution session when they log out at the IdP. The logout applies to the device where it was triggered. Sessions on other devices are not extended and expire automatically 8 hours after sign-in, after which the user must authenticate with the IdP again. SSO sessions are never remembered beyond that window. SLO is IdP-initiated, builds on your existing [SAML SSO](/app-distribution/security/sso/sso-intro/) setup, and is opt-in per account.

## How It Works

Your IdP sends the logout request through the user's browser to `https://acme.testfairy.com/logout/sso/` (replace `acme` with your subdomain). In your IdP, point the Single Logout Service URL at this endpoint and select the **HTTP-Redirect** binding. This is the only binding Sauce Labs Mobile App Distribution accepts for Single Logout.

## Enable SLO

1. In your IdP, add a **Single Logout Service** that points to `https://acme.testfairy.com/logout/sso/`. Replace `acme` with your subdomain.
1. Export your IdP metadata. It now includes a `SingleLogoutService` entry.
1. In Sauce Labs Mobile App Distribution, open the profile menu, select **Integrations**, then click **Connect** on the **SSO / SAML** row.
1. Paste the metadata into **IdP Metadata XML** and click **Update Metadata**.

SLO activates as soon as the metadata includes a `SingleLogoutService` entry for the HTTP-Redirect binding.

## Requirements

The `LogoutRequest` must be:

- Signed with the same certificate as your SSO assertions. The signature is verified against the certificate in your IdP metadata.
- Sent to `https://acme.testfairy.com/logout/sso/` using the HTTP-Redirect binding.

## Result

A valid request ends the user's session on that device and returns a `LogoutResponse` to the IdP. The user's next request takes them to the login page. API keys are not affected.

## Troubleshooting

### Common Issues

**Single Logout has no effect**
- The pasted metadata does not include a `SingleLogoutService` entry. Re-export it from your IdP and paste it again under **Integrations** ▸ **SSO / SAML**.
- The Single Logout Service in your IdP uses a binding other than **HTTP-Redirect**. Change it to HTTP-Redirect and re-export the metadata.

**Logout request is rejected**
- The `LogoutRequest` is signed with a key other than the one used for your SSO assertions. The signing certificate must match the one in your IdP metadata.

