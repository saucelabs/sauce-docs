---
id: api-reference
title: API Reference (v3)
sidebar_label: API Reference
description: Authenticate, paginate and call the Mobile App Distribution REST API v3 endpoints for apps, builds, teams, testers and more.
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

Use the REST API to integrate app distribution into your CI/CD pipeline.

## Authentication

All API requests require authentication via one of the following methods:

| Method | Example |
| --- | --- |
| `X-API-Key` header | `curl -H "X-API-Key: YOUR_KEY" ...` |
| `Bearer` token | `curl -H "Authorization: Bearer TOKEN" ...` |
| `api_key` form parameter | `curl -F api_key=YOUR_KEY ...` |
| HTTP Basic (`email:apiKey`) | `curl -u you@example.com:YOUR_KEY ...` |
| OIDC | `curl -H "Authorization: Bearer JWT" -H "X-OIDC-Config-Key: CONFIG_KEY" ...` |

Find your API key by clicking the key icon in the top navigation bar. You can exchange it for a short-lived Bearer token via `POST /api/v3/auth/token`.

## Pagination

All list endpoints support pagination via query parameters:

| Parameter | Default | Description |
| --- | --- | --- |
| `page` | 1 | Page number |
| `per_page` | 25 | Results per page (max: 100) |

Larger `per_page` values are capped at 100, except on `/api/v3/audits`, which returns a validation error instead.

Paginated responses include a `pagination` object. The list key matches the resource - `projects`, `builds`, `teams`, `testers`, `groups`, `webhooks`, or `audits`:

```json
{
  "projects": [...],
  "pagination": {
    "page": 1,
    "per_page": 25,
    "total": 142,
    "total_pages": 6
  }
}
```

## Interactive Documentation

For the full interactive API documentation with request/response examples, visit the **Swagger UI**.

## Endpoints

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>POST</M> | `/api/v3/auth/token` | Exchange API key for a 1-hour Bearer token |

### Apps

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/projects` | List all apps (paginated) |
| <M>GET</M> | `/api/v3/projects/{id}` | Get an app |
| <M>POST</M> | `/api/v3/projects` | Create an app |
| <M>PUT</M> | `/api/v3/projects/{id}` | Update an app |
| <M>DELETE</M> | `/api/v3/projects/{id}` | Delete an app (admin) |
| <M>GET</M> | `/api/v3/projects/{id}/testers` | List testers assigned to an app (direct + via groups, deduped) |
| <M>POST</M> | `/api/v3/projects/{id}/copy` | Copy an app |

### Builds

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/projects/{projectId}/builds` | List builds for an app (paginated) |
| <M>GET</M> | `/api/v3/builds/{id}` | Get a build |
| <M>POST</M> | `/api/v3/builds/upload` | Upload a new build (multipart/form-data) |
| <M>PUT</M> | `/api/v3/builds/{id}` | Update release notes and tags |
| <M>GET</M> | `/api/v3/builds/{id}/download` | Get pre-signed download URL. If storage isn't configured, returns the install-page URL instead. |
| <M>DELETE</M> | `/api/v3/builds/{id}` | Delete a build (admin) |
| <M>POST</M> | `/api/v3/builds/{id}/copy` | Duplicate a build within the same app (references the same file) |
| <M>POST</M> | `/api/v3/builds/{id}/notify-testers` | Queue the new-build email to testers. Returns `202 {"status":"queued"}`, or `409` if the build isn't distributable. Requires admin rights on the app. |
| <M>GET</M> | `/api/v3/builds/{id}/symbols/download` | Get a download URL for the build's symbols file |

#### Upload Parameters

`POST /api/v3/builds/upload` takes `multipart/form-data`:

| Parameter | Required | Default | Description |
| --- | --- | --- | --- |
| `file` | Yes | — | The build file (`.apk`, `.aab`, `.ipa`, or `.zip`) |
| `project_id` | See note | — | ID of the app to upload to. When set, `team_id` is ignored |
| `team_id` | See note | — | ID of the team to upload to. Required unless `project_id` is given. The build goes to that team's existing app for the package name, or a new app is created there |
| `folder` | No | None | Folder name. Scopes the package-name lookup and is applied to an auto-created app |
| `version` | No | Detected from the file | Override the version string |
| `version_code` | No | Detected from the file | Override the version code |
| `release_notes` | No | None | Release notes for the build |
| `groups` | No | Unchanged | Comma-separated tester group names or IDs to grant the app to. Replaces existing grants; omit to leave grants unchanged, or send `none` to remove all grants. Names that don't resolve are returned in `invalid_groups` and never revoke anything. Does not send email on its own (see `notify`). |
| `notify` | No | `off` | Set to `on` to email the app's tester groups about the new build. Granting groups does not notify them on its own. Ignored for builds that can't be installed (for example, generic files) |
| `symbols_file` | No | None | Debug symbols to attach (iOS dSYM or Android mapping file). Best-effort: an invalid symbols file never fails the upload. |
| `sync_to_saucelabs` | No | `off` | Set to `on` to also copy the build to Sauce Labs App Storage. Requires a Sauce Labs connection on the organization |
| `landing_page_slug` | No | Unchanged | URL alias for the app's landing page. 6-63 characters: letters, digits, dot, hyphen, or underscore, not starting or ending with a separator. Returns `409` if the alias is already used by another app |
| `landing_page_mode` | No | Unchanged | Landing page visibility: `open` or `closed` |

Provide either `project_id` or `team_id`. `PUT /api/v3/builds/{id}` accepts `release_notes`, `tags`, `landing_page_slug`, and `landing_page_mode`.

### Teams

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/teams` | List all teams (paginated) |
| <M>GET</M> | `/api/v3/teams/{id}` | Get a team |
| <M>POST</M> | `/api/v3/teams` | Create a team (admin) |
| <M>PUT</M> | `/api/v3/teams/{id}` | Update a team (admin) |
| <M>DELETE</M> | `/api/v3/teams/{id}` | Delete a team (admin) |

### Testers

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/testers` | List testers (paginated, searchable) |
| <M>GET</M> | `/api/v3/testers/{id}` | Get a tester |
| <M>POST</M> | `/api/v3/testers` | Invite a tester by email (admin). Only the Tester role can be created via the API. |
| <M>DELETE</M> | `/api/v3/testers/{id}` | Remove a tester (admin) |
| <M>POST</M> | `/api/v3/testers/{id}/block` | Block a tester (admin) |
| <M>DELETE</M> | `/api/v3/testers/{id}/block` | Unblock a tester (admin) |

### Groups

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/groups` | List all groups (paginated) |
| <M>GET</M> | `/api/v3/groups/{id}` | Get a group with testers and apps |
| <M>POST</M> | `/api/v3/groups` | Create a group (admin) |
| <M>PUT</M> | `/api/v3/groups/{id}` | Update a group (admin) |
| <M>DELETE</M> | `/api/v3/groups/{id}` | Delete a group (admin) |
| <M>POST</M> | `/api/v3/groups/{id}/testers` | Add tester to group (admin) |
| <M>DELETE</M> | `/api/v3/groups/{id}/testers/{userId}` | Remove tester from group (admin) |
| <M>GET</M> | `/api/v3/groups/{id}/testers` | List testers in a group (paginated) |
| <M>GET</M> | `/api/v3/groups/{id}/projects` | List apps the group has access to (paginated) |

### Webhooks

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/webhooks` | List all webhooks (paginated) |
| <M>GET</M> | `/api/v3/webhooks/{id}` | Get a webhook |
| <M>POST</M> | `/api/v3/webhooks` | Create a webhook (admin) |
| <M>PUT</M> | `/api/v3/webhooks/{id}` | Update a webhook (admin) |
| <M>DELETE</M> | `/api/v3/webhooks/{id}` | Delete a webhook (admin) |

### Settings

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/settings/oidc` | Get the organization's OIDC configuration (admin) |
| <M>POST</M> | `/api/v3/settings/oidc` | Create or update the OIDC configuration (admin) |
| <M>DELETE</M> | `/api/v3/settings/oidc` | Delete the OIDC configuration (admin) |
| <M>POST</M> | `/api/v3/settings/oidc/test` | Test OIDC discovery against the issuer (admin) |

### Audit Logs

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/audits` | List audit logs (paginated, filterable by action/search/date, admin) |
| <M>GET</M> | `/api/v3/audits/actions` | List distinct audit action types (admin) |
