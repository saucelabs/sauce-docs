---
id: splunk
title: Splunk
sidebar_label: Splunk
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy can integrate with Splunk to provide better insights into your mobile apps. This document explains how to export the app logs from TestFairy and import them into your Splunk installation.

## Exporting Logs

Use the [TestFairy Fetch Session Tool](https://github.com/testfairy/testfairy-fetch-sessions) tool to download log files for a specific project.

```bash
npm install -g --link git+https://github.com/testfairy/testfairy-fetch-sessions.git

testfairy-fetch-sessions --endpoint "acme.testfairy.com" --user "john@example.com" --api-key "0123456789abcdef" --project-id=1000 --logs
```

The logs are downloaded to a folder named `testfairy-sessions` with a directory structure as follows.
<img src={useBaseUrl('/img/testfairy/integrations/splunk/splunk-1.png')} alt="directory structure"/>

The directory which contains the `session.log` file is also the session identifier. You can use this value to set the `Host` value later.

## Importing Logs Into Splunk

1. Under **Settings**, select **Add Data** in your Splunk forwarder.
   <img src={useBaseUrl('/img/testfairy/integrations/splunk/splunk-2.png')} alt="add data"/>

2. Select **Monitor**.
   <img src={useBaseUrl('/img/testfairy/integrations/splunk/splunk-3.png')} alt="select monitor"/>

3. Select **Files & Directories**.
   <img src={useBaseUrl('/img/testfairy/integrations/splunk/splunk-4.png')} alt="files and directories"/>

4. Browse to the directory where the log files are downloaded. It's best to point to the top-level `testfairy-sessions` if you have multiple projects you'd like to monitor.
   <img src={useBaseUrl('/img/testfairy/integrations/splunk/splunk-5.png')} alt="browse directory"/>

5. After clicking **Next**, on the Input Settings page, set the **Host** using the **Segment in path**. Use the directory segment which contains the `session.log` file.
   <img src={useBaseUrl('/img/testfairy/integrations/splunk/splunk-6.png')} alt="set the host"/>

   It helps you search and create queries based on a specific session.

6. Create a query where the `host=<session id>` to see logs related to a given session.
   <img src={useBaseUrl('/img/testfairy/integrations/splunk/splunk-7.png')} alt="query"/>
