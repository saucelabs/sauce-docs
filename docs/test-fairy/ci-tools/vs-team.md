---
id: vs-team
title: Visual Studio Team
sidebar_label: Visual Studio Team
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide helps Visual Studio Team Services (VSTS) users to upload apps (_.apk/_.ipa) to TestFairy.

Adding UploadToTestFairy (or any other task name) to your existing build:

1. Go to **Edit Build Definitions**.
   <img src={useBaseUrl('/img/test-fairy/ci-tools/EditBuildDefinitions.png')} alt="edit build definitions"/>

2. Add **Command Line** tool task
   <img src={useBaseUrl('/img/test-fairy/ci-tools/addCommandLineTask.png')} alt="add command line tool"/>

3. Configure the task and add the following line to arguments:

   ```bash
   https://upload.testfairy.com/api/upload -F api_key=abcdabcdgfdsgfds56 -F file=@sample.apk
   ```

   :::note
   Make sure you replace the api_key with yours
   :::

   <img src={useBaseUrl('/img/test-fairy/ci-tools/Configure.png')} alt="configure task"/>
