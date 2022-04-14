---
id: environments
title: Creating Environments for Tests
sidebar_label: Environments
description: "Gain a wide range of options to mix and match your test settings with our latest Environments features."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our Environments feature provides you with a range of options to mix and match your Test settings.

If properly set up, any API Testing test can be run against any environment. This can be achieved by turning the URL and any other part into variables that can be overwritten using the environments.  This allows you, for example, to set the default location as input and override those amounts with the environments feature without actually changing the Test.

The **Environments** section lets you change anything, not just environments. You can run the Test against a certain environment, using a different API key and data source.


## What You'll Need
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).
* Recommended: review [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault/)


## Creating Environments

Once a domain is parametrized, you can override a variable if needed.

There are multiple ways to create and access Test environments:

### From a Project
1. From within a Project, go to the **Environments** section.<br/><img src={useBaseUrl('img/api-fortress/2021/04/accessEnvironment.png')} alt="access environment"/>
2. Click **Create Environment**.
3. Enter a name for your environment, then click **Save** when finished.<img src={useBaseUrl('img/api-fortress/2021/04/createEnvironment.png')} alt="create environment" width="300"/>
4. From here, you can:
   * Add variable(s) manually by clicking **New Entry** > Enter **Key** and **Value** pairs > **Confirm**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/manualEntry.png')} alt="create environment" width="500"/>
   * Import an existing environment by clicking **Import** > **Choose File** (accepted file types are Postman, .json, .csv).<br/><img src={useBaseUrl('img/api-fortress/2021/04/importEnv.png')} alt="create environment" width="500"/>

 The resulting environment (along with its defined variables) will now appear each of your Tests as an option in the environment dropdown.

### From a Test
1. Locate your desired Test from any of the following sections: **Tests**, **Compose**, or **HTTP Client**.
2. Under **Run Configuration**, click the **No environment** dropdown.
3. Select **Add item**.
4. Enter a name for your environment, then click **Confirm**.
5. Click **Create variable**, enter **Key** and **Value** pairs, then click **Confirm**.
6. When you're finished adding variables, click the **Close Environments Editor** icon.<br/><img src={useBaseUrl('img/api-fortress/2021/04/closeEditor.png')} alt="create environment" width="300"/>

This new environment will be selected by default in the dropdown.

## Using Environments
Once you've created an environment and added your variables, you can run your Test against that environment.

1. Locate your desired Test from any of the following sections: **Tests**, **Compose**, or **HTTP Client**. 
2. Under **Run Configuration**, click the **No environment** dropdown, and select the name of the environment you created.<br/><img src={useBaseUrl('img/api-fortress/2021/04/selectEnv.png')} alt="result in tests" width="300"/>

By activating an environment here, you will be able to hit a different variable (key/value pair) in your current session without actually changing your Test.

### no environment
If **None** (**no environment**) is selected, the Test will run using the values written as inputs in the test and the variables saved in the **Vault**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/noEnv.png')} alt="result in tests" width="270"/>


### Loading Environments
If you begin using environments heavily, the integration using the APIF API (or any CI/CD plugin) may become overly complex and “unfriendly,” as lots of data will need to be copied around.

For this reason, we have introduced a special override variable, `apif_env`, which tells our API to load a specific environment when invoking a test using the API. For example, to load the `staging` environment and all its override variables:
```bash
apif_env: staging
```

## More Information
* [API Fortress Legacy Migration Guide](/api-testing/legacy)
