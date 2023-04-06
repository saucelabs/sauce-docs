---
id: saving-token-kv
title: Saving a Token in a Key/Value Store
sidebar_label: Saving Tokens in K/V Store
description: Saving a Token in a Key/Value Store
---

import useBaseUrl from '@docusaurus/useBaseUrl';

One of the common scenarios you can face when you are working with APIs is the authentication. Most of the time you call the endpoint that lets you authenticate and then, use the token in the following calls. Sometimes, there may be cases where you can't call the endpoint every time and you need to save the token in a variable and use it more times. If you have only one test, you can reuse the same token easily. What happens if you need it in more tests inside your project or across the whole organization? The Vault is not the solution because it contains static values and you have to manually update the value every time. Here is when the Key/Value store can help.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Saving a Token in a Key/Value Store

In this example you learn how to save a token in the Key/Value Store and then use it across the Organization.

1. First, add the **Key/Value Store** component.

   - Action - for example `Load`
   - Key - for example `token`
   - Variable - for example `token_var`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-kv1.png')} alt="load method in key value component" />

   It loads the token: the first time you run the test, the value will be empty then, it will be the token retrieved from the call.

2. **Save Changes**.

3. Add the **If** component, then **Save Changes**.

   - Expression - for example `!token_var`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-if.png')} alt="if component" />

   In this step you check if there is a token in the Key/Value Store: if the token is not available will perform the call to retrieve it, otherwise the test will proceed using the already available token

4. Click **Add Child Component** inside the **If** and then, add the **GET** component.

   - Url - for example `https://m2-keyvalueexample.load2.apifortress.com/token`
   - Variable - for example `payload`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-get.png')} alt="GET request" />

   This step calls the endpoint that generates the token.

5. **Save Changes**.

6. **Add Child Component** for the **If** and then, add the **Key/Value Store** component.

   - Action - for example `Set`
   - Key - for example `token`
   - Data - for example `payload.token`

   <img src={useBaseUrl('img/api-testing/kv-examples/token-kv2.png')} alt="set method in key value component" />

   In this step you add the value of the token in the Key/Value store.

7. **Save Changes**.

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
