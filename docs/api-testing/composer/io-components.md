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

I/O request components, available in your tests' **Compose** tab (aka Composer), enable you to perform the I/O operations `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. This guide describes each component and shows you how to add them to tests.

<img src={useBaseUrl('img/api-fortress/2020/09/ioComponents.png')} alt="Assertion Components" width="600" />


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
* Familiarity with the [API Testing Composer](/api-testing/composer/).


## I/O Components

### GET
Performs a `GET` method request. See [Adding I/O Components to a Test](/api-testing/composer/#add-io-request-component) for an example.


### POST
Performs a `POST` method request.

#### Param
1. Click **Add Param**.<br/><img src={useBaseUrl('img/api-fortress/2020/11/postParam1.png')} alt="Post"/>
1. Fill in the **Name** and **Value** fields.<br/><img src={useBaseUrl('img/api-fortress/2020/11/postParam.png')} alt="Post"/>

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

<br/>

#### Body
1. Click **Add Body**.<br/><img src={useBaseUrl('img/api-fortress/2020/11/postBody1.png')} alt="Post"/>
1. Fill in the **Content Type** and **Content** fields.<br/><img src={useBaseUrl('img/api-fortress/2020/11/postBody.png')} alt="Post"/>

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
     <td><strong>Content</strong></td>
     <td><p><small>| OPTIONAL | STRING |</small></p></td>
    </tr>
  </tbody>
</table>


### PUT
See [Parameters](#param) and [Body](#body).

### PATCH
See [Parameters](#param) and [Body](#body).

### DELETE
See [Parameters](#param) and [Body](#body).

### GitHub
This Github component is meant to simplify the process of retrieving a file from Github and use it as a data source. Some examples of files to use would be CSV or JSON files. [Here is a tutorial](/api-testing/on-prem/how-to/github-for-datasets) on how to use it as part of a test.

<img src={useBaseUrl('img/api-fortress/2020/11/githubComponent.png')} alt="GitHub Component" width="400"/>

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


## I/O Component Fields
The fields apply to all I/O request components except **GitHub**.

### Url
<p><small>| REQUIRED |</small></p>

In this field, enter the url of the resource you want to test. It could be the full url of the resource (i.e., `https://domain/endpoint`) or a string with variables (i.e., `https://${domain}${endpoint}`).<br/><img src={useBaseUrl('img/api-fortress/2020/11/Request-1024x281.jpg')} alt="Request-1024x281.jpg"/>

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

### Query Params
<p><small>| OPTIONAL |</small></p>

This refers to the **Query Params** section. Enter any params you want to add to the query string.

1. To add, click **Add parameter**.<br/><img src={useBaseUrl('img/api-fortress/2020/11/ioConfig.png')} alt="I/O Config" width="600"/>
2. Fill in the fields.<br/><img src={useBaseUrl('img/api-fortress/2020/11/ioConfig2.png')} alt="I/O Config" width="600"/>

   * **String value**: the value will always be the same for all of the requests. To do so, enter the value in the related field, then choose **String value** from the dropdown menu.
   * **Variable**: the value will be taken dynamically and could changed from time to time. To do so, enter the name of the variable in the field, then choose **Variable** from the dropdown menu.<br/><img src={useBaseUrl('img/api-fortress/2020/11/requestWithParams-1024x485.jpg')} alt="requestWithParams-1024x485.jpg"/>

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


### Header

1. Click **Add Header**.<br/><img src={useBaseUrl('img/api-fortress/2020/11/ioHeader.png')} alt="I/O Header" width="600"/>
1. Fill in the **Name** and **Value** fields.<br/><img src={useBaseUrl('img/api-fortress/2020/11/ioHeader2.png')} alt="I/O Header" width="600"/>

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


### Authentication

This refers to the **Authentication** config section, included in each of the I/O request components. If required for your API tests, enter your authentication credentials here.

1. Click **Add Authentication**.<br/><img src={useBaseUrl('img/api-fortress/2020/11/ioAuth.png')} alt="I/O Authentication" width="600"/>
2. From here, you'll see three options:<br/><img src={useBaseUrl('img/api-fortress/2020/11/ioAuth2.png')} alt="I/O Authentication" width="250"/>
   * **Config**: configure non-default behavior for this component<br/><img src={useBaseUrl('img/api-fortress/2020/11/authConfig.png')} alt="I/O Authentication" width="500"/>
   * **Basic Authentication**: add a basic authentication header<br/><img src={useBaseUrl('img/api-fortress/2020/11/authBasic.png')} alt="I/O Authentication" width="300"/>
   * **Header**: add a header to a request operation, such as `GET` or `POST`<br/><img src={useBaseUrl('img/api-fortress/2020/11/authHeader.png')} alt="I/O Authentication" width="500"/>


## Editing Components

Once you've created a component and wish to edit (i.e., need to add headers, params or a body):

1. Click on the request so that it becomes highlighted.<br/><img src={useBaseUrl('img/api-fortress/2020/11/editComponent1.png')} alt="subComps.jpg" width="500"/>
2. Click **Add component**.<br/><img src={useBaseUrl('img/api-fortress/2020/11/editComponent2.png')} alt="subComps.jpg" width="500"/>
3. Now you'll see the components available sub-components for that operation.<br/><img src={useBaseUrl('img/api-fortress/2020/11/editComponent3.png')} alt="subComps.jpg" width="500"/>
