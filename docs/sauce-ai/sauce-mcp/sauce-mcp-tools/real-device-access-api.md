---
id: real-device-access-api
title: Real Device Access API
sidebar_label: Real Device Access API
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Device discovery

List devices in the Sauce Labs catalog and check their live availability before provisioning a session.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `listDevices` | List real devices in the catalog, with optional filters for OS, version, and form factor. | "What Android 14 phones are available?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `listDeviceStatus` | Show the live status (available, in use, cleaning, offline) of devices. | "Is a Galaxy S24 free right now?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `get_specific_device` | Retrieve the full descriptor for a single device. | "Show details for the iPhone 15 Pro." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

### Real device sessions

Start, inspect, and end real-device sessions, and interact with the device directly.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `createSession` | Start a real-device session on a chosen device and return a session you reference in later calls. | "Start a session on an available Pixel 8." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `listSessions` | List your active real-device sessions. | "What sessions do I have open?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `deleteSession` | End an active session and release the device. | "Close my current session." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `take_screenshot` | Capture a PNG screenshot of the current device screen. | "Take a screenshot of the current screen." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `tap_element` | Tap an element or screen coordinates on the device. | "Tap the Login button." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `dump_ui` | Return the device's current UI hierarchy for inspection. | "What elements are on the screen right now?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `openUrl` | Open a URL on the device. | "Open example.com on the device." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `applyDeviceSettings` | Change device settings such as orientation, locale, or animations. | "Switch the device to dark mode." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `executeShellCommand` | Run an ADB shell command on an Android device. | "Run `pm list packages` on the device." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

### App management

Install, launch, and uninstall apps from Sauce Storage on a device, and check installation status.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `installApp` | Install an app from Sauce Storage onto the device. | "Install the latest build from Sauce Storage." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `launchApp` | Launch an installed app on the device. | "Launch the app." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `uninstallApp` | Remove an installed app from the device. | "Uninstall the app from the device." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `listAppInstallations` | List apps currently installed in the session. | "What apps are installed in this session?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `waitForAppInstallation` | Wait until an app finishes installing. | "Wait until the app finishes installing." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

### Device files

Browse and manage files on the device filesystem during a session.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `listFiles` | List files in a directory on the device. | "List the files under /sdcard/Download." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `statFile` | Get metadata for a file on the device. | "Show the metadata for that file." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `removeFile` | Delete a file on the device. | "Delete /sdcard/Download/report.csv." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

### Network

Shape network conditions and capture traffic during a session.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `setNetworkConditions` | Apply custom network conditions (latency, bandwidth, packet loss) to the device. | "Throttle the connection to 3G speeds." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `setNetworkProfile` | Apply a predefined network profile to the device. | "Apply the 4G network profile." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `listNetworkProfiles` | List the available network profiles. | "What network profiles are available?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `startNetworkCapture` | Begin capturing the device's network traffic. | "Start capturing network traffic." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `stopNetworkCapture` | Stop the active network capture. | "Stop the network capture." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |