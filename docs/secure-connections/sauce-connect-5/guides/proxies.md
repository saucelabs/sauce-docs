---
id: proxies
title: Sauce Connect 5 Setup with Additional Proxies
sidebar_label: Proxies
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This guide explains how to configure additional proxies for routing network traffic originating from a Sauce Connect 5 client. Setting up proxies can help meet your organization's requirements for:

- Network security and traffic control
- Compliance with corporate internet usage policies
- Traffic monitoring or caching mechanisms

Sauce Connect 5 handles two types of network traffic:

- **Sauce Labs Traffic:**
  - REST API communication (e.g., start/stop requests, status updates)
  - Long-lived HTTP/2 tunnel connection between the client and Sauce Connect servers
- **Test Traffic:**
  - Requests from Sauce Labs browsers or devices to the Site Under Test (SUT) on your internal or public network

## Configuring Sauce Connect 5 with Proxies

You can route traffic through proxy servers by using the following command-line options (see the [CLI reference](/dev/cli/sauce-connect-5/run)):

- [`--proxy`](/dev/cli/sauce-connect-5/run/#proxy): proxy for test traffic (SUT)
- [`--pac`](/dev/cli/sauce-connect-5/run/#pac): proxy auto-configuration for test traffic
- [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#proxy-sauce): proxy for Sauce Labs REST API and tunnel
- [`--auth`](/dev/cli/sauce-connect-5/run/#auth): configuring proxy authentication separately

### Proxied Site Under Test (SUT)

In this configuration, the Site Under Test (SUT) is behind a proxy (sometimes also called an upstream proxy).
This setup controls access to the SUT by IP allow-listing or by restricting proxy access to users with valid username/password credentials.
Depending on your setup, this proxy may or may not be able to access the public internet.

#### `--proxy`

Use the [`--proxy`](/dev/cli/sauce-connect-5/run/#proxy) flag to define a proxy for test traffic in the format:
`[protocol://][user:pass@host:port]`

Supported protocols are HTTP, HTTPS, SOCKS, and SOCKS5. If not specified, the default protocol is HTTP.
* HTTP: `--proxy local.dev:8080`
* HTTP: `--proxy http://local.dev:8080`
* HTTPS: `--proxy https://local.dev:4443`
* SOCKS5: `--proxy socks5//stunnel.local.dev:4443`

Authentication is optional and added if your proxy requires it. Alternatively, the authentication can be configured via the [`--auth`](#--auth) flag. For example:
* `--proxy https://user:auth@local.dev:4443`
* `--proxy https://local.dev:4443 --auth user:auth@local.dev:4443`

:::note
The `--proxy` flag applies only to test traffic. To configure a proxy for communication with Sauce Labs services, use [`--proxy-sauce`](#--proxy-sauce)
:::

#### `--pac`

For more complex setups, Sauce Connect allows configuring multiple proxies using industry-standard Proxy Auto-Configuration (PAC) with the [`--pac`](/dev/cli/sauce-connect-5/run#pac) flag.
The argument can be a local path or a URL.

* Relative path: `--pac ../../relative/path/proxy.pac`
* Absolute path: `--pac /etc/sc5/proxy.pac`
* File URL: `--pac file:///etc/sc5/proxy.pac`
* Remote URL: `--pac http://proxy.local/proxy.pac`

Authentication can be configured via [`--auth`](#--auth) if required.

:::note
The `--pac` flag configures proxies for test traffic only. To proxy Sauce Labs API and tunnel traffic, use [`--proxy-sauce`](#--proxy-sauce).
:::

#### `--auth`

Use the [`--auth`](/dev/cli/sauce-connect-5/run#auth) flag to provide credentials for authenticating with an upstream proxy that requires them.
Networks that enforce access control on proxy usage require this flag for successful authentication.
For detailed usage see the [Upstream Authentication guide](/secure-connections/sauce-connect-5/guides/upstream-auth/).

### Proxied Sauce Labs REST API and Tunnel Server

Use this configuration when Sauce Connect Client must reach Sauce Labs services via a corporate proxy. This proxy must allow outbound access to Sauce Labs over the public internet.

#### `--proxy-sauce`

Use the [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#proxy-sauce) flag to specify a proxy for:
* REST API traffic
* Long-lived tunnel connections to the Sauce Connect server

Format: `[protocol://][user:pass@host:port]`

This lets you route Sauce Labs communication through a separate proxy from your test traffic, without relying on a PAC file.

:::note
The `--proxy-sauce` flag configures only the Sauce Labs API and tunnel traffic. Use [`--proxy`](#--proxy) or [`--pac`](#--pac) for test traffic.
:::
