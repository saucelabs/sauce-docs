---
id: flutter
title: Adding Sauce Mobile App Distribution to Your Flutter Project
sidebar_label: Flutter
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you are developing your app in Flutter, follow the instructions in this document add the Sauce Mobile App Distribution SDK.

## Installation

Use this package as a library.

### Depend On It

Add this to your package's `pubspec.yaml`.

```yaml
dependencies:
  testfairy_flutter: any
```

### Install It

You can install packages from the command line:

```bash
$ flutter packages get
```

Alternatively, your editor might support Flutter packages get. Check the docs for your editor to learn more.

### Import It

Now in your Dart code, you can use the following:

```dart
import 'package:testfairy_flutter/testfairy_flutter.dart';

void main() {
 TestFairy.begin("SDK-myToken");
 runApp(MyApp());
}
```

## Quick Start

Include the library and run your main app like this.

Make sure your project is [AndroidX](https://flutter.dev/docs/development/androidx-migration) compatible.

The minimum supported iOS target is 9.0.

```yaml
# inside pubspec.yaml
dependencies:
  testfairy_flutter: any
```

```dart
// inside your main.dart

// @dart = 2.12
// You can use other dart versions but we suggest 2.12 for better compile time checks.
import 'dart:async';
import 'dart:io';
import 'package:testfairy_flutter/testfairy_flutter.dart';

void main() {
  HttpOverrides.global = TestFairy.httpOverrides();

  runZonedGuarded(
    () async {
      try {
        FlutterError.onError =
            (details) => TestFairy.logError(details.exception);

        // Call `await TestFairy.begin()` or any other setup code here.

        runApp(TestFairyGestureDetector(child: TestfairyExampleApp()));
      } catch (error) {
        TestFairy.logError(error);
      }
    },
    (e, s) {
      TestFairy.logError(e);
    },
    zoneSpecification: new ZoneSpecification(
      print: (self, parent, zone, message) {
        TestFairy.log(message);
      },
    )
  );
}
```

## How to Compile With the Latest Flutter and null-safe Dart?

To use Sauce Mobile App Distribution with the latest **stable** Flutter channel, you must set the minimum version for the plugin as 2.1.0.

To use Sauce Mobile App Distribution with the latest **unstable** Flutter channel, you must clone this repository and use it as an offline dependency instead of the published version in pub.

1. Clone this [repository](https://github.com/testfairy/testfairy-flutter).

2. Use the following code to include the clone as an offline dependency (assuming both projects reside in the same directory as siblings).

   ```yaml
   dependencies:
     testfairy_flutter:
     path: ../testfairy-flutter # or "./testfairy-flutter" if you cloned it inside your main project as a child directory
   ```

3. Checkout **testfairy-flutter** to your VCS without including its **.git** directory.

4. When there is a new update in this repository, delete **testfairy-flutter** and retry the steps.

## Troubleshooting FAQ

- **I see `warning: None of the architectures in ARCHS (x86_64) are valid` when I build an iOS app.**

  Launch your Runner workspace and add `x86_64` to `VALID_ARCHS` under **Build Settings**.

- **I see `Specs satisfying the Sauce Mobile App Distribution dependency were found, but they required a higher minimum deployment target.` when I build an iOS app.**

  You have to update the native SDK alongside with CocoaPods repository.

  Run `pod repo update` and update the plugin in _pubspec.yaml_. Then run `cd ios; pod update TestFairy; cd ..`.

- **I have my own `HttpOverrides.global` setup. How can I make it work with Sauce Mobile App Distribution?**

  Copy [this](https://github.com/testfairy/testfairy-flutter/blob/master/lib/src/network_logging.dart) file to your project. Add the necessary functionality and assign an instance from your new implementation to `HttpOverrides.global`.

- **I see `Errno::ENOENT - No such file or directory @ rb_sysopen - ./ios/Pods/Local Podspecs/testfairy.podspec.json` when I build an iOS app.**

  This error happens due to a pod misconfiguration bug on the Flutter side. We have [a blog post](https://blog.testfairy.com/errnoenoent-fix-for-flutter-ios/) explaining the fix.

  Clean your project, and remove _ios/Podfile_ and Xcode workspace files. (make sure you have backups, just in case)

  ```bash
  flutter clean
  rm -rf ios/Podfile ios/Podfile.lock pubspec.lock ios/Pods ios/Runner.xcworkspace
  ```

  Revert to **cocoapods 1.7.5** temporarily.

  ```bash
  gem uninstall cocoapods
  gem install cocoapods -v 1.7.5
  ```

  Add the following line to the beginning of your iOS project's generated Podfile.

  ```bash
  # Beginning of file
  use_frameworks!

  # The rest of the file contents
  # ...
  ```

  Install pods.

  ```bash
  pod repo update
  cd ios
  pod install
  cd ..
  ```

  Retry your build.

  Once your build succeeds, you can update cocoapods to its latest version. If the error reoccurs, you must revert to 1.7.5 and retry the steps.

- **I see `Automatically assigning platform ios with version 8.0` when I build.**

  Sauce Mobile App Distribution supports iOS 9.0 and above. Change the build target accordingly in your Xcode project.

- **I see `Looks like Sauce Mobile App Distribution has an upgrade to do... 1.X.Y+hotfixZ is the latest stable branch` or errors related to Jetifier in the logs when I call an SDK method.**

  Migrate your Android project to AndroidX by following [this](https://flutter.dev/docs/development/androidx-migration) guide.

- **I see `Undefined symbols for architecture` error during compilation.**

  You must use frameworks and specify a platform version of at least `9.0` in your generated iOS project's Podfile. Make the following changes in _ios/Podfile_ and rebuild.

  ```bash
  target 'Runner' do
  platform :ios, '9.0'   ####################################### <--- add this and specify at least 9.0

  use_frameworks!        ####################################### <--- add this, and try building if there is
                        #######################################      no Swift code or plugin in the project.
                        #######################################      If there is Swift code, please also add
                        #######################################      the marked line below

  ...
  end

  post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['ENABLE_BITCODE'] = 'NO'
      config.build_settings['SWIFT_VERSION'] = '3.2'  ########## <--- add this, change the version to what's being
                                                      ##########      used in the project, remove if there is none
    end
   end
  end
  ```

- **CocoaPods could not find compatible versions for pod "Sauce Mobile App Distribution".**

  This error is an old bug in the plugin pubspec file. First, run `flutter clean` in your root directory.

  Move _ios/Podfile.lock_ into a temporary place before running `pod repo update; pod install` in your _ios_ directory.

  If some of the libraries you use need to be at specific versions, copy the necessary lines from your backed-up _Podfile.lock_ into the newly created one. Keep the lines related to Sauce Mobile App Distribution (note the title case in the name) untouched.

  Finally, run `pod repo update; pod install; pod update TestFairy` again to re-download libraries from the replaced lines.

  If everything went smoothly, this issue should never happen again.

- **There are syntax errors in TestFairyFlutterPlugin.java or TestFairyFlutterPlugin.m file.**

  In your project root, run `flutter clean; cd ios; pod repo update; pod install; pod update TestFairy; cd ..` and test again.

### API Reference

Check the latest [Dart interface documentation](https://pub.dartlang.org/documentation/testfairy_flutter/latest/).
