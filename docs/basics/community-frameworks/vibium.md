---
id: vibium
title: Vibium on SauceLabs
sidebar_label: Vibium
description: Attach Vibium's CLI, MCP server, or JavaScript and Python clients to a SauceLabs desktop browser session over WebDriver BiDi.
keywords:
- vibium
- bidi
- webdriver-bidi
- mcp
- community
- web-testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import CommunitySupport from './\_partials/\_community-support.md';

<p><span className="sauceGreen">Community Supported</span> <span className="sauceGreen">Desktop Browsers Only</span></p>

Vibium is an open-source browser automation tool built for coding agents, available as a command-line interface, a
Model Context Protocol (MCP) server, and JavaScript and Python client libraries. The SauceLabs integration with Vibium
lets you drive Chrome, Edge, and Firefox on SauceLabs Windows, macOS, and Linux virtual machines over WebDriver BiDi,
with no SauceLabs specific code. This guide explains how to set up Vibium and use it with your SauceLabs tests.

<CommunitySupport />

SauceLabs validated this guide with Vibium 26.8.21 in September 2026.

:::note
Vibium depends on SauceLabs [CDP / BiDi support](/web-apps/automated-testing/cdp-bidi), which is in Beta. The
limitations of that feature apply to Vibium as well.
:::

## How It Works with SauceLabs

SauceLabs does not host Vibium. You create an ordinary W3C WebDriver session on SauceLabs with the `webSocketUrl`
capability set to `true`, SauceLabs returns a WebDriver BiDi WebSocket URL for that session, and Vibium connects to
that URL from your machine, CI job, or coding agent.

<img src={useBaseUrl('img/community-frameworks/vibium-architecture.svg')} alt="Your machine, CI job, or coding agent creates a SauceLabs session with webSocketUrl set to true, receives a WebDriver BiDi URL, and Vibium drives Chrome, Edge, or Firefox on a SauceLabs virtual machine over that URL. Your code then sets pass or fail through the Jobs REST API and ends the session with a WebDriver DELETE." width="900"/>

1. Create a SauceLabs session with any W3C WebDriver client or a plain HTTP request. Set `webSocketUrl: true` next to
   your usual browser, platform, and `sauce:options` capabilities.
2. Read `webSocketUrl` from the response. It has the form
   `wss://<host>.saucelabs.com/selenium/session/<sessionId>/se/bidi`.
3. Hand that URL to Vibium: `vibium start <url>` for the CLI, `browser.start(url)` in the JavaScript or Python client,
   or the `VIBIUM_CONNECT_URL` environment variable for the MCP server. Vibium detects the existing session and attaches
   to it instead of launching a browser.
4. Drive the browser with Vibium. Navigation, element lookups, screenshots, and JavaScript evaluation all run against
   the SauceLabs browser.
5. When you are done, set the job's pass or fail status through the SauceLabs REST API and end the session with a
   WebDriver `DELETE`. Vibium detaches from a session it did not create, but it never ends one.

### Supported Browsers and Platforms

Verified by SauceLabs in September 2026 with Vibium 26.8.21.

| SauceLabs target                                   | Result                                                                                       |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Chrome on Windows 11                                | ✔️ CLI, JavaScript client, Python client, and MCP server all validated end to end             |
| Firefox on Windows 11                               | ✔️ JavaScript client validated end to end                                                     |
| Microsoft Edge on Windows; Chrome on macOS and Linux | ✔️ SauceLabs returns a BiDi URL; same attach mechanism                                       |
| Safari on macOS                                     | ❌ Session creation fails when `webSocketUrl` is set; Safari cannot be used with Vibium       |
| Chrome and Safari on Android emulators and iOS simulators | ❌ `webSocketUrl` returns `true` instead of a URL; nothing to attach to                  |
| Browsers on Android and iOS real devices            | ❌ The returned URL is internal to the SauceLabs network and not reachable                    |
| Java client                                         | Not validated by SauceLabs                                                                   |

### Limitations

- **Desktop browsers only.** Safari and all mobile targets are not available, as shown above.
- **Extended debugging is not available** in the same session as `webSocketUrl`.
- **You own the session lifecycle.** Vibium detaches but never deletes the SauceLabs session; always end the session
  as shown in [Report the Result and End the Session](#report-the-result-and-end-the-session).
- **No automatic pass or fail.** Set it with the Jobs API as shown in
  [Report the Result and End the Session](#report-the-result-and-end-the-session).
- **BiDi commands are not listed in the job.** The video shows everything Vibium did; the command list shows only
  WebDriver HTTP calls.
- **SauceLabs session limits apply.** The [`idleTimeout`](/dev/test-configuration-options/#idletimeout) and
  [`maxDuration`](/dev/test-configuration-options/#maxduration) values of the session govern how long Vibium can stay
  attached.


## What You'll Need

Before you begin, make sure you have:

- A SauceLabs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a
  [free trial license](https://saucelabs.com/sign-up)).
- Your SauceLabs [Username and Access Key](https://app.saucelabs.com/user-settings).
- [Node.js](https://nodejs.org/en/) for the CLI, the MCP server, and the JavaScript client, or Python 3 for the Python
  client.
- A way to create the SauceLabs session: `curl`, Node.js `fetch`, Python `requests`, or any Selenium or WebDriver
  client you already use.

## Authentication

Two credentials are involved:

- **Your SauceLabs username and access key.** You find them under
  [User Settings](https://app.saucelabs.com/user-settings). Any SauceLabs user who can run automated web tests can use
  them with Vibium; no additional permissions are needed. You use them only to create the session, set its pass or
  fail status, and end it. Vibium itself never sees them. Keep them in the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`
  environment variables or your CI system's secret store.
- **The session's `webSocketUrl`.** SauceLabs returns it when you create the session, and you pass it to Vibium. It
  needs no additional authentication header, so treat it as a credential.

:::warning The BiDi URL is a credential
SauceLabs does not require an additional authentication header on the BiDi WebSocket. Anyone who has the
`webSocketUrl` can drive that browser until the session ends. Do not print it in CI logs, do not commit it to source
control, and remove it from MCP configuration files when the session is over.
:::

## Set Up with Vibium

### Step 1: Install Vibium

<Tabs
groupId="vibium-lang"
defaultValue="node"
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
]}>

<TabItem value="node">

```bash
npm install vibium
npx vibium --version
```

The npm package provides the `vibium` CLI, the MCP server, and the JavaScript client.

</TabItem>
<TabItem value="python">

```bash
pip install vibium requests
```

`requests` is used below to create the SauceLabs session; any HTTP client works.

</TabItem>
</Tabs>

Installing Vibium downloads the Vibium binary. Vibium downloads a local browser only the first time you launch one
locally, so a CI job that only attaches to SauceLabs never needs a browser download.

### Step 2: Link Your SauceLabs Account

Check whether your SauceLabs credentials are already set as environment variables:

```bash title="Check Environment Variables"
echo $SAUCE_USERNAME
echo $SAUCE_ACCESS_KEY
```

If nothing is returned, set them:

```bash
export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your Sauce access key"
```

### Step 3: Create a SauceLabs Session with a BiDi URL

#### Session Capabilities

Create a normal desktop browser session and add [`webSocketUrl: true`](/dev/test-configuration-options/#websocketurl).
Every other `sauce:options` value you already use, such as [`build`](/dev/test-configuration-options/#build),
[`tags`](/dev/test-configuration-options/#tags), [`tunnelName`](/dev/test-configuration-options/#tunnelname),
[`screenResolution`](/dev/test-configuration-options/#screenresolution), and
[`maxDuration`](/dev/test-configuration-options/#maxduration), applies unchanged. Do not set
[`extendedDebugging`](/dev/test-configuration-options/#extendeddebugging); it cannot be combined with `webSocketUrl`.

| Option                  | Description                                                                                       | Required | Example                |
| ----------------------- | ------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| `webSocketUrl`          | Asks SauceLabs to return a WebDriver BiDi URL for the session.                                   | Yes      | `true`                 |
| `browserName`           | Desktop browser to start. Use Chrome, Edge, or Firefox; Safari is not supported.                  | Yes      | `chrome`               |
| `browserVersion`        | Browser version.                                                                                  | No       | `latest`               |
| `platformName`          | Operating system of the SauceLabs virtual machine.                                               | No       | `Windows 11`           |
| `sauce:options.name`    | Job name shown in Test Results.                                                                   | No       | `Vibium on SauceLabs` |
| `sauce:options.build`   | Build name that groups related jobs in Test Results.                                              | No       | `vibium-quickstart`    |
| `SAUCE_REGION`          | Environment variable that the Node.js and Python examples below read to pick the data center.     | No       | `eu-central-1`         |

#### Send the Session Request

Create the session and keep the session ID and `webSocketUrl` from the response:

<Tabs
groupId="vibium-lang"
defaultValue="node"
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'curl', value: 'curl'},
]}>

<TabItem value="node">

```javascript title="Create the session"
const region = process.env.SAUCE_REGION ?? 'us-west-1';
const hub = `https://ondemand.${region}.saucelabs.com/wd/hub`;
const auth = 'Basic ' + Buffer.from(
  `${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}`).toString('base64');

const res = await fetch(`${hub}/session`, {
  method: 'POST',
  headers: { Authorization: auth, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    capabilities: {
      alwaysMatch: {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 11',
        webSocketUrl: true,
        'sauce:options': { name: 'Vibium on Sauce Labs', build: 'vibium-quickstart' },
      },
    },
  }),
});
const { value } = await res.json();
const sessionId = value.sessionId;
const bidiUrl = value.capabilities.webSocketUrl;
console.log(`Sauce Labs job: https://app.saucelabs.com/tests/${sessionId}`);
```

</TabItem>
<TabItem value="python">

```python title="Create the session"
import os, requests

region = os.environ.get("SAUCE_REGION", "us-west-1")
hub = f"https://ondemand.{region}.saucelabs.com/wd/hub"
auth = (os.environ["SAUCE_USERNAME"], os.environ["SAUCE_ACCESS_KEY"])

caps = {"capabilities": {"alwaysMatch": {
    "browserName": "chrome",
    "browserVersion": "latest",
    "platformName": "Windows 11",
    "webSocketUrl": True,
    "sauce:options": {"name": "Vibium on Sauce Labs", "build": "vibium-quickstart"},
}}}
value = requests.post(f"{hub}/session", auth=auth, json=caps, timeout=300).json()["value"]
session_id = value["sessionId"]
bidi_url = value["capabilities"]["webSocketUrl"]
print(f"Sauce Labs job: https://app.saucelabs.com/tests/{session_id}")
```

</TabItem>
<TabItem value="curl">

```bash title="Create the session"
curl -s -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  -H 'Content-Type: application/json' \
  -d '{"capabilities":{"alwaysMatch":{
        "browserName":"chrome","browserVersion":"latest","platformName":"Windows 11",
        "webSocketUrl":true,
        "sauce:options":{"name":"Vibium on Sauce Labs","build":"vibium-quickstart"}}}}' \
  https://ondemand.us-west-1.saucelabs.com/wd/hub/session
```

The response contains `value.sessionId` and `value.capabilities.webSocketUrl`. Keep both; you need the session ID to
report the result and end the session.

</TabItem>
</Tabs>

For the EU Central or US East data centers, replace `us-west-1` with `eu-central-1` or `us-east-4` in both the
`ondemand` and `api` host names. See [Data Center Endpoints](/basics/data-center-endpoints).

## Verify the Integration

1. Create a session as shown in [Step 3](#step-3-create-a-saucelabs-session-with-a-bidi-url), then run the commands in
   the **CLI** tab of [Attach Vibium and Drive the Browser](#attach-vibium-and-drive-the-browser) up to
   `npx vibium title`.
2. Open the job link printed when you created the session, or find the job under
   [Automated > Test Results](https://app.saucelabs.com/dashboard/tests/vdc).
3. Confirm that `vibium title` prints the page title and that the job's live video shows the Sauce Demo page in the
   SauceLabs browser.

When you are done, run `npx vibium stop` and end the session as shown in
[Report the Result and End the Session](#report-the-result-and-end-the-session).

## Use the Integration

After you set up the integration, you can drive SauceLabs desktop browsers from the Vibium CLI, the JavaScript or
Python client, or an AI coding agent through the Vibium MCP server.

### Attach Vibium and Drive the Browser

Copy the `webSocketUrl` from the response exactly as returned. No additional authentication header is needed.

<Tabs
groupId="vibium-lang"
defaultValue="cli"
values={[
{label: 'CLI', value: 'cli'},
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'MCP server', value: 'mcp'},
]}>

<TabItem value="cli">

```bash
export BIDI_URL="wss://<host>.saucelabs.com/selenium/session/<sessionId>/se/bidi"

npx vibium start "$BIDI_URL"
npx vibium go https://www.saucedemo.com
npx vibium title
npx vibium screenshot -o saucedemo.png
npx vibium stop
```

`vibium stop` disconnects Vibium. The SauceLabs session keeps running until you end it. If you drive more than one
SauceLabs browser from the same machine, add `--session <name>` to every command to keep the daemons apart.

</TabItem>
<TabItem value="node">

```javascript title="Drive the Sauce Labs browser"
import { browser } from 'vibium';

let passed = false;
try {
  const bro = await browser.start(bidiUrl);   // attaches to the Sauce Labs session
  const page = await bro.page();
  await page.go('https://www.saucedemo.com');
  await (await page.find('#user-name')).type('standard_user');
  await (await page.find('#password')).type('secret_sauce');
  await (await page.find('#login-button')).click();
  const heading = await (await page.find('.title')).text();
  passed = heading === 'Products';
  await bro.stop();                            // detaches; does not end the Sauce Labs session
} finally {
  // Step 5: report the result and end the session (see below)
}
```

</TabItem>
<TabItem value="python">

```python title="Drive the Sauce Labs browser"
from vibium import browser

passed = False
try:
    bro = browser.start(bidi_url)          # attaches to the Sauce Labs session
    page = bro.page()
    page.go("https://www.saucedemo.com")
    page.find("#user-name").type("standard_user")
    page.find("#password").type("secret_sauce")
    page.find("#login-button").click()
    passed = page.find(".title").text() == "Products"
    bro.stop()                             # detaches; does not end the Sauce Labs session
finally:
    pass  # Step 5: report the result and end the session (see below)
```

</TabItem>
<TabItem value="mcp">

Set `VIBIUM_CONNECT_URL` in the MCP server's environment and Vibium's browser tools operate on the SauceLabs
browser instead of launching a local one.

```json title="MCP server configuration (Claude Code, Cursor, or any MCP client)"
{
  "mcpServers": {
    "vibium-sauce": {
      "command": "npx",
      "args": ["vibium", "mcp"],
      "env": {
        "VIBIUM_CONNECT_URL": "wss://<host>.saucelabs.com/selenium/session/<sessionId>/se/bidi"
      }
    }
  }
}
```

Or start it from a shell:

```bash
VIBIUM_CONNECT_URL="$BIDI_URL" npx vibium mcp
```

Tools such as `browser_navigate`, `browser_get_title`, `browser_find`, and `browser_screenshot` then run on the
SauceLabs browser. The session URL is only valid for the life of that SauceLabs session, so treat the
configuration as temporary.

</TabItem>
</Tabs>

### Report the Result and End the Session

Vibium never ends a session it did not create, so you must do both of the following yourself, ideally in a `finally`
block so they run even when the test fails.

```bash title="Set pass/fail and end the session"
curl -s -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" -X PUT -H 'Content-Type: application/json' \
  -d '{"passed": true}' \
  "https://api.us-west-1.saucelabs.com/rest/v1/$SAUCE_USERNAME/jobs/<sessionId>"

curl -s -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" -X DELETE \
  "https://ondemand.us-west-1.saucelabs.com/wd/hub/session/<sessionId>"
```

The first call is the [Update a Job](/dev/api/jobs/#update-a-job) API. Send `{"passed": false}` for a failed test.
Without it the job shows as complete with no pass or fail status. The second call is the WebDriver Delete Session
command. Without it the session runs until it hits the SauceLabs idle or maximum duration timeout and continues to
consume concurrency.

### View Your Results

Open the job under [Automated > Test Results](https://app.saucelabs.com/dashboard/tests/vdc). You get the full video
of the browser, the `name` and `build` you set, and the pass or fail status you reported. The Commands tab lists the
WebDriver HTTP calls you made (typically the session creation and deletion); WebDriver BiDi traffic from Vibium is not
itemized there.

## Troubleshooting

<details>
<summary>**HTTP 500 when creating a Safari session**</summary>

Safari does not accept `webSocketUrl`. Use Chrome, Edge, or Firefox.

</details>

<details>
<summary>**`webSocketUrl` in the response is `true`, not a URL**</summary>

The session is on a mobile emulator or simulator. Use a desktop browser.

</details>

<details>
<summary>**The URL starts with `ws://172.` and Vibium cannot connect**</summary>

The session is on a real device. Use a desktop browser.

</details>

<details>
<summary>**The SauceLabs job keeps running after `vibium stop`**</summary>

This is expected. End the session with the WebDriver `DELETE` shown in
[Report the Result and End the Session](#report-the-result-and-end-the-session).

</details>

<details>
<summary>**The job shows Complete with no pass or fail**</summary>

Send the `PUT` shown in [Report the Result and End the Session](#report-the-result-and-end-the-session) with
`{"passed": true}` or `{"passed": false}`.

</details>

<details>
<summary>**The session ends during a long pause**</summary>

The session hit `idleTimeout`. Keep commands flowing or raise the timeout when you create the session.

</details>

## More Information

- Explore [Vibium on GitHub](https://github.com/VibiumDev/vibium), the
  [Vibium CLI reference](https://vibium.com/docs/commands/), and the
  [Vibium client libraries](https://vibium.com/docs/client-libraries/) documentation.
- Read [CDP / BiDi on SauceLabs](/web-apps/automated-testing/cdp-bidi) for how SauceLabs exposes WebDriver BiDi.
- See [Test Configuration Options](/dev/test-configuration-options/) for every capability you can set on the session.
- Use the [Jobs API](/dev/api/jobs/) to set job status and read job details.
- Review [Community Frameworks](/basics/community-frameworks) for the support model that applies to this guide.
