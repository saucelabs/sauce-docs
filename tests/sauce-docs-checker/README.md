# Sauce Docs Checker

**Table of Contents**
* [Overview](#overview)
* [How to Read the Output](#how-to-read-the-output)
    * [Wiki Reference Example](#wiki-reference-example)
    * [Broken Link Example](#broken-link-example)
    * [Full Output Example](#full-output-example)

## Overview
The script in this repo checks for wiki references and broken links in [https://docs.saucelabs.com](https://docs.saucelabs.com). More specifically it checks for:

* `href` tags that reference `wiki.saucelabs.com`
* Broken link references to docs.saucelabs.com (`404 Not Found` or malformed URLs)

## How to Read the Output

The script is scheduled daily via `.gitlab-ci.yaml`. After a job completes, the output is rendered in the pipeline along with a notification sent to the [`#sauce-docs-checker`](C024QEX7C2G) Slack channel.

The slack message will often read like this:

```bash
Date MM YYYY
Summary
- docs pages parsed = 390
- docs pages broken = 18
- wiki ref count = 7
    - matched = 5
    - unmatched = 2
- broken link count = 23
```

What this means is that there are:

* **18** pages that have either links to the old wiki or broken links
* **7** instances where a doc page links to the old wiki
* **23** pages that contain a link to another page in `docs.saucelabs.com` that returns a `404 Not Found` error

> NOTE:  `matched` means that there is a replacement link, and it is included in the output. `unmatched` means that there is no obvious replacement link.

### Wiki Reference Example
Consider the following output:

```bash
**** REFERENCES ****
https://docs.saucelabs.com/overview
	WIKI | Selenium | https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Selenium+for+Automated+Website+Testing => https://docs.saucelabs.comdocs.saucelabs.com/web-apps/selenium
```

This means that the url: `https://docs.saucelabs.com/overview` has a wiki reference (`href` tag) on that page, in this case it's `https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Selenium+for+Automated+Website+Testing`.

The output indicates that the correct link should be `https://docs.saucelabs.com/web-apps/selenium`. This is an example of a `matched` entry.

### Broken Link Example
Consider the following output:

```bash
https://docs.saucelabs.com/dev/test-configuration-options
  BROKEN | Application Storage | https://docs.saucelabs.com/dev/mobile-apps/app-storage | UNMATCHED
  BROKEN | Dynamic Allocation | https://docs.saucelabs.com/dev/mobile-apps/automated-testing/appium/real-devices | UNMATCHED
  BROKEN | Device Management for Real Devices | https://docs.saucelabs.com/dev/mobile-apps/supported-devices | UNMATCHED
```

This means that the url: 

  `https://docs.saucelabs.com/dev/test-configuration-options` 
  
contains three references to pages located in:
  
  `docs.saucelabs.com`
  
that return a `404 Not Found` error code. This could be for multiple reasons:

* The page was moved/removed, and the URL changed
* There's a typo in the URL / reference tag

At the end of each broken link entry contains the word `UNMATCHED`, this indicates that there is no obvious replacement link in our `301` redirect repo. In the cases above, the files were moved and no longer exist in the `/dev` location, so by simple removing that part of the URL fixes the problem.

### Full Output Example
Below is an example of a full output message that includes multiple examples of wiki references and broken links.

> NOTE: **About the Format** 
> 
> The indentation represents the source page that includes the wiki reference/broken links e.g.
> 
>   ```bash
>   Link-In-Question
>     WIKI/BROKEN | Section Name | Problem Link | MATCHED/UNMATCHED
>   ```

<details>
    <summary>Click here to see the full output</summary>

```bash
**** PARSING https://docs.saucelabs.com/ ****
*18 docs pages broken*
- docs pages parsed = 390
- wiki ref count = 7
	- matched = 5
	- unmatched = 2
- broken link count = 23
************************************
**** REFERENCES ****
https://docs.saucelabs.com/overview
	WIKI | Selenium | https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Selenium+for+Automated+Website+Testing => https://docs.saucelabs.comdocs.saucelabs.com/web-apps/selenium
	WIKI | Appium | https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Appium+for+Mobile+Application+Testing => https://docs.saucelabs.comdocs.saucelabs.com/mobile-apps/automated-testing/appium
	WIKI | Jenkins | https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Labs+with+Jenkins => https://docs.saucelabs.comdocs.saucelabs.com/ci/jenkins
	WIKI | Bamboo | https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Labs+with+Bamboo => https://docs.saucelabs.comdocs.saucelabs.com/ci/bamboo
https://docs.saucelabs.com/secure-connections/sauce-connect/setup-configuration/specialized-environments
	WIKI | Creating a Sauce Connect Tunnel for Legacy Real Device Cloud | https://wiki.saucelabs.com/display/DOCS/Creating+a+Sauce+Connect+Tunnel+for+Legacy+Real+Device+Cloud | UNMATCHED
https://docs.saucelabs.com/mobile-apps/automated-testing/appium/using-appium
	WIKI | Appium Bootcamp | https://wiki.saucelabs.com/pages/viewpage.action?pageId=63480380 | UNMATCHED
https://docs.saucelabs.com/insights/history
	WIKI | Debugging Tests with JavaScript Console Logs and HAR Files (Extended Debugging) | https://wiki.saucelabs.com/pages/viewpage.action?pageId=70072943 => https://docs.saucelabs.comdocs.saucelabs.com/insights/debug
https://docs.saucelabs.com/dev/test-configuration-options
	BROKEN | Application Storage | https://docs.saucelabs.com/dev/mobile-apps/app-storage | UNMATCHED
	BROKEN | Dynamic Allocation | https://docs.saucelabs.com/dev/mobile-apps/automated-testing/appium/real-devices | UNMATCHED
	BROKEN | Device Management for Real Devices | https://docs.saucelabs.com/dev/mobile-apps/supported-devices | UNMATCHED
https://docs.saucelabs.com/mobile-apps/supported-devices/
	BROKEN | Test Configuration Options | https://docs.saucelabs.com/mobile-apps/dev/test-configuration-options | UNMATCHED
https://docs.saucelabs.com/mobile-apps/features/index.html
	BROKEN | Virtual USB for Sauce Labs Real Devices | https://docs.saucelabs.com/mobile-apps/mobile-apps/virtual-usb | UNMATCHED
https://docs.saucelabs.com/dev/glossary
	BROKEN | Test Configuration Options | https://docs.saucelabs.com/dev/dev/test-configuration-options | UNMATCHED
	BROKEN | Sauce Connect Proxy Tunnel Modes: Ephemeral and Long-Running | https://docs.saucelabs.com/dev/secure-connections/sauce-connect/proxy-tunnels | UNMATCHED
	BROKEN | Live Testing for Native Mobile Apps on Real Devices | https://docs.saucelabs.com/dev/mobile-apps/live-testing/live-mobile-app-testing | UNMATCHED
	BROKEN | Mobile App Testing with Espresso and XCUITest | https://docs.saucelabs.com/dev/mobile-apps/automated-testing/espresso-xcuitest | UNMATCHED
	BROKEN | Live Cross Browser Testing | https://docs.saucelabs.com/dev/web-apps/live-testing/live-cross-browser-testing | UNMATCHED
https://docs.saucelabs.com/testrunner-toolkit/configuration/common-syntax
	BROKEN | XCUITest | https://docs.saucelabs.com/testrunner-toolkit/configuration/testrunner-toolkit/configuration/xcuitest | UNMATCHED
https://docs.saucelabs.com/testrunner-toolkit/configuration/puppeteer
	BROKEN | Visual Studio Code | https://docs.saucelabs.com/testrunner-toolkit/configuration/testrunner-toolkit/ide-integrations/vscode | UNMATCHED
https://docs.saucelabs.com/mobile-apps/automated-testing/appium/real-devices/index.html
	BROKEN | real device cloud requirements | https://docs.saucelabs.com/mobile-apps/automated-testing/appium/mobile-apps/supported-devices | UNMATCHED
	BROKEN | Test Configuration Options | https://docs.saucelabs.com/mobile-apps/automated-testing/appium/dev/test-configuration-options | UNMATCHED
	BROKEN | iOS and/or Android real devices for your tests | https://docs.saucelabs.com/mobile-apps/automated-testing/appium/mobile-apps/automated-testing/appium/real-devices | UNMATCHED
https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/real-devices
	BROKEN | Sauce Runner for Real Devices CLI Reference | https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/dev/cli/espresso-xcuitest/real-devices | UNMATCHED
https://docs.saucelabs.com/dev/cli/espresso-xcuitest/yaml-config
	BROKEN | Sauce Runner RDC CLI Options | https://docs.saucelabs.com/dev/cli/espresso-xcuitest/dev/cli/espresso-xcuitest/real-devices | UNMATCHED
https://docs.saucelabs.com/mobile-apps/creating-ipa-files
	BROKEN | Real Device Testing with Espresso and XCUITest | https://docs.saucelabs.com/mobile-apps/mobile-apps/automated-testing/espresso-xcuitest/real-devices | UNMATCHED
https://docs.saucelabs.com/mobile-apps/automated-testing
	BROKEN | Supported Mobile Devices | https://docs.saucelabs.com/mobile-apps/mobile-apps/supported-devices | UNMATCHED
https://docs.saucelabs.com/secure-connections/sauce-connect/installation
	BROKEN | Sauce Connect Proxy Command-Line Reference | https://docs.saucelabs.com/secure-connections/sauce-connect/dev/cli/sauce-connect-proxy | UNMATCHED
https://docs.saucelabs.com/dev/cli/virtual-usb/find-sessionid
	BROKEN | connect | https://docs.saucelabs.com/dev/cli/virtual-usb/dev/cli/virtual-usb/connect-session | UNMATCHED
https://docs.saucelabs.com/dev/cli/virtual-usb/delete-session
	BROKEN | startSession | https://docs.saucelabs.com/dev/cli/virtual-usb/dev/cli/virtual-usb/start-session | UNMATCHED
	BROKEN | sessions | https://docs.saucelabs.com/dev/cli/virtual-usb/dev/cli/virtual-usb/find-sessionid | UNMATCHED
************************************
***** Matched *****
https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Selenium+for+Automated+Website+Testing
	=> https://docs.saucelabs.comdocs.saucelabs.com/web-apps/selenium
https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Appium+for+Mobile+Application+Testing
	=> https://docs.saucelabs.comdocs.saucelabs.com/mobile-apps/automated-testing/appium
https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Labs+with+Jenkins
	=> https://docs.saucelabs.comdocs.saucelabs.com/ci/jenkins
https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Labs+with+Bamboo
	=> https://docs.saucelabs.comdocs.saucelabs.com/ci/bamboo
https://wiki.saucelabs.com/pages/viewpage.action?pageId=70072943
	=> https://docs.saucelabs.comdocs.saucelabs.com/insights/debug
************************************
***** Unmatched *****
https://wiki.saucelabs.com/display/DOCS/Creating+a+Sauce+Connect+Tunnel+for+Legacy+Real+Device+Cloud
https://wiki.saucelabs.com/pages/viewpage.action?pageId=63480380
************************************
***** Broken *****
https://docs.saucelabs.com/dev/mobile-apps/app-storage
https://docs.saucelabs.com/mobile-apps/dev/test-configuration-options
https://docs.saucelabs.com/dev/mobile-apps/automated-testing/appium/real-devices
https://docs.saucelabs.com/dev/mobile-apps/supported-devices
https://docs.saucelabs.com/mobile-apps/mobile-apps/virtual-usb
https://docs.saucelabs.com/dev/dev/test-configuration-options
https://docs.saucelabs.com/dev/secure-connections/sauce-connect/proxy-tunnels
https://docs.saucelabs.com/dev/mobile-apps/live-testing/live-mobile-app-testing
https://docs.saucelabs.com/dev/mobile-apps/automated-testing/espresso-xcuitest
https://docs.saucelabs.com/dev/web-apps/live-testing/live-cross-browser-testing
https://docs.saucelabs.com/testrunner-toolkit/configuration/testrunner-toolkit/configuration/xcuitest
https://docs.saucelabs.com/testrunner-toolkit/configuration/testrunner-toolkit/ide-integrations/vscode
https://docs.saucelabs.com/mobile-apps/automated-testing/appium/mobile-apps/supported-devices
https://docs.saucelabs.com/mobile-apps/automated-testing/appium/dev/test-configuration-options
https://docs.saucelabs.com/mobile-apps/automated-testing/appium/mobile-apps/automated-testing/appium/real-devices
https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/dev/cli/espresso-xcuitest/real-devices
https://docs.saucelabs.com/dev/cli/espresso-xcuitest/dev/cli/espresso-xcuitest/real-devices
https://docs.saucelabs.com/mobile-apps/mobile-apps/automated-testing/espresso-xcuitest/real-devices
https://docs.saucelabs.com/mobile-apps/mobile-apps/supported-devices
https://docs.saucelabs.com/secure-connections/sauce-connect/dev/cli/sauce-connect-proxy
https://docs.saucelabs.com/dev/cli/virtual-usb/dev/cli/virtual-usb/connect-session
https://docs.saucelabs.com/dev/cli/virtual-usb/dev/cli/virtual-usb/start-session
https://docs.saucelabs.com/dev/cli/virtual-usb/dev/cli/virtual-usb/find-sessionid
August 11, 2021
OK
```
</details>

In the above example
