---
id: quick-start
title: Create Your First Test
sidebar_label: Creating a Test
description: Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page is a Quickstart guide for getting up and running with the API Fortress tool. API Fortress may be deployed in our hosted cloud or self-hosted/on-premises via a container behind your firewall. Maintain complete test data ownership. [Learn more about the differences between the two types of deployments](/api-testing/mark2/self-hosted/on-prem-platform). 

Below, we walk through how to quickly create a test using an e-commerce API. Let's get started!

## What You'll Need

* An API Fortress Account

:::caution Confirm your Email Address
You should receive an email with your login credentials from the platform. If you haven’t, please email us at [support@saucelabs.com](mailto:support@saucelabs.com). If you’d like to trial mocking or load testing, please contact support or your API Fortress representative.
:::


## Step 1: Create a Project

When you first log in, you are introduced to the Company Dashboard. The company already contains a project called Examples with some example tests.

Select **Create Project** and then create a project name.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-3.45.11-PM.png')} alt="Create a Project UI"/>

## Step 2: Create a Test

After you name your project, select **Create Test** and name your test.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-3.46.42-PM.png')} alt="Create a Test UI"/>

Once you finish naming your test, you should see the _Interstitial Page_.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.21.22-PM.png')} alt="Create a Test UI"/>

There are two avenues that you may take in building a test from here:

* Generate a test manually
* Build from a spec file

If you want to build a test manually, API Fortress is capable of building a test draft for you using the **Generate Test** button. You can also create a test by building from a spec file, or an Apiary account.

For the purposes of this quickstart guide, we will show you how to use the **Generate Test** button.

:::tip Build Test from a Spec File
To build a test using a spec file see: [Build from Spec](/api-testing/mark2/quick-start/build-from-spec).
:::

## Step 3: Create an HTTP Request

In order to generate a test based on the HTTP response payload, we need to add a sample HTTP request using an example test API.

1. Select **Compose** in the left-hand portion of the Interstitial page.

   <img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.54.09-PM.png')} alt="Click compose"/>

   :::tip Visual Composer Tutorial
   You will be presented with a tutorial on the Visual Composer. The final screen of the tutorial provides you with further instructions on how to create a test. Feel free to explore the tutorial and then close the window in order to return to the _Console_.
   :::

1.  Select the **HTTP Client** button in the left panel.

   <img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.59.14-PM.png')} alt="Click HTTP Client"/>

1. Copy and paste the following url in the empty _Request url_ form at the bottom of the page:

   ```http request
   http://demoapi.apifortress.com/api/retail/product
   ```

   > The above test API is a simple `GET` request, so leave the dropdown as is.

1. Select the **Send** button to generate the response payload. Here's what it looks like in the UI:

   <img src={useBaseUrl('img/api-fortress/2019/06/sendRequest.png')} alt="Send a Request"/>

   You should receive the following response code in the Body tab:

   ```json
   {
      Status: 401,
      Message: "Unauthorized Token"
   }
   ```

   Normally this means you need to add an auth token/header, but for this particular demo api we can sidestep this requirement with a simple header.

1. Under the Headers tab add the following values: `key:ABC123`, here's what it looks like in the UI:

   <img src={useBaseUrl('img/api-fortress/2019/06/addHeader.png')} alt="Add a Header"/>

   Select the __Send__ button one more time and after the response payload appears, select __Save__, name your request, then select **Save Request**.

   <img src={useBaseUrl('img/api-fortress/2019/06/Screen Shot 2021-04-05 at 5.29.32 PM.png')} alt="Save Button"/>

## Step 4: Use the Generate Test Button

Now select the **Generate Test** button to generate a test draft.

<img src={useBaseUrl('img/api-fortress/2019/06/generateTestButton.png')} alt="Generate Test"/>

The following screens allow you to choose whether you want to create the input set based on the data provided in the request, and if you want Magic to generate the assertions. The final screen summarizes what was done. Select **Continue** on each screen.

| <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/screen1.png')} width="100%" alt="Screen 1"/></p> <p align="center"><small>Screen 1</small></p> | <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/screen2.png')} width="100%" alt="Screen 2"/></p> <p align="center"><small>Screen 2</small></p>             |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <strong><p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/screen3.png')} width="100%" alt="Screen 3"/></p> <p align="center"><small>Screen 3</small></p></strong> | <strong><p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/finalScreen.png')} width="100%" alt="Final Screen"/></p> <p align="center"><small>Final Screen</small></p></strong> |

After you successfully generate your first test, the generated test appears in the Visual Editor:


<p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/visual.png')} width="75%" alt="Screen 2"/></p>
<p align="center"><small>Visual Editor</small></p>               

The values for `${protocol}${domain}${endpoint}`, directly correlate with the values generated from the **Generate Test** button in the `HTTP Client` tool. You can find these values by selecting __Input Sets__ in the left hand side of the UI:

<p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/inputSets.png')} width="25%" alt="Screen 1"/></p>
<p align="center"><small>Global Parameters & Input Set</small></p>

Congratulations! You've just created your first test!

## Next Steps

At this stage, this test is only a draft. You should take a moment to verify each object, and/or add more logic to it. API Fortress has a lot of tools that allow for comprehensive continuous integration testing. Magic Test Generation is great at understanding datatypes and structure, which is often 90% of the work.

### Additional Topics

* Check out the [Example Snippets](/api-testing/mark2/quick-start/using-the-example-snippets) provided by the API Fortress Dashboard.
* Learn how to [import Postman Collections](/api-testing/mark2/quick-start/importing-postman-collections
  ) so that you may generate more tests.
* Learn how to schedule a test [here](/api-testing/mark2/quick-start/schedule-a-test).  
* Learn about data and notifications connectors [here](/api-testing/mark2/quick-start/setup-connectors/). Simple solutions to plug into the systems you use today (e.g DataDog or New Relic).
