---
id: comment
title: Comment
sidebar_label: Comment
keywords:
- api
- api-fortress
- comment
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

This assertion allows you to print out (in test reports) information.

It can have two sorts of values. The first is a normal string value. An example of that would be to explain what a specific WHEN loop is being used for. Similar to when you write comments in code.

Example:

```
This is a comment
```

The second is useful for test debugging and analysis. You can pass variables into the comments. An example use of this would be to print out the product ID being used in the current loop of a test.

Example:

```bash
The value of the ID is ${payload.id}
```
