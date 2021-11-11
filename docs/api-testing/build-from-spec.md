---
id: build-from-spec
title: Building Tests from a Spec File
sidebar_label: Build from Spec File
description: "The available spec files you can automatically generate from are: Swagger, RAML, OpenAPI 3, API Blueprint, I/O Docs, SOAP WSDL, and Postman Collection."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );


Using the API Fortress **HTTP Client**, you can generate tests from external endpoints or files such as an OpenAPI Specification.

:::info Supported Spec Formats
* **Currently supported**: <Highlight color="#37b732">Swagger</Highlight> <Highlight  color="#4e5b2e">OpenAPI 3</Highlight> <Highlight color="#ff6c37">Postman Collection</Highlight>
* **Pending**: <Highlight color="#29d3fe">RAML</Highlight> <Highlight color="#9073d2">API Blueprint</Highlight> <Highlight color="#c3090c">I/O Docs</Highlight> <Highlight color="#025b9c">SOAP</Highlight> <Highlight color="#025b9c">WSDL</Highlight>
:::

## What You'll Need

* * A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Creating a Test

There are two ways to build a test from a specification (spec) file:

* Upload the spec file itself.
* Reference the URL that points to the spec file.

### Upload a File

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />

1. Go into any Project.

1. Click the __HTTP Client__ tab in the toolbar.
   <img src={useBaseUrl('img/api-fortress/2021/02/httpClient.png')} alt="HTTP Client Button"/>

1. Click the **Import OpenAPI / Postman** button and select the desired file you wish to upload.

1. Follow the prompt that asks where in your **Snapshots** tree you'd like to import your file.

1. Select the desired path in your project tree in which you wish to save the file/collection:
   <img src={useBaseUrl('img/api-fortress/2021/02/desiredPath.png')} alt="Select Desired Path"/>

   When you're finished select **Save**. Now you can view the test endpoints, as well as their respective components, by using the dropdown icons:
   <img src={useBaseUrl('img/api-fortress/2021/02/versions.png')} alt="Example versions endpoint"/>

1. Select the sample request, it populates in the HTTP Client with all the necessary details:
   <img src={useBaseUrl('img/api-fortress/2021/02/sampleRequest.png')} alt="Sample request"/>

1. Select the **Send** button and the response body appears:
   <img src={useBaseUrl('img/api-fortress/2021/02/responseBody.png')} alt="Response Body"/>

   Select the **Generate Test** button. API Fortress then generates test component data based on the request and response data from the spec file. Below is the same example in both _Visual_ and _Code_ view:

   | Code View                                                                                    | Visual View                                                                                       |
   |----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
   | <img src={useBaseUrl('img/api-fortress/2021/02/testCode.png')} alt="Sample Test Code View"/> | <img src={useBaseUrl('img/api-fortress/2021/02/testVisual.png')} alt="Sample Test Visual View"/>  |

### Reference the Spec File

:::caution Coming Soon to Sauce Labs
Currently, you can access this feature on the legacy (on-prem) API Fortress.
:::
