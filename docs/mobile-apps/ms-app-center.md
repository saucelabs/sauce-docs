---
id: ms-app-center
title: Microsoft App Center Integration
sidebar_label: MS App Center
---

This topic describes how to migrate your apps from Microsoft App Center to a Sauce Labs Data Center by creating a [post-build script](https://docs.microsoft.com/en-us/appcenter/build/custom/scripts/#post-build) in Microsoft App Center.

## What You'll Need

* A Sauce Labs account
* A [Microsoft App Center account](https://docs.microsoft.com/en-us/appcenter/)
* A [Project Source Code Repository](https://docs.microsoft.com/en-us/appcenter/build/#getting-started)


## Creating the Post-Build Script

1. Link your project source code to your App Center project.

2. Create a script called `appcenter-post-build.sh` and add it to your project source code repository.

3. If you're testing a cross-platform application using a framework such as React Native, add the following environment variables: `APP_NAME` and `BUILD_NAME`. If you're building a single project (iOS or Android), skip to the last step.

  ```bash
  #!/usr/bin/env bash
  APP_NAME="your.app.name"
  # You can find this name in the build logs of a previous project.
  # For now, we'll create an empty variable and change it based on the
  # project that's using this script.
  BUILD_NAME="your.build.name"
  ```

4. Set the correct app name based on the application platform.
  ```bash reference
  https://github.com/saucelabs/sample-app-mobile/blob/main/appcenter-post-build.sh#L30-L36
  ```

5. You can optionally set a console message to appear in your App Center logs.
  ```bash reference
  https://github.com/saucelabs/sample-app-mobile/blob/main/appcenter-post-build.sh#L41-L45
  ```

6. Add the following command to push to the Sauce Labs Data Center that contains your target real device you want to test on.
    * **Push to US Data Center**
      ```bash reference
      https://github.com/saucelabs/sample-app-mobile/blob/main/appcenter-post-build.sh#L54-L57
      ```
    * **Push to EU Data Center**
     ```bash reference
     https://github.com/saucelabs/sample-app-mobile/blob/main/appcenter-post-build.sh#L62-L65
     ```

:::tip
Use the [App Storage](/mobile-apps/app-storage) API to retrieve a specific build or obtain information regarding the build that ran during this operation.
:::
