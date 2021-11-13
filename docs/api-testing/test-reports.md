---
id: test-reports
title: API Test Outcome Reports
sidebar_label: Test Reports
hide_table_of_contents: true
description: "Sauce Labs API Test Reports include items such as session details, timestamp, test status, project, request components."
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Below is a quick primer on API Testing **Test Outcome Reports**.<br/>
<img src={useBaseUrl('img/api-fortress/2021/02/report.png')} alt="Test Report Primer Image" width="700" />

1. Session Details: Metadata about the execution of the test; Timestamp, type of execution.
2. General Details: Test name, test status, project.
3. Request Component: if your request fails, you'll see an option to reveal the Stack Details pane.
4. Assertion: Gray dot indicates a pass, red dot indicates a fail, and yellow dot indicates a warning.
