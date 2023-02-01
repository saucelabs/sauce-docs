---
id: architecture
title: Hosted Orchestration Architecture
sidebar_label: Architecture
---

This document provides an overview of the Hosted Orchestration architecture to assist customer engineering, network, and security engineering teams to better understand how it works.

## Architecture Components

From the Sauce Labs side, Hosted Orchestration includes the following components:

- [saucectl](/dev/cli/saucectl)
- REST API
- Containerized Test Executor

Here is an overview of how these components interact with the user environment:

<!-- <img src={useBaseUrl('img/hosted/hosted-arch-components.png')} alt="Hosted Orchestration components interacting with user’s environment" width="800"/> -->

### REST API

The REST API service allows provides the following functionality

- Create a new hosted test orchestration session
- Get the status of an existing hosted session
- Stop a hosted session being that is being executed

### Containerized Test Executor

Tests containerization main advantage is that the application together with all of its configuration files and dependencies is environment-agnostic.
Containerized tests will run exactly the same way in any machine, CI or local, irrespective of the underlying OS and other dependencies.
Sauce Labs provides an environment that, given a container image, would execute containerized tests.
The "Containerized test executor" environment requires the following:

- A customer-built container image
- A command to execute (both [entrypoint](https://docs.docker.com/engine/reference/builder/#entrypoint) and [command](https://docs.docker.com/engine/reference/builder/#cmd) are supported as well)
- A number of other optional parameters

The executor will run the container in the dedicated secure environment. The execution status is available via the REST API.
