---
id: test-reports
title: API Test Outcome Reports
sidebar_label: Test Reports
description: "Sauce Labs API Test Reports include items such as session details, timestamp, test status, project, request components."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Below is a quick primer on the API Testing **Test Outcome Report**. It includes input data details and other useful test information, such as reasons for failure, HTTP request and response status codes.


## What You'll Need
* An existing test that you've already run. For instructions on setting up a test and accessing your results, see [API Testing Quickstart](/api-testing/quickstart).


## Test Outcome Report Breakdown
Here's an example of a full report:<br/><img src={useBaseUrl('img/api-fortress/2021/02/fullReport.png')} alt="Test Report Primer Image" width="700" />


### Session Details
Timestamp, execution type, and metadata about the execution of the test (e.g., _Date_, _Mode_, and _Execution Time_).<br/><img src={useBaseUrl('img/api-fortress/2021/02/sessionDetails.png')} alt="Test Report Primer Image" width="300" />


### General Details
Test name, test status (pass or fail), project.<br/><img src={useBaseUrl('img/api-fortress/2021/02/generalDetails.png')} alt="Test Report Primer Image" width="200" />


### Request Component
Shows the specific component that you tested. Click **See Stack Details** to see more in-depth **Request Details** and **Headers**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/requestComponent.png')} alt="Test Report Primer Image" width="650" />


### Assertions
Gray dot indicates a pass, red dot indicates a fail, and yellow dot indicates a warning.<br/><img src={useBaseUrl('img/api-fortress/2021/02/assertions.png')} alt="Test Report Primer Image" width="500" />
