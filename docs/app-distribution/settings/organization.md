---
id: organization
title: Organization Settings
sidebar_label: Organization
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Organization Settings contains your organization's basic information, security settings, subscription details, and team overview.

:::info
Only **Account Owners** and **Org Admins** can access Organization Settings.
:::

## Access Organization Settings

**Step 1:** Click the **Profile** icon in the top-right corner and select **Organization Settings** from the user menu. The **Organization Settings** page opens.

<img src={useBaseUrl('/img/app-distribution/organization/organization-1.png')} alt="Organization Settings" width="100%"/>

## Subscription Plan

The subscription details are displayed at the top of the page.

| Sr. No. | Field | Description |
|---:|---|---|
| 1 | **Subscription Plan** | Displays your organization's current subscription plan. |
| 2 | **Apps Limit** | Displays the maximum number of apps or projects allowed by your plan. |
| 3 | **Testers Limit** | Displays the maximum number of testers allowed by your plan. |
| 4 | **Data Retention** | Displays how long builds and related data are retained. |

If no plan is assigned, the page shows **No plan assigned**. Limits can show **Unlimited**.

<img src={useBaseUrl('/img/app-distribution/organization/organization-2.png')} alt="Organization Settings" width="100%"/>

## General

The **General** section contains your organization's name and subdomain.

| Sr. No. | Field | Description |
|---:|---|---|
| 1 | **Organization Name** | The display name of your organization across the platform. |
| 2 | **Subdomain** | Your organization's unique subdomain, such as `your-org.testfairy.com`. This field is read-only. Contact your administrator to change it. |

<img src={useBaseUrl('/img/app-distribution/organization/organization-3.png')} alt="Organization Settings" width="100%"/>

## Security

The **Security** section includes the **Require login before download** setting. When enabled, testers must log in before they can download a build. Landing pages also require login, even when the project is configured to open beta.

Click **Update** to save your changes. **Organization Name** is required.

<img src={useBaseUrl('/img/app-distribution/organization/organization-4.png')} alt="Organization Settings" width="100%"/>

## Organization Team Overview

The **Organization Team Overview** section provides a summary of your organization's teams and members.

| Sr. No. | Field | Description |
|---:|---|---|
| 1 | **Teams** | Displays the total number of teams in the organization. |
| 2 | **Members** | Displays the total number of people in the organization, including testers. |
| 3 | **Groups** | Displays the total number of groups in the organization. |
| 4 | **Created** | Displays the date when the organization was created. |

<img src={useBaseUrl('/img/app-distribution/organization/organization-5.png')} alt="Organization Settings" width="100%"/>

## SDK Settings

Organizations with SDK data enabled also see an **SDK Settings** section:

| Field | Description |
| --- | --- |
| **App Token** | The token your app uses to report SDK data. Use **Regenerate** to issue a new one. |
| **Server Endpoint** | The endpoint the SDK reports to. |
| **Setup snippets** | Code snippets for adding the SDK to your app. |
| **Crash and feedback emails** | Toggles that control whether crash and feedback emails are sent. |
| **Monthly session quota** | The number of SDK sessions included each month. |
