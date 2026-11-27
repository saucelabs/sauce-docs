---
id: github-actions
title: saucectl with GitHub Actions
sidebar_label: GitHub Actions
description: Run your Sauce Labs tests with saucectl in your GitHub Actions workflows.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[GitHub Actions](https://docs.github.com/en/actions) is the continuous integration and delivery platform built into GitHub. The Sauce Labs integration with GitHub Actions lets you run your automated tests on Sauce Labs with `saucectl` as a job in your GitHub workflow, using the `saucelabs/saucectl-run-action` action.

## How It Works

A GitHub Actions workflow is defined in a `.yml` file in the `.github/workflows` directory of your repository. When you commit the file, GitHub detects the workflow and runs it:

- **Credentials**: Your Sauce Labs username and access key are stored as GitHub secrets and passed to the workflow as environment variables, so you don't hard code them in your workflow file.
- **Test job**: The `saucelabs/saucectl-run-action` action runs `saucectl`, which runs your tests on Sauce Labs infrastructure.
- **Sauce Connect**: If the site or app you test is not publicly accessible, you need a [Sauce Connect](/secure-connections/sauce-connect-5/) tunnel, which lets the remote browser access your local network.
- **Results**: The workflow output appears on the **Actions** tab of your repository, and your tests appear in Sauce Labs.

These examples can apply to virtually any GitHub deployment.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings). See [Authentication](#authentication).
- A [GitHub account](https://github.com/join), and maintainer or admin access to the target repository.
- The following permissions in GitHub:
  - Create and manage workflows.
  - Create and store [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).
- Existing automated tests that you run with [`saucectl`](/dev/cli/saucectl/).

## Set Up the Integration

To run your tests from GitHub Actions, add your Sauce Labs credentials as GitHub secrets (see [Authentication](#authentication)), and then create a workflow file with a job that runs `saucectl`.

### Configure the Workflow

1. In your root project directory, create the `.github/workflows` directory.
2. In the `workflows` directory, create a file called `actions.yml`.
3. Add the following to the top of the file:

   ```yaml
   env:
     SAUCE_USERNAME: ${{secrets.SAUCE_USERNAME}}
     SAUCE_ACCESS_KEY: ${{secrets.SAUCE_ACCESS_KEY}}
     GITHUB_TOKEN: ${{ github.token }}
   ```

:::note
Setting `env` at the top of the file enables it globally in this workflow, so all jobs have access to these variables.
:::

[See full example on GitHub](https://github.com/saucelabs/saucectl-cypress-example/blob/main/.github/workflows/test-v1.yml)

### Create the Test Job

Add a job that checks out your repository and runs `saucectl` with the `saucelabs/saucectl-run-action` action. The following example runs `saucectl` on Sauce Labs infrastructure.

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

You will likely need a tunnel back to where your app is running. A tunnel enables the remote browser to access your local network. For this, use [Sauce Connect](/secure-connections/sauce-connect-5/).

:::note
For more detailed information on setting event-driven actions and jobs, see the [GitHub Actions documentation](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions).
:::

## Authentication

The integration authenticates with your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). Store them as GitHub secrets, so your workflow can use them without exposing them in your workflow file.

Follow the GitHub documentation to [create the secrets for your repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository), and add the following secrets:

| Name | Value |
| --- | --- |
| `SAUCE_USERNAME` | Your Sauce Labs username. |
| `SAUCE_ACCESS_KEY` | Your Sauce Labs access key. |

The `env` block at the top of your workflow file passes these secrets to your jobs as the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables. See [Configure the Workflow](#configure-the-workflow).

## Verify the Integration

1. Commit your workflow file to your repository. GitHub detects the new workflow and launches `saucectl` to run your tests.
2. Log in to GitHub and go to your repository page.
3. Click **Actions**.

   <img src={useBaseUrl('img/stt/github-actions.png')} alt="GitHub Actions" width="500" />

4. Open the workflow run and check the output of the test job. Your output may look something like this:

   <img src={useBaseUrl('img/stt/github-workflow.png')} alt="GitHub Workflow" width="800" />

## Use the Integration

After you set up the integration, GitHub runs your workflow, and `saucectl` runs your tests on Sauce Labs. You can see the output on the **Actions** tab of your repository, as shown in [Verify the Integration](#verify-the-integration).

To change when the workflow runs, such as on every push or pull request, see the [GitHub Actions documentation](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions).

You can reference our example workflows [in the `saucectl` Cypress example repository](https://github.com/saucelabs/saucectl-cypress-example/tree/main/.github/workflows).

## Troubleshooting

<details>
<summary>**The workflow does not run**</summary>

Make sure your workflow file is in the `.github/workflows` directory in the root of your repository, and that you committed it.

</details>

<details>
<summary>**The tests cannot authenticate with Sauce Labs**</summary>

Check that your repository has the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` secrets, and that the `env` block at the top of your workflow file references them. See [Authentication](#authentication).

</details>

<details>
<summary>**The tests cannot reach your site or app**</summary>

If your site or app is not publicly accessible, the remote browser needs a tunnel to your local network. Use [Sauce Connect](/secure-connections/sauce-connect-5/).

</details>

## Next Steps

- [saucectl](/dev/cli/saucectl/)
- [Sauce Connect Proxy](/secure-connections/sauce-connect-5/)
- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [Integrations Overview](/basics/integrations-overview/)
