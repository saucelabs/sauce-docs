---
id: io-components
title: "I/O Components"
sidebar_label: Overview
keywords:
    - api-testing
    - io-components
    - delete
    - get
    - post
    - put
    - patch
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The I/O operations you can do are: `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

## Overview

From the composer, choose 'Add Component' and then choose the type of operation you want to do.

<img src={useBaseUrl('img/api-fortress/2020/11/compsAvail.jpg')} alt="compsAvail.jpg"/>

Once done, you will have a form to fill up:

<img src={useBaseUrl('img/api-fortress/2020/11/Request-1024x281.jpg')} alt="Request-1024x281.jpg"/>

_**Parameters:**_

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Url | Url | Yes |
| Variable | String | Yes |
| Expect | String | No |
| Mode | 'json','xml', 'html','text' | Yes |
| Params | String | No |

**Url:** the url of the resource you want to test. It could be the full url of the resource or a string with variables using the $. (i.e. 'https://domain/resourcename' or 'https://${domain}${endpoint}')

**Variable**: the name of the variable that contains the response. It will be the name you will refer during the test.

**Expect**: it is an optional field and needs to be filled only if the expected behavior differs from a positive response (i.e. 404,500 vs. 200,201 etc.). _This is useful when looking to test negative responses and validate error messages._  
  
Possible values are **`<statusCode>|VALID`** or **`<statusCode>|INVALID`**. `VALID` means the payload type is the one selected in the "mode" field (JSON,XML), while `INVALID` means the opposite. Some examples:

- `404|VALID` : 404 is expected with valid payload
- `422|VALID` : 422 is expected with valid payload
- `500|INVALID` : 500 is expected with invalid payload

Multiple status codes can be expected by adding them all (i.e. `200|302|400|500|VALID`)

**Mode**: it's the type of the response you want to test.

**Params**: the optional list of params you want to add to the query string. To do so, tap on 'Add parameter'. The params can either be a String value (in that case, the value will always be the same for all the requests; to do so, just put the value in the related field and choose 'String value' from the drop down menu) or a Variable (in that case the value will be taken dynamically and could changed from time to time; to do so, put the name of the variable inside the field and choose 'Variable' from the drop down menu).

<img src={useBaseUrl('img/api-fortress/2020/11/requestWithParams-1024x485.jpg')} alt="requestWithParams-1024x485.jpg"/>

Using the above example: let's say that _varName_ is defined as a boolean value so it can be either 'true' or 'false', in that case, there will be two requests; the first one will be a `GET` request to:

```http request
https://mydomain/endpoint?firstParam=paramValue&secondParam=true 
```

parsing it as `json` and saving it in the `payload` variable; the second one, will be a `GET` request to: 

```http request
https://mydomain/endpoint?firstParam=paramValue&secondParam=false
```

parsing it as 'json' and saving it in the 'payload' variable.

When all things are set up, you can confirm it by tapping on the 'tick' icon in the top right corner. After that, if you need to add headers, params or a body to the request you can do it by selecting the request and then tapping on the 'Add component': all the available components for each operation will be visible.

<img src={useBaseUrl('img/api-fortress/2020/11/subComps.jpg')} alt="subComps.jpg"/>

## Config

<img src={useBaseUrl('img/api-fortress/2020/11/config-1024x152.jpg')} alt="config-1024x152.jpg"/>

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Name | String | Yes |
| Value | String or Variable | Yes |


## Header

<img src={useBaseUrl('img/api-fortress/2020/11/headerComponent-1024x150.jpg')} alt="headerComponent-1024x150.jpg"/>

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Name | String | Yes |
| Value | String or Variable | Yes |

## Post Param/Put Param/Patch Param/Delete Param

<img src={useBaseUrl('img/api-fortress/2020/11/PostPutPatchParam-1024x140.jpg')} alt="PostPutPatchParam-1024x140.jpg"/>

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Name | String | Yes |
| Value | String or Variable | Yes |



## Post Body/Put Body/Patch Body/Delete Body

<img src={useBaseUrl('img/api-fortress/2020/11/PostPutPatchBody-1024x205.jpg')} alt="PostPutPatchBody-1024x205.jpg"/>

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Content-Type | 'application/json', 'text/plain', 'application/x-www-form-urlencoded','text/xml' | Yes |
| Content | String | No |
