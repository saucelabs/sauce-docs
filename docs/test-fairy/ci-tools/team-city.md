---
id: team-city
title: TeamCity
sidebar_label: TeamCity
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TeamCity can automatically deploy your Android and iOS Apps to [TestFairy](https://www.testfairy.com/).

1. On the TestFairy dashboard, navigate to the Preferences page.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/testfairy-open-preferences.png')} alt=" "/>

1. On the Preferences page, go to the API Key section and copy the API key.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/testfairy_upload_key.png')} alt=" "/>

1. In TeamCity, add a environment variable as a **New Parameter** in to the **Build Configuration**.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/teamcity-configuration-4.png')} alt=" "/>

1. Name the parameter `env.TESTFAIRY_API_KEY` and give it the value you copied from the TestFairy preferences page, and Save.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/teamcity-configuration-5.png')} alt=" "/>

1. Add a **Build Step** to the **Build Configuration** you wish to deploy from.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/teamcity-configuration-1.png')} alt=" "/>

1. Make sure to select a **Command Line** build step.

   <img src={useBaseUrl('/img/test-fairy/ci-tools/teamcity-configuration-2.png')} alt=" "/>

   Copy the following command into **Custom script** text field:

   ```bash
   curl https://upload.testfairy.com/api/upload -F api_key=${env.TESTFAIRY_API_KEY} -F comment="TeamCity build" -F file=@android.apk
   ```

   :::note
   Be sure to replace the `-F file=@android.apk` argument with a path to your own APK or IPA.
   :::

For a complete list of available options, please visit the [TestFairy Upload API documentation](/test-fairy/api-reference/upload-api)
