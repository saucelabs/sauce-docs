---
id: input-set-and-global-variables
title: Input Sets and Global Variables
sidebar_label: Input Sets and Global Variables
keywords:
    - api-testing
    - input-sets
    - global
    - vars
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In the test creation process, the definition of global and local variables allows you to parametrize the test to allow more flexibility.

## Add a Global Parameter

The **global** parameters are common variables designed to run with the whole test (i.e. api key, domain etc). 

1. For adding a global parameter/varaible click on the _+Add Global Param_ in the **Data Sets** panel:

   <img src={useBaseUrl('img/api-fortress/2017/07/variable.jpg')} alt="variable.jpg"/>

2. Then fill in the name and value:

   <img src={useBaseUrl('img/api-fortress/2017/07/global.jpg')} alt="global.jpg"/>

The parameter/variable will be present in the test scope, and remains constant during test execution.

## Add an Input Set

The **input set**, instead, is a group of input variables representing a scenario (i.e product id). 

1. To add in input set, click the _**+** button_ in the **Input Set** section
3. Then add a name for the set. Then click _+ Add Param_ and add the variable name and value.

   <img src={useBaseUrl('img/api-fortress/2017/07/inputSet.jpg')} alt="inputSet.jpg"/>

The unit executes once for each input set you define. At each iteration, one input set enters the scope.

:::note important!
If you define a variable in both the Global Parameters section, and in the Input Set section, **the value used in the test will be the one defined in the Input Set**.
:::

## Using the Vault and Scheduler

You can also define the variables in the [**Vault**](/api-testing/mark2/quick-start/the-vault) and in the [**Scheduler**](/api-testing/mark2/quick-start/schedule-a-test).

### Priority Order

The priority order is:

- if the same variable is defined in the _Vault_ and in the [_composer_](/api-testing/mark2/quick-start/composer), the one defined in the composer will be used.
  > it also doesn't matter if it is a global parameter, or an input set
- if the same variable is defined in the composer both as a  _global param_ and an _input set_, the value of the input set will be used
- if the same variable is defined in the _Vault_ (or in the composer) and in the _scheduler_, the variable defined in the scheduler will be used for the tests.
