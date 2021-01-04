---
id: test-config-annotation
title: Test Configuration and Annotation
sidebar_label: Test Configuration and Annotation
---
Before running a browser or device test with Sauce Labs, you need to write your test script to launch the platform/operating system/browser combination you want, and specify the location of the app for testing. You'll also want to configure other options, such as the path to your app.

Once your test is finished, you can annotate the job with a name, tags, and pass/fail status using the Sauce Labs REST API, or Selenium's JavaScript executor.

## Getting Ready to Test
Test configuration refers to setting the desired capabilities of your test within the test script itself. There are [required capabilities for both Selenium and Appium tests](https://wiki.saucelabs.com/display/DOCS/Desired+Capabilities+Required+for+Selenium+and+Appium+Tests), as well as an extensive set of [optional capabilities](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options) (some of which are exclusive to Sauce Labs). You can use our [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator) to create the required desired capabilities for your test scripts, or use one of our [sample test frameworks](https://github.com/saucelabs-training) to set up the desired capabilities for parallel testing across multiple platform/operating systems.

## Adding Names, Tags, Build Numbers, and Pass/Fail Status after the Test
Test annotation refers to adding information to your tests after they have completed, such as setting a name, build number, tag, and Pass/Fail status. These annotations are useful for managing your tests and builds (for example, when searching and sorting tests in your [Archives](https://wiki.saucelabs.com/display/DOCS/Searching+for+Test+Results+and+Builds+on+Your+Archive+Page)). You can add annotations with our [REST API](https://wiki.saucelabs.com/display/DOCS/Annotating+Tests+with+the+Sauce+Labs+REST+API) or the [Selenium JavaScript Executor](https://wiki.saucelabs.com/display/DOCS/Annotating+Tests+with+Selenium%27s+JavaScript+Executor). You can also use [sample test frameworks](https://github.com/saucelabs-training) to automatically add annotations to your tests. 
