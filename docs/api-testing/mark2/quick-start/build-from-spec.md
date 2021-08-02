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
    

<p><small>Supported specs: <Highlight color="#37b732">Swagger</Highlight> <Highlight color="#29d3fe">RAML</Highlight> <Highlight  color="#4e5b2e">OpenAPI 3</Highlight> <Highlight color="#9073d2">API Blueprint</Highlight> <Highlight color="#c3090c">I/O Docs</Highlight> <Highlight color="#025b9c">SOAP</Highlight> <Highlight color="#025b9c">WSDL</Highlight> <Highlight color="#ff6c37">Postman Collection</Highlight> </small></p>

There are generally two ways to generate tests from a spec file: [generate a single test file](#generate-a-single-test-from-a-spec-file), or [mass generate tests files](#mass-generate-tests-from-a-spec-file).

## Generate a Single Test From a Spec File
  
This feature allows you to create a test starting with a specification file. From the interstitial page, choose the __Build from SPEC__ icon.

>__Note__: This process deletes your working copy. Keep this in mind if you attempt to use a specification file with a test that has already been written.

<img src={useBaseUrl('img/api-fortress/2019/06/buildFromSpec.jpg')} alt="Build from a Spec File"/>

There are two ways to build a test from a specification file:

* Upload the specification file itself. 
* Reference the URL that points to the specification file. 

The dropdown in the top right allows you to select your mode.

### Upload the Spec File

If you choose to upload your spec file, start by clicking the __Attach File__ button, then select the correct file from the popup.

<img src={useBaseUrl('img/api-fortress/2019/06/newBuildFromFile.jpg')} alt="Build from a Spec File"/>

### Reference the Spec File

You may also reference the specification file with a URL. Selecting the URL field in the dropdown will open the SPEC URL field.

Once you have chosen the file type and the method, click the Save button and you will be redirected to the next step where the available endpoints are listed in a dropdown. Choose the one that you wish to test and click "Continue." The test will then be created. You can now make any further adjustments, save and publish them for later use and scheduling.

> __Note__: For `RAML`, we suggest uploading the entire zip file. Here's an example video of building tests from a `RAML` file.

<iframe width="520" height="315" src="https://apifortress.com/doc/wp-content/uploads/2017/03/Create-from-RAML.webm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Mass Generate Tests From a Spec File  

This feature allows you to create multiple tests from one specification file. From within the project page (where you would like the tests to be stored), choose the __New Tests from SPEC__ icon at the top.
  
<img src={useBaseUrl('img/api-fortress/2020/02/Screen-Shot-2020-02-06-at-2.58.02-PM.png')} alt="Mass Tests from a spec"/>

> __Note__: This process will create one test per path chosen in the specification file inside of the project you are in.

There are two ways to build a test from a specification file. One way is to [upload the specification file itself](#upload-the-spec-file). Another way involves [providing the URL that points to the specification file](#reference-the-spec-file). The dropdown in the top right allows you to select your mode.  
  
<img src={useBaseUrl('img/api-fortress/2020/02/newBuildFromFile.jpg')} alt="New Build from a Spec File"/>
  
Upload your spec file by clicking then Choose File button, and select the correct file from the popup.

You may also reference the specification file with a URL. Selecting the URL field in the dropdown will open the SPEC URL field.

Once you have chosen the file type and the method, click the green check mark on the top right and you will be redirected to the next step where the available endpoints are listed out.

<img src={useBaseUrl('img/api-fortress/2020/02/Screen-Shot-2020-02-06-at-3.06.35-PM.png')} alt="List of available endpoints"/>

Choose as many as you wish to test or select one then click __Select All__ in the top left to select all paths and then click __Import selected__. The tests will then be created and named in the following syntax `"method endpoint - status\_code"` (i.e. `"GET /v1/users/ - 200"`).  
  
<img src={useBaseUrl('img/api-fortress/2020/02/Screen-Shot-2020-02-06-at-3.10.52-PM.png')} alt="List of available endpoints"/>
