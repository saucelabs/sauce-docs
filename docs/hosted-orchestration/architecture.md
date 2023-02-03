---
id: architecture
title: Hosted Orchestration Architecture
sidebar_label: Architecture
---


## Architecture Components

From the Sauce Labs side, Hosted Orchestration includes the following components:

  * [saucectl](/dev/cli/saucectl)
  * REST API
  * Containerized Test Executor

Here is an overview of how these components interact with the user environment:

<img src={useBaseUrl('img/hosted/hosted-arch-components.png')} alt="Hosted Orchestration components interacting with user’s environment" width="800"/>

### REST API

The REST API service provides the following functionality:

  * Creates a new hosted test orchestration session
  * Gets the status of an existing hosted session
  * Stops a hosted session that is being executed

### Containerized Test Executor

The main advantage of test containerization is that the application, together with all of its configuration files and dependencies, is environment-agnostic. Containerized tests will run exactly the same way on any machine--CI or local--irrespective of the underlying OS and other dependencies.

Sauce Labs provides an environment that, given a container image, would execute containerized tests.
The containerized test executor environment requires the following:

  * A customer-built container image
  * A command to execute (both [entrypoint](https://docs.docker.com/engine/reference/builder/#entrypoint) and [command](https://docs.docker.com/engine/reference/builder/#cmd) are supported as well)
  * A number of other optional parameters

The executor will run the container in the dedicated secure environment. The execution status is available via the REST API.
