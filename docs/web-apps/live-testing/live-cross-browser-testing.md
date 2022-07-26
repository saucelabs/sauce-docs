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

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).


## Testing on a Desktop Browser

1. On Sauce Labs, in the left navigation panel, click **LIVE** and then click **Cross Browser**.
2. Click the **Desktop** tab.

<img src={useBaseUrl('img/live-testing/desktop-test-nav.png')} alt="Live desktop test navigation" width="450"/>

3. In the **URL** field, enter the URL of the website you want to test.
4. If you use Sauce Connect Proxy to test apps on a local host or behind a firewall, select the tunnel from the **SAUCE CONNECT PROXY** dropdown.
5. Under **BROWSER SELECTION**, select the browser version and screen resolution you want to use in your test.
6. In the **OS VERSION** dropdown, select the OS version you want to use.

<img src={useBaseUrl('img/live-testing/desktop-test-setup.jpg')} alt="Desktop test setup" width="550"/>

7. To view your recent configurations, click **Recents**.

<img src={useBaseUrl('img/live-testing/live-testing-recent-tests-nav.png')} alt="Recent tests" width="550"/>

8. Click **Start Session**.
You'll see a loading screen, and then the app will launch in a live test window using the configuration you selected.

<img src={useBaseUrl('img/live-testing/desktop-test-running.jpg')} alt="Desktop test running" width="650"/>

Once your session launches, you can use your mouse cursor and keyboard to interact with the website under test.

<img src={useBaseUrl('img/live-testing/desktop-test-ui.png')} alt="Desktop test interface" width="650"/>

### Live Desktop Test Interface

| Icon | Name | Description |
| :--- | :--- | :--- |
| <img src={useBaseUrl('img/live-testing/pin-unpin-icon.png')} alt="Unpin/Pin Toolbar icon" width="35"/> | Unpin/Pin Toolbar | Unpins or pins the live testing toolbar.  |
| <img src={useBaseUrl('img/live-testing/session-info-icon.png')} alt="Session Info icon" width="35"/> | Session Info | Opens the **Current Session** window, which includes app and device details. |
| <img src={useBaseUrl('img/live-testing/take-screenshot-icon.png')} alt="Take Screenshot icon" width="35"/> | Take Screenshot | Takes a screenshot of the current device screen. The image is saved on the **Test Details** page. |
| <img src={useBaseUrl('img/live-testing/invite-session-icon.png')} alt="Invite to Session icon" width="35"/> | Invite to Session | Opens the **Invite someone to watch this session** window. Copy and share the generated link to allow other users to view the test. <br/>Users must be logged in to be able to view the test. |
| <img src={useBaseUrl('img/live-testing/clipboard-icon.png')} alt="Clipboard icon" width="35"/> | Clipboard | Opens the **Remote Clipboard** window. |

## Testing on a Mobile Browser
With Sauce Labs you can run live tests of your web apps using native browsers for Android and iOS on both virtual and real mobile devices.

### What You'll Need
Know if your app is designed to run on internal or otherwise restricted networks. If it does and you're testing on real devices, use Sauce Connect Proxy to connect. For more information, see the [Sauce Connect Proxy setup for Real Device Cloud](/secure-connections/sauce-connect/setup-configuration/specialized-environments).

### Real Device
1. On Sauce Labs, in the left panel, click **LIVE** and then click **Cross Browser**.
2. Click the **Mobile Real** tab.

<img src={useBaseUrl('img/live-testing/live-mobile-real-nav.png')} alt="Live mobile real device test navigation" width="650"/>

3. Use the filter options or **Search** field to find the type of real device you want to use in your test.
4. To mark a device as a favorite so you can find it easily in the future, click the star next to the device name.

<img src={useBaseUrl('img/live-testing/device-favorite.png')} alt="Favorite a device" width="350"/>

  The default sorting for the device list is **Starred First**.

5. In the **URL** field, enter the URL of the website you want to test.
6. If you are using Sauce Connect Proxy to access the web app you want to test, select the tunnel from the dropdown.
7. Click **Launch**.
  You'll see a loading screen, and then the URL you entered will launch in a live test window using the real device you selected.

  <img src={useBaseUrl('img/live-testing/mobile-real-test-ui.png')} alt="Mobile real device test interface" width="650"/>

### Live Mobile Real Device Test Interface

| Icon | Name | Description |
| :--- | :--- | :--- |
| <img src={useBaseUrl('img/live-testing/pin-unpin-icon.png')} alt="Unpin/Pin Toolbar icon" width="35"/> | Unpin/Pin Toolbar | Unpins or pins the live testing toolbar.  |
| <img src={useBaseUrl('img/live-testing/session-info-icon.png')} alt="Session Info icon" width="35"/> | Session Info | Opens the **Current Session** window, which includes app and device details. |
| <img src={useBaseUrl('img/live-testing/take-screenshot-icon.png')} alt="Take Screenshot icon" width="35"/> | Take Screenshot | Takes a screenshot of the current device screen. The image downloads automatically as a .png file. |
| <img src={useBaseUrl('img/live-testing/share-session-icon.png')} alt="Share Session icon" width="35"/> | Share Session | Opens the **Share Device** window. For a sharable link to the device, click **Get Link**. <br/>Users must be logged in to be able to view the test.  |
| <img src={useBaseUrl('img/live-testing/rotate-device-icon.png')} alt="Rotate Device icon" width="35"/> | Rotate Device | Rotates the device between portrait and landscape. |
| <img src={useBaseUrl('img/live-testing/home-icon.png')} alt="Home icon" width="35"/> | Home | Opens the device home screen. |
| <img src={useBaseUrl('img/live-testing/more-device-options-icon.png')} alt="More Device Options icon" width="35"/> | More Device Options | **Set Location** - Set the GPS location using coordinates or by dropping a pin on the map. |
| <img src={useBaseUrl('img/live-testing/restart-app-icon.png')} alt="Restart App icon" width="35"/> | Restart App | Restarts the app. |
| <img src={useBaseUrl('img/live-testing/switch-app-version-icon.png')} alt="Switch App Version icon" width="35"/> | Switch App Version | Opens the **Switch App Version** window. To change the version of the app you are testing, hover over the version and then click **Choose version**. |
| <img src={useBaseUrl('img/live-testing/clipboard-icon.png')} alt="Clipboard icon" width="35"/> | Clipboard | Opens the **Paste Content Into Device** window. |
| <img src={useBaseUrl('img/live-testing/install-dependency-icon.png')} alt="Install Dependency icon" width="35"/> | Install Dependency | Opens the **Install Dependent App** window. |
| <img src={useBaseUrl('img/live-testing/dev-options-icon.png')} alt="Developer Options icon" width="35"/> | Developer Options | Opens the **Developer Options** panel, which includes the **Device Log** and **Dev Tools** tabs. |

### Device Log

<img src={useBaseUrl('img/live-testing/device-log.png')} alt="Device Log" width="450"/>

| Icon | Name | Description |
| :--- | :--- | :--- |
| <img src={useBaseUrl('img/live-testing/log-level.png')} alt="Log Level" width="85"/> | Log Level | <ul><li>VERBOSE </li><li>DEBUG </li><li>INFO </li><li>WARN </li><li>ERROR </li><li>ASSERT </li></ul> |
| <img src={useBaseUrl('img/live-testing/search-log-icon.png')} alt="Search Log icon" width="40"/> | Search Log | Opens the **Search log** interface. Enter a term or terms in the search box and select or deselect the following checkboxes as necessary: <ul><li>REGEX </li><li>IGNORE CASE </li><li>INVERT </li></ul> |
| <img src={useBaseUrl('img/live-testing/pause-log-icon.png')} alt="Pause Log icon" width="40"/> | Pause Log | Pauses the log feed. |
| <img src={useBaseUrl('img/live-testing/wrap-text-icon.png')} alt="Wrap Text icon" width="40"/> | Wrap Text | Wraps text in the log for easier reading. |
| <img src={useBaseUrl('img/live-testing/clear-log-icon.png')} alt="Clear Log icon" width="40"/> | Clear Log | Clears the log feed. |
| <img src={useBaseUrl('img/live-testing/download-log-icon.png')} alt="Download Log icon" width="40"/> | Download Log | Downloads the log as a .txt file. |


### Virtual Device
1. On Sauce Labs, in the left panel, click **Live** and then click **Cross Browser**.
2. Click the **Mobile Virtual** tab.

<img src={useBaseUrl('img/live-testing/live-mobile-virtual-nav.png')} alt="Live mobile virtual device test navigation" width="650"/>

3. In the **URL** field, enter the URL of the website you want to test.
4. If you are using Sauce Connect Proxy to access the web app you want to test, select the tunnel from the dropdown. For  more information about Sauce Connect Proxy, see [Using Sauce Connect Proxy](/secure-connections/sauce-connect).
5. In the **Manufacturer**, **Device**, and **OS Version** dropdowns, select the specifications for the virtual device you want to use.
6. Click **Start Session**.
You'll see a loading screen, and then the URL you entered will launch in a live test window using the virtual device you selected.

<img src={useBaseUrl('img/live-testing/mobile-virtual-test-ui.png')} alt="Mobile virtual device test interface" width="650"/>

### Live Mobile Virtual Device Test Interface

| Icon | Name | Description |
| :--- | :--- | :--- |
| <img src={useBaseUrl('img/live-testing/pin-unpin-icon.png')} alt="Unpin/Pin Toolbar icon" width="35"/> | Unpin/Pin Toolbar | Unpins or pins the live testing toolbar.  |
| <img src={useBaseUrl('img/live-testing/session-info-icon.png')} alt="Session Info icon" width="35"/> | Session Info | Opens the **Current Session** window, which includes app and device details. |
| <img src={useBaseUrl('img/live-testing/take-screenshot-icon.png')} alt="Take Screenshot icon" width="35"/> | Take Screenshot | Takes a screenshot of the current device screen. The image is saved on the **Test Details** page. |
| <img src={useBaseUrl('img/live-testing/invite-session-icon.png')} alt="Invite to Session icon" width="35"/> | Invite to Session | Opens the **Invite someone to watch this session** window. Copy and share the generated link to allow other users to view the test. <br/>Users must be logged in to be able to view the test. |
| <img src={useBaseUrl('img/live-testing/clipboard-icon.png')} alt="Clipboard icon" width="35"/> | Clipboard | Opens the **Remote Clipboard** window. |

## Running Tests in Parallel

You can run multiple live test sessions at the same time, with the number of tests limited by the concurrency allowance associated with your account. To run tests in parallel, open a new browser tab and follow the steps to set up the new session. You can switch back and forth between the sessions by clicking on the browser tabs.

## Troubleshooting Live Cross Browser Tests

Below are resolutions to common errors that you may experience in live cross browser testing.

### Seeing a Security Error Message (Error #2048)
This error is displayed when the ports used by manual testing relies are being blocked by a firewall on your end. This may also be caused by running apps such as Avast! antivirus software.

Below are the servers and ports used by manual testing. If you plan to launch manual tests locally installed browsers, we recommend checking with your network administrator to confirm that you can make secure websocket connections to: `api.us-west-1.saucelabs.com:443` (for US-West-1 DC) or `api.eu-central-1.saucelabs.com:443` (for EU-Central-1 DC).

### Your Job is Not Loading
There are two common scenarios here:

* Error message: "Uh oh! Some error occurred while connecting to the browser"
* The job seems to start, but you see only a white text box in the middle of a black screen
Both errors indicate that your browser is having trouble displaying the VNC stream from the remote machine. Here are some steps to troubleshoot:

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
It's possible for the manual testing VNC client to have a modifier key "stuck" down, causing any clicked links to open in new tabs. This happens if the client loses focus while a key is held down (e.g., when using Alt-Tab to switch app windows). In this case, VNC never receives the keyUp event.

To prevent this from happening: every time you focus back on the manual testing window, click in the middle of the page, then press and release all the modifier keys (i.e., Alt, Control, Command, and Shift).
