---
id: server-advanced
title: Coroner Server Advanced
sidebar_label: Server Advanced
description: Display additional histograms in the web UI.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

If you are using a hosted version of `coronerd`, reach out to us to display additional histograms in the web UI. If you are using an on-premise version of `coronerd`, you'll need to complete the following steps to display additional histograms in the web UI:

1. Open `/etc/coronerd/coronerd.conf` on the `coronerd` machine.
2. In this configuration file, find the `http-console` object. Inside the `http-console` object, locate the `columns` object.

   ```json
   "http-console" : {
       "columns" : {
           "expand" : [
               "hostname",
               "application",
               "version",
               "dc"
           ],

           "list" : [
               "application",
               "version",
               "dc"
           ]
       },
   }
   ```

   The `columns` object contains two JSON arrays: `expand` and `list`. The elements in the `list` array are displayed on the project page. It is recommended to add any histograms you'd like to search for across error groups to this array. The elements in the `expand` array are displayed on the group page. It is recommended to add any histograms you'd like to view on a per-error basis to this array.

3. After updating the configuration, restart the `coronerd` service:

   ```bash
   $ /etc/init.d/coronerd restart
   ```

Now you see the added histograms on the relevant pages.

## Disable SSL

By default, `coronerd` is configured to encrypt traffic. If you are using a hosted version of `coronerd`, reach out to us to disable SSL. If you wish to turn off SSL on an on-premise version of `coronerd`, follow these steps:

1. Remove any relevant `ssl` sections in `/etc/coronerd/coronerd.conf`. You'll find `ssl` objects in the following JSON objects in the configuration file:

   - The `read` object in the `listener` object: The interface used to pull down snapshots.
   - The `write` object in the `listener` object: The interface used to submit snapshots.
   - `http-console`: The web interface.

   ```json
   {
       "console" : {
           "path" : "/var/run/coronerd/coronerd.socket",
           "bind" : {
               "hostname" : "0.0.0.0",
               "service" : "9040"
           },
           "backlog" : 16,
           "ssl" : {
               "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",
               "key" : "/etc/coronerd/ssl/key.pem"
           }
       },
       "listener" : {
           "write" : {
               "http_bind" : [
                   {
                       "hostname" : "0.0.0.0",
                       "service" : "6097",
                       "concurrency" : 2000
                   }
               ],
               "https_bind" : [
                   {
                       "hostname" : "0.0.0.0",
                       "service" : "6098",
                       "concurrency" : 2000
                   }
               ],
               "threads" : 1,
               "ssl" : {
                   "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",
                   "key" : "/etc/coronerd/ssl/key.pem"
               }
           },
           "read" : {
               "bind" : [
                   {
                       "hostname" : "0.0.0.0",
                       "service" : "4097"
                   }
               ],
               "threads" : 1,
               "ssl" : {
                   "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",
                   "key" : "/etc/coronerd/ssl/key.pem"
               }
           },
           "http-console" : {
               "bind" : [
                   {
                       "hostname" : "0.0.0.0",
                       "service" : "443",
                       "concurrency" : 1000
                   }
               ],
               "columns" : {
           //...
               },
               "threads" : 1,
               "ssl" : {
                   "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",
                   "key" : "/etc/coronerd/ssl/key.pem"
               }
           }
       }
   }
   ```

2. Restart `coronerd` after every configuration change.

   ```bash
   /etc/init.d/coronerd restart
   ```

When configuring the `coroner` client, refer to the [Client Install Configuration | Unsecured Communications](/error-reporting/advanced/coroner/client-getting-started/#configuration-for-unsecured-communications) documentation for instructions on how to configure the `universe` section.
