---
id: docker
title: Sauce Connect Proxy 5 Docker Container
sidebar_label: Docker
---

Sauce Connect Proxy release includes [Docker](https://www.docker.com/) image to support a containerized CI/CD environment, see [Sauce Connect Docker container](https://github.com/saucelabs/sauce-connect-docker) for more information.

Here are some benefits/use cases for using containerized Sauce Connect Proxy:

- You want to run Sauce Connect Proxy as part of a containerized CI/CD.
- You want to utilize a rich ecosystem of tools and services that container orchestration tools, such as Kubernetes, provide.

## What You’ll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- A [Docker Hub](https://hub.docker.com/r/saucelabs/sauce-connect) account
- A [Docker Engine Installed and configured](https://docs.docker.com/engine/install/)

## Running the Sauce Connect Docker Container

1. Pull the Sauce Connect Proxy Docker Image from the [Docker Hub](https://hub.docker.com/r/saucelabs/sauce-connect).
   - To pull the latest version of Sauce Connect Proxy (recommended):
   ```bash
   $ docker pull saucelabs/sauce-connect:5.0
   ```
   - To use a specific version, add it as a tag:
   ```bash
   $ docker pull saucelabs/sauce-connect:5.0.0-beta2-amd64
   ```
    <details><summary>Supported tags</summary>
      - 5.0, 5.0.0-beta2, 5.0.0-beta2, 5.0.0-beta2-arm64v8<br/>
    </details>
2. To run the Sauce Connect Proxy Docker image, modify and run the script below.

   ```bash
   $ SAUCE_USERNAME="my-user" SAUCE_ACCESS_KEY="my-access-key" SAUCE_REGION="<us-west|eu-central>" SAUCE_TUNNEL_NAME="my-tunnel-name" \
   docker run \
       -e SAUCE_USERNAME=${SAUCE_USERNAME} \
       -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
       -e SAUCE_REGION=${SAUCE_REGION} \
       -e SAUCE_TUNNEL_NAME=${SAUCE_TUNNEL_NAME} \
       --network="host" \
       -it saucelabs/sauce-connect:5.0
   ```

If desired, you can specify any additional ["sc run" CLI arguments](/dev/cli/sauce-connect-5/run/).

:::note
The example above uses `--network="host"` docker option to allow Sauce Connect in the Docker container to access your local services in the host machine. This option does not work on MacOS and Windows. See [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/networking/#use-cases-and-workarounds) for more details.
:::

## Running the Sauce Connect Docker Container with a CI/CD Pipeline

If you want to run this Docker image as part of your CI/CD pipeline, you would need a way to determine that Sauce Connect Proxy is ready to proxy the requests. You can achieve that by:

- Using the `/readyz` endpoint, available with the Sauce Connect Proxy [internal API server](/secure-connections/sauce-connect-5/operation/monitoring/#local-api-server).

### Readiness Endpoint

The readiness endpoint allows you to configure liveness and readiness HTTP probes. See the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) for more information.

Docker container exposes Sauce Connect Proxy [API server](/secure-connections/sauce-connect-5/operation/monitoring/#local-api-server) on port 8032. The readiness endpoint `/readyz` returns 200 response code when Sauce Connect Proxy is ready, 503 otherwise.

You can leverage the readiness endpoint in your CI/CD pipeline by running the following:

1. Create a bash script `wait-for-sc.sh` that will ensure the pipeline only continues after Sauce Connect Proxy is fully connected and ready.

   ```bash title="wait-for-sc.sh"
   timeout=45
   i=0
   until [ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8032/readyz)" == "200" ]
   do
       let "++i"
       if [ $i -gt $timeout ]; then
          echo "Timed out after $i seconds waiting for Sauce Connect readiness, exiting..."
          exit 1
       fi
       sleep 1
   done
   echo "SC ready"
   ```

1. Run Sauce Connect Docker container using the script below. It is important that you map port 8032 (that is, `-p 8032:8032`) so that the port is available to the host.

```bash
$ docker run \
    --detach \
    -e SAUCE_USERNAME=${SAUCE_USERNAME} \
    -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
    -e SAUCE_REGION=${SAUCE_REGION} \
    -e SAUCE_TUNNEL_NAME=${SAUCE_TUNNEL_NAME} \
    -p 8032:8032 \
    -t saucelabs/sauce-connect:5.0 \
    -i your-docker-tunnel
  $ ./wait-for-sc.sh
```

## Additional Resources

- [Use host networking in Docker](https://docs.docker.com/network/host/)
- [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds)
- [Docker Compose File](https://docs.docker.com/compose/compose-file/compose-file-v3/)
