---
id: readiness-checks
title: Sauce Connect Proxy Readiness Checks
sidebar_label: Readiness Checks
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To run tests using an ephemeral tunnel, it's important to be sure the tunnel is ready to accept jobs.
Jobs that run when the tunnel is still in a booting state could fail because the tunnel is not available.

When the tunnel is ready to accept jobs, the SC client will print a message to console (or log file):

```
[control] [INFO] Sauce Connect is up, you may start your tests
```

This document provides several methods to check if the tunnel is ready to accept jobs.

## Containers

If running Sauce Connect Proxy in a container, you can use the container health check feature to ensure the tunnel is ready to accept jobs.
You should see the container status as `healthy` when the tunnel is ready.

```bash
$ docker ps
CONTAINER ID  IMAGE                              COMMAND     CREATED         STATUS                   PORTS       NAMES
7ee92986fd77  docker.io/saucelabs/sauce-connect  run         15 seconds ago  Up 16 seconds (healthy)              sc_container
```

The following script will wait for the container `sc_container` to be healthy.

```bash
until [ "$(docker inspect --format='{{.State.Health.Status}}' sc_container)" == "healthy" ]
do
    sleep 1
done
```

### Docker Compose

If you are using Docker Compose, you can use the `depends_on` option to wait for the sc container to be healthy before starting the test container. 

Example compose file:

```yaml
version: '3.8'
services:
  sc:
    image: saucelabs/sauce-connect
    environment:
      SAUCE_USERNAME: ${SAUCE_USERNAME}
      SAUCE_ACCESS_KEY: ${SAUCE_ACCESS_KEY}
      SAUCE_REGION: ${SAUCE_REGION}
      SAUCE_TUNNEL_NAME: ${SAUCE_TUNNEL_NAME}
  test:
    image: ubuntu
    command: echo "Hello, World!"
    depends_on:
      sc:
        condition: service_healthy
```

Start the containers with:

```bash
docker compose up
```

You should see the following output:

```bash
sc-1    | [tunnel] [INFO] established connection to Sauce Connect server active=1/2
sc-1    | [control] [INFO] Sauce Connect is up, you may start your tests
test-1  | Hello, World!
```

Another option using Docker Compose is to use the `wait` command to wait for the sc container to be healthy before starting the test container.

Using the same compose file as above, you can start the containers with:

```bash
docker compose up -d --wait sc
```

to wait for the sc container to be healthy before starting the test container.

## General

### Using sc readiness endpoint

Sauce Connect provides a local [API server](/secure-connections/sauce-connect-5/guides/api-server) that contains readiness and liveness endpoints. 
The readiness endpoint `/readyz` returns a 200 response code when Sauce Connect Proxy is ready, and 503 otherwise.

To use the API server, you need to start Sauce Connect with the `--api-address` option or set the `SC_API_ADDRESS` environment variable.

```bash
sc --api-address :8032 …
```

You can then use the following script to wait for the readiness endpoint to return a 200 response code.

```bash
until [ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8032/readyz)" == "200" ]
do
    sleep 1
done
echo "Sauce Connect Proxy is ready"
```

### Using the tunnel REST API

The [Sauce Connect REST API](/dev/api/connect/#get-tunnels-for-a-user) provides metadata on tunnels.
One of the keys `is_ready` is a boolean that tracks the state of the tunnel.
This method can be used for jobs that don't have access to the tunnel's filesystem or network.
It will need some logic to find the right tunnel, since the `tunnel_id` is probably not known when the request is sent.

When the `/tunnels?full=true` call is made, an array of tunnel objects is sent back with metadata. Each item could be checked for a matching `tunnel_identifier`, and once the correct tunnel is found, the `is_ready` flag could be checked.

```bash
curl --user ${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY} https://api.us-west-1.saucelabs.com/rest/v1/${SAUCE_USERNAME}/tunnels?full=true

[
  {
    ...
    "id": "674442d71ffe446aa854a24a4c1c8bdd",
    "is_ready": true,
    ...
    "tunnel_identifier": "jenkins-job-1234"
    ...
  }
]
```
