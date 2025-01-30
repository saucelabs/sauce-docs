---
id: gitlab
title: Gitlab
sidebar_label: Gitlab
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To automatically deply your Android or iOS Apps to [TestFairy](https://app.testfairy.com/) by using GitLab, follow the steps below:

1. On the TestFairy dashboard, navigate to **Preferences** > **[TestFairy Access Key](https://app.testfairy.com/settings/access-key)**.

   <img src={useBaseUrl('/img/testfairy/ci-tools/testfairy_upload_key.png')} alt="testfairy upload key"/>

2. Copy your API key and go to your application's project **Settings** > **CI/CD** > **Variables** in GitLab.
3. Add a variable called `TESTFAIRY_API_KEY` to the list with the value of your **TestFairy Access Key**.

   <img src={useBaseUrl('/img/testfairy/ci-tools/gitlab_secret_keys.png')} alt="gitlab secret keys"/>

   - To deploy, add a job to your `.gitlab-ci.yml` configuration using [fastlane](https://docs.fastlane.tools/getting-started/ios/beta-deployment/) or `curl` (example below).

     ```yaml
     stages:
     - deploy

     deploy:
     stage: deploy
     only:
     - master
     script:
     - |
           curl \
           -A "GitLab CI" \
           -F api_key="${TESTFAIRY_API_KEY}" \
           -F comment="GitLab Pipeline build ${CI_COMMIT_SHA}" \
           -F file=@android.apk \
           https://app.testfairy.com/api/upload/
     ```

:::note
Replace the `-F file=@android.apk` argument with a path to your APK or IPA.
:::

For a complete list of available options, visit the Upload API reference guide /testfairy/api-reference/upload-api.
