---
id: visual
title: Visual API Endpoints
sidebar_label: Visual
description: Reference for the Sauce Visual GraphQL endpoint, the regional image storage endpoints, and the GraphQL Explorer.
---

Use the Sauce Visual API to create builds, upload images, create snapshots, and finish builds from your own tooling. Unlike the other Sauce Labs APIs, the Visual API is a GraphQL API: you send every query and mutation to a single endpoint. Sauce Visual also stores the images you upload in regional Google Cloud Storage buckets, which you may need to allow in your firewall or proxy.

Refer to [Getting Started](/dev/api) for authentication and data center information. For a step-by-step example of a full Visual workflow, see [API Lifecycle](/visual-testing/workflows/api-lifecycle/).

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings)
- Familiarity with GraphQL queries and mutations

## GraphQL Endpoint

All Visual API operations, such as creating a build or a snapshot, go through one GraphQL endpoint. You choose the operation in the body of the request, not in the URL.

### Send a GraphQL Request

<details>
<summary><span className="api post">POST</span> <code>/v1/visual/graphql</code></summary>
<p/>

Runs a GraphQL query or mutation against the Sauce Visual API. The request body is JSON and contains the GraphQL operation, and the response is JSON.

#### Parameters

<table id="table-api">
  <tbody>
    <tr>
     <td><code>query</code></td>
     <td><p><small>| BODY | REQUIRED | STRING |</small></p><p>The GraphQL query or mutation to run.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>variables</code></td>
     <td><p><small>| BODY | OPTIONAL | OBJECT |</small></p><p>Values for the variables used in the query or mutation.</p></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
     <td><code>operationName</code></td>
     <td><p><small>| BODY | OPTIONAL | STRING |</small></p><p>The name of the operation to run, if the query contains more than one.</p></td>
    </tr>
  </tbody>
</table>

```bash title="Request Structure"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
--request POST 'https://api.us-west-1.saucelabs.com/v1/visual/graphql' \
--header 'Content-Type: application/json' \
--data '{"query": "<graphql-query>", "variables": {}}'
```

For queries and mutations you can send, see [API Lifecycle](/visual-testing/workflows/api-lifecycle/).

</details>

### Endpoint by Data Center

Send requests to the endpoint for the data center your Sauce Labs account belongs to.

| Data Center | GraphQL Endpoint |
| :--- | :--- |
| Asia South | `https://api.asia-south-2.saucelabs.com/v1/visual/graphql` |
| Europe | `https://api.eu-central-1.saucelabs.com/v1/visual/graphql` |
| US East | `https://api.us-east-4.saucelabs.com/v1/visual/graphql` |
| US West | `https://api.us-west-1.saucelabs.com/v1/visual/graphql` |

Like the other Sauce Labs APIs, the Visual API is versioned in its URL, and its current version is `v1`. See [Versioning](/dev/api#versioning).

<!-- TODO (PD-1624): Confirm with the Visual team whether /v1 is stable or whether a v2 is planned, and update this note. -->

## Image Storage Endpoints

Sauce Visual stores the images and DOM files you upload in Google Cloud Storage. When you upload an image, the `createSnapshotUpload` mutation returns a signed upload URL inside the storage bucket for your data center, and your client sends the file to that URL with a `PUT` request. If your network restricts outgoing traffic, allow the bucket for your data center so that uploads and downloads aren't blocked.

| Data Center | Storage Endpoint |
| :--- | :--- |
| Asia South | `https://storage.googleapis.com/sauce-iris-prod-asia-south2-d5ub/*` |
| Europe | `https://storage.googleapis.com/sauce-iris-prod-europe-west3-ybyc/*` |
| US East | `https://storage.googleapis.com/sauce-iris-prod-us-east4-ybyc/*` |
| US West | `https://storage.googleapis.com/sauce-iris-prod-us-west4-ybyc/*` |

The data center is part of each bucket name, using the Google Cloud region name, which differs from the Sauce Labs data center name. For example, the US West data center (`us-west-1`) stores images in the `us-west4` bucket.

:::note
The `/*` at the end of each endpoint is a wildcard that stands for any file path in the bucket. It isn't a URL that you call. Use the full pattern in your firewall or proxy allowlist, so that every file in the bucket is allowed.
:::

:::caution
Use the storage endpoint and the GraphQL endpoint for the data center your Sauce Labs account belongs to. Using another data center's endpoints can cause slower uploads or access errors.
:::

## GraphQL Explorer

The GraphQL Explorer is an interactive, in-browser tool for the Visual API. Use it to browse the schema, including the available queries, mutations, and types, read the description of each field, and run test queries before you add them to your own tooling.

To open the Explorer, go to the GraphQL endpoint for your data center in your browser, for example, `https://api.us-west-1.saucelabs.com/v1/visual/graphql`.

The Explorer requires authentication. Requests without valid Sauce Labs credentials fail with an authorization error.

<!-- TODO (PD-1624): Confirm with the Visual team how users sign in to the Explorer in the browser (for example, with their Sauce Labs username and access key), and add that step here. -->
