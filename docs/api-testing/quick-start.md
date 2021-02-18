---
id: quick-start
title: Create a Test Quickly
sidebar_label: Create a Test Quickly
description: Learn how to quickly generate a test in API Fortress. By using the payload from an API call or from a specification file.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

You should have received an email with your login credentials from the platform. If you haven’t, please email us at [support@apifortress.com](mailto:support@apifortress.com).  
  
If you’d like to trial mocking or load testing, please contact support or your API Fortress representative.  
  
**NOTE:** API Fortress may be deployed in our hosted cloud or self-hosted/on-premises via a container behind your firewall. Maintain complete test data ownership. Learn more about the differences between the two types of deployments. 

Below, we will show you how to quickly create a test using an e-commerce API.

Let's get started!

### Step 1: Create a Project

When you first log in, you are introduced to the Company Dashboard. The company already contains a project called Examples with some example tests. Click "Create Project".

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-3.45.11-PM.png')} alt="Create a Project UI"/>

### Step 2: Create a Test

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-3.46.42-PM.png')} alt="Create a Test UI"/>

### Step 3: Choose Your Test Creation Method

Once you have named your test you will be redirected to the Interstitial page. There are two avenues that you may take in building a test from here. First, you must decide if you want to build a test manually, API Fortress is very capable of building a test draft for you. This can be done from a Spec File, an Apiary account, or using the "Generate Test" button. Since this is a quick start guide, we will show you how to use the "Generate Test" button. 

To build using a Spec file see [Build from Spec](/api-testing/quick-start/build-from-spec).

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.21.22-PM.png')} alt="Create a Test UI"/>

### Step 4: Create a Test Using the Generate Test button

Click on Compose.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.54.09-PM.png')} alt="Click compose"/>

Next, you will be presented with a tutorial on the Visual Composer. The final screen of the tutorial provides you with more instructions on how to create a test. Close the tutorial and open the Console by clicking on HTTP Client button in the left panel.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-4.59.14-PM.png')} alt="Click HTTP Client"/>

For this example we will use our own test API. It's a simple GET request, so you can leave the dropdown as it is and enter the following url:  
[https://mastiff.apifortress.com/app/api/examples/retail/product?id=611](https://mastiff.apifortress.com/app/api/exmples/retail/product?id=611)

After completion click the Send button, and the response payload appears.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-5.02.25-PM.png')} alt="Send Button"/>

Now click the "Generate Test" button at the top left corner of the console to generate a test draft.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-5.05.44-PM.png')} alt="Generate Test"/>

The following screens will allow you to choose whether you want to create the input set based on the data provided in the request, and if you want Magic to generate the assertions. The final screen summarizes what was done. Press Continue on each screen.

<img src={useBaseUrl('img/api-fortress/2017/01/generationProcess.png')} alt="Generation Process"/>

At this stage, the test should be considered a draft. You should take a moment to verify each object, and/or add more logic to it. API Fortress has a lot of tools that allow for comprehensive continuous integration testing. Magic Test Generation is great at understanding datatypes and structure, which is often 90% of the work. 

For an example of adding more intelligence to a test, please see the _Additional Topics_ at the bottom.

<img src={useBaseUrl('img/api-fortress/2019/06/Screen-Shot-2019-06-10-at-5.37.58-PM.png')} alt="Visual Output"/>

All done!

## Additional Topics

* Learn how to schedule a test [here](api-testing/quick-start/schedule-a-test).  
* Learn about data and notifications connectors [here](/api-testing/setup-connectors/). Simple solutions to plug into the systems you use today (e.g DataDog or New Relic).

