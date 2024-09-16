---
id: error-messages
title: Common Error Messages
sidebar_label: Common Error Messages
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

import useBaseUrl from '@docusaurus/useBaseUrl';

Below are some Sauce Labs automated testing common error messages and how to fix them.

## Mobile and Web App Testing

### Abuse Job

**Description**

Your job or account has been banned for abusing the Sauce Labs service.

**Cause(s)**

Sauce Labs takes measures to safeguard our price and performance for our paying customers, including termination of accounts we believe are not operating in good faith.

**How to Resolve**

If you are a paying customer, please open a [Sauce Labs support ticket](http://support.saucelabs.com/) to request your ban be reviewed. Sauce Labs will not reverse abuse bans for Free or Open Sauce users.

### Internal Server Error

**Description**

This is a rare but known error. It indicates that the OnDemand portion of the Sauce Labs service lost its connection with the Virtual Machine running a test. Because the connection with the VM was lost, the details of the test (logs, video, metadata) will also be lost.

The expected rate of occurrence for this error is very low over a sustained period of time and very rarely persists across a retry of the same test. That said, it is possible to see slightly higher rates of occurrence (up to 0.3%) in mobile app tests and when the number of data points is lower. This error is not indicative of platform instability.

**Cause(s)**

The first explanation is that the VM crashed. When that happens, the VM stops communicating with our OnDemand services and the VM is effectively "lost." This can happen when:

- The VM runs out of disk space or RAM.
- There is a bug in the browser, OS, virtualization software, or combination of all three, which then causes the VM to crash.

It's difficult to reliably distinguish between these two cases automatically. The error message `“internal server error”` is meant to cover both of them.

Of the two causes above, the second is more common. Unfortunately, these crashes are hard to isolate, much less prevent. They are usually not under our control and quite intermittent. This is the rate at which VMs and browsers crash, and crashes in those components can be triggered more or less often depending on what actions you choose to run within their tests.

A second possible explanation is an infrastructure problem within Sauce's service. The state of a VM running a test is kept track of by a number of daemons and database entries, which are frequently updated. Collectively, they make up the “connection” between OnDemand and the VM. The connection can be lost if the network drops packets, the database becomes corrupt, or daemons crash.

A third, very rare case is when the error can be correlated to a particular combination of requested capabilities. This happened in May 2016 with the combination of a certain screen resolution (1400x1050) and a certain OS (Windows 7) -- but only for certain tests. We no longer allow that combination to be run on our service.

**How to Resolve**

Check the error rate over time. It is expected to occur less than 0.3% of the time. If the error rate remains below this level, add a retry for this kind of error into your Continuous Integration program. You can contact help@saucelabs.com to check the error rate if it’s not easy to ascertain from your own CI program.

If the error rate is over 0.3% for a short period of time, check our [Systems Status page](http://status.saucelabs.com/) for signs of an incident at a time corresponding to the elevated error rate. Some types of incidents (but not all) will cause Internal Server Errors.

If the error rate is over 0.3% for a sustained period of time (days or weeks), contact help@saucelabs.com. We'll try to identify a pattern to the errors (for example, is it particular to one type of browser, OS, or test). Note that this is the least likely explanation, but we do occasionally see higher rates of this error relevant to certain test environments.

### Test Exceeded Maximum Duration of 1800 Seconds

**Description**

You'll see this error when your test suite is still running in a session that has lasted more than 1800 seconds (30 minutes).

**Cause(s)**

- The most common cause for this is an infinite loop in your tests that keeps sending commands without an end clause.
- Tests that run locally can take longer when run with Sauce.

**How to Resolve**

- Check for infinite loops in your test.
- If you suspect that the error is related to latency in the Sauce network or testing infrastructure, consider breaking your test suite up into small, autonomous, atomic tests.
- If your test needs more than 1800 seconds to complete, you can use the `maxDuration` capability to make Sauce wait longer for your test to complete. You can find more information about this capability under [Test Configuration Options > Timeouts section](/dev/test-configuration-options).

### User Terminated

**Description**

The testing session was terminated by the user.

**Cause(s)**

**Virtual Devices**

Your test was manually interrupted using the Sauce Labs **Cancel** or **Breakpoint** buttons. Since both of these take control of the virtual machine immediately, test assets like screenshots, video, or logs that require additional execution time will not be collected and made available afterwards.

**Real Devices**

Your test was manually interrupted using the Sauce Labs [Real Device API](https://docs.saucelabs.com/dev/api/rdc/#stop-a-job). The usual post-processing is triggered and test assets like screenshots, video, or logs will be made available.

**How to Resolve**

Don't push the buttons!

### You've Exceeded Your Sauce Labs Concurrency Limit

**Description**

You have requested too many tests to run at the same time.

**Cause(s)**

Each Sauce Labs account has a maximum number of tests it's allowed to have open at the same time. We refer to this as your concurrency. You can see your concurrency limit on your Sauce Labs. Sauce Labs will not run additional tests once you've reached your concurrency limit.

**How to Resolve**

Run fewer tests or [upgrade your account](https://saucelabs.com/pricing) to run more.

### A Failure Occurred While Trying to Upload the Video

**Description**

After your job completed, Sauce Labs attempted to upload the video we recorded to our storage provider. Something went wrong with this process and we were unable to do so before the VM was erased. Unfortunately, there is no way for us to recover the video of this test.

**Cause**

This is generally caused by an infrastructure or network issue with Sauce Labs or our storage provider. This is very rarely caused by customer tests, but in those cases, it may be caused by the impact of the test on the virtual machine, leading, for example, to out of memory errors.

**How to Resolve**

Check our [Systems Status page](http://status.saucelabs.com/) to see if we have an ongoing incident with video storage. If not, re-run your test.

If you experience this issue repeatedly while there is no listed issue, reach out to [support.saucelabs.com](https://support.saucelabs.com/) for assistance.

### Invalid Tunnel Owner

**Description**

Your tests are requesting a Sauce Connect tunnel opened by one of the accounts above it in your account hierarchy. That tunnel is not available for use.

**Cause**

When requesting a new Sauce Labs job, you provided the `tunnelOwner` (or `parentTunnel`) capability. Sauce Labs attempted to find an account above you in your account hierarchy, running a Sauce Connect tunnel, configured to be shared with sub-accounts. We did not find a matching account, for one of the following reasons:

- You are requesting an account that does not exist.
- You are requesting an account that is not on your team or an admin account.
- You are requesting an account that is not sharing any Sauce Connect tunnels.
- You are requesting an account that is not running any Sauce Connect tunnels.
- You are requesting an account for which Sauce Connect tunnels have been shut down (by the user _or_ an error).

**How to Resolve**

Reach out to the person who administers the account that you set as the `tunnelOwner` (or `parentTunnel`) capability; this person sets the tunnel sharing permissions. Ask them to confirm the following:

- They have an open Sauce Connect tunnel (they can check on the **Tunnels** page).
- They opened a tunnel with the [`--shared-tunnel`](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/#--shared-tunnel) option.
- They are an Admin and/or a member of your team.

Restarting the Sauce Connect tunnel may be required.

Alternatively, you can remove the capability from your tests. If you need Sauce Connect to run your tests, you will need to set up an alternative tunnel.

### The New Session Request was Cancelled before a Sauce Labs Virtual Machine was Found

**Description**

Your test runner opened a network connection and requested a new Sauce Labs session, then closed the connection before Sauce Labs could make one available.

**Cause**

This error has a few potential causes:

- You're running too many tests at a time. Go to **Account** > **User Settings** and check the number of **Concurrent VMs** associated with your account, which is the maximum number of tests you can run at a time, based on your subscription level. If your account can run two concurrent VMs, and you're launching 10 tests, eight will be "queued" until one of your tests finishes and a slot frees up. However, if this takes a long time, your test runner may choose to end the queued jobs after a few minutes instead of waiting.

- High job wait times. Check our [Systems Status page](http://status.saucelabs.com) and [Sauce Labs Ops (@SauceOps) on Twitter](https://twitter.com/sauceops) for up-to-the-minute news about any issues within the service. If something causes demand for certain VMs to stack up, your jobs may be queued and (as above) terminated by your test runner.

- Client timeout with iOS Simulator tests. iOS Simulator test sessions take a little while to spin up, and your client side timeouts may not be set sufficiently to allow for this.

**How to Resolve**

- Make sure you're launching an appropriate number of jobs for your account.
- If you see this error with iOS Simulator tests, please make sure the timeouts in your test runner/framework are set to a sufficient duration to allow iOS Simulator tests to start up. We recommend a minimum of 2 minutes.

### The New Session Request Redirect Was Not Followed Before Timeout

**Description**

Your test session was abandoned because it took longer than 45 seconds to assign a Sauce Labs Virtual Machine, and your test runner did not follow the new session redirect before timeout.

**Cause**

The main cause for this error is client-side request throttling/errors. Make sure to check the logs from your test runner for any errors.
See the related [New Session Request was Cancelled before a Sauce Labs Virtual Machine was Found](#the-new-session-request-was-cancelled-before-a-sauce-labs-virtual-machine-was-found) error message for more information.

**How to Resolve**

- Make sure your test runner is not running out of resources (CPU/Network).
- Make sure your test runner has enough logging enabled to support troubleshooting.

### Selenium Didn't Complete Your Last Request on Time

**Description**

You'll see this error when Sauce Labs doesn't receive a response from Selenium or Appium to your script's last command in more than five minutes (the default duration for the timeout). Without this timeout, any tests in which the Selenium, Appium server, or browser crashes would keep running forever, consuming all test minutes available in your account.

**Cause**

There are a few potential causes for this error.

- The most common causes for this error are either unresponsive JavaScript in your app, or a bug in Selenium/Appium.
- A less common, but still possible cause, is Selenium or Appium legitimately needing more than five minutes to run your command.
- This error will also be thrown if the browser crashes during your test.

**How to Resolve**

- If the issue is Selenium needing more than five minutes to run your command, you can use the `commandTimeout` capability to have Sauce wait longer for your command to execute. You can find out more about this capability under [Test Configuration Options > Timeouts section](/dev/test-configuration-options).
- If the cause is a browser crash, the easiest way to check is to watch the video of the test. If this is the case, you may be able to resolve the error by removing memory-hungry commands from your test script, like fetching the page source or taking screenshots with Selenium.

### Test Assets Have Expired

Assets for this test are no longer available on Sauce Labs servers.

**Description**

This error occurs when you attempted to look at your test assets more than 30 days after the test was run.

**Cause**

Sauce Labs data retention policy states that test assets, including videos, screenshots, and logs, are retained for 30 days. After thirty days, you can still view the Test Details page for information about your test, such as the test parameters and metadata, but these assets will have expired and been removed.

**How to Resolve**

If you find that you regularly need to examine test assets after the 30-day retention period, Sauce Labs recommends that you download your job assets if this is an information that you must keep in your records.

### The Sauce Labs Virtual Machine Failed to Start the Browser or Device

**Description**

The Sauce Labs virtual machine was unable to start the browser or device specified for your test.

**Causes**

- If you're running a Selenium test, this usually means that you're specifying a Selenium version that isn't compatible with the browser/version/OS you selected.
- If you're running an Appium test, this usually means that you're specifying a Appium version that isn't compatible with the browser/version/OS you selected.
- You may have requested an incompatible platform/OS/browser combination.

**How to Resolve**

- You can usually resolve this error by choosing a new version of Selenium or Appium for your test, or leaving the version blank to default to the latest version.
- Check your test capabilities to make sure you haven't set an incompatible platform/operating system/browser combination.
- Use the [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to set the capabilities of your test.

### The Virtual Machine's Disk has Filled Up

**Description**

The Virtual Machine hosting the browser or device running your tests has run out of space on its virtual disk.

**Cause**

Our VMs have virtual disks that, just like hardware disks, can fill up. We make sure that our virtual machines have at least 3G free when we start a job, but sometimes complex/long-running tests fill up the guest machine's allocated space. This causes Selenium to crash, which ends your test.

This isn't always restricted to the tests, either; an app under test which consumes a large amount of memory, which suffers from significant JS memory leaks or which opens a lot of tabs can cause this issue.

**How to Resolve**

Break out your long tests into shorter tests and/or make sure that your tests are not filling up a lot of disk space on the VM.

### Unable to Find Device Within 900000ms

**Description**

This timeout occurs most frequently when you include a specific device in your test case and that device isn’t available in 15 minutes.

**Cause(s)**

Our device pool is available to all subscribed Sauce users and (as you might imagine), some devices are more popular than others. We have hundreds of device configurations and thousands of devices hosted in our data center, but sometimes a test queue is built up for the most popular devices.

**How to Resolve**

Instead of passing a specific `deviceName`:

- When you select a device from the pool, use `appium:deviceName` to [select the device dynamically](/mobile-apps/supported-devices/#dynamic-device-allocation). This way you can specify the type of device (make, model, OS) instead of a specific device, which increases the likelihood of finding an appropriate device that is available for your test to run on.
- If you are looking for a specific OS version instead of a specific make and
model, you can use the [`appium:platformVersion`](/dev/test-configuration-options#appiumplatformversion)
option to fetch a device with that OS regardless of make and model.

```java
// specific deviceId
capabilities.setCapability("appium:deviceName", "iPhone_7_15_real");

// specific platformVersion and any iPhone
capabilities.setCapability("appium:deviceName", "^iPhone.*");
capabilities.setCapability("appium:platformVersion", "15.7.5");
```

### We couldn't find a matching device in our data center

**Description**

We couldn't find a matching device in our data center that matches your requested capabilities.

**Cause(s)**

**The requested device is not available in the data center**

Have you tried validating your capabilities in our Live testing filter?

- **EU:** [https://app.eu-central-1.saucelabs.com/live/web-testing/device](https://app.eu-central-1.saucelabs.com/live/web-testing/device)
- **US-East:** [https://app.us-east-4.saucelabs.com/live/web-testing/device](https://app.us-east-4.saucelabs.com/live/web-testing/device)
- **US-West:** [https://app.saucelabs.com/live/web-testing/device](https://app.saucelabs.com/live/web-testing/device)

**Your capabilities are too strict**

In some cases you might search for a device with specific capabilities, for example, an exact OS version like “Android”: “7.1.1” or “iOS”: “15.0.0” which is not available anymore.

Have you tried:

- Validating if a device with the exact same capabilities is still available in the used data center
- Have you tried using [Dynamic Allocation](/mobile-apps/supported-devices/#static-and-dynamic-device-allocation)

**You disabled resigning for an iOS app**

Turning off resigning is only available for private iOS devices. For more information, see [Resigning Enablements](/mobile-apps/automated-testing/ipa-files/#sauce-labs-resigning-enablements).

**Are you targeting the correct data center?**

It might be that you are targeting the wrong data center. You can change your endpoint with one of the following [urls](/basics/data-center-endpoints/).

### Unable to find an available device

**Description**

We couldn't find an available device in our data center that matches your requested capabilities.

**Cause(s)**

**The requested device is (still) in use**

The requested device might not be available because it’s used. Possible reasons could be:

- **Public Devices:**
  - A matching device could not be allocated because they are all in use. We constantly monitor the usage of specific models/configurations and will add additional capacity if needed
- **Private Devices:**
  - The device is being cleaned, rebooted, or is getting a health check. See [cleaning](/mobile-apps/real-device-cleaning/).
  - A team member is using this specific device configuration for a manual/automated test.

**Your capabilities are too strict**

In some cases you might request a device with very specific capabilities which results in only one specific device. For example, you are requesting a specific iPhone 13 with iOS 15.7.1. If that device is already in use you need to wait before it is released.

Have you tried using [Dynamic Allocation](/mobile-apps/supported-devices/#static-and-dynamic-device-allocation)?

**Are you targeting the correct data center?**

It might be that you are targeting the wrong data center. You can change your endpoint with one of the following [urls](/basics/data-center-endpoints/).

## Mobile App Testing Only

### Failed to Download Mobile Application

**Description**

The capabilities you've supplied include a URL to a mobile app to install and test. This may be a URL pointing to [App Storage](/mobile-apps/app-storage), or a hosted app online. When we started your test, we were unable to correctly download a valid app from that URL. We may have been able to download something, but that something was not a valid app.

**Cause(s)**

- You've specified an app hosted in [App Storage](/mobile-apps/app-storage), but there is nothing stored for your account with the given name.
- You've specified an app hosted online, but the URL you've used can't be contacted by Sauce Labs.
- You've specified an app hosted in your corporate network which can't be accessed via the Internet.
- You're not providing the full path to the app file itself.
- The site serving your app requires authentication.
- An error occurred on our platform side. Could be related to the availability of our storage platform (error code 500). In this situation try again, if the error continues contact our [Sauce Labs Support](https://saucelabs.com/training-support).
- The verification is taking too long and timeout error appears (error code 504).

:::note
Tests that failed the validation will no longer be displayed in the failed jobs list in the Sauce Labs UI, as the check is performed before the entry is created in the database, and the request is rejected as invalid.
:::

**How to Resolve**

We recommend avoiding all problems with apps hosted internally by uploading to Sauce Labs [App Storage](/mobile-apps/app-storage) instead.

If you're already using storage, check to make sure that:

- Your upload to storage has succeeded.
- Your upload to storage was within the last 60 days.
- Your uploaded app has the same MD5 hash as it does on your machine.
- You're starting the `app` capability with `storage:filename`. There shouldn't be a leading `http`.
- You're using the exact name you provided via the rest API, not the original filename. For example, if you uploaded a file named `my_app.apk` to `https://saucelabs.com/rest/v1/storage/YOUR_USERNAME/new_app_name.apk`, your file is available as `storage:filename=new_app_name.apk`.
- Check the access permissions for the file before retrying. If you have confirmed you have permissions to access the file and you continue to get this error, contact our [Sauce Labs Support](https://saucelabs.com/training-support).

### Rate limit exceeded

**Description**

We do not allow more than ten concurrent Appium commands per Appium session. This limit prevents an overload of the Appium server. Note that even though Appium itself defines asynchronous commands, the appium protocol is fundamentally a sequential protocol. The Appium server will never execute commands in parallel, instead it queues all commands it receives and processes them one at a time.

**Cause(s)**

- You may be running more than 10 concurrent Appium commands. This often occurs without being immediately visible in your testing scripts due to certain libraries or incorrect usage of the driver.
- WebdriverIO: It is easy to accidentally send concurrent Appium commands with this driver. Common scenarios include:
  1. **Incorrect Usage of `browser.call()`:** Misusing `browser.call()` to wrap async functions can lead to unintentional parallel execution of commands if not properly managed.
  2. **Using `browser.executeAsync()`:** Developers may use `browser.executeAsync()` to run custom scripts in parallel, which can cause multiple commands to be sent simultaneously if not carefully controlled.
  3. **Chainable Commands Without Proper Await:** Webdriver-IO allows chaining commands, and if developers forget to use `await` properly, it can lead to multiple commands being executed at once.
  4. **Async/Await Mismanagement in Loops:** Using loops like `forEach` or `map` with async functions without proper await can cause all iterations to start simultaneously, leading to concurrent commands.
- Ideally, your test scripts should implement a retry strategy with exponential backoff to prevent overloading the Appium server.


## Web App Testing Only

### Test Didn't See a New Command for 90 Seconds

**Description**

You'll see this error when Sauce Labs doesn't receive a new command from your Selenium script in more than 90 seconds (the default duration for a timeout).

**Cause(s)**

There are a few potential causes for this error:

- The most common cause is that your script crashed, was forcefully interrupted, or you lost internet connectivity.
- If your tests don't include a session ending request, such as a call to `driver.quit()` or `browser.stop()`, they will keep running forever, consuming all test minutes available in your account. This error is thrown after 90 seconds as a means of preventing this.
- A less common, but still possible cause, is that your test legitimately needs more than 90 seconds to send a new command to the browser. This happens most often when a network or disk IO error occurs between Selenium API calls in your tests (for example, for DB queries, local file reads, or changes).

**How to Resolve**

- Make sure you have internet connectivity.
- Make sure your script includes `driver.quit()` or `browser.stop()` to conclude the test.
- If your test needs more than 90 seconds to send a new command to the browser, use the `idleTimeout` capability to modify the wait time for further commands. For more information, [Test Configuration Options > Timeouts section](/dev/test-configuration-options).

### The Connection with Your Virtual Machine was Lost and Your Job Can't Complete

**Description**

You'll see this error when our infrastructure loses communication with the VM being used for your test and can't regain that connection after a reasonable time. If you only get this message rarely and randomly, it is probably a fluke on our end caused by an infrastructure blip.

However, if you are experiencing this error repeatedly for a specific test or set of tests, there may be an issue on your end that's causing the failure. For example, if the error regularly appears after a specific Selenium command, there could be something wrong with the test that is causing Selenium to crash. We have also seen issues with [pre-run executables](/web-apps/automated-testing/selenium/pre-run-executables).

**Cause**

- There may have been a hiccup in our infrastructure. If this message comes up rarely and randomly, this is most likely the cause.
- If the error comes up repeatedly, there is likely an issue with your test. Most likely causes are:
  - Your test is consuming too much memory.
  - A pre-run executable is causing the browser to start to hang.

**How to Resolve**

For random, rarely occurring issues, we recommend ignoring this error and re-running your test. For repeat occurrences:

- Try breaking up your tests into smaller, more atomic, more independent chunks. We recommend that tests should take no longer than five minutes to run.
- If you suspect the problem is with your app's memory requirements, lowering the screen resolution may lower the rendering requirements.
- Try removing any pre-run executables from your capabilities to see if that resolves the problem.
- Once you've done all of the above, raise a support ticket.

### The Requested Combination of Browser, Version, and Operating System is Not Supported

**Description**

The combination of browser, version, and operating system you want to use in your tests is not supported.

**Cause**

- You may have set an invalid combination of browser/version/operating system for the capabilities of your test. For example, Safari/Windows 8 would be an invalid combination.
- You may have selected a combination or component of the combination that is not supported by Sauce Labs.
- You may have selected a version of Selenium to test with that is too old to support the browser you selected. In that case, your error message will look more like this:
  ```zh
  The requested combination of browser, version and OS is unsupported by the Selenium version requested and would lead to a test failure. Please set a different Selenium version, or just don't set it at all to default to a working version...
  ```

**How to Resolve**

- Use the [Platform Configurator](https://saucelabs.com/platform/platform-configurator#/) to set the capabilities of your test.
- Check [our list of supported platforms, operating systems, and browsers](https://saucelabs.com/platform/supported-browsers-devices) to make sure your selections are valid.
- Use a higher version of Selenium in the capabilities of your test, or leave the Selenium version blank to default to the latest version.

### Your account is not verified

**Description**

Your account is not verified. This means that the email associated with the account is not verified.

**Cause(s)**

- You may not have clicked the verification link in the email sent after signing up.
- You may have provided the wrong email during the sign up.
- You may have updated your email but then forgot to verify it.

**How to Resolve**

- Check your inbox for the verification email (it should be titled "Please verify your email address" or similar). Click the link to verify your email.
- Check your spam folder in case you couldn't find the email in your inbox.
- Sign in to [Sauce Labs](https://app.saucelabs.com/), try to re-send the email and check your inbox/spam folder again.
- Once you've done all of the above, raise a support ticket.
