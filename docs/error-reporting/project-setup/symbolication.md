---
id: symbolication
title: Symbolication
sidebar_label: Overview
description: Generate debug symbols to help debug error callstacks.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Native crash reports contain instruction addresses rather than symbolic debugging information. Symbolication resolves these addresses using the corresponding debug symbol files to produce a human-readable call stack that includes function names and, when available, source files and line numbers. 

## Why Are Symbols Required?

Release builds typically contain only the executable code required at runtime. The debugging metadata generated during compilation is stored separately in platform-specific symbol files rather than being embedded in the executable.

When a crash occurs, the crash report contains the instruction addresses for each stack frame along with module information. Without the appropriate symbol files, the call stack contains only unresolved memory addresses, for example:

```text
0x0000000104A91F28
0x0000000104A92370
0x0000000104A926B4
```

After the matching symbol files are available, Error Reporting resolves the same addresses into their corresponding symbols:

```text
LoginManager::Authenticate()
SessionManager::CreateSession()
MainViewController::OnLoginPressed()
```

Because symbol files are generated for a specific build, they must match the executable that produced the crash report. Error Reporting applies symbols only when the module filename and the embedded **Debug ID** (or **Code ID**) correspond to the binary referenced in the crash report.

## How Symbolication Works

Error Reporting symbolicates crash reports by matching the executable referenced in the crash report with the corresponding debug symbol files.

The symbolication workflow consists of the following steps:

1. The application is compiled, producing the executable and its corresponding debug symbol files.

2. The application is distributed while the symbol files are stored separately or uploaded to Error Reporting.

3. When a crash occurs, the crash report is submitted to Error Reporting with module information and binary identifiers.

4. Error Reporting compares the executable's **Debug ID** (or **Code ID**, depending on the platform) and module name with the uploaded symbol files.

5. If a matching symbol file is found, Error Reporting resolves the instruction addresses into symbolic function names and other available debugging information.

## Which Applications Require Symbols?

Debug symbols are primarily required for **native applications**, where crash reports contain instruction addresses that must be resolved using separate symbol files.

Applications running on managed runtimes, such as **Java** and **.NET**, generally include symbolic stack traces as part of the runtime and typically do not require separate symbol files.  

:::note
Native crash reporting integrations that commonly require debug symbols include: 
* Breakpad
* Crashpad
* Unreal Engine
* Other native crash reporting frameworks
:::


## Multiple Versions of the Same Executable

Error Reporting supports uploading symbol files for multiple versions of the same executable without overwriting previously uploaded symbols.

Each build contains a unique **Debug ID** (or **Code ID**), allowing Error Reporting to distinguish between different versions of the same executable even when they share the same filename. 

During symbolication, Error Reporting automatically selects the symbol file whose identifiers match those contained in the crash report. 

## Symbol Files by Platform

The type of debug symbol file depends on the target platform and toolchain.

| Sr. No. | Platform | Common Symbol Format |
| :-----: | -------- | -------------------- |
| 1 | Windows | `.pdb` |
| 2 | macOS | `.dSYM` |
| 3 | iOS | `.dSYM` |
| 4 | Android (Native) | Unstripped `.so` libraries or Breakpad symbols |
| 5 | Linux | ELF binaries with debug information or generated symbol files |

To learn about the symbol formats supported by each platform, see **[Understand Symbol Formats](/docs/error-reporting/symbols/symbol-formats.md)**.
