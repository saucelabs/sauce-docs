---
id: sauce-connect-5
title: Sauce Connect Proxy 5
sidebar_label: Overview
---

:::info
Sauce Connect Proxy 5 release is currently in the Alpha stage, some changes in CLI are expected.
:::

Sauce Connect Proxy 5 is a complete rewrite of Sauce Connect Proxy 4.x.x that aims to improve user experience and, also, provides a strong foundation for future improvements.

## What You'll Need

- If you're new to Sauce Connect, we recommend reviewing the [Sauce Connect Proxy overview](/secure-connections/sauce-connect) documentation.

##  What's New In Sauce Connect Proxy 5

1. Simplified onboarding and integration due to the secure connection (tunnel) protocol change.
The previous generation of Sauce Connect Proxy (version 4) used a custom [KGP](/secure-connections/sauce-connect/advanced/kgp/) protocol. The Sauce Connect Proxy version 5 uses HTTP/2 to establish a secure connection to Sauce Labs.
Using standard well-documented protocol that is widely used in the industry simplifies Sauce Connect Proxy integration in secure CI/CD environments.
2. Performance improvement.
HTTP/2 protocol is optimized for security and performance, it provides significant performance improvements that are especially noticeable when multiple test sessions use the same Sauce Connect Proxy instance.
3. Significant improvement in CPU and memory utilization.
Sauce Connect Proxy 5 utilizes much less memory and CPU resources which makes it easier to run at scale.
4. Observability improvement.
Sauce Connect Proxy 5 comes with Prometheus metrics and a sample Grafana dashboard.

##  Getting Started With Sauce Connect Proxy 5

Sauce Connect Proxy 5 network requirements are very similar to the previous generation of Sauce Connect Proxy (version 4). The main difference is that Sauce Connect Proxy 5 doesn't initiate non-HTTP connections.
See [this document](/secure-connections/sauce-connect-5/installation/) for download and install instructions.

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect/)
- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/)
