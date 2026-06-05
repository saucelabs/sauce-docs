---
id: sauce-mcp-tools
title: Sauce MCP Tools
sidebar_label: MCP Tools
---

:::info Beta
Sauce MCP is currently in beta. The available tools may change.
:::

Sauce MCP exposes Sauce Labs capabilities as MCP tools, grouped by capability area below. Each group lists its tools, what they do, an example prompt, and availability. You rarely name a tool yourself: you describe a goal in plain language, and your AI client decides which tools to call. For more prompts, see the [Prompting Guide](/sauce-ai/real-device-cloud-mcp-prompting-guide).

Part of the tool set is generated from the Real Device Access API, so the exact list may evolve.

The **Requirements** column shows what each tool needs. Tools tagged <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> require private (dedicated) devices and Real Device Access API concurrency. Tools tagged <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> require access to those Sauce Labs products. <span className="mcp-tag mcp-tag--muted">Standard</span> tools work with any Sauce Labs account. See [Requirements](#requirements).

## Requirements

:::important
Tools tagged <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> (creating sessions, taking screenshots, tapping, installing apps, running shell commands, capturing network traffic, and working with device files) are powered by the **Real Device Access API**. To use them, your Sauce Labs account needs:

- **Private (dedicated) devices**
- **Real Device Access API concurrency**

Without these entitlements you can still use the tools that do not require them, but creating and interacting with real-device sessions will not work. Contact your Sauce Labs account team to enable them.
:::

:::note Organization permissions
Beyond these entitlements, access to specific tools and capabilities can also depend on your role and permissions within your Sauce Labs organization. If a tool is missing or returns a permissions error, ask your organization administrator to review your team membership and access settings.
:::

## Account &amp; team

Look up account, user, team, and region information. Useful for confirming which environment your agent is working in.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `get_account_info` | Retrieve your Sauce Labs account details and concurrency limits. | "What are my account's concurrency limits?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_user` | Look up details for a specific user. | "Show the details for user jdoe." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_my_active_team` | Show the team your account is currently acting under. | "Which team am I currently using?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `lookup_teams` | Search the teams in your organization. | "List the teams in my organization." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_active_region` | Report which Sauce Labs data center the server is connected to. | "Which Sauce Labs region am I connected to?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |

## Device discovery

List devices in the Sauce Labs catalog and check their live availability before provisioning a session.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `listDevices` | List real devices in the catalog, with optional filters for OS, version, and form factor. | "What Android 14 phones are available?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `listDeviceStatus` | Show the live status (available, in use, cleaning, offline) of devices. | "Is a Galaxy S24 free right now?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `get_specific_device` | Retrieve the full descriptor for a single device. | "Show details for the iPhone 15 Pro." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

## Real device sessions

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

## App management

Install, launch, and uninstall apps from Sauce Storage on a device, and check installation status.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `installApp` | Install an app from Sauce Storage onto the device. | "Install the latest build from Sauce Storage." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `launchApp` | Launch an installed app on the device. | "Launch the app." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `uninstallApp` | Remove an installed app from the device. | "Uninstall the app from the device." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `listAppInstallations` | List apps currently installed in the session. | "What apps are installed in this session?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `waitForAppInstallation` | Wait until an app finishes installing. | "Wait until the app finishes installing." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

## Device files

Browse and manage files on the device filesystem during a session.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `listFiles` | List files in a directory on the device. | "List the files under /sdcard/Download." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `statFile` | Get metadata for a file on the device. | "Show the metadata for that file." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `removeFile` | Delete a file on the device. | "Delete /sdcard/Download/report.csv." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

## Network

Shape network conditions and capture traffic during a session.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `setNetworkConditions` | Apply custom network conditions (latency, bandwidth, packet loss) to the device. | "Throttle the connection to 3G speeds." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `setNetworkProfile` | Apply a predefined network profile to the device. | "Apply the 4G network profile." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `listNetworkProfiles` | List the available network profiles. | "What network profiles are available?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `startNetworkCapture` | Begin capturing the device's network traffic. | "Start capturing network traffic." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `stopNetworkCapture` | Stop the active network capture. | "Stop the network capture." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

## Jobs, builds &amp; assets

Inspect jobs and builds, and retrieve the assets they produce, such as logs, screenshots, video, and network captures.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `get_recent_jobs` | List your most recent jobs. | "Show my most recent jobs." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_job_details` | Retrieve the details and result of a specific job. | "Why did my last job fail?" | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_real_device_jobs` | List real-device jobs. | "List my real-device jobs." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_specific_real_device_job` | Retrieve the details of a specific real-device job. | "Show the details of job 1a2b3c." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_test_assets` | List the assets attached to a job. | "What assets does that job have?" | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_artifact_file` | Retrieve a specific artifact file from a job. | "Download the logcat from that job." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_network_har_file` | Retrieve a job's captured network traffic as a HAR file. | "Get the HAR file from that job." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `filter_har_data` | Filter a HAR capture down to the entries you care about. | "Show only the failed requests in that HAR." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `lookup_builds` | Search your builds. | "List my recent builds." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_build` | Retrieve the details of a specific build. | "Show the details of my latest build." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |

## Storage

Upload and browse app builds in Sauce Storage.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `upload_file_to_storage` | Upload an app build to Sauce Storage. | "Upload this APK to Sauce Storage." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_storage_files` | List the app builds in Sauce Storage. | "What app builds are in my storage?" | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_storage_groups` | List the storage groups (apps grouped by identifier). | "List my storage groups." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |

## Tunnels

Inspect Sauce Connect tunnels and the jobs running through them.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `get_tunnel_information` | Retrieve details for a specific tunnel. | "Show details for tunnel my-tunnel." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_tunnels_for_user` | List the tunnels owned by a user. | "Do I have any active tunnels?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_current_jobs_for_tunnel` | List the jobs currently running through a tunnel. | "What jobs are running through my tunnel?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
