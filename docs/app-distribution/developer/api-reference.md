---
id: api-reference
title: API Reference (v3)
sidebar_label: API Reference
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

Find your API key by clicking the key icon in the top navigation bar. You can exchange it for a short-lived Bearer token via `POST /api/v3/auth/token`.

## Pagination

All list endpoints support pagination via query parameters:

| Parameter | Default | Description |
| --- | --- | --- |
| `page` | 1 | Page number |
| `per_page` | 25 | Results per page (max: 100) |

Paginated responses include a `pagination` object:

```json
{
  "resources": [...],
  "pagination": {
    "page": 1,
    "per_page": 25,
    "total": 142,
    "total_pages": 6
  }
}
```

## Postman Collection

Import the collection into Postman to start testing immediately. Set the `base_url` and `api_key` variables after importing.

<a
  href="https://saucelabs-poc.testfairy.com/MAD-API-v3.postman_collection.json"
  download
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5em',
    background: '#3d6d8c',
    color: '#fff',
    padding: '0.65em 1.1em',
    borderRadius: '6px',
    fontWeight: 600,
    textDecoration: 'none',
  }}
>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
  Download Postman Collection
</a>

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

### Builds

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/projects/{projectId}/builds` | List builds for an app (paginated) |
| <M>GET</M> | `/api/v3/builds/{id}` | Get a build |
| <M>POST</M> | `/api/v3/builds/upload` | Upload a new build (multipart/form-data) |
| <M>PUT</M> | `/api/v3/builds/{id}` | Update release notes and tags |
| <M>GET</M> | `/api/v3/builds/{id}/download` | Get pre-signed download URL |
| <M>DELETE</M> | `/api/v3/builds/{id}` | Delete a build (admin) |
| <M>POST</M> | `/api/v3/builds/{id}/copy` | Duplicate a build within the same app (references the same file) |
| <M>POST</M> | `/api/v3/builds/{id}/notify-testers` | Email the new-build notification to every tester assigned to the app |

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

### Audit Logs

| Method | Endpoint | Description |
| --- | --- | --- |
| <M>GET</M> | `/api/v3/audits` | List audit logs (paginated, filterable by action/search/date, admin) |
| <M>GET</M> | `/api/v3/audits/actions` | List distinct audit action types (admin) |

:::info
Migrating from TestFairy? See the [Legacy API (v1)](/app-distribution/developer/legacy-api-v1) docs — your existing CI/CD scripts will work without changes.
:::
