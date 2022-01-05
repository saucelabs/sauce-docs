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


Using the API Testing **HTTP Client**, you can generate tests from external endpoints or files such as an OpenAPI Specification (spec) file.

:::info Supported Spec Formats
* **Currently supported**: <Highlight color="#37b732">Swagger</Highlight> <Highlight  color="#4e5b2e">OpenAPI 3</Highlight> <Highlight color="#ff6c37">Postman Collection</Highlight>
* **Pending**: <Highlight color="#29d3fe">RAML</Highlight> <Highlight color="#9073d2">API Blueprint</Highlight> <Highlight color="#c3090c">I/O Docs</Highlight> <Highlight color="#025b9c">SOAP</Highlight> <Highlight color="#025b9c">WSDL</Highlight>
:::

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/)


## Importing Your Spec File

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Go into any Project.
3. From within a Project, click the __HTTP Client__ tab.<br/><img src={useBaseUrl('img/api-fortress/2021/01/HTTPClient.png')} alt="HTTP Client Button" width="400"/>
4. Click the **Import OpenAPI / Postman** button.<br/><img src={useBaseUrl('img/api-fortress/2021/01/importSpec.png')} alt="Import OpenAPI / Postman button" width="250" />
5. Select the file on your local machine you wish to upload.
6. Select the folder your **Snapshots** tree where you'd like to save your file.<br/><img src={useBaseUrl('img/api-fortress/2021/04/importFolder.png')} alt="Import to Snapshots folder"/>
7. Click **Save**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/importFolder2.png')} alt="Import file to Project"/>
8. After saving, you'll be able to view all of your endpoints under **Snapshots**, grouped by subdirectory. Click on the name of the request you'd like to test.<br/><img src={useBaseUrl('img/api-fortress/2021/02/versions.png')} alt="Import to Snapshots folder" width="250"/><br/>
   The URL will populate in the **Enter Request URL** field.<br/><img src={useBaseUrl('img/api-fortress/2021/02/sampleRequest.png')} alt="Sample request"/>
9. Click **Send**. The response body will then appear.<br/><img src={useBaseUrl('img/api-fortress/2021/02/responseBody.png')} alt="Response Body"/>

## Run a Test

Follow the instructions under our Quickstart doc, starting with the [Generate Test](/api-testing/quickstart/#generate-test) step.

## More Information

Coming soon: you'll be able to create a test by referencing the URL that points to your spec file. This feature is still available on the Legacy (On-Prem) API Fortress.
