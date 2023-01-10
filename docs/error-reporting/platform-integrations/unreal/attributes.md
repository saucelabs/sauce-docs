---
id: attributes
title: Unreal Engine Attributes
sidebar_label: Attributes
description: Attributes reference for Unreal Engine.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This page defines the attributes that are available to customize error and crash reports for Unreal Engine.

## Attributes list

Attributes are additional metadata that can be attached to error and crash reports. You can use attributes to filter, aggregate, analyze, and debug errors in the Backtrace console.

| Name               | Unreal Property                | Description                                                        | Format    | Type       |
| ------------------ | ------------------------------ | ------------------------------------------------------------------ | --------- | ---------- |
| `application`      |                                | The name of the crashing object.                                   | None      | String     |
| `callstack`        |                                | The callstack in fault.                                            | Callstack | String     |
| `classifiers`      |                                | The minidump exception codes.                                      | Label     | String     |
| `cpu.count`        |                                | The number of processors on the system.                            | None      | 64-bit     |
| `error.message`    | `ErrorMessage`                 | The error message associated with the event.                       | None      | String     |
| `fault.address`    |                                | The memory address being accessed at the time of crash.            |           |
| `fingerprint`      |                                | The signature of the primary fault.                                | SHA-256   | String     |
| `guid`             | `MachineId`                    | The machine identifier.                                            | Bytes     | 64-bit     |
| `hostname`         |                                | The hostname of the system in fault.                               | Hostname  | String     |
| `process.age`      | `SecondsSinceStart`            | The number of seconds that the application has been running for.   | Seconds   | 64-bit     |
| `uname.machine`    |                                | The processor architecture.                                        | None      | String     |
| `uname.sysname`    |                                | The operating system name.                                         | None      | String     |
| `uname.version`    |                                | The version of the operating system.                               | None      | String     |
| `vm.rss.available` | `MemoryStats.TotalPhysical`    | Available physical memory.                                         | Kilobytes | 64-bit     |
| `vm.rss.peak`      | `MemoryStats.PeakUsedPhysical` | Peak resident memory usage.                                        | Kilobytes | 64-bit     |
| `vm.rss.size`      | `MemoryStats.UsedPhysical`     | Resident memory usage.                                             | Kilobytes | 64-bit     |
| `vm.vma.available` | `MemoryStats.TotalVirtual`     | Available virtual memory.                                          | Kilobytes | 64-bit     |
| `vm.vma.peak`      | `MemoryStats.PeakUsedVirtual`  | Peak virtual memory usage.                                         | Kilobytes | 64-bit     |
| `vm.vma.size`      | `MemoryStats.UsedVirtual`      | Virtual memory usage.                                              | Kilobytes | 64-bit     |
|                    | `bAllowToBeContacted`          | Indicates whether the user wants to be contacted about the error.  | Bitmap    | Boolean    |
|                    | `CrashDumpMode`                | Indicates whether the crash dump is a full dump or a partial dump. | Integer   | uint8      |
|                    | `DescriptionCrashGuid`         | The unique identifier associated for the crash report.             | String    | Dictionary |
|                    | `ExecutableName`               | The name of the game's executable file.                            | String    | Dictionary |
|                    | `GameName`                     | The name of the Unreal game.                                       | String    | Dictionary |
|                    | `IsAssert`                     | Indicates whether the crash was caused by an assert failure.       | Bitmap    | Boolean    |
|                    | `IsEnsure`                     | Indicates whether the crash was caused by an ensure failure.       | Bitmap    | Boolean    |
|                    | `IsInternalBuild`              | Indicates whether the error occurred in an internal engine build.  | Bitmap    | Boolean    |
|                    | `IsPerforceBuild`              | Indicates whether the error occurred in a Perforce engine build.   | Bitmap    | Boolean    |
|                    | `ProcessId`                    | The process identifier.                                            | Integer   | uint64     |
|                    | `UserActivityHint`             | The user's activity when the error occurred, if available.         | String    | Dictionary |

## Add Custom Attributes

To add custom crash properties to be included in your error and crash reports, you must add them as custom attributes for each individual platform.

Custom attributes are not indexed by default and therefore cannot be used in queries until they've been indexed. For more information about indexing, see [Indexing Attributes](/error-reporting/project-setup/attributes/).

<Tabs>
<TabItem value="windowslinux" label="Windows and Linux" default>

You can add custom attributes with the Unreal Engine C++ API, by using `FGenericCrashContext::SetGameData` to add metadata to the crash context.

```c++
static void SetGameData
(
    const FString & Key,
    const FString & Value
)
```

For more information, see [SetGameData](https://docs.unrealengine.com/4.27/en-US/API/Runtime/Core/GenericPlatform/FGenericCrashContext/SetGameData/).

</TabItem>
<TabItem value="android" label="Android">

Add the following to your initialization code:

```
TMap<FString, FString> BacktraceAttributes;
BacktraceAttributes.Add("key", "value");

BacktraceIO::FInitializeBacktraceClient(BacktraceAttributes, Attachments);
```

</TabItem>
<TabItem value="ios" label="iOS">

- Swift:
  ```swift
  BacktraceClient.shared?.attributes = ["foo": "bar", "testing": true]
  ```
- Objective-C:
  ```objc
  BacktraceClient.shared.attributes = @{@"foo": @"bar", @"testing": YES};
  ```

You can also specify unique sets of attributes for a specific report with the `willSend` method of `BacktraceDelegate`. For more information, see [Events Handling](https://github.com/backtrace-labs/backtrace-cocoa#documentation-events-handling).

</TabItem>
</Tabs>
