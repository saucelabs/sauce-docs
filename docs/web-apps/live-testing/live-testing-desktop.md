---
id: live-testing-desktop
title: Live Testing on Desktop Browsers
sidebar_label: Live Testing on Desktop Browsers
---
You can run live tests of your websites on a wide variety of operating system, browser, version, and screen resolution configurations.

1. Log in to Sauce Labs and go to **Live > Cross-Browser**.
2. Click **Web Browser**.
3. Click **Desktop**.
4. For **Test URL**, enter the URL of the website you want to test in the browser.
5. Select the **Browser Version** and **Screen Resolution** you want to use in your test.
6. Select the **OS Version** you want to use.
You can find previous configurations you've used in your tests under **Recent**. You can also save configurations for later use by selecting **Save this Configuration**.
7. If you use [Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) to test application on local host or behind a firewall, select the tunnel to use for your tests.
8. Test assets such as screenshots are automatically saved. If you don't want to save them, clear the **Save Screenshots, Logs, & Video** option.
9. Click **Start Session**.
You'll see a loading screen, and then the application will launch in a live test window using the configuration you selected.

Once your session launches, you can use your mouse cursor and keyboard to interact with the website under test.

## Running Tests in Parallel

You can run multiple live test sessions at the same time, with the number of tests limited by the concurrency allowance associated with your account. If you want to start additional sessions, click the + icon next to the tab containing the URL of your current test session. Follow the steps to set up the session, and then you can switch back and forth between the sessions by clicking on the URL tabs.
