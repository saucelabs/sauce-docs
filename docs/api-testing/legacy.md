---
id: legacy
title: API Fortress Legacy Migration Guide
sidebar_label: Legacy (APIF) Migration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning API Fortress Cloud End-of-life
API Fortress Cloud (legacy) was discontinued on October 15, 2022. Please note that this applies to the cloud solution only, NOT the [on-premise solution](/api-testing/on-prem/quick-start/).

If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support.
:::

Learn how to move your data from API Fortress (our legacy on-prem platform) to Sauce Labs API Testing.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Moving Tests from API Fortress to Sauce Labs

### Exporting Tests from API Fortress

1. Log in to API Fortress platform.
2. Choose the Project containing the Tests you want to move to Sauce Labs.
3. Go to your Tests list by clicking **Tests**.<br/><img src={useBaseUrl('img/api-testing/import-tests/authenticated-api.webp')} alt="Authenticated API" width="600" />
4. To export individual Tests, click the circle to the left of each Test.<br/><img src={useBaseUrl('img/api-testing/import-tests/test1.webp')} alt="Test 1" width="600" /><br/>
   Or, to export all Tests as a batch, click <b>Select All</b>.<br/><img src={useBaseUrl('img/api-testing/import-tests/select-all.webp')} alt="Select all" width="600" />
5. Click **Export Selected**. This will give you a zip folder containing all of your tests.<br/><img src={useBaseUrl('img/api-testing/import-tests/export-selected.png')} alt="Export selected" width="600" />

### Importing Tests to Sauce Labs

6. Follow the instructions under [Importing API Tests to Sauce Labs](/api-testing/import-export-tests/#importing-api-tests-to-sauce-labs).

:::warning Review Your Tests After Migrating
You may need to update your tests after importing them to Sauce Labs.

API Fortress tests are Groovy-based, while Sauce Labs API tests are JavaScript-based. Additionally, some API Fortress Test components (e.g., Update Input, JDBC, Signature, Fake) are not supported in Sauce Labs. For assistance, contact your CSM/SE or Sauce Labs Support.
:::

### Importing Vault and Environments

As API Fortress does not support exporting Vault and Environment variables, you'll need to re-enter these manually in Sauce Labs API Testing.
