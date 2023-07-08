---
id: crash-handler-testing
title: Testing the Crash Handler
sidebar_label: Testing the Crash Handler
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Want to try out TestFairy's world class crash handler? Use the TestFairy library to invoke a crash, in your app, and see the stacktrace in your app's session.

:::note

Available starting iOS SDK version 1.19.8

:::

<Tabs
groupId="sdk"
defaultValue="iosC"
values={[
{label: 'iOS Objective C', value: 'iosC'},
{label: 'iOS Swift', value: 'iosS'},
]}>

<TabItem value="iosC">

```js
[TestFairy crash];
```

Example

```js
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

```js
TestFairy.crash()
```

Example

```js
import UIKit

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
