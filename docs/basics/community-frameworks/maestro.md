---
id: maestro
title: Maestro on Sauce Labs with maestro-runner
sidebar_label: Maestro (maestro-runner)
description: Run Maestro YAML flows on Sauce Labs Android emulators, iOS simulators, and Android and iOS real devices with the open-source maestro-runner CLI.
keywords:
- maestro
- maestro-runner
- appium
- community
- mobile
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CommunitySupport from './\_partials/\_community-support.md';

<p><span className="sauceGreen">Community Supported</span> <span className="sauceGreen">Virtual and Real Devices</span></p>

Maestro is a YAML-based mobile UI testing framework. maestro-runner is an open-source command-line tool, maintained by
DeviceLab, that runs unmodified Maestro flows by translating each flow step into Appium commands. Point it at the
Sauce Labs Appium endpoint and your existing Maestro flows run on Sauce Labs Android emulators, iOS simulators, and
Android and iOS real devices, with the video, device log, Appium log, and screenshots you get from any Appium job.

<CommunitySupport />

Sauce Labs validated this guide with maestro-runner 1.1.25 in September 2026. Use 1.1.25 or later; earlier versions
could lose pre-created sessions to the Sauce Labs idle timeout during parallel runs.

## How It Works with Sauce Labs

```text
+--------------------------+            +-----------------------------+            +----------------------------+
|  Your machine or CI      |            |  Sauce Labs                 |            |  Sauce Labs device         |
|                          |   Appium   |  ondemand.<dc>.saucelabs    |   Appium   |  emulator, simulator, or   |
|  Maestro YAML flows      |  (HTTPS)   |  .com/wd/hub                |            |  real device               |
|  maestro-runner          | ---------> |  Appium server              | ---------> |  your app from App Storage |
|  --driver appium         |            |                             |            |                            |
+--------------------------+            +-----------------------------+            +----------------------------+
            |                                          |
            | HTML, JUnit, Allure reports              | video, logs, screenshots, pass/fail
            v                                          v
   local report directory                     Sauce Labs Test Results
```

1. You upload your app build to Sauce Labs App Storage.
2. You write one Appium capabilities file per Sauce Labs target type: Android emulator, iOS simulator, Android real
   device, or iOS real device.
3. maestro-runner opens an Appium session on Sauce Labs with those capabilities and translates each Maestro step
   (`tapOn`, `inputText`, `assertVisible`, and so on) into Appium commands.
4. Sauce Labs records the job like any Appium test: video, device log, Appium log, and a screenshot per command.
5. When the flow finishes, maestro-runner names the Sauce Labs job after the flow file, sets its pass or fail status
   through the Sauce Labs REST API, and writes HTML, JUnit, and Allure reports locally.

Nothing runs on the Sauce Labs side except the Appium session. maestro-runner needs no Sauce Labs specific
configuration beyond the endpoint URL and capabilities.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a
  [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- [Node.js](https://nodejs.org/en/) to install maestro-runner from npm.
- Your app builds: an `.apk` for Android, an `.ipa` for iOS real devices, and a zipped `.app` simulator build for iOS
  simulators. To try the steps without your own app, use the Sauce Labs My Demo App builds in the
  [Sauce Labs maestro-runner demo repository](https://github.com/saucelabs-training/demo-maestro-runner).
- Maestro flows. The demo repository includes flows for the My Demo App on both platforms.

## Step 1: Install maestro-runner

Install maestro-runner as a development dependency of your test project. It is a single binary with no Java
requirement.

```bash
npm install --save-dev maestro-runner
npx maestro-runner --version
```

You can also download a release binary from the
[maestro-runner GitHub releases](https://github.com/devicelab-dev/maestro-runner/releases).

## Step 2: Link Your Sauce Labs Account

Set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as environment variables so you never write them into flows,
capabilities files, or CI configuration.

```bash title="Check Environment Variables"
echo $SAUCE_USERNAME
echo $SAUCE_ACCESS_KEY
```

If nothing is returned, set them:

```bash
export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your Sauce access key"
```

## Step 3: Upload Your App to Sauce Labs

maestro-runner installs your app from [Sauce Labs App Storage](/mobile-apps/app-storage). Upload each build to the
data center you will run in, and keep the file name that your capabilities file references.

```bash title="Upload to App Storage (US West)"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
  --request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \
  --form 'payload=@"SauceLabs-Demo-App.apk"' \
  --form 'name="SauceLabs-Demo-App.apk"'
```

Repeat for the `.ipa` and the simulator `.zip`. You can also upload through
[Sauce Labs > App Management](https://app.saucelabs.com/app-management) or the
[Upload File to App Storage](/dev/api/storage/#upload-file-to-app-storage) API.

:::note
App Storage is per data center. If you switch between `us-west-1`, `eu-central-1`, and `us-east-4`, upload the
build again in the new data center.
:::

## Step 4: Create a Capabilities File for Each Target

maestro-runner reads standard Appium capabilities from a JSON file passed with `--caps`. Create one file per Sauce
Labs target type. The examples below are the files Sauce Labs validated with the My Demo App; replace the `appium:app`
file name, and for Android the package and activity, with your own.

<Tabs
groupId="sauce-target"
defaultValue="android-emulator"
values={[
{label: 'Android Emulator', value: 'android-emulator'},
{label: 'Android ARM Emulator', value: 'android-arm-emulator'},
{label: 'iOS Simulator', value: 'ios-simulator'},
{label: 'Android Real Device', value: 'android-real-device'},
{label: 'iOS Real Device', value: 'ios-real-device'},
]}>

<TabItem value="android-emulator">

```json title="provider-caps/android-emulator.json"
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Google Pixel 9 Emulator",
  "appium:platformVersion": "16.0",
  "appium:app": "storage:filename=SauceLabs-Demo-App.apk",
  "appium:appPackage": "com.saucelabs.mydemoapp.android",
  "appium:appActivity": ".view.activities.SplashActivity",
  "appium:appWaitActivity": "*",
  "sauce:options": {
    "build": "maestro-android-emulator",
    "appiumVersion": "2.11.0"
  }
}
```

</TabItem>
<TabItem value="android-arm-emulator">

```json title="provider-caps/android-arm-emulator.json"
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Google ARM Medium Phone Emulator",
  "appium:platformVersion": "16.0",
  "appium:app": "storage:filename=SauceLabs-Demo-App.apk",
  "appium:appPackage": "com.saucelabs.mydemoapp.android",
  "appium:appActivity": ".view.activities.SplashActivity",
  "appium:appWaitActivity": "*",
  "sauce:options": {
    "build": "maestro-android-arm-emulator",
    "appiumVersion": "2.11.0"
  }
}
```

</TabItem>
<TabItem value="ios-simulator">

```json title="provider-caps/ios-simulator.json"
{
  "platformName": "iOS",
  "appium:automationName": "XCUITest",
  "appium:deviceName": "iPhone Simulator",
  "appium:platformVersion": "18.0",
  "appium:app": "storage:filename=SauceLabs-Demo-App.Simulator.zip",
  "appium:iosInstallPause": 5000,
  "appium:appLaunchStateTimeoutSec": 120,
  "appium:settings": {
    "waitForIdleTimeout": 3000,
    "animationCoolOffTimeout": 2
  },
  "sauce:options": {
    "build": "maestro-ios-simulator",
    "appiumVersion": "2.11.3"
  }
}
```

</TabItem>
<TabItem value="android-real-device">

```json title="provider-caps/android-real-device.json"
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Samsung.*",
  "appium:platformVersion": "^1[6-7].*",
  "appium:app": "storage:filename=SauceLabs-Demo-App.apk",
  "sauce:options": {
    "build": "maestro-android-real-device",
    "appiumVersion": "latest"
  }
}
```

</TabItem>
<TabItem value="ios-real-device">

```json title="provider-caps/ios-real-device.json"
{
  "platformName": "iOS",
  "appium:automationName": "XCUITest",
  "appium:deviceName": "iPhone.*",
  "appium:platformVersion": "^(18|26).*",
  "appium:app": "storage:filename=SauceLabs-Demo-App.ipa",
  "sauce:options": {
    "build": "maestro-ios-real-device",
    "appiumVersion": "latest",
    "resigningEnabled": true
  }
}
```

</TabItem>
</Tabs>

Points to note:

- `appium:app` uses the `storage:filename=` form, so the file name must match the upload in Step 3 exactly.
- Emulator and simulator names and OS versions come from the [Platform Configurator](/basics/platform-configurator).
  ARM emulators are described on the [Android Emulators](/mobile-apps/android-emulators) page.
- Real device capabilities use regular expressions for `appium:deviceName` and `appium:platformVersion` so Sauce Labs
  can allocate any matching device. See [Appium on Real Devices](/mobile-apps/automated-testing/appium/real-devices).
- iOS real devices need [`resigningEnabled: true`](/dev/test-configuration-options/#resigningenabled) so Sauce Labs can
  install your `.ipa`. iOS simulators need the simulator build, not the `.ipa`.
- Pin [`appiumVersion`](/dev/test-configuration-options/#appiumversion) to a version listed on the
  [Appium Versions](/mobile-apps/automated-testing/appium/appium-versions) page.
- Leave your username and access key out of the file. maestro-runner takes them from the endpoint URL in Step 5.
- Set [`build`](/dev/test-configuration-options/#build) so you can find all the jobs from one run in Test Results.
  Add [`name`](/dev/test-configuration-options/#name) only if you want a fixed job name instead of the flow name.

## Step 5: Run a Flow

Pass the Sauce Labs Appium endpoint, with your credentials, as `--appium-url`, and the capabilities file for the
target you want. The last argument is a flow file or a directory of flows.

```bash title="Run one flow on an Android emulator (US West)"
export SAUCE_HUB="https://$SAUCE_USERNAME:$SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub"

npx maestro-runner --driver appium --appium-url "$SAUCE_HUB" \
  --caps provider-caps/android-emulator.json \
  test --output results/android-emulator flows/android/login_standard_user.yaml
```

For the EU Central or US East data centers, replace `us-west-1` with `eu-central-1` or `us-east-4`. See
[Data Center Endpoints](/basics/data-center-endpoints).

The flow itself is ordinary Maestro YAML. Nothing in it refers to Sauce Labs:

```yaml title="flows/android/login_standard_user.yaml"
appId: com.saucelabs.mydemoapp.android
name: Login - standard user
tags:
  - smoke
  - login
---
- assertVisible:
    id: "productRV"
- tapOn:
    id: "menuIV"
- tapOn: "Log In"
- tapOn:
    id: "nameET"
- inputText: "bod@example.com"
- tapOn:
    id: "passwordET"
- inputText: "10203040"
- hideKeyboard
- tapOn:
    id: "loginBtn"
- assertVisible:
    id: "menuIV"
```

## Step 6: View Your Results

maestro-runner prints each step as it runs and writes HTML, JUnit, and Allure reports to the `--output` directory.
The Sauce Labs job is available as soon as the session ends under
[Automated > Test Results](https://app.saucelabs.com/dashboard/tests/vdc) for emulators and simulators, or
[Real Devices](https://app.saucelabs.com/dashboard/tests/rdc) for real devices. Filter by the `build` value you set in
Step 4.

## Running Suites in Parallel

maestro-runner can run a directory of flows across several Sauce Labs sessions at once, or run them all in one
session.

```bash title="Four concurrent emulator sessions"
npx maestro-runner --driver appium --appium-url "$SAUCE_HUB" \
  --caps provider-caps/android-emulator.json \
  test --parallel 4 --output results/android-parallel flows/android/
```

```bash title="Whole iOS suite in one reused real device session"
npx maestro-runner --driver appium --appium-url "$SAUCE_HUB" \
  --caps provider-caps/ios-real-device.json \
  test --parallel 1 --output results/ios-suite flows/ios/
```

- `--parallel N` starts up to N Sauce Labs sessions and feeds flows to them from a queue. Each session is one Sauce Labs
  job. The runner never starts more sessions than you have flows, and your Sauce Labs concurrency limit still applies.
- `--parallel 1` over a directory runs every flow in a single session, which appears as a single job. Start each flow
  with `launchApp` so Maestro restarts the app between flows.
- `--include-tags` and `--exclude-tags` select flows by the `tags` in their YAML header.
- Flow discovery is one level deep: `test flows/android/` runs only the `.yaml` files directly inside that directory.
  Keep one directory per platform and run each with its own `--caps` file.
- `--appium-session-file sessions.json` writes the Appium session IDs of the running sessions. On emulators and
  simulators the Appium session ID is also the Sauce Labs job ID. On real devices the job ID differs, so use the
  `build` name to find jobs.
- `--flatten` writes reports directly into `--output` instead of a timestamped subdirectory, which is easier to
  archive from CI.

## How Jobs Appear in Sauce Labs

- **Name:** the flow file's base name, for example `login_standard_user`. When one session runs several flows, the job
  takes the first flow's name. Set `name` in `sauce:options` for a fixed name.
- **Status:** maestro-runner marks the job passed or failed when the run finishes. It picks the REST API endpoint from
  the data center in your `--appium-url` (`us-west-1`, `eu-central-1`, or `us-east-4`).
- **Framework:** Sauce Labs shows the job as an Appium test. Maestro steps appear as the Appium commands they were
  translated into, not as named Maestro steps, and there are no per-flow annotations in the job.
- **Artifacts:** video, device log, Appium log, and a screenshot per command, exactly as for any Appium job.
- **Reports:** the Maestro-style HTML, JUnit, and Allure reports exist only in your local `--output` directory. They
  do not include the Sauce Labs job link, so use `--appium-session-file` or the `build` name to cross-reference.

## Supported Targets

Verified by Sauce Labs in September 2026 with maestro-runner 1.1.25 and the My Demo App flows.

| Sauce Labs target                | Validated on                                   | Result                   |
| -------------------------------- | ---------------------------------------------- | ------------------------ |
| Android emulator                 | Google Pixel 9 Emulator, Android 16            | ✔️ flows pass            |
| Android ARM emulator             | Google ARM Medium Phone Emulator, Android 16   | ✔️ flows pass            |
| iOS simulator                    | iPhone Simulator, iOS 18.0                     | ✔️ flows pass            |
| Android real device              | Samsung Galaxy S26 Ultra, Android 16           | ✔️ flows pass            |
| iOS real device                  | iPhone 16 Pro, iOS 18.7.1                      | ✔️ flows pass            |
| Parallel suite (`--parallel 4`)  | Four Android emulator sessions                 | ✔️ four concurrent jobs  |
| Session reuse (`--parallel 1`)   | One iOS real device session                    | ✔️ one job, all flows    |
| Mobile web (`browserName` set)   | Chrome on Android emulator                     | ❌ not supported          |
| Desktop web (`--platform web`)   | Sauce Labs desktop browsers                    | ❌ not supported          |

## Limitations

- **Mobile web is not supported.** maestro-runner's Appium driver parses the native UI hierarchy only. A Sauce Labs
  browser session returns HTML page source, so the first `assertVisible` fails with
  `invalid page source: no hierarchy element found`.
- **Desktop web is not supported on Sauce Labs.** The runner's `--platform web` mode launches a local Chrome and has no
  option to attach to a remote browser.
- **No Maestro step names in the Sauce Labs job.** Steps appear as Appium commands.
- **Data center detection is by URL.** The pass or fail update goes to `eu-central-1` or `us-east-4` when the endpoint
  URL contains that name, otherwise to `us-west-1`.
- **Parallel emulator reports show one device.** All concurrent emulator sessions report the same device ID, so the
  local report's per-device summary collapses to a single entry. The Sauce Labs jobs are unaffected.

## Security Considerations

:::warning Your access key appears in maestro-runner logs
maestro-runner prints the full `--appium-url`, including your access key, in its `Connecting to Appium server` log
line. It writes the same line into `maestro-runner.log` inside every report directory, and it writes the URL into the
`--appium-session-file`. Before you adopt it in CI:

- Mask `SAUCE_ACCESS_KEY` in your CI system so it is redacted from console output.
- Do not publish report directories or session files as build artifacts without removing the key.
- Do not commit report or session files to source control.
:::

Check the maestro-runner release notes for a fix to the credential echo before relying on unmasked logs.

## Troubleshooting

| Symptom                                                              | Cause and fix                                                                                                                                    |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `invalid page source: no hierarchy element found` on the first step   | The capabilities start a browser session. Mobile web is not supported; test the native app instead.                                             |
| `Invalid version format used` when the session starts                | `appiumVersion: "latest"` was used with a browser session. Pin a version from the Appium Versions page.                                          |
| iOS real device install or launch fails                              | Add `resigningEnabled: true` to `sauce:options`, and use the `.ipa`, not the simulator build.                                                    |
| iOS simulator install fails                                          | Use the zipped `.app` simulator build in `appium:app`, not the `.ipa`.                                                                           |
| Parallel sessions end before their flows start                       | Upgrade to maestro-runner 1.1.25 or later, which keeps pre-created sessions active.                                                              |
| Flows in subdirectories are skipped                                  | Discovery is one level deep. Point `test` at the directory that contains the flow files.                                                         |
| The runner reports `Update available`                                | The npm package can lag GitHub releases by a few days. Either channel works with Sauce Labs.                                                     |

## More Information

- [maestro-runner on GitHub](https://github.com/devicelab-dev/maestro-runner) and the
  [maestro-runner CLI reference](https://devicelab.dev/open-source/maestro-runner/docs/cli-reference) from DeviceLab
- [Maestro documentation](https://docs.maestro.dev/) for flow syntax and commands
- [Sauce Labs maestro-runner demo repository](https://github.com/saucelabs-training/demo-maestro-runner) with flows,
  capabilities files, and demo app builds for every target in this guide
- [Appium on Sauce Labs](/mobile-apps/automated-testing/appium) for capabilities, device selection, and Appium versions
- [Community Frameworks](/basics/community-frameworks) for the support model that applies to this guide
