---
id: legacy
title: API Fortress Legacy Migration Guide
sidebar_label: Legacy (APIF) Migration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Learn how to move your tests from API Fortress (our legacy platform) to Sauce Labs API Testing.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).


## Exporting Tests from API Fortress (Legacy)

1. Log in to API Fortress.
2. Choose the Project containing the Tests you want to move to Sauce Labs.
3. Go to your Tests list by clicking **Tests**.<br/><img src={useBaseUrl('img/api-testing/import-tests/authenticated-api.png')} alt="Authenticated API" width="600" />
4. To export individual Tests, click the circle to the left of each Test.<br/><img src={useBaseUrl('img/api-testing/import-tests/test1.png')} alt="Test 1" width="600" /><br/>
   Or, to export all Tests as a batch, click <b>Select All</b>.<br/><img src={useBaseUrl('img/api-testing/import-tests/select-all.png')} alt="Select all" width="600" />
5. Click **Export Selected**. This will give you a zip folder containing all of your tests.<br/><img src={useBaseUrl('img/api-testing/import-tests/export-selected.png')} alt="Export selected" width="600" />
6. Follow the instructions under [Importing API Tests to Sauce Labs](/api-testing/import-export-tests/#importing-api-tests-to-sauce-labs).


### APIF vs Sauce Labs Tests

There are a few differences between API Fortress (legacy) Tests and Sauce Labs API Tests that may require you to update the tests you import.
- API Fortress (legacy) tests are Groovy-based, while Sauce Labs API tests are JavaScript-based.
- Not all API Fortress (legacy) test components are supported in Sauce Labs API Testing.

For assistance, please contact your CSM/SE or our [Support Team](https://saucelabs.com/training-support).
