---
id: app-updates
title: App Updates
sidebar_label: App Updates
description: Prompt testers running an older build to update when a newer build is marked for auto update, and control that prompt from the Sauce Mobile Beta SDK.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

Sauce Labs Mobile App Distribution can tell your testers when a newer build of your app is available. When you mark a build for auto update, testers who run an older build see a prompt the next time the Sauce Mobile Beta SDK starts a session, and one tap takes them to the download. No app code is required for this. The sections below explain what the prompt does, how to turn it off for builds that must not update themselves, how your app can react to it, and how to query the update status yourself.

## How It Works

1. Upload a new build and turn on **Auto Update** for it, either in the build's settings on the Sauce Labs Mobile App Distribution dashboard or at upload time with the `auto_update` parameter of the [Upload API](/testfairy/api-reference/upload-api/) or the `auto_update` option of the [fastlane plugin](/testfairy/ci-tools/fastlane/). Both accept `on` or `off` and default to `off`.
2. When an older build of the same app starts a session, the SDK asks Sauce Labs Mobile App Distribution whether a newer build is marked for auto update.
3. If there is one, the SDK shows a prompt that names the new version and asks whether to update, with **Yes** and **No**. On Android it reads "New version is available! Would you like to download and install version 2.1.0?". On iOS it reads "New version of My App 2.1.0 is available, would you like to upgrade now?". The SDK localizes the text.
   - **Yes** opens the link outside the app. The tester installs the new build from there, the same way they installed the current one. The SDK itself does not download or install anything.
   - **No** starts the session as usual.
4. If no newer build is marked for auto update, the session starts without a prompt.

:::note
On Android, the prompt needs an activity. If the app is in the background when the answer arrives, the SDK shows the prompt when an activity comes to the foreground. If the app is in the foreground without an activity, for example when you start the SDK in `Application.onCreate` before the first activity exists, the SDK skips the prompt for that session start, calls `onAutoUpdateDownloadFailed`, and starts the session without the update.
:::

## Turning the Prompt Off

Call `disableAutoUpdate` before `beginWithoutCrashHandler`. The SDK then ignores any newer build for that session, and no prompt is shown.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'React Native', value: 'react'},
]}>

<TabItem value="android">

```java
TestFairy.disableAutoUpdate();
TestFairy.beginWithoutCrashHandler(getApplicationContext(), "<sauce-mobile-beta-token>");
```

</TabItem>

<TabItem value="ios">

```objectivec
[TestFairy disableAutoUpdate];
[TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
```

Swift

```swift
TestFairy.disableAutoUpdate()
TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")
```

</TabItem>

<TabItem value="react">

```js
TestFairy.disableAutoUpdate();
TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>');
```

</TabItem>

</Tabs>

:::caution Store builds
Never let a build that ships through the App Store or Google Play update itself. It violates the [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) and the [Play Store Developer Distribution Agreement](https://play.google.com/about/developer-distribution-agreement.html). Call `disableAutoUpdate` in those builds, or better, keep the SDK out of them entirely. See [Sauce Mobile Beta SDK in Production](/app-distribution/sdk/tf-production).
:::

## Handling the Prompt

The session state listener tells your app what happened, for example so you can log the event. Registering a listener does not replace the SDK prompt. To show your own message instead of the prompt, see [Checking the Distribution Status](#checking-the-distribution-status). Register the listener before `beginWithoutCrashHandler`.

The table uses the iOS delegate method names. On Android and React Native the same callbacks start with `on`, for example `onAutoUpdateAvailable`, and React Native passes the URL as `{ url }`.

| Callback | When it is called |
| --- | --- |
| `autoUpdateAvailable(url)` | A newer build is marked for auto update. `url` is the link to that build. |
| `autoUpdateDownloadStarted` | The tester tapped **Yes** and the link was opened. iOS only. The Android callback exists but is not called. |
| `autoUpdateDismissed` | The tester tapped **No**. |
| `autoUpdateDownloadFailed` | The prompt could not be shown or the link could not be opened, for example because no activity was on screen. The session then starts without the update. Android only, including React Native apps running on Android. |
| `noAutoUpdateAvailable` | A session was requested and no newer build is marked for auto update. |

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'React Native', value: 'react'},
]}>

<TabItem value="android">

```java
import android.util.Log;
import com.testfairy.SessionStateListener;
import com.testfairy.TestFairy;

TestFairy.addSessionStateListener(new SessionStateListener() {
    @Override
    public void onAutoUpdateAvailable(String url) {
        Log.i("MyApp", "A newer build is available at " + url);
    }

    @Override
    public void onAutoUpdateDismissed() {
        Log.i("MyApp", "The tester declined the update");
    }
});
TestFairy.beginWithoutCrashHandler(getApplicationContext(), "<sauce-mobile-beta-token>");
```

</TabItem>

<TabItem value="ios">

```objectivec
#import "TestFairy.h"

@interface AppDelegate () <TestFairySessionStateDelegate>
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [TestFairy setSessionStateDelegate:self];
    [TestFairy beginWithoutCrashHandler:@"<sauce-mobile-beta-token>"];
    return YES;
}

- (void)autoUpdateAvailable:(NSString *)url {
    NSLog(@"A newer build is available at %@", url);
}

- (void)autoUpdateDismissed {
    NSLog(@"The tester declined the update");
}

@end
```

Swift

```swift
import TestFairy

class AppDelegate: UIResponder, UIApplicationDelegate, TestFairySessionStateDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        TestFairy.setSessionStateDelegate(self)
        TestFairy.beginWithoutCrashHandler("<sauce-mobile-beta-token>")
        return true
    }

    func autoUpdateAvailable(_ url: String) {
        print("A newer build is available at \(url)")
    }

    func autoUpdateDismissed() {
        print("The tester declined the update")
    }
}
```

</TabItem>

<TabItem value="react">

```js
import TestFairy from '@saucelabs/mobile-beta-react-native';

const subscription = TestFairy.addSessionStateListener({
  onAutoUpdateAvailable: ({ url }) => console.log(`A newer build is available at ${url}`),
  onAutoUpdateDismissed: () => console.log('The tester declined the update'),
  onAutoUpdateDownloadFailed: () => console.log('The prompt could not be shown'),
});
TestFairy.beginWithoutCrashHandler('<sauce-mobile-beta-token>');

// Later, to stop receiving the events:
subscription.remove();
```

</TabItem>

</Tabs>

## Checking the Distribution Status

On Android and iOS, `getDistributionStatus` asks Sauce Labs Mobile App Distribution about the running build without starting a session. The answer tells you whether distribution is enabled for this build (a build with the same package name or bundle identifier, version name and build number exists on the dashboard), whether a newer build is marked for auto update, and the link to that build. The link is signed and expires, so request it when you are about to use it instead of storing it.

To replace the SDK prompt with your own: call `disableAutoUpdate` before `beginWithoutCrashHandler` (see [Turning the Prompt Off](#turning-the-prompt-off)), call `getDistributionStatus`, show your own message, and open the link when the tester agrees. React Native does not expose this call.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
]}>

<TabItem value="android">

```java
import com.testfairy.DistributionStatus;
import com.testfairy.DistributionStatusListener;
import com.testfairy.TestFairy;

TestFairy.getDistributionStatus(getApplicationContext(), "<sauce-mobile-beta-token>", new DistributionStatusListener() {
    @Override
    public void onResponse(DistributionStatus status) {
        if (status.isAutoUpdateAvailable()) {
            String downloadUrl = status.getAutoUpdateDownloadUrl();
            // Show your own update message and open downloadUrl when the tester agrees.
        }
    }
});
```

</TabItem>

<TabItem value="ios">

```objectivec
[TestFairy getDistributionStatus:@"<sauce-mobile-beta-token>" callback:^(NSDictionary<NSString *, NSString *> *response, NSError *error) {
    if (response == nil) {
        return;
    }
    // response[@"status"] is @"enabled" or @"disabled".
    NSString *downloadUrl = response[@"autoUpdateDownloadUrl"];
    if (downloadUrl != nil) {
        // Show your own update message and open downloadUrl when the tester agrees.
    }
}];
```

Swift

```swift
TestFairy.getDistributionStatus("<sauce-mobile-beta-token>") { response, error in
    guard let response = response else { return }
    // response["status"] is "enabled" or "disabled".
    if let downloadUrl = response["autoUpdateDownloadUrl"] {
        // Show your own update message and open downloadUrl when the tester agrees.
    }
}
```

</TabItem>

</Tabs>
