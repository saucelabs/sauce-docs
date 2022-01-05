---
id: import-export-tests
title: Importing Legacy and Sauce API Tests
sidebar_label: Importing Tests
description: How to import existing and legacy API tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To move tests from API Fortress (our legacy platform) to Sauce Labs API Testing, follow the instructions under [Exporting Tests from API Fortress](#exporting-tests-from-api-fortress-legacy) and [Importing Tests to Sauce Labs](#importing-tests-to-sauce-labs).

Importing and exporting existing tests from within Sauce Labs API Testing can be useful for:
* Moving tests to another Project
* Making another API Fortress deployment
* Sharing tests with Sauce Labs Support team for help

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).




## Exporting Tests from API Fortress (Legacy)

1. Log in to API Fortress.
2. Choose the Project containing the Tests you want to move to Sauce Labs.
3. Go to your Tests list by clicking **Tests**.<br/><img src={useBaseUrl('img/api-testing/import-tests/authenticated-api.png')} alt="Authenticated API" width="600" />
4. To export individual Tests, choose the first Test you want to export by clicking the circle to the left of the test.<br/><img src={useBaseUrl('img/api-testing/import-tests/test1.png')} alt="Test 1" width="600" />

   Or, to export all Tests as a batch, click **Select All**.<br/><img src={useBaseUrl('img/api-testing/import-tests/select-all.png')} alt="Select all" width="600" />
5. Click **Export Selected**. This will give you a zip folder containing all of your tests.<br/><img src={useBaseUrl('img/api-testing/import-tests/export-selected.png')} alt="Export selected" width="600" />


## Importing Tests to Sauce Labs

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Click on one of your Projects to open it.
3. From the **Tests** tab, click **Create Test** > **API Test**.<br/><img src={useBaseUrl('img/api-testing/import-tests/create-test.png')} alt="Create test" width="500" />

   Or, if your Project has no Tests, select **Upload Archive**.<br/><img src={useBaseUrl('img/api-testing/import-tests/upload-archive.png')} alt="Upload archive" width="650" />
4. On your local machine, click the zip file containing your exported test(s).
5. Your test(s) will then populate in the **Tests** tab with the **No data** label because it's not been run yet. To run it, click **Run** (play icon). To rename the test, hover over your test name, then click **Edit Test** (pencil icon) > **Edit Details**.

:::info
There are a few differences between API Fortress (legacy) Tests and Sauce Labs API Tests that may require you to update the tests you import.
- API Fortress (legacy) tests are Groovy-based, while Sauce Labs API tests are JavaScript-based.
- Not all API Fortress (legacy) test components are supported in Sauce Labs API Testing.

For assistance, please contact your CSM/SE or our Support Team.
:::


## Exporting Tests from Sauce Labs

1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Click on any Project.
3. On the **Tests** tab, select one or more tests you'd like to export by clicking the checkboxes next to each test name.
4. From the nav, click the **Export** button. This will generate a zip file containing the tests and automatically download it to your local machine.
