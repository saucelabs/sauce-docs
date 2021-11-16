---
id: variables-environment-overrides
title: Managing Variables and Environment Overrides
sidebar_label: Variables and Environment Overrides
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Our API Testing provides the flexibility to combine the use of global, local, and hard-coded variables. In addition, we provide helpful hints as you work with variables.

You do not have to be concerned with organizing variables in a hierarchy from global to local... why? Almost any string can be hardcoded or referenced as a variable. Hardcoding is fine as long as you’re building simple tests, however, it is advisable to parametrize some items when:
- The number of tests is increasing
- The complexity of tests is increasing
- The number of tested environments is increasing

Most of the parametrization you will likely do relates to the HTTP request itself.

## What You'll Need
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).
* Recommended: review [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault/) and [Using Test Environments](/api-testing/environments/)


## Formatting Variables

Go into your [Company Vault or Project-specific Vault](/api-testing/vault).

Consider this variable:<br/><img src={useBaseUrl('img/api-fortress/2017/09/harcoded.png')} alt="Hardcoded Variables"/>

While the following variable is perfectly valid, it may become painful to update tens or hundreds of tests if the domain changes.

Alternatively, you can use the API Testing Vault to store domain names to solve this problem. Simply add a “domain” variable in your vault:<br/><img src={useBaseUrl('img/api-fortress/2021/04/variableEntry.png')} alt="Domain Variables"/>

And then edit the `GET` request with `${domain}` like this:

<img src={useBaseUrl('img/api-fortress/2017/09/parametrized.png')} alt="Parametrized Variables"/>

You can also set URL endpoints as variables, for example:

<img src={useBaseUrl('img/api-fortress/2021/04/urlVariable.png')} alt="URL Variables"/>

In this way, you can eliminate duplicate tasks by editing the **Vault** variable to instantly update all tests based on domains and url changes.


### In Request Bodies

Variables are not only bound to URLs. Request bodies can also be handled like "templates" when needed, incorporating variables as in:

<img src={useBaseUrl('img/api-fortress/2017/09/body.png')} alt="BODY"/>

And Basically Anywhere

Reference variables almost anywhere that you need. Consider the following example assertion:

<img src={useBaseUrl('img/api-fortress/2017/09/exp.png')} alt="EXP"/>

Yes, we're using variables as expected values.


## Variable Containers

Explore our variable containers from the lowest to the highest priority:

### Project Vault
Each Project has a **Vault** where you can save Project-specific variables and snippets. It is global to the Project (i.e., across all tests) and its variables are injected during test execution.

### Globals/Input Set
These are _test__-specific and contain the variables needed by the test to perform its duties.

Since Globals/Input Set variables can be overridden to hit different Environments, we recommend considering these variables as containers of the default scenario.

If the same variable exists in both in the **Globals/Input Set** and Project-specific **Vault**, the one used in the **Globals/Input Set** will win over the **Vault**.

### Overriding Variables
When you declare an overridden variable (using the API, [apifctl command line utility](/api-testing/apifctl-cicd-integration/), or the [**Schedule** tool](/api-testing/schedule-a-test/)) its value will be injected into the test when it's executed. If the variable has already been declared in the **Vault** or the **Globals/Input Set**, it will be rewritten with the new value.

### Environments and Presets
They are collections of overrides. You can save an environment with a name and reuse it when running a test.

### `SET` commands
The last item of the chain, the `SET` commands within a test will introduce a runtime variable. If a variable with that name has already been declared, it will be overwritten by this.


### Double Evaluation Capability

All variable containers have a “double evaluation” capability, meaning that a variable declaration can actually reference another variable. By doing so, you can store the actual data in the variable container that best suits your approach, and then reference it.

In the following example, we are storing the actual domains in the Vault, deciding a default in the Globals, and overriding in the environment:

```yaml
VAULT:
production_domain: example.com
staging_domain: staging_example.com

GLOBALS:
domain: ${production_domain}

ENVIRONMENTS Name: staging
domain: ${staging_domain}
```

If you run without environment selection or overrides, the test will hit the production domain. If run with the staging environment, the test will hit the staging domain. The Environments will not know the actual domain, therefore the actual data management will happen within the Vault.

:::caution
As you become acquainted with the platform, you may be tempted to use all of these features at once before you’ve achieved sufficient expertise. We should warn you that you may not be prepared for the overall complexity that may occur as a consequence, especially if you double-reference variables.
:::



## Suggested Usage

* Tests should be as self-contained as possible and should host as much information as possible to perform its operations (with the help of the **Vault**). In other words, **Vault** + **Globals / Input set** should always generate a complete variable scope. Therefore, running a test without any Environment selection should at least lead to no syntax or runtime errors.
* Environments and overrides should be used to change some of the values or introduce contextual values to hit a staging server instead of the production server, or run the test against a special product ID.
* Fill the **Vault** with data that is project-specific: Domains, protocols, API keys. They are all fine. We discourage you from introducing test-specific variables because it would produce an overhead of information that would go unused most of the time.
* Fill the **Globals/input set** with test-specific variables, such as paths, IDs, dates, and serial numbers, etc.
* Make sure that the “vault + globals/input set” add up to a complete variable scope for the test. In other words, the test should be able to run without further information.
* Use the environments to change the values of the variable scope generated by the vault+global/input sets.
* Don’t overdo things. Parametrize stuff that can actually change, and leave everything else as static strings. Variables are… well, variable, so an excessive and unnecessary use of them can lead to uncertainty and hard-to-track behaviors.
