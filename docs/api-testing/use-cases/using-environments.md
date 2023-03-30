---
id: using-environments
title: Using the Same Test for Different Environments
sidebar_label: Using Environments
description: 'Reuse the same test for testing against different environments'
---

The most common use of the Environments is to override the default location to be able to use the same test against different domains.
In this example, we will show how to achieve this.

## What You'll Need

- An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).
- Recommended: review [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault/)

## Creating the Test

Our example will generate a test for a _developer_ domain and then, create the proper environments to run that test against the _staging_ and the _production_ ones without needing to change the test.
In our example, we are considering an endpoint that requires an _api key_ as a query param, and the value is different in every environment.

### Step 1: Create the Test

1. From the Composer, add a `GET` component:
   - Url - for example `https://run.mocky.io/v3/c99a075d-8e82-4f6c-904f-cac0359bf4a9/api/retail/product/shoes`
   - Variable - for example `payload`
1. **Save Changes**.
1. Add a **QueryParam** as child component:
   - Name - for example `api_key`
   - Value - for example `12345678901234567890`
1. Add all the necessary assertions to confirm the response is the expected one.
1. Run the test to confirm all works fine.

:::note
For the scope of this guide, we do not focus on the assertions that should be added to the test.
:::

<details>
<summary>
Code View Example of the test with assertions
</summary>

```yaml
- id: get
  children:
    - id: queryParam
      name: api_key
      value: "1234567890134567890"
  url: https://run.mocky.io/v3/c99a075d-8e82-4f6c-904f-cac0359bf4a9/api/retail/product/shoes
  var: payload
  mode: json
- id: assert-equals
  expression: payload_response.headers['Content-Type']
  value: application/json; charset=UTF-8
- id: assert-is
  expression: payload
  type: array
- id: each
  children:
    - id: assert-is
      expression: _1.id
      type: integer
    - id: assert-exists
      expression: _1.name
    - id: assert-exists
      expression: _1.price
    - id: assert-exists
      expression: _1.image
    - id: assert-exists
      expression: _1.description
  expression: payload.pick(5)
```

</details>

### Step 2: Converting URL into Variables

The test as written above does not allow you to use it in different environments. Therefore, you need to replace the URL and any other data, that are related to the environment the test is running on, into a variable. Now we will do this:

1. Edit **GET** component:
   - URL - for example `${protocol}${domain}${endpoint}`
1. In Input Set tab, add a Global Variable:
   - Name - for example `protocol`
   - Value - for example `https://`
1. Add a Global Variable:
   - Name - for example `domain`
   - Value - for example `run.mocky.io/v3/c99a075d-8e82-4f6c-904f-cac0359bf4a9`
1. Add a Global Variable:
   - Name - for example `endpoint`
   - Value - for example `/api/retail/product/shoes`
1. In Unit tab, Edit **QueryParam** component:
   - Value - for example `${apiKey}`
1. In Input Set tab, add a Global Variable:
   - Name - for example `apiKey`
   - Value - for example `1234567890134567890`
1. Run the test to confirm the changes do not break the test.

### Step 3: Creating the Staging Environment

In the previous step, we did all the required changes to make the test suitable to run in different environments. Now we will create the `staging` environment for running the test against that.

1. Click **No environments** dropdown
1. Click **Add Item**
1. Enter the **Environment name**, for example `staging` then **Confirm**
1. Click **Create Variable**:
   - Key - for example `domain`
   - Value - for example `run.mocky.io/v3/656dc17e-02ee-43f8-8bad-ed5ce3cc5911`
1. **Confirm**
1. Click **Create Variable**:
   - Key - for example `apiKey`
   - Value - for example `09876543210987654321`
1. **Confirm**
1. Click the **Cross** icon.
   :::info
   The environment you just created is selected by default in the dropdown.
   :::
1. Run the test with the selected environment.

This time the test has been executed against the `staging` domain with the `apiKey` for staging, instead of the default values (i.e. developer environment)

### Step 4: Creating the Production Environment

1. Click **No environments** dropdown
1. Click **Add Item**
1. Enter the **Environment name**, for example `production` then **Confirm**
1. Click **Create Variable**:
   - Key - for example `domain`
   - Value - for example `run.mocky.io/v3/a232a97f-8e4d-4709-838f-b6851d738ab4`
1. **Confirm**
1. Click **Create Variable**:
   - Key - for example `apiKey`
   - Value - for example `6789012345789012345`
1. **Confirm**
1. Click the **Cross** icon.
1. Run the test with the selected environment.

This time the test has been executed against the `production` domain with the `apiKey` for production.

As a result of the above steps, you have a test that, by default, runs against the `developer` environment and when required, you can choose to run it against the `staging` or `production` by selecting the proper environment.

This example considers only 3 environments but there's no limit to the number of environments you can create.

We have highlighted the scenario where you create the environments for running the test manually, if you want to do this as a [scheduled test](/api-testing/schedule-test/), you can add the variables in the Override section.
