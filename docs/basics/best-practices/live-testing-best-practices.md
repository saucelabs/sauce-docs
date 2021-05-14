---
id: live-testing-best-practices
title: Live Testing Best Practices
sidebar_label: Live Testing Best Practices
---

* **Test early and throughout the SDLC.**

* **Run a live test to focus in on automated test bugs.** To get a closer look at bugs you uncover in automated tests, run a live test session to investigate it in more detail. One way to do this is by using your IDE or our JS executor to add a breakpoint in your code, and then take over the session.

* **Confirm if your website or app runs on a restricted network.** If your website or app under test is on a private network or behind a firewall, we recommend looking into one of the [Sauce Trusted Connection](/secure-connections.md) options.

* **Select the device/browser/OS combinations that matter most to your users.** To determine which device/browser/OS combinations to select for live testing, gather information such as usage data (e.g., Google Analytics) and device popularity by region. You can then use that data to narrow your test sample pool to about 10-20 devices, depending on the size of your target market. Prioritize device brands most commonly used by your customers, either in your target market or globally. For more information see [Mobile Testing Basics: Manual vs. Automated Testing](), [Supported Browsers & Devices](), and [Sauce Labs Real Device Cloud]().

* **Share live test sessions and results.** See [Sharing the Results of Sauce Labs Tests](), [Generate Shareable External Links to Test Results](), and [Viewing and Managing Test Results]().

* **Organize, standardize, and optimize your live tests.**
1. Plan out your test steps and your route for executing them. For best results, test scenarios beyond the expected “happy path.”
1. Run your test. Identify errors and take note of any challenges in performing tasks on the device. For errors, note the steps you took so that you can reproduce them.
1. Investigate any errors, collaborating with developers as needed.
1. Perform your test again from the start, using the same steps, to verify that nothing was broken in the process. Remember to note any changes. This step is especially important if there were any code changes.
For more information, see [Manual Testing on Mobile Devices]().

* **Confirm access to Sauce Labs live testing servers and ports.** If you plan to launch web tests from locally installed browsers, we recommend checking with your network administrator to confirm that you can access the port used by manual testing: `charon.saucelabs.com:443`. For more information, see [Troubleshooting Live Web App Tests]().

* **Save your preferred device configurations.** After running a test, you can save your selected configuration as a shortcut to use again for future tests. For more information, see []().
