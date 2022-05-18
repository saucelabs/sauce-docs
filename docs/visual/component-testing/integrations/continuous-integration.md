---
id: continuous-integration
title: Integrate Visual Component Testing Into Your CI
sidebar_label: Continuous Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get continuous visual test automation by integrating Visual Component tests directly into your continuous integration (CI) build.

Screener will automatically run tests, and pass or fail your builds depending on visual regressions found.

## Setup Steps

1. After Screener is installed into your project, add the following command to your CI pipeline script:
  ```java
  npm run test-storybook
  ```
2. Set the `baseBranch` option in your `screener.config.js` file to the name of your base branch ([learn why](/visual/component-testing/workflow/baseline-branch)):
  ```java
  // screener.config.js
  module.exports = {
    ...

    baseBranch: 'master'
  }
  ```

### Additional Options

* Integrate into your [GitHub PR workflow](/visual/component-testing/integrations/github).
* We recommend securing your API Key by storing it as an environment variable (i.e., store it in an environment variable called `SCREENER_API_KEY`, then reference it in your `screener.config.js` file with `process.env.SCREENER_API_KEY`).

## Examples

Screener will automatically pull the build number and branch name from the following CI tools:

* Jenkins
* CircleCI
* Travis CI
* GitHub Actions
* Bitbucket Pipelines
* Buildkite
* Visual Studio Team Services
* Codeship
* GitLab CI
* Drone
* Semaphore


<Tabs
  defaultValue="CircleCI"
  values={[
    {label: 'CircleCI', value: 'CircleCI'},
    {label: 'Travis CI', value: 'Travis CI'},
    {label: 'Bitbucket', value: 'Bitbucket'},
    {label: 'GitHub', value: 'GitHub'},
    {label: 'Other', value: 'Other'},
  ]}>

<TabItem value="CircleCI">

**.circleci/config.yml**

```yaml
version: 2
jobs:
  build:
    steps:
      - checkout
      - run: npm install
      # Run Screener visual component tests
      - run: npm run test-storybook
```

</TabItem>
<TabItem value="Travis CI">

**.travis.yml**

```yaml
install:
  - npm install

script:
  - npm test
  # Run Screener visual component tests
  - npm run test-storybook
```

</TabItem>
<TabItem value="Bitbucket">

**bitbucket-pipelines.yml**

```yaml
pipelines:
  default:
    - step:
      script:
        - npm install
        - npm test
        # Run Screener visual component tests
        - npm run test-storybook
```        

</TabItem>
<TabItem value="GitHub">

**.github/workflows/github-actions.yml**

```yaml
on: [push]
jobs:
  default:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
      - run: npm install
      - run: npm run test-storybook
```

</TabItem>
<TabItem value="Other">

**General Example**

```bash
npm install

# Run Screener visual component tests
npm run test-storybook
```

</TabItem>
</Tabs>



If you need help integrating Screener into your CI, or would like to see an example not listed here, [contact our Support Team](https://saucelabs.com/training-support).
