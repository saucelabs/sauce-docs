---
id: api
title: About the Sauce REST APIs
sidebar_label: Getting Started
description: Introduction to basic principles of authentication, request/response structure, response codes and errors.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs exposes a set of REST API endpoints that let you perform operations, manage accounts, and retrieve data programmatically so you can use the Sauce platform in the way that best suits your business logic.

:::tip
You can check the current accessibility of any Sauce Labs system on the [Sauce Labs Systems Status](https://status.saucelabs.com/) page.
:::

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- [Username and access key](https://app.saucelabs.com/user-settings) of your Sauce Labs user account.
  - Alternatively, you can use the credentials of a [service account](/basics/acct-team-mgmt/managing-service-accounts). The username and access key for a service account are provided during [its creation](/basics/acct-team-mgmt/managing-service-accounts/#creating-a-service-account).

## Accessing the APIs

The Sauce Labs APIs are REST-based. Each endpoint is structured as a resource-oriented URL that accepts inline query parameters and form-encoded request bodies, and returns JSON-encoded responses.

Each endpoint is formed by a `{base-url}` prefix (which depends on the data-center associated with your Sauce Labs account) plus the version for the given method. The following table provides the base URLs for each data center.

| Data Center | API Base URL                              |
| :---------- | :---------------------------------------- |
| US West     | `https://api.us-west-1.saucelabs.com/`    |
| US East     | `https://api.us-east-4.saucelabs.com/`    |
| Europe      | `https://api.eu-central-1.saucelabs.com/` |

### Authentication

:::tip
The request examples throughout the API documentation utilize variables in place of Sauce Labs authentication credentials. Consider [setting your credentials as environment variables](/basics/environment-variables/) so that you can simply copy, paste, and run the code examples rather than manually passing your credentials for each call.
:::

The Sauce Labs API uses API keys to authenticate requests. You can view and manage your API key under your [Sauce Labs User Settings](https://app.saucelabs.com/user-settings).

Alternatively, you can use the username and access key of a [service account](/basics/acct-team-mgmt/managing-service-accounts) to authenticate API requests. Service account credentials are generated during [account creation](/basics/acct-team-mgmt/managing-service-accounts/#creating-a-service-account).

Authentication is performed via [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). PRovide your username as the basic username and your API key as the password. All requests must use HTTPS. Calls made over HTTP or without proper authentication will fail.

You can provide your authentication credentials as inline parameters of your request or using a Basic Header.

```bash title="Inline Authenticated Request Example"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/teams'
```

```bash title="Header Authenticated Request Example"
curl -L -X GET 'https://api.us-west-1.saucelabs.com/team-management/v1/users/' \
-u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY
```

### Versioning

The API is versioned via the URL, and different endpoints may be at different stages of release, The currently published version of each endpoint is visible in its URL, for example:

- `https://api.us-west-1.saucelabs.com/rest/v1/{username}/jobs`
- `https://api.us-west-1.saucelabs.com/v2/performance/metrics/`

### Methods

Unspecified method requests default to `GET`. All other supported request types (`PUT`; `POST`; `DELETE`: `PATCH`) require setting the `Content-Type` header to `application/json`.

## Status Codes

Sauce Labs uses conventional HTTP response codes to indicate the success or failure of an API request. In general, status codes in the `2xx` range indicate success, `4xx` indicate client-errors (e.g., invalid request), and `5xx` indicate server-errors at Sauce Labs (which are rare). The following table provides a summary of response codes returned by the APIs.

| Code                          | Description                                                                                                                                                                                                                                                                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `200` - OK                    | The request was processed successfully.                                                                                                                                                                                                                                                                                                 |
| `201` - Created               | The request has been fulfilled, resulting in the creation of a new resource. Typically returned for `POST`, `PUT`, or `PATCH` requests that pass data values for the purpose of creating or updating records.                                                                                                                           |
| `400` - Bad Request           | The request was not acceptable, often due to missing or improperly formatted parameters. This code may be accompanied by additional information in the form of a body payload or a message attribute of the response code.                                                                                                              |
| `401` - Unauthorized          | The authentication credentials were missing or not valid.                                                                                                                                                                                                                                                                               |
| `403` - Forbidden             | The authenticated user does not have permission to perform the request.                                                                                                                                                                                                                                                                 |
| `404` - Not Found             | The requested resource does not exist. This can refer to the endpoint itself (check for typos in the request URL), or the requested data (the job ID does not match any existing records, for example). This code may be accompanied by additional information in the form of a body payload or message attribute of the response code. |
| `429` - Too many requests     | The number of requests has exceeded the [rate limit](#rate-limits) for the API.                                                                                                                                                                                                                                                         |
| `500` - Internal Server Error | The Sauce Labs server was not responsive.                                                                                                                                                                                                                                                                                               |

Following are some sample error responses that include additional detail.

```html title="404 Typo in Request URL Error Response"
<!doctype html>
<html lang="en">

<head>
	<title>Not Found</title>
</head>

<body>
	<h1>Not Found</h1>
	<p>The requested resource was not found on this server.</p>
</body>

</html>
```

```json title="404 User ID Not Found Error Response"
{
"detail": "Not found."
}
```

```json title="400 Missing Required Parameter Error Response"
{
"verify_password": ["This field is required."]
}
```

## Rate Limits

The Sauce Labs REST API imposes rate limits on some endpoints to prevent over-utilization.

For example:

- Incoming authenticated API requests have rate limits imposed against the individual account.
- Incoming unauthenticated API requests have rate limits imposed against the IP addresses.

If you exceed the rate limit, requests will return a [429 response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429#:~:text=The%20HTTP%20429%20Too%20Many,before%20making%20a%20new%20request), indicating that the allowable number of requests has been exceeded.

### Rate Limit Breakdown

| REST API Endpoint                     |                     Rate Limit                     |      Authenticated |
| :------------------------------------ | :------------------------------------------------: | -----------------: |
| All authenticated request endpoints   | 10 requests per second, or 3,500 requests per hour | :heavy_check_mark: |
| All unauthenticated request endpoints |               2 requests per minute                |                    |

## JSON Response Formatting

The request examples throughout the API documentation are appended with `| json_pp` as a convenience to return the response in a more readable format, so you don’t need to install additional tools.

You can remove the `| json_pp` reference from your requests to have responses returned as raw JSON, or you can specify a different syntax formatter of your choosing, such as [JQ](https://stedolan.github.io/jq/).
