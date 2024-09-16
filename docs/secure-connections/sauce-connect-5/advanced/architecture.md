---
id: architecture
title: Sauce Connect Proxy Architecture
sidebar_label: Architecture
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document provides an overview of Sauce Connect Proxy 5 architecture to assist customer network and security engineering teams to better understand how it works.

## What You'll Need

- If you're new to Sauce Connect, we recommend reviewing the [Sauce Connect Proxy overview](/secure-connections/sauce-connect) documentation.

## Architecture Components

From the Sauce Labs side, the Sauce Connect system includes the following components:

- Sauce Connect Proxy client
- Sauce Connect Proxy server
- Sauce Connect REST API server
- Tunnels Web UI

Here is an overview of how these components interact with the user environment:

<img src={useBaseUrl('img/sauce-connect/sc5-arch-components.png')} alt="Sauce Connect components interacting with user’s environment" width="800"/>

### Sauce Connect Proxy Client components

The [client (also known as SC)](/secure-connections/sauce-connect-5/installation)
is distributed as a single binary that contains several distinct components.
These include:

- SC Client controller: the “brain” of the SC client. It issues requests to the Sauce Labs REST API, starts all the other included components and ensures that everything is working as expected.
- API Server: this is an HTTP server providing an API to query the SC Client controller and exposing the client-side metrics
- HTTP/2 Connection Manager: the client side implementation of the HTTP/2 connection used for tunneling requests.
- HTTP Proxy: this contains a non-caching HTTP proxy (also [available](https://github.com/saucelabs/forwarder) as a standalone proxy) that proxies HTTP requests coming from tests that run on virtual machines (VMs) or devices on the Sauce Labs infrastructure to the website or app that is hosted inside the user’s firewall (either on an intranet or a local machine).

### Sauce Connect Proxy Client Traffic

The diagram above also illustrates the traffic that is initiated from the client.

- Sauce Connect Proxy client sends requests to the Sauce Labs REST API
  - Start/stop requests as well as various status queries to the Sauce Labs public REST API
- Sauce Connect Proxy client establishes several (two by default) permanent secure HTTP/2 connections to Sauce Connect Server
  - These connections form a secure "tunnel" between the client and the server
  - These connections are alive as long as Sauce Connect Proxy client process is alive
- Sauce Connect Proxy built-in HTTP proxy processes requests initiated by a browser or a mobile app in the Sauce Labs data center

### Sauce Connect Proxy Server

The server is a VM (or a container) running in Sauce Labs data centers and it includes the following components:

- Tunnel VM Controller: this is the logic that is responsible for configuring the VM, making sure all components are functional, and reporting back to other internal services.
- SC Server: the server side implementation of HTTP/2 Connection Manager.
- HTTP Proxy: off-the-shelf HTTP proxy that is responsible for sending requests from tests running in Sauce Labs VMs or devices to the SC Server.

### Sauce Labs REST API

The Sauce Labs REST API allows the Sauce Connect Proxy Client (or any authenticated client) to start and stop tunnels and/or get information about existing tunnels. For more information, refer to the [Sauce Connect Proxy API documentation](/dev/api/connect).

### Tunnels Web UI

If you're executing tests through Sauce Connect Proxy, you'll be able to see all information about the tunnels you're running through the web UI (log in to Sauce Labs and go the **Tunnels** page).

## Start Sequence Diagram

<img src={useBaseUrl('img/sauce-connect/start-sequence.webp')} alt="Sauce Connect Proxy start sequence" width="800"/>

## Shutdown Sequence Diagram

<img src={useBaseUrl('img/sauce-connect/shutdown-sequence.webp')} alt="Sauce Connect Proxy shutdown sequence" width="800"/>
