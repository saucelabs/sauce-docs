---
id: assert-valid-json-schema
title: Assert Valid JSON Schema
sidebar_label: Assert Valid JSON Schema
description: 'This assertion is used to validate a JSON schema, based on the provided schema definition.'
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

## Parameters

| **Name**   | **Type/Value**         | **Required** |
| ---------- | ---------------------- | ------------ |
| Expression | Expression             | Yes          |
| JsonSchema | JSON schema definition | Yes          |
| Comment    | String                 | No           |

- **Expression**: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](https://apifortress.com/doc/expression/) for more details.
- **JsonSchema**: The JSON schema definition. This will be used to validate the JSON passed in the expression field. See below for an example.
- **Comment**: Add comment messages in the form of a string data type.

## JSON Schema Example

**Sample JSON**

```json
{
"rectangle": {
"a": 15,
"b": 5
}
}
```

**Sample Schema**

```json
{
"type": "object",
"properties": {
"rectangle": {
"$ref": "#/definitions/Rectangle"
}
},
"definitions": {
"size": {
"type": "number",
"minimum": 0
},
"Rectangle": {
"type": "object",
"properties": {
"a": {
"$ref": "#/definitions/size"
},
"b": {
"$ref": "#/definitions/size"
}
}
}
}
}
```

## Code View Example

```html
<set var="json_success" lang="template">
<![CDATA[{ "rectangle" : { "a" : 15, "b" : 5 } }]]>
</set>
<assert-valid-jsonschema expression="json_success">
<![CDATA[{ "type" : "object", "properties" : { "rectangle" : {"$ref" :
"#/definitions/Rectangle" } }, "definitions" : { "size" : { "type" : "number",
"minimum" : 0 }, "Rectangle" : { "type" : "object", "properties" : { "a" :
{"$ref" : "#/definitions/size"}, "b" : {"$ref" : "#/definitions/size"} } } }
}]]>
</assert-valid-jsonschema>
```
