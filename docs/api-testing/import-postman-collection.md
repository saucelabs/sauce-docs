---
id: import-postman-collection
title: Importing Postman Collections, Variables, and Environments
sidebar_label: Importing from Postman
description: 'Automatically generate tests from an existing Postman Collection.'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you have a [Postman API Collection](https://www.postman.com/collection/), you can import it directly into API Testing on Sauce Labs and use it to generate tests.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
- A Postman Collection (v2.0 or higher).

:::note
Looking to import from a spec file? See [Building a Test from a Spec File](/api-testing/build-from-spec/).
:::

## Importing Postman Collections

1. Log in to Sauce Labs, then click **API Testing**.
2. Click to open one of your Projects.
3. Click the **HTTP Client** tab.<br/><img src={useBaseUrl('img/api-testing/HTTPClient_new_brand.png')} alt="HTTP Client" width="300" />
4. Click **Import OpenAPI/Postman**, then **Import OpenAPI/Postman Collection/.har** and then, select and upload your Postman Collection file from your local machine.<br/><img src={useBaseUrl('img/api-testing/importSpecRebrand.png')} alt="Import OpenAPI / Postman button" width="400"/>

:::tip

If you don't have a file available, try out the sample below.

<details>
<summary>Click here to open a sample Postman Collection file</summary>Copy the text below, paste the text into a text editor, then save that as a .json file.<br/><br/>

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

5. Click the folder in your **Snapshots** tree where you'd like to save your file.<br/><img src={useBaseUrl('img/api-testing/importFolderRebrand.png')} alt="Routes Rendered" width="350"/>
6. Click **Save**.<br/><img src={useBaseUrl('img/api-testing/importFolder2Rebrand.png')} alt="Import file to Project" width="350"/>
7. The routes from your collection will now show in the list of saved requests.<br/><img src={useBaseUrl('img/api-testing/routesRendered.png')} alt="Import file to Project" width="400"/>

## Importing Postman Environments

Postman Environments can be imported in both (Company/Project) Vault and Environments. Let's see how to do this in both cases:

### Importing in Company/Project Vault

If you want to import in the **Company Vault**:

1. Log in to Sauce Labs, then click **API Testing**.
1. Click the **Company Vault** tab.<br/><img src={useBaseUrl('img/api-testing/companyVault.png')} alt="Company Vault" width="400"/>
1. Click **Import** from the Variables section.
1. Select and upload your `.postman_environment.json` file.

Your environmental variables will now be available across all your Projects.

If you want to import in the **Project Vault**:

1. Log in to Sauce Labs, then click **API Testing**.
1. Click to open one of your Projects.
1. Click the **Vault** tab.<br/><img src={useBaseUrl('img/api-testing/projectVault.png')} alt="Project Vault" width="300"/>
1. Click **Import** from the Variables section.
1. Select and upload your `.postman_environment.json` file.

Your environmental variables will now be available in your Project.

### Importing in Environments

1. Log in to Sauce Labs, then click **API Testing**.
1. Click to open one of your Projects.
1. Click the **Environments** tab.<br/><img src={useBaseUrl('img/api-testing/importEnvironments.png')} alt="Environments" width="300"/>
1. Click **Import**.
1. Select and upload your `.postman_environment.json` file.

Your environmental variables will now be available as an Environment in your Project.

## More Information

- [Build a Sauce Labs API Test from a Spec File](/api-testing/build-from-spec)
- [Build a Sauce Labs API Test from a HAR File](/api-testing/import-har-files/)
- [Importing and Exporting Data from Postman](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-postman-data)
