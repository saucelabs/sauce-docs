---
id: azure
title: saucectl with Azure DevOps
sidebar_label: Azure DevOps
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These examples can apply to virtually any Azure DevOps deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- An [Azure DevOps Account](https://azure.microsoft.com/en-us/free/)

## Add Secret Variables

To run tests on Sauce Labs from Azure DevOps, you need to make your Sauce Labs credentials available to your Pipelines. We'll set a secret variable in the UI.

1. Log in to Azure DevOps.
2. Go to the **Pipelines** page, select a pipeline, then **Edit**.
3. Click on **Variables**, then **New Variable**.
4. Enter the name `sauceUsername` and set the value to your Sauce Labs username and click **OK**.
5. Add another variable, this time named `sauceAccessKey`, set it to your Sauce Labs access key, select the `Keep this value secret` option, and click **OK**.
6. Click **Save**.

## Add Azure Pipeline Configuration

1. In the root of your project directory, create the `.azure-pipelines.yml` file.
   ```yaml reference
   https://github.com/saucelabs/saucectl-cypress-example/blob/main/azure-pipelines.yml
   ```
2. Commit the updated `.azure-pipelines.yml` file to your git repository.
3. Navigate back to the Azure DevOps Pipelines to see your build pass.
