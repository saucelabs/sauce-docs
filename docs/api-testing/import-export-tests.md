---
id: import-export-tests
title: Importing, Exporting, and Cloning Tests
sidebar_label: Test Actions
description: How to import, export, and clone Sauce Labs API Tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Importing, exporting, and cloning tests from within Sauce Labs API Testing can be useful for:
* Moving tests from one Project to another
* Sharing tests with Sauce Labs Support team for help

For information on moving tests from API Fortress (our legacy platform) to Sauce Labs API Testing, see [API Fortress Legacy Migration Guide](/api-testing/legacy).


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).


## Importing API Tests to Sauce Labs

To import a Sauce Labs API test,

1. Log in to Sauce Labs, then click **API Testing**.
2. Click on one of your Projects to open it.
3. From the **Tests** tab, click **Create Test** > **API Test**.<br/><img src={useBaseUrl('img/api-testing/import-tests/create-test.png')} alt="Create test" width="500" /><br/>
   Or, if your Project has no Tests, select <b>Upload Archive</b>.<br/><img src={useBaseUrl('img/api-testing/import-tests/upload-archive.png')} alt="Upload archive" width="650" />
4. On your local machine, click the zip file containing your exported test(s).
5. Your test(s) will then populate in the **Tests** tab. It will be labeled **No data** because it's not been run yet. To run it, click **Run** (play icon). To rename the test, hover over your test name, then click **Edit Test** (pencil icon) > **Edit Details**.

### Importing a HAR File
<p><small><span className="sauceDBlue">RDC Only</span> | <span className="sauceDBlue">Android Only</span></small></p>

You can import a HAR (HTTP Archive) file into API Testing to automatically generate a functional test.

This feature is currently only supported for Android real devices.

To import a HAR file:

1. In Sauce Labs, click **API Testing**.

  <img src={useBaseUrl('/img/api-testing/api-testing-nav.png')} alt="Navigating to API Testing" width="300"/>

2. On the **Projects** page, under the project you want to import the file to, click **HTTP Client**.

  <img src={useBaseUrl('/img/api-testing/http-client-nav.png')} alt="Navigating to the HAR import modal" width="600"/>

3. On the project page, click **Import OpenAPI/Postman**, and then click **Import Har from RDC Job**.

  <img src={useBaseUrl('/img/api-testing/import-har-nav.png')} alt="Navigating to the HAR import modal" width="300"/>

4. In the **Import Snapshots from RDC Jobs** window, click a test in the list and then click **Import**. You can filter this list by job owner or job type.

  <img src={useBaseUrl('/img/api-testing/import-har-import.png')} alt="Import the file" width="600"/>

5. In the **Snapshots** panel, navigate to a folder and then click **Save**.

  <img src={useBaseUrl('/img/api-testing/import-har-location.png')} alt="Selecting a folder" width="400"/>

6. When the import is complete, in the **Snapshots** panel, open the folder you imported the files to.

7. In the folder, click a call name to view its details in the **Body** panel.

  <img src={useBaseUrl('/img/api-testing/import-har-calls.png')} alt="Viewing call details" width="600"/>

8. To create a test based on the imported file, click **Generate Test**. For more information about creating a test, see [Create a Test](/api-testing/composer#create-a-test).

## Exporting API Tests from Sauce Labs

:::caution

Only **Published** tests can be exported.
:::

To export a Sauce Labs API test,

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
