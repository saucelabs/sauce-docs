---
id: sel-trouble
title: Troubleshooting Selenium Test Scripts
sidebar_label: Troubleshooting
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Occasionally, your Selenium test scripts may produce unexpected results. This page provides some recommendations for preventing or resolving some common issues with your Selenium tests.

## Open Commands time out, even though I see the app loaded in the video.

This is generally caused by a connection gap or a problem with the application's server handling requests incorrectly. As a first step, you should proceed with a deep analysis of the network traffic. If you make it automated and run several tests at the same time, you will have higher chances of replicating the error.

Try starting the Selenium instance with the option `captureNetworkTraffic=true` and set the browser as Firefox. This will let you pull the request info back out as JSON/XML/plain text, where you can parse that content to find any problems.

## My test that failed, but Sauce Labs shows it passing

Because of the client/server architecture that Selenium employs, there's no information about assertion results on the server side, so, for example, if your test has a step for validating that the title of your AUT is "My WebApp's Title", Sauce only sees the request to get the title from the current page. Therefore, Sauce will only return the result, without comparing it to the expected value, and consider the test to have passed, as illustrated below:

Your test:

`assertEquals(sel.getTitle(), "My Shiny WebApp's Title");``

Sauce Labs:

  `Command requested: getTitle()`
  `Result: Your Page's Title`

The way the assertion is coded does not tell Sauce Labs to fail the test if the assertion doesn't match. To resolve this disconnect, [annotate your tests with Pass/Fail status](/basics/test-config-annotation/test-annotation#setting-passfail).

## Add Logging to debug parallel testing issues

Many languages have tracing tools that are useful for debugging code problems if you're proficient in using them. Sometimes, the less complicated alternative of logging, whether through your programming language, test framework, container, or even printing to `standard out`, produces the data that helps you best deduce issues in parallel tests over time.  

Every log, regardless of how you generate it, should include:

* Timestamps
* ID of the current thread or process (where applicable)
* ID of the Selenium driver currently in use (where applicable)
* `DEBUG` or `VERBOSE` log level

A good template to log with is:

```
[TIMESTAMP] - [PROCESS ID]: [DRIVER ID] - [Log Message]
```

The log message itself should include everything relevant to the problem you're seeing, in particular:

* Just before creating a Selenium driver, with the desired capabilities
* When the driver is created successfully, with its session ID
* When a driver is going to be quit, with its session ID
* When a driver has been successfully quit, with its session ID
* When a test starts
* When a test finishes
* When a test is first about to use a Selenium driver
* Every time a test is using a Selenium driver
* When a test is about to do something that is network intensive for the browser
* When test exceptions occur
* When driver setup exceptions occur
* When any pre-test actions that set up data or browser state, are about to run
* When any pre-test actions that set up data or browser state have run
* When any post-test actions that clean up data or browser state have run
* When any post-test actions that clean up data or browser state have run

You should always include test names when talking about specific tests, Session IDs when using Selenium drivers, and Thread or Process IDs.

Once you have logs to review, here are some things to look for:

### Incorrect driver setup

* "Empty" or incomplete desired capabilities
* "Empty" or missing user authentication

### Non-thread-safe code

* Selenium session IDs changing during a single test
* Selenium session IDs being used across threads
* Tests using Selenium sessions that have already been quit
* Tests using Selenium sessions which don't exist

### Selenium Lifecycle Problems

* Selenium sessions being created all at once, but only used by tests much later
* Selenium sessions all quit at once
* Selenium session IDs being used across multiple threads
* Selenium sessions being created and never quit
* Tests using Selenium sessions that have already been quit
* Tests using Selenium sessions which don't exist

## Check How Much Parallelization Your Tests Can Stand

You should also check to see if there's a level of parallelization at which your tests work, and one where. Some Sauce Labs users have problems only once they've exceeded a certain number of parallel tests at once. For instance, problems with queuing and network congestion are often exposed when running higher numbers of parallel tests.

First up, check how many parallel tests your account is able to run simultaneously. You can check this by logging in to Sauce Labs. In the left-hand column you'll see the number of Concurrent VMs allowed for your account, which corresponds to the number of tests you can run in parallel. Make sure you're not exceeding this number, and if you are, simply throttle back on the number of parallel tests you're running until the problem resolves.

If your problem continues try slowly lowering the number of tests and see if there's a level, higher than one, at which you're no longer experiencing problems. If you find the level at which this occurs, then you can start investigating your logging to see what your tests do at higher levels, that differs from lower ones. For instance, you might discover that some of your tests rely on running in browsers with other tests, and when your parallelization goes higher, this no longer happens.

If there's no level of parallelization where your tests work correctly in parallel, or there is but it's not related to your Sauce Labs concurrency limit and you're certain it's not a networking problem, leave your parallelization at 2 and carry on diagnosis.

## Adjust test volume to isolate problems

Removing tests from your test suite can surface problematic tests or indicate a problem with the length of individual thread lifecycles.

As you remove tests, if things start functioning, slowly add tests back in to see if you can isolate problematic tests.

If removing tests doesn't stabilize your suite, or if every test above a certain number causes issues, configure your tests to run the lowest number of tests that exhibits a problem, and keep debugging.
