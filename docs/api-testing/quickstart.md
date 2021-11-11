---
id: quickstart
title: Create Your First Test
sidebar_label: Quickstart
description: Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page is a quickstart guide for getting up and running with API Testing on Sauce Labs. Let's get started!

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* If your APIs are behind a firewall, you'll need to use [Sauce Connect Proxy](/secure-connections/sauce-connect/).


## Set Up Your Tests

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />

2. To set up a test, you'll need a Project first. On the API Testing dashboard, click the **Create Project** button.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/createProject.png')} alt="Create a Project UI" width="500" />

3. In the **New Project** window, enter your **Project Name**. Optionally, you can also add a **Description** and **Notes**). Click **Save** when you're finished. <br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/newProject.png')} alt="New Project window" width="400" />

  This will bring you to the **Tests** dashboard under the project you've just created.

4. From your **Tests** dashboard, click **HTTP Client**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/HTTPClient.png')} alt="HTTP Client" width="400" />

5. Choose from _one_ of the below methods:

   *Method 1*:<br/>Type an API endpoint URL into the **Enter Request URL** field.<br/>
   <img src={useBaseUrl('img/api-fortress/2021/01/enterRequestURL.png')} alt="Enter API URL" width="500" /><br/>

   If you don't have a URL available and would like to test our functionality, try this one: `https://dog.ceo/api/breeds/list/all`.

   or

   *Method 2*:<br/>Click the **Import OpenAPI / Postman** button &#8212; <img src={useBaseUrl('img/api-fortress/2021/01/importSpec.png')} alt="Enter API URL" width="150"/> &#8212; to upload an [OpenAPI spec file](/api-testing/build-from-spec/) or [Postman Collection file](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-postman-data) from your local machine, follow the prompt to save your file your **Snapshots** tree, then click **Save**.
   * If you don't have a file available, use the sample below to test out the functionality. <details><summary>View sample Postman Collection file</summary>Copy the text below > Paste text into a text editor > Save that as a .json file.
      ```json title="demoapif.postman_collection.json"
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

  Under **Snapshots**, click the line item for the API call you'd like to test. This will auto-populate the URL in the **Enter Request URL** field.<br/><img src={useBaseUrl('img/api-fortress/2021/01/importSpec2.png')} alt="Import spec file" width="500"/>

## Send Request

6. Next to your URL, click **Send** to submit your API request.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/enterRequestSave.png')} alt="Enter API Request save" width="500" />

  If the request was successful, the response will populate in the **Body** section, along with a success status.


## Generate Tests

7. Click **Generate Test**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/generateTest.png')} alt="Generate Test" />

8. Enter your test details in the **New Test** window, then click **Save**. This will generate a series of functional tests for your specific API request.


## Run Test

9. Click the **Run** button to run your test.

10. In the right-hand nav, under **TEST RUNS**, you'll see that a new line item has populated with the name of your test. If successful, you'll see a green checkmark indicator and **Completed with success** message.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/testRuns.png')} alt="Test Runs Section" width="200" />


## Check Your Results

11. To view your test results, hover your mouse over your test line item and click **Open report document**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/testResultsOpen.png')} alt="Open Test Results" width="200" />

12. Take a moment to verify each object in your test report, which displays information regarding your test:
    * **Test Outcome Report** section: session details (e.g., _Date_, _Mode_, and _Execution Time_).
    * **Details on the events** section: input data details and other useful test information, such as:
      * Outcome (pass or fail).
      * Reasons for failure.
      * HTTP request and response status codes.
      * Assertion details (not applicable for this example).


<img src={useBaseUrl('img/api-fortress/2021/01/testResultsPage.png')} alt="Test Results Page" width="600" />

:::note

At this stage, your test is still an unpublished draft. Sauce Labs API Testing has a lot of tools that allow for comprehensive continuous integration testing.
:::

:::info Advanced/Optional Step

Go back to your test's **Compose** tab > **Visual** view and try adding more logic.
:::

## More Information

* For more information on building tests using a spec file, see [Build from Spec](/api-testing/build-from-spec).
* Learn how to [import Postman Collections](/api-testing/importing-postman-collections) so that you can generate more tests.
* Learn how to schedule a test [here](/api-testing/schedule-a-test).  
