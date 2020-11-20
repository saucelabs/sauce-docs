---
id: api
title: API Reference Docs
sidebar_label: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the Sauce Labs REST API to help optimize and streamline automated testing for you and your team.

:::note Status Page
[status.saucelabs.com](https://status.saucelabs.com/)
:::

## Accessing the API

You can access the Sauce Labs REST API over HTTPS and use JSON encoding for request and response data.

The API is versioned by URL. The current version is `v1`, and resides under the `saucelabs.com/rest/v1/` base URL. Some `v1.1` methods appear under `saucelabs.com/rest/v1.1/`. 

All Sauce REST API methods default to `GET` requests unless specified otherwise; `PUT` and `POST` requests require the `Content-Type` header set to `application/json`.

### Authentication

The Sauce Labs REST API uses [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). In order to authenticate, either include the Sauce `username` and `accessKey` in the request URL, or add an [`Authorization` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) to the request.

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

__Authenticating with the Request URL Example__

```shell script
curl https://<SAUCE_USERNAME>:<SAUCE_ACCESS_KEY>@saucelabs.com/rest/v1/users/<SAUCE_USERNAME>
```

__Authenticating with the `Authorization` Header Example__

```shell script
curl -u <YOUR_SAUCE_USERNAME>:<YOUR_SAUCE_ACCESS_KEY> https://saucelabs.com/rest/v1/users/<YOUR_SAUCE_USERNAME>
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
 
HttpResponse response = client.execute(
  new HttpGet(statusURL);
int statusCode = response.getStatusLine()
  .getStatusCode();
 
assertThat(statusCode, equalTo(HttpStatus.SC_OK));
```

</TabItem>
<TabItem value="csharp">

__.NET 4.5 HTTPClient Example__

```csharp
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

### Rate Limits

Some endpoints of the Sauce Labs REST API have rate limits in order to prevent over-utilization.

For example:
* Incoming authenticated API requests have rate limits imposed against the individual user accounts.
* Incoming unauthenticated API requests have rate limits imposed against the IP addresses.

Once a user reaches the rate limit and exhausted the allowable amount of connections, said user the receives a [`429` response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429#:~:text=The%20HTTP%20429%20Too%20Many,before%20making%20a%20new%20request.).

#### Rate Limit Breakdown

| REST API Endpoint | Rate Limit | Authenticated |
| :-------------------------- | :---:| ---:|
| `/rest/v1/*/activity` | 3 requests per second, or 3,500 requests per hour | :heavy_check_mark: |
| All other authenticated request endpoints | 10 requests per second, or 3,500 requests per hour | :heavy_check_mark: |
| All unauthenticated request endpoints | 2 requests per minute ||

For more information about rate limiting check out this blog post: [Announcing New Rest API Usage Limits](https://saucelabs.com/blog/announcing-new-rest-api-rate-limits).

## Additional Topics

* [Account Methods](/dev/api/account.md): Browse through the Account API docs for user account information and management
* [Job Methods](/dev/api/jobs.md): Browse through the Job API docs for information regarding test job management
* [Analytics Methods](/dev/api/analytics.md): Browse the Analytics API docs to track test trends and activity
* [Performance Methods](/dev/api/performance): Browse the Performance API docs to gather front-end test performance metrics

