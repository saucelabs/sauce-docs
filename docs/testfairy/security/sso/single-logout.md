---
id: single-logout
title: SAML Single Logout (SLO)
sidebar_label: Single Logout
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SAML Single Logout (SLO) lets your identity provider (IdP) end a user's Sauce Labs Mobile App Distribution session on every device when they are logged out at the IdP. SLO is IdP-initiated, builds on your existing [SAML SSO](/testfairy/security/sso/sso-intro/) setup, and is opt-in per account.

## Bindings

Both bindings are served at the same endpoint, `https://acme.testfairy.com/logout/sso/` (replace `acme` with your subdomain). Point your IdP's Single Logout Service URL at this endpoint for whichever binding you use.

- **Front-channel (HTTP-Redirect)** — the IdP relays a signed `LogoutRequest` through the user's browser; used for interactive logout. Configure it as the **HTTP-Redirect** binding.
- **Back-channel (SOAP)** — the IdP sends a signed `LogoutRequest` server-to-server, with no browser; used for admin logout and deprovisioning. Configure it as the **SOAP** binding, disable front-channel logout, and ensure the IdP can reach the endpoint over HTTPS.

## Enable SLO

1. In your IdP, add a **Single Logout Service** that points to `https://acme.testfairy.com/logout/sso/`. Replace `acme` with your subdomain.
1. Export your IdP metadata. It now includes a `SingleLogoutService` entry.
1. In Sauce Labs Mobile App Distribution, select **Security**.
1. Paste the metadata into **ID Provider metadata** and click **Update SAML ID Provider Metadata**.

SLO activates as soon as the metadata declares a `SingleLogoutService`.

## Requirements

The `LogoutRequest` must be:

- Signed with the same certificate as your SSO assertions.
- Addressed to `https://acme.testfairy.com/logout/sso/` (`Destination`).
- Issued by your IdP (`Issuer` matches your metadata).
- Identifying the user via `NameID` (the SSO login identifier, usually email).
- Within its validity window — expired or replayed requests are rejected.

## Result

A valid request ends all of the user's sessions, invalidates their API tokens, and returns a `LogoutResponse` to the IdP. The user's next request returns them to the login page.

## Troubleshooting

### Common Issues

**Single Logout has no effect**
- The pasted metadata does not declare a `SingleLogoutService`. Re-export it from your IdP and paste it again under **Security**.
- The IdP endpoint is set for a different binding than the IdP sends. Match the endpoint to the binding in use (HTTP-Redirect or SOAP).

**Logout request is rejected**
- The `LogoutRequest` is unsigned, or signed with a key other than your SSO assertions. The signing certificate must match the one in your IdP metadata.
- The `Destination` is not `https://acme.testfairy.com/logout/sso/`.
- The `Issuer` does not match the entity ID in your metadata.
- The request has expired or was already processed. Confirm your IdP and Sauce Labs Mobile App Distribution clocks are in sync.

**Back-channel (SOAP) logout never arrives**
- The IdP cannot reach the endpoint. Ensure `https://acme.testfairy.com/logout/sso/` is reachable from your IdP over HTTPS.
- Front-channel logout is still enabled. Disable it so the IdP issues the SOAP call.