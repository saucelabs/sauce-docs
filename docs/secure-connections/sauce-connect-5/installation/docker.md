---
id: docker
title: Run Sauce Connect in Docker
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
   $ docker pull saucelabs/sauce-connect:5.1
   ```
   - To use a specific version, add it as a tag:
   ```bash
   $ docker pull saucelabs/sauce-connect:5.1.1-amd64
   ```
    <details>
    <summary>Supported tags</summary>
      - 5, 5.1, 5.1.1<br/>
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
   If desired, you can specify any additional [`sc run` options](/dev/cli/sauce-connect-5/run/) as environment variables.

   Alternatively, you can also mount a config file to the container by adding the `-v` option to the `docker run` command.

   ```bash
   $ docker run \
       -v /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml \
       --network="host"\
       -it saucelabs/sauce-connect:5.0
   ```
3. To access logs, use the `docker logs` command.

   ```bash
   $ docker logs <container-id>
   ```

See [Sauce Connect Proxy Readiness Checks](/secure-connections/sauce-connect-5/operation/readiness-checks) for more information on how to check if the tunnel is ready to accept jobs.

:::note
The example above uses `--network="host"` docker option to allow Sauce Connect in the Docker container to access your local services in the host machine. This option does not work on MacOS and Windows. See [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/networking/#use-cases-and-workarounds) for more details.
:::

## Additional Resources

- [Use host networking in Docker](https://docs.docker.com/network/host/)
- [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds)
- [Docker Compose File](https://docs.docker.com/compose/compose-file/compose-file-v3/)
