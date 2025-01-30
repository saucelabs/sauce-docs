---
id: team-city
title: TeamCity
sidebar_label: TeamCity
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To automatically deply your Android or iOS Apps to [TestFairy](https://www.testfairy.com/) by using TeamCity, follow the steps below:

1. On the TestFairy dashboard, navigate to the **Preferences**.

   <img src={useBaseUrl('/img/testfairy/ci-tools/testfairy-open-preferences.png')} alt="open preferences"/>

2. On the **Preferences**, go to the API Key section and copy the API key.

   <img src={useBaseUrl('/img/testfairy/ci-tools/testfairy_upload_key.png')} alt="upload the key"/>

3. In TeamCity, add an environment variable as a **New Parameter** into the **Build Configuration**.

   <img src={useBaseUrl('/img/testfairy/ci-tools/teamcity-configuration-4.png')} alt="build configuration"/>

4. Name the parameter `env.TESTFAIRY_API_KEY` and give it the value you copied from the TestFairy preferences page, and Save.

   <img src={useBaseUrl('/img/testfairy/ci-tools/teamcity-configuration-5.png')} alt=" add environment variable"/>

5. Add a **Build Step** to the **Build Configuration** you wish to deploy from.

   <img src={useBaseUrl('/img/testfairy/ci-tools/teamcity-configuration-1.png')} alt="add build step"/>

6. Make sure to select a **Command Line** build step.

   <img src={useBaseUrl('/img/testfairy/ci-tools/teamcity-configuration-2.png')} alt="command line build step"/>

   Copy the following command into the **Custom script** text field:

   ```bash
   curl https://app.testfairy.com/api/upload -F api_key=${env.TESTFAIRY_API_KEY} -F comment="TeamCity build" -F file=@android.apk
   ```

   :::note
   Replace the `-F file=@android.apk` argument with a path to your own APK or IPA.
   :::

For a complete list of available options, visit the [TestFairy Upload API documentation](/testfairy/api-reference/upload-api).
