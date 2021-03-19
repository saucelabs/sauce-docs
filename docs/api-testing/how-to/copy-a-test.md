---
id: copy-a-test
title: Copy a Test
sidebar_label: Copy a Test
keywords:
    - api-testing
    - how-to
    - copy-a-test
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here we will show you how to copy and paste a test. Before that, it should be noted that this isn't often the right way to go. Take a step back and ask yourself if this is actually the perfect solution. We have specifically built our platform to improve work efficiency. 

## Use Cases

Here are some questions that you should ask yourself:

- Are you looking to do negative testing? You can likely do that in the same test using data sets and the [IF component](https://apifortress.com/doc/if-component/) + [status codes](https://apifortress.com/doc/working-with-the-response-object/).
- Are you looking to run from different environments? No problem [with Presets](https://apifortress.com/doc/environments-and-presets/).
- Do you want to run most but not all of the tests in a specific project? Execute tests [using tags](https://apifortressv3.docs.apiary.io/#reference/0/test-run/advanced-run-by-tag). ([example](https://mastiff.apifortress.com/app/api/rest/v3/9f68a3de-d990-43c2-bc84-c4a208e2f3f0362/tests/tag/live/run?sync=true), using a unique webhook and the 'live' tag.)

If you still wish to copy a test, the procedure is as follows. 

## How to Copy a Test

1. Enter the project and test. 
2. Then click over to the _Published_ version of the test
3. Then the _Copy to Clipboard_ option becomes available

   <img src={useBaseUrl('img/api-fortress/2017/11/copy-1.png')} alt="Copy 1"/>

4. Click _Copy to Clipboard_
5. Then browse to the Tests view of the same, or another project. 
6. While there, the _Paste from Clipboard_ option becomes available.

   <img src={useBaseUrl('img/api-fortress/2017/11/copy-2.png')} alt="Copy 2"/>