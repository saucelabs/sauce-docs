---
id: bitbucket
title: Bitbucket Pipelines
sidebar_label: Bitbucket Pipelines
description: Upload iOS and Android builds to Mobile App Distribution automatically from your Bitbucket Pipelines.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Set up Bitbucket Pipelines to upload your build artifacts (IPA or APK) directly to Sauce Labs Mobile App Distribution for distribution.

## Setting Up

1. Open your Bitbucket repository, and select **Settings** > **Pipelines** > **Environment Variables**

   <img src={useBaseUrl('/img/testfairy/ci-tools/bitbucket-pipelines-0.png')} alt="screenshot of Bitbucket pipelines"/>

2. Fill in **variable** and **value**:

   - **Variable**: TESTFAIRY_API_KEY
   - **Value**: _Your API key. Find it under **API Credentials** in the top navigation bar, or in the **API Key** section of **My Profile**. See [API Keys](/app-distribution/security/api-keys) for details._
   - **Secured**: Y

3. Click **Add**.

<img src={useBaseUrl('/img/testfairy/ci-tools/bitbucket-pipelines-1.png')} alt="screenshot of Bitbucket pipelines"/>

4. Edit your `bitbucket-pipelines.yml` and add this command to your `script` section:

   ```bash
   curl https://app.testfairy.com/api/upload -F api_key=${TESTFAIRY_API_KEY} -F file=@MyApplicationFile.apk
   ```

:::caution
Do not forget to replace `MyApplicationFile.apk` with the path to your APK or IPA files.
:::

Additional optional parameters such as `groups`, `notify`, and `comment` can be added to this line. Refer to the [Upload API reference guide](/app-distribution/developer/legacy-api-v1#upload) for more information and examples.

Here is a screenshot of a sample `bitbucket-pipelines.yml` file:

<img src={useBaseUrl('/img/testfairy/ci-tools/bitbucket-pipelines-2.png')} alt="screenshot of Bitbucket pipelines"/>
