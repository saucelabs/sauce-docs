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
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

I/O request components enable you to perform the I/O operations `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `Github`, `Contract Test`, and `File DataSource`. This guide describes each component and shows you how to add them to tests. To learn how to access the components and create a test using the Composer see [Writing API Tests with the Composer](/api-testing/composer/).

<img src={useBaseUrl('img/api-testing/ioComponents.png')} alt="I/O Components"/>
<img src={useBaseUrl('img/api-testing/ioComponents1.png')} alt="I/O Components"/>


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Familiarity with the [API Testing Composer](/api-testing/composer/).

## I/O Components

### GET
Performs a `GET` method request. See [Adding I/O Components to a Test](/api-testing/composer/#add-io-request-component) for an example.


### POST
Performs a `POST` method request.

#### URL Encoded Param

1. Click **URL Encoded Param**.<br/><img src={useBaseUrl('img/api-testing/UrlParam.png')} alt="Post" />
1. Fill in the **Name** and **Value** fields.<br/><img src={useBaseUrl('img/api-testing/URlParam1.png')} alt="Post" />

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p></td>
    </tr>
  </tbody>
</table>


#### Request Body
1. Click **Request Body**.<br/><img src={useBaseUrl('img/api-testing/postBody1.png')} alt="Post" />
1. Fill in the **Content-Type** and **Body** fields.<br/><img src={useBaseUrl('img/api-testing/postBody.png')} alt="Post" />

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Content-Type</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Body</strong></td>
     <td><p><small>| OPTIONAL | STRING |</small></p></td>
    </tr>
  </tbody>
</table>


#### File (Multi-part)
1. Click **File (Multi-part)**.<br/><img src={useBaseUrl('img/api-testing/FileMulti.png')} alt="Post" />
1. Click **Select** for the file you want to use.
1. Fill in the **Name** field.<br/><img src={useBaseUrl('img/api-testing/FileMulti1.png')} alt="Post" />

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>File</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Filename</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
  </tbody>
</table>

### PUT
See [URL Encoded Param](#url-encoded-param), [Request Body](#request-body), and [File (Multi-part)](#file-multi-part).

### PATCH
See [URL Encoded Param](#url-encoded-param), [Request Body](#request-body), and [File (Multi-part)](#file-multi-part).

### DELETE
See [URL Encoded Param](#url-encoded-param), [Request Body](#request-body), and [File (Multi-part)](#file-multi-part).

### GitHub
The GitHub component is meant to simplify the process of retrieving a file from GitHub and use it as a data source. Some examples of files to use would be CSV or JSON files. [Here is a tutorial](/api-testing/on-prem/how-to/github-for-datasets) on how to use it as part of a test.

<img src={useBaseUrl('img/api-testing/githubComponent.png')} alt="GitHub Component" />

The **Base URL**, **Branch**, and **Ref** fields will auto-populate, but you can still edit them. You'll need to fill in the following fields:

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Account</strong></td>
     <td><p>Your GitHub username</p></td>
    </tr>
    <tr>
     <td><strong>Repository</strong></td>
     <td><p>The name of the repository that your data file is pushed to</p></td>
    </tr>
    <tr>
     <td><strong>Branch</strong></td>
     <td><p>The repository branch that the desired version of the data file is in</p></td>
    </tr>
    <tr>
     <td><strong>Token</strong></td>
     <td><p>The token described above, generated in the GitHub platform</p></td>
    </tr>
    <tr>
     <td><strong>Variable</strong></td>
     <td><p>The variable that the payload will be stored under</p></td>
    </tr>
    <tr>
     <td><strong>Path</strong></td>
     <td><p>The name of the file in the repository</p></td>
    </tr>
    <tr>
     <td><strong>Mode</strong></td>
     <td><p>The filetype of the file in the repository</p></td>
    </tr>
  </tbody>
</table>


### Contract Test
The **Contract Test** component allows you to test an open API specification file stored in the [Vault](/api-testing/vault/).
<img src={useBaseUrl('img/api-testing/contracttest.png')} alt="Contract Test"/>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>openAPI</strong></td>
     <td><p>The open API file from the Vault Drive.</p></td>
    </tr>
    <tr>
     <td><strong>operationId </strong></td>
     <td><p>The operationId you want to use in your test.</p></td>
    </tr>
    <tr>
     <td><strong>Status </strong></td>
     <td><p>The status code you want to test.</p></td>
    </tr>
    <tr>
     <td><strong>Inclusion Strategy </strong></td>
     <td><p>Required will consider only the required fields. All will consider all the fields.</p></td>
    </tr>
  </tbody>
</table>


### File Data Source
The **File Data Source** component allows you to use a file from the [Vault](/api-testing/vault/) as a data source.

<img src={useBaseUrl('img/api-testing/filedatasource.png')} alt="File Data Source"/>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Variable</strong></td>
     <td><p>The variable name you want to assign.</p></td>
    </tr>
    <tr>
     <td><strong>Mode</strong></td>
     <td><p>Defaults to Data</p></td>
    </tr>
    <tr>
     <td><strong>Data</strong></td>
     <td><p>The file you selected as the data source.</p></td>
    </tr>
    </tbody>
</table>

## I/O Component Fields
The fields apply to all I/O request components except **GitHub**.

### Url
<p><small>| REQUIRED |</small></p>

In this field, enter the url of the resource you want to test. It could be the full url of the resource (i.e., `https://domain/endpoint`) or a string with variables (i.e., `https://${domain}${endpoint}`).<br/><img src={useBaseUrl('img/api-testing/Request-1024x281.png')} alt="Request-1024x281.jpg" />

### Variable
<p><small>| REQUIRED |</small></p>

In this field, enter the name of the variable that contains the response (value must be a string). It will be the name you will refer during the test.

### Expect
<p><small>| OPTIONAL |</small></p>

Fill out this field only if the expected behavior differs from a positive response (i.e., `404,500` vs. `200,201`). This can be useful when looking to test negative responses and validate error messages. Value must be a string. Possible values are **`<statusCode>|VALID`** or **`<statusCode>|INVALID`**. `VALID` means the payload type is the one selected in the **mode** field (explained in the next step), while `INVALID` means the opposite. Some examples:
- `404|VALID`: 404 is expected with valid payload
- `422|VALID`: 422 is expected with valid payload
- `500|INVALID`: 500 is expected with invalid payload

Multiple status codes can be expected by adding them all (i.e., `200|302|400|500|VALID`)


### Mode
<p><small>| REQUIRED |</small></p>

Enter the type of the response you want to test (must be 'json','xml', 'html',or 'text').

### Query Param
<p><small>| OPTIONAL |</small></p>

This refers to the **Query Param** section. Enter any params you want to add to the query string.

1. To add, click **Query Param**.<br/><img src={useBaseUrl('img/api-testing/ioConfig.png')} alt="I/O Config" />
2. Fill in the fields.<br/><img src={useBaseUrl('img/api-testing/ioConfig2.png')} alt="I/O Config" />

   * **String value**: the value will always be the same for all of the requests. To do so, enter the value in the related field, then choose **String value** from the dropdown menu.
   * **Variable**: the value will be taken dynamically and could changed from time to time. To do so, enter the name of the variable in the field, then choose **Variable** from the dropdown menu.<br/><img src={useBaseUrl('img/api-testing/Request-1024x281.png')} alt="Request With Params" />

   Using the above example, let's say that you define _varName_ as a boolean value (possible values are 'true' or 'false'). In this case, there will be two requests:
   * The first one will be a `GET` request to `https://mydomain/endpoint?firstParam=paramValue&secondParam=true`, parsing it as `json` and saving it in the `payload` variable.
   * The second will be a `GET` request to `https://mydomain/endpoint?firstParam=paramValue&secondParam=false`, parsing it as 'json' and saving it in the 'payload' variable.

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p></td>
    </tr>
  </tbody>
</table>


### Request Header

1. Click **Request Header**.<br/><img src={useBaseUrl('img/api-testing/ioHeader.png')} alt="I/O Header" />
1. Fill in the **Name** and **Value** fields.<br/><img src={useBaseUrl('img/api-testing/ioHeader2.png')} alt="I/O Header" />

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Name</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p></td>
    </tr>
  </tbody>
</table>


### Basic Authentication

This refers to the **Basic Authentication** configuration, included in each of the I/O request components. If required for your API tests, enter your authentication credentials here.

1. Click **Basic Authentication**.<br/><img src={useBaseUrl('img/api-testing/ioAuth.png')} alt="I/O Authentication" />
2. Fill in the Username and Password fields<br/><img src={useBaseUrl('img/api-testing/authBasic.png')} alt="I/O Authentication" />

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Username</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p></td>
    </tr>
    <tr>
     <td><strong>Password</strong></td>
     <td><p><small>| REQUIRED | STRING or VARIABLE |</small></p></td>
    </tr>
  </tbody>
</table>


## Editing Components

Once you've created a component and wish to edit (i.e., need to add request headers, params or a request body):

1. Click **Add Child Component**.<br/><img src={useBaseUrl('img/api-testing/editComponent2.png')} alt="subComps.jpg" />
3. Now you'll see the component's available sub-components for that operation.<br/><img src={useBaseUrl('img/api-testing/editComponent3.png')} alt="subComps.jpg" />
