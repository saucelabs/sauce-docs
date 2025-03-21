---
id: hiding-data
title: Hiding Sensitive Data
sidebar_label: Hiding Data
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

App Distribution offers a valuable feature that allows developers to conceal sensitive information from recorded sessions, ensuring that sensitive data, such as credit card information, remains protected during testing and debugging. 


For example, you might want to prevent all information related to credit card data from appearing in the session:

<Tabs
groupId="sdk"
defaultValue="android"
values={[
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'React Native', value: 'react'},
{label: 'Nativescript', value: 'native'},
{label: 'Xamarin', value: 'xamarin'},
]}>

<TabItem value="android">

To hide a view from video, all you need to do is the following:

```java
TestFairy.hideView(Integer.valueOf(R.id.my_view));
```

or

```java
TestFairy.hideView(View myView);
```

Replace `R.id.my_view` with the identifier of the view you wish to hide. Review the full example below:

Example

```java
public class MyActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_activity);

        TestFairy.hideView(findViewById(R.id.credit_card));
    }
}
```

</TabItem>

<TabItem value="ios">

To hide a view from video, all you need to do is call the static instance method hideView in the App Distribution class:

```js
UIView *view = ...
[TestFairy hideView:view];
```

Example

```js
@interface MyViewController : UIViewController {
    IBOutlet UITextField *usernameView;
    IBOutlet UITextField *creditCardView;
    IBOutlet UITextField *cvvView;
}

@implementation MyViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    [TestFairy hideView:creditCardView];
    [TestFairy hideView:cvvView];
}
```

</TabItem>

<TabItem value="react">

To hide views from your recorded session, you must pass a reference to a view to App Distribution. First, give the element to be hidden as a ref attribute. For example:

```xml
<Text ref="instructions">This will be hidden</Text>
```

Next, in a component callback, such as componentDidMount, pass the reference ID back to App Distribution by invoking hideView.

Example

```js
const TestFairy = require('react-native-testfairy');
var MyComponent = React.createClass({

    componentDidMount: function() {
        TestFairy.hideView(this.refs.instructions);
    },

    render: function() {
        return (<Text ref="instructions">This will be hidden</Text>);
    }
});
```

</TabItem>

<TabItem value="native">

```js
TestFairySDK.hideView(view);
```

Example

```js
// in Nativescript
import { TestFairySDK } from 'nativescript-testfairy';

// in Javascript
var TestFairySDK = require('nativescript-testfairy').TestFairySDK;

TestFairySDK.hideView(view);
```

</TabItem>

<TabItem value="xamarin">

```js
TestFairy.HideView (View view) - on Android
TestFairy.HideView (UIView view) - on iOS
```

Example

```js
// Be sure to import TestFairy
using TestFairyLib;

// On Android
View view = ...
TestFairy.HideView (view);

// On iOS
UIView view = ...
TestFairy.HideView (view);
```

</TabItem>

</Tabs>

### Example

Below is a screen taken from a demo video: on the left, you can see what an app usually looks like; on the right is a screenshot taken with the Card Number EditText hidden by `testfairy-secure-viewid`.

<img src={useBaseUrl('/img/testfairy/sdk/iphone-with-fields.png')} alt="iphone no hidden HTML elements" width="400"/>
<img src={useBaseUrl('/img/testfairy/sdk/iphone-no-fields.png')} alt="iphone hidden HTML elements" width="400"/>

<br clear="both"/>

:::note
- Hidden views are automatically removed from the video before being sent to App Distribution's servers, ensuring that sensitive data is never captured or exposed.
- Developers can hide multiple views within a session to protect various sensitive elements in the application.
- It is permissible to add the same view multiple times for hiding without any additional checks.
:::
