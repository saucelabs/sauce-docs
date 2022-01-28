---
id: clone-test
title: Cloning API Tests
sidebar_label: Cloning Tests
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Clone Test** feature allows you to clone one or more tests from a Project into the same Project (to move tests between Projects, see [Importing and Exporting API Tests](/api-testing/import-export-tests/)).


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project and Test. For details on how to create them, see the [Quickstart](/api-testing/quickstart/) guide.

## Cloning Tests

:::caution
Only **Published** tests can be cloned.
:::

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Click on any Project, then click the **Tests** tab.
3. Select the checkbox(es) next to the published Tests that you want to clone.<br/><img src={useBaseUrl('img/api-testing/import-tests/clone.png')} alt="API Test cloning" width="500" width="400"/>
4. Click the **Clone** button and wait for the system to clone it.

Cloned Tests will be named "[original name] + (n)". For example, if you clone “My Test”, the clone will be titled “My Test (1)”. If you clone it again, it would be “My Test (2)”.
