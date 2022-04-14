---
id: compose-request-body
title: How to Compose a Request Body 
sidebar_label: Compose Requests Body
description: "How you can compose a request body using Sauce Labs API Testing"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In this guide we will show you the different ways you can compose a Request Body: from the simplest to the most complex.

:::note
In our examples we'll use the `POST` method, but all examples shown can be applied to the other methods. 
:::

## Copy and Paste the Body from Somewhere

The first and easiest way is when we have a body to copy and paste as is into the call. Let's see how this is done:

1. In the composer add a **POST Component** and type in as follow:

    ```text
    Url: https://domain/endpoint //the url of the resource you want to test
    Variable: payload //the name of the variable will contain the response
    Mode: json //the type of the response
    ```

    <img src={useBaseUrl('img/api-fortress/2022/04/how-to-post-comp.png')} alt="POST component"/>

2. Now add the **Body Component** and after selecting the **Content-Type** paste the body in **Content** field.

    ```text
    Content-Type: application/json
    Content: {"method":"post","url":"http://www.testme.com/api/run/test"} //the body required in your call
    ```

    <img src={useBaseUrl('img/api-fortress/2022/04/how-to-post-body.png')} alt="POST body"/>

3. Now execute the call and proceed with the test.


## Using Variables in the Request Body

Another way to compose a Request Body is using variables into it.  

1. In the composer add a **POST Component** and type in the fields as follow:

   ```text
   Url: https://domain/endpoint //the url of the resource you want to test
   Variable: payload //the name of the variable that contains the response
   Mode: json //the type of the response
   ```    

  <img src={useBaseUrl('img/api-fortress/2022/04/how-to-post-comp.png')} alt="POST component"/>

2. Now add the **Body Component**. In the **Content-Type** choose the proper one, application/json in our example. In this scenario we need to use a variable so in the **Content** field enter the following:

   ```json   
   {
    "user": "${user}",
    "password": "${password}",
    "url": "http://www.testme.com/api/run/test"
   }
   ```     

   In the example above `user` and `password` are not directly passed in the body, but they are variables defined in data set or stored in the Vault (or Environments)

   <img src={useBaseUrl('img/api-fortress/2022/04/how-to-post-var.png')} alt="variable in body"/>

3. The POST is complete and can be executed.


## Using a Variable from Another Call

The next way to compose a Request Body is by using a variable from another call. Let's see how this can be done.

1. The first thing you need to do is add the call you will retrieve the variable from. Let's consider, as an example, the common scenario where you need to perform a login for authentication and retrieve the authentication token required for the following call.

    ```text     
    Url: https://mydomain/login // the url of the resource you want to test
    Variable: payload // the name of the variable that contains the response
    Mode: json // the type of the response
    Header:
        Name: Authorization
        Value: Basic YWRtaW46cGFzc3dvcmQ= // this value comes from encoding username:password in Base64
    ```    

    <img src={useBaseUrl('img/api-fortress/2022/04/how-to-request-login.png')} alt="login"/>

2. The response payload from the login call will contain the desired token. Let's use the following as an example response.

    <img src={useBaseUrl('img/api-fortress/2022/04/how-to-token.png')} alt="response token"/>

3. Now save the token as a variable using a **SET Component**.

   ```text    
   Var: token //the name of the variable
   Variable mode: String // the type of the variable
   Value: ${payload.access_token} // we retrive the value from the previous 'payload'
   ```     

   <img src={useBaseUrl('img/api-fortress/2022/04/how-to-set-var.png')} alt="set variable"/>

4. Once the token has been saved as variable, you can proceed adding the second call and use that token in the Request Body.

   ```text    
   Content-Type: application/json
   Content: {"token":"${token}"}
   ```

   <img src={useBaseUrl('img/api-fortress/2022/04/how-to-body-token.png')} alt="body with token.jpg"/>

## Using an Object from Another Call

In the next example we will show you a more complex case. We will consider the scenario where we need to use an object retrieved from a previous call into the body of a subsequent call. Let's take a look at an example:

1. First, perform the call we retrieve the object from. 

    <img src={useBaseUrl('img/api-fortress/2022/04/how-to-response-object.png')} alt="GET component"/>

2. Let's take the below example as the response payload we get from that call:

   ```json
   {
      "id":123,
      "items":[
         {
            "id":11,
            "name":"stuff1"
         },
         {
            "id":12,
            "name":"stuff2"
         },
         {
            "id":13,
            "name":"stuff3"
         }
      ]
   }
   ```  

2. Let's say we need the object 'items' as the body in the subsequent call. So, as a second call, add a **POST** and type the following as body:

   ```json
   {"items":"${searchPayload.items.asJSON()}"}
   ```

   <img src={useBaseUrl('img/api-fortress/2022/04/how-to-body-object.png')} alt="object in body.jpg"/>

4. Now proceed with the test.

## Creating a New Structure to Add as a Body

The last scenario is yet another more complex one. In this case, we consider the scenario where we need to create a new structure to add as a body, using data from a previous call.

Let's see how we can do this:

1. The first thing you have to do is to perform the call which retrieves the data you're using. Let's consider a **GET** that returns an array of items.

   <img src={useBaseUrl('img/api-fortress/2022/04/how-to-products.png')} alt="GET component"/>

2. Let's use the below as the response payload.

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

3. Now create the new data structure. To do so, add a **SET Component** as follow:

   ```text    
   Variable: itemsAvailable //the name of the variable
   Variable Mode: Language
   Lang: Javascript
   Content: payload.items.forEach(function (item) {  item.currency = "$"; }); return payload;
   // for each item in the array, we add the currency attribute with "$" as value
   ```

   <img src={useBaseUrl('img/api-fortress/2022/04/how-to-set-new-struct.png')} alt="new data structure"/>

4. Add the **POST** and add the new structure as the **POST request body**:

   <img src={useBaseUrl('img/api-fortress/2022/04/how-to-body-from-another-call.png')} alt="body from another call"/>

5. That's it. Now proceed with the test.

   <img src={useBaseUrl('img/api-fortress/2022/04/how-to-full-flow.png')} alt="full flow"/>
