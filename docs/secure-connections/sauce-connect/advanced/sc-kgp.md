---
id: sc-kgp
title: KGP
sidebar_label: Tunneling Protocol
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This document provides information about KGP - the tunneling protocol used by Sauce Connect Proxy&trade;
to assist customer network and security engineering teams to better understand Sauce Connect Proxy&trade; networking.
It's recommended to become familiar with [Sauce Connect Proxy&trade; architecture](/secure-connections/sauce-connect/advanced/sc-architecture)
first.

## KGP Tunneling Protocol

Sauce Connect Proxy&trade; establishes a reverse tunnel over encrypted connection between
[Sauce Connect Proxy&trade; client](/secure-connections/sauce-connect/advanced/sc-architecture/#sauce-connect-proxy-client) and
[Sauce Connect Proxy&trade; server](/secure-connections/sauce-connect/advanced/sc-architecture/#sauce-connect-proxy-server).
The reverse tunneling part is achieved via protocol called KGP.

KGP is an application layer protocol that carries all HTTP(s) traffic as its payload.
It is developed and maintained by Sauce Labs, and is used to multiplex established connections for multiple HTTP requests/responses.

KGP is preferred over conventional protocols (such as reverse SSH tunnel) for a number of reasons:

    - It’s lightweight
    - It reconnects when a connection accidentally disconnects
    - It ensures that all the data is sent and received, even over an unstable or intermittent connection
    - It provides information about the connection state

## KGP Packet types

KGP defines the following packet types

    - Data packets carrying HTTP(s) traffic
    - Control packets, which include:
    - Connection requests
    - Keepalive timers

## KGP Security

KGP, by itself, is not responsible for the connection security, it just allows to multiplex an existing TCP connection.
However, all KGP packets are encrypted with the industry standard TLS 1.2 protocol using OpenSSL library.
