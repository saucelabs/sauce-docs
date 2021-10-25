---
id: using-the-example-snippets
title: Using the Example Snippets
sidebar_label: Using the Example Snippets
description: Learn how to create and manage tests using some of the tempalte examples offered by API Fortress.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

API Fortress offers a vast repository of API Testing examples that you can either use as templates or further add intelligence to an existing API Test.

## Insert a Snippet in an Empty Test

To insert a snippet into an empty test:

1. Select __Examples__ on the left-hand menu in the UI:
   
   <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/examples.png')} alt="Example Snippet Tab"/> </p>

1. Next, you'll see some use case examples:

   <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/snippetList.png')} alt="Snippet List"/> </p>

   Select _AUTHENTICATION_ > _basic authentication_. A brief description appears, when ready select **Insert Snippet**:

   <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/snippetInsert.png')} alt="Snippet Insert"/> </p>

   The result then displays in the console:

   <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/snippetResult.png')} alt="Snippet Result"/> </p>


## Insert a Snippet in an Existing Test

To insert a snippet into an existing test:

1. Select __Examples__ on the left-hand menu in the UI:

   <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/examples.png')} alt="Example Snippet Tab"/> </p>

1. Select the component position by highlighting the desired component.

1. Next, you'll see some use case examples, select _DATA MANIPULATION_ > _parse nested JSON_. A brief description appears, when ready select **Insert Snippet**:

   <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/existingSnippet.png')} alt="Existing Snippet"/> </p>

   You will see the new snippet nested below your selected component position:

   <p align="center"><img src={useBaseUrl('img/api-fortress/2019/06/snippetInsertion.png')} alt="Example Snippet Tab"/> </p>

1. Finally, select __Run__ to execute the test and ensure it runs properly.
   
:::warning Example is for Demonstration Purposes Only!
In the example directly above, our snippet placement is invalid. Make sure you review each object relationship before you continue.
:::
