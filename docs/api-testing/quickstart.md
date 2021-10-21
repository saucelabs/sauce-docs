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
* If your APIs are behind a firewall, see [Sauce Connect Proxy](/secure-connections/sauce-connect/).


## Set Up Your Project and Test

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/APIlandingpage.png')} alt="API Testing landing page" />

2. On the API Testing dashboard, click the **Create Project** button.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/createProject.png')} alt="Create a Project UI" width="500" />

3. Enter your project details in the **New Project** window, then click **Save** when you're finished. This will bring you to the **Tests** dashboard under the project you've just created.

4. From your **Tests** dashboard, click **HTTP Client**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/HTTPClient.png')} alt="HTTP Client" width="300" />

5. Choose from _one_ of the below methods:
   * **Directly input API request URL**
     * Type an API endpoint URL into the **Enter Request URL** field.
    <img src={useBaseUrl('img/api-fortress/2021/01/enterRequestURL.png')} alt="Enter API URL" width="500" />

   or

   * **Import from a spec file or Postman collection**
     * Click **Import OpenAPI / Postman** and select your file from your local machine.
     * Follow the prompt to select the position in your **Snapshots** tree where you'd like to import the spec file, then click **Save**.
     * In your **Snapshots** tree, click the line item for the API call you'd like to test. This will auto-populate the URL in the **Enter Request URL** field.


## Send Request

6. Next to your URL, click **Send** to submit your API request.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/enterRequestSave.png')} alt="Create a Project UI" width="500" />


## Generate Tests

7. If your request was successful, you'll see the response populate in the **Body** section along with a **200 OK** status. Then, click **Generate Test**.

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

* For more information on building tests using a spec file, see [Build from Spec](/api-testing/on-prem/quick-start/build-from-spec).
* Check out the [Example Snippets](/api-testing/on-prem/quick-start/using-the-example-snippets) provided by the API Fortress Dashboard.
* Learn how to [import Postman Collections](/api-testing/on-prem/quick-start/importing-postman-collections) so that you can generate more tests.
* Learn how to schedule a test [here](/api-testing/on-prem/quick-start/schedule-a-test).  
* Learn about data and notifications connectors [here](/api-testing/on-prem/quick-start/setup-connectors). Simple solutions to plug into the systems you use today (e.g., DataDog or New Relic).
