---
id: environments-vault-and-overrides-magic
title:  "Environments, Vault, and Variable Overrides"
sidebar_label: "Overview"
description: "Gain a wide range of options to mix and match your test settings with our latest “Environments” features."
---

## Overview

Gain a wide range of options to mix and match your test settings with our latest “Environments” features. Explore our variable containers from the lowest to the highest priority:

**Vault:** Each project has a vault where variables and snippets are contained. Each vault is global to the project and its variables are injected during test execution.

**Globals / Input set**: They belong to each test and contain the variables that are needed by the test to perform its duties. Since these variables can be overridden to hit different environments, we generally suggest considering these variables as containers of the default scenario. If the variable has been previously declared in the vault, globals/input sets will win over the Vault.

**Overrides**: When an overridden variable is declared (using the API, the Scheduler or the Jenkins plugin) its value will be injected into the test when it's executed. If the variable has already been declared in the vault or the globals/input set, it will be rewritten with the new value.

**Environments and Pre-sets:** They are collections of overrides. You can save an environment with a name and reuse it when running a test.

**`SET` commands**: The last item of the chain, the `SET` commands within a test will introduce a runtime variable. If a variable with that name has already been declared, it will be overwritten.

## Suggested Usage

Tests should be as self-contained as possible and should host as much information as possible to perform its operations (with the help of the Vault). In other words, Vault + Globals / Input set should always generate a complete variable scope. Therefore, running a test without any environment selection should at least lead to no syntax or runtime errors.

Environments and overrides should be used to **change** some of the values or introduce contextual values to hit a staging server instead of the production server, or run the test against a special product ID.

## Double evaluation

All variable containers have a “double evaluation” capability, meaning that a variable declaration can actually reference another variable.

By doing so, you can decide to store the actual data in the variable container that best suits your approach, and then reference it.

In the following example, we are storing the actual domains in the Vault, deciding a default in the Globals, and overriding in the environment:

```bash
VAULT:
production_domain: example.com
staging_domain: staging_example.com

GLOBALS:
domain: ${production_domain}

ENVIRONMENTS Name: staging
domain: ${staging_domain}
```

If run without environment selection or overrides, the test will hit the production domain. If run with the staging environment, the test will hit the staging domain. The Environments will not know the actual domain, therefore the actual data management will happen within the Vault.

**Known Issue**: The double evaluation will not work on query params. As a workaround, in the test before performing the call, introduce a `SET` component to resolve the variable as in:

```
<set var=”apikey” value=”${apikey}”/>
```

## Environments loading

If you begin using environments heavily, you may soon realize that the integration using the APIF API (and any CI/CD plugin) may become a bit “unfriendly,” as lots of data will need to be copied around.

For this reason, we have introduced a special override variable that allows you to ask API Fortress to load a specific environment when invoking a test using the API.

The `apif_env` variable, passed as an override, will cause the system to load a specific environment.

```bash title="Example Variable"
apif_env: staging
```

This will load the `staging` environment and all its override variables.

:::warning
As you become acquainted with the platform, you may be tempted to use all of these features at once before you’ve achieved sufficient expertise. We should warn you that you may not be prepared for the overall complexity that may occur as a consequence, especially if you double-reference variables.
:::
