---
id: vault
title: Adding Reusable Variables, Snippets, and Files in the Vault
sidebar_label: Vault, Variables, Snippets, Files
description: "The Vault allows you to store variables, code snippets, and files that can be used across an entire project."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our **Vault** feature allows you to store variables and code snippets to use in your tests in one project, or across all projects. You can also store files for use in one project. 

## What You'll Need
* An existing API Testing project. For details on how to create one, see the [Quickstart](/api-testing/quickstart/) guide.

## Vault Types

There are two types of API Testing vaults, the **Company Vault** and a project-specific **Vault**. While their UI is the same, they serve two different purposes.

### Company Vault
The **Company Vault** is where you can store variables and test code snippets to use across all of your projects. You can access this tab from your API Testing home page, where all of your projects are listed.<br/><img src={useBaseUrl('img/api-fortress/2021/04/fromDashboard.png')} alt="Access Vault from Dashboard" width="400" />

### Project Vault

The project **Vault**, which you can access from within a project, is where you can store project-specific variables, test code snippets, and files.<br/><img src={useBaseUrl('img/api-fortress/2021/04/vaultFromProject.png')} alt="Access Vault from Project View" />

## Variables

In the **Variables** section, you can define environment variables to use in your tests, so that you don't need to rewrite them every time.

The screenshot below shows the **Company Vault**; these variables are available across all projects.

<img src={useBaseUrl('img/api-fortress/2021/04/company_vault.png')} alt="Company Vault View"/>

Define a variable at the project-specific **Vault** when you need to use the same one across multiple tests. For example, you could save a password here as a variable and reuse it in multiple tests.

:::tip Import Postman Collections into a vault
Additionally, you can import variables from Postman. See [Importing Postman Collections, Variables, and Environments](/api-testing/import-postman-collection) for more details.
:::

:::note
If the same variable with the same name definition exists in both the **Project Vault** and **Company Vault**, then the value in the **Project Vault** will override the one in the **Company Vault**.
:::

### Create a Variable

1. Open a project.
1. In the left panel, click **Vault**.
1. Select **New Entry**.
1. Add a Key (e.g., `domain`).
1. Add a Value (e.g., `api.us-west-1.saucelabs.com`).
1. Select **Confirm**.

<img src={useBaseUrl('img/api-fortress/2021/04/variableEntry2.png')} alt="Domain Variables"/>

Then in your tests, you'd reference the variable by the `Key` using the following syntax: `${domain}`.

### Use Case: Product Variable

Consider a scenario where an `/product` endpoint requires a specific `id` query parameter.

<img src={useBaseUrl('img/api-testing/vault_productID0.png')} alt="Product ID 0"/>

While this is a perfectly valid request parameter, it can be hard to manage and update if you scale out your tests. Therefore, rather than continuously hard-coding this value into the **Query Params** field, a safer and more efficient approach is to export this value into to a variable.

The following is an example of how it might look in the project-specific Vault:

<img src={useBaseUrl('img/api-fortress/2021/04/productID1.png')} alt="Product ID 1"/>

Now you can switch the **Query Params** field from a String value to a Variable and enter the variable name: `product_id` (see the screenshot below). This allows you to have multiple tests in your project using the same product_id.

<img src={useBaseUrl('img/api-testing/vault_productID2.png')} alt="Product ID 2"/>

## Snippets

In the **Snippets** section of the **Vault**, you can create or import test component/code examples. A _snippet_ is a test code fragment that you can create, import, and store in your [Vault](/api-testing/vault) and reuse in multiple tests. Snippet length can range from one line of code to an entire test.

Much like with variable scope, snippets saved in a project **Vault** are only available in that project, and snippets saved in the **Company Vault** are available across all projects.

When you save a snippet from the [**Composer**](/api-testing/composer/), it will be saved in the project **Vault**. While you cannot save a snippet from the **Composer** to the **Company Vault**, you can export there using the import/export feature (see screenshot below).<br/><img src={useBaseUrl('img/api-testing/vault_exportSnippet.png')} alt="Snippet"/>

### Create a Snippet

1. Open a project.
1. Open a test.
1. Hold down the Ctrl key and click on the first component you want to include in your snippet.
1. Click on all the components you want to include in your snippet
1. Click **Save Snippet** to save your snippet
1. Give the snippet a name.
1. Select **Save Snippet**.

<img src={useBaseUrl('img/api-testing/authSnippet.png')} alt="Creating a Snippet"/>

<img src={useBaseUrl('img/api-testing/snippetDetails.png')} alt="Snippet Details"/>

That's it! Now that your snippet has been created, you can use it in every test within the Project.

### Updating Snippet

1. Open a project.
1. In the left panel, click **Vault**, then click **Code Snippets**.
1. Click any of the fields and begin typing to edit the details.
Your changes are saved automatically.

### Using Snippets

For each snippet, two actions are available:
* **Paste Snippet**: This allows you to paste the entire component inside the test, which you can then edit as needed. The pasted components will lose any reference to the original snippet.
* **Call Snippet**: Creates a **Call** component that will invoke the snippet. If the snippet changes, all the tests containing the Call component to that snippet will inherit the changes.


### Use Case: Authentication Snippet

A good use case for the snippets feature is building an authentication flow; you don't need to rewrite all authentication steps for every single test. Instead, call the snippet that contains these authentication details. Another good example is integration testing, where you can reuse various tests to create one larger flow.

Below is an example of how to create an Authentication Snippet.
1. First, create a new test with a request component that requires basic authentication. For examples, check the [Sauce Labs REST API endpoints](/dev/api/) for ideas.<br/><img src={useBaseUrl('img/api-testing/vault_exampleSnippetRequest.png')} alt="Example Snippet Request"/>
1. Select **+ Add Child Component** below the request component.<br/><img src={useBaseUrl('img/api-testing/vault_addRequestHeader.png')} alt="Add Request Header"/>
1. Select **Basic Authentication** from the list.<br/><img src={useBaseUrl('img/api-testing/vault_basicAuth.png')} alt="Basic Auth Component"/>
1. Enter the details for `username` and `password`, then select **Confirm**.<br/><img src={useBaseUrl('img/api-testing/vault_basicAuthDetails.png')} alt="Basic Auth Details" width="600"/>
1. Once the **Authorization Header** appears, click **Save Changes**.<br/>
1. Hold down the Ctrl key and highlight the code in the UI and **Save Snippet**.<br/><img src={useBaseUrl('img/api-testing/vault_savesnippet.png')} alt="Save snippet"/>
1. Give the snippet a name and **Save Snippet**.<br/><img src={useBaseUrl('img/api-testing/vault_snippetname.png')} alt="Snippet name" width="600"/>

Consider a scenario where this login will be required for all the endpoints we have to test. It makes sense for this call to be stored in the **Vault**.

Now you can choose to **Call Snippet** or **Paste Snippet** in future tests that require the Login.
<img src={useBaseUrl('img/api-testing/call_paste_snippet.png')} alt="Snippet options"/>

## Files

In the **Drive** section of a project-specific **Vault**, you can upload files to use in your tests. The file size limit for an individual file is 16 MB. The total limit for the **Company Vault** is 100 MB. This means if one project-specific **Vault** is using 100 MB of storage, other projects cannot upload addtional files.

### Uploading a file

1. Open a project.
1. In the left panel, click **Vault**, then click **Drive**.
1. Click **Upload file**. 
1. Upload the file using drag and drop or **Choose file**, or enter the URL, then click **Upload**.
 
You can work with your files in **Vault Drive** as follows:

If you upload a file via a URL, you can hover over **source url** to view the full address.  <br/><img src={useBaseUrl('img/api-fortress/2022/09/vaultuploadfileURL.png')} alt="View Source URL" /> 

You can rename, download, or delete individual files.<br/><img src={useBaseUrl('img/api-fortress/2022/09/vaultfileoptions.png')} alt="Rename, delete or download files" />

To delete multiple files, select the checkbox next to the files, then click **Delete Selected**.<br/><img src={useBaseUrl('img/api-fortress/2022/09/vaultdeletefileoptions.png')} alt="Delete multiple files" /> 

## More Information
* [API Fortress Legacy Migration Guide](/api-testing/legacy)
