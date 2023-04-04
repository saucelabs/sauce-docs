---
id: key-value
title: The Basic Key/Value Store Workflow
sidebar_label: Key/Value Store - Basic Workflow
description: The basic key/value store workflow
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- A part of a good testing strategy is to create end-to-end tests that resemble common user flows. Consider a scenario where a company has an authentication server. This server, when given the proper user credentials, returns an authentication token. This token is required for all other calls throughout the company's API environment. Without this first API call, none of the other API calls can work. -->

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

### Basic Workflow

Let's take a look at how this workflow works in a practical setting. The first example will be a simple set and retrieve of a value in the Key/Value Store.

1. First, we'll make a `GET` request to an endpoint.<br/><img src={useBaseUrl('img/api-testing/KVBasicWorkflow1.png')} alt="KVBasicWorkflow1.png" />
2. Next, we'll add a K/V Store component.<br/><img src={useBaseUrl('img/api-testing/KVBasicWorkflow2.png')} alt="KVBasicWorkflow2.png" />
3. This first K/V Store component (we're going to incorporate several) is going to set the Key/Value pair in the Store, so we're going to use **Set**<br/><img src={useBaseUrl('img/api-testing/KVBasicWorkflow3.png')} alt="KVBasicWorkflow3.png"/>
4. In this case, we're setting the Key prods equal to `products[0].name`, which in this case evaluates to Baseball Cap.
5. Next, we're going to retrieve this Key/Value pair from the store with the **Load** method. In the K/V Store **Load** component, we're going to assign the retrieved value to the variable `kvprods.`<br/><img src={useBaseUrl('img/api-testing/KVBasicWorkflow4.png')} alt="KVBasicWorkflow4.png"/>
6. Finally, we'll add in a **Comment** component to ensure that the data was recovered successfully.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.48.01-PM1.png')} alt="Add Comment component" />
7. When we run the test, we're presented with the following result:<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.48.28-PM.png')} alt="Test Results.png" />

Success!

### Push/Pop Workflow

Next, we're going to take a look at how **Push** and **Pop** work. **Push** and **Pop** are both array methods and behave as they normally do outside of this context. **Push** will append a value to the end of an array. **Pop** will remove the last value in an array.

First, we're going to use **Push**. It should be noted that **Pop** works similarly but with the opposite result. **Pop** _also_ assigns the removed value to a variable which can be used in the context of the test, but can no longer be accessed from the Key/Value Store. We'll discuss this further when we take a look at **Pop**.

1. First, we're going to send a `GET` request and assign a key in the Key/Value Store to a value from the response body. In this case, we're going to use Color, which is an array.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.49.16-PM.png')} alt="Assign a key"/>
2. Next, we're going to **Load** and **Comment** this key. We're doing that so we can actually see the change on the test report at the end of this workflow.
3. The next step is to **Push** the new data on to the end of the existing array. In this case, we're pushing the integer _999_ onto the _prods_ array.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-2.43.53-PM.png')} alt="Push data" />
4. Finally, we're going to **Load** the modified data into the test from the K/V Store.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.51.48-PM.png')} alt="Load data" />
5. When we run the test, we're presented with the following test report.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.51.59-PM.png')} alt="Test Report" />

The comments show us clearly that we have pushed the number 999 onto the array stored in the key _prods._

Now, we've added something to the array. Let's remove it with **Pop**!

1. The first step is to introduce a **Pop** K/V Store component.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-2.31.17-PM.png')} alt="screenshot.png" />

We provide the **Pop** component with the name of the key from the Key/Value Store, and the name of the variable we'd like to assign the popped value to. Remember, **Pop** removes the last value in an array and returns the value itself. In this case, we're going to assign it to a variable called Popped. 2. Next, we're going to recall the modified key from the Key/Value Store. Then, we're going to Comment both the recalled Key/Value Store value AND the previously popped value.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-2.28.58-PM.png')} alt="screenshot.png" /> 3. Review the Test Report, where you can see the full workflow, showing that we first assigned an array to the Key/Value Store with **Set**, then added to that array with **Push**, and then removed the added value with **Pop**. Each time we made a change, we used **Load** to retrieve an updated value from the Key/Value Store.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-2.29.09-PM.png')} alt="screenshot.png" />

The last two comments show the final state of the array in the Key/Value Store and the popped value itself. The popped value will only be available within the scope of this test run. The array in the Key/Value Store will remain retrievable and until 24 hours after it's most recent modification.

:::note
Use Set, Push, and Pop to reset the timer. Load does not reset the timer.
:::
