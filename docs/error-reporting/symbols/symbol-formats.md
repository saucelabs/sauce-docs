---
id: symbol-formats
title: Understanding Symbol Formats
sidebar_label: Understanding Symbol Formats
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Debug symbol formats vary by platform, compiler, and build toolchain. Each platform generates its own type of symbol file, which Backtrace uses to resolve native crash reports into readable call stacks.

Information about symbols and other debugging artifacts for specific integrations, such as [JavaScript source maps](/docs/error-reporting/platform-integrations/source-map.md), [Unity](/docs/error-reporting/platform-integrations/unity/configuration.md#capturing-native-crashes), and game consoles, is available in their respective integration documentation.

## Windows

Windows applications use **Program Database (PDB)** files to store debugging information. PDB files contain the mapping between compiled machine code and the source code, allowing Error Reporting to resolve function names, source files, and line numbers when processing crash reports.

For 64-bit applications, upload both the **PDB file** and the corresponding executable (.exe) or dynamic library (.dll) built with the same application version.

### Generate PDB files in Visual Studio

Visual Studio automatically generates PDB files for projects built using the Debug configuration. If you need to generate PDB files for a Release build or a custom build configuration, enable debug information in the project settings.

To generate PDB files for **Release** builds or a custom build configuration:

1. Open your project in **Visual Studio**. In the **Solution Explorer** pane, right-click your project and select **Properties**.

2. Select the build configuration for which you want to generate symbols, such as **Release**, then open the **Linker** settings and enable **Generate Debug Info** by setting it to **Yes (/DEBUG)**.

3. Save the changes by clicking **Apply** and **OK**.

4. Rebuild your project. After the build completes, Visual Studio generates a matching `.pdb` file in the project's output directory alongside the compiled executable or library.

After the build completes, the generated .pdb file is typically located in the project's output directory alongside the compiled executable or DLL.

#### Supported Symbol Files

* `.pdb`

* Matching `.exe` (64-bit applications)

* Matching `.dll` (64-bit applications)

## Apple (macOS and iOS)

Applications built for **macOS** and **iOS** store debugging information in **dSYM (Debug Symbol)** files. These files contain information that maps the compiled application back to the source code, including function names, source files, and line numbers.

When a crash report is received, Error Reporting uses the matching dSYM file to convert raw memory addresses into readable stack traces, helping identify where and why the application crashed.

### Generate dSYM Files in Xcode

To generate dSYM files:

1. Open your project in **Xcode** and select your application target.
2. Open the **Build Settings** tab and search for **Debug Information Format**.
3. Set **Debug Information Format** to **DWARF with dSYM File** for the desired build configuration (such as **Release**).
4. Build or archive your application.
5. After the build completes, Xcode automatically generates a matching `.dSYM` bundle, which can be uploaded to Error Reporting.

This keeps the instructions concise while still covering everything the user needs to do.

:::note
The dSYM file must correspond to the exact version of the application that generated the crash report. Uploading a dSYM from a different build version may prevent Error Reporting from symbolizing crash reports correctly.
:::

### Locate dSYM Files

The location of the generated dSYM file depends on how the application was built:

| Build Type | dSYM File Location |
|------------|--------------------|
| **Standard Build** | The dSYM file is stored in the **Derived Data** directory configured in **Xcode > Settings (Preferences) > Locations**. |
| **Archived Build** | The dSYM file is stored inside the generated **`.xcarchive`** package. |

:::note
If you cannot locate the dSYM file, use the following command in Terminal to search your system: `mdfind *.dSYM` This command returns the locations of all dSYM bundles available on your Mac.
:::

## Android

Applications that include **native code** store debugging information in native shared library `.so` files. Error Reporting uses these files to symbolize native Android crash reports by resolving memory addresses into function names and source code locations.

### Generate Native Symbol Files

To generate native symbol files:

1. Open your project in **Android Studio** and build the application with native debugging information enabled.

2. Build your application using the desired build variant, such as **Debug** or **Release**.

3. After the build completes, locate the generated native shared library `.so` files.

4. Upload the generated `.so` files to Error Reporting.

### Locate Native Symbol Files

The generated `.so` files are typically located in one of the following locations:

* Inside the application's **APK** or **Android App Bundle (AAB)**.
* In the project's native build output directory, depending on your build configuration.

:::note
Upload the unstripped `.so` files whenever possible, as they contain the debugging information required to generate readable stack traces.
:::

### **Supported Symbol File**

```text
.so
```

## Linux

Linux applications store debugging information in **ELF** files or **Breakpad `.sym`** files. Error Reporting supports both formats, but uploading the original **unstripped** executable or shared library is recommended because it provides more detailed debugging information, such as local variables and richer stack traces.

:::note
When uploading an unstripped executable or shared library to Error Reporting, the file must be packaged in an archive (such as a ZIP or TAR file). Unarchived binaries cannot be uploaded directly.
:::

### Generate ELF File

To generate an ELF file with debug information:

1. Build your application with debugging information enabled using your compiler.

2. For applications compiled with **GCC**, include the `-g` compiler option during the build process.

3. Package the generated unstripped executable or shared library into an archive before uploading it to Error Reporting.

**For example:** `gcc -g source.c -o application`

### Generate Breakpad SYM Files

If the original executable or shared library cannot be provided, you can generate a Breakpad `.sym` file instead. Keep in mind that `.sym` files contain less debugging information than the original binaries.

To generate a `.sym1 file:

1. Install the Breakpad `dump_syms` utility.

2. Run the `dump_syms` command, specifying the executable or library and its associated debug information.

3. Upload the generated `.sym` file to Error Reporting.

**For example:**

```text
dump_syms /lib/libfoo.so /usr/debug/lib /tmp/libfoo.so.sym
```

For additional information about generating Breakpad symbols, refer to the Breakpad documentation.

### Supported Symbol Files

* ELF executable or shared library (recommended)

* `.sym` (Breakpad)
