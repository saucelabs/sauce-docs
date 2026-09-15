---
id: oidc-authentication
title: OIDC Authentication
sidebar_label: OIDC Authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Configure OpenID Connect (OIDC) to allow API access using JWT tokens from your identity provider, instead of (or in addition to) API keys.

:::info
Only **Account Owners** and **Org Admins** can configure OIDC.
:::

## Setting Up OIDC

1. Go to **gear icon → OIDC Authentication**.
2. Enter the **Issuer URL** — must expose a `.well-known/openid-configuration` endpoint. Click **Test** to verify connectivity and see the discovered JWKS keys.
3. Set the **Audience** (the expected `aud` claim in the JWT). Leave empty to skip audience validation.
4. Choose an **Authentication Mode**.
5. Toggle **Enable OIDC Authentication** on and save.

## Authentication Modes

| Mode | Description |
| --- | --- |
| **OIDC Only** | API keys are blocked. Only OIDC tokens are accepted for API requests. |
| **OIDC or API Key** | Both methods accepted. The system checks for an OIDC token first, then falls back to API key. |

## Advanced Options

- **Allowed Algorithms** — comma-separated list of accepted JWT signing algorithms (default: `RS256`).
- **Allowed Scopes** — comma-separated. The token must contain at least one of these scopes. Leave empty to skip scope validation.
- **JWKS Cache TTL** — how long to cache the JWKS keys in seconds (default: 86400 = 24 hours).
- **Clock Skew Tolerance** — tolerance in seconds for token expiry checks (default: 60).

## Making API Requests with OIDC

After enabling OIDC, the **Integration Details** section shows a **Config Key**. Include this as a header in your API requests:

```bash
curl -H "Authorization: Bearer YOUR_OIDC_TOKEN" \
     -H "X-OIDC-Config-Key: YOUR_CONFIG_KEY" \
     https://your-instance.testfairy.com/api/v3/projects
```
