---
id: architecture
title: Sauce Connect Proxy Architecture
sidebar_label: Architecture
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document provides an overview of Sauce Connect Proxy architecture to assist customer network and security engineering teams to better understand how it works.

## What You'll Need

- If you're new to Sauce Connect, we recommend reviewing the [Sauce Connect Proxy overview documentation](/secure-connections/sauce-connect).

## Architecture

From the Sauce Labs side, the Sauce Connect system includes the following components:

- Sauce Connect client
- Sauce Connect server
- Sauce Connect REST API server
- Tunnels Web UI

Here is an overview of how these components interact with the user environment:

<img src={useBaseUrl('img/sauce-connect/sc-arch-components.png')} alt="Sauce Connect components interacting with user’s environment" width="800"/>

## Components Overview

### Sauce Connect Proxy Client

The [client (also known as SC)](/secure-connections/sauce-connect/installation/#download-latest-version) is distributed as a single binary that contains several distinct components.

These include:

- SC Client controller: the “brain” of the SC client. It issues requests to the Sauce Labs REST API, starts all the other included components and ensures that everything is working as expected.
- KGP Client: the client side implementation of [KGP, Sauce Labs proprietary protocol](/secure-connections/sauce-connect/advanced/kgp).
- HTTP Proxy: this contains a non-caching HTTP proxy that sends HTTP requests coming from tests that run on virtual machines (VMs) or devices on the Sauce Labs infrastructure to the website or application that is hosted inside the user’s firewall (either on an intranet or a local machine).


### Sauce Connect Proxy Server

The server is a VM (or container) running in Sauce Labs data centers and it includes the following components:

- Tunnel VM Controller: this is the logic that is responsible for configuring the VM, making sure all components are functional, and reporting back to other internal services.
- KGP Server: the server side implementation of [KGP, Sauce Labs proprietary protocol](/secure-connections/sauce-connect/advanced/kgp).
- HTTP Proxy: off-the-shelf HTTP proxy that is responsible for sending requests from tests running in Sauce Labs VMs or devices to the KGP Server. Note that SSL traffic is “bumped” by default. This can be disabled.


### Sauce Labs REST API

The Sauce Labs REST API allows the Sauce Connect Proxy Client (or any authenticated client) to start and stop tunnels and/or get information about existing tunnels. For more information, refer to the [Sauce Connect Proxy API documentation](/dev/api/connect).


### Tunnels Web UI

If you're executing tests through Sauce Connect Proxy, you'll be able to see all information about the tunnels you're running through the web UI (log in to Sauce Labs and go the **Tunnels** page).
