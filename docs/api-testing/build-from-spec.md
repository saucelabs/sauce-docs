---
id: build-from-spec
title: Building an API Test from a Spec File
sidebar_label: Build Test from Spec File
description: 'Automatically generate tests from an OpenAPI spec or HAR file.'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Using the API Testing **HTTP Client**, you can generate tests from external endpoints or files such as an OpenAPI Specification (spec).

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/)
- An OpenAPI Specification file (v3.0 or higher)

:::note
Looking to import from Postman? See [Importing Postman Collections](/api-testing/import-postman-collection/).
:::

## Importing Your Spec File

1. Log in to Sauce Labs, then click **API Testing**.
2. Go into any Project.
3. From within a Project, click the **HTTP Client** tab.<br/><img src={useBaseUrl('img/api-testing/http-client-nav-rebrand.png')} alt="HTTP Client Button" width="300"/>
4. Click the **Import OpenAPI/Postman** button, then **Import OpenAPI/Postman Collection/.har** and then, select and upload your file from your local machine.<br/><img src={useBaseUrl('img/api-testing/importSpec.png')} alt="Import OpenAPI / Postman button" width="450" />
5. Click on the folder in your **Snapshots** tree where you'd like to save your file.<br/><img src={useBaseUrl('img/api-testing/ImportFolder.png')} alt="Import to Snapshots folder"/>
6. Click **Save**.<br/><img src={useBaseUrl('img/api-testing/importFolder2.png')} alt="Import file to Project"/>
7. After saving, you'll be able to view all of your endpoints under **Snapshots**, grouped by subdirectory. Click on the name of the request you'd like to test.<br/><img src={useBaseUrl('img/api-testing/build-spec/versions.png')} alt="Import to Snapshots folder" width="250"/><br/>

   The URL will populate in the **Enter Request URL** field. <br/><img src={useBaseUrl('img/api-testing/build-spec/sampleRequest.png')} alt="Sample request"/>

   The response body will populate in the **Body** area. <br/><img src={useBaseUrl('img/api-testing/build-spec/responseBody.png')} alt="Response Body"/>

## Generate a Test

See the [Quickstart guide](/api-testing/quickstart/#generate-test) for the steps to generate, run, publish, and view test results.

## More Information

- [Importing from Postman](/api-testing/import-postman-collection/)
- [Importing HAR files](/api-testing/import-har-files/)
