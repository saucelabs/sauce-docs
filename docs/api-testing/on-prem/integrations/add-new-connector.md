---
id: add-new-connector
title: Add a New Connector
sidebar_label: Add New Connector
keywords:
- api-testing
- integrations
- add
- connector
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

import useBaseUrl from '@docusaurus/useBaseUrl';

Here is a quick guide to load up a new connector into your API Fortress self-hosted/on-premises deployment.

You can find all the connectors here: [https://github.com/apifortress/connectors](https://github.com/apifortress/connectors)

1. Go to admin panel
   <img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.02.13-PM.png')} alt="screenshot"/>
2. Click on connectors
   <img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.02.36-PM.png')} alt="screenshot"/>
3. Add new connector
   <img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.04.03-PM.png')} alt="screenshot"/>
4. Follow the README.md file for how to fill in the connector form
   <img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.04.46-PM.png')} alt="screenshot"/>
5. Copy and Paste the code from the connector groovy file into the code section
   <img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.05.04-PM.png')} alt="screenshot"/>
