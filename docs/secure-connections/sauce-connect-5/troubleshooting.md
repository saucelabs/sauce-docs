---
id: troubleshooting
title: Troubleshooting guide
sidebar_label: Troubleshooting
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide covers the most common failure scenarios with Sauce Connect 5:

 - **Unable to Start the Sauce Connect Client**
 - **Test unable to run through the Sauce Connect Client**

Follow the sections below based on your issue.

:::important
Make sure you're using the latest version of Sauce Connect, which you can download from the [installation page](/secure-connections/sauce-connect-5/installation/). Using older versions may cause technical issues. If you run into an error trying to launch a tunnel, this should be your first step.
:::

## Unable to Start the Sauce Connect Client

When Sauce Connect 5 fails to start, it’s almost always due to network issues preventing the client from reaching Sauce Labs’ infrastructure. Before launching SC, perform the following checks.

### Allowlist Sauce Labs Domains at Corporate Firewall / VPN

Make sure that sc host is able to reach `*.saucelabs.com` and [Sauce Labs Data Center Endpoints](/basics/data-center-endpoints/#data-center-endpoints).

### Check DNS Resolution

<Tabs
defaultValue="us-west"
values={[
{label: 'us-west', value: 'us-west'},
{label: 'us-east', value: 'us-east'},
{label: 'eu-central', value: 'eu-central'}, ]}>

<TabItem value="us-west">

```bash
nslookup api.us-west-1.saucelabs.com
```

</TabItem>

<TabItem value="us-east">

```bash
nslookup api.us-east-4.saucelabs.com
```

</TabItem>

<TabItem value="eu-central">

```bash
nslookup api.eu-central-1.saucelabs.com
```

</TabItem>
</Tabs>

If DNS fails check your corporate proxy / firewall settings.

### Verify Connectivity To Sauce Labs

<Tabs
defaultValue="us-west"
values={[
{label: 'us-west', value: 'us-west'},
{label: 'us-east', value: 'us-east'},
{label: 'eu-central', value: 'eu-central'}, ]}>

<TabItem value="us-west">

```bash
curl -I -v https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions
```

</TabItem>

<TabItem value="us-east">

```bash
curl -I -v https://api.us-east-4.saucelabs.com/rest/v1/public/tunnels/info/versions
```

</TabItem>

<TabItem value="eu-central">

```bash
curl -I -v https://api.eu-central-1.saucelabs.com/rest/v1/public/tunnels/info/versions
```

</TabItem>
</Tabs>

You should see an HTTP 200 OK response.

If you receive a timeout, DNS error, or non-200 status, confirm that:
- Your network allows outbound HTTPS on port 443.
- Any corporate proxy is correctly configured (check `$HTTPS_PROXY`/`$HTTP_PROXY`).
- No internal firewall is blocking traffic to `*.saucelabs.com`.

### Start Sauce Connect

After you’ve confirmed connectivity, launch the SC binary.

```bash
sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r <region> -i <tunnel-name>
```

You should see the following log lines:

```
[control] [INFO] please wait for 'you may start your tests' to start your tests
[control] [INFO] provisioning Sauce Connect region=<region> name=<tunnel-name>
```

#### Tunnel Creation Error

If you see an error like:

```
[ERROR] fatal error exiting: create tunnel: <error message>
```

That indicates one of the following:
- Network or DNS failure. Double-check the steps above.
- Invalid credentials or permissions. Ensure your $SAUCE_USERNAME and $SAUCE_ACCESS_KEY are correct.
- Tunnel limit exceeded. You've hit your current tunnel quota.

Review the exact `<error message>` to pinpoint the cause, address it, and then retry.

#### Tunnel Connectivity Error

If you see the following log lines:

```
[control] [INFO] Sauce Connect running id=<id>
[tunnel] [INFO] waiting for Sauce Connect server to be reachable
```

That's a good news. Your sauce connect instance has been registered and created in our system.

If you see an error like:

```
[tunnel] [INFO] Sauce Connect server is not reachable after 5s
[tunnel] [ERROR] connect failed address=maki1234.us-west-1.miso.saucelabs.com:443 backoff=100ms: <error message>
```

That indicates network or DNS failure. Review the exact `<error message>` to pinpoint the cause, address it, and then retry.

## Test Unable To Run Through The Sauce Connect Client

When the test fails to locate the site under test (SUT), returns network related error, or times-out,
the root cause is usually one of the following:

1. Your test is referencing the wrong tunnel or region.
2. A corporate firewall or TLS inspection is interfering with tunnel traffic.
3. Sauce Connect is misconfigured.

**Work through the checklist below in order.**

### Verify Region And Tunnel Selection

Before you dig into advanced troubleshooting double-check that:

- Region (`-r, --region`) matches the Sauce Labs data center where your job runs.
- Tunnel name (`-i, --tunnel-name`) exactly matches the `tunnelName` capability used in your test.

You will find your Sauce Connect instances at:
<Tabs
defaultValue="us-west"
values={[
{label: 'us-west', value: 'us-west'},
{label: 'us-east', value: 'us-east'},
{label: 'eu-central', value: 'eu-central'}, ]}>

<TabItem value="us-west">

https://app.us-west-1.saucelabs.com/tunnels

</TabItem>

<TabItem value="us-east">

https://app.us-east-4.saucelabs.com/tunnels

</TabItem>

<TabItem value="eu-central">

https://app.eu-central-1.saucelabs.com/tunnels


</TabItem>
</Tabs>

Once confirmed, proceed to more advanced troubleshooting.

### Enable Debug Tools In Sauce Connect

Start Sauce Connect with debug tools enabled.
The extra logs and functionalities make it easier to capture evidence and share it with support.

Run Sauce Connect with additional flags:

```bash
sc run ... --address :8080 --api-address :10000 --log-level debug --log-http proxy:short-url
```

- `--address :8080` - Starts a local proxy, allowing you to send test traffic through Sauce Connect.
- `--api-address :10000` - Enables a local API server with health checks and metrics.
- `--log-level debug` - Enables verbose logging.
- `--log-http proxy:short-url` - Logs each HTTP request flowing through Sauce Connect in a one-line format.

Change port values if `8080` or `10000` are already in use in your environment.

### Test Sauce Connect Access To SUT

Use `curl` to verify whether Sauce Connect can reach your internal service:

```bash
curl -k -v -x localhost:8080 <your_internal_url>
```

Be sure to replace `8080` with the port you used for `--address`, and `<your_internal_url>` with your actual target.

If the request fails, Sauce Connect cannot access the SUT. You’ll see output like this:

```bash
curl -k -v -x localhost:8080 internal.example.com
...
sauce_connect failed to connect to remote host "internal.example.com"
<error message>
```

Review the `<error message>` to determine the issue. Check for firewalls, blocked DNS, or TLS inspection interfering with the connection.

### Re-Run The Failing Test

Now re-run your test and examine the Sauce Connect logs. Look for failing HTTP requests.

For example:

```bash
[proxy] [ERROR] [1-f1c61ee0] failed to round trip host=internal.example.com method=GET path=/: <error message>
[proxy] [INFO] [1-f1c61ee0] GET http://internal.example.com/ status=502 duration=2.4s
```

Finding a failing request narrows down the issue to a single HTTP call.

Examine the `<error message>` to determine the root cause, make necessary adjustments, and try again.

### Network Calls Missing in SC Logs (RDC)

On real devices, SC works by configuring the global proxy on the device, which all network calls should go through. If your app somehow bypasses the device proxy, the request will not go through the SC tunnel and likely fail. A telltale sign of this is when the network call does not show up at all in the SC logs.

For instance, Flutter uses its own self-contained networking stack and makes raw socket connections directly to the destination IP address, completely bypassing any system-level proxy interception that would normally occur. To fix this, you will need to use an HTTP client that follows the system-level proxy setting by default, or configure your existing HTTP client to follow the system-level proxy for requests that need to go through the SC tunnel.

```dart
  // Initialize HttpProxy to read system proxy settings
  HttpProxy httpProxy = await HttpProxy.createHttpProxy();
  // Set the global HTTP override to use the detected proxy settings.
  HttpOverrides.global = httpProxy;
```

### Still Stuck?

If the issue persists, start a fresh Sauce Connect session with:
- `--log-level debug`
- `--log-http proxy:short-url`

Then collect the following information and contact support:
 - Full Sauce Connect logs
 - The failing job ID
 - Relevant test framework logs
