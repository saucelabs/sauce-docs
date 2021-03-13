---
id: assert-valid-json-schema
title: Assert Valid JSON Schema
sidebar_label: Assert Valid JSON Schema
description: "This assertion is used to validate a JSON schema, based on the provided schema definition."
---

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Expression | Expression | Yes |
| JsonSchema | JSON schema definition | Yes |
| Comment | String | No |

* __Expression__: It's the path to the element we want to operate on (e.g. `payload.ProductID`). See [Expression](https://apifortress.com/doc/expression/) for more details.
* __JsonSchema__: The JSON schema definition. This will be used to validate the JSON passed in the expression field. See below for an example.
* __Comment__: Add comment messages in the form of a string data type.

## JSON Schema Example

__Sample JSON__

```json
{
   "rectangle":{
      "a":15,
      "b":5
   }
}
```

__Sample Schema__

```json
{
   "type":"object",
   "properties":{
      "rectangle":{
         "$ref":"#/definitions/Rectangle"
      }
   },
   "definitions":{
      "size":{
         "type":"number",
         "minimum":0
      },
      "Rectangle":{
         "type":"object",
         "properties":{
            "a":{
               "$ref":"#/definitions/size"
            },
            "b":{
               "$ref":"#/definitions/size"
            }
         }
      }
   }
}
```

## Code View Example

```html
<set var="json_success" lang="template"> <![CDATA[{ "rectangle" : { "a" : 15, "b" : 5 } }]]> </set> <assert-valid-jsonschema expression="json_success"> <![CDATA[{ "type" : "object", "properties" : { "rectangle" : {"$ref" : "#/definitions/Rectangle" } }, "definitions" : { "size" : { "type" : "number", "minimum" : 0 }, "Rectangle" : { "type" : "object", "properties" : { "a" : {"$ref" : "#/definitions/size"}, "b" : {"$ref" : "#/definitions/size"} } } } }]]> </assert-valid-jsonschema>
```
