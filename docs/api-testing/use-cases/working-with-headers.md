---
id: working-with-headers
title: Working With the Header (statusCode, metrics)
sidebar_label: Working with the Headers
description: How to use the response header in your tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';

An HTTP response is made of a payload but also contains contextual information. Using API Testing you can also deal with the whole response envelope.
When you're making an HTTP request in the composer, you're providing a variable name. The variable will host the entire response payload. When the operation completes, another variable called `<variable_name>_response` is also created. Therefore various pieces of information such as HTTP header and metrics are contained in that variable.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Retrieving the statusCode

Let's say `payload` is the name of the variable that contains the entire response payload.
By referencing the `payload_response.statusCode` expression you can access the status code. This can be useful not only to check that a specific status code has been returned in your test but also to execute your tests for different status codes.

You can also create positive and negative tests by adding multiple `if` conditions to check each possible status code. For example, if you want to check the response payload when the status codes are `200`, `400`, and `401`, here's how to do it:

<img src={useBaseUrl('/img/api-testing/multi-if-cond.webp')} alt="Using multiple if conditions" width="600"/>

In Code view, it looks like this:

```yaml
- id: if
  children:
    - id: comment
      text: Add here the assertions to validate the response payload for statusCode ==
        "200"
  expression: payload_response.statusCode == "200"
- id: if
  children:
    - id: comment
      text: Add here the assertions to validate the response payload for statusCode ==
        "400"
  expression: payload_response.statusCode == "400"
- id: if
  children:
    - id: comment
      text: Add here the assertions to validate the response payload for statusCode ==
        "401"
  expression: payload_response.statusCode == "401"
```

## Retrieving the Header

Headers are also a big part of the response.

For example, you can retrieve the `content-type` using this expression: `payload_response.headers['content-type']`. You might want to check that the content type is the expected one so a proper assertion could be the following:

<img src={useBaseUrl('/img/api-testing/content-type.png')} alt="assertion for content-type" width="600"/>

```yaml
- id: assert-equals
  expression: payload_response.headers['content-type']
  value: application/json; charset=utf-8
```

You might want to also check if the response is cached, under what conditions and for how long. For this check you can use `payload_response.headers['cache-control']`.

## Retrieving the Metrics

Another piece of information that you might want to check are the performance metrics. You can create specific assertions to verify performance metrics.

The metrics object consists of three values as shown below:

```json
"metrics": {
  "latency": 310,
  "fetch": 1,
  "overall": 460
}
```

- `latency` is the time to the first byte.
- `fetch` is the total download time of the payload.
- `overall` is fetch and latency combined.

Using the values you can write assertions to verify that the values are below a specific amount of time like the below example in Code view:

```yaml
- id: assert-less
  expression: payload_response.metrics.latency
  value: 350
- id: assert-less
  expression: payload_response.metrics.fetch
  value: 350
- id: assert-less
  expression: payload_response.metrics.overall
  value: 450
```

The following shows the `overall` example in Visual view:

<img src={useBaseUrl('/img/api-testing/metrics-assert-less-visual.webp')} alt="An Assert-Less component in Visual view" width="600"/>

### Improving Metrics

The performance of the API can be mission-critical in some cases, and cataloging metrics can be as important as collecting them.

The classic approach of creating big tables of HTTP hits with the actual URL being called (and its performance) is certainly accurate, but it's far from being easy to review because URLs contain variables and hardly represent what the action was about.

Sauce Labs API Testing, as a default, works in this classic way, but also gives you the ability to change the footprint of requests based on your organization's needs.

#### Example

The following example includes a route with a parameter:

```http request
http://www.whereever.com/[id]/details
```

Each `REST` run for this route will produce a new line in the metrics view:

```http request
http://www.whereever.com/1/details
http://www.whereever.com/2/details
http://www.whereever.com/3/details
http://www.whereever.com/4/details
...
```

To produce a single endpoint for reporting from each one of these calls, you can use a [footprint](/api-testing/composer/io-components/#config).
