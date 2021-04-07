---
id: ms-app-center
title: Microsoft App Center Integration
sidebar_label: MS App Center
---

This topic describes how to migrate your apps from Microsoft App Center to a Sauce Labs data center by creating a [post-build script](https://docs.microsoft.com/en-us/appcenter/build/custom/scripts/#post-build) in Microsoft App Center.

>**NOTE**: If you're looking for the legacy solution, see [Legacy Platform App Center Integration](https://wiki.saucelabs.com/pages/viewpage.action?pageId=110205512).

## What You'll Need

* A [Microsoft App Center account](https://docs.microsoft.com/en-us/appcenter/)
* A [Project Source Code Repository](https://docs.microsoft.com/en-us/appcenter/build/#getting-started)


## Creating the Post-Build Script

1. Once you've linked your project source code to your app center project, create a script called `appcenter-post-build.sh` and add it to your project source code repository.

2. If you're testing a cross-platform application (e.g., react-native), add the following environment variables `APP_NAME` and `BUILD_NAME`.

>**NOTE**: If you're building a single project (iOS or Android), ignore steps 2-4 and skip to step 5.

```bash
#!/usr/bin/env bash
APP_NAME="your.app.name"
# You can find this name in the build logs of a previous project
# for now we create an empty variable and change it based on the
# project that is using this script
BUILD_NAME="your.build.name"
```

3. Set the correct app name based on the application platform.

```bash
if [[ "$APPCENTER_XCODE_PROJECT" ]]; then
    APP_NAME="iOS.SauceLabs.Mobile.Sample.app.ipa"
    BUILD_NAME="SwagLabsMobileApp.ipa"
else
    APP_NAME="Android.SauceLabs.Mobile.Sample.app.apk"
    BUILD_NAME="app-release.apk"
fi
```

4. You can optionally set a console message to appear in your App Center logs.

```bash
echo "**************** PUBLISH APP TO SAUCELABS WITH THIS DATA ******************"
echo "APP NAME                => $APP_NAME"
echo "BUILD NAME              => $BUILD_NAME"
echo "OUTPUT DIRECTORY        => $APPCENTER_OUTPUT_DIRECTORY"
echo "PAYLOAD                 => $APPCENTER_OUTPUT_DIRECTORY/$BUILD_NAME"
```

5. Now you can add the following command to push to the relevant data center that contains your target real device.

**Push to US Data Center**

```bash
curl \
  -F "payload=@$APPCENTER_OUTPUT_DIRECTORY/$BUILD_NAME" \
  -F name=$APP_NAME \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  'https://api.us-west-1.saucelabs.com/v1/storage/upload'
```

**Push to EU Data Center**

```bash
curl \
  -F "payload=@$APPCENTER_OUTPUT_DIRECTORY/$BUILD_NAME" \
  -F name=$APP_NAME \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  'https://api.eu-central-1.saucelabs.com/v1/storage/upload'
```

:::tip
If you need to retrieve a specific build, or information regarding the build that ran during this operation, you can use the [App Storage](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137) API.
:::

6. To view the full **App Center Post-Build Script**, see [Sauce Labs sample mobile app repo](https://github.com/saucelabs/sample-app-mobile/blob/master/appcenter-post-build.sh).
