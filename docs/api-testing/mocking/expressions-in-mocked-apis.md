---
id: expressions-in-mocked-apis
title: Expressions in Mocked APIs
sidebar_label: Expressions in Mocked APIs
keywords:
    - api-testing
    - mocking
    - servicevirtualization
    - expressions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/api-fortress/2020/01/Screen-Shot-2020-01-28-at-11.36.48-AM.png')} alt="screeenshot"/>

The expression field in mocking can evaluate multiple fields:

## Evaluate a Query

To evaluate query or post parameters use the following syntax:  

```js
request.params[parameter_name]=="parameter_value"
```

## Evaluate a Header

To evaluate a header use the following syntax:  

```js
request.headers[‘header_name’]=="header_value"
```

## Multiple Queries

You can string multiple queries together using standard Groovy expression language like below:

**AND:**

```js
request.params[parameter_name]=="parameter_value"&&request.params[parameter_name]=="parameter_value"
```

**OR:** 

```js
request.headers[‘header_name’]=="header_value"||request.headers[‘header_name’]=="header_value"
```

## Evaluate a POST body

To evaluate a POST body use the following syntax (this only works with JSON, so content type must be set to `application/json`):  

```
request.payload.”left_side_JSON”==”right_side_JSON”
```

## Evaluate the URL

You can also evaluate parts of the mocked url itself, if your mocked URL is `https://m1-test.apif.apifortress.com/api/users/info`

Starting after the `".com"` you have `“api”=0`, `“users”=1`, `“info”=2`

Using the following syntax you can evaluate parts of the URL:  

```js
request.pattern[1]==”users”
```

## Use Wildcards

The url can use wildcards like so:  

```http request
https://m1-test.apif.apifortress.com/api/users/\[a-zA-Z0-9\]\*
```

Which means the last part of the URL can be any string containing a lowercase, uppercase, or number. Then using the `“request.pattern\[2\]”` you can evaluate the last part.

:::note
Any manipulation needed in the expression field can be done using Groovy language.
:::