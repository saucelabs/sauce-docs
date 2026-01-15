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

If you are a Windows and Visual Studio user, review the [Crashpad Integration Guide for Visual Studio](/error-reporting/platform-integrations/visual-studio/) to simplify the integration of Crashpad into your new or existing application.

Advanced instructions are available at [the Crashpad home page](https://chromium.googlesource.com/crashpad/crashpad/+/HEAD/doc/developing.md) if you can't find what you're looking for or prefer to build Crashpad from the source. Backtrace's fork of Crashpad is available [on Github](https://github.com/backtrace-labs/crashpad/tree/backtrace), which contains easy [CMake](https://cmake.org/) build instructions and also hosts [binary builds for Android, Linux, Windows, Mac and more](https://github.com/backtrace-labs/crashpad/releases). If you would like additional assistance, don't hesitate to [contact Support](https://support.saucelabs.com/).

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

`handler` is a path to an external program responsible for generating and uploading dumps; we recommend it for uploading crashes. Look for `bin/crashpad_handler.exe` on Windows, which is suitable as a default crash handler.

`handler` is executed after the application crashes, so it should be available under the specified path during its execution. That means the handler should be bundled with the application if delivered to the end-users, and its path should be relative or dynamically generated.

### Example Code

See [Windows](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/windows/demo/demo.cpp), [macOS](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/macos/demo/demo.cpp), [Android](https://github.com/backtrace-labs/backtrace-android/blob/cf9d827bada51bf4332e2904b0ea06d39b99db8a/backtrace-library/src/main/cpp/backends/crashpad-backend.cpp#L124) and [Linux](https://github.com/backtrace-labs/crashpad/blob/backtrace/examples/linux/demo/demo.cpp) for self-contained example code.

### Manage Symbols

Symbols are required to determine the source-code mapping of incoming crashes, including function name, source file, and line number. For Backtrace to effectively group and analyze your incoming crashes, you must upload application debug symbols.

To learn more about uploading and managing symbols with Backtrace, see [Symbolication](/error-reporting/project-setup/symbolication/).

For Visual Studio specific settings for symbols, see [Crashpad Integration Guide for Visual
Studio](/error-reporting/platform-integrations/visual-studio/#ensure-symbol-generation).

### Send Crash Reports

Now you're ready to integrate Crashpad into your application. Add the code from the section [Example code](#example-code) above or from [Crashpad Integration Guide for Visual Studio](/error-reporting/platform-integrations/visual-studio/#code-samples) to do this.

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

If you're still encountering issues, contact us via our [Support page](https://support.saucelabs.com/).
