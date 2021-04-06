---
id: quick-start
title: Create a Test Quickly
sidebar_label: Create a Test Quickly
description: Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page is a quickstart guide for getting up and running with the API Fortress tool. API Fortress may be deployed in our hosted cloud or self-hosted/on-premises via a container behind your firewall. Maintain complete test data ownership. [Learn more about the differences between the two types of deployments](/api-testing/self-hosted/on-prem-platform). 

Below, we walk through how to quickly create a test using an e-commerce API. Let's get started!

## What You'll Need

* An API Fortress Account

:::caution Confirm your Email Address 
You should have received an email with your login credentials from the platform. If you haven’t, please email us at [support@apifortress.com](mailto:support@apifortress.com). If you’d like to trial mocking or load testing, please contact support or your API Fortress representative.
:::


## Step 1: Create a Project

When you first log in, you are introduced to the Company Dashboard. The company already contains a project called Examples with some example tests. 

Select **Create Project** and then create a project name.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-3.45.11-PM.png')} alt="Create a Project UI"/>

## Step 2: Create a Test

After you name your project, select **Create Test** and name your test.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-3.46.42-PM.png')} alt="Create a Test UI"/>

Once you finish naming your test, you should see to the Interstitial page. 

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.21.22-PM.png')} alt="Create a Test UI"/>

There are two avenues that you may take in building a test from here: 

* Generate a test manually 
* Build from a spec file

If you want to build a test manually, API Fortress is capable of building a test draft for you using the **Generate Test** button. You can also create a test by building from a spec file, or an Apiary account. 

For the purposes of this quickstart guide, we will show you how to use the **Generate Test** button. 

:::tip Build Test from a Spec File
To build a test using a spec file see: [Build from Spec](/api-testing/quick-start/build-from-spec).
:::

## Step 3: Create an HTTP Request

Next we need to generate a sample HTTP request, using an example test API, in order to generate a test based on the response payload.

1. Select **Compose** in the left-hand portion of the Interstitial page.

   <img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.54.09-PM.png')} alt="Click compose"/>

   :::tip Visual Composer Tutorial
   You will be presented with a tutorial on the Visual Composer. The final screen of the tutorial provides you with further instructions on how to create a test. Feel free to explore the tutorial and then close the window in order to return to the _Console_.
   :::
   
1.  Select the **HTTP Client** button in the left panel.

   <img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.59.14-PM.png')} alt="Click HTTP Client"/>
 
1. Copy and paste the following url in the empty _Request url_ form at the bottom of the page:
   
   ```http request
   https://mastiff.apifortress.com/app/api/exmples/retail/product?id=611
   ```
   
   > The above test API is a simple `GET` request, so leave the dropdown as is.

1. Select the **Send** button to generate the response payload.

   <img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-5.02.25-PM.png')} alt="Send Button"/>
   
    After the response payload appears, select __Save__, name your request, then select **Save Request**.
   
   <img src={useBaseUrl('img/api-fortress/2019/06/Screen Shot 2021-04-05 at 5.29.32 PM.png')} alt="Save Button"/>
   
## Step 4: Use the Generate Test Button

Now select the **Generate Test** button to generate a test draft.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-5.05.44-PM.png')} alt="Generate Test"/>

The following screens allow you to choose whether you want to create the input set based on the data provided in the request, and if you want Magic to generate the assertions. The final screen summarizes what was done. Select **Continue** on each screen.

| <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/screen1.png')} width="100%" alt="Screen 1"/></p> <p align="center"><small>Screen 1</small></p> | <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/screen2.png')} width="100%" alt="Screen 2"/></p> <p align="center"><small>Screen 2</small></p>             |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <strong><p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/screen3.png')} width="100%" alt="Screen 3"/></p> <p align="center"><small>Screen 3</small></p></strong> | <strong><p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/finalScreen.png')} width="100%" alt="Final Screen"/></p> <p align="center"><small>Final Screen</small></p></strong> |

Congratulations! You've just created your first test, for an example of adding more intelligence to a test, please see the [Additional Topics](#additional-topics) below.

## Next Steps

At this stage, the test should be considered a draft. You should take a moment to verify each object, and/or add more logic to it. API Fortress has a lot of tools that allow for comprehensive continuous integration testing. Magic Test Generation is great at understanding datatypes and structure, which is often 90% of the work. 

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-5.37.58-PM.png')} alt="Visual Output"/>


### Additional Topics

* Learn how to schedule a test [here](api-testing/quick-start/schedule-a-test).  
* Learn about data and notifications connectors [here](/api-testing/quick-start/setup-connectors/). Simple solutions to plug into the systems you use today (e.g DataDog or New Relic).

