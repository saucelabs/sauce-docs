---
id: quickstart
title: Create Your First Test
sidebar_label: Quickstart
description: Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page is a quickstart guide for getting up and running with our API Fortress tool.

Below, we walk through how to quickly create a test using an e-commerce API. Let's get started!

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* If your APIs are behind a firewall, see [Sauce Connect Proxy](/secure-connections/sauce-connect/).


## Step 1: Create a Project

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**. This will bring you to the API Testing dashboard.
2. Click the **Create Project** tab or button.

  <img src={useBaseUrl('img/api-fortress/2021/01/createProject.png')} alt="Create a Project UI"/>

3. Enter your project details in the **New Project** window.
  <img src={useBaseUrl('img/api-fortress/2021/01/newProject.png')} alt="New Project Window"/>

4. Click **Save** when you're finished.


## Step 2: Create a Test

1. After you create and name your project, click the **Create Test** button.

  <img src={useBaseUrl('img/api-fortress/2021/01/createTest.png')} alt="Create a Test button"/>

2. Enter the details about your test and click **Save**.

  <img src={useBaseUrl('img/api-fortress/2021/01/createTest2.png')} alt="Enter Test Details"/>

3. Once you've finished creating your test, you should see the __Test Composer__ page.

  <img src={useBaseUrl('img/api-fortress/2021/01/testComposerPage.png')} alt="Test Composer Page"/>

From here, there are two avenues that you can take to build a test:

* Use the _Visual Test Composer_
* Use the _Live Code View_

For the purposes of this quickstart guide, the next page walks through how to use the _Visual Test Composer_ view.

:::tip
To build tests using spec file(s), [Build from Spec](/api-testing/mark2/quick-start/build-from-spec).
:::

## Step 3: Add Test Components

The next step is to add the necessary test components when combined act as our test logic. Generally, there are two types of test components in API Fortress:

* Request (I/O) Component
* Assertion Component

:::note Full Component List
Visit the [I/O Components](/api-testing/mark2/io-components) and [Assertion Components](/api-testing/mark2/assertion-components/assert-compares) sections for more details and descriptions of each test component.
:::

For now, create a simple `GET` request and validate that response is correct.


### Request Component

1. Select the **+ Add Request / Assertions** button.

  <img src={useBaseUrl('img/api-fortress/2021/01/addRequest.png')} alt="Add Request Component"/>

2. Select the `GET` request component.

  <img src={useBaseUrl('img/api-fortress/2021/01/getRequest.png')} alt="GET request Component"/>

3. Edit the following details:
   * In the **Url** field, input `https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions`. This URL will return a `json` response body.
   * In the **Variable** field, input `payload`. This variable stores the response.

    <img src={useBaseUrl('img/api-fortress/2021/01/getFields.png')} alt="GET request fields"/>

4. Leave the rest of the fields blank and click _Save_.

This is what the end result will look like:
  <img src={useBaseUrl('img/api-fortress/2021/01/getRequestEndResult.png')} alt="GET request end result"/>


### Assertion Component

1. Select the **+ Add Request / Assertions** button.
  <img src={useBaseUrl('img/api-fortress/2021/01/addRequest.png')} alt="Add Request Component" width="600" />

2. Select the `Assert Exists` assertion component.
  <img src={useBaseUrl('img/api-fortress/2021/01/assertExists.png')} alt="Assert Exists Component"/>

3. Edit the following details:
   * Expression: `payload.downloads` - This expression checks for the field `"downloads"` in the `json` response body.
  <img src={useBaseUrl('img/api-fortress/2021/01/assertDetails.png')} alt="Assert Exists Details"/>

4. Leave the rest of the fields blank and select _Save_.


## Step 4: Run the Test

1. Before you run the test, select the **Save** icon <img src={useBaseUrl('img/api-fortress/2021/01/save.png')} alt="save icon"/> at the top of the Composer.

2. Then select the **Run** icon <img src={useBaseUrl('img/api-fortress/2021/01/run.png')} alt="run test icon"/> directly next to the Save icon.

<img src={useBaseUrl('img/api-fortress/2021/01/composerToolbar.png')} alt="Test Composer Tool Bar"/>

All test runs appear to the right of the Composer, underneath the test details and environment sections.
<img src={useBaseUrl('img/api-fortress/2021/01/testRuns.png')} alt="Test Runs Section" />


### Viewing Test Results

After the test completes, click on the test run and the test results page should appear. This page displays information regarding the test.

**Test Outcome Report**: Session details such as _Date_, _Mode_, and _Execution Time_.

**Event Details**: Details about the input data, and other useful test information such as:

* Did the test pass or fail?
* Reasons for failure
* HTTP request and response status codes
* Assertion details
  <img src={useBaseUrl('img/api-fortress/2021/01/testResultsPage.png')} alt="Test Results Page" />


## More Information

At this stage, this test is only a draft. You should take a moment to verify each object, and/or add more logic to it. API Fortress has a lot of tools that allow for comprehensive continuous integration testing.

Below are some topics worth exploration:

* Check out the [Example Snippets](/api-testing/mark2/quick-start/using-the-example-snippets) provided by the API Fortress Dashboard.
* Learn how to [import Postman Collections](/api-testing/mark2/quick-start/importing-postman-collections
  ) so that you may generate more tests.
* Learn how to schedule a test [here](/api-testing/mark2/quick-start/schedule-a-test).  
* Learn about data and notifications connectors [here](/api-testing/mark2/quick-start/setup-connectors). Simple solutions to plug into the systems you use today (e.g DataDog or New Relic).
