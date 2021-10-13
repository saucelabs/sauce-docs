---
id: kgp
title: KGP Sauce Connect Proxy Tunneling Protocol
sidebar_label: KGP Protocol
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document provides information about KGP, the tunneling protocol used by Sauce Connect Proxy to assist customer network and security engineering teams to better understand the Sauce Connect Proxy networking model.

:::note

In-depth understanding of the tunneling protocol used by Sauce Connect Proxy is not required to use KGP.

:::

## What You'll Need

- Have a working understanding of [Sauce Connect Proxy architecture](/secure-connections/sauce-connect/advanced/architecture).


## About KGP Tunneling Protocol

Sauce Connect Proxy establishes an encrypted TCP connection between the [Sauce Connect Proxy client](/secure-connections/sauce-connect/advanced/architecture/#sauce-connect-proxy-client) and [Sauce Connect Proxy server](/secure-connections/sauce-connect/advanced/architecture/#sauce-connect-proxy-server). This connection is used as a reverse tunnel between the user environment and Sauce Labs data center.

The protocol used to achieve the reverse tunneling is called _KGP_. It's an application layer protocol that carries all HTTP(s) traffic as its payload. Developed and maintained by Sauce Labs, KGP is used to multiplex established connections for multiple HTTP requests/responses.

KGP is preferred over conventional protocols (such as reverse SSH tunnel) for a number of reasons:
- It’s lightweight
- It reconnects when a connection accidentally disconnects
- It ensures that all the data is sent and received, even over an unstable or intermittent connection
- It provides information about the connection state


## KGP Packet Types

KGP defines the following packet types:
- Data packets carrying HTTP(s) traffic
- Control packets, which include:
  - Connection requests
  - Keepalive timers

## KGP Security

KGP, by itself, is not responsible for the connection security. It just allows you to multiplex an existing TCP connection. However, all KGP packets are encrypted with the industry standard TLS 1.2 protocol using OpenSSL library.
