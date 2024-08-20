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

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- [GitLab Account and Instance](https://about.gitlab.com/)
- The following permissions in GitLab:
  - Ability to manage GitLab repository containing the project

## Configure GitLab Credentials

The first step of the integration is to ensure you've added your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as a secret in your GitLab instance.

The easiest way to add credentials to GitLab is with the UI:

1. Log in to GitLab.
2. Go to your repository.
3. In the left column, select **Settings**, then **CI/CD**.

   <img src={useBaseUrl('img/stt/gitlab-settings-cicd.png')} alt="GitLab Secrets" width="300" />

4. Look for **Variables** and click on **Expand**.
   <img src={useBaseUrl('img/stt/gitlab-settings-variables.png')} alt="GitLab Variables" width="700" />
5. Click on **Add Variable** to create a new secret.
6. Enter the following information:

   - Key: `SAUCE_USERNAME`
   - Value: 'your-sauce-username'
   - Type: 'Variable'
   - Environment Scope: All

     <img src={useBaseUrl('img/stt/gitlab-variables-username.png')} alt="Add GitLab SAUCE_USERNAME" width="500" />

7. Repeat the process for your Sauce Labs Access Key.

Credentials are now set!

<img src={useBaseUrl('img/stt/gitlab-variables-complete.png')} alt="Add GitLab SAUCE_USERNAME" width="600" />

## Add GitLab-CI Configuration

1. In the root of your project directory, create the `.gitlab-ci.yml` file. Below are some job snippets of how to configure `saucectl` with GitLab-CI:

```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/main/v1/.gitlab-ci.yml
```

2. Commit the updated `.gitlab-ci.yml` to your git repository.
3. Navigate back to the GitLab-CI dashboard to see your build pass.

<img src={useBaseUrl('img/stt/gitlab-output.png')} alt="GitLab Output" />
