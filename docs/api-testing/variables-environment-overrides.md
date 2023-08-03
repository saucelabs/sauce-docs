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

- An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).
- Recommended: review [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault/) and [Using Test Environments](/api-testing/environments/)

## Formatting Variables

### From the Vault

Go into your [Company Vault or Project-specific Vault](/api-testing/vault).

Consider this variable:<br/><img src={useBaseUrl('img/api-testing/harcoded.png')} alt="Hardcoded Variables"/>

While the following variable is perfectly valid, it may become painful to update tens or hundreds of tests if the domain changes.

Alternatively, you can use the API Testing Vault to store domain names to solve this problem. Simply add a “domain” variable in your vault:<br/><img src={useBaseUrl('img/api-testing/variableEntry.png')} alt="Domain Variables"/>

And then edit the `GET` request with `${domain}` like this:

<img src={useBaseUrl('img/api-testing/parametrized.png')} alt="Parametrized Variables"/>

You can also set URL endpoints as variables, for example:

<img src={useBaseUrl('img/api-testing/urlVariable.png')} alt="URL Variables"/>

In this way, you can eliminate duplicate tasks by editing the **Vault** variable to instantly update all tests based on `domain` and `url` changes.

### From a Request Body

Variables are not only bound to URLs. Request bodies can also be handled like "templates" when needed, incorporating variables as in:

<img src={useBaseUrl('img/api-testing/body.webp')} alt="BODY"/>

And basically anywhere.

Reference variables almost anywhere that you need. Consider the following example assertion:

<img src={useBaseUrl('img/api-testing/exp.png')} alt="EXP"/>

Yes, we're using variables as expected values.

## Variable Containers

Explore our variable containers from the _lowest_ to the _highest_ priority:

### Company Vault

The [**Company Vault**](/api-testing/vault/#company-vault) is where you can store variables and snippets to use across globally (i.e., across all of your Projects).

### Project Vault

The [Project **Vault**](/api-testing/vault/#project-vault) is where you can save variables and snippets that will be specific to that Project (i.e., across all tests). Its variables are injected during test execution.

If the same variable exists in both in the **Company Vault** and Project-specific **Vault**, the one used in the **Project Vault** will take precedence over the **Company Vault**.

### Globals/Input Set

These are _test_-specific and contain the variables needed by the test to perform its duties.

Since Globals/Input Set variables can be overridden to hit different Environments, we recommend considering these variables as containers of the default scenario.

If the same variable exists in both in the **Globals/Input Set** and Project-specific **Vault**, the one used in the **Globals/Input Set** will win over the **Vault**.

### Overriding Variables, Environments

When you declare a variable override (using the [API](/dev/api/api-testing/), [saucectl command line utility](/api-testing/integrations/yaml/#env), or the [**Schedule** tool](/api-testing/schedule-test)) its value will be injected into the test when it is executed.

If the variable has already been declared in the **Vault** or the **Globals/Input Set**, it will be rewritten with the new value.

**Environments** are collections of overrides. You can save an environment as a preset with a name and reuse it when running a test.

### `Set` Variable Component

The last item of the chain, the `Set` commands within a test, will introduce a runtime variable. If a variable with that name has already been declared, it will be overwritten by this.

From a test, go to **Compose** > Click **Add Component** (**+** icon) > Click the **Set (variable)** component > Fill out the required fields shown > Click the checkmark icon to add to your test.

### Container Priority Examples

The following examples describe how container priority works.

#### Scenario 1

```yaml
COMPANY VAULT: foo = bar
PROJECT VAULT: foo = bar2
INPUT SET: foo = bar3
```

With this example, the variable `foo` will have the value `bar3`, because Input Set is given priority.

#### Scenario 2

```yaml
SET(Variable): foo = bar
INPUT SET: foo = bar2
```

With this example, the variable `foo` will have the value `bar`.

#### Scenario 3

```yaml
GLOBAL VARIABLE: foo = bar
ENVIRONMENT: foo = bar2
PROJECT VAULT: foo = bar3
```

The variable `foo` has value `bar2` if the environment is active, `bar` if the environment is not active.

#### Scenario 4

```yaml
INPUT SET: foo = bar
OVERRIDE: foo = bar2
(COMPAM=NY/PROJECT)VAULT: foo = bar3
```

The variable `foo` has value `bar2` when the test runs through the scheduler, `bar` if the test runs manually.

#### Scenario 5

```yaml
SET (Variable): foo = bar
OVERRIDE: foo = bar2
```

The variable `foo` has value `bar`.

#### Scenario 6

```yaml
COMPANY VAULT: foo = bar
ENVIRONMENT: foo = bar2
```

The variable `foo` has value `bar2` if the environment is active, `bar` if the environment is not active.

### Double Evaluation Capability

All variable containers have a “double evaluation” capability, meaning that a variable declaration can actually reference another variable. By doing so, you can store the actual data in the variable container that best suits your approach, and then reference it.

In the following example, we are storing the actual domains in the Vault, deciding a default in the Globals, and overriding in the environments:

```yaml
VAULT:
production_domain: example.com
staging_domain: staging_example.com

GLOBALS:
domain: ${production_domain}

ENVIRONMENTS Name: staging
domain: ${staging_domain}
```

- If you run a test without environments selection, the test will hit the production domain, because the default value defined in the Globals reference the production domain stored in the Vault.
- If you run a test selecting the environments, the test will hit the staging domain. The Environments will not know the actual domain, therefore the actual data management will happen within the Vault.

:::caution
As you become acquainted with the platform, you may be tempted to use all of these features at once before you’ve achieved sufficient expertise. We should warn you that you may not be prepared for the overall complexity that may occur as a consequence, especially if you double-reference variables.
:::

## Suggested Usage

- Tests should be as self-contained as possible and should host as much information as possible &#8212; with the help of the **Vault** &#8212; to perform their operations. In other words, **Vault** + **Globals / Input set** should always generate a complete variable scope. In other words, the test should be able to run without further information. Therefore, running a test without any Environment selection should at least lead to no syntax or runtime errors.
- Environments and overrides should be used to change some of the values of the variable scope generated by the vault+global/input sets.
- Fill the **Vault** with data that is Project-specific, such as domains, protocols, and API keys. We do not recommend introducing test-specific variables because it would produce an overhead of information that would go unused most of the time.
- Fill the **Globals/input set** with test-specific variables, such as paths, IDs, dates, and serial numbers.
- Don’t overdo things. Parametrize stuff that can actually change, and leave everything else as static strings. Variables are… well, variable, so an excessive and unnecessary use of them can lead to uncertainty and hard-to-track behaviors.

## More Information

- [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault)
- [Creating Environments for Tests](/api-testing/environments/)
