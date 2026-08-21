---
id: sauce-mcp-tools
title: Sauce MCP Tools
sidebar_label: MCP Tools
---

Sauce MCP exposes Sauce Labs capabilities as MCP tools, grouped by capability area below. Each group lists its tools, what they do, an example prompt, and availability. You rarely name a tool yourself: you describe a goal in plain language, and your AI client decides which tools to call. For more prompts, see the [Prompting Guide](/sauce-ai/real-device-cloud-mcp-prompting-guide).

## Requirements

:::important
Some tools need entitlements beyond a standard Sauce Labs account:

- <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> tools (creating sessions, taking screenshots, tapping, installing apps, running shell commands, capturing network traffic, and working with device files) need **private (dedicated) devices** and **Real Device Access API concurrency**.
- <span className="mcp-tag">Test Authoring</span> tools (generating, managing, running, and scheduling test cases and suites) need **Sauce AI for Test Authoring**, a paid add-on for Enterprise accounts. See [Sauce AI for Test Authoring](/sauce-ai/ai-authoring).

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
| `get_team` | Retrieve the full profile of a team by its ID. | "Show the details for my team." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `list_team_members` | List all members of a team. | "Who's on my team?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `lookup_users` | Search the organization for users, filtered by name, email, role, status, or team. | "Find users with 'smith' in their name." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_service_account` | Get the details of a service account by ID. | "Show the details for that service account." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `lookup_service_accounts` | List the service accounts in your organization. | "List my organization's service accounts." | <span className="mcp-tag mcp-tag--muted">Standard</span> |


## Real Device Access API
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
| `openUrl` | Open a URL on the device. | "Open example.com on the device." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `applyDeviceSettings` | Change device settings such as orientation, locale, or animations. | "Switch the device to dark mode." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `executeShellCommand` | Run an ADB shell command on an Android device. | "Run `pm list packages` on the device." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

### UI interaction

Read the on-screen UI and drive the device by tapping, swiping, and typing. These tools are platform-specific.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `get_source_android` | Read the Android UI source (text, resource-id, bounds) to find elements. Android only. | "What elements are on the screen right now?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `get_source_ios` | Read the iOS UI element tree (labels, types, and coordinates). iOS only. | "What's on the screen so I can tap something?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `tap_android` | Tap an Android element by selector (text, content-desc, or resource-id). Android only. | "Tap the element with text 'Sign in'." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `tap_ios` | Tap an iOS element by its accessibility label. iOS only. | "Tap the Login button." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `tap_at_ios` | Tap an iOS screen coordinate when no unique label is available. iOS only. | "Tap the menu icon in the top-left corner." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `type_text_ios` | Type text into the focused iOS field. iOS only. | "Type my email address into the field." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `swipe_ios` | Swipe or scroll between two screen coordinates. iOS only. | "Scroll down to the bottom of the page." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

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
| `resetNetworkConditions` | Remove all network throttling and restore normal connectivity. | "Reset the network back to normal." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

### Appium and WebDriverAgent

Start and inspect a hosted Appium server or iOS WebDriverAgent for a session, so you can connect your own Appium client for advanced automation.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `startAppiumServer` | Start a hosted Appium server co-located with the device and return its URL. Optionally pin an Appium version. | "Start an Appium server for this session." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `getAppiumServerStatus` | Report the hosted Appium server's status and endpoint URL for a session. | "Is the Appium server running, and what's its URL?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `listAppiumVersions` | List the Appium versions available for real devices. | "What Appium versions can I use?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `launchWebDriverAgent` | Launch WebDriverAgent (WDA) on an iOS device for Appium-based automation. iOS only. | "Launch WebDriverAgent on this iPhone." | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |
| `getWebDriverAgentStatus` | Report WebDriverAgent's state, and its ports once it is running. iOS only. | "Is WebDriverAgent ready yet?" | <span className="mcp-tag">Private Device</span> <span className="mcp-conn">and</span> <span className="mcp-tag">Real Device Access API</span> |

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
| `get_specific_real_device_job_asset` | Download a specific asset (device logs, Appium logs, video, screenshots, HAR, or crash data) from a real-device job. | "Download the video from that real-device job." | <span className="mcp-tag">Real Device Cloud</span> |
| `get_log_json_file` | Retrieve the structured JSON command log of a virtual-device test. | "Get the command log for that VDC job." | <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_build_for_job` | Find the build a specific job belongs to. | "Which build was that job part of?" | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `lookup_jobs_in_build` | List the jobs in a build, with optional status filters. | "List the failed jobs in that build." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |

## Storage

Upload and browse app builds in Sauce Storage.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `upload_file_to_storage` | Upload an app build to Sauce Storage. | "Upload this APK to Sauce Storage." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_storage_files` | List the app builds in Sauce Storage. | "What app builds are in my storage?" | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_storage_groups` | List the storage groups (apps grouped by identifier). | "List my storage groups." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |
| `get_storage_groups_settings` | Get the settings for a storage app group. | "Show the settings for that app group." | <span className="mcp-tag">Real Device Cloud</span> <span className="mcp-conn">or</span> <span className="mcp-tag">Virtual Device Cloud</span> |

## Tunnels

Inspect Sauce Connect tunnels and the jobs running through them.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `get_tunnel_information` | Retrieve details for a specific tunnel. | "Show details for tunnel my-tunnel." | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_tunnels_for_user` | List the tunnels owned by a user. | "Do I have any active tunnels?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_current_jobs_for_tunnel` | List the jobs currently running through a tunnel. | "What jobs are running through my tunnel?" | <span className="mcp-tag mcp-tag--muted">Standard</span> |
| `get_tunnel_version_downloads` | Get the download URLs for a specific Sauce Connect version. | "Get the download links for Sauce Connect 5.2.3." | <span className="mcp-tag mcp-tag--muted">Standard</span> |

## Test Authoring

The following tools are powered by [Sauce AI for Test Authoring](/sauce-ai/ai-authoring), a paid add-on for Enterprise accounts. They let your agent generate test cases from natural-language intent, manage and run them, organize them into suites, and schedule recurring runs, all without writing code. All tools in this section require the Test Authoring add-on.

### Test cases

Generate test cases from natural-language intent and manage your saved test cases. You describe what to test, and a test case is generated, saved, and made runnable.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `generate_test_case` | Generate a test case from a natural-language intent against a web URL or a mobile app in Sauce Storage. | "Generate a test case using the latest Chrome version on Linux that logs into saucedemo.com and adds an item to the cart." | <span className="mcp-tag">Test Authoring</span> |
| `Get_test_case_generation_status` | Check the status of an asynchronous generation task and get the resulting test case ID when it completes. | "Is my test case done generating yet?" | <span className="mcp-tag">Test Authoring</span> |
| `List_test_cases` | List and search your saved test cases, with filters for search term, date range, user, team, and suite. | "List my test cases that mention checkout." | <span className="mcp-tag">Test Authoring</span> |
| `Get_a_test_case` | Retrieve the full details and steps of a single test case. | "Show me the steps in the login test case." | <span className="mcp-tag">Test Authoring</span> |
| `Rename_a_test_case` | Rename an existing test case. | "Rename that test case to 'Checkout - happy path'." | <span className="mcp-tag">Test Authoring</span> |
| `Delete_a_test_case` | Delete a test case. | "Delete the old smoke-test test case." | <span className="mcp-tag">Test Authoring</span> |

### Code generation

Export an authored test case as runnable source code in the language and framework of your choice.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `List_valid_code_generation_targets_for_a_test_case` | List the language/framework targets available for a given test case (depends on its platform). | "What languages can I export this test case to?" | <span className="mcp-tag">Test Authoring</span> |
| `Generate_source_code_for_a_test_case` | Generate source code for the latest revision of a test case in a chosen target (e.g. `javascript_webdriverio`). | "Give me this test case as Python Selenium code." | <span className="mcp-tag">Test Authoring</span> |

### Running test cases

Run authored test cases on Sauce Labs and inspect the results.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `Run_a_test_case` | Start a run of a test case against one or more browser/device targets, optionally under a build name and Sauce Connect tunnel. | "Run the login test case on Chrome and Safari." | <span className="mcp-tag">Test Authoring</span> |
| `Get_a_test_case_run` | Retrieve the status and result of a specific test case run. | "Did my last test case run pass?" | <span className="mcp-tag">Test Authoring</span> |
| `List_test_case_runs` | List the runs for a test case. | "Show the run history for this test case." | <span className="mcp-tag">Test Authoring</span> |
| `Get_artifact_file` | Retrieve an artifact file (such as a screenshot or log) produced by a test case run. | "Download the screenshot from that run." | <span className="mcp-tag">Test Authoring</span> |

### Test suites

Group test cases into suites and run them together for broader regression coverage.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `Create_a_test_suite` | Create a test suite, optionally with a name, tags, and an initial set of test cases. | "Create a 'Checkout regression' suite from these three test cases." | <span className="mcp-tag">Test Authoring</span> |
| `List_test_suites` | List your test suites. | "What test suites do I have?" | <span className="mcp-tag">Test Authoring</span> |
| `Get_a_test_suite` | Retrieve the details of a single test suite, including its test cases. | "What's in the checkout regression suite?" | <span className="mcp-tag">Test Authoring</span> |
| `Update_a_test_suite` | Update a suite: rename it, change tags, or add and remove test cases. | "Add the guest-checkout test to the regression suite." | <span className="mcp-tag">Test Authoring</span> |
| `Delete_a_test_suite` | Delete a test suite. | "Delete the old regression suite." | <span className="mcp-tag">Test Authoring</span> |
| `Run_all_test_cases_in_a_suite` | Queue runs for every test case in a suite, optionally under a shared build name. | "Run all tests in the checkout regression suite." | <span className="mcp-tag">Test Authoring</span> |

### Test schedules

Schedule test suites to run automatically on a recurring cadence.

| Tool | Description | Example prompt | Requirements |
| --- | --- | --- | --- |
| `Create_a_test_schedule` | Create a schedule that runs one or more suites on a cron cadence in a given timezone, with optional start/end dates and a max run count. | "Schedule the regression suite to run every weekday at 6am Eastern." | <span className="mcp-tag">Test Authoring</span> |
| `List_test_schedules` | List your test schedules. | "What schedules do I have set up?" | <span className="mcp-tag">Test Authoring</span> |
| `Get_a_test_schedule` | Retrieve the details of a single schedule. | "Show the settings for my nightly schedule." | <span className="mcp-tag">Test Authoring</span> |
| `Update_a_test_schedule` | Update a schedule: change its cadence, suites, run owner, or enable or pause it. | "Pause the nightly schedule." | <span className="mcp-tag">Test Authoring</span> |
| `Delete_a_test_schedule` | Delete a schedule. | "Delete the nightly schedule." | <span className="mcp-tag">Test Authoring</span> |
