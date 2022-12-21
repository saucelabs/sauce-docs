---
id: attributes
title: Unity Attributes
sidebar_label: Attributes
description: Attributes reference for Unity.
---

This page defines the attributes that are available to customize error and crash reports for Unity.

## Attributes list

Attributes are additional metadata that can be attached to error and crash reports. You can use attributes to filter, aggregate, analyze, and debug errors in the Backtrace console.

All attributes listed below are captured by the Backtrace Unity SDK, although not all attributes are indexed by default. Non-indexed attributes cannot be used in queries. For more information about indexing, see [Indexing Attributes](/error-reporting/project-setup/attributes/).

:::note
You can also define custom attributes. For more information, see [Configuration](/error-reporting/platform-integrations/unity/configuration/#attributes-and-attachment-paths).
:::

### Indexed Attributes

| Name                          | Description                                                        | Format         | Type    |
| ----------------------------- | ------------------------------------------------------------------ | -------------- | ------- |
| `_compressed`                 | Indicates whether the object is compressed.                        | None           | Boolean |
| `_rxid`                       | The received identifier for the object.                            | UUID           | UUID    |
| `_tx`                         | The transaction identifier for the object.                         | None           | 64-bit  |
| `application`                 | The source app in fault.                                           | None           | String  |
| `callstack`                   | The signature of the callstack in fault.                           | Callstack      | String  |
| `callstack.files`             | A per-frame list of source files in fault.                         | Callstack      | String  |
| `callstack.functions`         | A per-frame list of functions in fault.                            | Callstack      | String  |
| `callstack.modules`           | A per-frame list of modules in fault.                              | Callstack      | String  |
| `classifiers`                 | The anomalous properties of the object.                            | Label          | String  |
| `cpu.boottime`                | The time when the system was booted.                               | None           | 64-bit  |
| `cpu.brand`                   | The processor brand.                                               | None           | String  |
| `cpu.count`                   | The number of processors on the system.                            | None           | 64-bit  |
| `descriptor.count`            | The number of file descriptors in the process table.               | None           | 64-bit  |
| `error.message`               | The error message associated with the event.                       | None           | String  |
| `fingerprint`                 | The signature of the primary fault.                                | SHA-256        | String  |
| `fingerprint;original`        | The query for the original fingerprint.                            | None           | String  |
| `gc.heap.used`                | The amount of memory used by the garbage collection (GC) heap.     | Bytes          | 64-bit  |
| `guid`                        | The unique identifier for a user.                                  | Bytes          | 64-bit  |
| `hostname`                    | The hostname of the system in fault.                               | Hostname       | String  |
| `lang.name`                   | The programming language.                                          | None           | String  |
| `lang.version`                | The version of the programming language.                           | None           | String  |
| `object.size`                 | The size of the object.                                            | Bytes          | 64-bit  |
| `process.age`                 | The number of seconds that the application has been running for.   | Seconds        | 64-bit  |
| `sched.cs.involuntary`        | The number of involuntary context switches.                        | None           | 64-bit  |
| `sched.cs.voluntary`          | The number of voluntary context switches.                          | None           | 64-bit  |
| `system.memory.active`        | The amount of memory recently used.                                | Kilobytes      | 64-bit  |
| `system.memory.buffers`       | The amount of temporary storage for raw disk blocks.               | Kilobytes      | 64-bit  |
| `system.memory.cached`        | The size of the buffer cache for files.                            | Kilobytes      | 64-bit  |
| `system.memory.dirty`         | The amount of memory waiting to get written back to the disk.      | Kilobytes      | 64-bit  |
| `system.memory.free`          | The amount of free memory.                                         | Kilobytes      | 64-bit  |
| `system.memory.inactive`      | The amount of memory that has not been recently used.              | Kilobytes      | 64-bit  |
| `system.memory.reserved`      | The amount of reserved system memory.                              | Kilobytes      | 64-bit  |
| `system.memory.temp`          | The amount of temporarily allocated memory.                        | Kilobytes      | 64-bit  |
| `system.memory.unused`        | The amount of unused memory.                                       | Kilobytes      | 64-bit  |
| `system.memory.slab`          | The amount of kernel memory allocated to the data structure cache. | Kilobytes      | 64-bit  |
| `system.memory.swap.cached`   | The amount of memory still backed by swap.                         | Kilobytes      | 64-bit  |
| `system.memory.swap.free`     | The amount of unused swap space.                                   | Kilobytes      | 64-bit  |
| `system.memory.swap.total`    | The total amount of swap space.                                    | Kilobytes      | 64-bit  |
| `system.memory.total`         | The total amount of memory.                                        | Kilobytes      | 64-bit  |
| `system.memory.vmalloc.total` | The total amount of virtual memory allocation.                     | Kilobytes      | 64-bit  |
| `timestamp`                   | The timestamp of fault.                                            | UNIX timestamp | 64-bit  |
| `timestamp.received`          | The received timestamp of fault.                                   | UNIX timestamp | 64-bit  |
| `uname.machine`               | The processor architecture.                                        | None           | String  |
| `uname.sysname`               | The operating system name.                                         | None           | String  |
| `uname.version`               | The version of the operating system.                               | None           | String  |
| `vm.pte.size`                 | The size of the page table entries.                                | Kilobytes      | 64-bit  |
| `vm.rss.peak`                 | The size of peak resident memory.                                  | Kilobytes      | 64-bit  |
| `vm.rss.size`                 | The size of resident memory.                                       | Kilobytes      | 64-bit  |
| `vm.shared.size`              | The size of the shared library.                                    | Kilobytes      | 64-bit  |
| `vm.stack.size`               | The size of the stack segment.                                     | Kilobytes      | 64-bit  |
| `vm.swap.size`                | The size of swap memory.                                           | Kilobytes      | 64-bit  |
| `vm.vma.peak`                 | The size of peak virtual memory.                                   | Kilobytes      | 64-bit  |
| `vm.vma.size`                 | The size of virtual memory.                                        | Kilobytes      | 64-bit  |

### Non-indexed Attributes

| Name                                | Description                                                                                                   | Format       | Type         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| `api.compatibility`                 | The .NET framework and version compatible with the app. Defined in the Player Settings for the Unity project. | User Defined | User Defined |
| `application.background`            | Indicates whether the app can run in the background.                                                          | User Defined | User Defined |
| `application.company.name`          | Your company name. Defined in the Player Settings for the Unity project.                                      | User Defined | User Defined |
| `application.data_path`             | The app's directory path.                                                                                     | User Defined | User Defined |
| `application.debug`                 | Indicates whether the build is a development build.                                                           | User Defined | User Defined |
| `application.editor`                | Indicates whether the app instance is run via the Unity Editor.                                               | User Defined | User Defined |
| `application.focused`               | Indicates whether the app has focus.                                                                          | User Defined | User Defined |
| `application.id`                    | The name of the app or product name. Defined in the Player Settings for the Unity project.                    | User Defined | User Defined |
| `application.installer.name`        | The name of the store or package that installed the app.                                                      | User Defined | User Defined |
| `application.internet_reachability` | The type of internet reachability currently possible on the device running the app.                           | User Defined | User Defined |
| `application.mobile`                | Indicates whether the app runs on a mobile device.                                                            | User Defined | User Defined |
| `application.playing`               | Indicates whether the app is currently playing.                                                               | User Defined | User Defined |
| `application.sandboxType`           | The sandbox type.                                                                                             | User Defined | User Defined |
| `application.session`               | The current game or app session.                                                                              | User Defined | User Defined |
| `application.system.language`       | The system language.                                                                                          | User Defined | User Defined |
| `application.temporary_cache`       | The directory path of temporarily cached data.                                                                | User Defined | User Defined |
| `application.unity.version`         | The runtime version of Unity.                                                                                 | User Defined | User Defined |
| `application.url`                   | The URL used to open the application.                                                                         | User Defined | User Defined |
| `application.version`               | The app's build version. Defined in the Player Settings for the Unity project.                                | User Defined | User Defined |
| `audio.supported`                   | Indicates whether audio is supported.                                                                         | User Defined | User Defined |
| `backtrace.version`                 | The version of the Backtrace SDK.                                                                             | User Defined | User Defined |
| `battery.level`                     | The current battery level.                                                                                    | User Defined | User Defined |
| `battery.status`                    | The current status of the device's battery.                                                                   | User Defined | User Defined |
| `cpu.frequency`                     | The frequency of the device's central processing unit (CPU) in megahertz (MHz).                               | User Defined | User Defined |
| `device.manufacturer`               | The manufacturer of the device running the app.                                                               | User Defined | User Defined |
| `device.model`                      | The model of the device running the app.                                                                      | User Defined | User Defined |
| `device.name`                       | The name of the device running the app. Defined by the end user.                                              | User Defined | User Defined |
| `device.type`                       | The broad type of device.                                                                                     | User Defined | User Defined |
| `error.type`                        | A categorization of the error that generated a report.                                                        | User Defined | User Defined |
| `graphic.driver.version`            | The graphics API type and driver version used by the graphics device.                                         | User Defined | User Defined |
| `graphic.id`                        | The identifier code of the graphics device.                                                                   | User Defined | User Defined |
| `graphic.memory`                    | The total amount of graphics memory.                                                                          | User Defined | User Defined |
| `graphic.multithreaded`             | Indicates whether the graphics processing unit (GPU) is multithreaded.                                        | User Defined | User Defined |
| `graphic.name`                      | The name of the graphics processing unit (GPU) or graphics card.                                              | User Defined | User Defined |
| `graphic.shader`                    | The shader capability level of the graphics device.                                                           | User Defined | User Defined |
| `graphic.topUv`                     | Indicates whether UV coordinates start at the top.                                                            | User Defined | User Defined |
| `graphic.type`                      | The graphics API type used by the graphics device.                                                            | User Defined | User Defined |
| `graphic.vendor`                    | The vendor of the graphics device.                                                                            | User Defined | User Defined |
| `graphic.vendor.id`                 | The identifier code for the vendor of the graphics device.                                                    | User Defined | User Defined |
| `mono.heap`                         | The amount of memory allocated to the managed heap.                                                           | User Defined | User Defined |
| `mono.used`                         | The amount of memory used by the managed heap.                                                                | User Defined | User Defined |
| `scene.active`                      | The name of the active scene.                                                                                 | User Defined | User Defined |
| `scene.buildIndex`                  | The build index of the active scene.                                                                          | User Defined | User Defined |
| `scene.count`                       | The number of scenes currently loaded in your project at the time a report is sent.                           | User Defined | User Defined |
| `scene.count.build`                 | The number of scenes added in Build Settings for the Unity project.                                           | User Defined | User Defined |
| `scene.handle`                      | The number of handles in the scene.                                                                           | User Defined | User Defined |
| `scene.isDirty`                     | Indicates whether the active scene has any modifications.                                                     | User Defined | User Defined |
| `scene.isLoaded`                    | Indicates whether the active scene is loaded.                                                                 | User Defined | User Defined |
| `scene.name`                        | The name of the active scene at the time the report is sent.                                                  | User Defined | User Defined |
| `scene.path`                        | The path to the scene.                                                                                        | User Defined | User Defined |
| `scripting.backend`                 | The scripting backend. Defined in the Player Settings for the Unity project.                                  | User Defined | User Defined |
| `uname.family`                      | The operating system family running the app.                                                                  | User Defined | User Defined |
| `uname.fullname`                    | The name and version of the operating system.                                                                 | User Defined | User Defined |
