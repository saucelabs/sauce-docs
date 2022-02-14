---
id: gitlab
title: saucectl with GitLab
sidebar_label: GitLab
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These examples can apply to virtually any GitLab deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.


## What You'll Need

* [GitLab Account and Instance](https://about.gitlab.com/)
* [SauceLabs Account](https://saucelabs.com/sign-up)
* The following permissions in GitLab:
    * Ability to manage GitLab repository containing the project.

## Configure GitLab Credentials

The first step of the integration is to ensure you've added your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as a secret in your GitLab instance (Not sure where to find these? They're [here](https://app.saucelabs.com/user-settings)).

The easiest way to add credentials to GitLab is with the UI:

1. Log in to GitLab.
1. Go to your repository.
1. In the left column, select __Settings__, then __CI/CD__.
    <img src={useBaseUrl('img/stt/gitlab-settings-cicd.png')} alt="GitLab Secrets" width="450" />
1. Look for __Variables__ and click on __expand__.
    <img src={useBaseUrl('img/stt/gitlab-settings-variables.png')} alt="GitLab Variables" width="500" />
1. Click on __Add Variable__ to create a new secret.
1. Enter the following information:
    * Key: `SAUCE_USERNAME`
    * Value: 'your-sauce-username'
    * Type: 'Variable'
    * Environment Scope: All
    <img src={useBaseUrl('img/stt/gitlab-variables-username.png')} alt="Add GitLab SAUCE_USERNAME" width="500" />
1. Repeat the process for your Sauce Labs Access Key.

Credentials are now set!

<img src={useBaseUrl('img/stt/gitlab-variables-complete.png')} alt="Add GitLab SAUCE_USERNAME" width="500" />


## Add GitLab-CI Configuration

In the root of your project directory, create the `.gitlab-ci.yml` file. Below are some job snippets of how to configure `saucectl` with GitLab-CI:


```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/master/.gitlab-ci.yml#L1-L34
```

Commit the updated `.gitlab-ci.yml` to your git repository. Navigate back to the GitLab-CI dashboard to see your build pass.

<img src={useBaseUrl('img/stt/gitlab-output.png')} alt="GitLab Output" />
