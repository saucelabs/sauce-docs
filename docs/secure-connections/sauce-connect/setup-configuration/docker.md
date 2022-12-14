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
   - You can pull the latest version of Sauce Connect Proxy:
   ```bash
   $ docker pull saucelabs/sauce-connect
   ```
   - Or - if you _do_ want to use a specific version - you can specify that as a tag:
   ```bash
   $ docker pull saucelabs/sauce-connect:4.8.0
   ```
2. To run the Sauce Connect Proxy Docker container, execute the below script.

```bash
docker run \
    -e SAUCE_USERNAME=${SAUCE_USERNAME} \
    -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
    -it saucelabs/sauce-connect \
    --user $SAUCE_USERNAME --api-key $SAUCE_ACCESS_KEY
```

If desired, you can specify any additional [SC CLI arguments](/dev/cli/sauce-connect-proxy/).

:::note
If you're running tests in Linux that use localhost addresses, you'll need to specify `--network="host"` as an argument in the above script to allow requests originating within the container to access the Docker host machine.
Be aware that `--network="host"` behaves differently on Windows, macOS, and Linux due to the respective platform Docker implementation.
:::

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

1. Create a simple bash script `wait-for-sc.sh` that will ensure the pipeline only continues after Sauce Connect Proxy is fully connected and ready.
   ```bash title="wait-for-sc.sh"
   until [ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8032/readiness)" == "200" ]
   do
       sleep 2
   done
   echo "SC ready"
   ```
1. Run Sauce Connect Docker container using the script below. It is important that you map port 8032 so that the port is available to the host.

````bash
$ docker run \
    --detach \
    -e SAUCE_USERNAME=${SAUCE_USERNAME} \
    -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
    -p 8032:8032 \
    -t saucelabs/sauce-connect:latest \
    -i some-identifier
  $ ./wait-for-sc.sh
  ```

### Ready File
You can leverage the Sauce Connect Proxy [`--readyfile`](/dev/cli/sauce-connect-proxy/#--readyfile) flag to specify a file that will be created (or updated) when the proxy is ready.

1. Create a simple bash script `wait-for-sc.sh` that will ensure the pipeline only continues after Sauce Connect Proxy is fully connected and ready.
 ```bash title="wait-for-sc.sh"
 until [ -f /tmp/sc.ready ]
 do
     sleep 1
 done
 echo "SC ready"
````

1. Run Sauce Connect Docker container using the script below. It is important that you mount a temp folder here so that `wait-for-sc.sh` can detect when Sauce Connect has launched.

```bash
$ docker run \
    --detach \
    -e SAUCE_USERNAME=${SAUCE_USERNAME} \
    -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
    -v /tmp:/tmp \
    --network="host" \
    -t saucelabs/sauce-connect:latest \
    -f /tmp/sc.ready \
    -i some-identifier
  $ ./wait-for-sc.sh
```

:::note
`--network="host"` allows Sauce Connect Proxy to access your app in the host machine. It's only required if your app runs on the same machine as the docker host.
:::

Starting with Sauce Connect Proxy 4.8.0, the "ready" file will contain JSON-formatted information about the running Sauce Connect Proxy. For example:

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

## Additional Resources

- [Use host networking in Docker](https://docs.docker.com/network/host/)
- [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds)
