---
id: import-export-tests
title: Importing, Exporting, and Cloning Tests
sidebar_label: Test Actions
description: How to import, export, and clone Sauce Labs API Tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Importing, exporting, and cloning tests from within Sauce Labs API Testing can be useful for:

- Moving tests from one Project to another
- Sharing tests with Sauce Labs Support team for help

For information on moving tests from API Fortress (our legacy platform) to Sauce Labs API Testing, see [API Fortress Legacy Migration Guide](/api-testing/legacy).

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).

## Importing API Tests to Sauce Labs

To import a Sauce Labs API test:

1. Log in to Sauce Labs, then click **API Testing**.
2. Click on one of your Projects to open it.
3. From the **Tests** tab, click **Create Test** > **APIF Test**.<br/><img src={useBaseUrl('img/api-testing/import-tests/create-test.png')} alt="Create test" width="500" /><br/>
   Or, if your Project has no Tests, select <b>Upload Archive</b>.<br/><img src={useBaseUrl('img/api-testing/import-tests/upload-archive.webp')} alt="Upload archive" width="650" />
4. On your local machine, click the zip file containing your exported test(s).
5. Your test(s) will then populate in the **Tests** tab. It will be labeled **No data** because it's not been run yet. To run it, click **Run** (play icon). To rename the test, hover over your test name, then click **Edit Test** (pencil icon) > **Edit Details**.

## Exporting API Tests from Sauce Labs

:::caution

Only **Published** tests can be exported.
:::

To export a Sauce Labs API test:

1. Log in to Sauce Labs, then click **API Testing**.
2. Click on any Project.
3. On the **Tests** tab, select one or more tests you'd like to export by clicking the checkboxes next to each test name.
4. From the nav, click the **Export** button. This will generate a zip file containing the tests and automatically download it to your local machine.

## Cloning Tests

The **Clone Test** feature allows you to clone one or more tests from a Project into the same Project (to move tests between Projects, see [Importing and Exporting API Tests](/api-testing/import-export-tests/)).

:::caution
Only **Published** tests can be cloned.
:::

1. Log in to Sauce Labs, then click **API Testing**.
2. Click on any Project, then click the **Tests** tab.
3. Select the checkbox(es) next to the published Tests that you want to clone.<br/><img src={useBaseUrl('img/api-testing/import-tests/clone.png')} alt="API Test cloning" width="500" width="400"/>
4. Click the **Clone** button and wait for the system to clone it.

Cloned Tests will be named "[original name] + (n)". For example, if you clone “My Test”, the clone will be titled “My Test (1)”. If you clone it again, it would be “My Test (2)”.
