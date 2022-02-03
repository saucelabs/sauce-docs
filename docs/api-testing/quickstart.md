---
id: quickstart
title: Sauce Labs API Testing Quickstart
sidebar_label: Quickstart
description: Learn how to quickly generate an API test using the payload from an API call or from a specification file.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

As the number of APIs communicating with microservices in apps continues to increase, many bugs cannot be captured by UI testing alone. Our API Testing and Monitoring solution combines automated testing, reporting, debugging, diagnostics, and immediate data-driven insight in a centralized platform.

Running functional tests on your APIs allows you to zero in on the cause(s) for any failures, such as a broken endpoint, API flow, or a bug in the app itself. You can then reuse functional tests as end-to-end monitoring tests that run continuously, thereby maintaining accurate and reliable feedback loops. And by developing APIs in parallel with your testing, you can accelerate working and improve quality throughout development, staging, and production.

This Quickstart guide will get you up and running with a functional API Test in minutes. Let's get started!



## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

:::note
If your APIs are behind a firewall, you'll need to set up a [Sauce Connect Proxy](/secure-connections/sauce-connect/) tunnel before proceeding.
:::


## Create Project

1. Log in to Sauce Labs, then click **API Testing**.
2. To start testing, you'll need a Project first. On the API Testing dashboard, click the **Create Project** button.<br/><img src={useBaseUrl('img/api-fortress/2021/01/createProject.png')} alt="Create Project" width="450" />
3. In the **Create a New Project** window:
   * Set the **Create from** dropdown to **blank project**.
   * Enter your **Project Name**.
   * Optionally, you can add **Tags**, a **Description**, and/or **Notes**.
   * Set the **Access** dropdown to **Organization**.
   * Click **Save** when you're finished. <br/><img src={useBaseUrl('img/api-fortress/2021/01/newProject.png')} alt="Create a Project UI" width="500" />

## Create Test

4. From the list of test options, click **Use HTTP Client**.
5. In the **Enter request URL** field, enter an API endpoint URL.<br/><img src={useBaseUrl('img/api-fortress/2021/01/enterRequestURL.png')} alt="Enter API URL" width="500" />
  <details><summary>What if I don't have a URL?</summary>

  If you need a sample for this Quickstart, try using this API `GET` call from [Dog CEO](https://dog.ceo/dog-api/) that will generate a list of dog breeds.

  ```bash
  https://dog.ceo/api/breeds/list/all
  ```

  </details>

## Send Request

6. Click **Send** to submit your API request.<br/><img src={useBaseUrl('img/api-fortress/2021/01/enterRequestSave.png')} alt="Enter API Request save" width="500" />

  If the request was successful, the response will populate in the **Body** section, along with a **200** OK success status.<br/><img src={useBaseUrl('img/api-fortress/2021/01/testSuccess.png')} alt="API Request success" width="400" />

## Generate Test

7. Click **Generate Test**.<br/><img src={useBaseUrl('img/api-fortress/2021/01/generateTest.png')} alt="Generate Test"  width="400" />

8. Enter your test details in the **New Test** window, then click **Create Test**. This generates a series of functional tests for this specific API request.<br/><img src={useBaseUrl('img/api-fortress/2021/01/testDetails.png')} alt="Create Test" width="400"/>


## Run Test

9. Click the **Run** button to run your test.<br/><img src={useBaseUrl('img/api-fortress/2021/01/runTest.png')} alt="Run Test" width="450"/>
  :::tip
  <details><summary>Viewing your test data</summary>

  **Visual** view shows your test as components:<br/><img src={useBaseUrl('img/api-fortress/2021/02/testVisual.png')} alt="Sample Test Visual View"/>

  **Code** view displays it as code:<br/><img src={useBaseUrl('img/api-fortress/2021/02/testCode.png')} alt="Sample Test Code View"/>

  Should you decide later on to create a new test from a spec file or Postman collection, test component data will be based on your imported request-and-response data.
  </details>
  :::


10. In the right-hand nav, under **Test Runs**, you'll see that a new line item has populated with the name of your test. If successful, you'll see a green checkmark indicator and **Completed with success** message.<br/><img src={useBaseUrl('img/api-fortress/2021/01/testRuns.png')} alt="Test Runs Section" width="300" />


## Review Test Results

11. To view your test results, hover your mouse over your test line item and click **Open report document**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/testResultsOpen.png')} alt="Open Test Results" width="200" />

12. Take a moment to verify each object in your [Test Outcome Report](/api-testing/test-reports/), which displays information regarding your test.<br/><img src={useBaseUrl('img/api-fortress/2021/01/testResultsPage.png')} alt="Test Results Page" width="600" />



<details><summary><strong>Optional next steps</strong></summary>

At this stage, your test is still an unpublished draft. Sauce Labs API Testing has a lot of tools that allow for comprehensive continuous integration testing.

* [Publish your test](/api-testing/schedule-test/#publish-the-working-copy), then set up a [recurring test schedule](/api-testing/schedule-test)
* Go back to your test's **Compose** tab and [add logic/components](/api-testing/composer/)
* Create a new test from a [spec file](/api-testing/build-from-spec), [Postman collection](/api-testing/import-postman-collection), or [build one from scratch](/api-testing/composer/)

</details>
