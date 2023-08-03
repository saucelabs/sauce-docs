---
id: key-value
title: The Basic Key/Value Store Workflow
sidebar_label: Basic Key/Value Store Workflow
description: The basic key/value store workflow
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Key/Value Store allows you to create temporary key/value pairs that can be accessed across different tests in your Organization. That means, you can create a key/value pair in `test1` in `projectA` and use the value in `test100` in `projectZ`.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
- Familiarity with the [API Testing Composer](/api-testing/composer/).

## Basic Workflow: Set and Load Methods

In this example you will focus on setting and retrieving a value in the Key/Value Store.

1. First, open the Composer and add the **GET** request.

   - Url - for example `http://demoapi.apifortress.com/api/retail/product`
   - Variable - for example `products`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/kv-examples/get-request.png')} alt="get request" />

2. Click **Save Changes**.

3. Click **Add Child Component**, then add the **Request Header** to the request.

   - Name - for example `key`
   - Value - for example `ABC123`

4. Click **Save Changes**.

5. Add the **K/V Store** component and then, **Save Changes**.

   - Action - for example `Set`
   - Key - for example `prods`
   - Data - for example `products[0].name`

   <img src={useBaseUrl('img/api-testing/kv-examples/kv-set.png')} alt="set method for K/V store component" />

   In this step, you set the Key/Value pair in the store. In this case, `prods` equals `products[0].name`, which evaluates to `Baseball Cap`.

6. Next, add another **K/V Store** component.

   - Action - for example `Load`
   - Key - for example `prods`
   - Variable - for example `kvprods`

   <img src={useBaseUrl('img/api-testing/kv-examples/kv-load.png')} alt="load method for K/V store component"/>

   In this step, you retrieve the Key/Value pair from the store. In this example, we assign the retrieved value to the variable `kvprods`.

7. Click **Save Changes**.

8. Add a **Comment** component and then **Save Changes**.

   - Comment - for example `${kvprods}`

   This will print the value and you can ensure that the data is recovered successfully.

9. The final result looks like:

   <img src={useBaseUrl('img/api-testing/kv-examples/final-result-basic.webp')} alt="Final result" />

   ```yaml
   - id: get
     children:
       - id: header
         name: key
         value: ABC123
     url: http://demoapi.apifortress.com/api/retail/product
     var: products
     mode: json
   - id: kv
     key: prods
     action: set
     object: products[0].name
   - id: kv
     key: prods
     action: load
     var: kvprods
   - id: comment
     text: ${kvprods}
   ```

10. **Run** the test.

## Push/Pop Workflow

In the next example, you will take a look at how **Push** and **Pop** methods work. **Push** and **Pop** are both array methods and behave as they normally do outside of this context: **Push** will append a value to the end of an array, and **Pop** will remove the last value in an array.

### Step 1: Push

In this step, you will **Push** the data onto the array.

1. First, open the Composer and add the **GET** request.

   - Url - for example `http://demoapi.apifortress.com/api/retail/product`
   - Variable - for example `products`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/kv-examples/get-request.png')} alt="get request" />

2. Click **Save Changes**.

3. Click **Add Child Component**, then add the **Request Header** to the request.

   - Name - for example `key`
   - Value - for example `ABC123`

4. Click **Save Changes**.

5. Add the **K/V Store** component.

   - Action - for example `Set`
   - Key - for example `prods`
   - Data - for example `[products[0].color]`

   <img src={useBaseUrl('img/api-testing/kv-examples/adv-kv-set.png')} alt="set the key/value store" />

   This step assigns a key in the Key/Value Store to a value from the response payload. In this case, use `color`, which is an array.

6. Click **Save Changes**.

7. Next, add another **K/V Store** component.

   - Action - for example `Load`
   - Key - for example `prods`
   - Variable - for example `kvprods`

   <img src={useBaseUrl('img/api-testing/kv-examples/kv-load.png')} alt="load method for K/V store component"/>

   In this step, you retrieve the Key/Value pair from the store. In this example, assign the retrieved value to the variable `kvprods`.

8. Click **Save Changes**.

9. Add a **Comment** component.

   - Comment - for example `${kvprods}`

   The comment will print the value on the test report so you can see the change at the end of this workflow.

10. Next, add a new **K/V Store** component.

    - Action - for example `Push`
    - Key - for example `prods`
    - Data - for example `999`

    <img src={useBaseUrl('img/api-testing/kv-examples/adv-push-kv.png')} alt="push method for K/V store component"/>

In this step, you push the new data onto the end of the existing array. In this example, you push the integer 999 onto the `prods` array.

11. Click **Save Changes**.

12. Add a new **K/V Store** component.

    - Action - for example `Load`
    - Key - for example `prods`
    - Variable - for example `kvprods`

    <img src={useBaseUrl('img/api-testing/kv-examples/adv-load-kv.png')} alt="push method for K/V store component"/>

In this step, you load the modified data into the test from the Key/Value Store.

13. Click **Save Changes**.

14. Add a **Comment** component.

    - Comment - for example `${kvprods}`

This will print the value so you can see the changes on the test report.

15. Click **Save Changes**.

16. **Run** the test.

    <img src={useBaseUrl('img/api-testing/kv-examples/report.png')} alt="Test Report" />

The test report shows that you have pushed the number 999 onto the array stored in the key `prods`.

### Step 2: Pop

In this step, you will remove the data with **Pop**.

1. Add a new **K/V Store** component.

   - Action - for example `Pop`
   - Key - for example `prods`
   - Variable - for example `popped`

   <img src={useBaseUrl('img/api-testing/kv-examples/kv-pop.png')} alt="pop method for K/V store component"/>

   In this step, you provide the name of the key from the Key/Value Store (`prods`), and the name of the variable you would like to assign the popped value to (`popped`).

:::warning Important
The **Pop** method removes the last value in an array and returns the value itself.
:::

2. Click **Save Changes**.

3. Add a new **K/V Store** component.

   - Action - for example `Load`
   - Key - for example `prods`
   - Variable - for example `kvprods`

   In this step, you load the modified key from the Key/Value Store.

4. Click **Save Changes**.

5. Add a **Comment** component.

   - Comment - for example `${popped}`

   This will print the popped value so you can see it on the test report.

6. Click **Save Changes**.

7. Add a **Comment** component.

   - Comment - for example `${kvprods}`

   This will print the final state of the array in the K/V Store so you can see the changes on the test report.

8. Click **Save Changes**.

9. The second part of the test looks like:

   <img src={useBaseUrl('img/api-testing/kv-examples/final-second-step.png')} alt="Final result" />

   ```yaml
       - id: kv
         key: prods
         action: pop
         var: popped
       - id: kv
         key: prods
         action: load
         var: popped
       - id: comment
         text: ${popped}
       - id: comment
         text: ${kvprods}
   ```

10. **Run** the test.

    <img src={useBaseUrl('img/api-testing/kv-examples/final-report.png')} alt="Test Report" />

The report for the full workflow shows that you first assigned an array to the Key/Value Store with the **Set** method, then added a value to that array with **Push**, and then removed the value with **Pop**. Each time there's a change, you used **Load** to retrieve an updated value from the Key/Value Store. The last two comments show the final state of the array in the Key/Value Store and the popped value itself. The popped value will only be available in the scope of this test run. The array in the Key/Value Store will remain retrievable until 24 hours after its most recent modification.

:::note
Use Set, Push, and Pop to reset the timer. Load does not reset the timer.
:::
