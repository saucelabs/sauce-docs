---
id: import-export-tests
title: Importing and Exporting API Tests
sidebar_label: Import and Export Tests
description: Documentation for importing and exporting existing API tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Importing and exporting your existing API tests can be useful for:
* Moving tests to another Project
* Making another API Fortress deployment
* Sharing tests with Sauce Labs Support team for help

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).


## Exporting Tests
To export a Sauce Labs API test,

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
1. Click on any Project.
1. On the **Tests** tab, select one or more tests you'd like to export by clicking the checkboxes next to each test name.
1. From the nav, click the **Export** button. This will generate a zip file containing the tests and automatically download it to your local machine.


## Import Tests
To import a Sauce Labs API test,

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
1. Click on any Project.
1. On the **Tests** tab, click **Create Test** > **API Test**.
1. On your local machine, click the zip file containing your exported test(s).
1. Your test(s) will populate in the **Tests** tab. It will have the **No data** label because it's not been run yet. If you wish, you can rename the test: hover over your test name, click **Edit Test** (pencil icon) > click **Edit Details**.
