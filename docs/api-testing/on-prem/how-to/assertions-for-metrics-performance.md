---
id: assertions-for-metrics-performance
title: 'Assertions for Metrics / Performance'
sidebar_label: 'Assertions for Metrics / Performance'
keywords:
- assertions
- metrics
- performance
- api-testing
- how-to
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

We have a [more detailed guide](/api-testing/on-prem/learn-more/working-with-the-response-object) on working with the HTTP response, but wanted to provide specifics on creating assertions against performance metrics.

Here is an example using the CODE VIEW of the code. Please note that _overall_ refers to fetch and latency combined.

```html
<assert-less
expression="payload_response.metrics.latency"
value="200"
type="integer"
/>
```

```html
<assert-less
expression="payload_response.metrics.fetch"
value="350"
type="integer"
/>
```

```html
<assert-less
expression="payload_response.metrics.overall"
value="450"
type="integer"
/>
```
