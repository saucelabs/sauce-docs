---
id: gitlab
title: Gitlab
sidebar_label: Gitlab
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

GitLab can automatically deploy your Android or iOS Apps to [TestFairy](https://www.testfairy.com/).

1. On the TestFairy dashboard, navigate to the **Preferences --> [Upload API Key](https://app.testfairy.com/settings/api-key)** page.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/testfairy_upload_key.png')} alt="testfairy upload key"/>

2. Copy your API key and go to your application's project **Settings --> CI/CD -- Variables** in GitLab. Add a variable called `TESTFAIRY_API_KEY` to the list with the value of your **Upload API key**.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/gitlab_secret_keys.png')} alt="gitlab secret keys"/>

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
      https://upload.testfairy.com/api/upload/
  ```

**Note** Be sure to replace the `-F file=@android.apk` argument with a path to your own APK or IPA.

For a complete list of available options, please visit the [Upload API reference guide](/test-fairy/api-reference/upload-api)
