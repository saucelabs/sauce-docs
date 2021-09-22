---
id: the-vault
title: "Use the Vault (Resuable Variables / Code Snippets)"
sidebar_label: Using the Vault
description: "The vault allows you to store variables and code snippets that can be used across an entire project."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The vault allows you to store variables and code snippets that can be used across an entire project.

[Explanation Video](https://www.youtube.com/watch?v=cBNMi30Fj9Q)

## Vault Overview

The link to access the Vault is at the top of the window, as shown below:

 <img src={useBaseUrl('img/api-fortress/2020/01/vault_header.jpg')} alt="Vault Header"/>

### Project Column

The first column shows all of the projects of a company and the Global Vault. Code snippets and variables saved in a specific project are only available in that project. _They are not available across projects._ If a variable and/or code snippet needs to be available in more projects within the company, they must be saved to the **Global Vault**. 

The Global Vault has been built to make variables and code snippets available across all of the projects in a company.

 <img src={useBaseUrl('img/api-fortress/2020/01/prj_global.jpg')} alt="Global Projects"/>


 <img src={useBaseUrl('img/api-fortress/2020/01/snippet_var.jpg')} alt="Snippet Variable"/>

### Snippet Section

In the snippet section, you will find all of the snippets you have created using the Composer (see [here](/api-testing/mark2/reference/composer-snippets) for more details). 

Once you have saved the snippet, from the composer, you can choose whether you want to save it and make it available only for the current project or for all the projects within the company by saving it in the Global Vault. If you already have a snippet saved for the current project but you need to make it available across all projects, you can easily export them from the current project to the Global Vault by using the import/export feature. 

<img src={useBaseUrl('img/api-fortress/2020/01/snippet.jpg')} alt="Snippet"/>

A good use case for the snippets feature is an authentication flow; you don't need or want to rewrite all of the steps in every test. You just need to call the snippet that contains the authentication snippet. Another good example is integration testing, where you can reuse various tests to create one larger flow.

### Variable Section

In the variable section, you can define variables that will be part of the scope of the tests.

<img src={useBaseUrl('img/api-fortress/2020/01/variable.jpg')} alt="Variable"/>


If a variable with the same name is defined within the test, it will override the one defined in the Vault. For identical variable names in the global vault and in the project vault, the latter will have higher priority.

Defining a variable in the Vault is helpful when you need to use the same variable across multiple tests. This way, you don't need to rewrite it every time. 

For example, a password could be saved as a variable and reused in multiple places.

Just like code snippets, if you need a variable available across multiple projects, you can save it in the Global Vault or import it directly from another project.

Additionally, you can import variables from Postman. See [here](/api-testing/mark2/quick-start/importing-postman-collections/) for more details.

## Vault Tab in Composer

When you open the Vault tab in the Composer, global snippets and variables will be highlighted for ease of identification.

 <img src={useBaseUrl('img/api-fortress/2020/01/globalVsCompany.jpg')} alt="Global vs. Company"/>

Here is a quick example on how the Vault can be used in a test.

### The Authentication Snippet

First, create a new test. Go to the test list, click **+New Test**, enter the test name and click **Compose**. Once the composer appears, simply enter the call. For this example, we will add a GET request that logs in using a Basic authentication:

<img src={useBaseUrl('img/api-fortress/2020/01/login-1.jpg')} alt="Login screenshot"/>

Consider a scenario where this login will be required for all the endpoints we have to test. It makes sense for this call to be stored in the Vault.

Select the `GET`, open the Vault panel and click the + button. Enter a name and description.

<img src={useBaseUrl('img/api-fortress/2020/01/loginSnippet.jpg')} alt="Login Snippet"/>

Now you can proceed with creating the test. Once done, you may create other tests for your API. Once again, click **+New Test**. Once you are in the Composer, you can open the Vault panel and select the snippet saved in the previous step.

<img src={useBaseUrl('img/api-fortress/2020/01/newTestSnippet.jpg')} alt="New Test Snippet"/>

To use the login call in the new test, just click the down arrow button next to the snippet, and it will be added into the test.

<img src={useBaseUrl('img/api-fortress/2020/01/invokeSnippet.jpg')} alt="Invoke Snippet"/>

Now you can call the endpoint that you want to test. Let’s use the search endpoint. Pass the ”ID” variable as a query parameter. The authorization token that was parameterized after the login call will be passed in as well:

<img src={useBaseUrl('img/api-fortress/2020/01/call_search.jpg')} alt="Call Search"/>

Now, consider the case where we want to use the same ”ID” in multiple tests. Don’t set the ID as a global param or an input set. Add it to the vault instead. Save the test and exit from the Composer. Click on Vault in the header and add the variable ”ID” here:

<img src={useBaseUrl('img/api-fortress/2020/01/saveVar.jpg')} alt="Save Variable"/>

Once done, go back to the test and check that the variable is available in the Vault panel:

<img src={useBaseUrl('img/api-fortress/2020/01/varInVault.jpg')} alt="Variable in Vault"/>

If you launch the test, you can see that the ”ID” will be replaced with the value you have set in the Vault.