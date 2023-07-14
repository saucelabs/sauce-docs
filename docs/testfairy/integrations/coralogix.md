---
id: coralogix
title: Coralogix
sidebar_label: Coralogix
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Coralogix](https://coralogix.com/) is a machine-learning-powered logging platform built for companies performing CI/CD at scale.

To integrate TestFairy with Coralogix and automatically push all the logs collected from your mobile devices to your Coralogix account, do the following:

1. Install the [TestFairy fetch sessions](https://github.com/testfairy/testfairy-fetch-sessions) logs client on your server by running the following command:

   ```bash
   npm install -g --link git+https://github.com/testfairy/testfairy-fetch-sessions.git
   ```

2. Create a cron job that runs this command every 15 minutes.

   ```bash
   testfairy-fetch-sessions --endpoint "your_subdomain.testfairy.com" --user "john@example.com" --api-key "YOUR_API_KEY" --project-id=1000 --logs --json
   ```

   Make sure to replace the following params:

   - Replace `your_subdomain.testfairy.com` with your server address.
   - Replace `john@example.com` with your admin username
   - Replace `YOUR_API_KEY` with your API KEY (found under User preferences > Upload API key)
   - Replace `1000` with your project ID
   - (Optional) Add `--json` to have a log line as a json with all session attributes.
   - (Optional): add `--all-time` flag to get logs from all times. If not used, the tool only fetches logs from the last 24 hours. Only use this option if this is your first debugging of the service. Logs older than 24 hours are usually a waste of good disk space.
   - (Optional): if your logs are encrypted with RSA public key, use `--rsa-private-key` with your private key for decryption.

3. Install Coralogix shipper:

   - Download the preconfigured `[fluentd.conf]`(/img/testfairy/integrations/fluentd.conf)
   - Edit `fluentd.conf`, and update `CORALOGIX_PRIVATEKEY` and `CORALOGIX_APPNAME`

4. Run FluentD:
   ```bash
   docker run -d -v `pwd`/fluentd.conf:/fluentd/etc/fluent.conf -v `pwd`:/opt coralogixrepo/fluentd-coralogix-image:latest
   ```
   Fluentd loops endlessly, looking for new logs files on disk. Ensure you keep this docker container running while the cron job fetches sessions from TestFairy now and then.

You have integrated TestFairy with Coralogix; you can now analyze and monitor mobile app logs in production.
