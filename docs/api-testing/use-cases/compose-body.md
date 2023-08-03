---
id: compose-body
title: Different Ways to Compose a Request Body
sidebar_label: Composing the Request Body
description: Different ways to compose a request body
---

import useBaseUrl from '@docusaurus/useBaseUrl';

There are several ways you can compose a Request Body in Sauce Labs API Testing, ranging from simple to complex.

:::note
The included examples use the **POST** method, but all examples can be applied to other REST methods.
:::

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Use an Existing Body

The first method is when you have an existing Body to paste into the call:

1. In the Composer, add a `POST` component and enter the URL and all of the required fields.

   - Url (the url of the resource you want to test) - for example `https://en8cqeyt0w8aw.x.pipedream.net/sample/post/request/`
   - Variable (the name of the variable that contains the response) - for example `payload`
   - Mode (the response type) - for example `json`

2. Below the **POST request**, click **Add Child Component** and then click **Request Body**.

   <img src={useBaseUrl('/img/api-testing/post-request-add-body.png')} alt="Navigating to the Post body window"/>

3. In the Post Body fields, use the following:

   - Content-Type (the content-type of the request) - for example `application/json`
   - Body (the body required in your call) - for example

   ```json
   {
    "method": "post",
    "url": "http://www.testme.com/api/run/test"
    }
   ```

4. Click **Save Changes**.

5. Now you can execute the call and proceed with your test.

## Use Variables in the Request Body

The second method to compose a request body is by using variables in the Body.

1. In the Composer, add a `POST` component and enter the URL and all of the required fields.

   - Url (the url of the resource you want to test) - for example `https://en8cqeyt0w8aw.x.pipedream.net/sample/post/request/`
   - Variable (the name of the variable that contains the response) - for example `payload`
   - Mode (the response type) - for example `json`

2. Below the **POST request**, click **Add Child Component** and then click **Request Body**.

3. Select `application/json` as **Content-Type** and enter the following in the **Body** field:

   ```json
   {
   "user": "${user}",
   "password": "${password}",
   "url": "http://www.testme.com/api/run/test"
   }
   ```

   <img src={useBaseUrl('/img/api-testing/post-body-variables.webp')} alt="The Post body window"/>

In the above scenario, `user` and `password` are not directly passed in the body, but they are variables defined elsewhere: in the input set or stored in the vault.

4. Click **Save Changes**.

5. Now you can execute the call and proceed with your test.

## Use a Variable from Another Call

The next way to compose a Request Body is by using a variable from another call.

1. Add the call to retrieve the variable from. The following is an example of a common scenario in which you need to perform a login for authentication and retrieve the authentication token required for the following call.

   - Url (the url of the resource you want to test) - for example `https://258d50a7c4e44cddcc8a7165ceaf08ec.m.pipedream.net/login`
   - Variable (the name of the variable that contains the response) - for example `payload`
   - Mode (the response type) - for example `json`

2. Below the request, click **Add Child Component** and then click **Basic Authentication**.

   <img src={useBaseUrl('/img/api-testing/post-basic-auth.png')} alt="The Basic Authentication window"/>

3. In the **Basic Authentication** window, enter the following:

   - Username - for example `username`
   - Password - for example `password`

4. Click **Confirm**

5. Click **Save Changes**.

6. The response payload from the login call will contain the access token as follow:

   ```json title="Response Payload Example"
   {
       "userid": 4628362,
       "access_token": "PXSbs4UscM1lNo6zxdF_yw7MnfVEuHPLtTu3svvKlIZ3Qdf6Qb.7ZujNqFOpsjL4LOpc5oMdbLkbhAfERsEdWyJ7WBlKXIxbitsN3iHo41vfbz9v87cVLvIcqFHID7AczjS51P9c3_wBeaCVMacHkeCVNWAmRcPhtnUEqetAVOCbTxkiLlYJtjTtTq6wTNf4vlIvnK06r7jFRAZselu0oUWePh7wOTZa5EGDbPRwlk7HBK2tnjV4SFaFfJkXNHwM"
   }
   ```

7. Save the token as a variable using a `SET` component.

   - Variable (the variable name) - for example `token`
   - Mode (the variable type) - for example `String`
   - Value (retrieves the value from the previous payload - for example `${payload.access_token}`

     <img src={useBaseUrl('/img/api-testing/set-variable-window.png')} alt="The SET Variable window"/>

8. Once the token has been saved as a variable, add the second call and use that token in the request body.

   - Content-Type - for example `application/json`
   - Body - for example

   ```json
    {
        "token": "${token}"
    }
   ```

   <img src={useBaseUrl('/img/api-testing/post-body-token.webp')} alt="POST request body"/>

## Using an Object from Another Call

Using an object from another call is a more complex method to compose a request body. Scenarios in which you might use this method include when you need to use an object retrieved from a previous call in the body of a subsequent call.

1. Add a `GET` method to perform the call you retrieve the object from.

   - Url (the url of the resource you want to test) - for example `https://eop8vny94gvdmc5.m.pipedream.net/search`
   - Variable (the name of the variable that contains the response) - for example `searchPayload`
   - Mode (the response type) - for example `json`

2. Add a `Query Param` to the call

   - Name (the name of the param) - for example `search_term`
   - Value (the value of the param) -for example `sauce`

   <img src={useBaseUrl('/img/api-testing/get-search-term.png')} alt="GET request window"/>

The response payload from the call will be:

```json
  {
    "search_term": "sauce",
    "items":[
        {
          "id":11,
          "name":"Mayonnaise"
        },
        {
          "id":12,
          "name":"Hollandaise sauce"
        },
        {
          "id":13,
          "name":"Tomato ketchup"
        }
    ]
  }
```

3. Let's say you need the object `items` as the body in the subsequent call. So, as a second call, add a `POST` and enter the following as body:

```json
{
    "items": ${searchPayload.items.asJSON()}
}
```

<img src={useBaseUrl('/img/api-testing/post-body-object.webp')} alt="POST request body"/>

3. Now you can proceed with your test.

## Creating a New Structure to Add as a Body

The last scenario is another complex one. In this case, consider the scenario where you use data from a previous call to create a new structure to add as a body.

1. Perform the call that retrieves the data you are using. In the following example, the `GET` returns an array of items.

<img src={useBaseUrl('/img/api-testing/get-items-array.png')} alt="GET request"/>

The response payload:

```json
{
   "items":[
      {
         "id":11,
         "price":5.99
      },
      {
         "id":12,
         "price":6.99
      },
      {
         "id":13,
         "price":10.99
      },
      {
         "id":14,
         "price":15.99
      }
   ]
}
```

2. Create the new data structure by adding a `SET` component.

   - Variable (the variable name) - for example `itemsAvailable`
   - Mode (the variable type) - for example `Language`
   - Language - for example `Javascript`
   - Body - for example

   ```js
    payload.items.forEach(function(item) {
        item.currency = "$";
    });
    return payload;
   ```

   <img src={useBaseUrl('/img/api-testing/set-new-structure.webp')} alt="The SET component window"/>

3. Click **Save Changes**

4. Add the new structure as Request Body in the subsequent `POST`.

   <img src={useBaseUrl('/img/api-testing/post-body-window-4.png')} alt="The POST body window" width="600"/>

5. Click **Save Changes**

6. Now you can proceed with your test.
