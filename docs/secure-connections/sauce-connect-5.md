---
id: sauce-connect-5
title: Sauce Connect 5
sidebar_label: Overview
---

Sauce Connect 5 is a secure tunneling solution that enables you to safely test applications behind firewalls or on local environments using Sauce Labs infrastructure.
Built for modern development workflows, this version of Sauce Connect emphasizes **performance**, **observability**, and **ease of use**.

Sauce Connect Client is a lightweight software application that creates a secure connection (a "tunnel") between your environment and Sauce Labs.
This allows you to test applications that are not publicly accessible, such as:

- Locally hosted web applications
- Staging environments behind a firewall
- Environments protected by IP allowlists

## Key Features

### Secure and Standardized Tunneling

Sauce Connect 5 uses the **HTTP/2 protocol** to establish encrypted tunnels.
Unlike custom protocols, HTTP/2 integrates seamlessly with enterprise firewalls and proxies, simplifying deployment and enhancing security.

### Performance

Built with speed and scalability in mind, SC5 delivers:

- Faster tunnel startup and test execution
- Significantly reduced CPU and memory usage
- Improved performance in high-concurrency environments

Learn more in [Sauce Connect 5.2.0: Why You Should Migrate](https://saucelabs.com/resources/blog/sauce-connect-5-2-0-migration).

### Observability

Operational transparency is a core part of SC5. It exposes real-time metrics via:

- Prometheus-compatible metrics
- Pre-built Grafana dashboards

This allows you to monitor tunnel usage, uptime, and system health. See the [Monitoring Guide](/secure-connections/sauce-connect-5/guides/monitoring/) for details.

### Easy Installation

SC5 is distributed in multiple formats to accommodate diverse systems and architectures. Available formats include the following:

- Winget package (Windows)
- Homebrew tap (macOS)
- `deb` and `rpm` packages (Linux)
- x86_64 and arm64 binaries (Linux, macOS, Windows)

See the [Installation Guide](/secure-connections/sauce-connect-5/installation/) for setup instructions.

### Advanced Proxy Capabilities

- Secure [WebSocket](https://en.wikipedia.org/wiki/WebSocket) support with [TLS resigning](/secure-connections/sauce-connect-5/guides/tls-resigning/) enabled.
- [SOCKS5](https://datatracker.ietf.org/doc/html/rfc1928) support for upstream proxies.
- [PAC file](/secure-connections/sauce-connect-5/guides/proxies/#--pac) support for selective routing

## Migrating from Sauce Connect 4

See the [Migration Guide](/secure-connections/sauce-connect-5/migrating/) for detailed instructions on transitioning from Sauce Connect 4 to Sauce Connect 5.

## Getting Started

To start using Sauce Connect 5:

- Read the [Quickstart Guide](/secure-connections/sauce-connect-5/quickstart/)
- Explore the [CLI Reference](/dev/cli/sauce-connect-5/)
- Review the [Migration Guide](/secure-connections/sauce-connect-5/migrating/) if you're upgrading from Sauce Connect 4
