---
id: io-components
title: I/O Test Components
sidebar_label: I/O Components
keywords:
    - api-testing
    - io-components
    - delete
    - get
    - post
    - put
    - patch
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

I/O components are a type of component that you can add to a test using the Composer. They enable you to perform the I/O operations `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`. To access them, go to a **Project** > **Test** > **Compose** (aka Composer) > click **Add component** (**+** icon) in the Composer toolbar.

<img src={useBaseUrl('img/api-fortress/2020/09/ioComponents.png')} alt="Assertion Components" width="600" />

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Getting Started

1. From the **Composer**, choose **Add Component** (**+** icon).
2. Choose the type of operation you want to do. For this example, we'll select **`GET` request**.<br/>
<img src={useBaseUrl('img/api-fortress/2020/11/compsAvail2.png')} alt="Components available" width="650" />
3. Next, you'll need to fill out the fields in the component form:<br/>
<img src={useBaseUrl('img/api-fortress/2020/11/Request-1024x281.jpg')} alt="Request-1024x281.jpg"/>
4. Under **Url** (required field), enter the url of the resource you want to test. It could be the full url of the resource or a string with variables using the $. (i.e., `'https://domain/resourcename'` or `'https://${domain}${endpoint}'`).
5. Under **Variable** (required field), enter the name of the variable that contains the response (value must be a string). It will be the name you will refer during the test.
6. Under **Expect** (optional field), fill this out only if the expected behavior differs from a positive response (i.e., `404,500` vs. `200,201`). This can be useful when looking to test negative responses and validate error messages.

  Value must be a string. Possible values are **`<statusCode>|VALID`** or **`<statusCode>|INVALID`**. `VALID` means the payload type is the one selected in the **mode** field (JSON,XML), while `INVALID` means the opposite. Some examples:
     - `404|VALID`: 404 is expected with valid payload
     - `422|VALID`: 422 is expected with valid payload
     - `500|INVALID`: 500 is expected with invalid payload

  Multiple status codes can be expected by adding them all (i.e., `200|302|400|500|VALID`)
7. Under **Mode** (required field), enter the type of the response you want to test (must be 'json','xml', 'html',or 'text').
8. Under **Query Params** (optional field), enter any params you want to add to the query string. To add, tap on **Add parameter**. The params can either be:
   * **String value**: the value will always be the same for all the requests. To do so, enter the value in the related field, then choose **String value** from the dropdown menu.
   * **Variable**: the value will be taken dynamically and could changed from time to time. To do so, enter the name of the variable in the field, then choose **Variable** from the dropdown menu.<br/>
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

9. When you've set everything up, click **Confirm changes** (checkmark icon in the upper right corner). After that, if you need to add headers, params or a body to the request, select the request and then click **Add component** to view the available components for each operation.<br/>
<img src={useBaseUrl('img/api-fortress/2020/11/subComps.jpg')} alt="subComps.jpg"/>


## Config

<img src={useBaseUrl('img/api-fortress/2020/11/config-1024x152.jpg')} alt="config-1024x152.jpg"/>

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


## Basic Authentication

If required for your API tests, enter your authentication credentials here.

<img src={useBaseUrl('img/api-fortress/2020/11/basicAuth.png')} alt="Basic Authentication UI"/>


<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Username</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Password</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
  </tbody>
</table>

## Header

<img src={useBaseUrl('img/api-fortress/2020/11/headerComponent-1024x150.jpg')} alt="headerComponent-1024x150.jpg"/>

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


## Post Param/Put Param/Patch Param/Delete Param

<img src={useBaseUrl('img/api-fortress/2020/11/PostPutPatchParam-1024x140.jpg')} alt="PostPutPatchParam-1024x140.jpg"/>

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


## Post Body/Put Body/Patch Body/Delete Body

<img src={useBaseUrl('img/api-fortress/2020/11/PostPutPatchBody-1024x205.jpg')} alt="PostPutPatchBody-1024x205.jpg"/>

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


## GitHub Component

<img src={useBaseUrl('img/api-fortress/2020/11/githubComponent.png')} alt="GitHub Component"/>

This Github component is meant to simplify the process of retrieving a file from Github and use it as a data source. Some examples of files to use would be CSV or JSON files.

[Here is a tutorial](/api-testing/on-prem/how-to/github-for-datasets) on how to use it as part of a test.

The GitHub component has the following fields:

<img src={useBaseUrl('img/api-fortress/2018/04/4.png')} alt="4.png"/>

- **Account** is your GitHub username
- **Repository** is the name of the repository that your data file is pushed to.
- **Branch** is the repository branch that the desired version of the data file is in.
- **Token** is the token described above, generated in the GitHub platform.
- **Variable** is the variable that the payload will be stored under.
- **Path** is the name of the file in the repository.
- **Mode** is the filetype of the file in the repository.
