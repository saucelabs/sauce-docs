---
id: mock-recording-with-kong
title: "Mock Recording with Kong (Deprecated)"
sidebar_label: "Mock Recording with Kong (Deprecated)"
keywords:
    - api-testing
    - mocking
    - servicevirtualization
    - kong
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning
The latest version of Kong is not supported by API Fortress. However, we have now released our own Microgateway that you can use to do mock recording as well as many other features! Click here to download [AFtheM](https://github.com/apifortress/afthem) and learn more about the [features](https://github.com/apifortress/afthem/tree/master/doc) here.  
:::

## Introduction

Mock recording allows an API Fortress user to pass API requests and responses directly into the API Fortress mocking platform. This largely eliminates the need to manually create mock response cases. To do so, we're making use of the [Kong Microgateway](https://konghq.com).

The process is divided into a few parts. Here's how we're going to approach it:

1. First, we're going to turn on the Kong proxy server.
2. Next, we're going to create a proxied endpoint.
3. Finally, we're going to push that proxied endpoint into API Fortress mocking.

A few of these steps are fairly technical, but we're going to be as explicit as possible with the documentation and as always, if you need assistance, feel free to reach out to [support@apifortress.com](mailto:support@apifortress.com).

## What We Need

Let's make sure we have everything we need:

1. An updated version of the API Fortress `core/docker-compose.yml` which includes the Kong section at the end. The bottom of your docker-compose should look like this:

```yaml
#APIFORTRESS KONG
  apifortress-kong:
    image: apifortress/kong
    hostname: kong.apifortress
  networks:
    apifortress:
      aliases:
      - kong.apifortress
  environment:
    KONG\_DATABASE: postgres
    KONG\_PG\_HOST: postgres.apifortress
    KONG\_PG\_USER: \*\*\*\*\*\*\*\*
    KONG\_PG\_PASSWORD: \*\*\*\*\*\*\*\*
    KONG\_ADMIN\_LISTEN: 0.0.0.0:8001
    KONG\_PLUGINS: fortress-http-log,file-log-extended,request-transformer,upstream-replace
    KONG\_PROXY\_ERROR\_LOG: /dev/stdout
  ports:
    - 8000:8000
    - 8001:8001
```

2. The initialization script, `init_kong.sh`

3. The start script, `start\_kong.sh`

If we have all of the above, perfect! We're ready to start. If not, feel free to reach out to [support@apifortress.com](mailto:support@apifortress.com) to let us know what you need!

## Starting Kong

First, we need to ensure that at the API Fortress Postgres instance is running. Execute the following command from the command line and ensure that it is running:

```
sudo docker ps
```

The image below is the entry that you're looking for:

<img src={useBaseUrl('img/api-fortress/2018/11/Screen-Shot-2018-11-08-at-10.05.35-AM.png')} alt="screeenshot"/>

Next, we need to initialize Kong. This is done by running the previously mentioned script, `_init_kong.sh_`. 

Issue the following command from the command line:

```
sudo ./init_kong.sh
```
Once Kong has finished initializing, we can proceed.

Next, we need to start the Kong container itself. We do so by issuing the following command:

```
sudo docker-compose up -d apifortress-kong
```
Once the container has finished starting, we can do a

```
sudo docker ps
```

To view the currently running containers and verify that we started it successfully.

<img src={useBaseUrl('img/api-fortress/2018/11/Screen-Shot-2018-11-07-at-2.09.31-PM.png')} alt="screeenshot"/>

Finally, we can verify that the proxy is up and running by issuing the following cURL command from the command line, or an identically structured HTTP request from the HTTP client of your choice (note: replace the 'apif.example.com' component with the corresponding part of your instances URL):

```
curl -v http://apif.example.com:8001
```

A positive response from this route indicates that the proxy server is up and running. Congratulations! You now have a live proxy server!

Our last step in the setup phase is creating an API Fortress API key. The gif below shows the process. 

<img src={useBaseUrl('img/api-fortress/2018/11/make_api_key.gif')} alt="make_api_key.gif"/>

1. Click the gear in the upper right corner of the view
2. Click "API Keys" in the navigation bar on the left
3. Click "+API Key"
4. Name and save your API Key. It's helpful at this point to copy the key and secret to an easy to reach location, as we'll need it in later steps.

[NEXT - Step 2: Proxying a Route](https://apifortress.com/doc/proxying-a-route/)

## Proxying a Route

Alright! The proxy is up. Let's learn how to proxy a route.

:::note First, an important note!
It is ideal for every subdomain mentioned herein to have a DNS entry pointed at the server running API Fortress. Our suggestion is, wherever possible, to introduce a wildcard entry. That is to say, if API Fortress is running at **'apif.example.com'**, the wildcard entry of **'\*.apif.example.com'** would point at the same IP address and allow every prepended domain to reach the same server.
:::

In order to proxy an API route, we need to send the following request to the proxy via HTTP (again, this can be done via cURL or your HTTP client of choice):

```
curl -v -XPOST -d "name=apif" -d "upstream_url=http://demoapi.apifortress.com" -d "hosts=proxy-demoapi.apif.example.com" apif.example.com:8001/apis
```

### Route Details

* `name`: the name of the API profile 
* `upstream_url`: the origin URL (the destination that we're passing through the proxy on our way to)
* `hosts`: A list of hosts that will trigger this API profile (the URL(s) that will trigger this proxied response)

So, we're sending a post to `apif.example.com:8001/apis` with headers defining a `name`, an `upstream_url` and `hosts`. The result is a profile of a proxied API. 

* The `name` of the profile is `"apif"`. 
* The `upstream_url` is `"http://demoapi.apifortress.com"`
* The `host` for the profile is `"proxy-demoapi.apif.example.com"`

Naturally, when you do this yourself, you'll be replacing `"apif.example.com"` with the URL of your API Fortress instance.

### Test the Route

The last step in the setup phase would be to test the actual proxied route itself. To do so, execute the following command in the command line or send it with the HTTP client of your choice:

```
curl -v -H 'key:ABC123' http://proxy-demoapi.apif.example.com:8000/api/retail/product
```

Here, the 'header:value' string would be replaced with any required header key/value pairs that you need to submit. The URL would be replaced with the URL previously defined as the host, appended with port 8000, and then followed by any necessary routing. Our expected response should match the response of the endpoint that we're proxying, provided we're passing the correct headers.

## Recording a Mock Endpoint

:::note 
As with creating the actual proxied endpoints, creating recorded mocks requires a modification of the DNS. Adding a wildcard entry for the mock server (`*.demoapi-mocks.apif.example.com`) will allow these requests to be properly routed once the mocks are recorded.
:::

### Activate Mock Recording:

The next step is to activate the `fotress-http-log` plugin for Kong. In order to do so, we must format and send the following request, either through cURL or the HTTP client of your choice:

```
curl -v -XPOST -d "name=fortress-http-log" -d "config.disable_on_header=x-mock" -d "config.http_endpoint=http://dashboard.apifortress:8080/app/api/rest/v3/1/mocks/push/raw" -d "config.api_key=yourAPIKey" -d "config.secret=yourAPISecret" -d "config.mock_domain=demoapi-mocks.apif.example.com" apif.example.com:8001/apis/3389fcee-3ada-4ed6-957b-082085601111/plugins
```

Another big HTTP request! Let's unpack the components therein.

Initially, we're passing a number of url-encoded key/value pairs in the POST body (commonly known as post parameters). These values are largely static.

- `config.api_key`: The _API Key_ value created in [step 1](#starting-kong).
- `config.secret`: The _API Secret_ value created in [step 1](#starting-kong).
- `config.mock_domain`: The mock domain you wish these routes to be appended to in API Fortress Mocking. _It does not need to already exist._ 

The URL we're actually sending the request to:

```
apif.example.com:8001/apis/3389fcee-3ada-4ed6-957b-082085601111/plugins
```

needs to have the first part of the URL (`apif.example.com`) replaced with the URL of your self-hosted/on-premises API Fortress instance.

Once this request has successfully been sent, the fortress-http-log plugin for Kong will be active, and mock recording will be enabled!

### Record an Endpoint

Record a mock by calling the proxied API. Issue the following call from the command line or from the HTTP client of your choosing:

```
curl -v -H 'key:ABC123' http://proxy-demoapi.apif.example.com:8000/api/retail/product
```

In this case, we'd be recording the `/api/retail/product` route of our proxied API to the mock domain we configured in the first call (`demoapi-mocks.apif.example.com`). As always, note that the proxy route in this call must be replaced with the proxy route that you created. Also, note that the port in this case is `8000` rather than `8001`.

### Query the Recorded Mock API

Finally, we can verify the new mock route in two primary ways. First, we should now see it in the Mocking interface in API Fortress. Second, we can query the route directly via cURL or the HTTP client of your choosing:

```
curl -v -H 'x-mock:true' http://proxy-demoapi.apif.example.com:8000/api/retail/product
```

We should receive the same expected response to this call that we receive when polling either the actual or the proxied API. Note that in this case, the previously required header is no longer explicitly required, and that it's been replaced with a header that requests the mock endpoint specifically.
