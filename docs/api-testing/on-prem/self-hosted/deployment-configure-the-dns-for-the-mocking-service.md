---
id: deployment-configure-the-dns-for-the-mocking-service
title: 'Deployment – Configure the DNS for the Mocking Service'
sidebar_label: 'Deployment – Configure the DNS for the Mocking Service'
keywords:
- api
- api-fortress
- self-hosted
- mocking
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

Regardless of the deployment method used, to use the Mocking service you will need to apply one change in your DNS.

Assuming your API Fortress dashboard is mapped to the domain:

```
apif.yourcompany.com
```

A new CNAME entry needs to be created, as in:

```
CNAME *.apif.yourcompany.com > apif.yourcompany.com
```

As mocked services will be accessible via subdomains of the dashboard.
