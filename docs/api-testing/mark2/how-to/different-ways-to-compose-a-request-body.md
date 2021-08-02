---
id: different-ways-to-compose-a-request-body
title: Different Ways to Compose a Request Body
sidebar_label: Different Ways to Compose a Request Body
keywords:
    - api-testing
    - how-to
    - request-body
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In this post we will show you the different ways you can compose a Request Body: from the simplest to the most complex.

## Copy and Paste the Body from Somewhere

The first and easiest way is when we have a body from somewhere to copy and paste as is into the call. Let's see how this is done:

1. In the composer we add the POST component and type the url and all of the required fields.
    
   ```js
   Url: https://mydomain.com/myPost //the url of the resource you want to test
   Variable: payload //the name of the variable that contains the response
   Mode: json //the type of the response
   ```
   
   <img src={useBaseUrl('img/api-fortress/2018/09/post_comp.jpg')} alt="post_comp.jpg"/>

2. Now we add the Body component and after selecting the `Content-Type` we paste the body in `Content` field.
    
   ```js
   Content-Type: application/json
   Content: {"method":"post","url":"http://www.testme.com/api/run/test"} //the body required in your call
   ```
   
   <img src={useBaseUrl('img/api-fortress/2018/09/paste_body.jpg')} alt="paste_body.jpg"/>

3. Now we can execute the call and proceed with the test. [![final_call](https://apifortress.com/doc/wp-content/uploads/2018/09/final_call.jpg)](https://apifortress.com/doc/wp-content/uploads/2018/09/final_call.jpg)
    

## Using Variables in the Request Body
    
Another way to compose a request is using variables in the body.  
    
1. In the composer we add the POST component typing the url and all the required fields.
   
   ```js    
   Url: https://mydomain.com/myPost //the url of the resource you want to test)
   Variable: payload //the name of the variable that contains the response)
   Mode: json //the type of the response)
   ```     
   
   <img src={useBaseUrl('img/api-fortress/2018/09/post_comp.jpg')} alt="post_comp.jpg"/>

2. We add the Body component. In the Content-Type we choose the proper one, let's say application/json. In this scenario we need to use a variable so in the Content field we enter the following:
   
   ```json   
   {
    "user": ${user},
    "password": ${password},
    "url": "http://www.testme.com/api/run/test"
   }
   ```     
   
   In this scenario `"user"` and `"password"` are not directly passed in the body, but they are variables defined as global parameters in the data set. 
   
   <img src={useBaseUrl('img/api-fortress/2018/09/var_body.jpg')} alt="var_body.jpg"/>

3. The POST has been done and can be executed. 

   <img src={useBaseUrl('img/api-fortress/2018/09/final_call2.jpg')} alt="final_call2.jpg"/>

## Using a Variable from Another Call
    
The next way to compose a Request Body is by using a variable from another call. Let's see how this can be done.

1. The first thing we need to do is add the call we will retrieve the variable from. Let's consider, as example, the common scenario where we need to perform a login for authentication and retrieve the authentication token required for the following call.
   
   ```js     
   Url: http://www.mydomain.com/login // the url of the resource you want to test
   Variable: payload // the name of the variable that contains the response
   Mode: json // the type of the response
   Header: 
       Name: Authorization
       Value: Basic YWRtaW46cGFzc3dvcmQ= 
       // this value comes from encoding username:password in Base64
   ```    
   
   <img src={useBaseUrl('img/api-fortress/2018/09/loginAuth.jpg')} alt="loginAuth.jpg"/>

2. Executing the login we will have as response the desired token. Let's see it using our console. [![response_token](https://apifortress.com/doc/wp-content/uploads/2018/09/response_token.jpg)](https://apifortress.com/doc/wp-content/uploads/2018/09/response_token.jpg)
3. Now we need to save the token as variable.
   
   ```js    
   Var: token //the name of the variable
   Variable mode: String // the type of the variable
   Value: ${payload.access_token} // we retrive the value from the previous 'payload'
   ```     
   
   <img src={useBaseUrl('img/api-fortress/2018/09/var_token.jpg')} alt="var_token.jpg"/>

4. Once the token has been saved as variable we can proceed adding the second call and use that token in the Request Body.
   
   ```js     
   Content-Type: application/json
   Content: {"token":"${token}"}
   ```
   
   <img src={useBaseUrl('img/api-fortress/2018/09/bodyWToken.jpg')} alt="bodyWToken.jpg"/>

## Using an Object from Another Call

In the next example we will show you a more complex case. We will consider the scenario where we need to use an object retrieved from a previous call into the body of a subsequent call. Let's take a look at an example:

1. First, we perform the call we retrieve the object from. 
   
   <img src={useBaseUrl('img/api-fortress/2018/09/search.jpg')} alt="search.jpg"/>

2. Let's execute the call in our console in order to see the response.

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
    
   <img src={useBaseUrl('img/api-fortress/2018/09/search_response.jpg')} alt="search_response.jpg"/>

3. Let's say we need the object 'items' as the body in the subsequent call. So, as a second call, we will add a `POST` and we will type the following as body:
   
   ```js
   ${searchPayload.items.asJSON()}
   ```
    
   <img src={useBaseUrl('img/api-fortress/2018/09/objectInBody.jpg')} alt="objectInBody.jpg"/>

4. Now we can proceed with the test.

## Creating a New Structure to Add as a Body

The last scenario is yet another more complex one. In this case, we consider the scenario where we need to create a new structure to add as a body, using data from a previous call. 

Let's see how we can do this:

1. The first thing we have to do is to perform the call which retrieves the data we're using. Let's consider a `GET` that returns an array of items.
   
   <img src={useBaseUrl('img/api-fortress/2018/09/firstCall.jpg')} alt="firstCall.jpg"/>

2. Let's see the response using our console.

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
    
   <img src={useBaseUrl('img/api-fortress/2018/09/response_get.jpg')} alt="response_get.jpg"/>

3. Now we need to create the new data structure. To do so, we add a SET component as follow: 
    
   ```js
   // for each item in the array, 
   payload.items.each { 
       it -> it.currency='$'  
   };
   // we add the currency attribute with "$" as value
   
   return payload.asJSON(); 
   ```
   
   <img src={useBaseUrl('img/api-fortress/2018/09/newData.jpg')} alt="newData.jpg"/>

4. Now we can add the POST and add the new structure as the `POST` request body:
   
   <img src={useBaseUrl('img/api-fortress/2018/09/postWithNewStructure.jpg')} alt="postWithNewStructure.jpg"/>

5. That's it. Now we can proceed with the test.

   <img src={useBaseUrl('img/api-fortress/2018/09/allDone.jpg')} alt="allDone.jpg"/>

__NOTE__: In this post we used the `POST` method, but all examples shown apply to the other REST methods. In this same way, we demonstrated scenarios with Request Bodies, but all examples apply for Header or Param cases as well.
