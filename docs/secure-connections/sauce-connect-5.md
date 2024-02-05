---
id: sauce-connect-5
title: Sauce Connect Proxy 5
sidebar_label: Overview
---

Sauce Connect Proxy 5 is a complete rewrite of Sauce Connect Proxy 4.x.x that aims to improve observability, performance, and user experience and provide a strong foundation for future improvements.

## What You'll Need

- If you're new to Sauce Connect, we recommend reviewing the [Sauce Connect Proxy overview](/secure-connections/sauce-connect) documentation.

## What's New In Sauce Connect Proxy 5?

:::caution
The Sauce Connect Proxy version 5 major release introduces CLI changes. Please refer to [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/) for details.
An [`sc legacy`](/dev/cli/sauce-connect-5/legacy/) command is introduced to help users transition from version 4.x.x to 5.0.x.
:::

1. Improved onboarding and integration due to the secure connection (tunnel) protocol change.
   The previous generation of Sauce Connect Proxy (version 4) used a custom [KGP](/secure-connections/sauce-connect/advanced/kgp/) protocol. The Sauce Connect Proxy version 5 uses HTTP/2 to establish a secure connection to Sauce Labs.
   Using a standard well-documented protocol that is widely used in the industry simplifies Sauce Connect Proxy integration in secure CI/CD environments.
2. Performance improvement.
   HTTP/2 protocol is optimized for security and performance, it provides significant performance improvements that are especially noticeable when multiple test sessions use the same Sauce Connect Proxy instance.
3. Significant improvement in CPU and memory utilization.
   Sauce Connect Proxy 5 utilizes much less memory and CPU resources making it easier to run at scale.
4. Observability improvement.
   Sauce Connect Proxy 5 comes with [Prometheus](https://prometheus.io/) metrics and a [Grafana dashboard](https://grafana.com/grafana/dashboards/20232-sauce-connect/).
5. Easier installation and upgrade process. Sauce Connect Proxy 5 release contains deb and rpm packages for Linux, brew support for macOS, as well as x86_64 and arm64 architectures support for all platforms.
6. Secure [WebSocket](https://en.wikipedia.org/wiki/WebSocket) support with [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) enabled.
7. [SOCKS5](https://datatracker.ietf.org/doc/html/rfc1928) support for upstream proxies.

### Major changes

Sauce Connect Proxy 5 major changes are listed below.

- Tunnels must be named, the [`--tunnel-name`](/dev/cli/sauce-connect-5/run/#--tunnel-name) flag is no longer optional. It's done to improve security and usability - tests that use Sauce Connect must explicitly specify the [tunnel name](/dev/test-configuration-options/#tunnelname).
- There is no default Sauce Labs region value, [`--region`](/dev/cli/sauce-connect-5/run/#--region) is required to ensure that the correct region is explicitly specified.
- [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) is not enabled for all domains, by default.
  - [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) is fully supported and additional flags are added to fine-tune the configuration.
- Proxy auto-detection is not supported, all proxies must be specified with explicit flags - [`--proxy`](/dev/cli/sauce-connect-5/run/#--proxy) or [`--pac`](/dev/cli/sauce-connect-5/run/#--pac) for SUT requests and [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#--proxy-sauce) for Sauce Labs REST API and tunnel connections.
- Domain flags ([`--tunnel-domains`](/dev/cli/sauce-connect-5/run/#--tunnel-domains), [`--direct-domains`](/dev/cli/sauce-connect-5/run/#--direct-domains), etc) accept regular expressions only.
- [Subcommands](/dev/cli/sauce-connect-5/) are introduced to support multiple CLI changes and future capabilities.
- The [Selenium Relay](/secure-connections/sauce-connect/proxy-tunnels/#using-the-selenium-relay) feature is not supported.
- Log administration capabilities (such as log-rotate) are not supported. Log management is better left to specialized tools.

## Getting Started With Sauce Connect Proxy 5

Please refer to [Sauce Connect Quickstart Guide](/secure-connections/sauce-connect-5/quickstart/) if you are new to Sauce Connect.

If you already use Sauce Connect Proxy 4, please refer to [Sauce Connect Proxy 5 Migration Guide](/secure-connections/sauce-connect-5/migrating/).

## More Information

- [Sauce Connect Proxy 5 Quickstart Guide](/secure-connections/sauce-connect-5/quickstart/)
- [Sauce Connect Proxy 5 Migration Guide](/secure-connections/sauce-connect-5/migrating/)
- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/)
