---
id: build-from-collections
title: Build from Postman Collections
sidebar_label: Build from Collections
keywords:
    - api-testing
    - postman
    - collections
---

import useBaseUrl from '@docusaurus/useBaseUrl';


API Fortress can now generate a test from a Postman collection!

The first step is exporting your collection from within Postman.

<img src={useBaseUrl('img/api-fortress/2017/04/collection.jpg')} alt="collection.jpg" />

Next to your Collection name click the ellipsis (three dots) ... then click Export and choose 'Collection v2.'

<img src={useBaseUrl('img/api-fortress/2017/04/export.jpg')} alt="export.jpg" />

<img src={useBaseUrl('img/api-fortress/2017/04/exportCollectionV2.jpg')} alt="exportCollectionV2.jpg" />

Once you've exported the collection from Postman, go to API Fortress and create a _New Test_.

<img src={useBaseUrl('img/api-fortress/2017/04/newTest.jpg')} alt="newTest.jpg" />

On the interstitial page, click _Build from Spec._

<img src={useBaseUrl('img/api-fortress/2017/04/buildFromSpec.jpg')} alt="buildFromSpec.jpg" />

On the following page, choose _Postman Collection_ from the dropdown menu, and upload the collection file we exported. Click _Save_.

<img src={useBaseUrl('img/api-fortress/2017/04/specFile.jpg')} alt="specFile.jpg" />

For a new test, choose _From Scratch_ and then click the check. If you were updating a test, you would use the _Merge_ option.

<img src={useBaseUrl('img/api-fortress/2017/04/buildoptions.jpg')} alt="buildoptions.jpg" />

This imports the API call to the composer. Now we can use this to call the payload and build a test automatically!

<img src={useBaseUrl('img/api-fortress/2017/04/testcreated.jpg')} alt="testcreated.jpg" />

The easiest way to create a test is using our _Magic_ tool. To do so you need to import the call into the console. First, select the call in the composer, which will highlight it. Open the HTTP Client and click the import button, highlighted below.

<img src={useBaseUrl('img/api-fortress/2017/04/Screen-Shot-2018-03-30-at-11.34.09-AM.png')} alt="screenshot.png" />

When the call is in the console, click the _Send_ button and you will see the response.

<img src={useBaseUrl('img/api-fortress/2017/04/Screen-Shot-2018-03-30-at-11.46.57-AM.png')} alt="screenshot.png" />

At this point, the _Magic_ tool can generate the test for you. Click the "Generate Test" button, highlighted in the image below. 

Click _Continue_ a few times and voila, a complete API test generated without having to write any code. 

<img src={useBaseUrl('img/api-fortress/2017/04/Screen-Shot-2018-03-30-at-11.43.58-AM.png')} alt="screenshot.png" />

You can then review the test, seen below, and add some more logic. You've successfully created a test from a Postman collection!

<img src={useBaseUrl('img/api-fortress/2017/04/Screen-Shot-2018-03-30-at-11.34.58-AM-1.png')} alt="screenshot.png" />
