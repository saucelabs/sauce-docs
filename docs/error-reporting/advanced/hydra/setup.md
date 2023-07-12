---
id: setup
title: Hydra Setup
sidebar_label: Setup
description: Add Hydra in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

By default, Hydra looks for a configuration file at `~/.hydra.cf`.

Below is a sample configuration for the crash application:

```shell
[scm]
crash.map=/home/user/projects/crash/src
crash.map=object:^libck[\.-],/home/user/projects/ck
crash.map=function:^ck_,/home/user/projects/ck
crash.trigger=/home/user/projects/crash,version,git -C %s checkout -q %0

editor=vim +%l %s

[general]
alias_detection=true
collapse_threshold=3
```
