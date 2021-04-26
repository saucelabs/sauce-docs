---
id: planning-your-test
title: Outline a Plan for your Test
sidebar_label: Outline a Plan for your Test
keywords:
    - api-testing
    - test
    - planning
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before you start writing your test, you should plan what you want to do.

Contrary to most testing frameworks, API Fortress is not _endpoint centric_, so there's a number of different paths you can take to make the best of your test.

## Single Action Test (active)

You're willing to write a test that is going to verify how an endpoint action works. We're also considering this scenario to be active, which means you expect API Fortress to perform a call and test the outcome. 

If your action takes multiple parameters, we suggest you to create a number of input sets containing combinations of valid input. The unit will be run against each input set. Having multiple inputs is important because it's the only way you can tell your API is responding uniformly, no matter what you feed it.

<img src={useBaseUrl('img/api-fortress/2016/02/inputs.png')} alt="inputs.png"/>

Then you need to make a request and use those variables.

<img src={useBaseUrl('img/api-fortress/2016/02/get.png')} alt="get.png"/>

As you can see we're composing the URL using global variables and we reference the variables in the query parameters.

Eventually, you will write your test. This is the simplest API Fortress test, covering the need to verify if an endpoint is up and running and working just fine.

## Single Action Test (passive)

A test is passive when API Fortress won't retrieve the payload on its own but will have it forwarded via the [API](https://apifortressv3.docs.apiary.io/#). In this case, no input sets or I/O operations are necessary. The forwarded payload can be referenced using the "**payload**" variable. The ideal scenario for this mode is testing live request and responses.

## Single Action Test (active, just-in-time parameters)

Also an input set can be overridden using the API. If your process requires an agent to trigger an active test with fresh inputs, create only one input set with valid inputs and have your [API](https://apifortressv3.docs.apiary.io/#) call override them. If you run the test by schedule, it test will run against the input you manually inserted. If you run it using the API and override the inputs, your test can run against fresh data all the time.

The ideal scenario for such mode is an application where the API is public but the inputs vary a lot over time and cannot be easily determined.

## Single Action Test (mixed mode)

There's a way to have a test to work both in an active way (when triggered by a schedule or manually launched, for example) and in an active way (invoked via API). Here's how you do it:

<img src={useBaseUrl('img/api-fortress/2016/02/ifnotpayload.png')} alt="ifnotpayload.png"/>

The GET will be performed only if payload does not have a value (yet).

If the test has multiple input sets that you don't want to run when the payload is being forwarded, invoking the [API](https://apifortressv3.docs.apiary.io/#) with the **"nosets=true"** attribute will prevent it. This is generally a preferred over a plain passive test.

## Integration test

In integration tests you chain together multiple calls, from authentication and actions to complete flows.

Possible scenarios vary from catalog browsing...

<img src={useBaseUrl('img/api-fortress/2016/02/int1.png')} alt="int1.png"/>

... to full booking process for multiple flights

<img src={useBaseUrl('img/api-fortress/2016/02/bookings.png')} alt="bookings.png"/>
