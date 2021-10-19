---
id: quick-start
title: Create Your First Test
sidebar_label: Quickstart
description: Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page is a quickstart guide for getting up and running with our API Fortress tool. Let's get started!

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* If your APIs are behind a firewall, see [Sauce Connect Proxy](/secure-connections/sauce-connect/).


## Create Your Test

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**. This will take you to the API Testing dashboard.

2. Prior to creating a test, you'll need to create a project. Click the **Create Project** button.

  <img src={useBaseUrl('img/api-fortress/2021/01/createProject.png')} alt="Create a Project UI" width="500" />

3. Enter your project details in the **New Project** window.

4. Click **Save** when you're finished. This will bring you to the **Tests** dashboard for the project you've just created.


## Input API Request URL

5. Click **HTTP Client**.

6. Choose from one of the below methods:

  **From an API URL**
   * Paste your API endpoint URL into the **Enter Request URL** field.

  **From a spec file or Postman collection**

   * Click **Import OpenAPI / Postman**
   * Select your spec or Postman Collection file from your local machine.
   * Follow the prompt to select the position in your **Snapshots** tree where you'd like to import the spec file, then click **Save**.
   * In your **Snapshots** tree, click the line item for the API call you'd like to test. This will auto-populate the URL in the **Enter Request URL** field for you.


## Send API Request

7. Next to your URL, click **Send** to submit the API request.


## Generate Functional Tests

8. If your request was successful, you'll see the response populate in the **Body** section along with a **200 OK** status. Click **Generate Test**.

9. Enter your test details in the **New Test** window, then click **Save**. This will generate a series of functional tests for your specific API request.


## Run Test

10. Click the **Run** button to run your test.

11. In the right-hand nav, under **TEST RUNS**, you'll see that a new line item has populated with the name of your test. If successful, you'll see a green checkmark indicator and **Completed with success** message.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/testRuns.png')} alt="Test Runs Section" width="200" />


## Check Your Results

12. To view your test results, hover your mouse over your test line item and click **Open report document**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/testResultsOpen.png')} alt="Open Test Results" width="200" />

13. Take a moment to verify each object in your test report, which displays information regarding your test:
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

* For more information on building tests using a spec file, see [Build from Spec](/api-testing/mark2/quick-start/build-from-spec).
* Check out the [Example Snippets](/api-testing/mark2/quick-start/using-the-example-snippets) provided by the API Fortress Dashboard.
* Learn how to [import Postman Collections](/api-testing/mark2/quick-start/importing-postman-collections) so that you can generate more tests.
* Learn how to schedule a test [here](/api-testing/mark2/quick-start/schedule-a-test).  
* Learn about data and notifications connectors [here](/api-testing/mark2/quick-start/setup-connectors). Simple solutions to plug into the systems you use today (e.g., DataDog or New Relic).
