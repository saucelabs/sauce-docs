---
id: feedback
title: Getting Feedback
sidebar_label: Getting Feedback
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

/SDK/Getting_Feedback.html

https://github.com/testfairy/docs/blob/master/docs/021_SDK/91_Getting_Feedback.md

## Feedback

User/Testers feedback can contain vital and highly relevant information when testing an app.

It can improve your app user experience and make it easier for your testers to communicate with you their thoughts on how to make your app better.

### Using in-app feedback as is

TestFairy provides an easy way to collect this feedback.

If you [added the TestFairy SDK](https://docs.testfairy.com/SDK/Adding_The_SDK_To_Your_App.html) to your app, then all you need to do is enable the **In-App Bug Reporting** feature in your build settings in the TestFairy dashboard and you can start collection feedbacks from your users with `"shake to report"`:

![alt](../../img/sdk/enable_feedback.png)

When your users or testers shake their device, they will be prompted to report a feedback.

This feedback will be added to the existing session of the app they are currently running.

All feedback includes a screenshot, device information, submitter email, and text comments added. the feedback is added to the event timeline so you can easily find it.

### Customizing In-app feedback

In case you wish to use the TestFairy feedback form without having the user shake their device, you can invoke the feedback form programmatically and call the method at your choice. You can do it on any gesture, button click in your app, if the user opened the help menu, or even got an error message theyr didn't expect.

Please note that if you choose to programmatically invoke the feedback form, it will be shown regardless if the in-app feedback is disabled in your build settings.

<div data-duration-in="300" data-duration-out="100" class="docs-tabs w-tabs">
	<div class="docs-tabs-menu w-tab-menu" style="flex-wrap: wrap;">
		<a data-w-tab="tab-android" class="docs-tab w-inline-block w-tab-link w--current" style="margin: 2px;" href="#android">
			<div>Android</div>
		</a>
		<a data-w-tab="tab-ios" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#ios">
			<div>iOS</div>
		</a>
		<a data-w-tab="tab-cordova" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#cordova">
			<div>Cordova</div>
		</a>
		<a data-w-tab="tab-react-native" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#react-native">
			<div>React Native</div>
		</a>
		<a data-w-tab="tab-nativescript" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#nativescript">
			<div>Nativescript</div>
		</a>
		<a data-w-tab="tab-xamarin" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#xamarin">
			<div>Xamarin</div>
		</a>
		<a data-w-tab="tab-unity" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#unity">
			<div>Unity</div>
		</a>
		<a data-w-tab="tab-adobe-air" class="docs-tab w-inline-block w-tab-link" style="margin: 2px;" href="#adobe-air">
			<div>Adobe Air</div>
		</a>
	</div>

    <div class="docs-tabs-content w-tab-content">
    	<div data-w-tab="tab-android" class="w-tab-pane w--tab-active">
    		<h3>Syntax</h3>
      <p>
    			<b>TestFairy.showFeedbackForm();</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>

// Be sure to import TestFairy
import com.testfairy.TestFairy;

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.showFeedbackForm();

</pre>
<h4>Note:</h4> For advanced customization look <a href="https://docs.testfairy.com/reference/android/com/testfairy/FeedbackOptions.Builder.html">here </a>.

    	</div>

    	<div data-w-tab="tab-ios" class="w-tab-pane">
    		<h3>Syntax</h3>
    		<p>
    			<b>[TestFairy pushFeedbackController];</b><br />
    		</p>

    		<h3>Code Example</h3>
    		<pre>

// Be sure to import TestFairy
#import "TestFairy.h"

// Can be invoked on a button press
// or after your app passes a given page
[TestFairy pushFeedbackController];

</pre>

    		<h4>Note</h4>
    		<p>On iOS, if the <b>In-App Bug Reporting</b> feature is enabled, the feedback form will also be shown when the tester takes a screenshot.</p>

    		You can also choose to hide the user email field in the feedback form using the
    		<a href="https://docs.testfairy.com/reference/ios/Classes/TestFairy.html#//api/name/setFeedbackEmailVisible:">setFeedbackEmailVisible </a> class.
    	</div>

    	<div data-w-tab="tab-cordova" class="w-tab-pane">
    		<h3>Syntax</h3>
      <p>
    			<b>TestFairy.pushFeedbackController();</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.pushFeedbackController();

</pre>
</div>

    	<div data-w-tab="tab-react-native" class="w-tab-pane">
    		<h3>Syntax</h3>
      <p>
    			<b>TestFairy.pushFeedbackController();</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>

// Be sure to import TestFairy
const TestFairy = require('react-native-testfairy');

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.pushFeedbackController();

</pre>
</div>

    	<div data-w-tab="tab-nativescript" class="w-tab-pane">
    		<h3>Syntax</h3>
      <p>
    			<b>TestFairySDK.pushFeedbackController();</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>

// Be sure to import TestFairy
import { TestFairySDK } from 'nativescript-testfairy';

// Can be invoked on a button press
// or after your app passes a given page
TestFairySDK.pushFeedbackController();

</pre>
</div>

    	<div data-w-tab="tab-xamarin" class="w-tab-pane">
    		<h3>Syntax</h3>
      <p>
    			<b>TestFairy.SetUserId ("&lt;userId&gt;");</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>

// Be sure to import TestFairy
using TestFairyLib;

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.PushFeedbackController();

</pre>
</div>

    	<div data-w-tab="tab-unity" class="w-tab-pane">
    		<h3>Syntax</h3>
      <p>
    			<b>TestFairy.pushFeedbackController();</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>

// Be sure to import TestFairy
using TestFairyUnity;

// Can be invoked on a button press
// or after your app passes a given page
TestFairy.pushFeedbackController();

</pre>
</div>

    	<div data-w-tab="tab-adobe-air" class="w-tab-pane">
    		<h3>Syntax</h3>
      <p>
    			<b>AirTestFairy.pushFeedbackController();</b><br />
      </p>

      <h3>Code Example</h3>
      <pre>

// Be sure to import TestFairy
import com.testfairy.AirTestFairy;

// Can be invoked on a button press
// or after your app passes a given page
AirTestFairy.pushFeedbackController();

</pre>
</div>

    </div>

</div>
