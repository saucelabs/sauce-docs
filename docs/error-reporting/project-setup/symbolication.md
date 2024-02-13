---
id: symbolication
title: Symbolication
sidebar_label: Symbolication
description: Generate debug symbols to help debug error callstacks.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

Debug symbols are needed when crashes are reported from binaries that have information such as function names and line numbers stripped away. Debug symbols allow Backtrace to provide human-readable callstacks and effectively duplicate error reports. Symbols can be uploaded via the UI or API, or retrieved from a managed private symbol server. Symbols are compilation specific and are applied to crash reports based on matching debug or code ID’s and filename. 

Please note that only a subset of reports sent to Backtrace require symbols (managed code and some integration paths do not require symbols).

## Symbol formats

The sections below cover general information about symbols built on the native tools for their platform. Please note that more information about symbols and other artifacts specific to other integration paths (such as [sourcemaps for Javascript](https://docs.saucelabs.com/error-reporting/platform-integrations/source-map/), [symbols for Unity](https://docs.saucelabs.com/error-reporting/platform-integrations/unity/configuration/#capturing-native-crashes), game consoles, etc) are available in the documentation specific to those integration paths. 

<Tabs
groupId="platforms"
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'MacOS', value: 'macos'},
{label: 'iOS', value: 'ios'},
{label: 'Android', value: 'android'},
{label: 'Linux', value: 'linux'},
]}>

<TabItem value="windows">

Debug information is stored in PDB files, and in the case of 64 bit applications, the corresponding .exe or .dll file with debug information.

<b>With Visual Studio</b>

In Visual Studio, your DEBUG build will generate .pdb symbol files. If you wish to generate symbol files in your RELEASE build or in a custom configuration, make sure that "Generate Debug Info" is turned on in your project's Configuration Properties.

</TabItem>
<TabItem value="macos">

Debug information is stored in dSYM files. 

<b>With Xcode</b>

1. Click on the project’s Build-Settings.
1. Search for and select "Debug Information Format", set to "DWARF with dSYM File".
1. After building with this setting enabled, the dSYM file will be stored:
   - Schema based builds: Derived Data setting in the Locations section of the Xcode preferences
   - Archived apps: within package contents of the xcarchive file
   - Not sure? Try the mdfind command (mdfind)

</TabItem>
<TabItem value="ios">

Debug information is stored in dSYM files.

<b>With Xcode</b>

1. Click on the project’s Build-Settings.
1. Search for and select "Debug Information Format", set to "DWARF with dSYM File".
1. After building with this setting enabled, the dSYM file will be stored:
   - Schema based builds: Derived Data setting in the Locations section of the Xcode preferences
   - Archived apps: within package contents of the xcarchive file
   - Not sure? Try the mdfind command (mdfind)

</TabItem>
<TabItem value="android">

Debug information is stored in .so files. 

<b>With Android Studio</b>

This involves uploading the native libraries themselves, which are usually found in the APK bundle.

</TabItem>
<TabItem value="linux">

Debug information is stored in ELF or .sym files. We recommend uploading the unstripped executable and/or library files. When uploading the unstripped binary to Backtrace, it must be contained in an archive and cannot be uploaded directly. Additional capabilities (e.g. local variables in debug views) are available if original files are uploaded rather than Breakpad SYM files. 

<b>ELF file with debug info </b>

To generate an ELF file with debug info, refer to compiler specific documentation. For example, this can be done with the -g switch in GCC. 

<b>SYM file via Breakpad</b>

Note that this approach should only be taken if it is impossible to provide the original binaries. Using .sym’s will result in less detailed information. 

To generate a .sym, you can use Breakpad’s dump_syms. Assuming the library in question is /lib/libfoo.so and its debugging symbol is /usr/debug/lib/libfoo.so, run: dump_syms /lib/libfoo.so /usr/debug/lib /tmp/libfoo.so.sym.
You can find additional info in [Breakpad’s documentation](https://www.chromium.org/developers/decoding-crash-dumps/).

</TabItem>
</Tabs>

## Generate symbol access tokens
Symbol access tokens are used to upload debug symbols. Go to Project Settings > Project > API Tokens to generate a token with the symbol:post capability. Additional details are available in [Creating API Tokens and Submission URLs](https://docs.saucelabs.com/error-reporting/project-setup/submission-url/#creating-api-tokens).

## Upload to Backtrace

### UI
Navigate to Project settings > Symbols > Overview to review your symbol uploads, 
including upload history, search functionality, symbol access tokens and more. Backtrace recommends uploading archives (a .tar.gz or .zip file containing one or more .sym, .pdb, .so, .dSYM, or ELF files) of symbols for every build you expect to see crashes for. These symbol files can be uploaded manually or by build automation scripts.
You may also specify a tag to any of your symbol uploads in order to group symbols for ease of management. A tag is simply a group of symbols, like a folder on your filesystem. You may want to have different tags for different versions of your application or different platforms. If no tag is specified, symbols are placed into the anon tag.

### API

In order to build automation around symbol upload, such as integration into a build and release process, you'll want to interface directly with the HTTP API provided by Backtrace.

Below is an example of a curl command to submit a symbol archive.

```curl --data-binary @symbols.tar  -X POST  -H "Expect: gzip" "https://submit.backtrace.io/{your-subdomain}/{symbol-access-token}/symbols"```

Tags can be appended as a query parameter in the destination url (ie `"&tag=<tagValue>"`). 

### Supported archive formats

Any archive format supported by libarchive 3.2.3 is supported such as .tar, .tar.gz, .zip. Archives should be pre-compressed and be no larger than 10GB where possible. 

## Integrate custom symbol server with Backtrace

Instead of uploading symbols to Backtrace, users may choose to host a symbol server and upload symbols there. The symbol server can be integrated with Backtrace so that symbols are requested as reports requiring them are processed. 

symbold is the Backtrace service responsible for gathering symbols from connected symbol servers or stores. symbold comes pre configured by Backtrace to automatically download symbols from public third party symbol servers of commonly used libraries such as those from Microsoft, Electron, and others. We refer to these as default public symbol servers. You may also configure connections to your own private symbol servers to speed debugging time and minimize setup effort.

See this [Microsoft guide](https://docs.microsoft.com/en-us/windows/win32/debug/symbol-servers-and-symbol-stores) about setting up symbol servers and symbol stores.

### Symbol server requirements
- Follow Microsoft's standard symbol structure, `<url>/<object_name>/<debug_id>/<file>`
   - Use tools like Windows symstore to generate files in the required structure
   - Run [this Breakpad script](https://chromium.googlesource.com/chromium/src/+/master/components/crash/content/tools/generate_breakpad_symbols.py) to generate the symbols and proper directory structure on Linux. An example invocation looks like: `components/crash/content/tools/generate_breakpad_symbols.py --build-dir=out/gnand --symbols-dir=/tmp/my_symbols/ --binary=out/gnand/lib.unstripped/libchrome.so --clear`, but appropriate options may differ depending on your use case.
- Have a web frontend to serve the files via HTTP(S)
   - Popular options include nginx, AWS, and Google Cloud buckets
- Network access from Backtrace to the symbol server
   - Firewall and network rules may need adjustments
- If compressing files, must use CAB mechanism
- [Optional] HTTP compression is also supported

### Feature details

Every time Backtrace receives a report, it is scanned for symbols that do not yet exist in that Backtrace project. A missing symbol event is generated for each of these symbols, and Backtrace then requests symbols from symbol servers accordingly.

Backtrace may request symbols from symbol servers for the following debug file, debug id, code file, and code id combinations, to support a variety of customer upload patterns:
- symbol_name = basename(debug_file); id = debug_id, if debug_file and debug _identifier are available
- symbol_name = basename(code_file); id = code_id, if code_file and code_id are available and arch=x86_64
- symbol_name = basename(code_file); id = debug_id, if code_file and debug_id are available and arch=x86_64

For each of these, Backtrace will concurrently attempt to download from the following URLs from a symbol server. As the first successfully downloaded binary will be used for the purposes of symbolication it is advised to respond to only one of these URLs:
- base-url/symbol_name/id/symbol_name
- base-url/symbol_name/id/symbol_name_with_underscore_extension
- base-url/symbol_name/id/symbol_name_with_sym_extension

Where "symbol name with underscore extension" = replace last character of symbol name with underscore, '_' (this is typically used as the file extension for CAB compressed binaries on Windows) and where "symbol name with sym extension" = replace or append the extension ".sym" to the symbol name.

For example, if symbol_name = foo.pdb and id = 123, the following URLs are queried:
- base-url/foo.pdb/123/foo.pdb
- base-url/foo.pdb/123/foo.pd_
- base-url/foo.pdb/123/foo.sym

It is important that symbol servers only host valid symbol files. Symbolication may fail if multiple files exist in these paths, with one containing a valid symbol file and others are invalid. 

### Connecting Backtrace to symbol servers
You will need the following information to connect:
- URL - HTTPS URL to connect to the symbol server or S3 bucket. When using an AWS S3 bucket, use the HTTPS URL of the region the S3 bucket is hosted from.
- Name - A descriptive name for this connection.
- Allowlist - If Allowlist is enabled, then the system will only try to download the symbols specified in the allowlist (no other symbols will be downloaded). 
- Credentials - Basic Auth, Google Cloud Storage with service secret, or AWS S3 Authentication with bucket name, S3 access key (AWS Key Identifier field), and S3 secret (AWS Secret Key field) are supported. Refer to AWS Account and Access Keys documentation for more information.
- Proxy Options - If a proxy server is required, these options define the proxy credentials, host, and port.
- Download Options - How many concurrent downloads to allow, and retry options before adding a symbol to the skip list.

### Managing symbol servers

The Symbol Servers Management UI is accessed under Project Settings > Symbols > Symbol Servers. Following is some brief information about each of the tabs and the data within them.
- **Strongly recommended**: Allowlist - If the allowlist is enabled, then only symbol files in the allowlist will be downloaded. For the public symbol servers that are seeded by default, allowlists are enabled and commonly used symbols are listed for retrieval.
- Statistics and Usage - This tab show information about how much has been data has been downloaded, and how many successful or failed downloads there have been since the Symbol Server was added to the system
- Blocklist - Items in the blocklist will never be downloaded from the symbol server. Add items to the blocklist if they will not change stack trace information, will not add any additional debugging information, or might cause only networking problems (i.e files too big, they change too often, etc.).
- Skip list - Items are automatically added to the skip list if they cannot be downloaded from the symbol server in the specified number of retries (default is 3). Symbols in the skip list will not be requested. The number of retries can be configured. Skip list items over 12 hours old are flushed.
- Logs - Log information about successful and unsuccessful download and conversion attempts.

## Troubleshooting

### Command line debugging
If you are blocked on uploading symbols from the command line, try checking verbose output from a tool like curl or similar. Uploading an arhcive in the web browser may also expose additional information or errors. 

### Invalid token

If you receive an "invalid token" error in the response when uploading symbols via HTTP, check to make sure that you're using a symbol access token and not a submission token. To generate a symbol access token, see [Generating Symbol Access Tokens](#generate-symbol-access-tokens).

### Missing symbols

See [Missing Symbols](https://docs.saucelabs.com/error-reporting/troubleshooting/#missing-symbols)

### Reading custom symbol server logs
It’s important to note that some failures are expected, due to the wide net Backtrace casts (as explained in [Symbol server | Feature details](#feature-details)). To troubleshoot, search for the known good path on the symbol server (ie foo.pdb/123/foo.pdb). Successful symbol server requests log lines will include “Downloaded path”, and failed requests log lines will include “Download failed” with additional information about the error encountered.
