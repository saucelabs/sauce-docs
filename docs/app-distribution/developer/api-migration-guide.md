---
id: api-migration-guide
title: Migrating from the legacy API to v3
sidebar_label: API Migration Guide
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What changed

- **Single versioned prefix.** Everything now lives under `/api/v3/*`. The split between `/api/1` and `/api/2` is gone.
- **JSON-everywhere.** All endpoints accept and return JSON, except `POST /api/v3/builds/upload`, which uses `multipart/form-data`. The legacy form-encoded body conventions (with `webhook-name`, `webhook-url` aliases, comma-separated `actions`, etc.) are dropped.
- **Stricter validation.** Webhook URLs are SSRF-checked.
- **Sites became Teams.** The Sites collection in v1 is the Teams collection in v3.

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
| `POST /api/upload` | `POST /api/v3/builds/upload` | `team_id` required unless `project_id` is given; `folder_name` → `folder`; `app_version` → `version`; `release_notes` only (no `changelog`/`comment` aliases); `groups` only (no `app_permission_groups`); returns `201` with the v3 build object |
| `GET /api/1/projects/{pid}/builds/{bid}/symbols/download` | `GET /api/v3/builds/{id}/symbols/download` | Path flattened |

Tags change from a comma-separated string (v1) to a JSON array (v3).

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

:::caution
v3 tester IDs are **membership IDs**, not user IDs. Reusing a v1 tester ID hits the wrong tester or returns `404`. Look testers up with `GET /api/v3/testers?search=<email>` and use the returned `id`; `user_id` is also returned.
:::

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
| `DELETE /api/1/testers/groups/{gid}` | `DELETE /api/v3/groups/{id}/testers/{userId}` | The user ID (`user_id` from `/api/v3/testers`) is now in the path |

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
| `GET /api/1/sites` | `GET /api/v3/teams` | Response shape changes: `{site:{accounts,managers}}` becomes `{teams, pagination}` |
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

v3 action filters take one value, so make one call per action type to rebuild a trail.

## Removed without replacement

- `GET /api/1/cpanel/permissions` — listed org admins under a permission shape that v3 doesn't track. Use `GET /api/v3/testers` instead.

## Watching usage

Every hit to a legacy route is logged at `INFO` with event `legacy_api_hit`, including the route name, HTTP method, user ID, an 8-char hash of the API key, and a duration in milliseconds. If you administer an org and want to know which of your integrations are still on the deprecated surface, search logs for `legacy_api_hit` filtered by `api_key_hash`.
