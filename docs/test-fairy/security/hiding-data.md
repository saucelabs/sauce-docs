---
id: hiding-data
title: Hiding Sensitive Data
sidebar_label: Hiding Data
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

/Security/Hiding_Sensitive_Data.html

https://github.com/testfairy/docs/blob/master/docs/610_Security/300_Hiding_Sensitive_Data.md

TestFairy allows developers to hide specific views from the recorded video. As a developer, you may choose to hide one or more views from the video for security and privacy reasons.

For example, you might want to prevent all information related to credit card data from appearing in the session.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;"  href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#ios">
			<div>iOS</div>
		</a>
		<a data-w-tab="tab-react-native" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#react-native">
			<div>React Native</div>
		</a>
		<a data-w-tab="tab-nativescript" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#nativescript">
			<div>Nativescript</div>
		</a>
		<a data-w-tab="tab-xamarin" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;"  href="#xamarin">
			<div>Xamarin</div>
		</a>
	</div>

    <div class="docs-tabs-content w-tab-content">
    	<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
    		<h3>Syntax</h3>
    		<p>To hide a view from video, all you need to do is this:</p>
    		<p>
    			<b>TestFairy.hideView(Integer.valueOf(R.id.my_view));</b><br />
    			or<br />
    			<b>TestFairy.hideView(View myView);</b>
    		</p>

    		<p>
    			Replace <b>R.id.my_view</b> with the identifier of the view you wish to hide. Please review the full example below:
    		</p>

    		<h3>Code Example</h3>
    		<pre>

public class MyActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_activity);

        TestFairy.hideView(findViewById(R.id.credit_card));
    }

}

</pre>
</div>

    	<div data-w-tab="tab-ios" class="w-tab-pane">
    		<h3>Syntax</h3>
    		<p>
    			To hide a view from video, all you need to do is call the static instance method hideView in the TestFairy class:
    		</p>

    		<p>
    			<b>UIView *view = ...</b><br />
    			<b>[TestFairy hideView:view];</b><br />
    		</p>

    		<h3>Code Example</h3>
    		<pre>

@interface MyViewController : UIViewController {
IBOutlet UITextField *usernameView;
IBOutlet UITextField *creditCardView;
IBOutlet UITextField \*cvvView;
}

@implementation MyViewController

- (void)viewDidLoad {
  [super viewDidLoad];

      [TestFairy hideView:creditCardView];
      [TestFairy hideView:cvvView];

  }
  </pre>
  </div>

      	<div data-w-tab="tab-react-native" class="w-tab-pane">
      		<h3>Syntax</h3>
      		<p>
      			In order to hide views from your recorded session, you will need to pass a reference to a view to TestFairy. First, give the element to be hidden a ref attribute. For example:
      		</p>

      		<p>
      			<b>&lt;Text ref="instructions"&gt;This will be hidden&lt;/Text&gt;</b>
      		</p>

      		<p>Next, in a component callback, such as componentDidMount, pass the reference ID back to TestFairy by invoking hideView.</p>

      		<h3>Code Example</h3>
      		<pre>

  const TestFairy = require('react-native-testfairy');
  var MyComponent = React.createClass({

      componentDidMount: function() {
          TestFairy.hideView(this.refs.instructions);
      },

      render: function() {
          return (&lt;Text ref="instructions"&gt;This will be hidden&lt;/Text&gt;);
      }

  });
  </pre>
  </div>

      	<div data-w-tab="tab-nativescript" class="w-tab-pane">
      		<h3>Syntax</h3>
      		<p><b>TestFairySDK.hideView(view);</b></p>

      		<h3>Code Example</h3>
      		<pre>

  // in Nativescript
  import { TestFairySDK } from 'nativescript-testfairy';

// in Javascript
var TestFairySDK = require('nativescript-testfairy').TestFairySDK;

TestFairySDK.hideView(view);

</pre>
</div>

    	<div data-w-tab="tab-xamarin" class="w-tab-pane">
    		<h3>Syntax</h3>
    		<p><b>TestFairy.HideView (View view)</b> - on Android</p>
    		<p><b>TestFairy.HideView (UIView view)</b> - on iOS</p>

    		<h3>Code Example</h3>
    		<pre>

// Be sure to import TestFairy
using TestFairyLib;

// On Android
View view = ...
TestFairy.HideView (view);

// On iOS
UIView view = ...
TestFairy.HideView (view);

</pre>
</div>

    </div>

</div>

### Sample video

Below is a sample screen taken from a demo video. On the left, you can see what the app normally looks like. On the right, there is a screenshot taken with the "Card Number" EditText hidden by testfairy-secure-viewid.

<div>
	<img style="float:left; border: none; box-shadow: none;" src="../../img/ios/hidden_views/iphone-with-fields.png" width="400" />
	<img style="float:left; border: none; box-shadow: none;" src="../../img/ios/hidden_views/iphone-no-fields.png" width="400" />
</div>

<br clear="both"/>

### Notes

- Hidden views are removed **before** sending video.
- You may hide multiple views.
- You may add the same view multiple times, no checks needed.
