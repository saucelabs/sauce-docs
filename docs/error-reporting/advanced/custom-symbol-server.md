---
id: custom-symbol-server
title: Building a Custom Symbol Server
sidebar_label: Building a Custom Symbol Server
description: Backtrace integrations using minidumps require symbol files to generate valuable callstack information.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace integrations using minidumps require symbol files to generate valuable callstack information. One straightforward way to share these symbol files with Backtrace, available for enterprise customers, is by integrating a custom symbol server.

To meet Backtrace's requirements, the custom symbol server must:

- Follow Microsoft's standard symbol structure (that is, `<url>/<object_name>/<debug_id>/<file>`).
  - Use tools like Windows symstore to generate files in the required structure.
- Have a web frontend to serve the files via HTTP(S). Popular options include nginx, AWS, and Google Cloud buckets.
- Allow your Backtrace instance to access the server (firewall and network rules may need adjustments).
- Any file compression must utilize the CAB (Cabinet) compression mechanism. Backtrace does not support any other compression mechanisms over symbol servers at this time.
  - Note that HTTP compression is also supported.

After generating symbol files from a build, you can use Windows symstore to store the files in the Microsoft standard symbol store structure. An example invocation of symstore looks like this:

```shell
<WindowsSDKDir>\Debuggers\x86\symstore add /r /f <TargetDir>*.* /s <C:\path\to\my\custom\symstore> /t "<AppName>" /c "<Comment>" /v "<version>"
```

Make sure to replace the values in angle brackets with the appropriate information.

Here's an example with a test application's values and output:

```shell
c:\Program Files (x86)\Windows Kits\10\Debuggers\x86>symstore add /f C:\Users\mbreaux\source\repos\ConsoleApplication1\Debug\*.* /s c:\path\to\my\custom\symstore /t "Test" /c "Test" /v "1.2.3.4"
Finding ID... 0000000004

SYMSTORE: Number of files stored = 2
SYMSTORE: Number of errors = 0
SYMSTORE: Number of files ignored = 0
```

You can find more information about this tool in [Microsoft's documentation](https://docs.microsoft.com/en-us/windows/win32/debug/symbol-servers-and-symbol-stores). It may also be beneficial to know that you can add this as a post-build step in Visual Studio. Just add the appropriate command in the project's property pages, under **Build Events > Post-Build Event > Command Line**.

The remaining steps are to upload those files to the server and then configure the custom symbol server in Backtrace's UI. For more information, see [Connecting to Symbol Servers](/error-reporting/project-setup/symbol-servers/).
