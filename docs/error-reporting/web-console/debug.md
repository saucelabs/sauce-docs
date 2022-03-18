---
id: debug
title: Debug
sidebar_label: Debug
description: Allows you to view a specific error report, including a symbolicated call stack, system and custom attributes, and other useful information.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Web Debugger
The Backtrace Web Debugger allows you to view the error or state of archived dumps from crashes or running processes in the convenience of your web browser. The information you see in the debugger is dependent on the source of the crash (a script, a minidump file, or the Backtrace proprietary format) and the data available (for example, threads, variables, memory segments, etc).

## Overview
Below is a screenshot of the type of data you will see in the Debugger tool.  

<img src={useBaseUrl('img/error-reporting/console-views/debug-view.png')} alt="" />

The Debugger contains a few different sections of data to analyze. We outline them below:

<img src={useBaseUrl('img/error-reporting/console-views/debug-view-overview.png')} alt="" />

Depending on the type of information in the crash report, the Debugger will show different data. For example, with minidump files, we can list a set of Threads in the crash report, the call stack of the selected thread, attributes, environment information, modules loaded, and missing symbol details.

For Backtrace core dump files (BTT), we add automated security and bug analysis, variable information and more. Place your cursor over the screenshot to see a quick summary of the available panes.

## More Details
### Introduction
The web debugger is organized into several sections. Whenever a variable or thread is clicked, making the URL shareable. For example, you can share a URL directly to an interesting variable or thread in a dump.

### Attributes Section
This pane is present for dump formats such as minidump. It contains a list of all attributes extracted from the dump and supplied during dump submission. Some of these attributes may already be indexed.

### Annotations Section
This pane is present for dump formats such as minidump. This contains a tree list of other interesting data derived from the dump. This can include clues to the root cause of the crash, the list of loaded libraries, missing debug symbols and more.

### General Information Section
This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. This includes memory map information, system information, register state and more. The Process tab includes deep introspection into the global state of the faulting process, including things like memory allocator metadata such as recently reclaimed items and more (depends on the allocator).

### Callstack Section
The callstack pane contains the callstack of the currently selected thread. Mousing over a frame will reveal additional interesting information about it. If a frame has an orange highlight, it is deemed more likely to be relevant to the crash.

### Global Variables Section
This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. It contains the values of any global variables that have been serialized.

### Registers Section
This pane is present for dump formats such as minidump. It contains the register values for the currently selected frame.

### Thread Section
This pane contains a list of all threads in the dump. Threads that have crashed have a red icon next to them. Threads that have an arrow symbol next to them can be expanded to more threads with an identical callstack. In other words, threads are grouped into a tree if they have identical callstacks in order to ease navigating lots of threads.


### Variable Context Section
This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. It contains auxiliary information about a variable including type information, memory allocator state (size of allocation a variable points to, whether it is active or freed and much more).

### Variable Section
This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. Variables with a red box are currently freed. Variables with a green box are currently allocated. Variables with a red circle have warnings attached to them, click on the variable to expand it and see any potential warnings.

### Warnings Section
This pane is present for the Backtrace snapshot format used on UNIX and UNIX-like systems. Use the prev and next button to browse warnings. Press the Select button to jump to a warning. Alternatively, check the Autoselect variable button to automatically jump to a variable that has a warning attached to it. Warnings include things like invalid memory allocator state, automated detection of variables accessed when the crash occurred and more.
