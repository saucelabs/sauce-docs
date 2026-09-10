---
id: vibium
title: Vibium on Sauce Labs
sidebar_label: Vibium
description: Attach Vibium's CLI, MCP server, or JavaScript and Python clients to a Sauce Labs desktop browser session over WebDriver BiDi.
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
import CommunitySupport from './\_partials/\_community-support.md';

<p><span className="sauceGreen">Community Supported</span> <span className="sauceGreen">Desktop Browsers Only</span></p>

Vibium is an open-source browser automation tool built for coding agents. A single binary speaks WebDriver BiDi to the
browser and exposes that control as a command-line interface, a Model Context Protocol (MCP) server, and JavaScript
and Python client libraries. Vibium can attach to a browser session that already exists, and every Sauce Labs desktop
browser session can hand out a WebDriver BiDi URL, so you can drive Chrome, Edge, and Firefox on Sauce Labs Windows,
macOS, and Linux virtual machines from Vibium with no Sauce Labs specific code.

<CommunitySupport />

Sauce Labs validated this guide with Vibium 26.8.21 in September 2026.

:::note
Vibium depends on Sauce Labs [CDP / BiDi support](/web-apps/automated-testing/cdp-bidi), which is in Beta. The
limitations of that feature apply to Vibium as well.
:::

## How It Works with Sauce Labs

Sauce Labs does not host Vibium. You create an ordinary W3C WebDriver session on Sauce Labs with the `webSocketUrl`
capability set to `true`, Sauce Labs returns a WebDriver BiDi WebSocket URL for that session, and Vibium connects to
that URL.

```text
+-----------------------------+      1. POST /session  (webSocketUrl: true)       +-----------------------------+
|  Your machine, CI job,      | ------------------------------------------------> |  Sauce Labs                 |
|  or coding agent            | <------------------------------------------------ |  ondemand.<dc>.saucelabs    |
|                             |      2. webSocketUrl: wss://.../se/bidi           |  .com/wd/hub                |
|  vibium start <url>         |                                                   |                             |
|  browser.start(url)         |      3. WebDriver BiDi over the returned URL      |  Chrome, Edge, or Firefox   |
|  VIBIUM_CONNECT_URL=<url>   | <===============================================> |  on a Windows, macOS, or    |
|                             |                                                   |  Linux virtual machine      |
|                             |      4. PUT /jobs/<id>  {"passed": true}          |                             |
|                             |      5. DELETE /session/<id>                      |                             |
+-----------------------------+ ------------------------------------------------> +-----------------------------+
```

1. Create a Sauce Labs session with any W3C WebDriver client or a plain HTTP request. Set `webSocketUrl: true` next to
   your usual browser, platform, and `sauce:options` capabilities.
2. Read `webSocketUrl` from the response. It has the form
   `wss://<host>.saucelabs.com/selenium/session/<sessionId>/se/bidi`.
3. Hand that URL to Vibium: `vibium start <url>` for the CLI, `browser.start(url)` in the JavaScript or Python client,
   or the `VIBIUM_CONNECT_URL` environment variable for the MCP server. Vibium detects the existing session and attaches
   to it instead of launching a browser.
4. Drive the browser with Vibium. Navigation, element lookups, screenshots, and JavaScript evaluation all run against
   the Sauce Labs browser.
5. When you are done, set the job's pass or fail status through the Sauce Labs REST API and end the session with a
   WebDriver `DELETE`. Vibium detaches from a session it did not create, but it never ends one.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a
  [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- [Node.js](https://nodejs.org/en/) for the CLI, the MCP server, and the JavaScript client, or Python 3 for the Python
  client.
- A way to create the Sauce Labs session: `curl`, Node.js `fetch`, Python `requests`, or any Selenium or WebDriver
  client you already use.

## Step 1: Install Vibium

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

`requests` is used below to create the Sauce Labs session; any HTTP client works.

</TabItem>
</Tabs>

Installing Vibium downloads the Vibium binary. Vibium downloads a local browser only the first time you launch one
locally, so a CI job that only attaches to Sauce Labs never needs a browser download.

## Step 2: Link Your Sauce Labs Account

Set your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as environment variables.

```bash title="Check Environment Variables"
echo $SAUCE_USERNAME
echo $SAUCE_ACCESS_KEY
```

If nothing is returned, set them:

```bash
export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your Sauce access key"
```

## Step 3: Create a Sauce Labs Session with a BiDi URL

Create a normal desktop browser session and add [`webSocketUrl: true`](/dev/test-configuration-options/#websocketurl).
Every other `sauce:options` value you already use, such as [`build`](/dev/test-configuration-options/#build),
[`tags`](/dev/test-configuration-options/#tags), [`tunnelName`](/dev/test-configuration-options/#tunnelname),
[`screenResolution`](/dev/test-configuration-options/#screenresolution), and
[`maxDuration`](/dev/test-configuration-options/#maxduration), applies unchanged. Do not set
[`extendedDebugging`](/dev/test-configuration-options/#extendeddebugging); it cannot be combined with `webSocketUrl`.

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

The response contains `value.sessionId` and `value.capabilities.webSocketUrl`. Keep both; you need the session ID in
Step 5.

</TabItem>
</Tabs>

For the EU Central or US East data centers, replace `us-west-1` with `eu-central-1` or `us-east-4` in both the
`ondemand` and `api` host names. See [Data Center Endpoints](/basics/data-center-endpoints).

## Step 4: Attach Vibium and Drive the Browser

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

`vibium stop` disconnects Vibium. The Sauce Labs session keeps running until you end it in Step 5. If you drive more
than one Sauce Labs browser from the same machine, add `--session <name>` to every command to keep the daemons apart.

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

Set `VIBIUM_CONNECT_URL` in the MCP server's environment and Vibium's browser tools operate on the Sauce Labs
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

Tools such as `browser_navigate`, `browser_get_title`, `browser_find`, and `browser_screenshot` then run on the Sauce
Labs browser. The session URL is only valid for the life of that Sauce Labs session, so treat the configuration as
temporary.

</TabItem>
</Tabs>

## Step 5: Report the Result and End the Session

Vibium never ends a session it did not create, so you must do both of the following yourself, ideally in a `finally`
block so they run even when the test fails.

```bash title="Set pass/fail and end the session"
curl -s -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" -X PUT -H 'Content-Type: application/json' \
  -d '{"passed": true}' \
  "https://api.us-west-1.saucelabs.com/rest/v1/$SAUCE_USERNAME/jobs/<sessionId>"

curl -s -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" -X DELETE \
  "https://ondemand.us-west-1.saucelabs.com/wd/hub/session/<sessionId>"
```

The first call is the [Update a Job](/dev/api/jobs/#update-a-job) API. Without it the job shows as complete with no
pass or fail status. Without the second call the session runs until it hits the Sauce Labs idle or maximum duration
timeout and continues to consume concurrency.

## Step 6: View Your Results

Open the job under [Automated > Test Results](https://app.saucelabs.com/dashboard/tests/vdc). You get the full video
of the browser, the `name` and `build` you set, and the pass or fail status you reported. The Commands tab lists the
WebDriver HTTP calls you made (typically the session creation and deletion); WebDriver BiDi traffic from Vibium is not
itemised there.

## Supported Browsers and Platforms

Verified by Sauce Labs in September 2026 with Vibium 26.8.21.

| Sauce Labs target                                   | Result                                                                                       |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Chrome on Windows 11                                | ✔️ CLI, JavaScript client, Python client, and MCP server all validated end to end             |
| Firefox on Windows 11                               | ✔️ JavaScript client validated end to end                                                     |
| Microsoft Edge on Windows; Chrome on macOS and Linux | ✔️ Sauce Labs returns a BiDi URL; same attach mechanism                                       |
| Safari on macOS                                     | ❌ Session creation fails when `webSocketUrl` is set; Safari cannot be used with Vibium       |
| Chrome and Safari on Android emulators and iOS simulators | ❌ `webSocketUrl` returns `true` instead of a URL; nothing to attach to                  |
| Browsers on Android and iOS real devices            | ❌ The returned URL is internal to the Sauce Labs network and not reachable                    |
| Java client                                         | Not validated by Sauce Labs                                                                   |

## Limitations

- **Desktop browsers only.** Safari and all mobile targets are not available, as shown above.
- **Extended debugging is not available** in the same session as `webSocketUrl`.
- **You own the session lifecycle.** Vibium detaches but never deletes the Sauce Labs session; always send the
  `DELETE` in Step 5.
- **No automatic pass or fail.** Set it with the Jobs API as shown in Step 5.
- **BiDi commands are not listed in the job.** The video shows everything Vibium did; the command list shows only
  WebDriver HTTP calls.
- **Sauce Labs session limits apply.** The [`idleTimeout`](/dev/test-configuration-options/#idletimeout) and
  [`maxDuration`](/dev/test-configuration-options/#maxduration) values of the session govern how long Vibium can stay
  attached.

## Security Considerations

:::warning The BiDi URL is a credential
Sauce Labs does not require an additional authentication header on the BiDi WebSocket. Anyone who has the
`webSocketUrl` can drive that browser until the session ends. Do not print it in CI logs, do not commit it to source
control, and remove it from MCP configuration files when the session is over.
:::

Keep `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` in environment variables or your CI secret store; they are only needed to
create and end the session.

## Troubleshooting

| Symptom                                                        | Cause and fix                                                                                                          |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| HTTP 500 when creating a Safari session                        | Safari does not accept `webSocketUrl`. Use Chrome, Edge, or Firefox.                                                   |
| `webSocketUrl` in the response is `true`, not a URL             | The session is on a mobile emulator or simulator. Use a desktop browser.                                               |
| The URL starts with `ws://172.` and Vibium cannot connect      | The session is on a real device. Use a desktop browser.                                                                |
| The Sauce Labs job keeps running after `vibium stop`           | Expected. End the session with the WebDriver `DELETE` in Step 5.                                                       |
| The job shows Complete with no pass or fail                    | Send the `PUT` in Step 5 with `{"passed": true}` or `{"passed": false}`.                                               |
| The session ends during a long pause                           | The session hit `idleTimeout`. Keep commands flowing or raise the timeout when you create the session.                 |

## More Information

- [Vibium on GitHub](https://github.com/VibiumDev/vibium), the [Vibium CLI reference](https://vibium.com/docs/commands/),
  and the [Vibium client libraries](https://vibium.com/docs/client-libraries/) documentation
- [CDP / BiDi on Sauce Labs](/web-apps/automated-testing/cdp-bidi) for how Sauce Labs exposes WebDriver BiDi
- [Test Configuration Options](/dev/test-configuration-options/) for every capability you can set on the session
- [Jobs API](/dev/api/jobs/) for setting job status and reading job details
- [Community Frameworks](/basics/community-frameworks) for the support model that applies to this guide
