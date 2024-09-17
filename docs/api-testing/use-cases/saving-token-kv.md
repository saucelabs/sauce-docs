---
id: saving-token-kv
title: Saving a Token in a Key/Value Store
sidebar_label: Saving Token in K/V Store
description: Saving a Token in a Key/Value Store
---

import useBaseUrl from '@docusaurus/useBaseUrl';

One of the common scenarios you can face when you are working with APIs is authentication. Most of the time you call the endpoint that lets you authenticate and then use the token in the following calls. Sometimes, there may be cases where you can't call the endpoint every time, hence you need to save the token in a variable and use it more times. If you have only one test, you can reuse the same token smoothly. What happens if you need it in more tests inside your project or across the whole organization? The [Vault](/api-testing/vault/) is not the solution because it contains static values and you have to manually update the value every time. Here is when the Key/Value store can help.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
- Familiarity with the [API Testing Composer](/api-testing/composer/).

## Saving a Token in a Key/Value Store

In this example, you learn how to save a token in the Key/Value Store and then use it across the Organization.

1. First, open the Composer and add the **Key/Value Store** component.

   - Action - for example `Load`
   - Key - for example `token`
   - Variable - for example `token_var`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-kv1.png')} alt="load method in key value component" />

   It loads the token: the first time you run the test, the value will be empty then, it will be the token retrieved from the following call.

2. Click **Save Changes**.

3. Add the **If** component, then **Save Changes**.

   - Expression - for example `!token_var`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-if.png')} alt="if component" />

   In this step you check if there is a token in the Key/Value Store: if the token is not available will perform the call to retrieve it, otherwise, the test will proceed using the already available token.

4. Click **Add Child Component** inside the **If** and then, add the **GET** component.

   - Url - for example `https://m2-keyvalueexample.load2.apifortress.com/token`
   - Variable - for example `payload`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-get.png')} alt="GET request" />

   This step calls the endpoint that generates the token.

5. Click **Save Changes**.

6. **Add Child Component** for the **If** and then, add the **Key/Value Store** component.

   - Action - for example `Set`
   - Key - for example `token`
   - Data - for example `payload.token`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-kv2.png')} alt="set method in key value component" />

   In this step you add the value of the token in the Key/Value store.

7. Click **Save Changes**.

8. Outside the **If**, add **Assert Exists**.

   - Expression - for example `token_var`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-assert.png')} alt="assert exists" />

   `token_var` is available for further use inside the test (and inside your Organization).

9. Add the **POST** component and then, **Save Changes**.

   - Url - for example `https://m2-keyvalueexample.load2.apifortress.com/profile`
   - Variable - for example `profilePayload`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-post.png')} alt="POST request" />

   This step calls the endpoint that requires the token for authenticate.

10. Add the **Request Header** to the **POST**.

    - Name - for example `Authorization`
    - Value - for example `${token_var}`

    <img src={useBaseUrl('img/api-testing/kv-examples/token-auth.png')} alt="Request Header" />

    In the request header you pass the token saved in the Key/Value Store.

The final test looks like:

```yaml
- id: kv
  key: token
  action: load
  var: token_var
- id: if
  children:
    - id: get
      children: []
      url: https://m2-loadtest.load2.apifortress.com/token
      var: payload
      mode: json
    - id: set
      var: token_var
      mode: string
      value: ${payload.token}
    - id: kv
      key: token
      action: set
      object: token_var
  expression: "!token_var"
- id: assert-exists
  expression: token_var
- id: post
  children:
    - id: header
      name: Authorization
      value: ${token_var}
  url: https://m2-loadtest.load2.apifortress.com/profile
  var: profilePayload
  mode: json
```

### Using the Key/Value in Other Tests

To use the Key/Value Store in other tests in the same Organization, you have to first load the value from the Key/Value Store and then use it.

<img src={useBaseUrl('img/api-testing/kv-examples/token-kv-tests.png')} alt="Load the key/value in other tests"/>

- Action - for example `Load`
- Key - for example `token`
- Variable - for example `my_token`

`token` is the **Key** you assigned in the [first step](#saving-a-token-in-a-keyvalue-store) of the previous example.
`my_token` is the variable name you will use inside the test for referencing it.

## Refreshing the Token

The previous example shows how to save the token in the Key/Value Store but, once created, the token will remain the same. In reality, tokens usually expire after a certain amount of time so you need to generate a new one. In the following example, you will see how to improve the previous example by refreshing the token.

1. First, add the **Key/Value Store** component.

   - Action - for example `Load`
   - Key - for example `token`
   - Variable - for example `token_var`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-kv1.png')} alt="load method in key value component" />

   It loads the token: the first time you run the test, the value will be empty then, it will be the token retrieved from the following call.

2. Click **Save Changes**.

3. Next, add the **Key/Value Store** component.

   - Action - for example `Load`
   - Key - for example `last_token`
   - Variable - for example `last_token_var`

   <img src={useBaseUrl('img/api-testing/kv-examples/refresh-kv1.png')} alt="load method in key value component" />

   In this step, you load the date and time the token was last generated.

4. Click **Save Changes**.

5. Add the **If** component, then **Save Changes**.

   - Expression - for example `!token_var || ! last_token_var || last_token_var+60000 < D.nowMillis()`

   <img src={useBaseUrl('img/api-testing/kv-examples/refresh-if.png')} alt="if component" />

   In this step you check if there is a token in the Key/Value store, the date is present and one minute has not passed since the last token generation. If any of these conditions are not met, you generate a new one. The example refreshes the token every minute (60000ms), you can choose to refresh it differently by changing the value.

6. Click **Add Child Component** inside the **If** and then, add the **GET** component.

   - Url - for example `https://m2-keyvalueexample.load2.apifortress.com/token`
   - Variable - for example `payload`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-get.png')} alt="GET request" />

   This step calls the endpoint that generates the token.

7. Click **Save Changes**.

8. **Add Child Component** for the **If** and then, add the **Key/Value Store** component.

   - Action - for example `Set`
   - Key - for example `token`
   - Data - for example `payload.token`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-kv2.png')} alt="set method in key value component" />

   In this step you add the value of the token in the Key/Value store.

9. Click **Save Changes**.

10. **Add Child Component** inside the **If** and then, add the **Key/Value Store** component.

    - Action - for example `Set`
    - Key - for example `last_token`
    - Data - for example `D.nowMillis()`

    <img src={useBaseUrl('img/api-testing/kv-examples/refresh-kv2.png')} alt="set method in key value component" />

    In this step, you add the date in the Key/Value Store.

11. Click **Save Changes**.

12. Outside the **If**, add **Assert Exists**.

    - Expression - for example `token_var`

    <img src={useBaseUrl('img/api-testing/kv-examples/token-assert.png')} alt="assert exists" />

    The token will not be generated again for the next minute and the existing one will be used.

13. Add the **POST** component and then, **Save Changes**.

    - Url - for example `https://m2-keyvalueexample.load2.apifortress.com/profile`
    - Variable - for example `profilePayload`
    - Mode - for example `json`

    <img src={useBaseUrl('img/api-testing/kv-examples/token-post.png')} alt="POST request" />

This step calls the endpoint that requires the token for authenticate.

14. Add the **Request Header** to the **POST**.

    - Name - for example `Authorization`
    - Value - for example `${token_var}`

    <img src={useBaseUrl('img/api-testing/kv-examples/token-auth.png')} alt="Request Header" />

    In the request header you pass the token saved in the Key/Value Store.

The test looks like:

```yaml
- id: kv
  key: token
  action: load
  var: token_var
- id: kv
  key: last_token
  action: load
  var: last_token_var
- id: if
  children:
    - id: get
      children: []
      url: https://m2-keyvalueexample.load2.apifortress.com/token
      var: payload
      mode: json
    - id: kv
      key: token
      action: set
      object: payload.token
    - id: kv
      key: last_token
      action: set
      object: D.nowMillis()
  expression: "!token_var || ! last_token_var || last_token_var+60000 < D.nowMillis()"
- id: assert-exists
  expression: token_var
- id: post
  children:
    - id: header
      name: Authorization
      value: ${token_var}
  url: https://m2-keyvalueexample.load2.apifortress.com/profile
  var: profilePayload
  mode: json
```

By running the test two times in a row (in less than one minute) you can notice that the first time, the test will perform the call that generates the token and the second time it will execute only the call that uses the token.
