---
id: the-variables-system-in-api-fortress
title: The Variables System in API Fortress
sidebar_label: The Variables System in API Fortress
keywords:
    - api-testing
    - variables
    - planning
---

When an API Fortress test is executed, a variable stack is built. Every variable in the scope is accessible through API Fortress expressions and components.

__The contribution to the variable stack happens in this order__:

- Global Vault
- Project Vault
- Test's global variables
- Test's input set variables
- Selected environment variables (also referred to as "Overrides")
- SET components within the test    

The order is important because during the run-down if a variable is redefined, then it gets rewritten.

Say, for example, the "domain" variable is declared in the Global Vault. Then this variable needs not to be redeclared in the other 5 stages to retain its original value.

Given the nature of these variables stores, a strategy naturally arises.

## Global Vault

This is a place to store variables that live across the whole organization. Variables in this area are critical and generally stable.  
  

**Example:** assume your whole organization has two domains performing two different things, and that's all the testing you will do with API Fortress. Then two ideal domain\_1 and domain\_2 variables would be probably be placed here.

## Project Vault

In this vault, you will store variables that serve as a common ground for all tests within a project.  
  

**Following our previous example**, assuming the two services need to use two different authentication tokens, then this is the place where an auth\_token variable should be stored.

## Test Global

This is where you store variables that are specific to the test but are not related to a specific scenario.  
  

**For example**, if you're testing the /api/products API, then you can store the endpoint as a variable in the Test Global.

## Test Input Set

This is where you store variables that are specific to a scenario.  
  
**For example**, if you're testing the /api/product/:id API, the ID is specific to a scenario, so that should be a variable in the input set. The ability to have multiple input sets in a set allows you to run a test against multiple scenarios.

## Environment / Overrides

An environment (or override) is a set of variables that represent a temporary change in the premises of a test.

  
**For example** if, as a default, the domain variable reflects a production environment, but you occasionally want to run the test against a staging environment, this is where you redefine the variable. Being "environment" the last step prior to test execution, it will win over the default.

:::note
As a general rule of thumb, we strongly advocate for not relying on environments for the test to function properly. Tests should be self-sufficient and already be able to run before the environment stage, which should be used to change the value to certain variables, not defining new ones.
:::

## SET Component

Finally, the SET component allows you to create variables during test execution. This is useful when a certain variable acquires a value based on what happens during the test, such as a key in a payload, or a computed value.
