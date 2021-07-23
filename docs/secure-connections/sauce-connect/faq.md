---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

If you're new to Sauce Connect Proxy or troubleshooting, this list of frequently asked questions can help you with what you need to know.

## What outbound ports do I need open for Sauce Connect Proxy?

Sauce Connect can only communicate with Sauce Labs via `port 443`. This is not configurable.

## How can I share a Sauce Connect Proxy tunnel between multiple accounts?

To share a tunnel, start a tunnel with the [`--shared-tunnel`](/dev/cli/sauce-connect-proxy) flag. For most Sauce Labs customers, your access to shared tunnels is determined by the permissions of the user who creates them. Organization admins can create tunnels that any user on any team can use. Team admins can create tunnels that any member of their team can use. Team members cannot share tunnels they create with any other team member.

In order to use a tunnel that an admin or team member shares with you, you'll need to add `parentTunnel` to your desired capabilities and specify that person's username.

More information: [Shared Tunnels](/dev/test-configuration-options).


## How can I use Sauce Connect Proxy to test graceful degradation?

You can use the [`--fast-fail-regexps`](/dev/cli/sauce-connect-proxy) command-line option to drop requests that fit a description altogether. It can be used to simulate non-loading of scripts, styles, or other resources.

This flag can contain a list of regex that will match the domain that wants to be blocked. Example:

Entering this code -- `(www.)?google-analytics.com,(www.)?googletagmanager.com,([a-z0 9]+[.])*google.com,([a-z0-9]+[.])+facebook.com` -- will block the following domains:
* `www.google-analytics.com`
* `google-analytics.com`
* `google.com` and any subdomain of `google.com`
* Any subdomain of `facebook.com`, but not `facebook.com`


## Can I access applications on localhost?

When using Sauce Connect Proxy, local web apps running on commonly used ports are available to test at localhost URLs, just as if the Sauce Labs cloud were your local machine.

However, because an additional proxy is required for localhost URLs, tests may perform better when using a locally defined domain name (which can be set in your [`hosts file`](http://en.wikipedia.org/wiki/Hosts_file)) rather than localhost. Using a locally defined domain name also allows access to applications on any port.

:::note
On Android devices, ports 5555 and 8080 cannot be used with Sauce Connect Proxy.
:::

### Supported Browsers and Ports

The following commonly used browsers and ports are subject to change as new versions are released:

Microsoft Edge, Chrome 71+ and the Safari browser on OS X 10.10+ and mobile iOS 8+ proxy these common ports:

    443, 888,
    2000, 2001, 2020, 2109, 2222, 2310,
    3000, 3001, 3010, 3030, 3210, 3333,
    4000, 4001, 4201, 4040, 4321, 4502, 4503, 4567,
    5000, 5001, 5002, 5050, 5555, 5432,
    6000, 6001, 6060, 6666, 6543,
    7000, 7070, 7774, 7777,
    8000, 8001, 8003, 8031, 8080, 8081, 8443, 8765, 8777, 8888,
    9000, 9001, 9031, 9080, 9081, 9090, 9191, 9876, 9877, 9999,
    49221, 55001


## If we have five users, should we use five instances of Sauce Connect Proxy or set up one shared instance?

Feel free to do either, even if you only have one Sauce account.

If you do decide to use five separate instances, you'll need to create unique identifiers for each. More information: [High Availability Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).


## Can I split testing traffic across multiple Sauce Connect Proxy tunnels?

Sauce Connect Proxy offers some options for high availability that enable multiple Sauce Connect Proxy tunnels to be grouped into a pool, which is treated like a single tunnel. This has several advantages, including the ability to distribute the load of test traffic. More information: [High Availability Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).


## Does Sauce Connect Proxy support running XCUITest and Espresso tests?

Yes. More information: [Mobile Testing Frameworks](/mobile-apps/automated-testing/appium).


## How many Sauce Connect Proxy tunnels can I keep open simultaneously?

Your options depend on your license type. More information: [System and Network Requirements for Sauce Connect Proxy](/secure-connections/sauce-connect/system-requirements).


## How many tests can I run in each Sauce Connect Proxy tunnel?

There are currently no limits on how many tests you can run in each tunnel, though we may eventually implement limitations to maintain service quality. More information: [System and Network Requirements for Sauce Connect Proxy](/secure-connections/sauce-connect/system-requirements).


## Are there restrictions on who can use Sauce Connect Proxy tunnels for real device testing?

No, tunnels to the Real Device Cloud are automatically shared with all of your team members. More information: [Security Settings for Organizations](/basics/acct-team-mgmt/org-settings).


## Can I run tests on Virtual Devices and Real Devices using the same Sauce Connect Proxy tunnel?

Yes, you can use the same Sauce Connect Proxy tunnel and/or same machine to test with the Virtual Device Cloud Real Device Cloud.

:::note
If you're still using Legacy RDC, you will need to configure separate, unique tunnel for virtual devices and real devices. More information: [Creating Tunnels in TestObject (Legacy)](/secure-connections/sauce-connect/setup-configuration/legacy-tunnels).
:::

## Are there any special parameters when using a PAC file in real device tests?

No, though you cannot use the `localhost` address with iOS.


## Will Sauce Connect Proxy work with dynamic allocation of real devices?

Yes.

## Can you allowlist IP addresses instead of using Sauce Connect Proxy?

To create a secure connection, we strongly recommend using Sauce Connect or IPSec VPN instead of allowlisting IP ranges. More information: [Why Sauce Labs Recommends Sauce Connect Proxy Over Allowlisting IP Addresses](/secure-connections/sauce-connect).
