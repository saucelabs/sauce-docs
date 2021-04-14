---
id: live-cross-browser-testing
title: Live Cross Browser Testing
sidebar_label: Live Cross Browser Testing
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Testing on a Desktop Browser
You can run live tests of your websites on a wide variety of operating system, browser, version, and screen resolution configurations.

1. In Sauce Labs, in the left navigation panel, click **LIVE** and then click **Cross Browser**.
2. Click the **Desktop** tab.

<img src={useBaseUrl('img/live-testing/desktop-test-nav.jpg')} alt="Live desktop test navigation" width="650"/>

3. In the **URL** field, enter the URL of the website you want to test.
4. If you use Sauce Connect Proxy to test applications on a local host or behind a firewall, select the tunnel from the **SAUCE CONNECT PROXY** dropdown.
5. Under **BROWSER SELECTION**, select the browser version and screen resolution you want to use in your test.
6. In the **OS VERSION** dropdown, select the OS version you want to use.

<img src={useBaseUrl('img/live-testing/desktop-test-setup.jpg')} alt="Desktop test setup" width="650"/>

7. Your recent and saved configurations are listed in the right panel, under **Recent** and **Saved**, respectively.

<img src={useBaseUrl('img/live-testing/desktop-recent-saved.jpg')} alt="Recent and saved tests" width="350"/>

8. To save your current configuration, select the **Save this configuration** check box.  

<img src={useBaseUrl('img/live-testing/desktop-saved-config.jpg')} alt="Saved test configuration" width="350"/>

9. Click **Start Session**.
You'll see a loading screen, and then the application will launch in a live test window using the configuration you selected.

<img src={useBaseUrl('img/live-testing/desktop-test-running.jpg')} alt="Desktop test running" width="650"/>

Once your session launches, you can use your mouse cursor and keyboard to interact with the website under test.

<img src={useBaseUrl('img/live-testing/desktop-test-ui.png')} alt="Desktop test interface" width="650"/>

### Desktop Test Icons

| Icon | Description |
| :--- | :--- |
| <img src={useBaseUrl('img/live-testing/stop-icon.png')} alt="Stop Session icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/info-icon.png')} alt="Session Info icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/invite-icon.png')} alt="Invite to Session icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/clipboard-icon.png')} alt="Remote clipboard content preview icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/screenshot-icon.png')} alt="Take Screenshot icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/dock-icon.png')} alt="Dock icon" width="50"/> | Centered |

## Testing on a Mobile Browser
With Sauce Labs you can run live tests of your web apps using native browsers for Android and iOS on both virtual and real mobile devices.

### What You'll Need
Know if your app is designed to run on internal or otherwise restricted networks. If it does and you're testing on real devices, use Sauce Connect Proxy to connect. For more information, see the [Sauce Connect Proxy setup for Real Device Cloud](/secure-connections/sauce-connect/setup-configuration/specialized-environments).

### Real Device
1. In Sauce Labs, in the left panel, click **Live** and then click **Cross Browser**.
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

#### Mobile Real Device Test Icons

| Icon | Description |
| :--- | :--- |
| <img src={useBaseUrl('img/live-testing/stop-icon.png')} alt="Stop Session icon" width="50"/> | Stops the current test and returns you to the test setup screen. |
| <img src={useBaseUrl('img/live-testing/info-icon.png')} alt="Session Info icon" width="50"/> | Displays information about the current test, including the URL being tested and the the specifications of the device. |
| <img src={useBaseUrl('img/live-testing/share-icon.png')} alt="Share Device icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/restart-icon.png')} alt="Restart App icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/install-icon.png')} alt="Install Dependent App icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/rotate-icon.png')} alt="Rotate Device icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/home-icon.png')} alt="Press Home icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/paste-icon.png')} alt="Paste Content icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/screenshot-icon.png')} alt="Take Screenshot icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/gps-icon.png')} alt="Set GPS icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/vitals-icon.png')} alt="Device Vitals icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/log-icon.png')} alt="Device Log icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/dock-icon.png')} alt="Dock icon" width="50"/> | Centered |

### Virtual Device
1. In Sauce Labs, in the left panel, click **Live** and then click **Cross Browser**.
2. Click the **Mobile Virtual** tab.

<img src={useBaseUrl('img/live-testing/live-mobile-virtual-nav.png')} alt="Live mobile virtual device test navigation" width="650"/>

3. In the **URL** field, enter the URL of the website you want to test.
4. If you are using Sauce Connect Proxy to access the web app you want to test, select the tunnel from the dropdown.
5. In the **Manufacturer**, **Device**, and **OS Version** dropdowns, select the specifications for the virtual device you want to use.
6. Click **Start Session**.
You'll see a loading screen, and then the URL you entered will launch in a live test window using the virtual device you selected.

<img src={useBaseUrl('img/live-testing/mobile-virtual-test-ui.png')} alt="Mobile virtual device test interface" width="650"/>

#### Mobile Virtual Device Test Icons

| Icon | Description |
| :--- | :--- |
| <img src={useBaseUrl('img/live-testing/stop-icon.png')} alt="Stop Session icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/info-icon.png')} alt="Session Info icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/invite-icon.png')} alt="Invite to Session icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/clipboard-icon.png')} alt="Remote clipboard content preview icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/screenshot-icon.png')} alt="Take Screenshot icon" width="50"/> | Centered |
| <img src={useBaseUrl('img/live-testing/dock-icon.png')} alt="Dock icon" width="50"/> | Centered |

## Running Tests in Parallel

You can run multiple live test sessions at the same time, with the number of tests limited by the concurrency allowance associated with your account. To run tests in parallel, open a new browser tab and follow the steps to set up the new session. You can switch back and forth between the sessions by clicking on the browser tabs.

## Troubleshooting Live Cross Browser Tests

Below are resolutions to common errors that you may experience in live cross browser testing.

### Seeing a Security Error Message (Error #2048)
This error is displayed when the ports used by manual testing relies are being blocked by a firewall on your end. This may also be caused by running applications such as Avast! antivirus software.

Below are the servers and ports used by manual testing. If you plan to launch manual tests locally installed browsers, we recommend checking with your network administrator confirm that you can access: `charon.saucelabs.com:443`.

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
It's possible for the manual testing VNC client to have a modifier key "stuck" down, causing any clicked links to open in new tabs. This happens if the client loses focus while a key is held down (e.g., when using Alt-Tab to switch application windows). In this case, VNC never receives the keyUp event.

To prevent this from happening: every time you focus back on the manual testing window, click in the middle of the page, then press and release all the modifier keys (i.e., Alt, Control, Command, and Shift).
