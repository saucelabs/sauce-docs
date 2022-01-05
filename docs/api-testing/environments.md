---
id: environments
title: Creating Environments for Tests
sidebar_label: Environments
description: "Gain a wide range of options to mix and match your test settings with our latest Environments features."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info Importing from API Fortress (Legacy)
As API Fortress does not support exporting Vault and Environment variables, you'll need to re-enter them manually in Sauce Labs API Testing.
:::

Our Environment feature provides you with a range of options to mix and match your Test settings.


## What You'll Need
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).
* Recommended: review [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault/)

## Using Environments

Once a domain is parametrized, you can override a variable, if needed.

To access and create new environments:

1. Visit the **Environment** section in the test project section:
  <img src={useBaseUrl('img/api-fortress/2021/04/accessEnvironment.png')} alt="access environment"/>

2. Add the details (typically the target domain) and select **Confirm**:
  <img src={useBaseUrl('img/api-fortress/2021/04/createEnvironment.png')} alt="create environment"/>

3. Add the variable details and select **Confirm**:
  <img src={useBaseUrl('img/api-fortress/2021/04/addDomainVar.png')} alt="variable in environment"/>

  You can add multiple variables to each environment:
  <img src={useBaseUrl('img/api-fortress/2021/04/result.png')} alt="result in environment"/>

4. The resulting environment (along with the defined variables) is now selectable and appears in the environment section:
  <img src={useBaseUrl('img/api-fortress/2021/04/result2.png')} alt="result in tests"/>

By activating a preset in the tests section, you will be able to hit a different domain in the current session without actually changing the tests.

The same selection can be performed while creating a schedule to create specific runs hitting specific environments.

### Loading Environments

If you begin using environments heavily, you may soon realize that the integration using the APIF API (and any CI/CD plugin) may become a bit “unfriendly,” as lots of data will need to be copied around.

For this reason, we have introduced a special override variable that tells our API to load a specific environment when invoking a test using the API.

The `apif_env` variable, passed as an override, will cause the system to load a specific environment.
```bash
apif_env: staging
```

This will load the `staging` environment and all its override variables.
