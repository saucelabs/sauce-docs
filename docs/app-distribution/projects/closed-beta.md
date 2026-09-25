---
id: closed-beta
title: Closed Beta
sidebar_label: Closed Beta
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Closed beta limits app access to authorized users. Use closed beta when you want to make a build available only to approved testers and team members.

## How It Works

The access behavior depends on the app platform:

- **iOS ad-hoc and development builds** are always distributed as closed beta. You cannot change the visibility to open beta.
- **iOS enterprise and App Store builds**, and **Android apps**, can use either **Open Beta** or **Closed Beta**. You can configure this through the **Visibility** setting on the app's **Landing Page Settings** page (**Landing Page** ▸ **Edit**).

When an app is configured as closed beta, users must be authorized to access and install the app.

:::note
If **Require login before download** is turned on in [Organization Settings](/app-distribution/settings/organization), every app is closed beta and the **Visibility** option is locked.
:::

## Access Rules

When a build is in closed beta, the following rules determine who can access it:

| **Sr. No.** | **Role** | **Access** |
|---:|---|---|
| **1** | <span className="role-badge role-badge--owner">Account Owner</span> | Can access all apps in the organization. |
| **2** | <span className="role-badge role-badge--org-admin">Org Admin</span> | Can access all apps in the organization. |
| **3** | <span className="role-badge role-badge--member">Member</span> | Can access apps belonging to their teams. |
| **4** | <span className="role-badge role-badge--tester">Tester</span> | Can access only apps assigned to them directly, through a tester group they belong to, or through a build invite. |

## Unauthenticated Users

If someone opens a closed beta install link without being logged in, they will be redirected to the login page. After logging in, they will be sent back to the install page automatically.
