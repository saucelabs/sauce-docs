---
id: getting-started
title: Welcome to Mobile App Distribution
sidebar_label: Getting Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Mobile App Distribution shares iOS and Android builds with your team and testers without going through the app stores. Upload a build, choose who can install it, and send them a link.

A typical first distribution takes four steps:

<div style={{overflowX: 'auto'}}>
<svg viewBox="0 0 940 120" width="100%" style={{maxWidth: '940px', height: 'auto'}} role="img" aria-label="Distribution flow: upload a build, assign a tester group, share the landing page, testers install the app.">
  <defs>
    <marker id="gs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#5a6577" />
    </marker>
  </defs>

  <rect x="10" y="28" width="200" height="64" rx="12" fill="#eef4f8" stroke="#3d6d8c" strokeWidth="2.5" />
  <text x="110" y="66" fontSize="17" fontWeight="600" fill="#2d3748" textAnchor="middle">Upload a build</text>

  <rect x="253" y="28" width="200" height="64" rx="12" fill="#eef4f8" stroke="#3d6d8c" strokeWidth="2.5" />
  <text x="353" y="66" fontSize="17" fontWeight="600" fill="#2d3748" textAnchor="middle">Assign a tester group</text>

  <rect x="496" y="28" width="200" height="64" rx="12" fill="#eef4f8" stroke="#3d6d8c" strokeWidth="2.5" />
  <text x="596" y="66" fontSize="17" fontWeight="600" fill="#2d3748" textAnchor="middle">Share the link</text>

  <rect x="739" y="28" width="200" height="64" rx="12" fill="#e8f5e9" stroke="#2e9e4f" strokeWidth="2.5" />
  <text x="839" y="66" fontSize="17" fontWeight="600" fill="#2e9e4f" textAnchor="middle">Testers install</text>

  <path d="M 214 60 L 247 60" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#gs-arrow)" />
  <path d="M 457 60 L 490 60" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#gs-arrow)" />
  <path d="M 700 60 L 733 60" stroke="#5a6577" strokeWidth="3" fill="none" markerEnd="url(#gs-arrow)" />
</svg>
</div>

## Key Concepts

| Concept | What it is |
| --- | --- |
| **Apps** | Each app holds all builds for a specific mobile application. An app belongs to exactly one team. |
| **Builds** | Upload `.ipa` (iOS), or `.apk` / `.aab` (Android) files, up to 4 GB. `.aab` files are converted to an APK for installation. Each upload with a new version creates a new build with version info, release notes, and an install link. Uploading a version that already exists replaces that build, unless **Allow duplicate versions** is turned on in the app's settings. |
| **Teams** | Isolated departments in your organization. Apps belong to teams, and members can belong to one or more teams. |
| **Tester Groups** | Named groups of testers. A group belongs to one team and can only be assigned to apps in that team. |
| **Landing Pages** | Each app gets a customizable install page with a unique URL and a QR code. |

## Quick Start

### 1. Upload a Build

Open **App Management** in the sidebar, then drag and drop your `.apk`, `.aab`, or `.ipa` file onto the upload area. To add a build to an app you already have, open that app and select **Upload Build**.

Files can be up to 4 GB. App Distribution reads the package name, platform, version, and build number from the file, so you don't need to enter them.

See [Uploading Builds](/app-distribution/projects/uploading-builds).

### 2. Create a Tester Group

Select **Testers** in the sidebar, open the **Groups** tab, and select **New Group**. If you belong to more than one team, choose the team the group belongs to.

Add existing testers, or invite new ones by email. A group can only be assigned to apps in its own team.

See [Tester Groups](/app-distribution/organization/tester-groups).

### 3. Assign the Group to Your App

Open the app and select the **Testers** tab. Choose your group from the **Select a group** dropdown list, pick whether it gets every build or one specific build, then select **Assign Build(s)**.

Only groups belonging to the same team as the app are available for assignment.

### 4. Share the Install Link

Open the app and select **Landing Page** ▸ **Edit** to set the URL alias and visibility, then share the link or its QR code.

Testers open the link on their device and install the app.

See [Landing Pages](/app-distribution/projects/landing-pages) and [Installing Apps](/app-distribution/general/installing-apps).

:::note
Choose **Closed Beta** visibility to require testers to sign in before installing. iOS ad-hoc and development builds are always closed beta. See [Closed Beta](/app-distribution/projects/closed-beta).
:::

## Role Hierarchy

Each higher role inherits all permissions of the roles below it.

| Role | Permissions |
| --- | --- |
| <span className="role-badge role-badge--owner">Account Owner</span> | Full access to everything in the organization, including organization settings, SSO, OIDC, integrations, and the audit log. |
| <span className="role-badge role-badge--org-admin">Org Admin</span> | Create and manage teams, invite and manage organization members, plus organization settings, SSO, OIDC, integrations, and the audit log. |
| <span className="role-badge role-badge--team-admin">Team Admin</span> | Invite new users to their team as Members, add existing users to the team, and set their team role. Assigned per-team by an admin or by another Team Admin. |
| <span className="role-badge role-badge--member">Member</span> | Create apps, upload builds, create tester groups, and invite testers in their team. |
| <span className="role-badge role-badge--tester">Tester</span> | View and install apps assigned to them directly, through a tester group, or through a build invite. Can be shared across teams. |

For the full breakdown, see [Members and Roles](/app-distribution/organization/members-roles).

## Automate Uploads

After you have distributed a build by hand, move the upload into your pipeline. Builds upload through the REST API with your API key:

```bash
curl -X POST https://your-org.testfairy.com/api/v3/builds/upload \
  -H "X-API-Key: $API_KEY" \
  -F project_id=$PROJECT_ID \
  -F file=@app-release.apk \
  -F release_notes="$(git log -1 --pretty=%B)"
```

Find your API key under **My Profile** ▸ **API Key**. See the [API Reference](/app-distribution/developer/api-reference) for the full endpoint list.

## Next Steps

| If you want to | Go to |
| --- | --- |
| Understand build states and expiry | [Build Lifecycle](/app-distribution/projects/build-lifecycle) |
| Organize people into teams | [Managing Teams](/app-distribution/organization/managing-teams) |
| Control who is notified about new builds | [Notifications](/app-distribution/organization/notifications) |
| Review who did what in your organization | [Audit Log](/app-distribution/organization/audit-log) |
| Sign in with your identity provider | [SSO / SAML](/app-distribution/settings/sso-saml) |
| Store builds in your own bucket | [Custom Storage](/app-distribution/integrations/custom-storage) |
| Post build events to Slack or Teams | [Webhooks](/app-distribution/integrations/webhooks) |
| Publish to the stores | [Google Play](/app-distribution/integrations/google-play) · [Apple App Store](/app-distribution/integrations/apple-app-store) |
