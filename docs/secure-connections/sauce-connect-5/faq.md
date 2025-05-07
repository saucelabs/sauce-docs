---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This list of frequently asked questions can help you with what you need to know about Sauce Connect 5 usage and problem solving. Additionaly you can check [Troubleshooting guide](/secure-connections/sauce-connect-5/troubleshooting/).

:::warning
SC4 content below - (CIA) means "Check If Applicable"
:::

## (CIA) What outbound ports do I need open for Sauce Connect 5?

Sauce Connect Proxy 5 can only communicate with Sauce Labs via `port 443`. This is not configurable.

For more information, see [Data Center Endpoints](/basics/data-center-endpoints).

## When do I need to use Port 443 and how does it relate to the --proxy flag?

Port 443 is the typical default port for HTTPS traffic. Sauce Connect will use port 443 when sending traffic to your network when trying to reach the site(s) under test.

You can use the [`-x / --proxy`](/dev/cli/sauce-connect-5/run/#proxy) command-line option (or `SAUCE_PROXY` environment variable) to specify the `hostname:port` of the proxy for all Sauce Connect Proxy traffic to the site(s) under test. In some companies you MUST pass traffic through a proxy to reach the internet.

See also [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect-5/guides/proxies).

## How can I share a Sauce Connect tunnel between multiple accounts?

To share a tunnel, start a tunnel with the [`-s / --shared-tunnel`](/dev/cli/sauce-connect-5/run/#shared) flag or with `SAUCE_SHARED` environment variable set.

(CIA) For most Sauce Labs customers, your access to shared tunnels is determined by the permissions of the user who creates them. Organization admins can create tunnels that any user on any team can use. Team admins can create tunnels that any member of their team can use. Team members cannot share tunnels they create with any other team member.

In order to use a tunnel that an admin or team member shares with you, you'll
need to add [`tunnelOwner`](/dev/test-configuration-options/#tunnelowner)
to your test capabilities and specify that person's username.

## How can I use Sauce Connect to test domain inavailability?

You can use the [`-F / --deny-domains`](/dev/cli/sauce-connect-5/run/#deny-domains) command-line option or `SAUCE_DENY_DOMAINS` environment variable to drop requests for domains matching the regexp. It can be used to simulate non-loading of scripts, styles, or other resources.

This flag can contain a list of regex that will match the domain that wants to be blocked. Example:

Entering this code -- `(www.)?google-analytics.com,(www.)?googletagmanager.com,([a-z0 9]+[.])*google.com,([a-z0-9]+[.])+facebook.com` -- will block the following domains:

- `www.google-analytics.com`
- `google-analytics.com`
- `google.com` and any subdomain of `google.com`
- Any subdomain of `facebook.com`, but not `facebook.com`

## Can I access apps on localhost?

You can access `localhost` through Sauce Connect on Virtual Desktop Browser tests. However, you cannot proxy `localhost` or 127.0.0.1 connections on any Mobile tests, whether they are Emulators, Simulators, or Real Devices.

When using Sauce Connect Proxy, local websites running on commonly used ports are available to test at `localhost` or 127.0.0.1 URLs. The exception is when testing on Real or Virtual Mobile Devices. Real and Virtual Mobile tests require changes to the `/etc/hosts` file where Sauce Connect Proxy is hosted. For more information, see [Testing Mobile Devices Against localhost](/secure-connections/sauce-connect-5/guides/configuration/#sc5localhost).

For all platforms, tests may perform better when using a locally defined domain name (which can be set in your [`hosts` file](http://en.wikipedia.org/wiki/Hosts_file)) rather than `localhost`. Using a locally defined domain name also allows access to apps on any port. If you are using a parent proxy with Sauce Connect, you may need the [`--proxy-localhost` flag](/dev/cli/sauce-connect-5/run/#proxy-localhost).

## How can I improve tunnel performance?

See [Improving Sauce Connect Proxy Performance](/secure-connections/sauce-connect-5/operation/tunnels/#sc5perf).

## What are the supported ports on localhost?

See [Ports for proxying localhost traffic](/secure-connections/sauce-connect-5/specifications/localhost-ports).

## What are the optimal open file settings? {#sc5openfiles}

The [open file limit](https://www.tecmint.com/increase-set-open-file-limits-in-linux/) on macOS and other Unix-based systems limits the number of open file descriptors. Since a file descriptor is opened for each network connection, the open file limit also restricts the number of open network connections. Under normal usage, Sauce Connect Proxy can easily reach the default limit (1024 in most cases). This causes each new connection to time out, and results in failed tests. Modern systems allow much higher limits without any visible impact on memory, so we **recommend setting the open file limit to 64000** in order to ensure the open file limit is never an issue for tunneled requests.

## (CIA) If we have five users, should we use five instances of Sauce Connect Proxy or set up one shared instance?

Feel free to do either, even if you only have one Sauce account.

If you do decide to use five separate instances, you'll need to create unique identifiers for each. More information: **High Availability Sauce Connect 5 Setup needed**.

## (CIA) Can I split testing traffic across multiple Sauce Connect Proxy tunnels?

Sauce Connect Proxy offers some options for high availability that enable multiple Sauce Connect Proxy tunnels to be grouped into a pool, which is treated like a single tunnel. This has several advantages, including the ability to distribute the load of test traffic. More information: **High Availability Sauce Connect 5 Setup needed**.

## (CIA) Does Sauce Connect Proxy support running XCUITest and Espresso tests?

Yes. More information: [Mobile Testing Frameworks](/mobile-apps/automated-testing/appium).

## How many Sauce Connect Proxy tunnels can I keep open simultaneously?

Your options depend on your license type. More information: [System and Network Requirements for Sauce Connect Proxy](/secure-connections/sauce-connect-5/system-requirements).

## How many tests can I run in each Sauce Connect Proxy tunnel?

There are currently no limits on how many tests you can run in each tunnel, though we may eventually implement limitations to maintain service quality. More information: [System and Network Requirements for Sauce Connect Proxy](/secure-connections/sauce-connect-5/system-requirements).

## Are there restrictions on who can use Sauce Connect Proxy tunnels for real device testing?

No, tunnels to the Real Device Cloud are automatically shared with all of your team members. More information: [Security Settings for Organizations](/basics/acct-team-mgmt/org-settings).

## Can I run tests on Virtual Devices and Real Devices using the same Sauce Connect Proxy tunnel?

Yes, you can use the same Sauce Connect Proxy tunnel and/or same machine to test with the Virtual Device Cloud (VDC) and Real Device Cloud (RDC).

## Are there any special parameters when using a PAC file in real device tests?

No, though you cannot use the `localhost` address with iOS and Android.

## Will Sauce Connect Proxy work with dynamic allocation of real devices?

Yes.

## Can you allowlist IP addresses instead of using Sauce Connect?

Testing your internal systems with Sauce Labs requires that our service is able to establish a secure connection. To create a secure connection, we strongly recommend using [Sauce Connect](/secure-connections/sauce-connect-5) or [Sauce IPSec Proxy](/secure-connections/ipsec-vpn) instead of allowlisting IP ranges.

Using our Sauce Connect tool, will provide the following benefits:

### Configurability

Sauce Connect Proxy provides many tools designed to improve the testing experience, from selective traffic routing to bandwidth restriction.

Each Sauce Connect Proxy instance can be assigned different network proxies, run on different hosts, allocated to different users and allowed access to different systems under test. This allows infrastructure teams great control and flexibility over system access.

Allowlisting provides no controls over which systems can be accessed by which users; anyone with the correct URL can access any service.

### Portability

Sauce Connect Proxy can be used in any part of your corporate infrastructure, with relatively minimal setup. It allows you to test systems in different environments, different locations, and different physical hosts. With a flexible Sauce Connect setup, a developer can run tests on their local machine, their staging service, their build server, and anywhere else required.

Allowlisting, in comparison, requires different routes and URLs for each environment under test. This places a maintenance burden on the networking team and leads to configuration problems for testers.

### Reliability and Ease of Maintenance

Once you're up and running with Sauce Connect Proxy, no maintenance is required; you'll only need to update to the new versions of our software, upon release.

Sauce Connect Proxy can be set up for multiple corporate users and multiple systems under test, at the same time.

With Sauce Connect Proxy, our support team can provide greater assistance debugging connectivity and reliability problems, thanks to improved logging and network tracking. Additionally, Sauce Connect Proxy's underlying network tools improve reliability over bad network connections.

### Security

Sauce Labs operates from a wide range of IP addresses, which you could allocate to any test environment at any time. By allowlisting these IP addresses, any Sauce Labs customer could conceivably send requests to your system under test, and your network infrastructure would allow it. Additionally, allowlisting does not provide tools for time-based access controls or easy disconnection.

By using Sauce Connect Proxy instead of allowlisting, your network will be secure. At the end of every Sauce Connect Proxy session, upon terminating the client, the connection between our service and your infrastructure is severed, allowing you fine-grained access control.

For more information about Sauce Connect Proxy&trade; and its security, see [this white paper](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview).

## Where can I get more in-depth information about Sauce Connect Proxy?

[Sauce Connect Proxy white paper](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview) contains an in-depth overview of the proxy and its security.

:::note
Additional most frequent questions from customers will be put belo
:::
