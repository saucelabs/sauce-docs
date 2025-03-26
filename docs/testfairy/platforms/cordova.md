---
id: cordova
title: Cordova
sidebar_label: Cordova
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Adding the Sauce Mobile App Distribution plugin to your Cordova or Phonegap project is simple.

:::note
To learn more about the Ionic applications, see the Ionic /testfairy/platforms/ionic documentation.
:::

## Installation

Add the plugin to your project via [npm](https://www.npmjs.com/package/com.testfairy.cordova-plugin). Run the following command from a terminal:

```bash
cordova plugin add com.testfairy.cordova-plugin
```

Alternatively, you can install it directly from GitHub:

```bash
cordova plugin add https://github.com/testfairy/testfairy-cordova-plugin
```

## Upgrading

To upgrade your plugin, run:

```bash
cordova plugin update com.testfairy.cordova-plugin
```

## Usage

Initialize Sauce Mobile App Distribution with your [App Token](https://app.testfairy.com/settings/#apptoken) by calling `TestFairy.begin`. Your **APP TOKEN** is available at `https://app.testfairy.com/settings/#apptoken`.

It is recommended invoking `TestFairy.begin` from `onDeviceReady` in `index.js`:

```js
 onDeviceReady: function() {
 app.receivedEvent('deviceready');
 TestFairy.begin("APP TOKEN");
 }
```

### Logging Errors

We recommended logging error events to Sauce Mobile App Distribution. It displays the exceptions and the rest of the session data, including logs and attributes. For more information, see the Exception Logging /testfairy/sdk/logging#cordova document.

### Identifying Your Users

See the SDK Documentation /testfairy/sdk/identifying-users#cordova for more information.

### Session Attributes

See the SDK Documentation /testfairy/sdk/session-attributes#cordova for more information.

### Remote Logging

See the SDK Documentation /testfairy/sdk/remote-logging#cordova for more information.

## Support for ARM Architecture vs. x86

```bash
ERROR ITMS-90087: "Unsupported Architectures. The executable TestFairy.framework contains unsupported architectures '[x86_64, i386]'
```

This error happens when you export your iOS app to the App Store. The App Store only supports apps built for the ARM architecture. To allow developers to test in the iOS Simulator, Sauce Mobile App Distribution includes the architectures for 64-bit (x86_64) and 32-bit (i386) Intel architectures.

The quickest solution is to strip these architectures from `TestFairy.framework` when archiving. You must add the following run script to your Xcode build phases:

```js
APP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"

find "$APP_PATH" -name 'TestFairy.framework' -type d | while read -r FRAMEWORK
do
  FRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)
  FRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"
  echo "Executable is $FRAMEWORK_EXECUTABLE_PATH"
  echo $(lipo -info "$FRAMEWORK_EXECUTABLE_PATH")

  FRAMEWORK_TMP_PATH="$FRAMEWORK_EXECUTABLE_PATH-tmp"

  if $(lipo "$FRAMEWORK_EXECUTABLE_PATH" -verify_arch "i386") ; then
  lipo -output "$FRAMEWORK_TMP_PATH" -remove "i386" "$FRAMEWORK_EXECUTABLE_PATH"
  echo " i386 architecture removed"
  rm "$FRAMEWORK_EXECUTABLE_PATH"
  mv "$FRAMEWORK_TMP_PATH" "$FRAMEWORK_EXECUTABLE_PATH"
  fi

  if $(lipo "$FRAMEWORK_EXECUTABLE_PATH" -verify_arch "x86_64") ; then
  lipo -output "$FRAMEWORK_TMP_PATH" -remove "x86_64" "$FRAMEWORK_EXECUTABLE_PATH"
  echo " x86_64 architecture removed"
  rm "$FRAMEWORK_EXECUTABLE_PATH"
  mv "$FRAMEWORK_TMP_PATH" "$FRAMEWORK_EXECUTABLE_PATH"
  fi
done
```

:::caution
You **must only** run this script during installation. The image below shows the necessary checkbox to prevent this script from running during regular development builds.
:::

<img src={useBaseUrl('/img/testfairy/platform/only-when-installing.png')} alt="only when installing"/>

## Where To Go From Here?

Congratulations, you've successfully integrated Sauce Mobile App Distribution into your Cordova project! Visit your [dashboard](http://app.testfairy.com/), to see your app listed.

- Have a look at the [API documentation](https://github.com/testfairy/testfairy-cordova-plugin/blob/master/www/testfairy.js) for other calls you can make to the Sauce Mobile App Distribution plugin

- Follow the project on [GitHub](https://github.com/testfairy/testfairy-cordova-plugin) for updates, bug reports, or to contribute to the project.
