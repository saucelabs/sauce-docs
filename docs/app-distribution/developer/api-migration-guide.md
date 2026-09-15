---
id: api-migration-guide
title: Migrating from the legacy API to v3
sidebar_label: API Migration Guide
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::caution
The legacy `/api/1/*` and `/api/2/*` endpoints are deprecated. Every response from a legacy route now includes `Deprecation: true` and a `Sunset` date header (per RFC 9745 and RFC 8594). Migrate your integrations before that date — see [API v3](/app-distribution/developer/api-reference) for the supported surface.
:::

## What changed

- **Single versioned prefix.** Everything now lives under `/api/v3/*`. The split between `/api/1` and `/api/2` is gone.
- **JSON-everywhere.** All endpoints accept and return JSON. The legacy form-encoded body conventions (with `webhook-name`, `webhook-url` aliases, comma-separated `actions`, etc.) are dropped.
- **Stricter validation.** Webhook URLs are SSRF-checked. Unknown event types and unknown status values are rejected with `400` instead of being silently coerced.
- **Sites became Teams.** The Sites collection in v1 is the Teams collection in v3.
- **SDK endpoints removed.** `/api/1/feedbacks` and `/api/1/cpanel/permissions` are gone — those features never made the cut into Mobile App Distribution.

## Endpoint map

### Builds

| Legacy | v3 | Notes |
| --- | --- | --- |
| `GET /api/1/projects/{pid}/builds` | `GET /api/v3/projects/{pid}/builds` | — |
| `GET /api/1/projects/{pid}/builds/{bid}` | `GET /api/v3/builds/{id}` | Path flattened |
| `PATCH /api/1/projects/{pid}/builds/{bid}` | `PUT /api/v3/builds/{id}` | Method PATCH → PUT |
| `DELETE /api/1/projects/{pid}/builds/{bid}` | `DELETE /api/v3/builds/{id}` | — |
| `POST /api/1/projects/{pid}/builds/{bid}/copy` | `POST /api/v3/builds/{id}/copy` | JSON body, no `folder_name` required |
| `GET /api/1/projects/{pid}/builds/{bid}/download` | `GET /api/v3/builds/{id}/download` | Returns a JSON `url` instead of a redirect |
| `POST /api/1/projects/{pid}/builds/{bid}/invites` | `POST /api/v3/builds/{id}/notify-testers` | Renamed to reflect what it actually does |
| `POST /api/upload` | `POST /api/v3/builds/upload` | — |

### Projects

| Legacy | v3 | Notes |
| --- | --- | --- |
| `GET /api/1/projects` | `GET /api/v3/projects` | v3 shape; v1's stripped-down shape is gone |
| `GET /api/2/projects` | `GET /api/v3/projects` | — |
| `GET /api/2/projects/{pid}` | `GET /api/v3/projects/{id}` | — |
| `GET /api/2/projects/{pid}/builds` | `GET /api/v3/projects/{id}/builds` | — |
| `GET /api/2/projects/{pid}/testers` | `GET /api/v3/projects/{id}/testers` | Direct project_tester rows + group members, deduped |

### Testers

| Legacy | v3 | Notes |
| --- | --- | --- |
| `GET /api/1/testers` | `GET /api/v3/testers` | — |
| `POST /api/1/testers` | `POST /api/v3/testers` | JSON body |
| `GET /api/1/testers/{id}` | `GET /api/v3/testers/{id}` | — |
| `DELETE /api/1/testers/{id}` | `DELETE /api/v3/testers/{id}` | — |
| `POST /api/1/testers/{id}/block` | `POST /api/v3/testers/{id}/block` | — |
| `DELETE /api/1/testers/{id}/block` | `DELETE /api/v3/testers/{id}/block` | — |

### Groups

| Legacy | v3 | Notes |
| --- | --- | --- |
| `GET /api/1/groups` | `GET /api/v3/groups` | — |
| `GET /api/1/groups/{gid}` | `GET /api/v3/groups/{id}` | — |
| `GET /api/1/groups/{gid}/testers` | `GET /api/v3/groups/{id}/testers` | — |
| `GET /api/1/groups/{gid}/projects` | `GET /api/v3/groups/{id}/projects` | — |
| `GET /api/1/testers/groups` | `GET /api/v3/groups` | Moved out of the testers namespace |
| `POST /api/1/testers/groups` | `POST /api/v3/groups` | Requires `team_id` |
| `POST /api/1/testers/groups/{gid}` | `POST /api/v3/groups/{id}/testers` | JSON body with `email` |
| `DELETE /api/1/testers/groups/{gid}` | `DELETE /api/v3/groups/{id}/testers/{userId}` | Member ID is now in the path |

### Webhooks

| Legacy | v3 | Notes |
| --- | --- | --- |
| `GET /api/1/webhooks` | `GET /api/v3/webhooks` | — |
| `POST /api/1/webhooks` | `POST /api/v3/webhooks` | JSON body; `actions` validated against `upload`, `download`, `new-udid` |
| `GET /api/1/webhooks/{id}` | `GET /api/v3/webhooks/{id}` | — |
| `POST /api/1/webhooks/{id}` | `PUT /api/v3/webhooks/{id}` | Method POST → PUT; `status` must be `active` or `suspended` |
| `DELETE /api/1/webhooks/{id}` | `DELETE /api/v3/webhooks/{id}` | — |

### Sites → Teams

| Legacy | v3 | Notes |
| --- | --- | --- |
| `GET /api/1/sites` | `GET /api/v3/teams` | Rename only |
| `GET /api/1/sites/{id}` | `GET /api/v3/teams/{id}` | — |
| `POST /api/1/sites` | `POST /api/v3/teams` | — |
| `DELETE /api/1/sites/{id}` | `DELETE /api/v3/teams/{id}` | — |

### Audit

| Legacy | v3 | Notes |
| --- | --- | --- |
| `GET /api/1/audits` | `GET /api/v3/audits` | — |
| `GET /api/2/audits` | `GET /api/v3/audits` | — |
| `GET /api/2/audits/admin-trail` | `GET /api/v3/audits?action=<action_type>` | No role-based split — filter by the specific `action_type` string. Use `GET /api/v3/audits/actions` to enumerate valid values. |
| `GET /api/2/audits/tester-trail` | `GET /api/v3/audits?action=<action_type>` | Same as above — pick an `action_type` from `GET /api/v3/audits/actions`. |

## Removed without replacement

- `GET /api/1/feedbacks` — TestFairy SDK feedback inbox. The Mobile App Distribution platform doesn't ingest SDK feedback, so this endpoint was a stub returning `{ "feedbacks": [] }`. Removed entirely.
- `GET /api/1/cpanel/permissions` — listed org admins under a permission shape that v3 doesn't track. Use `GET /api/v3/members` instead.

## Watching usage

Every hit to a legacy route is logged at `INFO` with event `legacy_api_hit`, including the route name, HTTP method, user ID, an 8-char hash of the API key, and a duration in milliseconds. If you administer an org and want to know which of your integrations are still on the deprecated surface, search logs for `legacy_api_hit` filtered by `api_key_hash`.
