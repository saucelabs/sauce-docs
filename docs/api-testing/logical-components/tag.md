---
id: tag
title: Tag
sidebar_label: Tag
keywords:
    - api-testing
    - logicalcomponents
    - tag
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This component is used to dynamically tag the resulting document of a test execution. You can easily find a document by searching for the specific tag, in the same way you can find a test by searching for the tag you assigned to it.

In the composer you will have the 'tag' component as option to be added. In this way, you can add different tags based on dynamic events happening during the test execution, such as a certain value retrieved in the payload. You can assign multiple tags to each test by adding more 'tag' components to it.

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Value | String | Yes |

## Examples

<img src={useBaseUrl('img/api-fortress/2020/12/tagComposer.jpg')} alt="tagComposer.jpg"/>

Another way to add a tag to your test is in the test details screen during test definition or edit.

<img src={useBaseUrl('img/api-fortress/2020/12/tag.jpg')} alt="tag.jpg"/>

Static tags will be displayed in the tests list.

All tags, dynamic and static will mark the test execution documents. In the project dashboard, you have the ability to filter events by tags.

<img src={useBaseUrl('img/api-fortress/2020/12/projDashTag.jpg')} alt="projDashTag.jpg"/>

:::tip Use the API
There is also a dedicated API that does the same. For more info please see the documentation [here](http://docs.apifortressv3.apiary.io/)
:::