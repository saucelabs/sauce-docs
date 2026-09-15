---
id: closed-beta
title: Closed Beta
sidebar_label: Closed Beta
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Closed beta restricts app access to authorized users only. This ensures only approved testers can install your builds.

## How It Works

- **iOS apps** are always distributed as closed beta - this cannot be changed.
- **Android apps** can be set to open or closed beta via the landing page visibility setting.

## Access Rules

When a build is in closed beta, the following rules determine who can access it:

| Role | Access |
| --- | --- |
| **Account Owner** | Can access all apps in their organization. |
| **Org Admin** | Can access all apps in their organization. |
| **Member** | Can access apps belonging to their teams. |
| **Tester** | Can only access apps assigned to a group they belong to. |

## Unauthenticated Users

If someone opens a closed beta install link without being logged in, they will be redirected to the login page. After logging in, they will be sent back to the install page automatically.
