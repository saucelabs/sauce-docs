---
id: the-vault
title: "Use the Vault (Resuable Variables / Code Snippets)"
sidebar_label: Vault
description: "The vault allows you to store variables and code snippets that can be used across an entire project."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The vault allows you to store variables and code snippets to use in your tests in one project, or across all projects.

<!--[Explanation Video](https://www.youtube.com/watch?v=cBNMi30Fj9Q)-->

## Vault Overview

You can access the vaults in one of two ways:

1. From the Dashboard:
   <img src={useBaseUrl('img/api-fortress/2021/04/fromDashboard.png')} alt="Access Vault from Dashboard"/>

2. From the Project view:
   <img src={useBaseUrl('img/api-fortress/2021/04/vaultFromProject.png')} alt="Access Vault from Project View "/>

### Variables Section

In the variable section, you have the option to define environment variables to use in your tests. The screenshot below shows the _Company Vault_; these variables are available across all projects.

<img src={useBaseUrl('img/api-fortress/2021/04/company_vault.png')} alt="Company Vault View"/>

The second screenshot shows the _Project Vault_; these variables are only available in the specific project.

Defining a variable in the Vault is helpful when you need to use the same variable across multiple tests. This way, you don't need to rewrite it every time.

:::info variable scope
If a variable that exists in the Company Vault, also exists in the Project Vault with the same name definition, the latter will override the Company Vault value.
:::

For example, a password could be saved as a variable and reused in multiple places. See the [The password variable example](#the-password-variable) below for more details.

:::tip Import Postman Collections into The Vault
Additionally, you can import variables from Postman. See [here](/api-testing/mark3/quick-start/importing-postman-collections/) for more details.
:::

### Snippets Section

All created or imported test component/code examples exist in the snippets section.

:::tip What is a Snippet?
See [here](/api-testing/mark2/reference/composer-snippets) for more details.
:::

Much like with variable scope, code snippets saved in the specific _Project Vault_ are only available in that project. Likewise, snippets saved in the _Company Vault_ are available across all projects.

A good use case for the snippets feature is an authentication flow; you don't need nor want to rewrite all authentication steps for every test. Instead, call the snippet that contains these authentication details. See [The Autentication Snippet example below for more details](#the-authentication-snippet). Another good example is integration testing, where you can reuse various tests to create one larger flow.

:::warning snippet Scope
If you have a snippet saved for the current project, but you need to make it available across all projects, you can **export** the snippet from your current project to the Company Vault by using the import/export feature (see screenshot below).

<img src={useBaseUrl('img/api-fortress/2021/04/exportSnippet.png')} alt="Snippet"/>

:::

## Creating a Variable

To create a variable:

* Navigate to the Project Vault
* Select _New Entry_
* Add the Key: `domain`
* Add the value: `api.us-west-1.com`
* Select _Confirm_

<img src={useBaseUrl('img/api-fortress/2021/04/variableEntry2.png')} alt="Domain Variables"/>

Reference the variable by the key, and the following syntax: `${domain}`.

### The Product Variable

Consider a scenario where an `/product` endpoint requires a specific `id` query parameter.

<img src={useBaseUrl('img/api-fortress/2021/04/productID0.png')} alt="Product ID 0"/>

While this is a perfectly valid request parameter, it can be hard to manage and update if you scale out your tests. Therefore rather than continuously hard-coding this value into the _Query Params_ field, a safer and more efficient approach is to export this value into to a variable.

Here is an example of how it could look like in the _Project Vault_:

<img src={useBaseUrl('img/api-fortress/2021/04/productID1.png')} alt="Product ID 1"/>

Now you can switch the _Query Params_ field from **String value** to **Variable** and enter the variable name: `product_id` (see the screenshot below). This way if you have multiple tests in your project using the same password.

<img src={useBaseUrl('img/api-fortress/2021/04/productID2.png')} alt="Product ID 2"/>

:::tip code view example
You can also reference this parameter in Code view with the following syntax: `params="['id':product_id]"`.
:::

## Creating a Code Snippet

To create a code snippet:

* Navigate to the desired test
* Select the desired test component
* Select the "Export snippet from selection" icon
* Give the snippet a name
* Select _Save Snippet_

<img src={useBaseUrl('img/api-fortress/2021/04/createSnippet.png')} alt="Creating a Snippet"/>

<img src={useBaseUrl('img/api-fortress/2021/04/snippetDetails.png')} alt="Snippet Details"/>

### The Authentication Snippet

Below is an example of how to create an Authentication Snippet.

1. First, create a new test with a request component that requires basic authentication. For examples, check the [Sauce Labs REST API endpoints](/dev/api/) for ideas.
   <img src={useBaseUrl('img/api-fortress/2021/04/exampleSnippetRequest.png')} alt="Example Snippet Request"/>

1. Select to the **+ Add Request Headers** section below the request component
   <img src={useBaseUrl('img/api-fortress/2021/04/addRequestHeader.png')} alt="Add Request Header"/>

1. Select **Basic Authentication** from the list
   <img src={useBaseUrl('img/api-fortress/2021/04/basicAuth.png')} alt="Basic Auth Component"/>

1. Enter the details for `username` and `password`, then select _Save_.
   <img src={useBaseUrl('img/api-fortress/2021/04/basicAuthDetails.png')} alt="Basic Auth Details Component"/>

1. Once the _Authorization Header_ appears, highlight it in the UI, then select the _Export snippet from selection_ icon in the toolbar.
   <img src={useBaseUrl('img/api-fortress/2021/04/authSnippet.png')} alt="Auth Snippet screenshot"/>

Consider a scenario where this login will be required for all the endpoints we have to test. It makes sense for this call to be stored in the Vault.

Now you can choose to insert or invoke this snippet in future tests that require a Basic Authentication header.
