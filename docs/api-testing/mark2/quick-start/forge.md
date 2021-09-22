---
id: forge
title: "APIF Forge (Local IDE)"
sidebar_label: "APIF Forge (Local IDE)"
description: "Forge is a downloadable IDE made for writing and running tests locally. The APIF Composer on Forge works exactly like the Composer on the hosted cloud or self-hosted/on-premises version of API Fortress."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Forge is a downloadable IDE made for writing and running tests locally. The APIF Composer on Forge works exactly like the Composer on the hosted cloud or self-hosted/on-premises version of API Fortress. Click [here](/api-testing/mark2/quick-start/composer) to learn how the composer works.

:::note
Forge requires the API Fortress local engine, which is for licensed API Fortress customers only. If you would like to set up a free trial, please reach out to [support@apifortress.com](mailto:support@apifortress.com).
:::

## Creating Tests

You can either create tests directly in Forge by writing it yourself or by calling the desired API within the included HTTP client in Forge then using our “Generate Test” button to create the test.

Tests can be automatically generated via an API payload:

Auto generate a high-level schema validation test by using our HTTP client to make an API call and our Generate Test button.

### Step 1 - Select HTTP Client

<img src={useBaseUrl('img/api-fortress/2020/08/Screen-Shot-2019-07-18-at-2.12.26-PM.png')} alt="Generate HTTP Call"/>

### Step 2 - Send API Call

<img src={useBaseUrl('img/api-fortress/2020/08/Screen-Shot-2019-07-18-at-2.09.37-PM.png')} alt="Send API Call"/>

### Step 3 - Generate Test

<img src={useBaseUrl('img/api-fortress/2020/08/Screen-Shot-2019-07-18-at-2.11.00-PM.png')} alt="Generate Test"/>

__Example Output__:

<img src={useBaseUrl('img/api-fortress/2020/08/Screen-Shot-2019-07-18-at-2.11.35-PM.png')} alt="Output"/>

You can also write tests from scratch via the API Fortress visual composer or code view composer:

### Visual Composer

* Select the **+** symbol:
<img src={useBaseUrl('img/api-fortress/2020/08/forgescreen1.png')} alt="forge screen 1"/>

* Select a request method:
<img src={useBaseUrl('img/api-fortress/2020/08/forgescreen2.png')} alt="forge screen 2"/>

* Set the request parameters:
<img src={useBaseUrl('img/api-fortress/2020/08/forgescreen3.png')} alt="forge screen 3"/>

### Code View Composer

You can also write tests directly in our XML markup language that is so easy to use that anyone can learn how to use it:

<img src={useBaseUrl('img/api-fortress/2019/07/Screen-Shot-2019-07-18-at-2.06.50-PM.png')} alt="Forge Code View"/>

## Importing Tests

Import tests from your API Fortress instance. Learn how [here.](https://apifortress.com/doc/import-export-tests/)

Importing tests into Forge is as easy as opening the folder that contains the `unit.xml` and input.xml in the Forge IDE.

<img src={useBaseUrl('img/api-fortress/2019/06/image.png')} alt="unit.xml"/>

## Running Tests

By combining Forge with APIF-Local (APIF – Local Engine), you can execute local tests directly from the IDE. Current customers can reach out to their sales contact (or sales@apifortress.com) to request the local engine files.

Find a step-by-step guide on how to set up APIF-Local [here](https://apifortress.com/doc/apf-local-engine/).

Once you have configured your local engine, integrating into Forge is very easy.  *See below in the settings section of Forge*:

**Load the local engine jar file here**:

<img src={useBaseUrl('img/api-fortress/2019/06/image-1.png')} alt="image-1.png"/>

**Load the config.yml file here**:

<img src={useBaseUrl('img/api-fortress/2019/06/image-3.png')} alt="image-3.png"/>
