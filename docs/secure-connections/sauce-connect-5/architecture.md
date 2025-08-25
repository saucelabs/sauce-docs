---
id: architecture
title: Sauce Connect Architecture
sidebar_label: Architecture
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect 5 lets tests running in the Sauce Labs cloud securely access web or app resources that live behind your corporate firewall. It does this by opening an outbound-only tunnel from your network to Sauce Labs, so no inbound ports have to be exposed.

## High-Level Architecture

From Sauce Labs' perspective the system is made up of three building blocks:

- **Sauce Connect client (SC5 binary)** - runs inside your network
- **Sauce Connect Server** - runs in the Sauce Labs data center
- **Sauce Labs REST API** - manager of the tunnel lifecycle (start, stop, status)

### What Runs Inside Your Network

Sauce Connect client consist of:

- SC5 controller - the "brain" of the binary. Reads configuration, authenticates with Sauce Labs, negotiates tunnel creation, and supervises all other tasks.
- HTTP/2 connection manager - maintains long-lived, TLS-encrypted HTTP/2 connections to the Sauce Connect Server. Automatically reconnects on network blips.
- Forward proxy - embedded copy of [Forwarder](https://github.com/saucelabs/forwarder) that proxies requests into your network.

## Data Flow

1. The Sauce Connect client authenticates with your Sauce Labs account and requests a new tunnel via the REST API.
2. The Sauce Connect client opens long-lived, TLS-encrypted HTTP/2 connections to the SC5 server.
3. Browsers or devices in Sauce Labs send requests to the Sauce Connect Server; those requests travel through the tunnel to reach services inside your network.
4. Responses follow the same path back.

## Next Steps

- [Install Sauce Connect 5](/secure-connections/sauce-connect-5/installation/)
- [Quickstart Guide](/secure-connections/sauce-connect-5/quickstart/)
- [CI/CD Integration](/secure-connections/sauce-connect-5/guides/ci-cd-integration)
