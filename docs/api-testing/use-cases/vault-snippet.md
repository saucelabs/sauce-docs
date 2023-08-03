---
id: vault-snippet
title: Creating an Authentication Snippet
sidebar_label: Creating an Authentication Snippet
description: 'Create a snippet in the vault to use across your tests'
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A good use case for the snippets feature is building an authentication flow; you don't need to rewrite all authentication steps for every single test. Instead, call the snippet that contains these authentication details. Another good example is integration testing, where you can reuse various tests to create one larger flow.

Below is an example of how to create an Authentication Snippet:

1. First, create a new test with a request component that requires Basic Authentication. For examples, check the [Sauce Labs REST API endpoints](/dev/api/) for ideas.<br/><img src={useBaseUrl('img/api-testing/vault_exampleSnippetRequest.png')} alt="Example Snippet Request"/>
1. Select **Add Child Component** below the request component.<br/><img src={useBaseUrl('img/api-testing/vault_addRequestHeader.png')} alt="Add Request Header"/>
1. Select **Basic Authentication** from the list.<br/><img src={useBaseUrl('img/api-testing/vault_basicAuth.png')} alt="Basic Auth Component"/>
1. Enter the details for `username` and `password`, then select **Confirm**.<br/><img src={useBaseUrl('img/api-testing/vault_basicAuthDetails.png')} alt="Basic Auth Details" width="600"/>
1. Once the **Authentication Header** appears, click **Save Changes**.<br/>
1. Hold down the Ctrl key, highlight the code in the UI and **Save Snippet**.<br/><img src={useBaseUrl('img/api-testing/vault_savesnippet.png')} alt="Save snippet"/>
1. Give the snippet a name and **Save Snippet**.<br/><img src={useBaseUrl('img/api-testing/vault_snippetname.webp')} alt="Snippet name" width="600"/>

Consider a scenario where this authentication call will be required for all the endpoints you have to test. It makes sense for this call to be stored in the **Vault** so you don't have to write it every time.

Now you can choose to [**Call Snippet**](/api-testing/composer/other-components/#call-snippet) or [**Paste Snippet**](/api-testing/composer/other-components/#paste-snippet) in your tests that require that authentication.

<img src={useBaseUrl('img/api-testing/call_paste_snippet.png')} alt="Snippet options"/>
