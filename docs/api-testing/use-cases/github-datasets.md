---
id: github-datasets
title: How to use GitHub as a Data Source in Tests
sidebar_label: Using GitHub as a Data Source
description: How to use GitHub as a data source in your tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can use CSV, JSON, or XML files that are stored in a GitHub repository as a data source in your tests. Follow this guide to learn how to use this [bypopulation.csv](https://github.com/LoryApiFortress/examples/blob/7f03771e2d728da4546fcbc218b31642c5d9265a/bypopulation.csv) file as a data source.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Step 1: Setting Up GitHub

1. Create a new access token associated to your GitHub profile by accessing [https://github.com/settings/tokens](https://github.com/settings/tokens). GitHub will show you the token only once, so make sure you’re copying and pasting it somewhere safe and accessible.

   <img src={useBaseUrl('img/api-testing/io-components/github-token.png')} alt="GitHub token settings"/>

   :::note
   When creating the token, make sure to select the **`public_repo`** subcategory or the **`repo`** category based on which type of repository hosts your input data.

   <img src={useBaseUrl('img/api-testing/io-components/type.png')} alt="Type of repository" width="400"/>
   :::

2. Create a repository to host your input data if one doesn't exist already.

3. Commit and push a data source file. It can be a CSV, JSON or XML file.

## Step 2: Creating a Basic Test

1. Go to Sauce Labs API Testing and create a new test.

2. Add the **GitHub** component and configure it as follow:

   - **Account** is your GitHub username.
   - **Repository** is the name of the repository that your data file is pushed to.
   - **Branch** is the repository branch that the desired version of the data file is in.
   - **Token** is the access token you created in Step 1.
   - **Path** is the name of the file in the repository.
   - **Variable** is the variable to store the payload in.
   - **Mode** is the filetype of the file in the repository.

   <img src={useBaseUrl('img/api-testing/io-components/github-component.webp')} alt="GitHub component" />

The system uses these component settings to retrieve the bypopulation.csv file, parse it as a CSV file, and assign it to the **inputData** variable.

3. (Optional) Verify the set up by adding a **Comment** component for printing the parsed data as shown:

<img src={useBaseUrl('img/api-testing/io-components/github-comment.png')} alt="comment" />

4. (Optional) **Run** the test.

<img src={useBaseUrl('img/api-testing/io-components/github-report.webp')} alt="test report" />

5. Next, iterate over a subset of this input set by adding an **Each** component.

<img src={useBaseUrl('img/api-testing/io-components/github-each.png')} alt="each component" />

This iterates over a subset of five randomly selected items.

:::tip Suggestion
To help you identify an item for debugging purposes, you can add a comment that prints out the current item in each iteration. (like `ID: ${_1[0]}`)
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
