---
id: oidc-authentication
title: OIDC Authentication
sidebar_label: OIDC Authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Configure **OpenID Connect (OIDC)** to authenticate API requests with JWT tokens issued by your identity provider. OIDC can be used instead of API keys or alongside them, depending on the authentication mode you select.

:::info
Only **Account Owners** and **Org Admins** can configure OIDC.
:::

## Setting Up OIDC

**Step 1:** Click the **Profile** icon in the top-right corner and select **Integrations** from the user menu.

<img src={useBaseUrl('/img/app-distribution/oidc-authentication/oidc-1.png')} alt="OIDC Authentication" width="100%"/>

**Step 2:** On the **Integrations** page, find **OIDC** and click **Connect**.

<img src={useBaseUrl('/img/app-distribution/oidc-authentication/oidc-2.png')} alt="OIDC Authentication" width="100%"/>

**Step 3:** Configure the OIDC settings using the following options:

| **Ref.** | **Setting** | **Description** |
|---:|---|---|
| **1** | **Issuer URL** | Enter your identity provider's **Issuer URL**. It must expose a `.well-known/openid-configuration` endpoint. |
| **2** | **Audience** | Enter the expected `aud` claim in the JWT. Leave this field empty to skip audience validation. |
| **3** | **Authentication Mode** | Select the authentication mode to use for OIDC authentication. |
| **4** | **Enable OIDC Authentication** | Turn on this option to enable OIDC authentication for your organization. |

<img src={useBaseUrl('/img/app-distribution/oidc-authentication/oidc-3.png')} alt="OIDC Authentication" width="100%"/>

**Step 4:** Click **Test** to verify the connection and view the discovered JWKS keys.

<img src={useBaseUrl('/img/app-distribution/oidc-authentication/oidc-4.png')} alt="OIDC Authentication" width="100%"/>

**Step 5:** Save the OIDC configuration.

<img src={useBaseUrl('/img/app-distribution/oidc-authentication/oidc-5.png')} alt="OIDC Authentication" width="100%"/>

## Authentication Modes

Choose how API requests should be authenticated:

| Mode | Description |
| --- | --- |
| **OIDC Only** | API keys are blocked. Only OIDC tokens are accepted for API requests. |
| **OIDC or API Key** | Both methods accepted. The system checks for an OIDC token first, then falls back to API key. |

<img src={useBaseUrl('/img/app-distribution/oidc-authentication/oidc-6.png')} alt="OIDC Authentication" width="100%"/>

## Advanced Options

Use the advanced options to control how OIDC tokens are validated.

<img src={useBaseUrl('/img/app-distribution/oidc-authentication/oidc-7.png')} alt="OIDC Authentication" width="100%"/>

- **Allowed Algorithms** - comma-separated list of accepted JWT signing algorithms (default: `RS256`).
- **Allowed Scopes** - comma-separated. The token must contain at least one of these scopes. Leave empty to skip scope validation.
- **JWKS Cache TTL** - how long to cache the JWKS keys in seconds (default: 86400 = 24 hours).
- **Clock Skew Tolerance** - tolerance in seconds for token expiry checks (default: 60).

## Making API Requests with OIDC

After you enable OIDC authentication, the **Integration Details** section displays a **Config Key**. Use this key together with the OIDC access token when making API requests.

Include the following headers:

```bash
curl -H "Authorization: Bearer YOUR_OIDC_TOKEN" \
     -H "X-OIDC-Config-Key: YOUR_CONFIG_KEY" \
     https://your-instance.testfairy.com/api/v3/projects
```
