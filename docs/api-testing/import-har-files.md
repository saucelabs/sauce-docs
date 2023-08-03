---
id: import-har-files
title: Importing HAR files and HAR files from RDC or VDC
sidebar_label: Importing HAR files
description: 'Automatically generate tests from an existing HAR file.'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you have an HTTP Archive (HAR) file or you have tested using Real Device Cloud (RDC) or Virtual Device Cloud (VDC), you can import it directly into API Testing on Sauce Labs and use it to generate tests.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
- A HAR file or a HAR file from RDC/VDC.

:::note
Looking to import from a spec file? See [Building a Test from a Spec File](/api-testing/build-from-spec/).
:::

## Importing a HAR File

You can import a HAR (HTTP Archive) file into API Testing to automatically generate a functional test.

To import a HAR file:

1. In Sauce Labs, click **API Testing**.

   <img src={useBaseUrl('/img/api-testing/apit-nav-rebrend.png')} alt="Navigating to API Testing" width="200"/>

2. On the **Projects** page, under the project, you want to import the file to, click **HTTP Client**.

   <img src={useBaseUrl('/img/api-testing/http-client-nav.png')} alt="Navigating to the HAR import modal" width="600"/>

3. On the **HTTP Client** page, click **Import OpenAPI/Postman**, then click **Import OpenAPI/Postman Collection/.har** and then, select and upload your HAR file from your local machine.

   <img src={useBaseUrl('/img/api-testing/import-har.webp')} alt="Navigating to the HAR import modal" width="300"/>

4. Click the folder in your **Snapshots** tree where you'd like to save your file.
   <img src={useBaseUrl('img/api-testing/importFolderRebrand.png')} alt="Routes Rendered" width="350"/>

5. Click **Save**.
   <img src={useBaseUrl('img/api-testing/importFolder2Rebrand.png')} alt="Import file to Project" width="350"/>

6. The routes from your file will now show in the list of saved requests.

7. In the folder, click on a snapshot to view its details in the response panel.

8. To create a test based on the imported file, click **Generate Test**. For more information about creating a test, see [Create a Test](/api-testing/composer#create-a-test).

## Importing a HAR File from RDC and VDC

You can import a HAR (HTTP Archive) file into API Testing to automatically generate a functional test from RDC or VDC. Network Traffic Capture and Extended Debugging must be enabled to use this feature. See [Network Traffic Capture](/mobile-apps/features/network-capture) and [Enabling Extended Debugging](/insights/debug#enabling-extended-debugging) for more information.

To import a HAR file:

1. In Sauce Labs, click **API Testing**.

   <img src={useBaseUrl('/img/api-testing/apit-nav-rebrend.png')} alt="Navigating to API Testing" width="200"/>

2. On the **Projects** page, under the project, you want to import the file to, click **HTTP Client**.

   <img src={useBaseUrl('/img/api-testing/http-client-nav.png')} alt="Navigating to the HAR import modal" width="600"/>

3. On the **HTTP Client** page, click **Import OpenAPI/Postman**, and then click **Import Har from RDC Job** or **Import Har from VDC Job**.

   <img src={useBaseUrl('/img/api-testing/import-har-nav-rebrand.webp')} alt="Navigating to the HAR import modal" width="300"/>

4. In the **Import Snapshots** window, click a test in the list and then click **Import**. You can filter this list by job owner or job type.

   <img src={useBaseUrl('/img/api-testing/import-har-import-rebrand.webp')} alt="Import the file" width="600"/>

5. In the **Snapshots** panel, navigate to a folder and then click **Save**.

   <img src={useBaseUrl('/img/api-testing/save-import-rebrand.png')} alt="Selecting a folder" width="400"/>

6. When the import is complete, in the **Snapshots** panel, open the folder you imported the files to.

7. In the folder, click on a snapshot to view its details in the response panel.

   <img src={useBaseUrl('/img/api-testing/import-har-calls-rebrand.webp')} alt="Viewing call details" width="600"/>

8. To create a test based on the imported file, click **Generate Test**. For more information about creating a test, see [Create a Test](/api-testing/composer#create-a-test).

## More Information

- [Build a Sauce Labs API Test from a Spec File](/api-testing/build-from-spec)
- [Importing from Postman](/api-testing/import-postman-collection/)
