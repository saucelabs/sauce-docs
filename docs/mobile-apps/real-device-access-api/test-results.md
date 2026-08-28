---
id: real-device-access-api-test-results
title: Test Results and Artifacts for the Real Device Access API
sidebar_label: Test Results & Artifacts
---

Sessions on the [Real Device Access API](introduction.md) can produce **Test Reports**: real Sauce Labs test results, with video, logs, and network traffic attached, that show up on the **Test Results** page next to every other job you run on Sauce Labs.

This page explains what test reports are and why they matter, then walks through how to create one.

## Why This Matters

The Access API gives you a device and full control over it, but for a long time the *evidence* of what happened on that device was ephemeral. You could stream the screen and the logs over WebSockets, but if you wanted to keep any of it you had to capture the sockets yourself, store the files somewhere, and build your own way to look at them.

Test reports remove that work. You tell us when a test starts and when it ends, and Sauce Labs records the artifacts you asked for, stores them, and renders them on the same **Test Details** page your Appium, Espresso, and XCUITest jobs already use.

For teams, that means:

- **No new tooling.** Access API results land in the dashboards, filters, and reports your team already uses. Nothing new to learn, nothing new to host.
- **Custom automation becomes reportable.** Framework-free workflows — AI agents, bespoke device automation, monitoring probes — finally produce evidence a QA lead can review and a developer can act on.
- **Failures come with proof.** A failed report carries the video, the device log, and the HAR file, so a bug report is a link instead of a description.
- **Your existing grouping still works.** Reports accept a `build` and `tags`, so CI grouping, filtering, and trend reporting behave exactly as they do for framework-based jobs.
- **One reservation, many results.** A single device session can hold many test reports, so the [suite-per-session model](sauce-labs-hosted-appium.md) gives you per-test evidence without paying the per-test device reservation cost.

## How It Works

A test report is a window you open and close inside a device session:

1. **Start the report.** Call `startTest` and name the artifacts you want captured. Recording begins immediately.
2. **Do the work.** Drive the device however you like — the hosted Appium server, ADB, the device control socket, your own code.
3. **End the report.** Call `endTest` with `passed` or `failed`. Recording stops and the artifacts are collected.
4. **Review it.** The report appears on the **Test Results** page in the Sauce Labs UI, with a direct link returned by the API.

The device session outlives the report. Open and close as many reports as your test plan needs on the same reserved device, then close the session when you are done.

## What You Can Capture

Artifact capture is **opt-in**. Every toggle defaults to `false`, so a report with no `artifacts` object records metadata only. This is deliberate — you only pay the collection and storage cost for the evidence you actually want.

| Artifact | Toggle | What you get |
| --- | --- | --- |
| **Video** | `video` | A recording of the device screen for the duration of the report. See [Video Recording](/mobile-apps/features/video-recording/). |
| **Device Logs** | `deviceLogs` | The system log — Logcat on Android, Syslog on iOS. |
| **App Logs** | `testFairyLogs` | Instrumentation-level logs from your app. Requires a resigned app with instrumentation enabled. See [App Logs](/mobile-apps/features/mobile-app-diagnostics/app-logs/). |
| **Network Logs** | `networkCapture` | HTTP/HTTPS traffic as a HAR file, viewable in the Sauce Labs Network Viewer. See [Network Capture](/mobile-apps/features/network-capture/). |
| **Screenshots** | `screenshots` | The screenshots taken during the report, collected into the **Screenshots** tab. |
| **Appium Logs** | `appiumLogs` | The log of the [Sauce Labs hosted Appium server](sauce-labs-hosted-appium.md), if one is running on the session. See [Appium Logs](/test-results/viewing-test-results/#appium-logs). |

Once the report is finished, these artifacts are available in the UI and downloadable through the Jobs API — see [Downloading Artifacts](#5-download-artifacts-programmatically).

## Metadata and Limits

| Aspect | Behavior |
| --- | --- |
| **Naming** | `testName` sets the name shown in the UI. Omit it and we generate one. |
| **Grouping** | `build` groups the report with other tests of the same build. `tags` are filterable in the UI. |
| **Result** | `endTest` accepts `passed` or `failed`. Omit the status and the report is stored without a pass/fail result, shown as **Completed**. |
| **Concurrency** | One active report per session. End the current report before starting the next. |
| **Volume** | Up to 500 test reports per session. |
| **Timing** | Artifacts are collected asynchronously, so they appear on the report shortly after `endTest` returns. |
| **Retention** | Artifacts follow the standard [30-day retention](/test-results/viewing-test-results/#screenshots-commands-logs-and-metadata) for test assets. Metadata is kept indefinitely. |

---

## How To: Create and Review a Test Report

This section is a practical walkthrough. It assumes you already have an `ACTIVE` session — see the [Integration Guide](integration-guide.md) if you do not — and that `BASE_URL`, `AUTH`, and `SESSION_ID` are exported as described in [Base URLs](integration-guide.md#base-urls).

For the complete request and response schemas, see the `Test Reports` tag in the [Real Device Access API Reference](/real-device-access-api).

### 1. Start the Test Report

Request the artifacts you want in the same call. Everything you omit stays off.

```shell
curl -u $AUTH -X POST "$BASE_URL/sessions/$SESSION_ID/startTest" \
  -H "Content-Type: application/json" \
  -d '{
        "testName": "Checkout flow — guest user",
        "build": "build-1042",
        "tags": ["smoke", "checkout"],
        "artifacts": {
          "video": true,
          "deviceLogs": true,
          "networkCapture": true
        }
      }'
```

The response returns the id of the report you just opened:

```json
{ "testReportId": "123e4567-e89b-12d3-a456-426614174000" }
```

The request body is optional. `POST` with no body at all gives you a report with a generated name, no build, no tags, and no artifacts.

### 2. Run Your Test

Everything you do on the device now happens inside the report — install an app, drive Appium, run shell commands, tap through the UI. Nothing about your existing session code has to change.

### 3. End the Test Report

```shell
curl -u $AUTH -X POST "$BASE_URL/sessions/$SESSION_ID/endTest" \
  -H "Content-Type: application/json" \
  -d '{"status": "failed"}'
```

`status` is case insensitive and accepts `passed` or `failed`. Omit the body to close the report without a result.

The session stays active and is immediately free to start the next report. If you close the session while a report is still running, we end that report for you.

### 4. Open the Report in the UI

List the reports on the session to get their links:

```shell
curl -u $AUTH "$BASE_URL/sessions/$SESSION_ID/tests"
```

```json
{
  "tests": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "startTime": "2025-11-19T10:15:30Z",
      "endTime": "2025-11-19T10:18:02Z",
      "links": {
        "self": "https://api.us-west-1.saucelabs.com/v1/rdc/jobs/123e4567-e89b-12d3-a456-426614174000",
        "uiViewUrl": "https://app.saucelabs.com/tests/123e4567-e89b-12d3-a456-426614174000"
      }
    }
  ]
}
```

Reports are returned oldest first. A report that is still running has no `endTime`.

- **`uiViewUrl`** opens the **Test Details** page — video, logs, network traffic, and metadata. This is the link to paste into a bug report.
- **`self`** is the report on the Jobs API, where the pass/fail result lives and where you download artifacts.

You can also find your reports on the **Test Results** page in the Sauce Labs UI, filtered to **Real Devices**, and group them by build on the **Builds** page. See [Viewing Test Results](/test-results/viewing-test-results/).

{/* SCREENSHOTS TO ADD — capture on a real account, save to static/img/real-device-access-api/,
    then add `import useBaseUrl from '@docusaurus/useBaseUrl';` at the top of this file:
      1. test-results-list.png  — Test Results page with an Access API report in the list
      2. test-details-video.png — Test Details page, Video tab
      3. test-details-logs.png  — Test Details page, Logs tab showing device + Appium logs
      4. test-details-network.png — Network Viewer showing the captured HAR
    Render each as:
      <img src={useBaseUrl('img/real-device-access-api/test-results-list.png')} alt="..." width="800" />
*/}

### 5. Download Artifacts Programmatically

Artifacts are downloaded through the real device Jobs API using the `testReportId` as the job id. See [Real Device API Endpoints](/dev/api/rdc/) for the full asset reference.

```shell
curl -u $AUTH -O \
  "https://api.us-west-1.saucelabs.com/v1/rdc/jobs/$TEST_REPORT_ID/video.mp4"
```

| Artifact | Asset path |
| --- | --- |
| Video | `video.mp4` |
| Device Logs | `deviceLogs` |
| App Logs | `deviceLogs` |
| Network Logs | `network.har` |
| Screenshots | `screenshots.zip` |
| Appium Logs | `appiumLogs` |

### 6. Wrap a Whole Suite

The pattern that pays off most is one session for the suite and one test report per test. It maps cleanly onto the lifecycle hooks you already use — reserve the device and start Appium in a suite-level hook, then bracket each test with `startTest` and `endTest`:

```text
@BeforeAll   -> create session, start hosted Appium server
  @BeforeEach -> startTest  (name, build, tags, artifacts)
    test body
  @AfterEach  -> endTest    (passed / failed)
@AfterAll    -> close session
```

See [Appium Over Real Device Access API](sauce-labs-hosted-appium.md) for the full working example of the session and Appium setup this slots into.

### Troubleshooting

| Response | Meaning | What to do |
| --- | --- | --- |
| `409` — Test report already active. | A report is still running on the session. The response carries the id in `activeTestReportId`. | Call `endTest` before starting another. |
| `409` — Test report limit reached. | The session already holds 500 reports. | Start a new session to record more. |
| `409` — No active test report. | `endTest` was called on a session with no running report. | Check your test lifecycle for a duplicate `endTest`. |
| `409` — Test report is not ready. | The report is still being created. | Retry shortly. |
| `400` — Invalid request body. | `status` was something other than `passed` or `failed`. | Send `passed`, `failed`, or no body. |
| `500` — Could not start test report. | The report could not be created. | Retry `startTest`. If it persists, contact your Sauce Labs representative. |
| Artifacts missing right after `endTest` | Collection is asynchronous. | Wait a few seconds and reload. If an artifact never appears, confirm its toggle was `true` on `startTest`. |

## More Information

- [Real Device Access API Reference](/real-device-access-api) — the `Test Reports` tag has the full contract.
- [Viewing Test Results](/test-results/viewing-test-results/) — the Test Results and Builds pages.
- [Mastering the Companion Socket](mastering-companion-socket.md) — live log and HAR streaming, for when you want the data in real time rather than stored on a report.
- [Real Device API Endpoints](/dev/api/rdc/) — downloading and managing real device job assets.
