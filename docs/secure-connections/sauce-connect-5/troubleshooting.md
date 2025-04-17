---
id: troubleshooting
title: Troubleshooting guide
sidebar_label: Troubleshooting
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide covers the most common failure scenarios with Sauce Connect 5:

 - **Unable to Start the SC Client**

Follow the sections below based on your issue.

:::caution Important
Make sure you're using the latest version of Sauce Connect, which you can download from the [installation page](/secure-connections/sauce-connect-5/installation/). Using older versions may cause technical issues. If you run into an error trying to launch a tunnel, this should be your first step.
:::

## Unable to Start the SC Client

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

If you recieve a timeout, DNS error, or non-200 status, confirm that:
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
