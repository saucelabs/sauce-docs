---
id: service-accounts
title: Service Accounts and API Keys
sidebar_label: Service Accounts
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This guide explains how to create and manage service accounts for programmatic access to Sauce Mobile App Distribution, including API key management and best practices.

## What Are Service Accounts?

A **service account** is a dedicated user account created specifically for automated processes, CI/CD pipelines, scripts, and integrations. Unlike personal user accounts tied to individual team members, service accounts are designed for machine-to-machine communication.

## Why Use Service Accounts?

Service accounts with API keys are one approach for programmatic API access. For organizations looking for enhanced security with short-lived tokens and centralized credential management, [OIDC authentication](/testfairy/security/oidc-authentication) offers an alternative that eliminates the need to manage long-lived API keys.

Using service accounts for API access provides several benefits:

| Benefit | Description |
| :------ | :---------- |
| **Security Isolation** | API keys are tied to a dedicated account, limiting the blast radius if credentials are compromised. |
| **Auditability** | All API activity is attributed to the service account, making it easy to track automated actions separately from human actions. |
| **Continuity** | When team members leave or change roles, automated processes continue to work without interruption. |
| **Principle of Least Privilege** | Service accounts can be granted only the permissions necessary for their specific function. |
| **Credential Rotation** | API keys can be rotated without affecting any individual user's access to the platform. |

:::warning Important
**Do not use Site Manager accounts for API calls.** Site Manager accounts have elevated privileges designed for administrative tasks across multiple sites. Using these accounts for API automation:
- Creates unnecessary security risk by exposing high-privilege credentials
- Makes it difficult to audit automated vs. administrative actions
- Violates the principle of least privilege

Always create dedicated service accounts with appropriate permissions for API access.
:::

## Creating a Service Account

To create a service account for API access:

1. Navigate to **Account** > **Team** (or **Admin Management** in Multi-Site configurations).
2. Click **Invite User** or **Add Team Member**.
3. Use a descriptive email address that identifies the service account's purpose:
   - `ci-pipeline@yourcompany.com`
   - `jenkins-deploy@yourcompany.com`
   - `automation-service@yourcompany.com`
4. Assign the **Admin** role for the service account.
5. Complete the account setup by following the invitation email.

:::warning Role Selection
You must assign the **Admin** role for service accounts that need API access. The **Member** role has read-only permissions and **does not receive an API key**, making it unsuitable for automation that requires uploading builds or making changes.
:::

### Service Account Naming Conventions

Use clear naming conventions to identify service accounts:

| Pattern | Example | Use Case |
| :------ | :------ | :------- |
| `{tool}-{purpose}@domain` | `jenkins-upload@company.com` | CI/CD tool integration |
| `svc-{application}@domain` | `svc-mobile-deploy@company.com` | Application-specific automation |
| `automation-{team}@domain` | `automation-qa@company.com` | Team-specific automation |

## Managing API Keys

Each user account (including service accounts) has an associated API key that is used for authenticating API requests. For general API key information, see [API Keys](/testfairy/security/api-keys).

### Finding Your API Key

1. Log in to the service account.
2. Navigate to **Account** > **Settings**.
3. Locate the **Access Key** section.
4. Copy the username and API key for use in your integrations.

### API Key Security Best Practices

| Practice | Description |
| :------- | :---------- |
| **Never commit API keys to source control** | Use environment variables or secrets management solutions. |
| **Use different keys per environment** | Create separate service accounts for development, staging, and production. |
| **Rotate keys periodically** | Regenerate API keys on a regular schedule or after any potential exposure. |
| **Monitor API usage** | Review audit logs regularly to detect unusual activity. |
| **Limit key exposure** | Only share API keys with systems that need them. |

### Using API Keys in API Calls

Different APIs use different authentication methods:

#### REST API

The [REST API](/testfairy/api-reference/rest-api) uses HTTP Basic Authentication with your email and API key:

```bash
curl -u "service-account-email:api-key" "https://mobile.saucelabs.com/api/1/projects/"
```

Where:
- **Username**: The email address of the service account
- **Password**: The API key (not the account password)

#### Upload API

The [Upload API](/testfairy/api-reference/upload-api) uses only the API key as a form parameter - no username required:

```bash
curl https://mobile.saucelabs.com/api/upload -F api_key='your_api_key' -F file=@app.apk
```

## Account Types and API Access

Understanding which account types should be used for API access:

| Account Type | Has API Key? | Use for Service Accounts? | Notes |
| :----------- | :----------- | :------------------------ | :---- |
| **Admin** | Yes | **Yes - Recommended** | Read-write access to all projects; ideal for automation |
| **Member** | **No** | **No** | Read-only access; cannot upload builds or make changes via API |
| **Account Manager** | Yes | **No** | Can invite/manage users - excessive privileges for automation |
| **Account Owner** | Yes | **No** | Enterprise owner account; should not be used for automation |
| **Site Manager** | Yes | **Never** | Multi-site administrative privileges; violates security best practices |

## Multi-Site Considerations

In Multi-Site configurations, service accounts operate within a specific site context:

- Create service accounts within the specific site that requires API access.
- A service account in Site A cannot access resources in Site B unless explicitly added to both sites.
- Site Managers should create and manage service accounts but should **never use their own Site Manager credentials for API access**.

## OIDC Authentication Alternative

For organizations seeking enhanced security, **OIDC (OpenID Connect) authentication** provides an alternative to service account API keys. OIDC uses short-lived JWT tokens from your identity provider instead of long-lived API keys.

### When to Use OIDC vs. Service Accounts

| Consideration | Service Account + API Key | OIDC Authentication |
| :------------ | :------------------------ | :------------------ |
| **Setup complexity** | Simple - create account, get key | Requires identity provider configuration |
| **Token lifetime** | Long-lived (never expires) | Short-lived (typically 1 hour) |
| **Credential storage** | API key stored in CI/CD secrets | Client credentials in identity provider only |
| **Revocation** | Manual key regeneration | Automatic token expiration |
| **Audit trail** | Basic API logs | Full audit in identity provider |
| **Central management** | Per-account | Centralized in identity provider |

### Choosing Your Authentication Method

**Use Service Accounts with API Keys when:**
- You need simple setup for small teams
- You have limited CI/CD pipelines
- You don't have an enterprise identity provider

**Use OIDC Authentication when:**
- You want centralized credential management
- Your organization requires short-lived tokens for compliance
- You already use an identity provider (Auth0, Okta, Azure AD, etc.)
- You need detailed audit trails for API access

:::tip
Organizations can enable both authentication methods simultaneously during migration. Use "OIDC or API Key" mode to gradually transition from API keys to OIDC without disrupting existing integrations.
:::

For complete OIDC setup instructions, see [OIDC API Authentication](/testfairy/security/oidc-authentication).

## Rotating API Keys

To rotate an API key for a service account:

1. Log in to the service account.
2. Navigate to the API key settings.
3. Generate a new API key (the old key will be invalidated).
4. Update all integrations with the new key.
5. Verify that all automated processes are working with the new key.

:::tip
Before rotating keys, inventory all systems using the current key to avoid service disruptions.
:::

## Troubleshooting

### Common Issues

**401 Unauthorized Error**
- Verify the email and API key are correct.
- Ensure you're using the API key, not the account password.
- Check that the service account has not been deleted or blocked.

**403 Forbidden Error**
- The service account may lack permissions for the requested action.
- Verify the account role has appropriate access levels.
- In Multi-Site setups, confirm the account has access to the target site.

**API Key Not Working After Team Changes**
- If the service account was removed from the team, the API key becomes invalid.
- Re-invite the service account and retrieve the new API key.

## See Also

- [API Keys](/testfairy/security/api-keys) - API key basics and usage
- [OIDC API Authentication](/testfairy/security/oidc-authentication) - JWT-based authentication alternative
- [REST API Reference](/testfairy/api-reference/rest-api) - Complete API documentation
- [Upload API](/testfairy/api-reference/upload-api) - Build upload automation
- [Multiple Accounts](/testfairy/using-testfairy/multi-site) - Multi-Site configuration and roles
- [Account Settings](/testfairy/security/acct-settings) - General account configuration
