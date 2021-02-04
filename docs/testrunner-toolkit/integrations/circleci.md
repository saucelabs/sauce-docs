---
id: circleci
title: Testrunner Toolkit with CircleCI
sidebar_label: CircleCI
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These examples can apply to virtually any CirceCI deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.

## What You'll Need

* [CirceCI Account](https://circleci.com/signup/)
* [SauceLabs Account](https://saucelabs.com/sign-up)
* A git repository hosting service (GitHub or BitBucket)

## Project Setup

The first step is to ensure you have a CircleCI account, and to login with your git hosting provider username; the examples below use GitHub authentication.

1. Log in to CircleCI
2. Choose the desired repo and click "Set Up Project"
3. Select Add Config (or Use Existing Config). This creates a new branch in your project called `circle-ci-project-setup`

> Do not worry if your project fails to build. You need to modify the `config.yml` manually anyway.

## Add Project Environment Variables

In order for CirceCi to communicate with Sauce Labs you need to authenticate with project environment variables.

1. In CirceCI, go to your __Project Settings__

    <img src={useBaseUrl('img/stt/circleci-project-settings.png')} alt="CircleCI Project Settings" width="200" />

2. Select __Environment Variables__

    <img src={useBaseUrl('img/stt/circleci-add-variables.png')} alt="Add Variables in CircleCI" width="200" />

3. Add variables for your [Sauce Labs account credentials](https://app.saucelabs.com/user-settings) as `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` respectively

    <img src={useBaseUrl('img/stt/circleci-variables.png')} alt="CircleCI Variables" width="600" />



## Modify the CirceCI Configuration

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