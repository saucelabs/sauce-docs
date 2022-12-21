---
id: read-file
title: 'Read File (Self-Hosted Only)'
sidebar_label: 'Read File (Self-Hosted Only)'
keywords:
- api
- api-fortress
- read-file
- self-hosted
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

In a self-hosted/on-premises deployment, the read-file command allows you to read a text file from the server local storage, in the `/data` directory.

## Parameters

| **Name** | **Type/Value**             | **Required** |
| -------- | -------------------------- | ------------ |
| path     | String                     | Yes          |
| var      | String                     | Yes          |
| mode     | "JSON","XML2","text","CSV" | Yes          |

- **path:** the path of the file, relative to the `/data/` directory
- **var:** the name of the variable that will carry the read values
- **mode:** how the file has to be parsed

If the file is successfully read, the variable declared in the "var" attribute will contain the structured (in case of JSON, XML2, or CSV) or unstructured (in case of text) information you can use as any other piece of data.
