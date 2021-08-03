---
id: mocking-services
title: Creating a Mocked API
sidebar_label: Creating a Mocked API
description: "The Mocking tool is a great way to test and define new endpoints."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Mocking Tool is a great way to test and define new endpoints.

## Step 1 - Access the Mocking Tool

The Mocking Tool is accessed by clicking on the "Tools" menu in the top navigation bar and clicking "Mocking."

<img src={useBaseUrl('img/api-fortress/2018/06/0-1024x640.png')} alt="Access Mocking Tool"/>

## Step 2 - Create a New Mock Endpoint

Click either the green "New Endpoint" button or the "+ New Endpoint" button highlighted in the image below to create a new endpoint.

<img src={useBaseUrl('img/api-fortress/2018/06/1-1024x640.png')} alt="Create a Mock Endpoint"/>

# Step 3 - Define the New Endpoint

Use the "Create Entry" modal to define the domain and path for the mock endpoint.

<img src={useBaseUrl('img/api-fortress/2018/06/2-1024x640.png')} alt="Define a New Endpoint"/>

Click "Continue", and your new endpoint will be populated in the Domains List.

<img src={useBaseUrl('img/api-fortress/2018/06/3-1024x640.png')} alt="Populate Domain Lists"/>

## Step 4 - Define the Response

Click "+Add Response Case" highlighted below.

<img src={useBaseUrl('img/api-fortress/2018/06/4-1024x640.png')} alt="Define the Response"/>

Choose the method (REST verb), define any parameters, choose the content type, status code and enter an optional description. You can define any necessary key/value header pairs in the "Headers" section.

Finally, define the response payload in the provided space.

<img src={useBaseUrl('img/api-fortress/2018/06/5-1024x640.png')} alt="Define the Payload"/>

> __NOTE__: To learn more about the Expressions field [click here](https://apifortress.com/doc/expressions-in-mocked-apis/).  

## Step 5 - Test the Endpoint

Switch to the HTTP client of your choice and enter the address for the endpoint you just created. The response should match the response you set up when you created the mock endpoint. This endpoint is now prepared for use.

<img src={useBaseUrl('img/api-fortress/2018/06/6-1024x640.png')} alt="Define the Payload"/>