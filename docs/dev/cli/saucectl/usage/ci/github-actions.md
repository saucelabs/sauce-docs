---
id: github-actions
title: saucectl with GitHub Actions
sidebar_label: GitHub Actions
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These examples can apply to virtually any GitHub deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings)
- A [GitHub Account](https://github.com/join)
- The following permissions in GitHub:
  - ability to create and manage workflows
  - ability to create and store [GitHub secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets)

## Create GitHub Secrets

1. Export your [Sauce Labs account credentials](https://app.saucelabs.com/user-settings) and store them as GitHub Secrets.

2. Follow the GitHub Docs to [create the secrets for your repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository), and add the following:

   Your Sauce Username:

   - Name: `SAUCE_USERNAME`
   - Value: 'your-sauce-username'

   Your Sauce Access Key:

   - Name: `SAUCE_ACCESS_KEY`
   - Value: 'your-sauce-access-key'

## Configure the GitHub Action

In your root project directory, create the following directory tree: `.github/workflows`. In the `workflows` directory create a file called `actions.yml`.

Add the following to the top of your file:

:::note
Setting `env` at the top of the file enables it globally in this workflow, so all jobs have access to these variables.
:::

```yaml
env:
  SAUCE_USERNAME: ${{secrets.SAUCE_USERNAME}}
  SAUCE_ACCESS_KEY: ${{secrets.SAUCE_ACCESS_KEY}}
  GITHUB_TOKEN: ${{ github.token }}
```

[See full example on GitHub](https://github.com/saucelabs/saucectl-cypress-example/blob/main/.github/workflows/test-v1.yml)

## Create the Test Job

In the examples below, we illustrate how `saucectl` executes tests on Sauce Cloud (i.e., Sauce Labs infrastructure).
You will likely require a tunnel back to where your app is running. A tunnel enables the remote browser to access your local network. For this, you'll need to use [Sauce Connect](/secure-connections/sauce-connect-5/).

:::note
For more detailed information on setting event-driven actions and jobs, visit the [GitHub Action documentation](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#the-components-of-github-actions).
:::


```yaml
jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Saucectl RUN
        uses: saucelabs/saucectl-run-action@v4
        with:
          working-directory: v1
```
[See full example on GitHub](https://github.com/saucelabs/saucectl-cypress-example/blob/main/.github/workflows/test-v1.yml)

:::note
You can reference our example workflows [in the `saucectl` Cypress example repository](https://github.com/saucelabs/saucectl-cypress-example/tree/main/.github/workflows).
:::

Now when you commit these files, GitHub will detect the new workflow actions and launch `saucectl` to run your tests.

To see the output:

1. Log in to GitHub.
2. Navigate to your repository page.
3. Click **Actions**.

   <img src={useBaseUrl('img/stt/github-actions.png')} alt="GitHub Actions" width="500" />

Your output may look something like this:

<img src={useBaseUrl('img/stt/github-workflow.png')} alt="GitHub Workflow" width="800" />
