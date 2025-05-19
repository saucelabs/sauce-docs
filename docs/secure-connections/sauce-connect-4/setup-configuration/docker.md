---
id: docker
title: Sauce Connect Proxy Docker Container
sidebar_label: Docker
---

As an alternative to downloading and installing the Sauce Connect Proxy in your CI/CD environment, you can leverage [Docker](https://www.docker.com/) to manage [Sauce Connect Docker container](https://hub.docker.com/r/saucelabs/sauce-connect/) maintained by the Sauce Labs [Open Source Program Office](https://opensource.saucelabs.com/).

Here are some benefits/use cases:

- If you want to run Sauce Connect Proxy as part of a containerized CI/CD.
- If you want to run Sauce Connect Proxy using container orchestration tools such as Kubernetes
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
   $ docker pull saucelabs/sauce-connect:4.9.2
   ```
    <details>
    <summary>Supported tags</summary>
      - 4.9.2, 4.9.2-ubuntu-22.04, 4.9.2-alpine-glibc, latest<br/>
      - 4.9.1, 4.9.1-ubuntu-22.04, 4.9.1-alpine-glibc<br/>
      - 4.9.0, 4.9.0-ubuntu-22.04, 4.9.0-alpine-glibc<br/>
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

It is convenient to configure Sauce Connect Proxy Docker via [environment variables](/secure-connections/sauce-connect-4/setup-configuration/environment-variables/#command-line-options-environment-variables) when it is used as a Gitlab service or [GitHub Action](https://github.com/saucelabs/sauce-connect-action).

Below is an example of configuring Sauce Connect Proxy using environment variables. The example uses 4.8.x specific options that could not work with the previous versions.

```bash
$ cat /tmp/sc.env
SAUCE_REGION: eu-central
SAUCE_API_KEY="<YOUR API KEY>"
SAUCE_USERNAME="<YOUR USERNAME>"
SAUCE_OUTPUT_FORMAT=text
SAUCE_TUNNEL_POOL=true
SAUCE_LOGFILE=-
SAUCE_TUNNEL_NAME=my-docker-tunnel
SAUCE_READYFILE=/tmp/sc.ready

$ docker run \
    --env-file /tmp/sc.env \
    --network="host" \
    -v /tmp:/tmp \
    -t saucelabs/sauce-connect
```

## Running the Sauce Connect Docker Container with a CI/CD Pipeline

If you want to run this Docker image as part of your CI/CD pipeline, you would need a way to determine that Sauce Connect Proxy is ready to proxy the requests. You can achieve that by:

- Using the `/readiness` endpoint, which is available effective with Sauce Connect Proxy v4.8.0
- Using Docker's [volumes](https://docs.docker.com/storage/volumes/) feature along with our Sauce Connect Proxy [`--readyfile`](/dev/cli/sauce-connect-proxy/#--readyfile) flag.

### Readiness Endpoint

The readiness endpoint allows you to configure liveness and readiness HTTP probes. See the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) for more information.

Docker container exposes Sauce Connect Proxy HTTP status server on port 8032. The following endpoints are available:

- `/readiness` returns 200 response code when Sauce Connect Proxy is ready, 503 otherwise
- `/liveness` returns 200 response code when Sauce Connect Proxy is running

You can leverage the readiness endpoint in your CI/CD pipeline by running the following:

1. Create a bash script `wait-for-sc.sh` that will ensure the pipeline only continues after Sauce Connect Proxy is fully connected and ready.

   ```bash title="wait-for-sc.sh"
   until [ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8032/readiness)" == "200" ]
   do
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

## Orchestrating the Sauce Connect Proxy Container

Sauce Connect Proxy Container orchestration is the automation of much of the operational effort required to run containerized Sauce Connect Proxy.
There are multiple container orchestration tools exist, such as Kubernetes, Docker Swarm, Google CloudRun, Amazon ECS, etc. This section provides a few examples of orchestrating containerized Sauce Connect Proxy.

### Running the Sauce Connect Proxy Container Indefinitely In Kubernetes

If you need a Sauce Connect Proxy to stay up indefinitely, we recommend using a [Helm chart](https://helm.sh/docs/topics/charts/) to manage your Sauce Connect Proxy instance or pool.

The Sauce Connect Proxy Docker GitHub repository provides [a reference Helm chart](https://github.com/saucelabs/sauce-connect-docker/tree/main/chart/sauce-connect) that may be used as is, or adapted to your needs.
To use that chart:

- Define a values file containing your configuration, for example:

```yaml
sauceApiRegion: us-west
sauceUser: johndoe
sauceApiKey: "xxx-xxx-xxx"
tunnelName: "my-k8s-tunnel"
tunnelPool: true
tunnelPoolSize: 2
```

- Run Helm install

```bash title="helm install"
helm install sauce-connect  ./chart/sauce-connect --values /path/to/values.yaml
```

- Use the following commands in order to get the Sauce Connect Proxy application status and logs

```bash title="SC logs"
$ POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=sauce-connect,app.kubernetes.io/instance=sauce-connect" -o jsonpath="{.items[0].metadata.name}")
$ CONTAINER_PORT=$(kubectl get pod --namespace default $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
$ kubectl --namespace default port-forward $POD_NAME 8080:$CONTAINER_PORT
$ curl -s 127.0.0.1:8080/api/v1/status | jq .
$ curl -s http://127.0.0.1:8080/api/v1/status | jq .
{
  "firstConnectedTime": 1662098351,
  "tunnelID": "11111",
  "tunnelName": "my-k8s-tunnel",
  "tunnelServer": "tunnel-59569b.tunnels.us-west-1.saucelabs.com",
  "lastStatusChange": 1662098350,
  "reconnectCount": 0,
  "tunnelStatus": "connected"
}
$ kubectl logs $POD_NAME -f
...
2022-08-02 02:59:11.464 [8] [CLI] [info] Connection state has changed: previous: INIT, actual: CONNECTED.
2022-08-02 02:59:11.464 [8] [CLI] [info] Sauce Connect is up, you may start your tests.
```


### Running the Sauce Connect Proxy Container Indefinitely With Docker Compose

If you need a Sauce Connect Proxy to stay up indefinitely but you can't deploy it in Kubernetes (which is the recommended container orchestration tool), the Sauce Connect Proxy Docker GitHub repository provides an [example docker-compose.yaml](https://github.com/saucelabs/sauce-connect-docker/tree/main/examples/docker-compose-sc) that shows how to set up a set of shared Sauce Connect Pools that automatically restart when they go down.

### Running an Application Alongside Sauce Connect Proxy

The Sauce Connect Proxy Docker GitHub repository provides an [example docker-compose.yaml](https://github.com/saucelabs/sauce-connect-docker/tree/main/examples/docker-compose-sc-nginx) that shows
how to run Sauce Connect Docker adjacent to an application container (an Nginx server in this example).
The example configuration allows you to use a tunnel while launching a Desktop or Web Mobile test, then go to the 'http://some-app' URL. The Sauce Connect Proxy then routes you to the nginx container.
You can change the Nginx container name with [container_name](https://docs.docker.com/compose/compose-file/compose-file-v3/#container_name).

## Additional Resources

- [Use host networking in Docker](https://docs.docker.com/network/host/)
- [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds)
- [Helm charts](https://helm.sh/docs/topics/charts/)
- [Docker Compose File](https://docs.docker.com/compose/compose-file/compose-file-v3/)
