---
id: kv
title: "Key / Value Store"
sidebar_label: "Key / Value Store"
keywords:
    - api-testing
    - how-to
    - key-value-store
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.22.48-PM-1.png')} alt="screenshot" />

The Key/Value store allows API Fortress users to create temporary key/value pairs that can be accessed across different tests. The Key/Value store is accessed via the Key/Value Store Component.

## Methods

:::warning
These key/value pairs are temporary. They expire after 24 hours has elapsed since the last update to the value itself.
:::

The Key/Value Store Component has four methods available for use.

### Set

Set will create a new key/value pair in the Key/Value store. The value is entered in the "_Object_" field.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.19-AM.png')} alt="screenshot" />

### Load

Load will recall a value from the Key/Value store when provided with a key.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.36-AM.png')} alt="screenshot" />

### Push

Push will add a value to the end of an existent value **of the datatype "Array"** in the Key/Value store. If no such key exists, it will create a new array containing the passed in value.  The passed in value is entered in the "_Object_" field.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.51.09-AM.png')} alt="screenshot" />

### Pop

Pop will remove a value from the end of an existent value **of the datatype "Array"** in the Key/Value store.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.52-AM.png')} alt="screenshot" />


## Basic Workflow

Let's take a look at how this workflow works in a practical setting. The first example will be a simple set and retrieve of a value in the Key/Value Store.

First, we'll make a GET request to an endpoint.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.21.40-PM.png')} alt="screenshot" />

Next, we'll add a K/V Store component.

<img src={useBaseUrl('img/api-fortress/2018/05/component.png')} alt="component.png" />

This first K/V Store component (we're going to incorporate several) is going to set the Key/Value pair in the Store, so we're going to use "**Set.**"

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.46.41-PM.png')} alt="screenshot.png" />

In this case we're setting the Key "prods" equal to "products\[0\].name", which in this case evaluates to "Baseball Cap."

Next, we're going to retrieve this Key/Value pair from the store with the "**Load**" method. In the K/V Store "**Load**" component, we're going to assign the retrieved value to the variable "kvprods."

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.47.22-PM.png')} alt="screenshot.png" />

Finally, we'll add in a "**Comment**" component to ensure that the data was recovered successfully.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.48.01-PM.png')} alt="screenshot.png" />

When we run the test, we're presented with the following result:

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.48.28-PM.png')} alt="screenshot.png" />

Success!

## Push/Pop Workflow

Next, we're going to take a look at how "**Push**" and "**Pop**" work. "**Push**" and "**Pop**" are both array methods and behave as they normally do outside of this context. "**Push**" will append a value to the end of an array. "**Pop**" will remove the last value in an array.

First, we're going to use "**Push**." It should be noted that "**Pop**" works similarly but with the opposite result. "**Pop**" _also_ assigns the removed value to a variable which can be used in the context of the test, but can no longer be accessed from the Key/Value Store. We'll discuss this further when we take a look at "**Pop**."

First, we're going to send a `GET` request and assign a key in the Key/Value Store to a value from the response body. In this case, we're going to use "Color," which is an array.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.49.16-PM.png')} alt="screenshot.png" />

Next, we're going to "**Load**" and "**Comment**" this key. We're doing that so we can actually see the change on the test report at the end of this workflow.

The next step is to "**Push**" the new data on to the end of the existing array.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.43.53-PM.png')} alt="screenshot.png" />

In this case, we're pushing the integer _999_ onto the _prods_ array.

Finally, we're going to "**Load**" the modified data into the test from the K/V Store.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.51.48-PM.png')} alt="screenshot.png" />

When we run the test, we're presented with the following test report.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.51.59-PM.png')} alt="screenshot.png" />

The comments show us clearly that we have pushed the number 999 onto the array stored in the key _prods._ 

Now, we've added something to the array. Let's remove it with "**Pop**!"

The first step is to introduce a "**Pop**" K/V Store component.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.31.17-PM.png')} alt="screenshot.png" />

We provide the "Pop" component with the name of the key from the Key/Value Store, and the name of the variable we'd like to assign the popped value to. Remember, "**Pop**" removes the last value in an array and returns the value itself. In this case, we're going to assign it to a variable called "Popped."

Next, we're going to recall the modified key from the Key/Value Store. Then, we're going to Comment both the recalled Key/Value Store value AND the previously popped value.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.28.58-PM.png')} alt="screenshot.png" />

In the Test Report, we can clearly see the full workflow. First, we assigned an array to the Key/Value Store with "**Set**." Then, we added to that array with "**Push**." Finally, we removed the added value with "**Pop**." Each time we made a change, we used "**Load**" to retrieve an updated value from the Key/Value Store.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.29.09-PM.png')} alt="screenshot.png" />

The last two comments show the final state of the array in the Key/Value Store and the popped value itself. The popped value will only be available within the scope of this test run. The array in the Key/Value Store will remain retrievable and until 24 hours after it's most recent modification.

:::note
"Load" does not reset the timer. Only "Set," "Push," and "Pop" reset the timer.
:::