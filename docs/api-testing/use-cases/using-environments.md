---
id: using-environments
title: Using the Same Test for Different Environments
sidebar_label: Using Environments
description: 'Reuse the same test for testing against different environments'
---

The most common use of Environments is to override the default location value so that you can use the same test to test different domains.

## What You'll Need

- An existing API Testing Project. For details on how to create a project as well as the basics for creating a test, see [API Testing Quickstart](/api-testing/quickstart/).
- Recommended: review [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault/)

## Creating the Test

The following example generates a test for a _developer_ domain, and then creates the environments to run that test against the _staging_ and the _production_ domains.
In this the endpoint requires an _api key_ as a query param, and the value is different in every environment.

### Step 1: Creating the Test

1. From the Composer, add a `GET` component:
   - Url - for example `https://run.mocky.io/v3/c99a075d-8e82-4f6c-904f-cac0359bf4a9/api/retail/product/shoes`
   - Variable - for example `payload`
1. **Save Changes**.
1. Add a **QueryParam** as child component:
   - Name - for example `api_key`
   - Value - for example `12345678901234567890`
1. Add all the necessary assertions to confirm the response is the expected one.
1. Run the test.

:::note
This example does not detail adding assertions to the test.
:::

<details>
<summary>
Code View example of the test with assertions
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

To use this example test in different environments, you can replace the URL and any other data related to the environment the test is running on with a variable:

1. Edit **GET** component:
   - URL - for example `${protocol}${domain}${endpoint}`
1. In the Input Set tab, add a Global Variable:
   - Name - for example `protocol`
   - Value - for example `https://`
1. Add a Global Variable:
   - Name - for example `domain`
   - Value - for example `run.mocky.io/v3/c99a075d-8e82-4f6c-904f-cac0359bf4a9`
1. Add a Global Variable:
   - Name - for example `endpoint`
   - Value - for example `/api/retail/product/shoes`
1. In the Unit tab, Edit **QueryParam** component:
   - Value - for example `${apiKey}`
1. In the Input Set tab, add a Global Variable:
   - Name - for example `apiKey`
   - Value - for example `1234567890134567890`
1. Run the test.

### Step 3: Creating the Staging Environment

Now that the test is set up to run in different environments, you can create and run the test in a `staging` environment.

1. Click **No environments**.
1. Click **Add Item**.
1. Enter the **Environment name**, for example `staging` then **Confirm**.
1. Click **Create Variable**:
   - Key - for example `domain`
   - Value - for example `run.mocky.io/v3/656dc17e-02ee-43f8-8bad-ed5ce3cc5911`
1. **Confirm**.
1. Click **Create Variable**:
   - Key - for example `apiKey`
   - Value - for example `09876543210987654321`
1. **Confirm**.
1. Close the Environment Variable window.
   :::info
   The environment you just created is selected by default in the dropdown list.
   :::
1. Run the test with the selected environment.

This time the test has been executed against the `staging` domain with the `apiKey` for staging, instead of the default value (that is `developer` environment)

### Step 4: Creating the Production Environment

1. Click **No environments**.
1. Click **Add Item**.
1. Enter the **Environment name**, for example `production` then **Confirm**.
1. Click **Create Variable**:
   - Key - for example `domain`
   - Value - for example `run.mocky.io/v3/a232a97f-8e4d-4709-838f-b6851d738ab4`
1. **Confirm**.
1. Click **Create Variable**:
   - Key - for example `apiKey`
   - Value - for example `6789012345789012345`
1. **Confirm**.
1. Close the Environment Variable window.
1. Run the test with the selected environment.

This time the test has been executed against the `production` domain with the `apiKey` for production.

As a result of the above steps, you have a test that, by default, runs against the `developer` environment and when required, you can choose to run it against the `staging` or `production` by selecting the proper environment.

You can create as many environments as you need for your testing requirements.

The example focused on creating environments for running the test manually, if you want [schedule the test run](/api-testing/schedule-test/), you can add the variables in the Override section.
