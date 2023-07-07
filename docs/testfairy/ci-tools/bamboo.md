---
id: bamboo
title: Bamboo
sidebar_label: Bamboo
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Continuous integration with Bamboo is straightforward to set up and, when ready, allows you to deliver up-to-date releases to your beta testers and co-workers.

## Installation

1. Log in to your Bamboo server.
2. Click on the **cogs icon** and select **Add-ons**.
3. Click **find new add-ons**, and install the `TestFairy Uploader` add-on.

<img src={useBaseUrl('/img/testfairy/ci-tools/bamboo_00.png')} alt="TestFairy Uploader"/>

4. Now that you have the add-on installed on your server, you can configure it with our `upload API key`. You can find this API key in your **Preferences Page** at [https://app.testfairy.com/settings/](https://app.testfairy.com/settings/).

5. Create a new task in your Android or iOS job, and pick `TestFairy Uploader` from the **Deployment** category.
   <img src={useBaseUrl('/img/testfairy/ci-tools/bamboo_01.png')} alt="task types"/>

6. Now configure the API key as shown below:
   <img src={useBaseUrl('/img/testfairy/ci-tools/bamboo_02.png')} alt="tasks"/>

You must provide the path to the compiled .IPA or .APK file, and optionally list group names of testers for sending out email invitations.
