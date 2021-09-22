---
id: build-from-spec
title: Build from a Spec File
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


Using API Fortress's **HTTP Client**, you can generate tests from external endpoints or files such as an OpenAPI spec.

:::info Supported Spec Formats
* **Currently supported**: <Highlight color="#37b732">Swagger</Highlight> <Highlight  color="#4e5b2e">OpenAPI 3</Highlight> <Highlight color="#ff6c37">Postman Collection</Highlight>
* **Pending**: <Highlight color="#29d3fe">RAML</Highlight> <Highlight color="#9073d2">API Blueprint</Highlight> <Highlight color="#c3090c">I/O Docs</Highlight> <Highlight color="#025b9c">SOAP</Highlight> <Highlight color="#025b9c">WSDL</Highlight>
:::
  
## Generating a Test

There are two ways to build a test from a specification file:

* Upload the specification file itself. 
* Reference the URL that points to the specification file. 

Both methods involve using the **HTTP Client**.

### Upload a file

From the project home page:

1. Choose the __HTTP Client__ button in the toolbar.
   <img src={useBaseUrl('img/api-fortress/2021/02/httpClient.png')} alt="HTTP Client Button"/>

1. In the **Snapshots** section select the arrow icon:
   <img src={useBaseUrl('img/api-fortress/2021/02/snapshotAdd.png')} alt="Add spec file"/>

1. Select the desired file and finish by selecting _Open_:
   <img src={useBaseUrl('img/api-fortress/2021/02/desiredFile.png')} alt="Select Desired File"/>

1. A prompt appears asking how the files should be imported, select the appropriate option:
   <img src={useBaseUrl('img/api-fortress/2021/02/desiredImport.png')} alt="Select Desired Import"/>

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

:::caution Coming Soon
This feature is available in the previous releases of API Fortress, stay tuned for more information
:::