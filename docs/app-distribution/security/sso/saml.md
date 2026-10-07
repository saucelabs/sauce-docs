---
id: saml
title: SAML Roles and Groups
sidebar_label: SAML roles and groups
description: Use the groups attribute of the SAML assertion to set Mobile App Distribution organization roles, team roles, and tester groups from your identity provider.
---

On every SSO login, App Distribution reads the `groups` attribute of the SAML assertion. Each value can set the user's organization role, a team role, or a tester group. To connect your identity provider (IdP) first, see [Single Sign-On](/app-distribution/security/sso/sso-intro/).

## Two Modes

|                       | Default                              | With role sync                        |
| --------------------- | ------------------------------------ | ------------------------------------- |
| **Organization role** | Tester, set once when the user joins | From `groups`, on every login         |
| **Team roles**        | Not changed                          | From `groups`, on every login         |
| **Tester groups**     | Added only, with an `okta-` prefix   | Replaced to match `groups`, no prefix |

Sauce Labs turns on role sync per organization. To turn it on, contact [Sauce Labs Support](https://support.saucelabs.com/). With role sync on, your IdP is the source of truth, and anything the attribute doesn't list is removed at the next login.

## Value Format

Each value is `value` or `team:value`. With no prefix, the value applies to the **Default** team. If the value is a role keyword, it sets a role. Anything else is a tester group name.

## Role Keywords

Role keywords only work with role sync on, and they aren't case-sensitive.

| Value                       | Organization role | Team role            |
| --------------------------- | ----------------- | -------------------- |
| `account_manager`           | Org Admin         | None needed          |
| `team:account_manager`      | Member            | Team Admin of `team` |
| `admin`, `member`           | Member            | Member of Default    |
| `team:admin`, `team:member` | Member            | Member of `team`     |
| `tester`, `team:tester`     | Tester            | None                 |

:::caution
`admin` doesn't make someone an admin. It gives the same access as `member`. For admins, use `account_manager`.
:::

- If a user has several values, the highest role wins, for the organization role and for each team role.
- SSO never changes the Account Owner, and no value makes someone Account Owner.
- Teams must already exist, and names are matched without regard to case. When you rename a team, update the name in your IdP too.
- Users leave any team the attribute doesn't list, except Default.
- If there's no role keyword at all, the user's role and teams stay the same.

## Tester Groups

`qa:beta-testers` puts the user in the tester group `beta-testers` in the `qa` team. If the group doesn't exist, it's created, but the team must already exist. Names are lowercased, spaces become hyphens, and other symbols are removed, so `QA Testers (iOS)` becomes `qa-testers-ios`.

## Example

```xml
<saml2:Attribute Name="groups">
    <saml2:AttributeValue>qa:account_manager</saml2:AttributeValue>
    <saml2:AttributeValue>mobile:member</saml2:AttributeValue>
    <saml2:AttributeValue>qa:beta-testers</saml2:AttributeValue>
</saml2:Attribute>
```

With role sync on, the user is a Member of the organization, a Team Admin of `qa`, a Member of `mobile`, and in the tester group `beta-testers` in `qa`.
