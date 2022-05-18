---
id: quickstart
title: Sauce Labs API Testing Quickstart
sidebar_label: Quickstart
description: Learn how to quickly generate an API test using the payload from an API call or from a specification file.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

As the number of APIs communicating with microservices in apps continues to increase, many bugs cannot be captured by UI testing alone. Our API Testing and Monitoring solution combines automated testing, reporting, debugging, diagnostics, and immediate data-driven insight in a centralized platform.

Running a functional test on an API takes seconds and will display a pass/fail status as well as the cause(s) for any failures, such as a broken endpoint, API flow, or a bug in the app itself. You can then reuse functional tests as end-to-end monitoring tests that run continuously, thereby maintaining accurate and reliable feedback loops. And by developing APIs in parallel with your testing, you can accelerate working and improve quality throughout development, staging, and production.

This Quickstart guide will get you up and running with a functional API Test. Let's get started!


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

:::note
If your APIs are behind a firewall, you'll need to set up a [Sauce Connect Proxy](/secure-connections/sauce-connect/) tunnel before proceeding.
:::


## Create Project

1. Log in to Sauce Labs, then click **API Testing**.

2. From the list of test creation methods, click **Use HTTP Client**.<br/><img src={useBaseUrl('img/api-fortress/2021/01/newtestHTTP.png')} alt="Enter API URL" width="550" />

:::note Returning Users
If you're seeing an existing list of Projects instead of the landing page shown above, click **Create Project** instead.<br/><img src={useBaseUrl('img/api-fortress/2021/01/createProject.png')} alt="Create Project" width="450" />

:::

3. In the **Create a New Project** window:
   * Set the **Create from** dropdown to **blank project**.
   * Enter your **Project Name**.
   * Optionally, you can add **Tags**, a **Description**, **Notes**. For the purpose of this Quickstart, leave **Access** as-is.
   * Click **Save** when you're finished. <br/><img src={useBaseUrl('img/api-fortress/2021/01/newProject.png')} alt="Create a Project UI" width="300" />


## Create Test

For the purpose of this Quickstart, we'll test a `GET` call from [Dog CEO](https://dog.ceo/dog-api/documentation/), a public API that generates a list of dog breeds.

In the **HTTP Client** tab > **Enter request URL** field, enter `https://dog.ceo/api/breeds/list/all`:
<img src={useBaseUrl('img/api-fortress/2021/01/enterRequestURL.png')} alt="Enter API URL" width="500" />


## Send Request

Click **Send** to submit this HTTP request.<br/><img src={useBaseUrl('img/api-fortress/2021/01/enterRequestSave.png')} alt="Enter API Request save" width="500" />

The JSON response &#8212; in this case, a list of dog breeds &#8212; will populate in the **Body** section along with a **200** OK success status.<br/><img src={useBaseUrl('img/api-fortress/2021/01/testSuccess.png')} alt="API Request success" width="400" />


## Generate Test

1. Click **Generate Test**.<br/><img src={useBaseUrl('img/api-fortress/2021/01/generateTest.png')} alt="Generate Test"  width="400" />

2. In the **New Test** window:
   * Enter your **Test Name**.
   * Optionally, you can add a **Description** and/or **Tags**.
   * Click **Create Test** when you're finished.<br/><img src={useBaseUrl('img/api-fortress/2021/01/testDetails.png')} alt="Create Test" width="400"/>

  This will generate a series of functional tests for this specific API request.
  :::tip
  <details><summary>Viewing your test data</summary>

  **Visual** view shows your test as components:<br/><img src={useBaseUrl('img/api-fortress/2021/02/testVisual.png')} alt="Sample Test Visual View"/>

  **Code** view displays it as code:<br/><img src={useBaseUrl('img/api-fortress/2021/02/testCode.png')} alt="Sample Test Code View"/>
  </details>
  :::

## Run Test

1. Click the **Run** button to run your test.<br/><img src={useBaseUrl('img/api-fortress/2021/01/runTest.png')} alt="Run Test" width="550"/>

1. In the right-hand nav, under **Test Runs**, you'll see that a new line item has populated with the name of your test. If successful, you'll see a green checkmark indicator and **Completed with success** message.<br/><img src={useBaseUrl('img/api-fortress/2021/01/testRuns.png')} alt="Test Runs Section" width="300" />


## View Test Results

1. To view your test results, hover your mouse over your test line item and click **Open report document**.<br/><img src={useBaseUrl('img/api-fortress/2021/01/testResultsOpen.png')} alt="Open Test Results" width="200" />

1. Your test report will open in a new browser tab. The report displays granular test information that's helpful for debugging any failures ([more info](/api-testing/project-dashboard/#test-outcome-reports)).<br/><img src={useBaseUrl('img/api-fortress/2021/01/testResultsPage.png')} alt="Test Results Page" width="600" />


## Publish Your Test

Our API Testing interface has a unique working copy/published copy workflow that allows you to edit a test without affecting the active (already published) version. Here's how to publish the working copy of your test.

1. Once you've finish reviewing and/or editing your test, navigate to the **Unpublished changes** section, where it states that your test is currently unpublished.<br/><img src={useBaseUrl('img/api-fortress/2021/02/unpublished.png')} alt="Unpublished Test" width="200" />

2. Hover your mouse over the section to reveal the **Clear** and **Publish** buttons.<br/><img src={useBaseUrl('img/api-fortress/2021/02/publishButton.png')} alt="Publish Test Button" width="200"/>

3. Click the **Publish** button to publish your working copy.<br/><img src={useBaseUrl('img/api-fortress/2021/02/published.png')} alt="Published Test" width="200"/>


## Optional Next Steps

Sauce Labs API Testing has a full suite of tools that enables comprehensive continuous integration testing.

* Set up a [recurring test schedule](/api-testing/schedule-test) so that you can monitor the health of your APIs.
* Go back to your test's **Compose** tab and [add logic/components](/api-testing/composer/).
* Create a new test from a [spec file](/api-testing/build-from-spec) or [Postman collection](/api-testing/import-postman-collection).
   * When you [generate a test](#generate-test) this way, the test components will be based on your imported request-and-response data.
* Create a new test [from scratch](/api-testing/composer/).
* Watch our [API Testing and Monitoring](https://saucelabs.com/resources/videos/api-testing-and-monitoring-demo)
