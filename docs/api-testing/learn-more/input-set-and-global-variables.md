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

The **global** variables are meant to be the ones that are common for the whole test (i.e. api key, domain etc). For adding a global variable click on the _+Add Global Param_ in the Data Set panel and fill the name and value.

<img src={useBaseUrl('img/api-fortress/2017/07/variable.jpg')} alt="variable.jpg"/>

<img src={useBaseUrl('img/api-fortress/2017/07/global.jpg')} alt="global.jpg"/>

The variable will be present in the test scope, and will be constant during the test execution.

The **input set**, instead, is a group of input variables representing a scenario (i.e product id). To add in input set, click the _**+** button_ in the Input Set section and add a name for the set. Then click _\+ Add Param_ and add the variable name and value.

<img src={useBaseUrl('img/api-fortress/2017/07/inputSet.jpg')} alt="inputSet.jpg"/>

The unit will be executed once for each input set you have defined. At each iteration, one input set will enter the scope.

If you define a variable both in the global section and the input set, the value used in the test will be the one defined in the input set.

The variables can be defined also in the **Vault** (for more info see [here](/api-testing/quick-start/the-vault)) and in the **Schedule** (for more info see [here](/api-testing/quick-start/schedule-a-test)).

The priority order is:

- if the same variable is defined in the _Vault_ and in the _composer_ (no matter if it is a global variable or an input set), the one defined in the composer will be used.
- if the same variable is defined in the composer both as _global_ and _input set_, the value of the input set will be used
- if the same variable is defined in the _Vault_ (or in the composer) and in the _scheduler_, the variable defined in the scheduler will be used for the tests.
