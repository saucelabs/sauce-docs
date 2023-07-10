---
id: client-usage
title: Coroner Client - Usage
sidebar_label: Client Usage
description: Interaction with the coronerd object store occurs either through the web console or the command-line tools.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Interaction with the coronerd object store can be done through the web console or the command-line tools. This section focuses on the coroner tool, a command-line client for interacting with the object store. It is straightforward but allows for complex queries and integrates efficiently into your terminal development environment.

## Initial Setup

### Coroner 0.12.0 or Newer

After adding a user to the object store, the user must log in to a server to interact with it.

For example, to initiate a session with the object store located at errors.company.com, use the following command:

```shell
$ coroner login https://errors.company.com
User: myuser
Password: **********
```

Once logged in, the user's credentials are cached locally. The password is not saved, but instead, a session token is used. The user can then interact with the server as specified in the "Basic Usage" section.

Additional options can be specified in `~/.coroner.cf` or a configuration file provided using the `-c` option.

For more information about `coroner.cf` files, see [Coroner Client Configuration](/error-reporting/advanced/coroner/client-getting-started/#configuration).

### Coroner 0.11.4 or Older

The coroner tool expects to find a configuration file named `.coroner.cf` in your home directory. An alternate configuration file can be specified with the `-c` option. For example, `coroner -c /tmp/testing.cf` forces coroner to use the configuration file `/tmp/testing.cf`.

The object store at corp.company.com is configured to store object snapshots for the projects `aclient`, `fastore`, `cronndbcacher`, `cacher`, and `squid`.

A project is a grouping of events, snapshots, and root causes. It can host multiple applications or a single application, depending on whether your team finds correlation of faults across applications useful.

With this minimal configuration file, you can interact with the object store through various coroner sub-commands.

For more information about `coroner.cf` files, see [Coroner Client Configuration](/error-reporting/advanced/coroner/client-getting-started/#configuration).

## Basic Usage

### Summary

The `summary` sub-command provides a quick summary of all fault activity across configured projects.

```shell
$ coroner summary
PROJECT          TRACES  GROUPS      ACTIVITY
aclient               9       2      2015-06-15 17:45 EDT [1w]
fastore             254      24      2015-06-19 17:23 EDT [8h]
cronndbcacher        64       8      2015-06-19 10:34 EDT [2d]
cacher              523     171      2015-06-20 11:53 EDT [1M]
squid              6269      44      2015-06-21 09:06 EDT [1h]
```

The above output shows that there are 6269 faults in the `squid` project, 44 of which were deemed to be unique. The last failure in `squid` occurred on June 21, 2015, at 09:06 EDT, which was 1 hour ago from the time the `coroner summary` command was invoked.

### List

The `list` sub-command allows you to issue queries and perform analysis on the coroner object store. The basic usage of `coroner list` is as follows:

```shell
$ coroner list []
coroner list aclient
```

The command `coroner list aclient` will output information on all faults that have ever occurred in the `aclient` project, grouped by uniqueness.

```shell
$ coroner list aclient
[42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f]
  Date: Mon Jun 15 17:24:26 2015 - Mon Jun 15 17:29:45 2015
  Occurrences: 8 (over 0 days)
  Classification:
    segv (8 buckets)
    null (8 buckets)
    stop (8 buckets)
  Frames:
    event_client_init ← aclient_event_client_thread

[a36e5ba7862a49e653a7f5c7dc508423c850521186d457c6473ccbb83ecbafa8]
  Date: Thu May 14 16:11:17 2015
  Occurrences: 1 (over 0 days)
  Classification:
    ill (1 buckets)
    stop (1 buckets)
  Frames:
    crash_handler ← evhttp_handle_request ← evhttp_get_body ←
      bufferevent_trigger_nolock_ ← bufferevent_readcb ←
      event_persist_closure ← event_process_active_single_queue ←
      event_process_active ← event_base_loop ← agg_core_free_thread ← main
```

The long string of hex digits is a group identifier, which is a unique SHA256 signature used to identify a group of similar faults. The content below the group signature provides summary data about the fault.

The fault with the identifier `42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f` occurred 8 times, starting on June 15, 2015, at 17:24:26, with the last occurrence on the same day at 17:29:45. All 8 occurrences of the fault involved application snapshots where the monitored process suffered a segmentation fault from a null dereference. Additionally, all instances of the fault contained faulted threads with the backtrace sequence of `event_client_init `being called on `aclient_event_client_thread`.

To view all occurrences of faults in this group, the `-i` option can be used to display instances in the group. The `-H1` option indicates that only the first group should be displayed with `coroner list`.

```shell
[42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f]
  Date: Mon Jun 15 17:24:26 2015 - Mon Jun 15 17:29:45 2015
  Occurrences: 8 (over 0 days)
  Classification:
    segv (8 buckets)
    null (8 buckets)
    stop (8 buckets)
  Frames:
    packrat_client_init ← aclient_packrat_client_thread
  Objects:
    [e6702f1063af4e1f8d2b20fa6444e7e5] (Mon Jun 15 17:29:45 2015)
    [e45fa54e3d6f4f34b72fa50b45daf45a] (Mon Jun 15 17:29:27 2015)
    [e9ca85077fa54f6baae0d645e5799bba] (Mon Jun 15 17:29:10 2015)
    [1e2f8d976d70493784d886055ed0fe16] (Mon Jun 15 17:28:54 2015)
    [8cd727dabcba4046b166a827bf2db6f5] (Mon Jun 15 17:25:17 2015)
    [b096491ee72f4ddc8428fad00a626def] (Mon Jun 15 17:25:01 2015)
    [cf513af02a494db58944b92bbfa0dabf] (Mon Jun 15 17:24:43 2015)
    [7ebdd696c2154130ad66e2563b120edc] (Mon Jun 15 17:24:26 2015)
```

The shorter sequence of hex characters is a unique identifier for each fault. They can be used to retrieve and edit snapshots, as well as share them. More information about viewing snapshots will be covered later.

#### Key-Value Attributes

To display key-value attributes, the `list` command can specify certain attributes to be exposed and used as factors for grouping faults. To print all hostname and tag attributes along with instances, use the `--expand` option. In the example below, `-i 5` is passed to display only the five most recent instances of a fault.

```shell
$ coroner list aclient --expand=hostname,tag -i5 -H1
[42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f]
  Date: Mon Jun 15 17:24:26 2015 - Mon Jun 15 17:29:45 2015
  Occurrences: 8 (over 0 days)
  Attributes:
    tag (1 buckets)
    hostname (1 buckets)
  Classification:
    segv (8 buckets)
    null (8 buckets)
    stop (8 buckets)
  Frames:
    packrat_client_init ← aclient_packrat_client_thread
  Objects:
    [e6702f1063af4e1f8d2b20fa6444e7e5] (Mon Jun 15 17:29:45 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [e45fa54e3d6f4f34b72fa50b45daf45a] (Mon Jun 15 17:29:27 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [e9ca85077fa54f6baae0d645e5799bba] (Mon Jun 15 17:29:10 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [1e2f8d976d70493784d886055ed0fe16] (Mon Jun 15 17:28:54 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [8cd727dabcba4046b166a827bf2db6f5] (Mon Jun 15 17:25:17 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [b096491ee72f4ddc8428fad00a626def] (Mon Jun 15 17:25:01 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [cf513af02a494db58944b92bbfa0dabf] (Mon Jun 15 17:24:43 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [7ebdd696c2154130ad66e2563b120edc] (Mon Jun 15 17:24:26 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
```

The `--frequency` option can be used to display histograms of all values associated with a key. For example, to request a histogram of all affected tag attributes for a group, use `coroner list aclient --expand=hostname,tag -i5 -H1 --frequency=tag`.

```shell
$ coroner list aclient --expand=hostname,tag -i5 -H1 --frequency=tag
[42572cdc2329eb2fe6f149506671328d5a963d76d6639c80b23cdcd0b644289f]
  Date: Mon Jun 15 17:24:26 2015 - Mon Jun 15 17:29:45 2015
  Occurrences: 8 (over 0 days)
  Attributes:
    tag (1 buckets)
      0.145                                          8 100.00% ███████████████
    hostname (1 buckets)
  Classification:
    segv (8 buckets)
    null (8 buckets)
    stop (8 buckets)
  Frames:
    packrat_client_init ← aclient_packrat_client_thread
  Objects:
    [e6702f1063af4e1f8d2b20fa6444e7e5] (Mon Jun 15 17:29:45 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [e45fa54e3d6f4f34b72fa50b45daf45a] (Mon Jun 15 17:29:27 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [e9ca85077fa54f6baae0d645e5799bba] (Mon Jun 15 17:29:10 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [1e2f8d976d70493784d886055ed0fe16] (Mon Jun 15 17:28:54 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [8cd727dabcba4046b166a827bf2db6f5] (Mon Jun 15 17:25:17 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [b096491ee72f4ddc8428fad00a626def] (Mon Jun 15 17:25:01 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [cf513af02a494db58944b92bbfa0dabf] (Mon Jun 15 17:24:43 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
    [7ebdd696c2154130ad66e2563b120edc] (Mon Jun 15 17:24:26 2015)
      Classification: segv null stop
      Attributes: tag=0.145 hostname=21.bm-aclient.prod.sin1
```

## Saving Preferences

To avoid passing commonly used options to `coroner list` and other `coroner` sub-commands for every invocation, you can use the default configuration block in your configuration file to specify certain options to always be set. Here's an example configuration:

```shell
[universe]
name=company
read=127.0.0.1:4097

[default]
list.frequency=environment,tag,dc,collection
list.expand=environment,tag,dc,collection,application,hostname
list.sort=hostname
list.instances=3
```

This specifies that whenever the `list` sub-command is invoked, it should have `--frequency=environment,tag,dc,collection`, `--expand=environment,tag,dc,collection,application,hostname`, `--sort=hostname`, and `--instances=3` prepended to the list of options supplied to the command-line.

The general form of the default configuration block is `.=`. For example, `X.Y=Z` specifies that if `coroner X` is specified, it should be interpreted as if it were `coroner X --Y=Z`.

## Examples

Here are some common use-cases:

### Sort Groups by Recent Activity

The `-R` option allows you to sort groups by the date of recent activity. For example: `coroner list project -R`.

### List All Ativity in The Last Week

The `--age` option can be used to filter groups in a recent time window. For example, `coroner list project --age=1w` lists all groups and faults with activity in the past week.

### Find Groups With a Certain Classification

The `--classifier` option is used to filter groups by classification. For example, `coroner list project --classifier=null` displays all faults that were classified as a NULL dereference. For a complete list of classifiers, visit the ptrace page.

### Find All Groups by a Callstack

The `--frames` option is used to specify a sequence of functions to search for. For example, `coroner list project --frames=A,B,C` finds all groups of faults that have a backtrace that matches the regular expression A, B, and C in that order. For example, `--frames=^ck_,^worker` would match a callstack of `ck_hs_put <-><-><-><-></-></-></-></->`.

### Aggregate Listed groups by Key-Value

The `--aggregate` option can be used to aggregate `coroner list` output. For example, `coroner list --aggregate=tag` aggregates all crashes resulting from a list by the tag attribute. It is also possible to aggregate by functions in a callstack by using `::frames`. For example, `coroner list --aggregate=::frames`.

### Download a Snapshot to Disk

The `coroner get` command can be used to view a snapshot. For example, `coroner get aclient e9ca85077fa54f6baae0d645e5799bba` opens the snapshot `e9ca85077fa54f6baae0d645e5799bba` of the `aclient` project locally. The `-o` option is used to store it to a local file. For example, `coroner get -o copy.btt aclient e9ca85077fa54f6baae0d645e5799bba` downloads the specified snapshot to `copy.btt`.

## Additional Information

For more information, refer to `coroner list --help`.
