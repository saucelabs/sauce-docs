---
id: github
title: GitHub Integration with Visual Component Testing
sidebar_label: GitHub
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Integrate Screener into your GitHub PR workflow, and do both code review + visual review from one place:

<img src={useBaseUrl('img/visual/component-github-status.png')} alt="Component GitHub Status" />

* When visual changes are found by Screener, the PR status will be marked as a failure in GitHub.
* Review visual changes in Screener simply by clicking on the **Details** link.
* The GitHub PR status will automatically update to success when visual changes are accepted in Screener, reducing the need to re-run a CI build to see a green success status.

## Setup Steps
1. [Integrate Screener into your CI process](/visual/component-testing/integrations/continuous-integration) for continuous visual testing.
2. Update `screener.config.js` file to not fail CI builds, by setting `failureExitCode` option to `0`:
  ```java
  // screener.config.js
  module.exports = {
    ...

    failureExitCode: 0
  }
  ```
3. Click **Open Account** > **GitHub** > **Grant GitHub Access** (must be performed by the Screener Account Owner).
