---
id: import-postman-collection
title: Importing Postman Collections, Variables, and Environments
sidebar_label: Import from Postman
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you have a [Postman API Collection](https://www.postman.com/collection/), you can import it directly into API Testing on Sauce Labs and use it to generate tests.


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* A Postman Collection that's v2 or higher. We no longer support the Postman v1 Collection format, which was deprecated by Postman.
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## Importing Postman Collections

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Click to open one of your Projects.
3. Click the __HTTP Client__ tab.<br/><img src={useBaseUrl('img/api-fortress/2021/01/HTTPClient.png')} alt="HTTP Client" width="400" />
4. Click the **Import OpenAPI / Postman** button, then select and upload your Postman Collection file from your local machine.<br/><img src={useBaseUrl('img/api-fortress/2021/01/importSpec.png')} alt="Import OpenAPI / Postman button" width="250"/>

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

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
1. Click to open one of your Projects.
1. Click the __Vault__ tab.<br/><img src={useBaseUrl('img/api-fortress/2021/04/vault.png')} alt="Project Vault" width="600"/>
1. Click **Variables**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/projectVault.png')} alt="Project Vault Variables" width="600"/>
1. Click **Import**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/import.png')} alt="Project Vault Import" width="100"/>
1. Select and upload your `.postman_environment.json` file.

Your environmental variables will now be available in the __Variables__ section of your Project.


## Importing Postman Variables

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
1. Click the __Company Vault__ tab.<br/><img src={useBaseUrl('img/api-fortress/2021/04/companyVault.png')} alt="Company Vault" width="400"/>
1. Click the **Variables** radio button.<br/><img src={useBaseUrl('img/api-fortress/2021/04/companyVault2.png')} alt="Company Vault" width="400"/>
1. Click **Import**.
1. Select and upload your `.postman_environment.json` file.

Your environmental variables will now available across all your Projects.


## More Information

* [Postman Documentation | Importing and Exporting Data](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-postman-data): learn to export Postman Collections.
