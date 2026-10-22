---
id: api-keys
title: API Keys
sidebar_label: API Keys
description: Find, regenerate and use your Mobile App Distribution API key for programmatic access.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This guide explains how to find, regenerate, and use API keys for programmatic access to Sauce Labs Mobile App Distribution.

## Overview

An API key is a unique identifier used to authenticate API requests to Sauce Labs Mobile App Distribution. Your API key is **not** your account password - it's a separate credential specifically for API access.

API keys are used with the [REST API](/app-distribution/developer/api-reference), including build uploads.

:::note
Testers don't have an API key. The **API Credentials** menu and the **API Key** section aren't shown to them.
:::

## Finding Your API Key

To find your API key:

1. Log in to your Sauce Labs Mobile App Distribution account.
2. Click **API Credentials** in the top navigation bar, or click the **Profile** icon in the top-right corner and select **My Profile**.
3. Locate the **API Key** section.
4. Click the **eye icon** to view the key, or the **copy icon** to copy it.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-7.png')} alt="API Key field with the view and copy icons highlighted" width="100%"/>

## Regenerating Your API Key

To regenerate your API key:

1. Click the **Profile** icon in the top-right corner and select **My Profile**.
2. In the **API Key** section, click **Regenerate API Key**.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-8.png')} alt="Regenerate API Key highlighted in the API Key section" width="100%"/>

:::warning
When you regenerate your API key, the old key is **immediately invalidated**. Update all integrations with the new key before they fail.
:::

## Using API Keys

### X-API-Key Header

Pass the API key in the `X-API-Key` header:

```bash
curl -H "X-API-Key: YOUR_KEY" https://your-org.testfairy.com/api/v3/projects
```

### HTTP Basic Auth

Use your email address as the username and your API key as the password:

```bash
curl -u "you@example.com:YOUR_KEY" https://your-org.testfairy.com/api/v3/projects
```

Where:
- **Username**: Your email address
- **Password**: Your API key (not your account password)

### Uploading Builds

Uploads use the same API key:

```bash
curl -X POST https://your-org.testfairy.com/api/v3/builds/upload \
  -H "X-API-Key: YOUR_KEY" \
  -F project_id=$PROJECT_ID \
  -F file=@app.apk
```

You can also exchange your API key for a short-lived Bearer token via `POST /api/v3/auth/token`. See the [API Reference](/app-distribution/developer/api-reference#authentication) for all authentication methods.

## Security Best Practices

| Practice | Description |
| :------- | :---------- |
| **Keep API keys private** | Never share your API key or post it on public code repositories or forums. |
| **Use environment variables** | Store API keys in environment variables or secrets management solutions, not in code. |
| **Use service accounts for automation** | Create dedicated [service accounts](/app-distribution/security/service-accounts) for CI/CD pipelines instead of using personal credentials. |
| **Rotate keys periodically** | Regenerate API keys on a regular schedule or after any potential exposure. |
| **Use different keys per environment** | Create separate service accounts for development, staging, and production. |
| **Monitor API usage** | Review the [audit log](/app-distribution/organization/audit-log) regularly to detect unusual activity. |
| **Limit key exposure** | Only share API keys with systems that need them. |

## See Also

- [My Profile](/app-distribution/settings/my-profile) - Where your API key is managed
- [Service Accounts](/app-distribution/security/service-accounts) - Creating dedicated accounts for automation
- [OIDC Authentication](/app-distribution/settings/oidc-authentication) - Token-based authentication alternative
- [API Reference](/app-distribution/developer/api-reference) - Complete REST API documentation
