---
id: app-expiration
title: Invalidating Apps After Distribution
sidebar_label: Invalidating Apps
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There comes a time after distribution that you want to invalidate the app.

Some cases for invalidation include:
- Releasing a final version, and beta version should stop working
- A specific version should no longer be used, and new one should be downloaded
- A terrible fault has been found, and current version should no longer run

## Disabling Distribution

To disable a distribution of an App or a specific Build of an App, please follow the instructions for [Stopping Distribution](/testfairy/app-distribution/managing-dist/#stopping-distribution) 

After app distribution has been disabled, it could no longer be downloaded. However, in certain cases, you would 
want to programmatically detect distribution status, and notify the end-user what they need to do next.

For example:
- App detects distribution has been disabled, then present an popup message on screen and stop the process.
- App detects distribution has been disabled and opens browser to [Internal App Store](https://mobile.saucelabs.com/my) page.

## Programmatically Detecting Distribution Status

Sauce Labs' App Distribution provides a simple API to receive the distribution status as 
set in the Build Settings page.

To fetch the status of a specific version, use
```jsx title="Sample Request"
curl -XPOST \
    "https://mobile.saucelabs.com/services/?method=testfairy.session.getDistributionStatus" \
    -F token=$TESTFAIRY_APP_TOKEN \
    -F platform=0 \
    -F bundleIdentifier=com.saucelabs.mydemoapp.android \
    -F bundleVersion=22 \
    -F bundleShortVersion=2.0.1
```

<table id="table-api">
  <tbody>
    <tr>
     <td><code>token</code></td>
     <td><p>TestFairy App Token</p></td>
    </tr>
    <tr>
     <td><code>platform</code></td>
     <td><p>Mobile OS to query (0 for Android, 1 for iOS)</p></td>
    </tr>
    <tr>
     <td><code>bundleIdentifier</code></td>
     <td><p>Bundle Identifier (iOS) or Package Name (Android)</p></td>
    </tr>
    <tr>
     <td><code>bundleVersion</code></td>
     <td><p>bundleVersion (iOS) or versionCode (Android) of build to query</p></td>
    </tr>
    <tr>
     <td><code>bundleShortVersion</code></td>
     <td><p>bundleShortVersion (iOS) or versionName (Android) of build to query</p></td>
    </tr>
  </tbody>
</table>

:::note Important
App Distribution is using a Token. This is not your Sauce Labs' username and access key. The token
itself is not private and can be used only to query status. It cannot be used to access any other
data in your account.
:::

Upon response, the API will return a json with `status` equal to either `enabled` or `disabled`. For example:
```json
{"status":"enabled"}
```

If a Build cannot be found on App Distribution platform, it is assumed deleted, and the result will be `disabled`.

## Sample Code

For reference, please visit the [My Demo App](https://github.com/saucelabs/my-demo-app-android/) sample application. A method called [checkVersionIsStillSupported](https://github.com/saucelabs/my-demo-app-android/blob/main/app/src/main/java/com/saucelabs/mydemoapp/android/view/activities/MainActivity.java#L617) calls the API and will display an AlertDialog if version has expired.

