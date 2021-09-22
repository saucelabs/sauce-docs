---
id: composer-snippets
title: Composer Snippets
sidebar_label: Composer Snippets
keywords:
    - api
    - api-fortress
    - composer-snippets
---

A snippet is a fragment of test, stored in [the Vault](/api-testing/mark2/quick-start/the-vault), that can be reused in multiple tests.

## Create a Snippet

To create a snippet, 

1. **Click on the first component** you want to include in the fragment. 
2. Then, hold down the **`[SHIFT]`** key and click on the last component you want to include. The selection will be highlighted.
3. Click the **+ button** in the snippets section of the Vault panel, choose if you want to make it available only for the current project or for all the projects in the company and fill the Name and Description fields.

That is it! The fragment of the code is created and ready to be use in every test of the project.

### Snippet Actions

For each snippet, two actions are available: 
1. **Paste Snippet**: Allows you to paste the entire component inside the test, allowing you to edit as needed. The pasted components will lose any reference to the original snippet. 
2. **Invoke Snippet**: This creates a **Call** component that will invoke the snippet. If the snippet changes, all the tests containing the Call component to that snippet will inherit the changes.

## Update a Snippet

In order to update a snippet,

1. Open the Snippet from [the Vault](/api-testing/mark2/quick-start/the-vault)
2. Click on any of the fields and begin typing to edit the details
3. Changes are saved automagically.