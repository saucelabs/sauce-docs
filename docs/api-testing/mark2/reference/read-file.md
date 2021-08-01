---
id: read-file
title: "Read File (Self-Hosted Only)" 
sidebar_label: "Read File (Self-Hosted Only)" 
keywords:
    - api
    - api-fortress
    - read-file
    - self-hosted
---

In a self-hosted/on-premises deployment, the read-file command allows you to read a text file from the server local storage, in the `/data` directory.

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| path | String | Yes |
| var | String | Yes |
| mode | "JSON","XML2","text","CSV" | Yes |

* **path:** the path of the file, relative to the `/data/` directory
* **var:** the name of the variable that will carry the read values
* **mode:** how the file has to be parsed

If the file is successfully read, the variable declared in the "var" attribute will contain the structured (in case of JSON, XML2, or CSV) or unstructured (in case of text) information you can use as any other piece of data.
