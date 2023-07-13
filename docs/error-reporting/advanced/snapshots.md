---
id: snapshots
title: Snapshot Generation
sidebar_label: Snapshot Generation
description: Generate snapshots by calling Backtrace.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

You generate the snapshot by calling `/opt/backtrace/bin/ptrace`. The most basic form of this call is `/opt/backtrace/bin/ptrace`, but in practice, you want to include the flags `--application=`, `--kv=`, and `-O` to specify the output location.

## Submitting a Snapshot to Coroner

The basic format for submitting snapshots to Coroner via curl/https is:

```shell
curl --data-binary @/path/to/snapshot.btt https://yourcompany.sp.backtrace.io:6098/post?token=your_submission_token
```

## Script to Generate and Submit Snapshot

You need to customize this script to populate:

- Endpoint (for example, https://yourcompany.sp.backtrace.io:6098)
- Application name
- Submission token
- Attributes (using dc and version as examples)
- btt_prefix and btt (folder and name where the .btt snapshot is temporarily saved).

```bash
#!/bin/bash

export LD_LIBRARY_PATH="/opt/backtrace/lib64:/opt/backtrace/lib:$LD_LIBRARY_PATH:/usr/local/lib:/usr/lib:/usr/lib64:/lib:/usr/local/lib64/"
export PATH="/opt/backtrace/bin:$PATH"

# Customize these for your endpoint and application
ENDPOINT="https://yourcompany.sp.backtrace.io:6098"
APPLICATION="yourapp"
TOKEN="yourtoken" # your submission token

# Gather your KVs here
DC="datacenter_name"
VERSION="version"
KV="dc:${DC},version:${VERSION}"

BTT_PREFIX="/var/backtrace/${APPLICATION}"
BTT="${BTT_PREFIX}/${APPLICATION}"
PTRACE=/opt/backtrace/bin/ptrace
# Make core directory
mkdir -p ${BTT_PREFIX}
if [ $? -ne 0 ] ; then
   echo "Failed to create ${BTT_PREFIX}"
   exit 1
fi

FILE=`$PTRACE --load= --application=${APPLICATION} --kv=${KV} -O ${BTT} ${1}`
RT="$?"

if test "$RT" = "0" && test -f "$FILE"; then
      curl --data-binary @${FILE} ${ENDPOINT}/post?token=${TOKEN}
      rm -f ${FILE}
else
      echo "Unknown crash condition"
fi
```
