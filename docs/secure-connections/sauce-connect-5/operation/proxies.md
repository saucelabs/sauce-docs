---
id: proxies
title: Sauce Connect Proxy Setup with Additional Proxies
sidebar_label: Additional Proxies
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The Sauce Connect Proxy 4.x.x version of this article is [here](/secure-connections/sauce-connect/setup-configuration/additional-proxies).
:::


This guide is intended for users who need to set up additional proxies to route traffic originated from their Sauce Connect Proxy client. Additional proxies may be configured for various purposes
such as improved network security, corporate internet usage policy, traffic monitoring, or caching. Sauce Connect Proxy network traffic includes:

- Traffic between Sauce Labs and a Sauce Connect Proxy client.
  - Connections are initiated by a Sauce Connect Proxy client.
  - Requests between a Sauce Connect Proxy client and the Sauce Labs REST API service, such as start and stop requests and status updates.
  - Sauce Connect Proxy long-lived HTTP/2 tunnel connection.
- Traffic between Sauce Connect Proxy and the internet or internal servers serving data that your tests running on Sauce Labs infrastructure use.
  - This traffic originates from Sauce Labs-hosted browsers and mobile devices that are running your tests.

## Setting Up Sauce Connect With Your Proxy Server

Two types of network traffic that are relevant to using proxy servers with Sauce Connect Proxy:

- **Test Traffic:** The Sauce Connect Proxy communicates with the Site Under Test (SUT) running in your network or public internet.
- **Sauce Labs traffic**
  - **REST API Traffic:** The Sauce Connect Proxy client running on your network communicates to our REST API service some basic information about the Sauce Connect Proxy's status (for example, starting up, ready, stopping).
  - **Tunnel Traffic:** The Sauce Connect Proxy client establishes a secure long-lived connection to the Sauce Connect Proxy server in the Sauce Labs cloud to multiplex the SUT-bound traffic.

To configure Sauce Connect Proxy to use your proxy or proxies, you will need to include one or more Sauce Connect command-line options (see the [Sauce Connect Proxy Command-Line Quick Reference Guide](/dev/cli/sauce-connect-5/run)).

- [`-x`/`--proxy`](/dev/cli/sauce-connect-5/run/#proxy) allows configuring proxy
for SUT (test) traffic.
- [`--pac`](/dev/cli/sauce-connect-5/run/#pac) allows configuring proxy for SUT
(test) traffic via Proxy Auto-Configuration (PAC).
- [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#proxy-sauce) allows
configuring proxy for Sauce Labs REST API traffic and the tunnel traffic.
- [`--auth`](/dev/cli/sauce-connect-5/run/#auth) allows configuring proxy authentication separately.

## Proxied Site Under Test (SUT)

In this configuration, the Site Under Test (SUT) is behind a proxy (sometimes also called an upstream proxy), see the diagram below. This setup controls access to the SUT by IP allow-listing or by restricting proxy access to users with valid username/password credentials. Depending on your setup, this proxy may or may not be able to access the public internet.

<img src={useBaseUrl('img/sauce-connect/scp5-sut-proxy.png')} alt="Site Under Test (SUT) behind a proxy" width="800"/>

### `--proxy`

The [`-x`/`--proxy`](/dev/cli/sauce-connect-5/run/#proxy) sets a proxy using
the following format: `[protocol://][user:pass@host:port]`. For example,
`https://user:auth@internal.dev:443`.

- Supported protocols are HTTP, HTTPS, SOCKS, and SOCKS5. If not specified, the default protocol is HTTP. Examples of different protocols:
  - HTTP: `--proxy local.dev:8080`
  - HTTP: `--proxy http://local.dev:8080`
  - HTTPS: `--proxy https://local.dev:4443`
  - SOCKS5: `--proxy socks5//stunnel.local.dev:4443`
- Authentication is optional and added if your proxy requires it. Alternatively,
the authentication can be configured via the [`--auth`](/dev/cli/sauce-connect-5/run/#auth) flag. For example:
  - `--proxy https://user:auth@local.dev:4443` or `--proxy https://local.dev:4443 --auth user:auth@local.dev:4443`

:::note
The [`--proxy`](/dev/cli/sauce-connect-5/run/#proxy) flag configures the proxy
for test traffic only. Use the [`--proxy-sauce`](#--proxy-sauce) flag to configure
a proxy for the Sauce Labs REST API and Sauce Connect Server traffic.
:::

### `--pac`

Sometimes, proxy configuration for test traffic is more complex having just a single proxy for all resources. For example, your organization may have multiple proxy servers that allow access to different URL types i.e. one proxy for internal sites and another one for the public internet.
Sauce Connect Proxy allows configuring multiple proxies using industry-standard Proxy Auto-Configuration (PAC) with the [`--pac`](/dev/cli/sauce-connect-5/run/#pac) flag. The argument can be a local path or a URL. For example:

- A relative path to a file, `--pac ../../relative/directory/my.pac`
- An absolute path to a file, `--pac /path/to/my.pac`
- A local file URL, `--pac file:///path/to/my.pac`
- A remote URL, `--pac http://internal.dev:8080/my.pac`

If needed, proxy authentication can be specified with [`--auth`](#--auth)

:::note
The [`--pac`](/dev/cli/sauce-connect-5/run/#pac) flag configures the proxy for
test traffic only. Use the [`--proxy-sauce`](#--proxy-sauce) flag to configure a
proxy for the Sauce Labs REST API and Sauce Connect Server traffic.
:::

### `--auth`

Allows setting site or upstream proxy basic authentication credentials in the format `username:password@host:port`.
Either host or port can be set to `"*"` to match all. The flag can be specified multiple times to add multiple credentials.

Examples:

- Set authentication for an upstream proxy on port 4443: `--proxy https://local.dev:4443 --auth user:auth@local.dev:4443`
- Set authentication for an upstream proxy on all ports: `--proxy https://local.dev:4443 --auth "user:auth@local.dev:*"`
- Set authentication to a website: `--auth "user:auth@httpbin.org*"`
- Set authentication for different proxies returned by PAC: `--auth user1:auth1@proxy.myorg.net:443 --auth user2:auth2@local.dev:4443 --pac ./mypac.pac`

## Proxied Sauce Labs REST API and Sauce Connect Server

In this configuration, requests to Sauce Labs are behind a proxy, see the diagram below. This proxy must be able to access Sauce Labs over the public internet.

<img src={useBaseUrl('img/sauce-connect/scp5-sauce-proxy.png')} alt="Sauce behind a proxy" width="800"/>

### `--proxy-sauce`

The [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#proxy-sauce) defines a proxy
that Sauce Connect should use to route requests to the Sauce Labs REST API
service and Sauce Connect Proxy Server. The proxy URL format is the same as for
the [`--proxy`](#--proxy) flag.

This flag is introduced in version 5.0.0 to allow separate proxy configuration
for test traffic and the tunnel traffic without using a more complex [`--pac`](/dev/cli/sauce-connect-5/run/#pac)
flag.

:::note
The [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#proxy-sauce) flag configures
the Sauce Labs REST API and a tunnel server traffic only. Use the [`--proxy`](#proxy)
flag to configure a proxy for the test traffic.
:::
