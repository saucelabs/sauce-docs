---
id: visual-studio-team-services
title: Visual Studio Team Service Integration
sidebar_label: Visual Studio Team Services
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By integrating Screener into your VSTS Pull Request workflow, you can do both code review + visual review from one place:

<img src={useBaseUrl('img/visual/component-vsts-status.png')} alt="Component VSTS Status" />

* When visual changes are found by Screener, the Pull Request status will be marked as `failed` in VSTS.
* Review visual changes simply by clicking on the status link.
* The VSTS Pull Request status will automatically update to succeeded when visual changes are accepted in Screener, reducing the need to re-run a CI build to see a green success status.

## Setup Steps

1. Integrate Screener into your CI process for continuous visual testing.
2. Update `screener.config.js` file with your VSTS instance domain, and set the `failureExitCode` option to `0` (to not fail CI builds):
  ```java
  // screener.config.js
  module.exports = {
    ...

    projectRepo: 'MyProject/MyRepo',
    vsts: {
      instance: 'myproject.visualstudio.com'
    },
    failureExitCode: 0
  }
  ```
3. Ensure projectRepo is set to your VSTS Project name and Repository name in the following format: `{ProjectName}/{RepoName}`

  If your VSTS Project and Repository names are the same, then set the Project name only: `{ProjectName}`.

4. Click **Open Account** > **Visual Studio Team Services** > **Grant VSTS Access** (must be performed by the Screener Account Owner).
