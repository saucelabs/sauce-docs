---
id: real-device-cloud-mcp-prompting-guide
title: Real Device Cloud Prompting Guide
sidebar_label: Real Device Cloud Prompting Guide
---

:::info Beta
Sauce MCP is currently in beta.
:::

You drive Sauce MCP by describing a goal in plain language. Your AI client chooses the tools, calls them in order, and reports back. Clear prompts produce better results. Connect your AI client first, see [Connect your AI client](/sauce-ai/sauce-mcp-getting-started), and review the available [MCP Tools](/sauce-ai/sauce-mcp-tools).

This guide covers Real Device Cloud workflows: provisioning devices, installing apps, interacting with the device, and capturing evidence. The prompts below assume your account can use the Real Device Access API tools (private devices and Real Device Access API concurrency). See [Requirements](/sauce-ai/sauce-mcp-tools#requirements).

## Principles at a glance

| Principle | Don't say this | Do say this | Why |
| :-- | :-- | :-- | :-- |
| Be specific about the device | "Test on a phone." | "Find an available Pixel 8 running Android 14 and start a session." | The agent picks the right device when you name the model, OS, and version. |
| Name the build | "Install the app." | "Install the latest build from Sauce Storage." | The agent needs to know which build to install. |
| Chain the steps | "Test the login flow." | "Start a session on any iPhone, install the latest build, open the login screen, and take a screenshot." | One clear sequence lets the agent finish the whole task in a single request. |
| Ask for evidence | "Check if it works." | "Take a screenshot of the result and pull the last 60 seconds of logs." | You get artifacts you can attach to a ticket or PR. |
| Reuse the session | Starting a new device for every change | "Now switch the same device to dark mode and screenshot again." | Reusing the open session is faster and keeps context. |

## Best practices

### 1. Be specific about the device

- Good: "Find an available Galaxy S24 running Android 14 and start a session."
- Good: "Start a session on any available iPhone."
- Avoid: "Get me a phone." (No model, OS, or version, so the agent has to guess.)

### 2. Name the build to install

- Good: "Install the latest build from Sauce Storage."
- Good: "Install version 4.2.1 of the app."
- Avoid: "Install the app." (Which build?)

### 3. Chain the steps into one request

- Good: "Start a session on a Pixel 8, install the latest build, open the checkout screen, and take a screenshot."
- Avoid: "Test checkout." (Too vague to act on.)

### 4. Ask for the evidence you want

- Good: "Take a screenshot of the error state and pull the last 60 seconds of logs."
- Good: "Run the login flow with network capture enabled and share the captured requests."
- Avoid: "Did it work?" (No artifact is requested, so you cannot verify the result.)

### 5. Iterate in the same session

- Good: "Now set the locale to German and screenshot the same screen."
- Good: "Keep the session open, uninstall the app, then reinstall the previous build."
- Avoid: Starting a brand-new device for every small change, which is slower and loses context.

### 6. Keep one goal per step for complex flows

- Good: Break a long scenario into a few prompts and check the screenshot between steps.
- Avoid: A single prompt with ten unrelated tasks, which is harder to follow and verify.

## Example prompts

### Provision a device and install your app

Get a real device running with your app installed, ready to test.

| Goal | Example prompt |
| --- | --- |
| Start a session with the latest build | Find me an available Android device, install the latest build, and share the live view URL. |
| Verify a shipped feature | Get me an iPhone 15 Pro with the latest production build installed. Open the settings page and take a screenshot. |

### Reproduce an issue and capture evidence

Recreate a reported problem on a specific device and collect proof.

| Goal | Example prompt |
| --- | --- |
| Reproduce a customer-reported bug | Find a Galaxy S23 running Android 13, install version 4.2.1 of the app, and share the live view URL. Then take a screenshot of the error state and pull the last 60 seconds of logs. |
| Triage an escalation | Find an available Android tablet, preferably a Samsung Galaxy Tab. Install the latest build, open the dashboard screen, and take a screenshot. Is the dashboard blank or does it load? |

### Debug with logs and network traffic

Understand why something failed by inspecting logs, network calls, or the device filesystem.

| Goal | Example prompt |
| --- | --- |
| Debug a crash from logs | The app crashed when opening the camera. Pull the last 30 seconds of logs and filter for "CameraPermission" so I can see what happened. |
| Inspect network traffic | Get an available device with my latest build installed, run the registration flow with network capture enabled, and share a screenshot of the end state plus the network logs. |
| Inspect the device filesystem | Start a session on any Android 14 device, install the app, trigger a CSV export from the reports screen, and list the files under /sdcard/Download. Is the file there? |

### Test across multiple devices and platforms

Run the same check on several devices, OS versions, or form factors at once.

| Goal | Example prompt |
| --- | --- |
| Regression check after a hotfix | Get me a Samsung Galaxy S24, an iPhone 15 Pro, and a Pixel 8. Install the latest build on each, open the checkout screen, and take a screenshot from each device. |
| Compare across platforms | Test the new onboarding flow on both an Android and an iOS device with the latest build. Take a screenshot from each step so I can compare. |
| Compare across flagship devices | Start sessions on an iPhone 16 Pro, a Samsung Galaxy S25, and a Google Pixel 9. Install the latest build on each, open the home screen, and take screenshots from all three. |
| Responsive layout across screen sizes | Start sessions on an iPhone SE, an iPhone 16 Pro Max, and a Samsung Galaxy Z Fold. Install the latest build on each, open the home feed, and take screenshots from all three. |

### Verify appearance, localization, and accessibility

Confirm the UI looks right across locales, themes, text sizes, and target devices.

| Goal | Example prompt |
| --- | --- |
| Design review on target devices | Get me an iPhone 15 Pro and a Pixel 8 with the latest build. Open the profile page on both and take screenshots. |
| Check dark mode and large text | Start a session on any iPhone, install the latest build, switch the device to dark mode, and open the onboarding screen. Take a screenshot. Then change to the largest text size and screenshot the same screen. |
| Verify localization | Start a session on any Android device, install the latest build, set the device locale to Japanese, and take a screenshot of the home screen. Then switch to German and to Arabic, taking a screenshot each time so I can check the layout. |

### Review past jobs, builds, and artifacts

Look back at completed jobs and builds and pull their results or assets. These prompts do not require an active device session.

| Goal | Example prompt |
| --- | --- |
| Check recent results | Show my most recent jobs and whether they passed. |
| Investigate a failure | Why did my last real-device job fail? Pull its logs and screenshots. |
| Find a build's jobs | List my recent builds and show the jobs in the latest one. |

## What to avoid

- **Vague device or build references** such as "a phone" or "the app." Name the device, OS, version, and build.
- **Yes/no questions without evidence** such as "did it work?" Ask for a screenshot, logs, or a network capture instead.
- **Bundling many unrelated tasks** into one prompt. Group related steps, and split unrelated goals into separate prompts.
- **Assuming a device stays reserved forever.** Ask the agent to close the session when you are done so the device is released.

## Glossary

- **Real Device Cloud (RDC):** Sauce Labs service for running tests and sessions on physical mobile devices.
- **Real Device Access API:** The API that powers real-device sessions and on-device interaction. Tools that use it require private devices and Real Device Access API concurrency.
- **Private (dedicated) device:** A real device reserved for your organization, required for Real Device Access API tools.
- **Live view:** An interactive view of the live device session in the browser.
- **Sauce Storage:** Where your uploaded app builds are stored for installation on devices.
- **HAR:** An HTTP Archive file containing captured network traffic from a session.
