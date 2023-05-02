---
id: github-datasets
title: How to use GitHub as a Datasource in your Tests
sidebar_label: Using GitHub as a Datasource
description: How to use GitHub as a datasource in your tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';

GitHub is a valuable platform to use when you want to pull files and use them as a data source. Some examples are CSVs and JSON files. This guide explains how you can use files stored in your GitHub repository as a data source in your tests.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Step 1: Setting Up GitHub

1. Create a new access token associated to your GitHub profile by accessing [https://github.com/settings/tokens](https://github.com/settings/tokens).

   <img src={useBaseUrl('img/api-testing/io-components/github-token.png')} alt="GitHub token settings"/>

   :::warning
   Keep in mind that GitHub will show you the token only once, so make sure you’re copying and pasting it somewhere safe and accessible.
   :::

:::note
When creating the token make sure you're selecting the **`public_repo`** subcategory or the **`repo`** category based on which type of repository that will host your input data.

<img src={useBaseUrl('img/api-testing/io-components/type.png')} alt="Type of repository" width="400"/>
:::

2. Create a repository that will host your input data if one doesn't exist already.

3. Commit and push a data source file. It can be a CSV, JSON or XML file. The example is based on the [bypopulation.csv](https://github.com/LoryApiFortress/examples/blob/7f03771e2d728da4546fcbc218b31642c5d9265a/bypopulation.csv) file.

## Step 2: Creating a Basic Test

1. Go to Sauce Labs API Testing and create a new test.

2. Add the **GitHub** component and configure it accordingly:

   - **Account** is your GitHub username
   - **Repository** is the name of the repository that your data file is pushed to.
   - **Branch** is the repository branch that the desired version of the data file is in.
   - **Token** is the token described above, generated in the GitHub platform.
   - **Path** is the name of the file in the repository.
   - **Variable** is the variable that the payload will be stored under.
   - **Mode** is the filetype of the file in the repository.

   <img src={useBaseUrl('img/api-testing/io-components/github-component.png')} alt="GitHub component" />

As result of the above settings, the system will retrieve the file, parse it as a CSV file and assign it to the **inputData** variable.

3. (Optional) Verify that everything is set up correctly by adding a **Comment** printing the parsed data as in:

<img src={useBaseUrl('img/api-testing/io-components/github-comment.png')} alt="comment" />

4. (Optional) **Run** the test.

<img src={useBaseUrl('img/api-testing/io-components/github-report.png')} alt="test report" />

5. Next step, iterate over a subset of this input set by adding an **Each**.

<img src={useBaseUrl('img/api-testing/io-components/github-each.png')} alt="each component" />

This will iterate over a subset of 5 randomly selected items.

:::tip Suggestion
To help you identify which item you are looking at for debugging purposes, you should add a comment that prints out the current item in each iteration. (like `ID: ${_1[0]}`)
:::

6. Use the data to perform your request. For example, in a **POST Body**:

   ```json
   {
       "id":${_1[0]},
       "city":"${_1[1]}",
       "state":"${_1[2]}",
       "population":"${_1[3]}"
   }
   ```

7. Add the assertions required for testing purposes.

8. **Run** the test.
