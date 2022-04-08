---
id: integration-testing
title: How to create an Integration Test
sidebar_label: Integration Test
description: "How you can create an Integration test using Sauce Labs API Testing"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

One of the core features of the Sauce Labs API Testing platform is the ability to create proper **Integration Tests**.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Overview

An Integration test is a test in which you examine a complete flow of calls, simulating what an API consumer would experience. 

Integration testing is critical to creating a strong API testing strategy. Microservices are built to work together, and an integration test allows you to create end-to-end tests that resemble common user flows. While only testing individual endpoints is a good start, this method will miss a large number of problems that occur when all services need to work together.

Here is a quick guide on how to create one using a token based authentication API.

## Example

Let’s consider an example that only a proper integration test could solve: Company A has an authentication server. This server, when given the proper user credentials, returns an authentication token. This token is required for all other calls throughout the platform’s API environment. Without this first API call, none of the other API calls can work. API Fortress makes it easy to validate the integration, capturing the entire API flow from end to end.


### Step 1 - Getting the Token

First, we need to make a `POST` call to the authorization server.
   
<img src={useBaseUrl('img/api-fortress/2022/04/integration-step1.png')} alt="Authentication call"/>

In this case, the request body is the user id and password. Given proper credentials, the authentication server will return a user token.

<img src={useBaseUrl('img/api-fortress/2022/04/integration-step1-response.png')} alt="Response payload"/>

Next, we need to use this token to make further calls to the application.

### Step 2 - Setting a Variable

First, we need to assign the token to a variable.  

:::note
Variables are used to store data temporarily for a test.
:::

We do this so we don’t have to manually invoke a variable every time it is needed.

:::tip
You can use the Sauce Labs API Testing Vault for more permanent variables ([learn more about vault here](/api-testing/vault))
:::

Add a `Set` component, and enter `access_token` in __Var__, keep __Variable Mode__ as `String`, and set __Value__ to `${authPayload.access_token}`.

<img src={useBaseUrl('img/api-fortress/2022/04/integration-step2.png')} alt="Set Variable"/>

You'll notice that what we are doing here is specifically taking the `access_token` variable in the `authPayload` response, and setting it as `access_token`: the response body from the original post call was saved to a variable called `authPayload`. The key to access the token is named `access_token`, so you may find it by calling `authPayload.access_token`.

:::note
The dollar sign and brackets are necessary when referencing variables so that Sauce Labs API Testing knows to interpret what’s between the brackets instead of using it literally.
:::


### Step 3 - Making Follow-up Calls

Now it is time for the third, and for this example, final step. We’ve made our authentication `POST` call, and then we’ve saved the token to a dynamic variable named “access_token.” 

Let's say that the API has a cart function that requires a user token in order to add items to a cart or view items currently in the cart. Use a PUT request to the cart endpoint to update the cart. Use the access token granted by the authentication server to add items to a cart by setting the `token` header to `${access_token}`.

<img src={useBaseUrl('img/api-fortress/2022/04/integration-step3.png')} alt="Follow Up Calls"/>


### Further Explanation

As we stated at the start, it is imperative to not just exercise endpoints, but validate that an entire series of microservices are working. It’s best to do that by writing tests that emulate common and uncommon user flows. A critical part of that work involves creating reusable variables to allow the test to work at any time, with any data.

By making a request for a fresh token at the beginning of the sequence, and then assigning it to a variable, you will know that any time you run this test, you’re doing so with a valid access token, which is automatically being passed to all follow-up calls.

Feel free to keep using the same access token over and over as seen below.

<img src={useBaseUrl('img/api-fortress/2022/04/integration-examples.png')} alt="Reuse Token"/>


## One More Example

Let's consider another scenario: there's an API endpoint that produces an array of all the available products and another endpoint that shows the details of a specific product based on its 'id'.

```http request
http://demoapi.apifortress.com/api/retail/product 
http://demoapi.apifortress.com/api/retail/product/${id}
```

In a scenario like the above, you can create an integration test and test the interaction between them as well. 

Let's see all the required steps.

### Steps

1. Call the product listing endpoint and assign the response to `productsPayload` variable.

2. Add a "for each" assertion and reference the "productsPayload.products" object.

:::tip
In a real scenario where the response contains a lot of products, it could be useful to pick just few of them randomly using `pick(n)`
:::

3. Test the response payload for this endpoint.

4. Add a new "Set (variable)" assertion to set the `id` variable as every single `productsPayload.product` that is returned. Notice we set the string to `${_1.id}` The system uses `_1` automatically when recognizing a subroutine. Makes it easier when things get into many sub levels.

<img src={useBaseUrl('img/api-fortress/2022/04/integration-product1.png')} alt="Product listing"/>

5. Make a GET to the product details endpoint, using our new `id` variable as the _id_ parameter. Variables last through the entire test unless overwritten.

6. Test the response payload for this endpoint.

<img src={useBaseUrl('img/api-fortress/2022/04/integration-product2.png')} alt="Product details"/>

The full code will be as follow:


```xml
<get url="http://demoapi.apifortress.com/api/retail/product" params="[:]" var="productsPayload" mode="json">
  <header name="key" value="ABC123"/>
</get>
<assert-is expression="productsPayload" type="array" mode="all" comment="payload must be an array"/>
<comment>
  <![CDATA[pick randomly 5 items from the payload response]]>
</comment>
<each expression="productsPayload.pick(5)">
    <comment>
        <![CDATA[product id is: ${_1.id} and product name is: ${_1.name}]]>
    </comment>
    <assert-is expression="_1.id" type="integer" mode="all" comment="id must be an integer value"/>
    <set var="id" value="${_1.id}" lang="java"/>
    <assert-exists expression="_1.name"  mode="all" comment="name must exists"/>
    <assert-is expression="_1.price" type="float" mode="all" comment="price must be a float number"/>
    <assert-exists expression="_1.category"  mode="all" comment="category must exists"/>
    <assert-exists expression="_1.description"  mode="all" comment="description must exists"/>
    <assert-is expression="_1.quantity" type="integer" mode="all" comment="quantity must be an integer value"/>
    <assert-greater expression="_1.quantity" value="0" type="integer" mode="all" comment="quantity must be greater than 0"/>
    <assert-is expression="_1.imageURL" type="url" mode="all" comment="imageURL must be a valid url value"/>
    <assert-is expression="_1.color" type="array" mode="all" comment="color must be an array"/>
    <assert-exists expression="_1.createdAt"  mode="all" comment="createdAt must exists"/>
    <assert-exists expression="_1.updatedAt"  comment="updateAt must exists"/>
    <comment>
        <![CDATA[get product details]]>
    </comment>
    <get url="http://demoapi.apifortress.com/api/retail/product/${id}" params="[:]" var="productPayload" mode="json">
        <header name="key" value="ABC123"/>
    </get>
    <assert-exists expression="productPayload"  mode="all" comment="payload must exist, if not, test does not need to be executed" stoponfail="true"/>
    <comment>
        <![CDATA[product id is: ${productPayload.id} and product name is: ${productPayload.name}]]>
    </comment>
    <assert-equals expression="productPayload.id" value="${id}" type="integer" mode="all" comment="id is the same as the one from the previous call"/>
    <assert-is expression="productPayload.id" type="integer" mode="all" comment="id must be an integer value"/>
    <assert-exists expression="productPayload.name"  mode="all" comment="name must exists"/>
    <assert-is expression="productPayload.price" type="float" mode="all" comment="price must be a float number"/>
    <assert-exists expression="productPayload.category"  mode="all" comment="category must exists"/>
    <assert-exists expression="productPayload.description"  mode="all" comment="description must exists"/>
    <assert-is expression="productPayload.quantity" type="integer" mode="all" comment="quantity must be an integer value"/>
    <assert-greater expression="productPayload.quantity" value="0" type="integer" mode="all" comment="quantity must be greater than 0"/>
    <assert-is expression="productPayload.imageURL" type="url" mode="all" comment="imageURL must be a valid url value"/>
    <assert-is expression="productPayload.color" type="array" mode="all" comment="color must be an array"/>
    <each expression="productPayload.color">
        <assert-exists expression="_2"  mode="all" comment="color array should contain some values"/>
        <assert-in expression="_2" value="['yellow','blue','red','green','brown','orange','gray','pink','black','white']" mode="all" comment="colors must be the expected one"/>
    </each>
    <assert-exists expression="productPayload.createdAt"  mode="all" comment="createdAt must exists"/>
    <assert-exists expression="productPayload.updatedAt"  comment="updateAt must exists"/>
</each>
```
