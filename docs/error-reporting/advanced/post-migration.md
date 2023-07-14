---
id: post-migration
title: Post Migration Verification Steps
sidebar_label: Post migration
description: Required steps after a server migration.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

After a server migration or similar work, the minimum verification steps need to be completed.

## Startup/Service

1. Confirm the coronerd version by running the following command:

   ```bash
   $ /opt/backtrace/sbin/coronerd -v 1.42.1
   ```

2. Ensure that coronerd, backtrace-proxy, and backtrace-nginx can be started, stopped, and queried for status via systemctl.

   ```bash
   $ systemctl status coronerd
   ● coronerd.service - Backtrace I/O server
   Loaded: loaded (/etc/systemd/system/coronerd.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2019-11-12 01:41:25 UTC; 13h ago
   Main PID: 18126 (monitor)
       Tasks: 104 (limit: 4915)
   CGroup: /system.slice/coronerd.service
           ├─18126 /opt/backtrace/sbin/coronerd: monitoring child 18127
           ├─18127 /opt/backtrace/sbin/coronerd -f -c /etc/coronerd/coronerd.conf
           (... etc …)
   ```

3. Perform the following checks for Coronerd:

   - Coronerd starts and stays running.
   - Coronerd is listening on the necessary ports/firewall is open.

   ```bash
   $ systemctl status coronerd
   ● coronerd.service - Backtrace I/O server
   Loaded: loaded (/etc/systemd/system/coronerd.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2019-11-12 01:41:25 UTC; 13h ago
   Main PID: 18126 (monitor)
       Tasks: 104 (limit: 4915)
   CGroup: /system.slice/coronerd.service
           ├─18126 /opt/backtrace/sbin/coronerd: monitoring child 18127
           ├─18127 /opt/backtrace/sbin/coronerd -f -c /etc/coronerd/coronerd.conf
           (... etc …)
   ```

4. Check the logs and look for abnormal messages from coronerd.

5. Confirm that the `/api/is_configured` endpoint returns a literal "1" by running the following command:

   ```bash
   # Look carefully - there will be no line break after the "1"
   $ curl https://yolo.sp.backtrace.io/api/is_configured
   1
   ```

6. Confirm that the `coronerd-crash-report` service is running by running the following command:

   ```bash
   $ sudo systemctl status coronerd-crash-report
   ● coronerd-crash-report.service - Coronerd Crash Report server
   Loaded: loaded (/etc/systemd/system/coronerd-crash-report.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2019-11-12 01:41:25 UTC; 13h ago
   Main PID: 18197 (monitor)
       Tasks: 2 (limit: 4915)
   CGroup: /system.slice/coronerd-crash-report.service
           ├─18197 /opt/backtrace/bin/coroner: monitoring child 18198
           └─18198 /opt/backtrace/bin/coroner -c /etc/coronerd/coroner.cf daemon -f

   Nov 12 01:41:25 yolo01.linode-nj1.backtrace.io systemd[1]: Starting Coronerd Crash Report server...
   Nov 12 01:41:25 yolo01.linode-nj1.backtrace.io coronerd-crash-report[18189]:  * Starting Backtrace I/O database error reporting coroner
   Nov 12 01:41:25 yolo01.linode-nj1.backtrace.io coronerd-crash-report[18189]:    ...done.
   Nov 12 01:41:25 yolo01.linode-nj1.backtrace.io systemd[1]: Started Coronerd Crash Report server.
   ```

## Server Requirements

- Ensure that `ulimit -n` is set to at least 131072 by running the following command:

  ```bash
  # 18172 is the pid of the main coronerd process (see above)
  $ cat /proc/18127/limits | grep "open files" | tr -s ' ' | cut -d " " -f 4
  524288
  ```

- Check coronerd's memory and CPU usage with the `top` command.

- Check disk space usage.

- Verify the correct storage path.

## Error Submission Flow

1. Test the end-to-end error flow.
2. Submit and reprocess a test error.
3. Submit an error.
4. Check for a sane response.
5. Retrieve `objid/txid`.
6. Query coronerd for this `objid`.
7. Compare the returned results.
8. Submit a symbol file.
9. Reprocess and ensure symbolification.

## Symbolification

- Ensure that the uploaded symbols count/list matches the old server.
- Ensure that the missing symbols count/list matches the old server.
- If using custom symbol servers:
  - Verify that the symbol server configs are present.
  - Ensure that the configs are not labeled as "Backtrace Server".
  - Check if the whitelist/blacklist/skiplist is brought over.
  - Verify that the failure/success counts look good.
  - Check if Symbold is not logging anything irregular in syslog/journalctl.
  - Force Symbold to test a download of a known good symbol.

## General UI

- Confirm that the Coronerd/console is updated in **Help** > **About**.
- Verify that the triage view for each project loads correctly.
- Visit each config applet and make sure they all open correctly.

## Login/SSO

- Ensure that user accounts are brought over and able to login.
- If using SSO:
  - Verify that the configuration matches. Check if the option to configure SSO in the UI is present and does not return errors when navigated to.
  - Check if the **Login via SSO** button is available.
  - Test an SSO login.
  - Test an invitation request and confirm both the receipt of the email and the functioning of the link.

## Network/Endpoints/Certs

- Ensure that the server has the same listeners set up.
- Verify that the SSL config matches up on each SSL-configured listener.
- Make sure the proper DNS name is set up on the necessary endpoints.

## Misc. Services

- Verify that link sharing is functioning (if applicable).
- For each installed service:
  - Check its conf file in `/etc/backtrace/<servicename>/`.
  - Check for it in the morgue service status.
  - Verify that it's listening on its necessary port.

## Workflows/Reports

- Ensure that the workflow configurations are ported over.
- Verify that the workflows fire properly (check if the new server isn't having trouble talking to the third-party service).
- Check the links in notifications.
- If applicable, test manual ticket creation.
- If using reporting, make sure the reports are ported over.
- Send a test report.

## Data

- Verify that all projects exist with identical tokens as the old system.
- Check if all projects have an identical error count post-migration.
- Ensure that attribute indices are ported over.
- Verify that deduplication rules are ported over.
- Check if retention settings are ported over.
- Ensure that sampling settings are ported over.
