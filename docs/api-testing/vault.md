---
id: vault
title: Adding Reusable Variables, Snippets, and Files in the Vault
sidebar_label: Variables, Snippets, Files
description: 'The Vault allows you to store variables, code snippets, and files that can be used across an entire project.'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our **Vault** feature allows you to store variables and code snippets to use in your tests in one project, or across all projects. You can also store files for use in one project.

## What You'll Need

- An existing API Testing project. For details on how to create one, see the [Quickstart](/api-testing/quickstart/) guide.

## Vault Types

There are two types of API Testing vaults, the **Company Vault** and a project-specific **Vault**. While their UI is the same, they serve two different purposes.

### Company Vault

The **Company Vault** is where you can store variables and test code snippets to use across all of your projects. You can access this tab from your API Testing home page, where all of your projects are listed.<br/><img src={useBaseUrl('img/api-testing/companyVault.png')} alt="Access Company Vault" width="400" />

### Project Vault

The project **Vault**, which you can access from within a project, is where you can store project-specific variables, test code snippets, and files.<br/><img src={useBaseUrl('img/api-testing/projectVault.png')} alt="Access Vault from Project View" width="300"/>

## Variables

In the **Variables** section, you can define environment variables to use in your tests, so that you don't need to rewrite them every time.

The screenshot below shows the **Company Vault**; these variables are available across all projects.

<img src={useBaseUrl('img/api-testing/company_vault.png')} alt="Company Vault View"/>

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
1. Optionally, check [**Sensitive**](/api-testing/vault/#mark-variables-as-sensitive).
1. Select **Confirm**.

<img src={useBaseUrl('img/api-testing/variableEntry2.png')} alt="Domain Variables"/>

Then in your tests, you'd reference the variable by the `Key` using the following syntax: `${domain}`.

### Mark Variables as Sensitive

You can mark a variable as sensitive if it contains a sensitive value that you do not want to appear in your test reports. When you mark a variable as sensitive, the value is obfuscated anywhere it appears: in Vault, tests reports, and the project dashboard's logs and metrics when the variable is used in the URL, path, or query. Variables marked sensitive cannot be edited. If you need to change the value, you can delete the variable and recreate it with the new value.

:::note
Variables marked as sensitive are always excluded from Vault exports.
:::

In the following example test report, the token variable has been marked as sensitive in Vault and appears as obfuscated in the report.

<img src={useBaseUrl('img/api-testing/sensitive-data2.webp')} alt="data obfuscated in report" width="600"/>

### Update Variables Using a File

You can update the values by editing each variable manually. However, when you need to update many (or all) variables in the Vault, importing a file that contains the updates can speed up the process.

The file can be a .cvs or .json and the structure will be as follow:

```json title="Example of a json file"
{
  "values": [
    {
      "key": "var1",
      "value": "foo"
    },
    {
      "key": "var2",
      "value": "bar"
    },
    {
      "key": "var3",
      "value": "chu"
    }
  ]
}
```

<img src={useBaseUrl('img/api-testing/csv-example.png')} alt="csv example"/>

#### Project Vault:

1. Open a project.
1. In the left panel, click **Vault**.
1. Click **Variables**.
1. Click **Import**.
1. Click **Choose File**.
1. Select the .csv or .json file from your machine.
1. Optionally, you can skip the last two steps by dragging and dropping the file.

#### Company Vault:

1. From the Projects page, in the left panel, click **Company Vault**.
1. Click **Variables**.
1. Click **Import**.
1. Click **Choose File**.
1. Select the .csv or .json file from your machine.
1. Optionally, you can skip the last two steps by dragging and dropping the file.

#### Rules for Updating Variables Using a File:

- If the file contains a variable with the same key as one in the Vault, the variable in the Vault will be overwritten.
- If the file contains a variable that is not saved in the Vault, the variable will be added into the Vault.
- If the variables in the Vault are not present in the file, the variables in the Vault will not be deleted.

Check a common [use case](/api-testing/use-cases/vault-variable/) out of saving variables in the vault.

## Snippets

In the **Code Snippets** section of the **Vault**, you can create or import test component/code examples. A _snippet_ is a test code fragment that you can create, import, and store in your [Vault](/api-testing/vault) and reuse in multiple tests. Snippet length can range from one line of code to an entire test.

Much like with variable scope, snippets saved in a project **Vault** are only available in that project, and snippets saved in the **Company Vault** are available across all projects.

When you save a snippet from the [**Composer**](/api-testing/composer/), it will be saved in the project **Vault**. While you cannot save a snippet from the **Composer** to the **Company Vault**, you can export there using the import/export feature (see screenshot below).<br/><img src={useBaseUrl('img/api-testing/vault_exportSnippet.png')} alt="Snippet"/>

### Create a Snippet

While is perfectly fine typing the code snippet directly in the area, if you are comfortable doing this. There's a easier way to create a snippet.

1. Open a project.
1. Open the test you want to generate the snippet of.
1. Hold down the Ctrl key, highlight the components in the UI you want to include in the snippet. They do not need to be adjacent to each other
   <img src={useBaseUrl('img/api-testing/vault_savesnippet.png')} alt="Save snippet"/>
1. Click **Save Snippet**
1. Give the snippet a name and click **Save Snippet**
   <img src={useBaseUrl('img/api-testing/vault_snippetname.webp')} alt="Snippet name" width="600"/>

### Update a Snippet

1. Open a project.
1. In the left panel, click **Vault**, then click **Code Snippets**.
1. Double-click any of the fields and begin typing to edit the details.
1. When you have finished, click **Save Snippet**.

### Update Snippets Using a File

You can update the code by editing each snippet manually or you can use a file.

The file can be a .cvs or .json and the structure will be as follow:

```json title="Example of a json file"
{
  "values": [
    {
      "key": "authentication",
      "value": "- id: post\n  children:\n    - id: body\n      contentType: application/json\n      content: |-\n        {\n        \t\"user_id\": 4628362,\n        \t\"password\": \"abc123\"\n        }\n  url: https://m2-authentication.load2.apifortress.com/request/token\n  var: authPayload\n  mode: json\n"
    }
  ]
}
```

<img src={useBaseUrl('img/api-testing/csv-example-snippet.webp')} alt="csv example"/>

#### Project Vault:

1. Open a project.
1. In the left panel, click **Vault**.
1. Click **Code Snippets**.
1. Click **Import**.
1. Click **Choose File**.
1. Select the .csv or .json file from your machine.
1. Optionally, you can skip the last two steps by dragging and dropping the file.

#### Company Vault:

1. From the Projects page, in the left panel, click **Company Vault**.
1. Click **Code Snippets**.
1. Click **Import**.
1. Click **Choose File**.
1. Select the .csv or .json file from your machine.
1. Optionally, you can skip the last two steps by dragging and dropping the file.

#### Rules for Updating Snippets Using a File:

- If the file contains a snippet with the same key as one in the Vault, the snippet in the Vault will be overwritten.
- If the file contains a snippet that is not saved in the Vault, the snippet will be added into the Vault.
- If the snippets in the Vault are not present in the file, the snippets in the Vault will not be deleted.

Learn how you can improve your test by generating an [Authentication Snippet](/api-testing/use-cases/vault-snippet/)

## Files

In the **Drive** section of a project-specific **Vault**, you can upload files to use in your tests. The file size limit for an individual file is 16 MB. The total limit for the Organization is 100 MB. This means if one project-specific **Vault Drive** is using 100 MB of storage, other projects cannot upload additional files.

### Upload a file

1. Open a project.
1. In the left panel, click **Vault**, then click **Drive**.
1. Click **Upload file**.
1. Upload the file using drag and drop or **Choose file**, or enter the URL, then click **Upload**.

You can work with your files in **Vault Drive** as follows:

If you upload a file via a URL, you can hover over **source url** to view the full address. <br/><img src={useBaseUrl('img/api-testing/vaultuploadfileURL.png')} alt="View Source URL" />

You can rename, download, or delete individual files.<br/><img src={useBaseUrl('img/api-testing/vaultfileoptions.png')} alt="Rename, delete or download files" />

To delete multiple files, select the checkbox next to the files, then click **Delete Selected**.<br/><img src={useBaseUrl('img/api-testing/vaultdeletefileoptions.png')} alt="Delete multiple files" />

## More Information

- [Build an Integration Test](/api-testing/use-cases/integration-test/)
- [Save a Variable in Vault](/api-testing/use-cases/vault-variable/)
- [Creating a Snippet](/api-testing/use-cases/vault-snippet/)
- [Using File from the Drive](/api-testing/use-cases/use-drive/)
