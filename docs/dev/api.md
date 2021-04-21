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


## Accessing the APIs

The Sauce Labs APIs are organized around REST and each endpoint is structured as a resource-oriented URL that accepts inline query parameters and form-encoded request bodies, then returns JSON-encoded responses.

Each endpoint is constructed from a `{base-url}` prefix that is based on the data center associated with the Sauce Labs account for which the request is relevant, plus the latests version for the given method. The following table provide the base URLs for each data center.

|Data Center|API Base URL|
|---|-------|
|None|`https://saucelabs.com/`|
|US|`https://api.us-west-1.saucelabs.com/`|
|Europe|`https://api.eu-central-1.saucelabs.com/`|

### Versioning

The API is versioned by URL, each of which may be in a different stage of release. The currently published version of each endpoint is reflected in the URL itself, as demonstrated in the following two endpoints:

* `https://api.us-west-1.saucelabs.com/rest/v1.2/users/<USERNAME>/concurrency`
* `https://api.us-west-1.saucelabs.com/rest/v1/users/<USERNAME>/activity`

### Methods

Unspecified method requests default to `GET`. All other supported request types (`PUT`; `POST`; `DELETE`: `PATCH`) require setting the `Content-Type` header to `application/json`.

### Authentication

The Sauce Labs REST API uses [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). You can pass the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` authentication credentials as inline parameters in the URL, or include an Authorization Header to the request.

The following pseudocode examples illustrate how to authenticate the Sauce Labs REST API:
<Tabs
  defaultValue="curl"
  values={[
    {label: 'cURL', value: 'curl'},
    {label: 'Java', value: 'java'},
    {label: 'C#', value: 'csharp'},
    {label: 'node.js', value: 'node'},
    {label: 'Python', value: 'python'},
    {label: 'Ruby', value: 'ruby'},
  ]}>

<TabItem value="curl">

```curl title="Inline Parameter Authentication"
curl -XGET 'https://<SAUCE_USERNAME>:<SAUCE_ACCESS_KEY>@api.us-west-1.saucelabs.com/team-management/v1/users'
```

```curl title="Auth Header Authentication"
curl -L -X GET 'https://api.us-west-1.saucelabs.com/team-management/v1/users/' -H 'Authorization: Basic' -U <SAUCE_USERNAME> -K <SAUCE_ACCESS_KEY>
```

</TabItem>
<TabItem value="java">

```java
String username = System.getenv("SAUCE_USERNAME");
String accessKey = System.getenv("SAUCE_ACCESS_KEY");
String statusURL = "https://saucelabs.com/rest/v1/info/status"

CredentialsProvider provider = new BasicCredentialsProvider();
UsernamePasswordCredentials credentials
 = new UsernamePasswordCredentials(username, accessKey);
provider.setCredentials(AuthScope.ANY, credentials);

HttpClient client = HttpClientBuilder.create()
  .setDefaultCredentialsProvider(provider)
  .build();

HttpResponse response = client.execute()
  new HttpGet(statusURL);
int statusCode = response.getStatusLine()
  .getStatusCode();

assertThat(statusCode, equalTo(HttpStatus.SC_OK));
```

</TabItem>
<TabItem value="csharp">

```csharp title=".NET 4.5 HTTPClient Example"
static async void HTTP_GET() {
    var SAUCEURL = "https://saucelabs.com/rest/v1/info/status";
    var sauceUsername = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
    var sauceAccessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");

    Console.WriteLine("GET: + " + SAUCEURL);

    HttpClient client = new HttpClient();

    var byteArray = Encoding.ASCII.GetBytes(sauceUsername + ":" + sauceAcccessKey);
    client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

    HttpResponseMessage response = await client.GetAsync(SAUCEURL);
    Console.WriteLine("Response StatusCode: " + (int)response.StatusCode);
}
```

</TabItem>
<TabItem value="node">

```javascript
let username = process.env.SAUCE_USERNAME;
let accessKey = process.env.SAUCE_ACCESS_KEY;

let sauceURL = 'https://' + username + ':' + accessKey + '@saucelabs.com/rest/v1/info/status';

const axios = require("axios");
const testAPI = async () => {
    try {
        response = await axios.get(sauceURL);
        console.log(response.data);
    }
    catch (error)
    {
        console.log(error);
    }
};
```

</TabItem>
<TabItem value="python">

```python
from requests.auth import HTTPBasicAuth
import os

sauce_username = os.environ["SAUCE_USERNAME"]
sauce_access_key = os.environ["SAUCE_ACCESS_KEY"]
sauce_url = "https://saucelabs.com/rest/v1/info/status"

requests.get(sauce_url, auth=HTTPBasicAuth(sauce_username, sauce_access_key))
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'net/http'
require 'net/https'
require 'uri'

sauce_username = ENV['SAUCE_USERNAME']
sauce_access_key = ENV['SAUCE_ACCESS_KEY']

sauce_uri = URI('https://saucelabs.com/rest/v1/info/status')

Net::HTTP.start(uri.host, uri.port,
    :use_ssl => uri.scheme == 'https',
    :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|

    request = Net::HTTP::Get.new uri.request_uri
    request.basic_auth sauce_username, sauce_access_key

    response = http.request request # Net::HTTPResponse object

    puts response
    puts response.body
end
```

</TabItem>
</Tabs>

## Rate Limits

The Sauce Labs REST API places rate limits on some endpoints in order to prevent over-utilization.

For example:

* Incoming authenticated API requests have rate limits imposed against the individual user accounts.
* Incoming unauthenticated API requests have rate limits imposed against the IP addresses.

Requests received after the rate limit is reached return a [429 response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429#:~:text=The%20HTTP%20429%20Too%20Many,before%20making%20a%20new%20request) indicating that the number of allowable requests has been exceeded.

### Rate Limit Breakdown

| REST API Endpoint | Rate Limit | Authenticated |
| :-------------------------- | :---:| ---:|
| `/rest/v1/*/activity` | 3 requests per second, or 3,500 requests per hour | :heavy_check_mark: |
| All other authenticated request endpoints | 10 requests per second, or 3,500 requests per hour | :heavy_check_mark: |
| All unauthenticated request endpoints | 2 requests per minute ||

For more information about rate limiting check out this blog post: [Announcing New Rest API Usage Limits](https://saucelabs.com/blog/announcing-new-rest-api-rate-limits).
