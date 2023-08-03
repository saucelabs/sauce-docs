---
id: vault-variable
title: Saving a Variable in Vault
sidebar_label: Saving a Variable in Vault
description: 'Create a variable in the vault to use across your tests'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Consider a scenario where a Request Header is required for all the endpoints in your test.

<img src={useBaseUrl('img/api-testing/vault-auth-header.png')} alt="Request Header"/>

<img src={useBaseUrl('img/api-testing/requests-auth-header.webp')} alt="Request Header in all endpoints"/>

While this is a perfectly valid request header, it can be hard to manage and update if you scale out your tests. Therefore, rather than continuously hard-coding this value into the **Request Header** field, a safer and more efficient approach is to export this value in to a variable.

The following is an example of how it might look in the project-specific Vault:

<img src={useBaseUrl('img/api-testing/vault-header-var.png')} alt="Request Header variable in the vault"/>

:::note Sentitive Data
When the variable contains sensitive data and you don't want leave it in plain text you can [mark it as Sensitive](/api-testing/vault/#mark-variables-as-sensitive) and it will be masked from everywhere it is used.
:::

Now you can switch the **Request Header** field from a String value to a Variable and enter the variable name: `header_key` (see the screenshot below). This allows you to have multiple tests in your project using the same header.

<img src={useBaseUrl('img/api-testing/header-string-to-var.png')} alt="Request Header with variable"/>

<img src={useBaseUrl('img/api-testing/request-with-variable.webp')} alt="Request Header in all endpoints as variable"/>
