---
id: io-components
title: I/O Request Test Components
sidebar_label: I/O Components
keywords:
- api-testing
- io-components
- request-components
- delete
- get
- post
- put
- patch
- config
- github
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

I/O request components enable you to perform the I/O operations `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `Github`, `Contract Test`, and `File DataSource`. This guide describes each component and shows you how to add them to tests. To learn how to access the components and create a test using the Composer see [Writing API Tests with the Composer](/api-testing/composer/).

<img src={useBaseUrl('img/api-testing/ioComponents.png')} alt="I/O Components"/>
<img src={useBaseUrl('img/api-testing/ioComponents1.png')} alt="I/O Components"/>

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Familiarity with the [API Testing Composer](/api-testing/composer/).

## I/O Components

### GET

Performs a `GET` method request. See [Request Header](#request-header), [Query Params](#query-params), [Config](#config), and [Basic Authentication](#basic-authentication).

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: get
  children: []
  url:
  var:
  mode:
```

</details>

### POST

Performs a `POST` method request. See [Request Body](#request-body), [Request Header](#request-header), [URL Encoded Params](#url-encoded-param), [Query Params](#query-params), [Config](#config), [File (Multi-part)](#file-multi-part), and [Basic Authentication](#basic-authentication).

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: post
  children: []
  url:
  var:
  mode:
```

</details>

### PUT

Performs a `PUT` method request. See [Request Body](#request-body), [Request Header](#request-header), [URL Encoded Params](#url-encoded-param), [Query Params](#query-params), [Config](#config), [File (Multi-part)](#file-multi-part), and [Basic Authentication](#basic-authentication).

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: put
  children: []
  url:
  var:
  mode:
```

</details>

### PATCH

Performs a `PATCH` method request. See [Request Body](#request-body), [Request Header](#request-header), [URL Encoded Params](#url-encoded-param), [Query Params](#query-params), [Config](#config), [File (Multi-part)](#file-multi-part), and [Basic Authentication](#basic-authentication).

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: patch
  children: []
  url:
  var:
  mode:
```

</details>

### DELETE

Performs a `DELETE` method request. See [Request Body](#request-body), [Request Header](#request-header), [URL Encoded Params](#url-encoded-param), [Query Params](#query-params), [Config](#config), [File (Multi-part)](#file-multi-part), and [Basic Authentication](#basic-authentication).

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: delete
  children: []
  url:
  var:
  mode:
```

</details>

### GitHub

The GitHub component is meant to simplify the process of retrieving a file from GitHub and using it as a data source. Some examples of files to use would be CSV or JSON files. Check [Use Cases](/api-testing/use-cases/github-datasets/) out to see an example using this component.

:::note
GitHub Enterprise version or GitHub AE are not supported.
:::

<img src={useBaseUrl('img/api-testing/githubComponent.webp')} alt="GitHub Component" />

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: github
  baseURL: https://api.github.com
  account:
  repository:
  branch: master
  ref: HEAD
  token:
  path:
  var:
  mode: json
```

</details>

The **Base URL**, **Branch**, and **Ref** fields will auto-populate, but you can still edit them. You'll need to fill in the following fields:

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Account</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>Your GitHub username.</p></td>
    </tr>
    <tr>
     <td><strong>Repository</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The name of the repository that your data file is pushed to.</p></td>
    </tr>
    <tr>
     <td><strong>Branch</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The repository branch that the desired version of the data file is in.</p></td>
    </tr>
    <tr>
     <td><strong>Token</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The token described above, generated in the GitHub platform.</p></td>
    </tr>
    <tr>
     <td><strong>Variable</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The variable that the payload will be stored under.</p></td>
    </tr>
    <tr>
     <td><strong>Path</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The name of the file in the repository.</p></td>
    </tr>
    <tr>
     <td><strong>Mode</strong></td>
     <td><p><small>| REQUIRED | 'json', 'xml', 'html', 'text', 'csv' |</small></p><p>The filetype of the file in the repository.</p></td>
    </tr>
  </tbody>
</table>

### Contract Test

The **Contract Test** component allows you to test an open API specification file stored in the [Vault](/api-testing/vault/).
<img src={useBaseUrl('img/api-testing/contracttest.png')} alt="Contract Test"/>

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: contract
  children: []
  openAPI:
  operationId:
  status:
  inclusionStrategy: required
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>openAPI</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The open API file from the Vault Drive.</p></td>
    </tr>
    <tr>
     <td><strong>operationId </strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The operationId you want to use in your test.</p></td>
    </tr>
    <tr>
     <td><strong>Status </strong></td>
     <td><p><small>| REQUIRED | INTEGER |</small></p><p>The status code you want to test.</p></td>
    </tr>
    <tr>
     <td><strong>Inclusion Strategy </strong></td>
     <td><p><small>| REQUIRED | 'Required', 'All' |</small></p><p><code>Required</code> will consider only the required fields. <code>All</code> will consider all the fields.</p></td>
    </tr>
  </tbody>
</table>

The `Contract Test` component has two child: the `Include (Contract T.)` and the `Exclude (Contract T.)`.

<img src={useBaseUrl('img/api-testing/CT_child.png')} alt="Include and Exclude Components"/>

`Include (Contract T.)` will include the specified OperationId, while the `Exclude (Contract T.)` will exclude the specified OperationId.

`Include (Contract T.)` is useful when used together with `Inclusion Strategy` set to `Required` because in this way you can test both the required fields and any other fields that are not required. `Exclude (Contract T.)` is useful to be used together with `Inclusion Strategy` set to `All` because in this way you can exclude some of the fields whether they are required or not.

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: contract
  children:
  - id: include
    name:
    in:
  - id: exclude
    name:
    in:
  openAPI:
  operationId:
  status:
  inclusionStrategy: required
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The name of the field you want to include/exclude.</p></td>
    </tr>
    <tr>
     <td><strong>In</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The place where the variable should be present (i.e. header|query).</p></td>
    </tr>
  </tbody>
</table>

### File DataSource

The **File Data Source** component allows you to use a file from the [Vault](/api-testing/vault/#files) as a data source. To [learn more](/api-testing/use-cases/use-drive) check the use case out.

<img src={useBaseUrl('img/api-testing/filedatasource.png')} alt="File Data Source"/>

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: set
  var:
  mode: object
  object: DS.loadTextFile('GlobexTest.yml')
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Variable</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The variable name you want to assign.</p></td>
    </tr>
    <tr>
     <td><strong>Mode</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>Defaults to <code>Data</code></p></td>
    </tr>
    <tr>
     <td><strong>Data</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The file you selected as the data source.</p></td>
    </tr>
    </tbody>
</table>

## I/O Child Components

For all the Child Components the value can be:

- **String value**: the value will always be the same for all of the requests. To do so, enter the value in the related field.
- **Variable**: the value will be taken dynamically and could changed from time to time. To do so, enter the name of the variable between `${}`<br/>

### Request Body

1. Click **Request Body**.<br/><img src={useBaseUrl('img/api-testing/postBody1.png')} alt="Post" />
1. Fill in the **Content-Type** and **Body** fields.<br/><img src={useBaseUrl('img/api-testing/postBody.png')} alt="Post" />

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: post
  children:
  - id: body
    contentType: application/json
    content:
  url:
  var:
  mode: json
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Content-Type</strong></td>
     <td><p><small>| REQUIRED | 'application/json', 'text/plain', 'application/x-www-form-urlencoded', 'text/xml'|</small></p><p>The Content-Type for the body.</p></td>
    </tr>
    <tr>
     <td><strong>Body</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p><p>The Body you want to send with the request.</p></td>
    </tr>
  </tbody>
</table>

### Request Header

1. Click **Request Header**.<br/><img src={useBaseUrl('img/api-testing/ioHeader.webp')} alt="I/O Header" />
1. Fill in the **Name** and **Value** fields.<br/><img src={useBaseUrl('img/api-testing/ioHeader2.png')} alt="I/O Header" />

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: post
  children:
  - id: header
    name:
    value:
  url:
  var:
  mode: json
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The key you want to send in your request as Header.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p><p>The value for the key.</p></td>
    </tr>
  </tbody>
</table>

### URL Encoded Param

1. Click **URL Encoded Param**.<br/><img src={useBaseUrl('img/api-testing/UrlParam.png')} alt="Post" />
1. Fill in the **Name** and **Value** fields.<br/><img src={useBaseUrl('img/api-testing/URlParam1.png')} alt="Post" />

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: post
  children:
  - id: param
    name:
    value:
  url:
  var:
  mode: json
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The key you want to send in your request as an URL Encoded Param.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p><p>The value for the key.</p></td>
    </tr>
  </tbody>
</table>

### Query Params

<p><small>| OPTIONAL |</small></p>

This refers to the **Query Param** section. Enter any params you want to add to the query string.

1. To add, click **Query Param**.<br/><img src={useBaseUrl('img/api-testing/ioConfig.png')} alt="I/O Config" />
2. Fill in the fields.<br/><img src={useBaseUrl('img/api-testing/ioConfig2.png')} alt="I/O Config" />

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: post
  children:
  - id: queryParam
    name:
    value:
  url:
  var:
  mode: json
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The key you want to send in your request as a Query Param.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p><p>The value for the key.</p></td>
    </tr>
  </tbody>
</table>

### Config

This component allows you to add specific configurations in your I/O Component. Using the **config** component you can set up the [footprints](/api-testing/composer/io-components/#footprint) shown in the project dashboard, you can allow a call to (not) [follow a redirect](/api-testing/composer/io-components/#follow-redirects) or you can set the [timeout](/api-testing/composer/io-components/#timeout).

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: post
  children:
  - id: config
    name:
    value:
  url:
  var:
  mode: json
```

</details>

#### Footprint

Consider a scenario where you are calling an API that shows the product details. The endpoint will look like this:

```http request
http://www.whereever.com/${id}/details
```

Running your test will produce something like this:

```http request
http://www.whereever.com/1/details
http://www.whereever.com/2/details
http://www.whereever.com/3/details
http://www.whereever.com/4/details
...
```

If you want to be able to easily find all those calls in the metrics, you can use a **footprint**.

To configure the footprint, in the test, add a `config` component to the I/O component:

<img src={useBaseUrl('img/api-testing/metrics-improve-config.png')} alt="Reconfiguring a footprint" width="600"/>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>It must be `footprint`.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The value for the configuration component.</p></td>
    </tr>
  </tbody>
</table>

To set up a footprint, you can enter anything as value: it could be test name, the environment the test is running on, or it could be a random string that lets you identify those metrics. If you want to keep the "structure" of the endpoint but removing the variables you can wrap each variable in square brackets.

The value in this example would be:

```http request
http://www.whereever.com/[id]/details
```

For each endpoint, you can use more square brackets, one for each variable that could assume multiple values:

```http request
http://www.whereever.com/[whatever]/[id]/details/[colors]/whatever
```

When you write the value of the config, you can also call a variable as in any I/O operation:

```js
${protocol}/${domain}/[whatever]/[id]/details/[colors]/whatever
```

#### Timeout

Using the config component you can also change the timeout setup. In order to do so, you can add the config component in the I/O request as follow:

<img src={useBaseUrl('/img/api-testing/config_timeout.png')} alt="Configuring the timeout" width="600"/>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>It must be `timeout`.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | NUMBER |</small></p><p>It sets up the seconds you want the request to timed out.</p></td>
    </tr>
  </tbody>
</table>

#### Follow-redirects

When the GET request contains a redirect the system automatically follows that redirect and returns the response accordingly. If, for any reason, you need to not follow the redirect, you can use a specific configuration to block it.
To do so, you can add the config component in the GET request as follow:

<img src={useBaseUrl('/img/api-testing/follow_redirect_false.png')} alt="Configuring the redirect" width="600"/>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>It must be `follow_redirects`.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | 'true' (default), 'false' |</small></p><p>If 'true' the request will follow the redirect, if 'false' the request will not follow the redirect</p></td>
    </tr>
  </tbody>
</table>

### File (Multi-part)

1. Click **File (Multi-part)**.<br/><img src={useBaseUrl('img/api-testing/FileMulti.png')} alt="Post" />
1. Click **Select** for the file you want to use.
1. Fill in the **Name** field.<br/><img src={useBaseUrl('img/api-testing/FileMulti1.png')} alt="Post" />

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: post
  children:
  - id: param
    name: file
    value: '@file[Globex.txt]:Globex.txt'
  url:
  var:
  mode: json
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The name of the variable in the I/O request.</p></td>
    </tr>
    <tr>
     <td><strong>File</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The file from the Vault Drive.</p></td>
    </tr>
    <tr>
     <td><strong>Filename</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The name you want to assign to the file.</p></td>
    </tr>
  </tbody>
</table>

### Basic Authentication

This refers to the **Basic Authentication** configuration, included in each of the I/O request components. If required for your API tests, enter your authentication credentials here.

1. Click **Basic Authentication**.<br/><img src={useBaseUrl('img/api-testing/ioAuth.webp')} alt="I/O Authentication" />
2. Fill in the Username and Password fields<br/><img src={useBaseUrl('img/api-testing/authBasic.png')} alt="I/O Authentication" />

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: post
  children:
  - id: header
    name: Authentication
    value: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
  url:
  var:
  mode: json
```

</details>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Username</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p><p>The username required for authentication.</p></td>
    </tr>
    <tr>
     <td><strong>Password</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p><p>The password required for authentication.</p></td>
    </tr>
  </tbody>
</table>

## I/O Component Fields

The fields apply to all I/O request components except **GitHub**, **Contract Test**, and **File DataSource**.

### Url

<p><small>| REQUIRED |</small></p>

In this field, enter the url of the resource you want to test. It could be the full url of the resource (i.e., `https://domain/endpoint`) or a string with variables (i.e., `https://${domain}${endpoint}`).<br/><img src={useBaseUrl('img/api-testing/Request-1024x281.png')} alt="Request-1024x281.jpg" />

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: get
  children: []
  url: https://domain/search
  var: searchPayload
  mode: json
```

</details>

### Variable

<p><small>| REQUIRED |</small></p>

In this field, enter the name of the variable that contains the response (value must be a string). It will be the name you will refer during the test.

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: get
  children: []
  url: https://domain/search
  var: searchPayload
  mode: json
```

</details>

### Expect

<p><small>| OPTIONAL |</small></p>

Fill out this field only if the expected behavior differs from a positive response (i.e., `404,500` vs. `200,201`). This can be useful when looking to test negative responses and validate error messages. Value must be a string. Possible values are **`<statusCode>|VALID`** or **`<statusCode>|INVALID`**. `VALID` means the payload type is the one selected in the **mode** field (explained in the next step), while `INVALID` means the opposite. Some examples:

- `404|VALID`: 404 is expected with valid payload
- `422|VALID`: 422 is expected with valid payload
- `500|INVALID`: 500 is expected with invalid payload

Multiple status codes can be expected by adding them all (i.e., `200|302|400|500|VALID`)

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: get
  children: []
  url: https://domain.com/search
  var: searchPayload
  mode: json
  expect:
  codes:
  - 200
  - 302
  - 400
  - 500
  validity: VALID
```

</details>

### Mode

<p><small>| REQUIRED |</small></p>

Enter the type of the response you want to test (must be 'json','xml', 'html',or 'text').

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: get
  children: []
  url: https://domain.com/search
  var: searchPayload
  mode: json
```

</details>

## Adding Child Components

Once you've created a component and wish to add child components (that is., need to add request headers, params, or a request body):

1. Click **Add Child Component**.<br/><img src={useBaseUrl('img/api-testing/editComponent2.png')} alt="subComps.jpg" />
2. Now you'll see the component's available sub-components for that operation.<br/><img src={useBaseUrl('img/api-testing/editComponent3.png')} alt="subComps.jpg" />
