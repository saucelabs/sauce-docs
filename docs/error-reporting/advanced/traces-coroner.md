---
id: traces-coroner
title: Submitting Traces to Coroner
sidebar_label: Submitting Traces to Coroner
description: Generate traces using ptrace and submitting them to the object store using coroner.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Here, we demonstrate commands to generate traces using `ptrace` and submit them to the object store using `coroner`.

## Snapshot

Traces are generated using the `ptrace` command. The command offers a wide range of options that can be viewed with `ptrace --help`, but for now, we focus on some basic scenarios.

The simplest way to generate a trace from a PID is: `ptrace`. It creates a trace file ending in .btt in the current working directory. Later, these traces are sent to coroner for viewing.

Most of the time, you need to associate KVs with the trace:

```shell
ptrace --kv=location:NYC,environment:development
```

## Submission

Once snapshots are generated using `ptrace`, they need to be submitted to `coroner`. This can be done manually by using `coroner put` or automatically with the coroner daemon.

### Manual

The basic format for submitting snapshots to coroner is:

```shell
coroner put <project_name> <token_name> /path/to/snapshot.btt
```

If you are using a self-signed certificate on the coroner server, pass the `-k` flag to `coroner put`:

```shell
coroner put -k project_name token_name /path/to/snapshot.btt
```

For more information about coroner, see [Coroner Usage](/error-reporting/advanced/coroner/client-usage).

## Daemon

`coroner` can also be run in daemon mode, which allows it to watch a folder and automatically submit any `*.btt` trace files that are saved to that folder.

### Configuration

The `[daemon]` section in `coroner.cf` can specify project-level folder watch settings, including the path to a folder to watch and the associated token.

```
[daemon]
project-alpha.root=/home/traces/project-alpha
project-alpha.token=project-alpha
project-beta.root=/home/traces/project-beta
project-beta.token=project-beta
```

### Execution

To start the coroner client in daemon mode, run `coroner daemon`. To run in foreground mode, run `coroner daemon -f`.
