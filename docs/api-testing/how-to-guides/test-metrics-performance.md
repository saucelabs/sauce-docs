---
id: test-metrics-performance
title: How to test your metrics
sidebar_label: Testing Metrics / Performance
description: "How you can test your metrics using Sauce Labs API Testing"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

An HTTP response is made of a payload (what you are mainly interested in), but also contains contextual information. Using Sauce Labs API Testing you can also deal with the whole response envelope.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Overview

When you're making an HTTP request in the composer, you're providing a variable name. That variable will host the entire response payload. So let's say "payload" is the name of that variable. When the operation completes, another variable called `<variable_name>_response` is also created. 

Therefore various pieces of information such as HTTP header and metrics are contained in the variable `payload_response`.

So by referencing the `payload_response.statusCode` expression you can access the status code. For example, if you want to run a branch of code when the status code is `400`, here's how you do it:

<img src={useBaseUrl('img/api-fortress/2022/03/newStatusCode.png')} alt="statusCode.png"/> 

You can have multiple 'IF' conditions for checking all the possible status codes you need to check. Very useful for creating positive and negative tests.

<img src={useBaseUrl('img/api-fortress/2022/03/multiStatusCodes.png')} alt="multiStatusCodes.png"/>

Headers are also a big part of the response.

Let's say you want to check that a resource shouldn't be cached:

<img src={useBaseUrl('img/api-fortress/2022/03/response_headers.png')} alt="response_headers.png"/>

Furthermore, you can have the performance of the call verified as well.


## Performance Metrics

You can create specific assertions to verify performance metrics.

Here is an example using the CODE VIEW of the code. Please note that _overall_ refers to fetch and latency combined.

```html
<assert-less expression="payload_response.metrics.latency" value="350" type="integer"/>

<assert-less expression="payload_response.metrics.fetch" value="350" type="integer"/>

<assert-less expression="payload_response.metrics.overall" value="550" type="integer"/>
```

Here is what it looks like in the VISUAL view using the Assert-Less component.

<img src={useBaseUrl('img/api-fortress/2022/03/payload_metrics.png')} alt="payload_metrics.png"/>

:::note
Latency is defined as time to first byte. Fetch is the total download time of the payload.
:::

## Improving Your Metrics

The performance of the API can be mission critical in some cases, and cataloging metrics can be as important as collecting them.

The classic approach of creating big tables of HTTP hits with the actual URL being called and its performance is certainly accurate but far from being easy to review because URLs contain variables and hardly represent what the action was about.

Sauce Labs API Testing, as a default, works in this "classic" way, but gives you to possibility to change the "footprint" of requests, based on your organization needs.

Consider a scenario where a route has a parameter in it. Let's take a look at an example:

```http request
http://www.whereever.com/[id]/details
```
Each individual rest run for this route will produce a new line in the metrics view:

```http request
http://www.whereever.com/1/details  
http://www.whereever.com/2/details  
http://www.whereever.com/3/details  
http://www.whereever.com/4/details
...  
```
To produce a single endpoint for reporting from each one of these calls, you can use what we call a 'footprint.'

How is this accomplished? To reconfigure the _footprint_ you need to add, in the test, a *Config* component to the I/O component as seen below:  

<img src={useBaseUrl('img/api-fortress/2022/03/config_component.png')} alt="config_component.png" />

The Config component has two fields:  
* **Name**: The name you want to assign. In this case, you **MUST** to enter _footprint_
* **Value**: The value for the configuration component

Example:

To set up a _footprint_, you must enter the same URL that's in the I/O Component. Any parameterized portion of the URL must be wrapped in square brackets.

Based upon our example, the value in this case would be:

```http request
http://www.wherever.com/whatever/[id]/details  
```

For each endpoint you can use more square brackets, one for each variable that could assume multiple values.  

For example:

```http request
http://www.whereever.com/[whatever]/[id]/details/[colors]/whatever
```

When you write the value of the config, for the 'static' part of the endpoint, you can also call a variable as in any I/O operation.  

Example:

```js
${protocol}/${domain}/[whatever]/[id]/details/[colors]/whatever
```

is valid syntax.

And this is just one of the approaches. You're virtually free to write the footprints that best fit your needs.
