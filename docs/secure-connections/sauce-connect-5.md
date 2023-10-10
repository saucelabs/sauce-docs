---
id: sauce-connect-5
title: Sauce Connect Proxy 5
sidebar_label: Overview
---

:::info
Sauce Connect Proxy 5 release is currently in the Alpha stage, some changes in CLI are expected.
:::

Sauce Connect Proxy 5 is a complete rewrite of Sauce Connect Proxy 4.x.x that aims to improve observability, performance, and user experience and provide a strong foundation for future improvements.

## What You'll Need

- If you're new to Sauce Connect, we recommend reviewing the [Sauce Connect Proxy overview](/secure-connections/sauce-connect) documentation.

## What's New In Sauce Connect Proxy 5?

:::caution
The Sauce Connect Proxy version 5 major release introduces CLI changes. Please refer to [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/) for details.
:::

1. Improved onboarding and integration due to the secure connection (tunnel) protocol change.
   The previous generation of Sauce Connect Proxy (version 4) used a custom [KGP](/secure-connections/sauce-connect/advanced/kgp/) protocol. The Sauce Connect Proxy version 5 uses HTTP/2 to establish a secure connection to Sauce Labs.
   Using a standard well-documented protocol that is widely used in the industry simplifies Sauce Connect Proxy integration in secure CI/CD environments.
2. Performance improvement.
   HTTP/2 protocol is optimized for security and performance, it provides significant performance improvements that are especially noticeable when multiple test sessions use the same Sauce Connect Proxy instance.
3. Significant improvement in CPU and memory utilization.
   Sauce Connect Proxy 5 utilizes much less memory and CPU resources making it easier to run at scale.
4. Observability improvement.
   Sauce Connect Proxy 5 comes with Prometheus metrics. A sample Grafana dashboard is available [here](https://github.com/saucelabs/sauce-connect-docker/tree/main/examples/docker-compose-prometheus-grafana).
5. Easier installation and upgrade process. Sauce Connect Proxy 5 release contains deb and rpm packages for Linux, brew support for macOS, as well as x86_64 and arm64 architectures support for all platforms.

### Major changes

Sauce Connect Proxy 5 major changes are listed below.

- The [Selenium Relay](/secure-connections/sauce-connect/proxy-tunnels/#using-the-selenium-relay) feature is not supported.
- Tunnels must be named, `--tunnel-name` flag is no longer optional. It's done to improve security and usability - tests that use Sauce Connect must explicitly specify the [tunnel name](/dev/test-configuration-options/#tunnelname).
- There is no default Sauce Labs region value, `--region` is required to ensure that the correct region is explicitly specified.
- Proxy auto-detection is not supported, all proxies must be specified with explicit flags - `--proxy` or `--pac` for SUT requests and `--proxy-sauce` for Sauce Labs REST API and tunnel connections.
- Domain flags (`--tunnel-domains`, `--direct-domains`, etc) accept regular expressions only

The following flags are renamed or changed to conform with the CLI naming scheme:

- `--shared-tunnel` to `--shared all`
- `--fast-fail-regexps` to `--deny-domains`
- `--no-ssl-bump-domains` to `--tls-passthrough-domains`
- `--status-address` to `--api-address`
- `--dns` to `--dns-server`
- `--cainfo` to `--cacert-file`

## Getting Started With Sauce Connect Proxy 5

Sauce Connect Proxy 5 network requirements are very similar to the previous generation of Sauce Connect Proxy (version 4). The main difference is that Sauce Connect Proxy 5 doesn't initiate non-HTTP connections.
See [this document](/secure-connections/sauce-connect-5/quickstart/) for quickstart instructions.

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect/)
- [Sauce Connect Proxy 5 Quickstart Guide](/secure-connections/sauce-connect-5/quickstart/)
- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/)
