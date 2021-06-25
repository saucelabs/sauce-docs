---
id: github
title: GitHub Integration with Visual E2E Testing
sidebar_label: GitHub
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By integrating Screener into your GitHub PR workflow, you can accomplish code review and visual review from one place.

Screener integrates with GitHub by automatically setting the commit status of GitHub Pull Requests with your Screener test results. The commit status includes a link to Screener to directly review changes.

## Benefits

* Easy workflow for developers to review visual changes directly from GitHub, same place as they review code.
* Team members can see if there are visual changes, and if they've been accepted, from within GitHub.
* Reduces the need to re-run a CI Build after accepting changes in order to see a green success status in your PR.

## Workflow

When visual changes are found by Screener, the PR will be marked as a failure in GitHub. Clicking the **Details** link in GitHub will open the visual test results in Screener to review.

When visual changes are accepted in Screener, the GitHub PR will automatically update to a green success status:
<img src={useBaseUrl('img/visual/e2e-github-status.png')} alt="GitHub Status Visual Testing" />

## Getting Started
To integrate Screener into your GitHub workflow, you need to grant Screener access to your GitHub repositories, then integrate Screener into your CI process.

### Grant Screener Access to Your GitHub Repositories
1. In your Screener Dashboard, open the **Integrations** menu > Click **GitHub**.
2. Click **Grant GitHub Access** -- you'll be taken to the GitHub website for authorization.
3. When access has been granted, you will be redirected back to your Screener Dashboard.

  This step only needs to be done once, as all projects you own will now use this GitHub account.

  >**NOTE**: Screener needs access to your Commit Statuses only (i.e., scope: 'repo:status'). Screener will not have access to your code.


### Integrate Screener into Your CI Process

Follow the steps in our [Continuous Integration doc](https://screener.io/docs/continuous-integration) to integrate Screener. Then, you're done!

Screener's CI Integration automatically supports GitHub status updates with the following CI tools:
  * Jenkins
  * CircleCI
  * Travis CI
  * Codeship
  * Drone
  * Semaphore

>**NOTE**: Only v2.1+ of Screener's CI script supports GitHub status updates.

### Other CI Tools

If you're using a CI tool not listed above, below is an example of how to integrate by passing the necessary GitHub details into Screener's CI script. Or contact our Support Team and we'll help get you setup.

```bash
./screener-ci.sh $SCREENER_API_KEY $SCREENER_GROUP $BUILD_NUMBER --repo $GITHUB_REPO_SLUG --commit $GITHUB_COMMIT_SHA
```
