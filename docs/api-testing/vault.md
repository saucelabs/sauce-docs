---
id: vault
title: Creating Reusable Variables and Snippets with the Vault
sidebar_label: Vault, Variables, Snippets
description: "The vault allows you to store variables and code snippets that can be used across an entire project."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our Vault feature allows you to store variables and code snippets to use in your tests in one project, or across all projects.

<!--[Explanation Video](https://www.youtube.com/watch?v=cBNMi30Fj9Q)-->


## What You'll Need
* An existing API Testing Project. For details on how to create one, see the [Quickstart](/api-testing/quickstart/) guide.


## Vault Types

There are two types of API Testing vaults, the **Company Vault** and Project-specific **Vault**. While their UI is the same, they serve two different purposes:

### Company Vault
The **Company Vault** is where you can store variables and test code snippets to use across all of your Projects. You can access this tab from your API Testing home page, where all of your Projects are listed.<br/><img src={useBaseUrl('img/api-fortress/2021/04/fromDashboard.png')} alt="Access Vault from Dashboard" width="400" />

### [Project] Vault

The Project **Vault**, which you can access from within a Project, is where you can store Project-specific variables and test code snippets.<br/><img src={useBaseUrl('img/api-fortress/2021/04/vaultFromProject.png')} alt="Access Vault from Project View" />


## Variables

In the **Variables** section, you can define environment variables to use in your tests, so that you don't need to rewrite them every time.

The screenshot below shows the **Company Vault**; these variables are available across all projects.

<img src={useBaseUrl('img/api-fortress/2021/04/company_vault.png')} alt="Company Vault View"/>


You should define a variable at the Project-specific **Vault** when you need to use the same one across multiple tests. As an example, you could save a password here as a variable and reuse it in multiple tests.

:::tip Import Postman Collections into The Vault
Additionally, you can import variables from Postman. See [here](/api-testing/import-postman-collection) for more details.
:::

:::note
If the same variable with the same name definition exists in both the **Project Vault** and **Company Vault**, then the value in the **Project Vault** will override the one in the Company Vault.
:::

### Create a Variable

1. Go into a Project.
1. Click on the **Vault** tab.
1. Select **New Entry**.
1. Add a Key (e.g., `domain`).
1. Add a Value (e.g., `api.us-west-1.com`).
1. Select **Confirm**.

<img src={useBaseUrl('img/api-fortress/2021/04/variableEntry2.png')} alt="Domain Variables"/>

Then in your tests, you'd reference the variable by the `Key` using the following syntax: `${domain}`.


### Use Case: Product Variable

Consider a scenario where an `/product` endpoint requires a specific `id` query parameter.

<img src={useBaseUrl('img/api-fortress/2021/04/productID0.png')} alt="Product ID 0"/>

While this is a perfectly valid request parameter, it can be hard to manage and update if you scale out your tests. Therefore rather than continuously hard-coding this value into the **Query Params** field, a safer and more efficient approach is to export this value into to a variable.

Here is an example of how it could look like in the Project-specific **Vault**:

<img src={useBaseUrl('img/api-fortress/2021/04/productID1.png')} alt="Product ID 1"/>

Now you can switch the **Query Params** field from **String value** to **Variable** and enter the variable name: `product_id` (see the screenshot below). This way if you have multiple tests in your project using the same password.

<img src={useBaseUrl('img/api-fortress/2021/04/productID2.png')} alt="Product ID 2"/>

:::tip code view example
You can also reference this parameter in Code view with the following syntax: `params="['id':product_id]"`.
:::


## Snippets

In the **Snippets** section of the Vault, you can create or import test component/code examples exist. A _snippet_ is a test code fragment that you can create, import and store in your [Vault](/api-testing/vault) and reuse in multiple tests. Snippet length can range from one line of code to an entire test.

Much like with variable scope, snippets saved in the [Project] **Vault** are only available in that Project and snippets saved in the **Company Vault** are available across all projects.

When you save a snippet from the [**Composer**](/api-testing/composer/), it will be saved in the [Project] **Vault**. While you cannot save a snippet from the Composer to the **Company Vault**, you can **export** there using the import/export feature (see screenshot below).<br/><img src={useBaseUrl('img/api-fortress/2021/04/exportSnippet.png')} alt="Snippet"/>



### Create a Snippet

1. Log in to Sauce Labs, then click **API Testing**.
2. Click on a **Project**.
3. Click on a **Test**.
4. Click on the first component you want to include in your snippet.
5. Hold down the **`[SHIFT]`** key and click on the last component you want to include. This will highlight your snippet selection.
6. Select the desired test component.
7. Select the **Export snippet from selection** icon.
8. Give the snippet a name.
9. Select **Save Snippet**.

<img src={useBaseUrl('img/api-fortress/2021/04/createSnippet.png')} alt="Creating a Snippet"/>

<img src={useBaseUrl('img/api-fortress/2021/04/snippetDetails.png')} alt="Snippet Details"/>

That's it! Now that your snippet has been created, you can use it in every test within the Project.

#### Updating Snippet

1. Open the snippet from your Project [**Vault**](/api-testing/vault).
2. Click on any of the fields and begin typing to edit the details.
3. Changes are saved automagically.


### Using Snippets

For each snippet, two actions are available:
* **Paste Snippet**: allows you to paste the entire component inside the test, allowing you to edit as needed. The pasted components will lose any reference to the original snippet.
* **Invoke Snippet**: creates a **Call** component that will invoke the snippet. If the snippet changes, all the tests containing the Call component to that snippet will inherit the changes.


### Use Case: Authentication Snippet

A good use case for the snippets feature is building an authentication flow; you don't need nor want to rewrite all authentication steps for every single test. Instead, call the snippet that contains these authentication details. Another good example is integration testing, where you can reuse various tests to create one larger flow.

Below is an example of how to create an Authentication Snippet.
1. First, create a new test with a request component that requires basic authentication. For examples, check the [Sauce Labs REST API endpoints](/dev/api/) for ideas.<br/><img src={useBaseUrl('img/api-fortress/2021/04/exampleSnippetRequest.png')} alt="Example Snippet Request"/>
1. Select to the **+ Add Request Headers** section below the request component.<br/><img src={useBaseUrl('img/api-fortress/2021/04/addRequestHeader.png')} alt="Add Request Header"/>
1. Select **Basic Authentication** from the list.<br/><img src={useBaseUrl('img/api-fortress/2021/04/basicAuth.png')} alt="Basic Auth Component"/>
1. Enter the details for `username` and `password`, then select **Save**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/basicAuthDetails.png')} alt="Basic Auth Details Component"/>
1. Once the **Authorization Header** appears, highlight it in the UI, then select the **Export snippet from selection** icon in the toolbar.<br/><img src={useBaseUrl('img/api-fortress/2021/04/authSnippet.png')} alt="Auth Snippet screenshot"/>

Consider a scenario where this login will be required for all the endpoints we have to test. It makes sense for this call to be stored in the Vault.

Now you can choose to insert or invoke this snippet in future tests that require a Basic Authentication header.

## More Information
* [API Fortress Legacy Migration Guide](/api-testing/legacy)
