---
id: import-postman-collection
title: Importing Postman Collections, Variables, and Environments
sidebar_label: Import Test from Postman
description: "Automatically generate tests from an existing Postman Collection."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you have a [Postman API Collection](https://www.postman.com/collection/), you can import it directly into API Testing on Sauce Labs and use it to generate tests.


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
* A Postman Collection (v2.0 or higher).

:::note
Looking to import from a spec file? See [Building a Test from a Spec File](/api-testing/build-from-spec/).
:::

## Importing Postman Collections

1. Log in to Sauce Labs, then click **API Testing**.
2. Click to open one of your Projects.
3. Click the __HTTP Client__ tab.<br/><img src={useBaseUrl('img/api-fortress/2021/01/HTTPClient.png')} alt="HTTP Client" width="400" />
4. Click the **Import OpenAPI/HAR/Postman** button, then select and upload your Postman Collection file from your local machine.<br/><img src={useBaseUrl('img/api-fortress/2021/01/importSpec.png')} alt="Import OpenAPI / Postman button" width="250"/>

:::tip

If you don't have a file available, try out the sample below.
<details><summary>Click here to open sample Postman Collection file</summary>Copy the text below, paste text into a text editor, then save that as a .json file.<br/><br/>

```json title="demo_postman_collection.json"
{
  "info": {
    "_postman_id": "901ae894-37d4-45c1-b1bc-bd6b31762bfe",
    "name": "demoapif",
    "description": "Call to the APIF demo API All Products Get.",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "product",
      "item": [
        {
          "name": "List All Products",
          "request": {
            "auth": {
              "type": "oauth2",
              "oauth2": [
                {
                  "key": "addTokenTo",
                  "value": "header",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [
              {
                "key": "Accept",
                "value": "application/json"
              },
              {
                "key": "key",
                "value": "ABC123",
                "type": "text"
              }
            ],
            "url": {
              "raw": "http://demoapi.apifortress.com/api/retail/product",
              "protocol": "http",
              "host": [
                "demoapi",
                "apifortress",
                "com"
              ],
              "path": [
                "api",
                "retail",
                "product"
              ]
            }
          },
          "response": []
        }
      ],
      "description": "Folder for product"
    }
  ]
}
```
</details>

:::

5. Click the folder your **Snapshots** tree where you'd like to save your file.<br/><img src={useBaseUrl('img/api-fortress/2021/04/importFolder.png')} alt="Routes Rendered"/>
6. Click **Save**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/importFolder2.png')} alt="Import file to Project"/>
7. The routes from your collection will now show in the list of saved requests.<br/><img src={useBaseUrl('img/api-fortress/2021/04/routesRendered.png')} alt="Import file to Project" width="400"/>


## Importing Postman Environments

1. Log in to Sauce Labs, then click **API Testing**.
1. Click to open one of your Projects.
1. Click the __Vault__ tab.<br/><img src={useBaseUrl('img/api-fortress/2021/04/vault.png')} alt="Project Vault" width="600"/>
1. Click **Variables**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/projectVault.png')} alt="Project Vault Variables" width="600"/>
1. Click **Import**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/import.png')} alt="Project Vault Import" width="100"/>
1. Select and upload your `.postman_environment.json` file.

Your environmental variables will now be available in the __Variables__ section of your Project.


## Importing Postman Variables

1. Log in to Sauce Labs, then click **API Testing**.
1. Click the __Company Vault__ tab.<br/><img src={useBaseUrl('img/api-fortress/2021/04/companyVault.png')} alt="Company Vault" width="400"/>
1. Click the **Variables** radio button.<br/><img src={useBaseUrl('img/api-fortress/2021/04/companyVault2.png')} alt="Company Vault" width="400"/>
1. Click **Import**.
1. Select and upload your `.postman_environment.json` file.

Your environmental variables will now available across all your Projects.

## Importing a HAR File from an RDC Job
<p><span className="sauceDBlue">RDC Only</span></p>

You can import a HAR (HTTP Archive) file into API Testing to automatically generate a functional test. Network Traffic Capture must be enabled to use this feature. See [Network Traffic Capture](/mobile-apps/features/network-capture) for more information.

To import a HAR file:

1. In Sauce Labs, click **API Testing**.

  <img src={useBaseUrl('/img/api-testing/api-testing-nav.png')} alt="Navigating to API Testing" width="300"/>

2. On the **Projects** page, under the project you want to import the file to, click **HTTP Client**.

  <img src={useBaseUrl('/img/api-testing/http-client-nav.png')} alt="Navigating to the HAR import modal" width="600"/>

3. On the **HTTP Client** page, click **Import OpenAPI/Postman**, and then click **Import Har from RDC Job**.

  <img src={useBaseUrl('/img/api-testing/import-har-nav.png')} alt="Navigating to the HAR import modal" width="300"/>

4. In the **Import Snapshots from RDC Jobs** window, click a test in the list and then click **Import**. You can filter this list by job owner or job type.

  <img src={useBaseUrl('/img/api-testing/import-har-import.png')} alt="Import the file" width="600"/>

5. In the **Snapshots** panel, navigate to a folder and then click **Save**.

  <img src={useBaseUrl('/img/api-testing/import-har-location.png')} alt="Selecting a folder" width="400"/>

6. When the import is complete, in the **Snapshots** panel, open the folder you imported the files to.

7. In the folder, click on snapshot to view its details in the response panel.

  <img src={useBaseUrl('/img/api-testing/import-har-calls.png')} alt="Viewing call details" width="600"/>

8. To create a test based on the imported file, click **Generate Test**. For more information about creating a test, see [Create a Test](/api-testing/composer#create-a-test).

## More Information

* [Build a Sauce Labs API Test from a Spec File](/api-testing/build-from-spec)
* [Importing and Exporting Data from Postman](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-postman-data)
