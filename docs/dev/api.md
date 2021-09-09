---
id: api
title: About the Sauce REST APIs
sidebar_label: Getting Started
description: Introduction to basic principles of authentication, request/response structure, response codes and errors.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Sauce Labs exposes a set of REST API endpoints that allow you to perform operations, manage accounts, and retrieve data programmatically so you can use the Sauce platform in the way that best suits your business logic.

:::tip
You can check the current accessibility of any Sauce Labs system on the [Sauce Labs System Status](https://status.saucelabs.com/) page.
:::


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)


## Accessing the APIs

The Sauce Labs APIs are organized around REST and each endpoint is structured as a resource-oriented URL that accepts inline query parameters and form-encoded request bodies, then returns JSON-encoded responses.

Each endpoint is constructed from a `{base-url}` prefix that is based on the data center associated with the Sauce Labs account for which the request is relevant, plus the latests version for the given method. The following table provide the base URLs for each data center.

|Data Center|API Base URL|
|---|-------|
|US|`https://api.us-west-1.saucelabs.com/`|
|Europe|`https://api.eu-central-1.saucelabs.com/`|

### Authentication

The Sauce Labs API uses API keys to authenticate requests. You can view and manage your API key in the Sauce Labs [User Settings](https://app.saucelabs.com/user-settings) page.

Authentication to the API is performed via [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). Provide your username and API key as the basic auth username and password values, respectively. All requests must be made over HTTPS. Calls made over HTTP or without proper authentication will fail.

You can provide your authentication credentials as inline parameters of your request or using a Basic Header.

```curl "Inline Authenticated Request Example"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/team-management/v1/teams'
```

```curl "Header Authenticated Request Example"
curl -L -X GET 'https://api.us-west-1.saucelabs.com/team-management/v1/users/' -H 'Authorization: Basic' -U <SAUCE_USERNAME> -K <SAUCE_ACCESS_KEY>
```

The request examples throughout the API documentation utilize variables for the authentication credentials. Consider setting your credentials as environment variables using the following commands so you can simply copy the request samples and run them without having to manually pass your credentials for each call.

```jsx "Set Credential Environment Variables"
$ export SAUCE_USERNAME=<your.user.name>
$ export SAUCE_ACCESS_KEY=<your access key>
```


### Versioning

The API is versioned by URL, each of which may be in a different stage of release. The currently published version of each endpoint is reflected in the URL itself, as demonstrated in the following two endpoints:

* `https://api.us-west-1.saucelabs.com/rest/v1/<USERNAME>/jobs`
* `https://api.us-west-1.saucelabs.com/v2/performance/metrics/`

### Methods

Unspecified method requests default to `GET`. All other supported request types (`PUT`; `POST`; `DELETE`: `PATCH`) require setting the `Content-Type` header to `application/json`.

## Errors

Sauce Labs uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the `2xx` range indicate success, while codes in the `4xx` range indicate an error that caused the request to be denied. Codes in the `5xx` range indicate an error reaching the Sauce Labs server (which is rare). The following table provides a summary of response codes returned by the APIs.

|Code|Description|
|---|---|
|`200` - OK|The request was processed successfully. Typically returned for `GET` or `DELETE` requests that do not create or update records.|
|`201` - OK|The request was processed successfully. Typically returned for `POST`, `PUT`, or `PATCH` requests that pass data values for the purpose of creating or updating records.|
|`400` - Bad Request|The request was not acceptable, often due to missing or improperly formatted parameters. This code may be accompanied by additional information in the form of a body payload or a message attribute of the response code.|
|`401` - Unauthorized|The authentication credentials were missing or not valid.|
|`403` - Forbidden|The authenticated user does not have permission to perform the request.|
|`404` - Not Found|The requested resource does not exist. This can refer to the endpoint itself (check for typos in the request URL), or the requested data (the job ID does not match any existing records, for example). This code may be accompanied by additional information in the form of a body payload or message attribute of the response code.|
|`429` - Too many requests|The number of requests has exceeded the [rate limit](#rate limits) for the API.|
|`500` - Server Error|The Sauce Labs server was not responsive.|

Following are some sample error responses that include additional detail.

```json title="404 Typo in Request URL Error Response"
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
    "verify_password": [
        "This field is required."
    ]
}
```


## Rate Limits

The Sauce Labs REST API places rate limits on some endpoints in order to prevent over-utilization.

For example:

* Incoming authenticated API requests have rate limits imposed against the individual user accounts.
* Incoming unauthenticated API requests have rate limits imposed against the IP addresses.

Requests received after the rate limit is reached return a [429 response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429#:~:text=The%20HTTP%20429%20Too%20Many,before%20making%20a%20new%20request) indicating that the number of allowable requests has been exceeded.

### Rate Limit Breakdown

| REST API Endpoint | Rate Limit | Authenticated |
| :-------------------------- | :---:| ---:|
| All authenticated request endpoints | 10 requests per second, or 3,500 requests per hour | :heavy_check_mark: |
| All unauthenticated request endpoints | 2 requests per minute ||


## JQ Response Formatting

The request samples throughout the API documentation are appended with `| jq` in order to return the response in a more readable format. You can install JQ using NPM or Brew:

```
npm install jq
```
```
brew install jq
```

Alternatively, you can remove the `|jq` reference from your requests and the response will be returned as raw JSON.
