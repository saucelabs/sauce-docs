---
id: following-redirects
title: Following Redirects
sidebar_label: Following Redirects
keywords:
- api-testing
- how-to
- redirects
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, API Fortress handles redirects as per RFC standard. So if you are performing a `GET` and the response wants to redirect you somewhere else, you don't need to do anything since the redirect will be followed automatically.

## RFC Guidelines

Now, since the RFC says that a redirected I/O call should perform the same operation as the original call, and given that, say, re-posting, is a security threat, API Fortress will not automatically follow redirects for any other I/O operation.

Boring, you may say, but following the exact RFC specifications is how you make sure that any client will not be caught off guard!

This specific scenario can be handled applying the following steps:

### Example

Make the I/O operation (let's consider a `POST` as an example)

1. The response header contains the **Location** field.

   <img src={useBaseUrl('img/api-fortress/2018/04/step1.jpg')} alt="step1.jpg" />

   Let's make sure it's there, by performing the call in our console tool.

   <img src={useBaseUrl('img/api-fortress/2018/04/step2highlighted.jpg')} alt="step2highlighted.jpg" />

2. Craft a `GET` to the `'location'` retrieved in the response header of the previous call

   (i.e. `${payload_response.headers['location']}`)

   <img src={useBaseUrl('img/api-fortress/2018/04/Post307.jpg')} alt="Post307.jpg" />
