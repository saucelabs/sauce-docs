---
id: tf-crash-handler
title: App Distribution (TestFairy) Crash Handler
sidebar_label: App Distribution Crash Handler
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To use the App Distribution SDK as a crash handler without any other App Distribution feature, use the code example below.

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS Objective C', value: 'iosC'},
{label: 'iOS Swift', value: 'iosS'},
]}>

<TabItem value="android">

```java
TestFairy.installCrashHandler(this, "APP_TOKEN");
```

Example

```java
import com.testfairy.TestFairy;

public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        TestFairy.installCrashHandler(this, "APP_TOKEN");
    }
}
```

</TabItem>

<TabItem value="iosC">

```js
[TestFairy installCrashHandler:@"APP_TOKEN"];
```

Example

```js
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [TestFairy installCrashHandler:@"APP_TOKEN"];
}
```

</TabItem>

<TabItem value="iosS">

```js
TestFairy.installCrashHandler("APP_TOKEN")
```

Example

```js
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        TestFairy.installCrashHandler("APP_TOKEN");
    }

}
```

</TabItem>

</Tabs>
