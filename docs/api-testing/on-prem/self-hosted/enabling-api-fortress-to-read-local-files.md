---
id: enabling-api-fortress-to-read-local-files
title: Enabling API Fortress to Read Local Files
sidebar_label: Enabling API Fortress to Read Local Files
keywords:
- api
- api-fortress
- onpremises
- read
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

Using the [read-file](/api-testing/on-prem/reference/read-file) command, you can have your test read local files.

Currently, there is no GUI functionality to upload the files, however, you can set up your container to connect to a local folder on your host machine.

To do so, you have to update your docker-compose.yml file in the `core/` directory.

In the "apifortress" service definition, modify the "volumes" block by adding one entry looking like this:

```yaml
volumes:
- /var/local/data:/data
```

Where `/var/local/data` is the path in your host machine where you want to store the files.
