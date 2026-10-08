---
id: team-city
title: TeamCity
sidebar_label: TeamCity
description: Deploy iOS and Android builds to Mobile App Distribution automatically from a TeamCity build configuration.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To automatically deply your Android or iOS Apps to [Sauce Labs Mobile App Distribution](https://www.testfairy.com/) by using TeamCity, follow the steps below:

1. In Sauce Labs Mobile App Distribution, click the **Profile** icon in the top-right corner and select **My Profile**.

   <img src={useBaseUrl('/img/app-distribution/ci-tools/ci-tools-1.png')} alt="User menu with My Profile highlighted" width="100%"/>

2. On the **My Profile** page, go to the **API Key** section and click the **copy icon** to copy the API key. You can also copy it from **API Credentials** in the top navigation bar.

   <img src={useBaseUrl('/img/app-distribution/ci-tools/ci-tools-2.png')} alt="API Key section on the My Profile page" width="100%"/>

3. In TeamCity, add an environment variable as a **New Parameter** into the **Build Configuration**.

   <img src={useBaseUrl('/img/testfairy/ci-tools/teamcity-configuration-4.png')} alt="build configuration"/>

4. Name the parameter `env.TESTFAIRY_API_KEY` and give it the value you copied from the Sauce Labs Mobile App Distribution **My Profile** page, and Save.

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

For a complete list of available options, visit the [Sauce Labs Mobile App Distribution Upload API documentation](/app-distribution/developer/legacy-api-v1#upload).
