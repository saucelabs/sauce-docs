---
id: using-the-api
title: "Using the API (for CI/CD and More)"
sidebar_label: Using the API 
description: "A guide showing you various ways to call the API. This is useful for those that want to use the platform to run tests during continuous deployments."
keywords: 
    - cicd
    - jenkins
    - bamboo
    - microsoft tfs
    - team foundation server
    - gitlab ci/cd
    - travisci
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here is a guide showing you various ways to call the API. This is particularly useful for those that want to use the platform to run tests during continuous deployments, and who are not using our [Jenkins](https://plugins.jenkins.io) plugin.

First, you need to create the API Hook by going to the Company Settings page and clicking API Hooks section. To do this you need to be a Manager of the Company.

<img src={useBaseUrl('img/api-fortress/2017/07/companySetting.jpeg')} alt="API Hooks Section"/>

Here, click _+API Hook_ you will be prompted to choose a project. Once done, you will have the Hook URL that will give you the ability to query resources from that project. 

An example is: 

```http request
https://mastiff.apifortress.com/app/api/rest/v3/34d8mm70-c03e-267a-9fa1-90b9flsbcea2607
``` 

> __NOTE__: The above unique project hook is **`34d8mm70-c03e-267a-9fa1-90b9flsbcea2607`.** 
> 
> This is useful for later.

__Jump to a Section__

- [Unauthenticated Endpoints](#unauthenticated-endpoints)
    - [Run Tests](#test-run)
    - [Insights (Data & Information)](#insights-data--information)
- [Authenticated endpoints](#authenticated-endpoints)
    - [Authentication](#authentication)
    - [Insights (Data & Information)](#insights)
    - [Update Tests](#update-tests)
    - [Creating Tests Outside of API Fortress](#creating-tests-outside-of-api-fortress)
    - [Converting to JUnit Format](#converting-to-junit-format)


# Unauthenticated Endpoints

## Test Run

Invoking the execution of a test via the API is a key feature of API Fortress. It allows you to trigger one, or multiple, tests to run. It can also receive input variables to override those in the tests themselves. Finally, you can also send a payload to the platform to be tested against.

Optionally, for all the endpoints you can add the following query parameters:

- _`sync`_ (boolean): the test will run synchronously and return the result as the response payload.
- _`dryrun`_ (boolean): the test will run but no events or metrics will be stored.
- _`silent`_ (boolean): no alerts will be triggered by the execution of the test.

### __Basic__: Run a Test By Test ID

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/run
```

__Mock Example__:

```bash
curl -v https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/34d8mm70-c03e-267a-9fa1-90b9flsbcea2607/tests/129d32j9dksdoo23e393/run
```
### __Advanced__: Run a Test With Additional Information (Variable Override)

If you want to override variables, or include a payload, you have to use:

``` http request
POST https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/run
```

The request body will contain the variable you want to override.

__Example body__:
```json
{
  "payload": "{ \\"id\\":\\"123\\" }",
  "Content-Type": "application/json",
  "params": {
    "server": "staging"
  }
}
```

- Params will be accessible as _variables_ inside the test.
- Payload will be parsed based on the `"Content-Type"` field and will be accessible via the `"payload"` variable.

`payload` AND `params` are not required at the same time.

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f/run \\
-H 'content-type: application/json' \\
-d '{
"payload": "{ \\"id\\":\\"123\\" }",
"Content-Type": "application/json",
"params": { "server":"staging" }
}'
```

### __Automatch__: Run Multiple Tests Based On a URL Pattern

Automatch is a way to simultaneously launch tests inside a project. The tests to run are selected by comparing the URL provided in the payload to the "automatch" configuration pattern in the tests. 

Just like the **advanced run** endpoint, you can override both variables and the payload:

```http request
POST https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/automatch
```

__Example body__:

```json
{
  "payload": "{ \\"id\\":\\"123\\" }",
  "Content-Type": "application/json",
  "params": {
    "server": "staging"
  },
  "url": "http://www.testme.com"
}
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/automatch \\
 -H 'content-type: application/json' \\
 -d '{
 "payload": "{ \\"id\\":\\"123\\" }",
 "Content-Type": "application/json",
 "params": { "server":"staging" }
}'
```

### __Basic Tags__: Run Tests With Certain Tags

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/tag/**tag**/run
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/tag/staging/run \\
 -d '{
 "payload": "{ \\"id\\":\\"123\\" }",
 "Content-Type": "application/json",
 "params": { "server":"staging" }
}'
```

### __Advanced Tags__: Run Tests Tagged With a Certain Word

```http request
POST https://mastiff.apifortress.comapp/api/rest/v3/**project\_hook**/tests/tag/**tag**/run
```

__Example body__:

```json
{
  "payload": "{  \\"id\\":\\"123\\" }",
  "Content-Type": "application/json",
  "params": {
    "server": "staging"
  }
}
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/tag/staging/run \\
 -H 'content-type: application/json' \\
 -d '{
 "payload": "{ \\"id\\":\\"123\\" }",
 "Content-Type": "application/json",
 "params": { "server":"staging" }
}'
```

### __Basic By Project__: Run all Published Tests of a Specific Project

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/run-all
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/run-all \\
 -d '{
 "payload": "{ \\"id\\":\\"123\\" }",
 "Content-Type": "application/json",
 "params": { "server":"staging" }
}'
```

### __Advanced By Project__: Run All Published Tests of a Project With Additional Information

```http request
POST https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/run-all
```

__Example body__:

```json
{
  "payload": "{ \\"id\\":\\"123\\" }",
  "Content-Type": "application/json",
  "params": {
    "server": "staging"
  }
}
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/run-all \\
 -H 'content-type: application/json' \\
 -d '{
 "payload": "{ \\"id\\":\\"123\\" }",
 "Content-Type": "application/json",
 "params": { "server":"staging" }
}'
```

## Insights (Data & Information)

The API Fortress API also allows you to retrieve metrics and data of your tests.

### __Events__: Shows Information About Test Failures and Successes

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/insights/events
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/insights/events
```

### __Events Stream__: Show Test Success and Failure Information As An Event Stream

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/insights/events/stream
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/insights/events/stream
```

### __Metrics__: Provide Details on Performance

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/insights/metrics
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/insights/metrics
```

### __Metrics Stream__: Provide Details on Performance in an Event Stream

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/insights/metrics/stream
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/insights/metrics/stream
```

## List of Tests in a Project

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests
```

## Details of a Project

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/
```

# Authenticated endpoints

The following endpoints might contain sensitive information, therefore authentication is required.

## Authentication

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/login
```

The user credentials, provided by basic `HTTP` authentication, need to match the user profile selected during the project hook creation. This endpoint will generate a `JWT` token which is valid only for the provided project hook. The token is necessary for all the endpoints containing potentially sensitive information, and updating data. 

To achieve authentication, send a valid access token in the request header (i.e. in the form: `Authorization: Bearer access\_token`).

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/login \\
 -H 'authorization: Basic ABCD' \\
 -H 'content-type: application/json'
```

## Insights

### Provide Details About a Specific Event

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/insights/events/**event\_id** 
```

> The **`event\_id`** can be retrieved by performing the `events` endpoint first.

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/insights/events/5963451d12b87d3379d2f1co \\
 -H 'autho: Bearer ABCD' \\
 -H 'content-type: application/json'
```

## Tests

### Provide the Details About a Specific Test

```http request
GET https://mastiff.apifortress.com/api/rest/v3/**project\_hook**/tests/**test\_id**
```

The **`test\_id`** can be retrieved by calling the `test` endpoint or, the easiest way, by copying it from the interstitial page:

<img src={useBaseUrl('img/api-fortress/2017/07/testidIntersitial.jpeg')} alt="Go to the Interstitial Page"/>

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f \\
 -H 'authorization: Bearer ABCD' \\
 -H 'content-type: application/json'
```

### Show the Content of the Unit for the Given Test

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/unit
```

### Show the Content of the Unit for the Given Test as a Downloadable File

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/unit/file
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f/unit/file \\
 -H 'authorization: Bearer ABCD' \\
 -H 'content-type: application/json'
```

### Show the Content of the Input-Set for the Given Test

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/input
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f/input \\
 -H 'authorization: Bearer ABCD' \\
 -H 'content-type: application/json'
```

### Show the Content of the Input-Set for the Given Test as a Downloadable File

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/input/file
```

__Mock Example__:

```bash
curl -X GET \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f/input/file \\
 -H 'authorization: Bearer ABCD' \\
 -H 'content-type: application/json'
```

## Update Tests

### Update the Unit of a Given Test

```http request
POST https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/unit/update 
```

> The `unit` will be passed as body.

__Example body__:

```json
{
 "text": "<unit xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" name=\\"main\\" xsi:noNamespaceSchemaLocation=\\"http://apifortress.com/app/unit.xsd\\"><requirements></requirements><configs></configs><sequence name=\\"main\\"><assert-exists expression=\\"payload\\"/></sequence></unit>"
} 
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f/unit/update \\
 -H 'authorization: Bearer ABCD' \\
 -H 'content-type: application/json' \\
 -d '{
 "text": "<unit xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" name=\\"main\\" xsi:noNamespaceSchemaLocation=\\"http://apifortress.com/app/unit.xsd\\"><requirements></requirements><configs></configs><sequence name=\\"main\\"><assert-exists expression=\\"payload\\"/></sequence></unit>"
}'
```

### Update the Unit of a Given Test by Accepting It As a Raw `POST` Body

```http request
POST https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/unit/update/file 
```

> The `unit` will be passed as body.

__Example body__:

```xml
<unit xmlns:xsi\="http://www.w3.org/2001/XMLSchema-instance" name\="main" xsi:noNamespaceSchemaLocation\="http://apifortress.com/app/unit.xsd"\>
 <requirements\></requirements\>
 <configs\></configs\>
 <sequence name\="main"\>
 <get url\="${protocol}${domain}${endpoint}" params\="\['id':id\]" var\="payload" mode\="json"\></get\>
 <assert-equals expression\="payload.status" value\="200" comment\="status is equal to 200, if not stop the test" stoponfail\="true"/>
 </sequence\>
</unit\>
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f/unit/update/file \\
 -H 'authorization: Bearer ABCD' \\
 -H 'content-type: text/xml' \\
 -d '<unit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="main" xsi:noNamespaceSchemaLocation="http://apifortress.com/app/unit.xsd">
 <requirements></requirements>
 <configs></configs>
 <sequence name="main">
 <get url="${protocol}${domain}${endpoint}" params="\['\\''id'\\'':id\]" var="payload" mode="json"></get>
 <assert-equals expression="payload.status" value="200" comment="status is equal to 200, if not stop the test" stoponfail="true"/>
 </sequence>
</unit>'
```

### Update the Input-Set of the Given Test

```http request
POST https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/input/update The input will be passed as body.
```

__Example body__:

```json
{
 "text": "<sets xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" name=\\"main\\" xsi:noNamespaceSchemaLocation=\\"http://mastiff.apifortress.com/app/input.xsd\\"><global><param name=\\"country\\">US</param></global><set name=\\"search 1\\"><param name=\\"q\\">music</param></set></sets>"
}
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f/input/update \\
 -H 'authorization: Bearer ABCD' \\
 -H 'content-type: application/json' \\
 -d '{
 "text": "<sets xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" name=\\"main\\" xsi:noNamespaceSchemaLocation=\\"http://mastiff.apifortress.com/app/input.xsd\\"><global><param name=\\"country\\">US</param></global><set name=\\"search 1\\"><param name=\\"q\\">music</param></set></sets>"
}'
```

### Update the Input of a Given Test By Accepting It As a Raw `POST` Body

```http request
POST https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/input/update/file The input will be passed as body.
```

__Example body__:

```xml
<sets xmlns:xsi\="http://www.w3.org/2001/XMLSchema-instance" name\="main" xsi:noNamespaceSchemaLocation\="http://mastiff.apifortress.com/app/input.xsd"\>
 <global\>
 <param name\="protocol"\>https://</param\>
 <param name\="domain"\>mastiff.apifortress.com</param\>
 <param name\="endpoint"\>/app/api/examples/retail/product</param\>
 </global\>
 <set name\="ID 1"\>
 <param name\="id"\>511</param\>
 </set\>
</sets\>
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/6de267cd-df01-4782-8046-3seee6f4c093782/tests/35082607e4b0mm613lm82e8f/input/update/file \\
 -H 'authorization: Bearer ABCD' \\
 -H 'content-type: text/xml' \\
 -d '<sets xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="main" xsi:noNamespaceSchemaLocation="http://mastiff.apifortress.com/app/input.xsd">
 <global>
 <param name="protocol">https://</param>
 <param name="domain">mastiff.apifortress.com</param>
 <param name="endpoint">/app/api/examples/retail/product</param>
 </global>
 <set name="ID 1">
 <param name="id">511</param>
 </set>
</sets>'
```

## Creating Tests Outside of API Fortress

### Validators

When developing outside the _API Fortress Composer_, you will want to be sure the syntax of your units and input-sets are correct. For this work there are two different endpoints. One for the `input-set`, and one for the unit.

### Validate the Unit

```http request
POST https://mastiff.apifortress.com/app/api/rest/v3/validators/unit
```

> The `unit` will be passed as body

__Example body__:

```json
{
 "text": "<unit xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" name=\\"main\\" xsi:noNamespaceSchemaLocation=\\"http://apifortress.com/app/unit.xsd\\"><requirements></requirements><configs></configs><sequence name=\\"main\\"><assert-exists expression=\\"payload\\"/></sequence></unit>"
}
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/validators/unit \\
 -H 'content-type: application/json' \\
 -d '{
 "text": "<unit xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" name=\\"main\\" xsi:noNamespaceSchemaLocation=\\"http://apifortress.com/app/unit.xsd\\"><requirements></requirements><configs></configs><sequence name=\\"main\\"><assert-exists expression=\\"payload\\"/></sequence></unit>"
}'
```

### Validate the Input-Set

```http request
POST https://mastiff.apifortress.com/app/api/rest/v3/validators/input
```

> The `input-set` will be passed as body

__Example body__:

```json
{
 "text": "<sets xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" name=\\"main\\" xsi:noNamespaceSchemaLocation=\\"http://mastiff.apifortress.com/app/input.xsd\\"><global><param name=\\"country\\">US</param></global><set name=\\"search 1\\"><param name=\\"q\\">music</param></set></sets>"
}
```

__Mock Example__:

```bash
curl -X POST \\
https://private-e9aac-apifortressv3.apiary-mock.com/app/api/rest/v3/validators/input \\
 -H 'content-type: application/json' \\
 -d '{
 "text": "<sets xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" name=\\"main\\" xsi:noNamespaceSchemaLocation=\\"http://mastiff.apifortress.com/app/input.xsd\\"><global><param name=\\"country\\">US</param></global><set name=\\"search 1\\"><param name=\\"q\\">music</param></set></sets>"
}'
```

## Converting to JUnit Format

Converting to JUnit format (for Jenkins/QTest/etc.) is done by adding the following query parameters to a request:

```js
?sync=true&format=junit
```
The completed request would be as follows:

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/run-all?sync=true&format=junit
```

This can also be done for an individual test:

```http request
GET https://mastiff.apifortress.com/app/api/rest/v3/**project\_hook**/tests/**test\_id**/run?sync=true&format=junit
```
