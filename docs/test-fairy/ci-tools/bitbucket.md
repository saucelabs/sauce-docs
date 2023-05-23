---
id: bitbucket
title: Bitbucket Pipelines
sidebar_label: Bitbucket Pipelines
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Set up Bitbucket Pipelines to upload your build artifacts (IPA or APK) directly to TestFairy for distribution.

## Setting up

1. Open your Bitbucket repository, and select _Settings_ -> _Pipelines_ -> _Environment Variables_

   <img src={useBaseUrl('/img/test-fairy/ci-tools/bitbucket-pipelines-0.png')} alt="screenshot of Bitbucket pipelines"/>

2. Fill in variable, value fields:

   - **Variable**: TESTFAIRY_API_KEY
   - **Value**: _Your API application key. See https://app.testfairy.com/settings for details._
   - **Secured**: Y

   When done, click the _Add_ button.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/bitbucket-pipelines-1.png')} alt="screenshot of Bitbucket pipelines"/>

3. Edit your `bitbucket-pipelines.yml` and add this command to your `script` section:

   ```bash
   curl https://app.testfairy.com/api/upload -F api_key=${TESTFAIRY_API_KEY} -F file=@MyApplicationFile.apk -F format=readable
   ```

**NOTE:** Do not forget to replace `MyApplicationFile.apk` with path to your APK or IPA files.

Additional optional parameters such as `testers-groups`, `notify` and `comment` can be added to this line. Please refer to the [TestFairy Upload API reference guide](/test-fairy/api-reference/upload-api) for more information and examples.

Here, for example, is a screenshot of a sample `bitbucket-pipelines.yml` file:

<img src={useBaseUrl('/img/test-fairy/ci-tools/bitbucket-pipelines-2.png')} alt="screenshot of Bitbucket pipelines"/>
