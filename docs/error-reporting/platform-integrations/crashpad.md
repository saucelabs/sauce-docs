---
id: crashpad
title: Integrating Crashpad
sidebar_label: Integration Guide
description: Integrate Crashpad in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Crashpad is an open source library initially developed by Google as a successor to the Google Breakpad library. It is used in popular software such as Google Chrome and by companies such as Slack and Spotify.

For existing users of Crashpad, Backtrace has plug-and-play support. It has a robust architecture designed to allow for high customizability and stability even in the face of the most obscure software crashes.

For new users, Backtrace has prepared an enhanced fork of Crashpad, allowing easier integration with the service and additional functionality (for example, HTTPS submissions on Android).

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## Initial Integration

If you are a Windows and Visual Studio user, review the [Backtrace Visual Studio Extension Guide](/error-reporting/platform-integrations/visual-studio/) to simplify the integration of Crashpad into your new application. If you are a Windows and Visual Studio user with an existing application, you can use manual instructions in the Visual Studio section of that guide for a step-by-step guide to integrating with Visual Studio.

Advanced instructions are available at [the Crashpad home page](https://chromium.googlesource.com/crashpad/crashpad/+/HEAD/doc/developing.md) if you can't find what you're looking for or prefer to build Crashpad from the source. Backtrace's fork of Crashpad is available [on Github](https://github.com/backtrace-labs/crashpad/tree/backtrace), which contains easy [CMake](https://cmake.org/) build instructions and also hosts [daily binary builds for Android, Linux, Windows, Mac and more](https://github.com/backtrace-labs/crashpad/actions). If you would like additional assistance, don't hesitate to contact support@saucelabs.com.

### Update Your Application

After Crashpad has been integrated into your application, using CMake or using prebuilt binaries, you'll need to specify the right options to `StartHandler` to start it up, as you can see in the example app code for [Windows](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/windows/demo/demo.cpp), [MacOS](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/macos/demo/demo.cpp), [Android](https://github.com/backtrace-labs/backtrace-android/blob/cf9d827bada51bf4332e2904b0ea06d39b99db8a/backtrace-library/src/main/cpp/backends/crashpad-backend.cpp#L124) and [Linux](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/linux/demo/demo.cpp).

### Set the URL Parameter

Change the `url` parameter to `StartHandler`. Your Backtrace Project Setting > Integration Guide > Crashpad will suggest the URL to use. Generally, it will be similar to

```
https://submit.backtrace.io/<instanceSubdomain>/<submissionToken>/minidump
```

### Optional Annotations

You can use the `annotations` map to set additional attributes. Attributes allow you to embed relevant context into each crash report and can be any data point you choose. Examples include `version`, `directx.version`, `graphics.card`, etc. You can find more information on attributes in the product guide.

### File Attachments

You can attach files to crash data (that is, log files). To do so, add a string formatted as such to the `arguments` parameter of the `StartHandler` function:

```
std::vector<std::string> arguments;
arguments.push_back(
 "--attachment=FILE_PATH"
);
```

For example:

```
std::vector<std::string> arguments;
arguments.push_back(
 "--attachment=C:/my_app/app_2018-02-30.log"
);
```

### Crash Handler Parameter

`handler` is a path to an external program responsible for generating and uploading dumps; we recommend it for uploading crashes. Look for `bin/crashpad_handler.exe` on Windows, which is suitable as a default crash handler. See below for a complete example.

`handler` is executed after the application crashes, so it should be available under the specified path during its execution. That means the handler should be bundled with the application if delivered to the end-users, and its path should be relative or dynamically generated.

### Example Code

See [Windows](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/windows/demo/demo.cpp), [macOS](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/macos/demo/demo.cpp), [Android](https://github.com/backtrace-labs/backtrace-android/blob/cf9d827bada51bf4332e2904b0ea06d39b99db8a/backtrace-library/src/main/cpp/backends/crashpad-backend.cpp#L124) and [Linux](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/linux/demo/demo.cpp) for self-contained example code.

## Manage Symbols

Symbols are required to determine the source-code mapping of incoming crashes, including function name, source file, and line number. For Backtrace to effectively group and analyze your incoming crashes, you must upload application debug symbols.

To learn more about uploading and managing symbols with Backtrace, see [Symbolication](/error-reporting/project-setup/symbolication/).

## Visual Studio

If you are a Windows and Visual Studio user, review the [Backtrace Visual Studio Extension Guide](/error-reporting/platform-integrations/visual-studio/) to simplify the integration of Crashpad into your application.

:::note

The instructions below are accurate, but consider the extension to minimize the chance of configuration errors.

:::

### Obtain Crashpad

You can build Crashpad from the source or download Backtrace-provided library versions.

:::caution For Windows (x86)

The Visual C++ Redistributable for Visual Studio 2015 might be required if you have a new OS installation and don't have an IDE installed. Make sure to install the following runtime redistributable files for `BacktraceCrashpadWindows.dll`:

```
  KERNEL32.dll
    MSVCP140.dll
    VCRUNTIME140.dll
    api-ms-win-crt-runtime-l1-1-0.dll
    api-ms-win-crt-string-l1-1-0.dll
    api-ms-win-crt-heap-l1-1-0.dll
    api-ms-win-crt-stdio-l1-1-0.dll
    api-ms-win-crt-time-l1-1-0.dll
    api-ms-win-crt-filesystem-l1-1-0.dll
    ADVAPI32.dll
```

:::

#### Build From Source

It is always possible to build Crashpad from the source. To do this, see the [Backtrace fork build guide](https://github.com/backtrace-labs/crashpad/blob/backtrace/README.md). Backtrace added [CMake](https://cmake.org/) build scripts, making it easier to build than the original Google fork. If you want to build the Google fork regardless, you can check the [instructions](https://chromium.googlesource.com/crashpad/crashpad/+/HEAD/doc/developing.md).

#### Download Built Libraries

Backtrace provides builds of Crashpad. We recommend using the stable version. The latest stable releases of Backtrace's Crashpad fork are available at [http://get.backtrace.io/crashpad/builds/](http://get.backtrace.io/crashpad/builds/), and the Backtrace fork nightly builds can be found [on GitHub](https://github.com/backtrace-labs/crashpad/actions).

### Integrate Crashpad

After you have built Crashpad or downloaded the pre-built libraries, you must integrate the library into your application. The library is statically linked to your project, so you will not need to distribute additional projects.

There are two versions of `Crashpad` provided in the Backtrace archive.

`lib_mt` contains the Crashpad libraries built with the `/MT` switch for static linking. `lib_md` contains the Crashpad libraries built with the `/MD` switch for dynamic linking.

Use the appropriate version for your application.

### Integrate Into Your Build Process

This section outlines importing the `Crashpad` library into your Visual Studio project.

### Add the Header Files

First, you'll need to add the Crashpad directory in the included path for your application. The header files for Crashpad in the provided `.zip` file are in the included directory.

Go to the project configuration menu (Project > Properties > VC++ Directories) and set `Include Directories` to point to the `include` and `include\mini_chromium` folders of the extracted archive, as shown below.

<img src={useBaseUrl('/img/error-reporting/minidump/include-directories.png')} alt="set include directories"/>

### Add the Libraries

#### Static Linking

Next, you'll need to add the relevant release path (see the table above) to your `Library Directories`(Project > Properties > VC++ Directories). For example, if I am deploying a 64-bit Windows application, the `lib_mt`sub-directory is added to `Library Directories` after downloading the appropriate Crashpad build.

<img src={useBaseUrl('/img/error-reporting/minidump/library-static-linking.png')} alt="library directories"/>

After that is done, you'll need to add the actual set of static libraries for `Crashpad`. Navigate to your linker input settings (Project > Properties > Linker > Input), and add `client.lib;util.lib;base.lib` as additional dependencies. See the screenshot below for an example.

<img src={useBaseUrl('/img/error-reporting/minidump/additional-dependencies.png')} alt="additional dependencies"/>

Remember to use the build of the `Crashpad` library that corresponds with your build configuration. For example, if you are building a 32-bit Debug build, ensure that you reference the `.lib` files from the 32-bit debug build. If you encounter errors involving `ITERATOR_DEBUG_LEVEL`, then there is likely a mismatch between your build configuration and the build of `Crashpad`. To change the build settings, go to Build > Configuration Manager, then change your `Active solution configuration`.

#### Dynamic Linking

If you use dynamic linking (the `\MD` flag), use the `lib_md` sub-directory rather than `lib_mt`. For example, `crashpad\lib_md` rather than `crashpad\lib_mt`.

<img src={useBaseUrl('/img/error-reporting/minidump/dynamic-linking.png')} alt="dynamic linking"/>

### Verify Linker Settings

#### Static Linking

Lastly, ensure you have code generation runtime settings set to a mode compatible with static libraries, such as `Multi-threaded (/MT)`. Go to Project > Properties > C/C++ > Code Generation and update the `Runtime Library` setting.

<img src={useBaseUrl('/img/error-reporting/minidump/runtime-library.png')} alt="runtime library"/>

#### Dynamic Linking

If you are using dynamic linking, then ensure that you use the `/MD` option instead of `/MT`.

### Debug Builds

If you are building in debug mode, ensure that you use the debug version of the linking compiler switches (`/MDd` and `/MTd`):

<img src={useBaseUrl('/img/error-reporting/minidump/debug-build.png')} alt="debug mode"/>

### Ensure Symbol Generation

It is required to upload symbols into Backtrace for intelligent deduplication and classification. This section explains how to enable debug symbols for your application.

Go to Project > Properties > Linker and update the `Generate Debug Info` setting. You'll want to set it to `Generate Debug Information (/DEBUG)` or `Generate Debug Information optimized for sharing and publishing (/DEBUG:FULL)`. We recommend the `/DEBUG` option if you would like to avoid the possibility of a performance impact.

<img src={useBaseUrl('/img/error-reporting/minidump/general-debug-info.png')} alt="debug mode"/>

This setting generates a `.pdb` file for your application in the build output directory. You can manually upload `.sym`, `.pdb`, and archive files containing `.pdb` or `.sym` files into Backtrace or through the command line. It is also possible to hook up Visual Studio to automatically upload symbols as they are generated. Now, you should be able to send crash reports. Ensure you've uploaded your symbols (click on **Symbols** under the Project Configuration page).

For more details, see [Symbolication](/error-reporting/project-setup/symbolication/).

### Send Crash Reports

Now you're ready to integrate Crashpad into your application. Add the code from the section [Example code](#example-code) above to do this.

### Finish

Crashes should be automatically submitted into Backtrace. As crashes generate, refresh the Project page of the associated project to see faults in real-time.

### Additional Features of Backtrace Fork

#### Send Reports Using EXCEPTION_POINTERS in Windows

A new function has been added to the `CrashpadClient` class. It's helpful, for example, when dealing with vectored exceptions. Additionally, it does not require the process to end (the exception may be handled).

```java
static void DumpWithoutCrashWithException(EXCEPTION_POINTERS* pointer);
```

## Windows 7, Windows Server 2008 R2, and Windows Server 2012 Support (Adding TLS 1.1/1.2 Support)

The default Crashpad crash handler binary uses WinHttp to upload crashes. On those systems, TLS 1.1 and TLS 1.2 are in the default protocol set, and only TLS 1.0 and SSL 3.0 are available by default, which Backtrace does not accept.

It should be fixed by [KB 3140245](https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392), but you may want to add them to the default list manually via the registry. We suggest doing it in your application installer.

```
Windows Registry Editor Version 5.00
```

```bash
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp]
"DefaultSecureProtocols"=dword:00000a00
```

## Additional Documentation

Additional documentation is available at the [Crashpad Website](https://chromium.googlesource.com/crashpad/crashpad/). For more information on the `crashpad_handler`, see [crashpad_handler.md](https://chromium.googlesource.com/crashpad/crashpad/+/HEAD/handler/crashpad_handler.md).

If you're still encountering issues, contact us at support@saucelabs.com.
