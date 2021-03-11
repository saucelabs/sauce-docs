---
id: integration-testing
title: "Build an Integration Test (Multistep Test)"
sidebar_label: "Build an Integration Test (Multistep Test)"
keywords:
    - integration-testing
    - automation
    - api-testing
    - how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';

One of the core features of the platform is the ability to create proper **integration tests**.

An Integration test is a test in which you examine a complete flow of calls, simulating what an API consumer would experience. Exercising singular endpoints leaves a lot of opportunities for missed bugs and vulnerabilities.

Here is a quick guide on how to create one using a token based authentication API.

Before getting too deep into the topic, if you log in to your account and go to the "Examples" project, you'll see a test called "Retail: Integration - Products." The concept may be easier to understand if you take a look at it first.

## Step 1 - Get the Token

First, get the token by making your POST call. Name the payload variable `loginPayload`.

<img src={useBaseUrl('img/api-fortress/2017/03/login.jpg')} alt="Login Pic"/>

## Step 2 - Add an Assertion  
Under the login procedure add an assertion named "Set (variable)." Set _Var_ as `access_token`, keep _Variable Mode_ as `String`, and set `Value` to `${loginPayload.access_token}`. 
   
You'll notice that what we are doing here is specifically taking the `access_token` variable in the `loginPayload` response, and setting it as `access_token`  
   
The dollar sign and brackets are necessary when referencing variables. 
    
<img src={useBaseUrl('img/api-fortress/2017/03/token-1.jpg')} alt="Token 1"/>
    
<img src={useBaseUrl('img/api-fortress/2017/03/access_token.jpg')} alt="Access Token"/>

## Step 3 - Query the Search Endpoint

Next, make a GET call to your search endpoint. Name this payload `resultsPayload` This call requires the access token from the login procedure, so we passed it in the header as required for this specific API. We added _Header Name_ as "Authorization" and _Value_ as `${access_token}`. 

Again, notice the dollar sign and bracket. That is how you reference variables.

<img src={useBaseUrl('img/api-fortress/2017/03/search.jpg')} alt="Search"/>


## Step 4 - Examine the Results

Finally, let's dive into each result from the search payload one-by-one, using the "product id" and the "access token" variables we have set so far.
    
1. Add a "for each" assertion and reference the "resultsPayload.products" object.
    
2. Add a new "Set (variable)" assertion to set the `id` variable as every single `resultsPayload.product` that is returned. Notice we set the string to `${_1.id}` The system uses `_1` automatically when recognizing a subroutine. Makes it easier when things get into many sub levels.
    
3. Make a GET to the product details endpoint, using our new `id` variable as the _id_ parameter. Again, you can still reference the original `${access_token}` to make this call. Variables last through the entire test unless overwritten.

<img src={useBaseUrl('img/api-fortress/2017/03/each.jpg')} alt="Each"/>

Again, take a look at the integration test in your Examples project, which comes with every account. Remember how many of us learned HTML first by looking at the source of our favorite websites? This is much easier to understand when you see it.
