---
id: crash-handler-testing
title: Testing Crash Reporting with Backtrace
sidebar_label: Testing Crash Reporting
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

The Sauce Mobile Beta SDK does not install a crash handler. When you run it with Backtrace (Sauce Labs Error Reporting), Backtrace reports the crash and the SDK records the session up to the crash. The following steps show how to force a crash on iOS to verify that setup end to end. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/) for the setup itself.

`TestFairy.crash()` is a test helper: it force-crashes the app with an invalid memory access. Backtrace captures the crash.

:::note
`crash()` is an iOS-only helper. The Android SDK has no equivalent: throw a plain uncaught exception instead (for example, `throw new RuntimeException("test crash")` from a button handler), as the Sauce Labs My Demo App for Android does.
:::

## What You'll Need

- A working iOS app project with Backtrace initialized first and the Sauce Mobile Beta SDK started with `beginWithoutCrashHandler`.
- The shared attributes, including `sauce.correlation_id`, set on both SDKs before either starts.
- A build running on a device or Simulator without the Xcode debugger attached, so the crash reaches Backtrace's crash reporter. See `allowsAttachingDebugger` in [Configuring Backtrace for iOS](/error-reporting/platform-integrations/ios/configuration/).
- Basic knowledge of iOS development using either Objective-C or Swift.

## Forcing a Crash

Add a button that calls `crash()`:

<Tabs
groupId="sdk"
defaultValue="iosC"
values={[
{label: 'iOS Objective C', value: 'iosC'},
{label: 'iOS Swift', value: 'iosS'},
]}>

<TabItem value="iosC">

```objectivec
[TestFairy crash];
```

Example

```objectivec
#import "ViewController.h"
#import "TestFairy.h"

@implementation ViewController
- (void)viewDidLoad {
    [super viewDidLoad];

    UIButton* button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button.frame = CGRectMake(50, 50, 100, 30);
    [button setTitle:@"Crash" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(crashApp:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}

- (IBAction)crashApp:(id)sender {
    [TestFairy crash];
}

@end
```

</TabItem>

<TabItem value="iosS">

```swift
TestFairy.crash()
```

Example

```swift
import UIKit
import TestFairy

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()

        let button = UIButton(type: .roundedRect)
        button.frame = CGRect(x: 50, y: 50, width: 100, height: 30)
        button.setTitle("Crash", for: [])
        button.addTarget(self, action: #selector(self.crashApp(_:)), for: .touchUpInside)
        view.addSubview(button)
    }

    @IBAction func crashApp(_ sender: AnyObject) {
        TestFairy.crash()
    }
}
```

</TabItem>

</Tabs>

## Expected Result

1. The app terminates immediately. Backtrace's crash reporter writes the report to disk, and the Sauce Mobile Beta session ends at the crash.
2. Relaunch the app. Backtrace uploads the pending crash report while it initializes, and the Sauce Mobile Beta SDK starts a new session.
3. In Backtrace, open the new error. Its attributes carry the `sauce.correlation_id` value your app generated for the crashed launch, `sauce.sdk.coexistence_mode` set to `backtrace_crash_owner`, and, when your app mirrors it, `sauce.mobile_beta.session_url` pointing at the session recording.
4. In Sauce Labs Mobile App Distribution, search the session list for the same `sauce.correlation_id` value to open the recording that ends at the crash.

The crash report appears in Backtrace only. The Sauce Labs Mobile App Distribution dashboard shows the session recording that ends at the crash.

:::note
Backtrace lets you filter or group by `sauce.correlation_id` only after the attribute is indexed once per project under **Project Settings** > **Attributes**, with the UUID format. See [Indexing Attributes](/error-reporting/project-setup/attributes/).
:::
