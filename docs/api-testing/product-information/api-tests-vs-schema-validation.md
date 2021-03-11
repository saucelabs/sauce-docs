---
id: api-tests-vs-schema-validation
title: "API Tests vs. Schema Validation"
sidebar_label: "API Tests vs. Schema Validation"
keywords:
    - api
    - api-fortress
    - schema
---

One of the most common questions we receive about API testing is:

> What's the deal? Schema validation was not enough?

Some of these inquiries are moved by real curiosity, others are just polemic, but either cases, the question makes a good point if you've never actually tried our platform.

Schema validation has two major flaws:

1. You need to write a schema
2. It statically validates your API syntax and grammar, not your data and certainly not your _darkest secrets_.

For what concerns ( 1 ) deal with it. ( 2 ) is a little more intriguing. Let's work by example.

```json
{
  "group": "food",
  "items": [ 10,15,17,19 ],
  "install": false,
  "installDay": null,
  "delivery": true,
  "request_date": 1456249628
}
```
Of course a schema can determine whether these items are the right types, but no schema can tell that:

1. _Food items should have ids lower than 100_
2. _Food items should not be installed (weird, right?)_
3. _Food items have no installation day, but they're deliverable_
4. _The response shouldn't be older than 1 day (caching?)_

Moreover, API testing allows you to compare things with the request data. You don't want to get bathrobes listed while you were looking for your birthday cake. Or, more technically, you don't want the data within a credit card transaction to be cached.

Right?
