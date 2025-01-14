---
id: live-cross-browser-testing
title: Live Cross Browser Testing
sidebar_label: Live Cross Browser Testing
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can run live tests of your websites on a wide variety of operating system, browser, version, and screen resolution configurations.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Testing on a Desktop Browser

1. On Sauce Labs, in the left navigation panel, click **LIVE**, and then click **Cross Browser**.
2. Click the **Desktop** tab.
   <img src={useBaseUrl('img/live-testing/desktop-test-nav.png')} alt="Live desktop test navigation" width="650"/>

3. In the **URL** field, enter the URL of the website you want to test.
4. If you use Sauce Connect Proxy to test apps on a local host or behind a firewall, select the tunnel from the **SAUCE CONNECT PROXY** dropdown list.
5. Under **BROWSER SELECTION**, select the browser version and screen resolution you want to use in your test.
6. In the **OS VERSION** dropdown list, select the OS version you want to use.
   <img src={useBaseUrl('img/live-testing/desktop-test-setup.png')} alt="Desktop test setup" width="650"/>

7. To view your recent configurations, click **Recents**.
   <img src={useBaseUrl('img/live-testing/live-testing-recent-tests-nav.png')} alt="Recent tests" width="650"/>

8. Click **Start Test**.
   A loading screen appears, and then the app launces in a live test window using the configuration you selected.

   :::caution

   If you have issues starting live tests, check your IT infrastructure and make sure you are not blocking WebSockets.

   :::

   <img src={useBaseUrl('img/live-web-apps/new-toolbar/desktop-test-running.png')} alt="Desktop test running" width="650"/>

9. Once your session launches, you can use your mouse cursor and keyboard to interact with the website under test.

10. Click **End Session** when you are done testing.

11. Optionally, [you can select an outcome and enter name for your test](#adding-a-test-name-and-outcome-to-your-test).
    <img src={useBaseUrl('img/live-testing/live-testing-end-session-page.png')} alt="Recent tests" width="550"/>

### Live Desktop Test Interface

| Icon                                                                                                               | Name              | Description                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/info.png')} alt="Session Info icon" width="35"/>               | Session Info      | Opens the **Current Session** window, which includes app and device details.                                                                        |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/share-session.png')} alt="Share session icon" width="35"/>     | Share Session     | Opens the **Share Device** window. For a sharable link to the device, click **Get Link**. <br/>Users must be logged in to be able to view the test. |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/take-screenshot.png')} alt="Take Screenshot icon" width="35"/> | Take Screenshot   | Takes a screenshot of the current device screen. The image downloads automatically as a .png                                                        |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/copy-clipboard.png')} alt="Copy clipboard icon" width="35"/>   | Copy to Clipboard | Opens the Paste Content Into Device window.                                                                                                         |

## Testing on a Mobile Browser

With Sauce Labs you can run live tests of your web apps using native browsers for Android and iOS on both virtual and real mobile devices.

### What You'll Need

Know if your app is designed to run on internal or otherwise restricted networks. If it does and you're testing on real devices, use Sauce Connect Proxy to connect. For more information, see the [Sauce Connect Proxy setup for Real Device Cloud](/secure-connections/sauce-connect/setup-configuration/specialized-environments).

### Real Device

1. On Sauce Labs, in the left panel, click **Live**, and then click **Cross Browser**.
2. Click the **Mobile Real** tab.
   <img src={useBaseUrl('img/live-testing/live-mobile-real-nav.png')} alt="Live mobile real device test navigation" width="650"/>

3. Use the filter options or **Search** field to find the type of real device you want to use in your test.
4. To mark a device as a favorite so you can find it in the future, click the pin icon next to the device name.
   <img src={useBaseUrl('img/live-testing/device-favorite.png')} alt="Favorite a device" width="350"/>

   The default sorting for the device list is **Pinned First**.

5. In the **URL** field, enter the URL of the website you want to test.
6. If you are using Sauce Connect Proxy to access the web app you want to test, select the tunnel from the dropdown list.
7. Hover over the device card and click **Start Test** .
   A loading screen appears, and then the app launces in a live test window using the configuration you selected.
   <img src={useBaseUrl('img/live-web-apps/new-toolbar/mobile-real-test-ui.png')} alt="Mobile real device test interface" width="650"/>

When you are done testing, [you can opt to select an outcome and enter a name for your test](#adding-a-test-name-and-outcome-to-your-test).

#### Live Mobile Real Device Test Interface

| Icon                                                                                                               | Name              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/info.png')} alt="Session Info icon" width="35"/>               | Session Info      | Opens the **Current Session** window, which includes app and device details.                                                                                                                                                                                                                                                                                                                                                                      |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/share-session.png')} alt="Share session icon" width="35"/>     | Share Session     | Opens the **Share Device** window. For a sharable link to the device, click **Get Link**. <br/>Users must be logged in to be able to view the test.                                                                                                                                                                                                                                                                                               |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/home.png')} alt="Home icon" width="35"/>                       | Home              | Opens the device home screen.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/dev-options.png')} alt="Developer Options icon" width="35"/>   | Developer Options | Opens the **Developer Options** panel, which includes the **Device Log** and **[Dev Tools](/web-apps/live-testing/dev-tools/)** tabs.                                                                                                                                                                                                                                                                                                             |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/take-screenshot.png')} alt="Take Screenshot icon" width="35"/> | Take Screenshot   | Takes a screenshot of the current device screen. The image downloads automatically as a .png file.                                                                                                                                                                                                                                                                                                                                                |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/rotate-device.png')} alt="Rotate Device icon" width="35"/>     | Rotate Device     | Rotates the device between portrait and landscape.                                                                                                                                                                                                                                                                                                                                                                                                |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/restart-app.png')} alt="Restart App icon" width="35"/>         | Restart App       | Restarts the app.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/device-settings.png')} alt="Device Settings icon" width="35"/> | Device Settings   | **Language** - Enables you to choose a different language from the default one. <br/> **WiFi** - Turns On/Off the Wifi. <br/> **Animations** - Turns On/Off the animations. <br/> **Audio** - Turns On/Off the audio. <br/>**Performance mode On/Off** - Enables you to increase frame rate per second, or switch back to lower frame rate video streaming, when your network connection or VPN is restrictive and you experience blurred screen. <br/> **Passcode - Android Only** -  If your app requires a device passcode/screenlock to launch, you can enable this setting to run your tests on a passcode-protected device. On Android we are setting 000000. |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/tools.png')} alt="Tools icon" width="35"/>                     | Tools             | **ADB Shell** - Opens a window to execute an ADB Command. <br/> **Set GPS Location** - Set the GPS location using coordinates or by dropping a pin on the map. <br/> **Upload file to SD Card** - Uploads a file to SD Card. <br/> **Copy to clipboard** - Opens the Paste Content Into Device window.                                                                                                                                            |

#### Device Log

<img src={useBaseUrl('img/live-testing/device-log.png')} alt="Device Log" width="450"/>

| Icon                                                                                                 | Name         | Description                                                                                                                                                                                             |
| :--------------------------------------------------------------------------------------------------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src={useBaseUrl('img/live-testing/log-level.png')} alt="Log Level" width="85"/>                 | Log Level    | <ul><li>VERBOSE </li><li>DEBUG </li><li>INFO </li><li>WARN </li><li>ERROR </li><li>ASSERT </li></ul>                                                                                                    |
| <img src={useBaseUrl('img/live-testing/search-log-icon.png')} alt="Search Log icon" width="40"/>     | Search Log   | Opens the **Search log** interface. Enter a term or terms in the search box and select or deselect the following checkboxes as necessary: <ul><li>REGEX </li><li>IGNORE CASE </li><li>INVERT </li></ul> |
| <img src={useBaseUrl('img/live-testing/pause-log-icon.png')} alt="Pause Log icon" width="40"/>       | Pause Log    | Pauses the log feed.                                                                                                                                                                                    |
| <img src={useBaseUrl('img/live-testing/wrap-text-icon.png')} alt="Wrap Text icon" width="40"/>       | Wrap Text    | Wraps text in the log for easier reading.                                                                                                                                                               |
| <img src={useBaseUrl('img/live-testing/clear-log-icon.png')} alt="Clear Log icon" width="40"/>       | Clear Log    | Clears the log feed.                                                                                                                                                                                    |
| <img src={useBaseUrl('img/live-testing/download-log-icon.png')} alt="Download Log icon" width="40"/> | Download Log | Downloads the log as a .txt file.                                                                                                                                                                       |

### Virtual Device

1. On Sauce Labs, in the left panel, click **Live**, and then click **Cross Browser**.
2. Click the **Mobile Virtual** tab.
   <img src={useBaseUrl('img/live-testing/live-mobile-virtual-nav.png')} alt="Live mobile virtual device test navigation" width="650"/>

3. In the **URL** field, enter the URL of the website you want to test.
4. If you are using Sauce Connect Proxy to access the web app you want to test, select the tunnel from the dropdown list. For more information about Sauce Connect Proxy, see [Using Sauce Connect Proxy](/secure-connections/sauce-connect).
5. In the **Manufacturer**, **Device**, and **OS Version** dropdowns, select the specifications for the virtual device you want to use.
6. Click **Start Test**.
   The loading screen appears, and then the URL you entered launches in a live test window using the virtual device you selected.
   <img src={useBaseUrl('img/live-web-apps/new-toolbar/mobile-virtual-test-ui.png')} alt="Mobile virtual device test interface" width="650"/>

When you are done testing, [you can opt to select an outcome and enter a name for your test](#adding-a-test-name-and-outcome-to-your-test).

#### Live Mobile Virtual Device Test Interface

| Icon                                                                                                               | Name              | Description                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/info.png')} alt="Session Info icon" width="35"/>               | Session Info      | Opens the **Current Session** window, which includes app and device details.                                                                        |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/share-session.png')} alt="Share session icon" width="35"/>     | Share Session     | Opens the **Share Device** window. For a sharable link to the device, click **Get Link**. <br/>Users must be logged in to be able to view the test. |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/take-screenshot.png')} alt="Take Screenshot icon" width="35"/> | Take Screenshot   | Takes a screenshot of the current device screen. The image downloads automatically as a .png                                                        |
| <img src={useBaseUrl('img/live-web-apps/new-toolbar/copy-clipboard.png')} alt="Copy clipboard icon" width="35"/>   | Copy to Clipboard | Opens the Paste Content Into Device window.                                                                                                         |

## Adding a Test Name and Outcome to Your Test

You can enter a test name and select an outcome for your Live Tests after cross-browser and mobile app testing. Adding a name and outcome to your test allows you to add more context to test descriptions and add more clarity to your test repository.

You can use test names to customize your testing experience. For example you can:

- Add descriptive names to your tests to quickly identify your findings.
- Keep track of tested steps by adding details to test names.
- Rename your tests to reflect Jira tickets or other related tasks.

:::note
Test names are limited to 255 characters. The use of emojis is not supported in the test name.
:::

- From the end session screen, you can select an outcome and enter a test name:

  - Start a Live Test session.
  - End the Live Test Session by clicking **End** on the toolbar.
  - On the test session end screen, select the test outcome and edit the test name.
    <img src={useBaseUrl('img/live-testing/live-testing-end-session-page.png')} alt="Test Name" width="550"/>

- From the test details page, you can add or edit a test name:

  - Go to **Live** -> **Test results**
  - Click a test.
  - On the test details page, click the pencil next to the test name to edit it. <img src={useBaseUrl('img/live-testing/edit-test-name-icon.png')} alt="Test Name" width="550"/>
  - Enter a descriptive name for the test, for example:
    <img src={useBaseUrl('img/live-testing/change-name-test-edit.png')} alt="Test Name" width="550"/>

## Running Tests in Parallel

You can run multiple live test sessions at the same time, with the number of tests limited by the concurrency allowance associated with your account. To run tests in parallel, open a new browser tab and follow the steps to set up the new session. You can switch back and forth between the sessions by clicking on the browser tabs.

### Time Limits and Timeouts for Cross Browser Testing

For VDC and EmuSIM, the global limitations for the live session duration are:

- Cross Browser tests for free users have an 11-minute limit from the session start.
- Cross Browser tests for paid users are limited to three hours.
- Cross Browser tests for all accounts will timeout after 90 seconds if the session is not active (that is, it has no active channels).

If there is no activity a user is automatically logged out after 30 min.

## Troubleshooting Live Cross Browser Tests

Below are resolutions to common errors that you may experience in live cross browser testing.

### Seeing a Security Error Message (Error #2048)

This error is displayed when the ports used by manual testing relies are being blocked by a firewall on your end. This may also be caused by running apps such as Avast! antivirus software.

Below are the servers and ports used by manual testing. If you plan to launch manual tests on locally installed browsers, we recommend checking with your network administrator to confirm that you can make secure websocket connections to: `api.us-west-1.saucelabs.com:443` (for US-West-1 DC) or `api.eu-central-1.saucelabs.com:443` (for EU-Central-1 DC).

### Your Job is Not Loading

When a job is not loading, one of the following errors is likely to appear:

- Error message: "Uh oh! Some error occurred while connecting to the browser"
- The job seems to start, but you see only a white text box in the middle of a black screen.

Both errors indicate that your browser is having trouble displaying the VNC stream from the remote machine. Below are some steps to troubleshoot:

#### Check the Video on Sauce

If the recorded video after the job shows a steady video stream, this indicates that the issue is in your computer or connection to Sauce Labs. However, if the Sauce Labs video shows the same issue, that indicates an issue in our service. In that case, send us the URL for the job page and a screenshot of the issue.

#### Confirm That Your Browser is Up to Date

If you're on an older version, this may cause incompatibilities. Update your browser and try again.

#### Check Your Firewall

Make sure that your machine allows full access for the interactive stream over the required ports (see the [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq)).

#### Confirm That Your Internet Connection is Stable

We recommend running Sauce tests from a machine with a wired Ethernet connection, to ensure a steady connection. If the connection flickers, this error could be thrown.

### Long Load Times or Timing Out

We've streamlined our service to provide the best possible load times. If you're experiencing slow live testing sessions, head to the [Sauce Labs Systems Status page](https://status.saucelabs.com/) and follow us on Twitter ([@SauceOps](https://twitter.com/sauceops)) for the latest updates on service issues and operations.

### Links Opening in New Tabs Instead of New Windows

It's possible for the manual testing VNC client to have a modifier key "stuck" down, causing any clicked links to open in new tabs. This happens if the client loses focus while a key is held down (for example, when using Alt-Tab to switch app windows). In this case, VNC never receives the keyUp event.

To prevent this from happening: every time you focus back on the manual testing window, click in the middle of the page, then press and release all the modifier keys (that is, Alt, Control, Command, and Shift).
