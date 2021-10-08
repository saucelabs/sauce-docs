---
id: sc-architecture
title: Sauce Connect Proxy Architecture
sidebar_label: Architecture
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This document provides an overview of Sauce Connect Proxy&trade; architecture to assist customer network and security engineering teams to better understand how it works.
For the introduction, see [Sauce Connect Introduction](/secure-connections/sauce-connect).

## Architecture

From the Sauce Labs side, the Sauce Connect system includes the following components:

- Sauce Connect client
- Sauce Connect server
- Sauce Connect REST API server
- Tunnels Web UI

Here is an overview of how these components interact with a user’s environment:

<img src={useBaseUrl('img/sauce-connect/sc-arch-components.png')} alt="Sauce Connect components interacting with user’s environment" width="800"/>

## Components Overview

### Sauce Connect Proxy&trade; Client

The client (also known as SC) is distributed as a single binary that contains several distinct components.

These include:

- SC Client controller - this is the “brain” of the SC client. It issues requests to the Sauce Labs REST API, starts all the other included components and ensures that everything is working as expected.
- KGP Client - the client side implementation of KGP, Sauce Labs proprietary protocol.
- HTTP Proxy - this contains a non-caching HTTP proxy that sends HTTP requests coming from tests that run on virtual machines (VMs) or devices on the Sauce Labs infrastructure to the website or application that is hosted inside the user’s firewall (either on an intranet, or a local machine).

### Sauce Connect Proxy&trade; Server

The Server is a VM (or container) running in Sauce Labs data centers and it includes the following components:

- Tunnel VM Controller - this is the logic that is responsible for configuring the VM, making sure all components are functional, and reporting back to other internal services.
- KGP Server - the server side implementation of KGP, Sauce Labs proprietary protocol. To learn more about this, please reference the Protocol section of this white paper (page 8).
- HTTP Proxy - off the shelf HTTP proxy that is responsible for sending requests from tests running in Sauce Labs VMs or devices to the KGP Server. Note that SSL traffic is “bumped” by default. This can be disabled.

### Sauce Labs REST API

The Sauce Labs REST API allows the Sauce Connect Proxy&trade; Client (or any authenticated client) to start and stop tunnels and/or get information about existing tunnels.
For more infornation, see [Sauce Connect API documentation](/dev/api/connect).

### Tunnels Web UI

Users that are executing tests through Sauce Connect can see all information about the tunnels they are running through the web UI.
