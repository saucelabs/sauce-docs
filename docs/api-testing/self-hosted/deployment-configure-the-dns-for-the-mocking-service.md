---
id: deployment-configure-the-dns-for-the-mocking-service
title: "Deployment – Configure the DNS for the Mocking Service"
sidebar_label: "Deployment – Configure the DNS for the Mocking Service"
keywords:
    - api
    - api-fortress
    - self-hosted
    - mocking
---

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