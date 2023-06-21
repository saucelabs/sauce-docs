---
id: docker
title: Sauce Connect Proxy Docker Container
sidebar_label: Docker
---

As an alternative to downloading and installing the Sauce Connect Proxy in your CI/CD environment, you can leverage [Docker](https://www.docker.com/) to manage [Sauce Connect Docker container](https://github.com/saucelabs/sauce-connect-docker) maintained by the Sauce Labs [Open Source Program Office](https://opensource.saucelabs.com/).

Here are some benefits/use cases:

- If you want to run Sauce Connect Proxy as part of a Dockerized CI/CD.
- If you'd prefer to manage Docker image tags instead of Sauce Connect Proxy versions.
- If your setup involves several instances running on the same system, Docker would simplify Sauce Connect Proxy port management.

## Running the Sauce Connect Docker Container

1. Pull the Sauce Connect Proxy Docker Image from the [Docker Hub](https://hub.docker.com/r/saucelabs/sauce-connect).
   - To pull the latest version of Sauce Connect Proxy (recommended):
   ```bash
   $ docker pull saucelabs/sauce-connect
   ```
   - To use a specific version, add it as a tag:
   ```bash
   $ docker pull saucelabs/sauce-connect:4.8.0
   ```
    <details><summary>Supported tags</summary>
      - 4.9.1, 4.9.1-ubuntu-22.04, 4.9.1-alpine-glibc, latest<br/>
      - 4.9.0, 4.9.0-ubuntu-22.04, 4.9.0-alpine-glibc<br/>
      - 4.8.2, 4.8.2-ubuntu-22.04, 4.8.2-alpine-glibc<br/>
      - 4.8.1, 4.8.1-ubuntu-22.04, 4.8.1-alpine-glibc<br/>
      - 4.8.0, 4.8.0-alpine-glibc<br/>
      - 4.7.1, 4.7.1-alpine-glibc<br/>
      - 4.7.0, 4.7.0-alpine-glibc<br/>
    </details>
2. To run the Sauce Connect Proxy Docker image, run the script below.

   ```bash
   $ export SAUCE_USERNAME="my-user"
   $ export SAUCE_ACCESS_KEY="my-access-key"
   docker run \
       -e SAUCE_USERNAME=${SAUCE_USERNAME} \
       -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
       --network="host" \
       -it saucelabs/sauce-connect
   ```

If desired, you can specify any additional [SC CLI arguments](/dev/cli/sauce-connect-proxy/).

:::note
The example above uses `--network="host"` docker option to allow Sauce Connect in the Docker container to access your local services in the host machine. This option does not work on MacOS and Windows. See [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/networking/#use-cases-and-workarounds) for more details.
:::

## Configuring Sauce Connect Proxy Using Environment Variables

It is convenient to configure Sauce Connect Proxy Docker via [environment variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/#command-line-options-environment-variables) when it is used as a Gitlab service or [GitHub Action](https://github.com/saucelabs/sauce-connect-action).

Below is an example of configuring Sauce Connect Proxy using environment variables. The example uses 4.8.x specific options that could not work with the previous versions.

```bash
$ cat /tmp/sc.env
SAUCE_REGION: eu-central
SAUCE_API_KEY="<YOUR API KEY>"
SAUCE_USER="<YOUR USERNAME>"
SAUCE_OUTPUT_FORMAT=text
SAUCE_TUNNEL_POOL=true
SAUCE_LOGFILE=-
SAUCE_TUNNEL_NAME=my-docker-tunnel
SAUCE_READYFILE=/tmp/sc.ready

$ docker run \
    --env-file /tmp/sc.env \
    --network="host" \
    -v /tmp:/tmp \
    -t saucelabs/sauce-connect:4.9.1
```

## Running the Sauce Connect Docker Container with a CI/CD Pipeline

If you want to run this Docker image as part of your CI/CD pipeline, you would need a way to determine that Sauce Connect Proxy is ready to proxy the requests. You can achieve that by:

- Using the `/readiness` endpoint, which is available effective with Sauce Connect Proxy v4.8.0
- Using Docker's [volumes](https://docs.docker.com/storage/volumes/) feature along with our Sauce Connect Proxy [`--readyfile`](/dev/cli/sauce-connect-proxy/#--readyfile) flag.

### Readiness Endpoint

The readiness endpoint, supported in Sauce Connect Proxy versions 4.8.0 and higher, allows you to configure liveness and readiness HTTP probes. See the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) for more information.

Docker container exposes Sauce Connect Proxy HTTP status server on port 8032. The following endpoints are available:

- `/readiness` returns 200 response code when Sauce Connect Proxy is ready, 503 otherwise
- `/liveness` returns 200 response code when Sauce Connect Proxy is running

You can leverage the readiness endpoint in your CI/CD pipeline by running the following:

1. Create a bash script `wait-for-sc.sh` that will ensure the pipeline only continues after Sauce Connect Proxy is fully connected and ready.

   ```bash title="wait-for-sc.sh"
   until [ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8032/readiness)" == "200" ]
   do
       sleep 2
   done
   echo "SC ready"
   ```

1. Run Sauce Connect Docker container using the script below. It is important that you map port 8032 (that is, `-p 8032:8032`) so that the port is available to the host.

```bash
$ docker run \
    --detach \
    -e SAUCE_USERNAME=${SAUCE_USERNAME} \
    -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
    -p 8032:8032 \
    -t saucelabs/sauce-connect:latest \
    -i your-docker-tunnel
  $ ./wait-for-sc.sh
```

### Ready File

You can leverage the Sauce Connect Proxy [`--readyfile`](/dev/cli/sauce-connect-proxy/#--readyfile) flag to specify a file that will be created (or updated) when the proxy is ready.

1. Create a bash script `wait-for-sc.sh` that will ensure the pipeline only continues after Sauce Connect Proxy is fully connected and ready.

```bash title="wait-for-sc.sh"
until [ -f /tmp/sc.ready ]
do
    sleep 1
done
echo "SC ready"
```

2. Run Sauce Connect Docker container using the script below. You must mount a temporary folder (`-v /tmp:/tmp`) so that `wait-for-sc.sh` can detect when Sauce Connect is ready.

```bash
$ docker run \
    --detach \
    -e SAUCE_USERNAME=${SAUCE_USERNAME} \
    -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
    -v /tmp:/tmp \
    -t saucelabs/sauce-connect:latest \
    -f /tmp/sc.ready \
    -i your-docker-tunnel
  $ ./wait-for-sc.sh
```

Starting with Sauce Connect Proxy 4.8.0, the ready file will contain JSON-formatted information about the running Sauce Connect Proxy. For example:

```bash
$ cat /tmp/sc.ready | jq .
{
  "firstConnectedTime": "2022-03-01 11:08:13",
  "scProxyPort": "35181",
  "tunnelID": "182de89899",
  "tunnelName": "my-tunnel",
  "tunnelServer": "maki76.eu-central-1.miso.saucelabs.com"
}
```

## Running the Sauce Connect Docker with a nginx Server

The `docker-compose.yaml` file below shows how to run Sauce Connect Docker in the nginx server. The example configuration allows you to use a tunnel while launching a Desktop or Web Mobile test, then go to the 'nginx' URL. The Sauce Connect Proxy then routes you to the nginx container.

The Sauce Connect Proxy sits adjacent to the `nginx:latest` instance: you can reach the nginx service from Sauce Labs by going to nginx (if you run it as is). You can also provide a name to the container with [container_name](https://docs.docker.com/compose/compose-file/compose-file-v3/#container_name).

If you were to name the container explicitly like `container_name: mywebserver` it would reachable from any app or website that tried to hit mockserver via HTTP: this is due to the nature of [how docker resolves container names](https://docs.docker.com/config/containers/container-networking/#:~:text=In%20the%20same,on%20that%20network) for any valid entries on that docker network.

```yaml
version: "3"
services:
  sauce-connect-eu:
    image: "saucelabs/sauce-connect:latest"
    environment:
      SAUCE_USERNAME: ${SAUCE_USERNAME}
      SAUCE_ACCESS_KEY: ${SAUCE_ACCESS_KEY}
      SAUCE_OUTPUT_FORMAT: "text"
    command: "-i composed-docker-sc -r eu-central"

  nginx:
    image: "nginx:latest"
    container_name: "some-app"
    ports:
      - "3333:80"
```

## Running the Sauce Connect Proxy Indefinitely

If you need a Sauce Connect Proxy to stay up indefinitely, the `docker-compose.yaml` below shows how to set up a set of shared Sauce Connect Pools that automatically restart when they go down.

```yaml
version: "3.9"
services:
  sauce-connect-eu:
    deploy:
      replicas: 2
      restart_policy:
        delay: 30s
        max_attempts: 5
        condition: on-failure
        window: 60s
    image: "saucelabs/sauce-connect:latest"
    environment:
      SAUCE_USERNAME: ${SAUCE_USERNAME}
      SAUCE_ACCESS_KEY: ${SAUCE_ACCESS_KEY}
      SAUCE_OUTPUT_FORMAT: "text"
      SAUCE_LOGFILE: /tmp/persistent-eu-proxy1.log
    command: "-i eu-pool -r eu-central --tunnel-pool"

  sauce-connect-us:
    image: "saucelabs/sauce-connect:latest"
    restart: on-failure:2
    deploy:
      replicas: 2
      restart_policy:
        delay: 30s
        max_attempts: 5
        condition: on-failure
        window: 60s
    environment:
      SAUCE_USERNAME: ${SAUCE_USERNAME}
      SAUCE_ACCESS_KEY: ${SAUCE_ACCESS_KEY}
      SAUCE_OUTPUT_FORMAT: "text"
    command: "-i us-pool -i docker-sc -r us-west --tunnel-pool"
```

## Additional Resources

- [Use host networking in Docker](https://docs.docker.com/network/host/)
- [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds)
