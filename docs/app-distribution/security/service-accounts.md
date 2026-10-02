---
id: service-accounts
title: Service Accounts
sidebar_label: Service Accounts
description: Create service accounts for CI/CD pipelines and automation, choose the right role, and keep their API keys safe.
---

A service account is a dedicated user account for automation: CI/CD pipelines, scripts, and integrations that call the Mobile App Distribution API. It isn't tied to a person, so your automation keeps working when people join, leave, or change roles.

This guide explains which role to give a service account, how to create one, and how to keep its API key safe.

## Why Use a Service Account?

| Benefit | Description |
| --- | --- |
| Security isolation | The API key belongs to a dedicated account. If it leaks, you regenerate one key without affecting anyone's personal access. |
| Auditability | Actions the service account takes appear under its own email in the [Audit Log](/app-distribution/organization/audit-log), separate from human activity. |
| Continuity | Automation doesn't break when a team member leaves or changes role. |
| Least privilege | You choose exactly which teams the account can reach and whether it needs admin rights. |
| Independent rotation | Regenerating the service account's key doesn't affect any person's account. |

:::tip
Prefer short-lived credentials? You can use [OIDC Authentication](/app-distribution/settings/oidc-authentication) instead of API keys, or exchange a service account's API key for a 1-hour Bearer token at the start of each job. See [Use Short-Lived Tokens in CI](#use-short-lived-tokens-in-ci).
:::

## Choose a Role

Every user in your organization has one organization role. Choose the lowest role that lets the automation do its job.

| Role | Has an API key? | Use for a service account? | What it can do through the API |
| --- | --- | --- | --- |
| <span className="role-badge role-badge--member">Member</span> (in specific teams) | Yes | **Recommended** | Upload builds, create and update apps, update release notes and tags, and notify testers, but only in the teams it belongs to. |
| <span className="role-badge role-badge--org-admin">Org Admin</span> | Yes | Only if needed | Everything a Member can do in **all** teams, plus deleting apps and builds, managing tester groups, testers, teams and webhooks, and reading the audit log. |
| <span className="role-badge role-badge--owner">Account Owner</span> | Yes | No | Full control of the organization. Don't use it for automation. OIDC requests also run as this account. |
| <span className="role-badge role-badge--tester">Tester</span> | No | No | Testers can't use the API. |

:::caution
Don't use an Account Owner or Org Admin account for routine automation such as uploading builds. If its key leaks, the attacker gets admin access to every team.
:::

## Create a Service Account

Only Account Owners, Org Admins, and Team Admins can invite users. Team Admins can only invite Members into their own teams.

1. Click the **Profile** icon, then select **Users**.
2. Click **Invite User**.
3. Enter a dedicated email address that describes the account's purpose, for example `ci-upload@yourcompany.com`. The address can't already be an admin or member in another organization.
4. Set **Role** to **Member**. Choose **Org Admin** only if the automation needs admin-only actions (see [Choose a Role](#choose-a-role)).
5. Under **Assign to Teams**, select only the teams the automation works with.
6. Click **Invite**.
7. Open the invitation email sent to that address and complete the account setup.

:::note
If your organization uses the [Sauce Labs connection](/app-distribution/integrations/saucelabs-connection), **Invite User** isn't available. Create the account in Sauce Labs, add it to the matching Sauce Labs team, and sign in with it once so it's provisioned in Mobile App Distribution.
:::

:::note
If your organization uses [SSO / SAML](/app-distribution/settings/sso-saml) and **Allow Password Login Override** is off, the service account can't sign in with a password to copy its key. Either give the account an identity in your identity provider, or turn on the override.
:::

### Naming Conventions

Use names that make the account's purpose obvious in the Users list and the Audit Log:

| Pattern | Example | Use case |
| --- | --- | --- |
| `{tool}-{purpose}@domain` | `jenkins-upload@company.com` | A specific CI/CD tool |
| `svc-{application}@domain` | `svc-mobile-deploy@company.com` | Automation for one application |
| `automation-{team}@domain` | `automation-qa@company.com` | Automation for one team |

## Get the API Key

1. Sign in as the service account.
2. Click the **key** icon in the top navigation bar to open **API Credentials**, or go to **My Profile** › **API Key**.
3. Copy the key and store it in your CI/CD secret store, for example as `MAD_API_KEY`. Never commit it to source control.

Send the key in the `X-API-Key` header:

```bash
curl -H "X-API-Key: $MAD_API_KEY" \
  https://your-org.testfairy.com/api/v3/projects
```

## Team Scope

A **Member** service account can only see and change apps in the teams it belongs to. Requests for apps in other teams return `403 Forbidden`.

- To automate several teams, add the account to each of them from the team's page (see [Managing Teams](/app-distribution/organization/managing-teams)), or create one service account per team.
- An **Org Admin** service account can reach every team, which is why it should be the exception.

See [Managing Teams](/app-distribution/organization/managing-teams) and [Members & Roles](/app-distribution/organization/members-roles).

## Use Short-Lived Tokens in CI

API keys don't expire. To limit exposure, exchange the key for a Bearer token at the start of each pipeline run. The token is valid for 1 hour.

```bash
TOKEN=$(curl -s -X POST -H "X-API-Key: $MAD_API_KEY" \
  https://your-org.testfairy.com/api/v3/auth/token | jq -r .token)

curl -H "Authorization: Bearer $TOKEN" \
  -F file=@app-release.apk \
  -F team_id=12 \
  https://your-org.testfairy.com/api/v3/builds/upload
```

The response also includes `expires_at`. Request a new token when it expires.

## API Keys or OIDC?

[OIDC Authentication](/app-distribution/settings/oidc-authentication) lets your pipelines use short-lived JWTs from your identity provider instead of API keys.

| Consideration | Service account + API key | OIDC |
| --- | --- | --- |
| Setup | Invite an account and copy its key | Configure your identity provider and the OIDC settings |
| Credential lifetime | Key never expires (use 1-hour Bearer tokens to limit exposure) | Short-lived JWTs issued by your identity provider |
| Where secrets live | API key in your CI/CD secret store | Client credentials in your identity provider |
| Permissions | The role and teams you give the account | Always acts as the organization's **Account Owner** |
| Mobile App Distribution Audit Log | Actions appear under the service account's email | All actions appear under the Account Owner |
| Revocation | Regenerate the key | Disable the client in your identity provider |

Use a **service account** when you want least-privilege access to specific teams, or clear attribution in the Audit Log. Use **OIDC** when your organization requires identity-provider-issued, short-lived credentials and you accept owner-level access.

:::tip
To migrate gradually, set the OIDC mode to **OIDC or API Key**. Requests that send `X-OIDC-Config-Key` with a Bearer token use OIDC, and all other requests keep using API keys. Switch to **OIDC Only** once every pipeline has moved. From then on, API keys and Bearer tokens are rejected.
:::

## Rotate an API Key

1. List every system that uses the current key.
2. Sign in as the service account.
3. Go to **My Profile** › **API Key** and click **Regenerate**. The old key stops working immediately.
4. Update the key in every CI/CD secret store and integration.
5. Run each pipeline once to confirm it works.

Bearer tokens that were created from the old key remain valid until they expire (at most 1 hour).

## Remove a Service Account

- **Remove it from a team** to take away access to that team's apps only.
- **Remove it from the organization** (**Profile** › **Users**, then remove the user) to stop all access. API calls then fail with `403`.
- **Block it** to suspend it temporarily. API calls then fail with `401`.

The API key isn't deleted when you remove the account. If you invite the same email again, the old key works again. Regenerate the key after re-inviting if it may have been exposed.

## Troubleshooting

**401 Unauthorized**

- The API key is wrong or has been regenerated.
- The service account is blocked.
- Your organization uses **OIDC Only** mode, which rejects API keys and Bearer tokens.
- The Bearer token has expired. Request a new one from `/api/v3/auth/token`.
- If you use HTTP Basic, the username must be the service account's email and the password its API key, not its account password.

**403 Forbidden**

- The account is a **Member** and the endpoint is admin-only, for example deleting a build or creating a tester group.
- The app belongs to a team the account isn't in. Add the account to that team.
- The account was removed from the organization. Invite it again.

**Upload returns 400 `team_id_required`**

- Send `team_id` (or `project_id`) with the upload. The account must belong to that team.

## See Also

- [API Reference](/app-distribution/developer/api-reference)
- [OIDC Authentication](/app-distribution/settings/oidc-authentication)
- [Members & Roles](/app-distribution/organization/members-roles)
- [Managing Teams](/app-distribution/organization/managing-teams)
- [My Profile](/app-distribution/settings/my-profile)
- [Audit Log](/app-distribution/organization/audit-log)
