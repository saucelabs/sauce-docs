---
id: legacy-api-v1
title: Legacy API (v1 Compatibility)
sidebar_label: Legacy API (v1)
description: Reference for the legacy v1 API, which keeps existing TestFairy CI/CD scripts and plugins working in Mobile App Distribution.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

export const M = ({children}) => {
  const colors = {
    GET: '#3b82f6',
    POST: '#22a06b',
    PUT: '#f59e0b',
    PATCH: '#f59e0b',
    DELETE: '#ef4444',
  };
  return (
    <span
      style={{
        background: colors[children] || '#6b7280',
        color: '#fff',
        padding: '0.15em 0.55em',
        borderRadius: '4px',
        fontSize: '0.78em',
        fontWeight: 700,
        fontFamily: 'var(--ifm-font-family-monospace)',
        letterSpacing: '0.03em',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
      }}
    >
      {children}
    </span>
  );
};

If you are migrating from TestFairy, your existing CI/CD scripts and plugins will continue to work without changes. The legacy API endpoints are fully supported alongside the new [API v3](/app-distribution/developer/api-reference).

## Authentication

All endpoints require authentication. You can authenticate using any of the following methods:

| Method | Example |
| --- | --- |
| `X-API-Key` header | `curl -H "X-API-Key: YOUR_KEY" ...` |
| `api_key` POST param | `curl -F api_key=YOUR_KEY ...` |

## Response Format

All responses return JSON with a `status` field (`"ok"` or `"fail"`).

**Success**

```json
{ "status": "ok", ... }
```

**Error**

```json
{ "status": "fail", "code": 5, "message": "..." }
```

## Upload

### <M>POST</M> `/api/upload`

Upload an APK, AAB, or IPA file. The app is automatically matched by package name, or created if it doesn't exist.

```bash
curl https://app.testfairy.com/api/upload \
  -F api_key=YOUR_API_KEY \
  -F file=@app-release.apk \
  -F changelog="Bug fixes and improvements" \
  -F notify=on \
  -F groups="QA,Beta"
```

| Parameter | Required | Description |
| --- | --- | --- |
| `file` | Yes | Binary file (`.apk`, `.aab`, or `.ipa`) |
| `changelog` | No | Release notes. Also accepted as `comment` or `release_notes` |
| `notify` | No | Set to `on` or `1` to email testers about the new build |
| `groups` | No | Comma-separated tester group names or IDs to grant the app to. Combine with `notify=on` to email them |
| `app_version` | No | Override the auto-detected version string |
| `version_code` | No | Override the auto-detected version code |
| `folder_name` | No | Assign the app to a folder |

## Projects

### <M>GET</M> `/api/1/projects/`

List all apps in the organization.

```bash
curl -H "X-API-Key: YOUR_KEY" https://app.testfairy.com/api/1/projects/
```

Response includes: `id`, `self`, `name`, `folderName`, `packageName`, `platform`, `icon`, `landingPageMode`.

## Builds

### <M>GET</M> `/api/1/projects/{projectId}/builds/`

List all builds for an app.

### <M>GET</M> `/api/1/projects/{projectId}/builds/{buildId}`

Get a single build.

Response includes: `id`, `projectId`, `appName`, `appDisplayName`, `appVersion`, `appVersionCode`, `iconUrl`, `appUrl`, `platform`, `comment`, `tags`, `downloads`, `uploadedAt`, `uploadedVia`, `isDistributionEnabled`.

### <M>PATCH</M> `/api/1/projects/{projectId}/builds/{buildId}/`

Update a build's metadata.

| Parameter | Description |
| --- | --- |
| `comment` | Update release notes |
| `tags` | Comma-separated tags |

### <M>DELETE</M> `/api/1/projects/{projectId}/builds/{buildId}`

Delete a build. Requires admin permissions.

### <M>GET</M> `/api/1/projects/{projectId}/builds/{buildId}/download/`

Download a build. Responds with an HTTP 302 redirect to a pre-signed download URL (or to the install page when file storage isn't configured), so follow redirects, for example with `curl -L`.

### <M>POST</M> `/api/1/projects/{projectId}/builds/{buildId}/invites/`

Send install invitations to testers for a build.

## Testers

### <M>GET</M> `/api/1/testers`

List all testers in the organization.

Response includes: `id`, `email`, `invitationStatus`, `isBlocked`, `groups`, `lastLogin`, `createdAt`, plus `hasUdidAccess`, `allowAll`, `hasPushToken`, `emailBounce`, `onlyAccount`, `account`, `allDevices`, `appleDevices`.

### <M>POST</M> `/api/1/testers/`

Add a tester. Creates the user if they don't exist. Requires admin permissions.

| Parameter | Required | Description |
| --- | --- | --- |
| `email` | Yes | Tester's email address |
| `group` | No | Group name to add the tester to |

### <M>GET</M> `/api/1/testers/{testerId}`

Get a single tester's details.

### <M>DELETE</M> `/api/1/testers/{testerId}`

Remove a tester from the organization. Requires admin permissions.

### <M>POST</M> `/api/1/testers/{testerId}/block/`

Block a tester. Requires admin permissions.

### <M>DELETE</M> `/api/1/testers/{testerId}/block/`

Unblock a tester. Requires admin permissions.

## Tester Groups

### <M>GET</M> `/api/1/testers/groups`

List all tester groups. Response includes: `id`, `name`, `testers` (a nested list of `{ "email" }` objects).

### <M>POST</M> `/api/1/testers/groups`

Create a tester group. Requires admin permissions.

| Parameter | Required | Description |
| --- | --- | --- |
| `groupName` | Yes | Name for the new group |

### <M>POST</M> `/api/1/testers/groups/{groupId}`

Add an existing tester to a group by email. If the email doesn't belong to a tester in your organization, the call returns `{ "status": "ok", "testers": [] }` and nothing changes. Requires admin permissions.

| Parameter | Required | Description |
| --- | --- | --- |
| `email` | Yes | Tester's email address |

### <M>DELETE</M> `/api/1/testers/groups/{groupId}`

Remove a tester from a group by email. Requires admin permissions.

| Parameter | Required | Description |
| --- | --- | --- |
| `email` | Yes | Tester's email address (POST body or query param) |

## Groups

### <M>GET</M> `/api/1/groups/`

List all groups in the organization. Response includes: `id`, `name`, `private`.

### <M>GET</M> `/api/1/groups/{groupId}`

Get a single group.

### <M>GET</M> `/api/1/groups/{groupId}/testers/`

List all testers in a group. Each entry contains `email` only. Paginated with `page` and `per_page` (default 50, max 200).

### <M>GET</M> `/api/1/groups/{groupId}/projects/`

List all apps assigned to a group. Response includes: `id`, `name`. Paginated with `page` and `per_page` (default 25, max 100).

## Webhooks

### <M>GET</M> `/api/1/webhooks/`

List all webhooks for the organization.

Response includes: `id`, `name`, `url`, `status`, `actions` (comma-separated), `projectIds` (comma-separated, or `*` for all apps).

### <M>POST</M> `/api/1/webhooks/`

Create a webhook. Requires admin permissions.

| Parameter | Required | Description |
| --- | --- | --- |
| `url` | Yes | Webhook callback URL |
| `name` | Yes | Display name. Also accepted as `webhook-name`. Missing name returns code `104` |
| `actions` | No | Comma-separated event types to listen for |
| `project_ids` | No | Comma-separated app IDs (empty = all apps) |

### <M>GET</M> `/api/1/webhooks/{webhookId}`

Get a single webhook.

### <M>POST</M> `/api/1/webhooks/{webhookId}`

Update a webhook. Requires admin permissions. Accepts the same parameters as create (all optional).

### <M>DELETE</M> `/api/1/webhooks/{webhookId}`

Delete a webhook. Requires admin permissions.

## Sites (Teams)

In the legacy API, "sites" correspond to "teams" in the current platform.

### <M>GET</M> `/api/1/sites/`

List all sites (teams) in the organization.

Response is `{ "site": { "accounts": [...], "managers": [...] } }`. Each account includes `id`, `name`, `buildsCount` and `users` (each with `email` and `role`); each manager includes `email`. Only the account owner or an org admin can call this endpoint; other roles receive `{ "status": "fail", "code": 1, "message": "Feature is not enabled" }` with HTTP 200.

### <M>GET</M> `/api/1/sites/{siteId}`

Get a single site (team).

### <M>POST</M> `/api/1/sites/`

Create a site (team). Requires admin permissions.

| Parameter | Required | Description |
| --- | --- | --- |
| `name` | Yes | Site (team) name |

## Audit Logs

Requires admin permissions. `GET /api/1/audits/` ignores query parameters and always returns up to 1000 app-download events. The `/api/2` audit endpoints support the following query parameters:

| Parameter | Description |
| --- | --- |
| `page` | Page number (default: 1) |
| `limit` | Results per page (default: 50, max: 100). `per_page` is also accepted and takes precedence |
| `action` | Filter by action type |
| `search` | Search in email and action data |
| `from` | Start date (ISO 8601) |
| `to` | End date (ISO 8601) |

### <M>GET</M> `/api/1/audits/`

List audit log entries.

### <M>GET</M> `/api/2/audits/`

List audit log entries (v2 format with pagination metadata).

### <M>GET</M> `/api/2/audits/admin-trail/`

List admin activity audit trail.

### <M>GET</M> `/api/2/audits/tester-trail/`

List tester activity audit trail.

Response includes: `id`, `timestamp`, `enterpriseId`, `siteName`, `userId`, `userEmail`, `ipAddress`, `actionType`, `actionLabel`, `actionData`, plus `pagination` object.

## Error Codes

| Code | HTTP Status | Meaning |
| --- | --- | --- |
| `1` | 400 | Missing or invalid required parameter |
| `2` | 400 | Duplicate resource (already exists) |
| `5` | 401/403 | API key valid but no organization membership (401), or admin permissions required (403). On `/api/upload`, an invalid key also returns code `5` with HTTP 200 |
| `104` | 401 | Missing or invalid API key (`/api/1` and `/api/2` endpoints) |
| `112` | 400 | Empty file uploaded |
| `121` | 400 | Invalid file type |
| `133` | 400 | Organization not configured (no team found) |
| `400` | 200 | Tester not found (for example, `Invalid Tester`) |
| `404` | 200 | Group not found |

## CI/CD Examples

**Gradle (Android)**

```bash
curl https://app.testfairy.com/api/upload \
  -F api_key=$API_KEY \
  -F file=@app/build/outputs/apk/release/app-release.apk \
  -F changelog="$(git log -1 --pretty=%B)"
```

**Xcode (iOS)**

```bash
curl https://app.testfairy.com/api/upload \
  -F api_key=$API_KEY \
  -F file=@build/MyApp.ipa \
  -F changelog="$(git log -1 --pretty=%B)" \
  -F notify=on
```

**List apps and builds**

```bash
# List apps
curl -H "X-API-Key: $API_KEY" https://app.testfairy.com/api/1/projects/

# List builds for an app
curl -H "X-API-Key: $API_KEY" https://app.testfairy.com/api/1/projects/123/builds/

# Get download URL
curl -H "X-API-Key: $API_KEY" https://app.testfairy.com/api/1/projects/123/builds/456/download/
```

## Migration to API v3

To migrate, see the [API Migration Guide](/app-distribution/developer/api-migration-guide).
