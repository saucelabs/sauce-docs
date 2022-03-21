---
id: symbolication
title: Symbolication
sidebar_label: Symbolication
description: Generate debug symbols to help debug error callstacks.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

If you are submitting minidump files then you will need to ensure that debug symbols have been uploaded to Backtrace in order to have accurate classification, deduplication and Callstack rendering.

## Generating Symbols
<Tabs
  groupId="platforms"
  defaultValue="windows"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'Linux', value: 'linux'},
    {label: 'macOS and iOS', value: 'macosios'},
  ]}>

<TabItem value="windows">

In Visual Studio, your DEBUG build will generate .pdb symbol files. If you wish to generate symbol files in your RELEASE build or in a custom configuration, make sure that "Generate Debug Info" is turned on in your project's Configuration Properties.

<b>C++</b>

  1. In Solution Explorer, select the project.
  1. Select the Properties icon.
  1. In the Configuration list, choose Debug or Release.
  1. In the side pane, choose Linker Debugging, then select options for Generate Debug Info.
  1. For detailed information on project settings for debug configurations in C++, see Project settings for a C++ debug configuration.
  1. Configure options for Generate Program Database Files.

<b>C# and .NET</b>

  1. In Solution Explorer, select the project.
  1. Select the Properties icon.
  1. In the side pane, choose Build.
  1. In the Configuration list, choose Debug or Release.
  1. Select the Advanced button.
  1. In the Debugging information list, choose Full.

</TabItem>
<TabItem value="linux">

Backtrace supports ELF and .sym file formats. We recommend uploading the unstripped executable file or the stripped executable file and corresponding .debug file.

<b>With Breakpad</b>

Run this [Breakpad script](https://chromium.googlesource.com/chromium/src/+/master/components/crash/content/tools/generate_breakpad_symbols.py) to generate the symbols and proper directory structure. An example invocation looks like: `components/crash/content/tools/generate_breakpad_symbols.py --build-dir=out/gnand --symbols-dir=/tmp/my_symbols/ --binary=out/gnand/lib.unstripped/libchrome.so --clear`, but appropriate options may differ depending on your use case.

Alternatively, to generate the .sym without the directory structure, you can use dump_syms on its own. Assuming the library in question is `/lib/libfoo.so`  and its debugging symbol is `/usr/debug/lib/libfoo.so`, run: `dump_syms /lib/libfoo.so /usr/debug/lib /tmp/libfoo.so.sym`.

You can find additional info in [Breakpad’s documentation](https://www.chromium.org/developers/decoding-crash-dumps/).

</TabItem>
<TabItem value="macosios">

Backtrace supports the dSYM format.

<b>With Xcode on macOS</b>

1. Click on the project’s Build-Settings.
1. Search for and select "Debug Information Format", set to "DWARF with dSYM File".
1. After building with this setting enabled, the dSYM file will be stored:
    - Schema based builds: Derived Data setting in the Locations section of the Xcode preferences
    - Archived apps: within package contents of the xcarchive file
    - Not sure? Try the mdfind command (mdfind)

</TabItem>
</Tabs>

## Symbols Automatically Pulled by Backtrace
To minimize the amount of symbols that users need to upload, Backtrace is configured to pull symbols from the below publicly available symbol servers.
- Microsoft: Windows OS symbols
- Mozilla: macOS symbols
- AMD: ATI (gpu) symbols
- Electron: Electron framework symbols
- Caveat for Linux and macOS: Since the symbolication process relies on the name of the application, these symbols will only match with Electron applications named Electron. Reach out to our support team via the in-app chat on the bottom right of your screen for assistance working around this (symbols will need to be adjusted or manually uploaded for renamed ones).
- Unity: Unity game engine symbols
- Intel
- NVIDIA

### Additional and/or private symbol servers
Backtrace can be configured to pull from additional public or private symbol servers. See our documentation on [connecting to symbol servers](https://support.backtrace.io/hc/en-us/articles/360040104652).

## Symbol Formats and Upload Methods
Navigate to your project configuration page and click on Symbols to see a record of all things symbol (including upload history, search functionality, symbol access tokens and more). Backtrace recommends uploading archives (a .tar.gz or .zip file containing one or more .sym ,.pdb , ELF  or dSYM files) of symbols for every build you except to see crashes for.  These symbol files can be uploaded manually or hooked up into your build system so they are automatically uploaded.

Symbols can be uploaded via the web browser, morgue, curl and HTTP.

<img src={useBaseUrl('img/error-reporting/project-settings/symbol-formats.png')} alt="" />

NOTE: The table above does not include .elf and dSYM files, which are uploadable as an archive via Web Browser, curl, and HTTP.

You may also specify a tag query string parameter to any of your symbol uploads in order to group symbols for ease of management. A tag is simply a group of symbols, like a folder on your filesystem. You may want to have different tags for different versions of your application or different platforms. If no tag is specified, symbols are placed into the anon tag.

Regardless of your upload method, Backtrace provides a great of observability into symbol state. Backtrace supports .pdb  + .sym  (Breakpad symbol files), ELF   + dSYM  files and symbol archives (compressed or uncompressed archives containing the files). There are no restrictions on the layout of the files but you must ensure no relative paths are used and that files have the correct basename. For example, debug information for Editor.exe must be in a file called Editor.pdb or Editor.sym.

NOTE: Make sure that your symbols files (.pdb .sym, etc) are uploaded before their corresponding .exe and .dll files, or included in the same archive, to ensure proper processing.

## Symbol Management
### Breakpad and Socorro
Backtrace is completely compatible with existing Breakpad and Socorro users. Simply upload the .sym files through an HTTP POST or the `sym_upload` tool. Ensure that you have an Access Token in order to upload to your instance. You must provide a `token` (referring to your symbol access token) and a `format` query string parameter with the value `symbols`.

Access tokens used for symbol uploads are different than error submission tokens. When uploading symbols, make sure you're using a symbol access token, which can be found under Project Settings > Symbols > Access Tokens.

Below is an example invocation of a symbol upload using the `sym_upload` tool.

`sym_upload null_read_av.sym 'http://yourcompany.sp.backtrace.io:6098/post?format=symbols&token=57f2126dcef18bb0d2af35ec1d813f3775ee8228d1d886de522b2aedceff8b87'`

### HTTP API
In order to build automation around symbol upload, such as integration into a build and release process, you'll want to interface directly with the HTTP API provided by Backtrace.

Simply issue an HTTP POST to an access token can be created by navigating to Projects >  Your Project Symbols > Manage Access Tokens and clicking on the Create a new access token button.

Below is an example of a `curl` invocation to submit a symbol archive.

`curl --data-binary @symbols.tar -H "Expect: gzip" "https://yourcompany.sp.backtrace.io:6098/post?format=symbols&token=5ae2136d4ef181b0d2afa5ef1d81ff377eea8228d1d883d4552621ed1eff8b87"`

#### Example `curl` Commands for HTTP Symbol Upload
Note: For large uploads, include the flag `-H "Expect: gzip"` to the `curl` invocation.

<img src={useBaseUrl('img/error-reporting/project-settings/example-curl-cmds.png')} alt="" />

### Web Browser
Navigate to your project configuration page and click on Symbols in order to manage symbols through your web browser. You are able to manually upload .pdb or .sym and compressed archives of .sym, .pdb , ELF or dSYM files directly in your web browser. We recommend uploading a .zip file of all symbols files, rather than individual files. Follow the on-screen instructions for more details.

### Troubleshooting
If you are blocked on uploading symbols from the command line, try uploading directly from your web browser. Instructions are available above.

### Invalid Token
If you receive an "invalid token" error in the response when uploading symbols via HTTP, check to make sure that you're using a symbol token and not a project token. You can create a symbol token on the Project Settings page by clicking the Symbols section, then the Manage Access Tokens tab in the middle of the page.

### Missing Symbols
Sometimes, symbols can get missed during the symbol upload process. A list of missing symbols for a dump is available in the web debugger annotations pane. For more information about how to acquire this list, refer to the [Web Debugger guide](/error-reporting/web-console/debug/).

After uploading missing symbols, you can Reprocess Objects to have the dumps with missing symbols reprocessed. Note that the grouping of dumps may change after missing symbols are uploaded. There are a couple of ways to reprocess objects.

- System Administrators are able to reprocess all objects within a project right from the web browser by opening the menu from the top right of the screen, selecting project settings and navigating to the Reprocess Objects section.
- System Administrators and Backtrace Support are able to reprocess more specific groups of crashes via the [morgue tool](https://support.backtrace.io/hc/en-us/articles/360040517151-Morgue).

If you’d like more information or assistance reprocessing objects, reach out to Backtrace Support via the in the in-app chat on the bottom right of your screen.

#### Locating Missing Symbols
The first step in locating missing symbol files is to determine the name of the symbol file and its debug identifier. There are two ways to do this via the Debugger UI:

1. When viewing an error that's missing symbols, Backtrace will add a Missing Symbols branch to the Annotations section at the lower part of the screen. When you expand an entry number, you can see the path to the corresponding executable, the name of the symbol file, the debug identifier, the exe or module (shown as "path"), and version information:

  <img src={useBaseUrl('img/error-reporting/project-settings/symbols-annotations.png')} alt="" />

1. If an error is missing symbols, you can also see this in the callstack. In an affected frame, you will see a triangular warning symbol along with a memory address where the function signature would normally be. If you mouse over one of these frames, you'll see a yellow warning missing symbols pop-up. The debug identifier and the name of the symbol file are in the heading:

  <img src={useBaseUrl('img/error-reporting/project-settings/symbols-threads.png')} alt="" />

If you have the morgue tool installed, you can also check the status of symbol uploads and obtain lists of missing symbols by using the morgue `symbol` commands. See https://github.com/backtrace-labs/backtrace-morgue for more information.

You now have the information you need to check your in-house symbol archives for the missing symbol file. How to identify the symbol file depends on what kind of symbol files you're using:
- .sym files - If you're using Breakpad .sym files, this is quite simple: The first line of Breakpad sym file is the MODULE record which lists the pdb name and debug identifier. For example `MODULE windows x86_64 D0489F894E07424AAB5E626FF8C943DD1 advapi32.pdb`.
- .pdb files - (More Likely) If you're using .pdb files, you need to extract the debug identifier from .pdb files using one of the following methods, and find the matching one:
  - dia2dump - From the [Microsoft MSDN site](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/debugger/debug-interface-access/dia2dump-sample?view=vs-2015&redirectedfrom=MSDN).
  - Since .exe and .pdb files are normally stored in the same location, you can use the Windows build tool dumpbin.exe to dump the executable's headers, which includes the matching symbols' name and debug identifier. For example, the following command suggests symbol bcrypt.pdb with id 5C82DF990DA04C46A2B22ABB82D6B66A1.
    ```
    dumpbin.exe /headers bcrypt.dll

    Debug Directories

    Time Type       Size      RVA  Pointer
    -------- ------ -------- -------- --------
    584A7C7E cv           23 00021A80    20C80    Format: RSDS, {5C82DF99-0DA0-4C46-A2B2-2ABB82D6B66A}, 1, bcrypt.pdb
    ```

    On Windows, the executable, libraries, and PDB files must be uploaded as some unwinding information required for symbolication is contained exclusively in the executable objects.

- .dsym files - MacOS .dsym files are supported.
- .elf files - ELF files are supported.

Once you locate and upload missing symbols, make sure to Reprocess Objects, as described in the previous section on missing symbols.

### Mismatched Module Name
In addition to not having uploaded the proper symbol file, another cause for mixups is having a mismatched module name.  When viewing missing symbol information, Backtrace will show the name of the module name (executable or dll/library file) that it's expecting that symbol file to match. This is "path" in the missing symbols section of annotations in the Debugger, or shown as "Library" when looking at the tooltip of a frame that's shown as missing symbols.

If the name of the module doesn't match, Backtrace will show the symbol is missing, so make sure your symbol files reflect the correct module name, and if uploading exe/dll files, make sure these have the correct names.

### Inaccurate Callstack
#### Windows
On Windows, applications store some unwinding information exclusively in the executable object (.exe or .dll file). For this reason, we advise to include the executable code of your application and library during symbol upload. These files can be uploaded as stand-alone files, but you must ensure that the file base name matches the base name of the .pdb file. For example, the debug information for `Editor.exe` is expected to be in `Editor.pdb`. It is important that the name of the executable is `Editor.exe` in this context to pair with `Editor.pdb`. If the executable was uploaded as `Word.exe`, then you are unable to pair with `Editor.pdb`. It is recommended that a symbol archive is used.

#### Visual Studio
If you are using Visual Studio, you'll need to ensure that symbols are being generated correctly. Additional details are available in the [Crashpad Visual Studio](https://support.backtrace.io/hc/en-us/articles/360040516131-Crashpad-Integration-Guide#Ensuresymbolgeneration) document.
