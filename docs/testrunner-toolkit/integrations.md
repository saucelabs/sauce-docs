---
id: integrations
title: Testrunner Toolkit CI Integrations
sidebar_label: CI Integrations
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A Testrunner Toolkit CI pipeline integration depends on a few factors:

* the current automation framework in the stack
* the organization's preferred CI tool

The use cases below outline general steps for a successful integration with the currently supported CI tools and automation frameworks.

## Create the Saucectl Configuration

Regardless of the CI tool in your pipeline, you must first create the `.sauce` directory at the root of your project, and add a `config.yaml` file that points [`saucectl`](dev/cli/saucectl.md) to your existing `tests` directory.

Also, with the `suites` field you can specify groups of tests, as well as the preferred browser `settings`. Refer to the examples below for more details:

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'TestCafe', value: 'testcafe'},
    {label: 'Playwright', value: 'playwright'},
  ]}>

<TabItem value="cypress">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/cypress.yml
```

</TabItem>
<TabItem value="playwright">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/playwright.yml
```

</TabItem>
<TabItem value="testcafe">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.sauce/testcafe.yml
```

</TabItem>
</Tabs>

:::warning
Ensure that your tests run locally with Testrunner Toolkit before you begin a CI integration. For more details on this topic, please visit the following page: [Running Testrunner Test](running-tests.md)
:::

## Jenkins

These examples can apply to virtually any Jenkins deployment, provided that you already have some existing automated tests, have access to the Jenkins instance, and are either the maintainer or an admin of the target repository.

__What You'll Need__

* [Jenkins Server](https://www.jenkins.io/doc/book/installing/)
* [Sauce Labs Account](https://saucelabs.com/sign-up)
* The following permissions in Jenkins:
    * ability to create and manage credentials
    * ability to create and manage new pipelines

### Configure Jenkins Credentials

The first step of the integration is to ensure you've added your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as a secret file/text in your Jenkins server (Not sure where to find these? They're [here](https://app.saucelabs.com/user-settings)).

The easiest way to add credentials to Jenkins is with the UI:

* Log in to Jenkins
* Go to __Manage Jenkins > Manage Credentials__
* Next to (Global), select __Add credentials__

    <img src={useBaseUrl('img/stt/add_credentials.png')} alt="Add Jenkins Credentials" width="500" />

* For __Kind__, select __Secret Text__
* Enter the following information:
    * Scope: Global
    * Secret: 'your-sauce-username'
    * ID: 'sauce-username'
    * Description: Sauce Labs Username
* Repeat the above steps for your Sauce Labs Access Key

    <img src={useBaseUrl('img/stt/secrets.png')} alt="Jenkins Secrets" width="500" />

    > For further information on how to store your Sauce Labs credentials in Jenkins, visit [the Jenkinsfile documentation](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials).

### Configure the Jenkins Pipeline

Add the `Jenkinsfile` at the root of your project directory so that Jenkins can detect changes and run `saucectl` accordingly.
In the examples below, the `environment` variables are the GitHub secrets configured in Jenkins:

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>

<TabItem value="cypress">

```bash reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.jenkins/Jenkinsfile.cypress
```

</TabItem>
<TabItem value="playwright">

```sh reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.jenkins/Jenkinsfile.playwright
```

</TabItem>
<TabItem value="testcafe">

```bash reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.jenkins/Jenkinsfile.testcafe
```

</TabItem>
</Tabs>

> You can view some of our public examples [here](https://github.com/saucelabs/testrunner-toolkit/blob/master/.jenkins/).

<!--### Run the Pipeline Tests-->

Now you can commit these files and Jenkins will detect the new pipeline and launch `saucetl` to run your tests.

For example if you're using the [Blue Ocean plugin](https://plugins.jenkins.io/blueocean/), your output may look something like this:

<img src={useBaseUrl('img/stt/blue-ocean.png')} alt="GitHub Settings" />

## GitHub Actions

These examples can apply to virtually any GitHub deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.

__What You'll Need__

* [GitHub Account](https://github.com/join)
* [Sauce Labs Account](https://saucelabs.com/sign-up)
* The following permissions in GitHub:
    * ability to create and manage workflows
    * ability to create and store [GitHub secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets)

### Create GitHub Secrets

The first order of business is to export your [Sauce Labs account credentials](https://app.saucelabs.com/user-settings) and store them as GitHub Secrets.

1. Navigate to your project repository and select the __settings__ icon

    <img src={useBaseUrl('img/stt/github-settings.png')} alt="GitHub Settings" width="500" />

2. Select __Secrets__
3. Click the __New secret__ button
4. Add the following:
    * Name: `SAUCE_USERNAME`
    * Value: 'your-sauce-username'
5. Click __Add secret__ to finish.
6. Repeat the same steps above for your `SAUCE_ACCESS_KEY` (Not sure where to find `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` in Sauce Labs? They're [here](https://app.saucelabs.com/user-settings)).

### Configure the GitHub Action

In your root project directory, create the following directory tree: `.github/workflows`. In the `workflows` directory create a file called `actions.yml`. 

Add the following to the top of your file:

> __NOTE__: Setting `env` at the top of the file enables it globally in this workflow, so all jobs have access to these variables.

```yaml
name: Sauce Pipeline Browser Tests

on:
  pull_request:
  push:
    branches:
      - master

env:
  SAUCE_ACCESS_KEY: ${{secrets.SAUCE_ACCESS_KEY}}
  SAUCE_USERNAME: ${{secrets.SAUCE_USERNAME}}

jobs:
```

### Create the Test Job

In the examples below, the environment variables (`env`) equate to the values configured in GitHub secrets (see above steps). These events only trigger test runs `on` every `pull_request` and/or `push` to the `master` branch.

> For more detailed information on setting event-driven actions and jobs, please visit the [GitHub Action documentation](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#the-components-of-github-actions).

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>
  
<TabItem value="cypress">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.github/workflows/tests.yml#L93-L114
```

</TabItem>
<TabItem value="playwright">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.github/workflows/tests.yml#L44-L67
```

</TabItem>
<TabItem value="testcafe">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.github/workflows/tests.yml#L69-L91
```

</TabItem>
</Tabs>

> You can reference our example workflows [here](https://github.com/saucelabs/testrunner-toolkit/tree/master/.github/workflows).

### View Test Results

Now when you commit these files, GitHub will detect the new workflow actions and launch `saucectl` to run your tests.

To see the output:

1. Log in to GitHub
2. Navigate to your repository page
3. Click on Actions

    <img src={useBaseUrl('img/stt/github-actions.png')} alt="GitHub Actions" width="500" />

Your output may look something like this:

<img src={useBaseUrl('img/stt/github-workflow.png')} alt="GitHub Workflow" width="800" />

## CircleCI

These examples can apply to virtually any CirceCI deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.

__What You'll Need__

* [CirceCI Account](https://circleci.com/signup/)
* [SauceLabs Account](https://saucelabs.com/sign-up)
* A git repository hosting service (GitHub or BitBucket)

### Project Setup

The first step is to ensure you have a CircleCI account, and to login with your git hosting provider username; the examples below use GitHub authentication.

1. Log in to CircleCI
2. Choose the desired repo and click "Set Up Project"
3. Select Add Config (or Use Existing Config). This creates a new branch in your project called `circle-ci-project-setup`

> Do not worry if your project fails to build. You need to modify the `config.yml` manually anyway.

### Add Project Environment Variables

In order for CirceCi to communicate with Sauce Labs you need to authenticate with project environment variables.

1. In CirceCI, go to your __Project Settings__

    <img src={useBaseUrl('img/stt/circleci-project-settings.png')} alt="CircleCI Project Settings" width="200" />

2. Select __Environment Variables__

    <img src={useBaseUrl('img/stt/circleci-add-variables.png')} alt="Add Variables in CircleCI" width="200" />

3. Add variables for your [Sauce Labs account credentials](https://app.saucelabs.com/user-settings) as `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` respectively

    <img src={useBaseUrl('img/stt/circleci-variables.png')} alt="CircleCI Variables" width="600" />



### Modify the CirceCI Configuration

In the root of your project directory, create the `.circleci` directory if it doesn't already exist, and open/create `config.yml`. Below are some job snippets of how to configure Testrunner Toolkit with CircleCI:

<Tabs
  defaultValue="cypress"
  values={[
    {label: 'Cypress', value: 'cypress'},
    {label: 'Playwright', value: 'playwright'},
    {label: 'TestCafe', value: 'testcafe'},
  ]}>
  
<TabItem value="cypress">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.circleci/config.yml#L43-L58
```

</TabItem>
<TabItem value="playwright">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.github/workflows/tests.yml#L60-L76
```

</TabItem>
<TabItem value="testcafe">

```yaml reference
https://github.com/saucelabs/testrunner-toolkit/blob/master/.circleci/config.yml#L96-L112
```

</TabItem>
</Tabs>

> You can reference the complete `config.yml` [here](https://github.com/saucelabs/testrunner-toolkit/blob/master/.circleci/config.yml).

Commit the updated `config.yml` to your git hosting service provider. Navigate back to the CirceCI dashboard to see your build pass.

<img src={useBaseUrl('img/stt/circleci-output.png')} alt="CircleCI Output" />
