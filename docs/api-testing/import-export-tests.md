---
id: import-export-tests
title: Importing and Exporting API Tests
sidebar_label: Importing Tests
description: How to import existing API tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Importing and exporting existing tests from within Sauce Labs API Testing can be useful for:
* Moving tests from one Project to another
* Sharing tests with Sauce Labs Support team for help

For information on moving tests from API Fortress (our legacy platform) to Sauce Labs API Testing, see [API Fortress Legacy Migration Guide](/api-testing/legacy).


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).


## Importing API Tests to Sauce Labs

To import a Sauce Labs API test,

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Click on one of your Projects to open it.
3. From the **Tests** tab, click **Create Test** > **API Test**.<br/><img src={useBaseUrl('img/api-testing/import-tests/create-test.png')} alt="Create test" width="500" /><br/>
   Or, if your Project has no Tests, select <b>Upload Archive</b>.<br/><img src={useBaseUrl('img/api-testing/import-tests/upload-archive.png')} alt="Upload archive" width="650" />
4. On your local machine, click the zip file containing your exported test(s).
5. Your test(s) will then populate in the **Tests** tab. It will be labeled **No data** because it's not been run yet. To run it, click **Run** (play icon). To rename the test, hover over your test name, then click **Edit Test** (pencil icon) > **Edit Details**.


## Exporting API Tests from Sauce Labs

:::caution

Only **Published** tests can be exported.
:::

To export a Sauce Labs API test,

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Click on any Project.
3. On the **Tests** tab, select one or more tests you'd like to export by clicking the checkboxes next to each test name.
4. From the nav, click the **Export** button. This will generate a zip file containing the tests and automatically download it to your local machine.
