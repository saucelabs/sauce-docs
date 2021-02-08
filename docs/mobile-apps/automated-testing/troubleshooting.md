---
id: troubleshooting
title: Troubleshooting Automated Mobile App Tests
sidebar_label: Troubleshooting
---

There are several ways to troubleshoot your automated mobile app tests. Below are some common error messages and how to resolve them.

## Abuse Job

### Description

Your job or account has been banned for abusing the Sauce Labs service.


### Cause

Sauce Labs takes measures to safeguard our price and performance for our paying customers, including termination of accounts we believe are not operating in good faith.


### How to Resolve

If you are a paying customer, please open a support ticket at [http://support.saucelabs.com](http://support.saucelabs.com/) to request your ban be reviewed. Sauce Labs will not reverse abuse bans for Free or Open Sauce users.


## Failed to Download Mobile Application

### Description

The desired capabilities you've supplied include a URL to a mobile application to install and test. This may be a URL pointing to [storage](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137), or a hosted app online. When we started your test, we were unable to correctly download a valid application from that URL. We may have been able to download something, but that something was not a valid application.


### Causes

* You've specified an app hosted in [storage](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137), but there is nothing stored for your account with the given name
* You've specified an app hosted online, but the URL you've used can't be contacted by Sauce Labs
* You've specified an app hosted in your corporate network which can't be accessed via the Internet
* You're not providing the full path to the app file itself
* The site serving your application requires authentication


### How to Resolve

We recommend avoiding all problems with apps hosted internally by [uploading to storage](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137) instead.

If you're already using [storage](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137), check:

* Your upload to [storage](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137) has succeeded
* Your upload to [storage](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102721137) was within the last week, since Sauce Storage is cleaned out on a weekly basis
* Your uploaded app has the same MD5 hash as it does on your machine
* You're starting the `app` desired capability with `sauce-storage:` - there shouldn't be a leading `http`.
* You're using the exact name you provided via the rest API, not the original filename. For example, iif you uploaded a file named `my_app.apk` to `https://saucelabs.com/rest/v1/storage/YOUR_USERNAME/new_app_name.apk`, your file is available as `sauce storage:new_app_name.apk`.


## Internal Server Error

### Description

This is a rare but known error. It indicates that the OnDemand portion of the Sauce Labs service lost its connection with the Virtual Machine running a test. Because the connection with the VM was lost, the details of the test (logs, video, metadata) will also be lost.  

The error is expected to occur no more often than 0.1% (1 out of 1000 tests) over a sustained period of time. The same test, when run a second time, is very likely (999 out of 1000 times) to succeed.


### Cause

The first explanation is that the VM crashed. When that happens, the VM stops communicating with our OnDemand services and the VM is effectively "lost." This can happen when:

* The VM runs out of disk space or RAM
* There is a bug in the browser, OS, virtualization software, or combination of all three, which then causes the VM to crash

It's difficult to reliably distinguish between these two cases automatically. The error message “internal server error” is meant to cover both of them.  

Of the two causes above, the second is more common. Unfortunately, these crashes are hard to isolate much less prevent. They are usually not under our control and quite intermittent. This is the rate at which VMs and browsers crash, and crashes in those components can be triggered more or less often depending on what actions you choose to run within their tests.

A second possible explanation is an infrastructure problem within Sauce's service. The state of a VM running a test is kept track of by a number of daemons and database entries, which are frequently updated. Collectively, they make up the “connection” between OnDemand and the VM. The connection can be lost if the network drops packets, the database becomes corrupt, or daemons crash.

A third, very rare case is when the error can be correlated to a particular combination of requested capabilities. This happened in May 2016 with the combination of a certain screen resolution (1400x1050) and a certain OS (Windows 7) -- but only for certain tests. We no longer allow that combination to be run on our service.


### How to Resolve

Check the error rate over time. It is expected to occur approximately 0.1% of the time (1 out of 1000 tests). If the error rate remains below this level, add a retry for this kind of error into your Continuous Integration program. You can contact help@saucelabs.com to check the error rate if it’s not easy to ascertain from your own CI program.

If the error rate is over 0.1% for a short period of time, check [status.saucelabs.com](http://status.saucelabs.com/) for signs of an incident at a time corresponding to the elevated error rate. Some types of incidents (but not all) will cause Internal Server Errors.

If the error rate is over 0.1% for a sustained period of time (days or weeks), contact help@saucelabs.com. We'll try to identify a pattern to the errors (for example, is it particular to one type of browser, OS, or test). Note that this is the least likely explanation.


## Invalid Parent Tunnel

### Description

Your tests are requesting a Sauce Connect tunnel opened by one of the accounts above it in your account hierarchy. That tunnel is not available for use.


### Cause

When requesting a new Sauce Labs job, you provided the `parentTunnel` desired capability. Sauce Labs attempted to find an account above you in your account hierarchy, running a Sauce Connect tunnel, configured to be shared with subaccounts. We did not find a matching account, for one of the following reasons:

* You are requesting an account that does not exist
* You are requesting an account that is not on your team or an admin account
* You are requesting an account that is not sharing any Sauce Connect tunnels
* You are requesting an account that is not running any Sauce Connect tunnels
* You are requesting an account for which Sauce Connect tunnels have been shut down (by the user _or_ an error)


### How to Resolve

Reach out to the person who administers the account that you set as the `parentTunnel` desired capability; this person sets the tunnel sharing permissions. Ask them to confirm the following:

* They have an open Sauce Connect tunnel (they can check on the **Tunnels** page)
* They opened a tunnel with the `--shared-tunnel` option (see [Sauce Connect Proxy Command-Line Quick Reference Guide](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365781) for more information)
* They are an Admin and/or a member of your team

Restarting the Sauce Connect tunnel may be required.

Alternatively, you can remove the `parentTunnel` desired capability from your tests. If you need Sauce Connect to run your tests, you will need to set up an alternative tunnel.


## Test Didn't See a New Command for 90 Seconds

### Description

You'll see this error when Sauce Labs doesn't receive a new command from your Selenium script in more than 90 seconds (the default duration for a timeout).


### Cause

There are a couple potential causes for this error:

* The most common cause is that your script crashed, was** **forcefully interrupted, or you lost internet connectivity
* If your tests don't include a session ending request, such as a call to `driver.quit()` or `browser.stop()`, they will will keep running forever, consuming all test minutes available in your account. This error is thrown after 90 seconds as a means of preventing this.
* A less common, but still possible cause, is that your test legitimately needs more than 90 seconds to send a new command to the browser. This happens most often when a network or disk IO error occurs between Selenium API calls in your tests (for example, for DB queries, local file reads, or changes).


### How to Resolve

* Make sure you have internet connectivity
* Make sure your script includes `driver.quit()` or `browser.stop()` to conclude the test
* If your test needs more than 90 seconds to send a new command to the browser, use the `idleTimeout` desired capability to modify Sauce's wait time for further commands. You can find out more about this desired capability in the **Timeouts** section of the [Test Configuration Options](https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options) topic.


## Test Exceeded Maximum Duration of 1800 Seconds

### Description

You'll see this error when your test suite is still running in a session that has lasted more than 1800 seconds (30 minutes).

### Cause

* The most common cause for this is an infinite loop in your tests that keeps sending commands without an end clause
* Tests that run locally can take longer when run with Sauce


### How to Resolve

* Check for infinite loops in your test
* If you suspect that the error is related to latency in the Sauce network or testing infrastructure, consider breaking your test suite up into [small, autonomous, atomic tests](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365933)
* If your test needs more than 1800 seconds to complete, you can use the `maxDuration` desired capability to make Sauce wait longer for your test to complete. You can find more information about this desired capability in the Timeouts section of the [Test Configuration Options](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492) topic.


## User Terminated

### Description

The testing session was terminated by the user.


### Cause

* Your test was manually interrupted using the **Cancel** or **Breakpoint** buttons in the Sauce Labs application. Since both of these take control of the virtual machine immediately, test assets like screenshots, video, or logs that require additional execution time will not be collected and made available afterwards.


### How to Resolve

* Don't push the buttons!


## You've Exceeded Your Sauce Labs Concurrency Limit

### Description

You have requested too many tests to run at the same time.


### Cause

Each Sauce Labs account has a maximum number of tests it's allowed to have open at the same time. We refer to this as your concurrency. You can see your concurrency limit on your Sauce Labs.Sauce Labs will not run additional tests once you've reached your concurrency limit.


### How to Resolve

Run fewer tests, or [upgrade your account](https://saucelabs.com/pricing) to run more.
