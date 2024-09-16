---
id: docker
title: Run Sauce Connect in Docker
sidebar_label: Docker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy container images are available on [Docker Hub](https://hub.docker.com/r/saucelabs/sauce-connect).

## Pull image

The easiest way to get started with Sauce Connect Proxy in Docker is to pull the latest version of the image from Docker Hub.

```bash
docker pull saucelabs/sauce-connect
```

You can also specify a specific version by using a tag.

```bash
docker pull saucelabs/sauce-connect:<tag>
```

Check this list of [supported tags](https://hub.docker.com/r/saucelabs/sauce-connect/tags?&ordering=&name=5.).

## Configure and run

Sauce Connect Proxy can be configured using:

* Configuration file,
* Environment variables,
* Command line arguments.

All of these options are supported in containers, and you can use them interchangeably.
 
### Configuration file

To use a configuration file, mount the file to the container at `/etc/sauce-connect/sauce-connect.yaml`.

<Tabs defaultValue="docker" values={[{label: 'docker', value: 'docker'},{label: 'docker compose', value: 'docker compose'}]}>

<TabItem value="docker">

```bash
docker run \
  -v /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml \
  saucelabs/sauce-connect
```

</TabItem>

<TabItem value="docker compose">

```yaml
services:
  sc:
    image: saucelabs/sauce-connect
    volumes:
      - /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml:ro
```

</TabItem>

</Tabs>

### Environment variables

You can also configure Sauce Connect Proxy using environment variables.
The following example demonstrates how to run the container using environment variables.

<Tabs defaultValue="docker" values={[{label: 'docker', value: 'docker'},{label: 'docker compose', value: 'docker compose'}]}>

<TabItem value="docker">

```bash
docker run \
  -e SAUCE_USERNAME="<usename>" \
  -e SAUCE_ACCESS_KEY="<access-key>" \
  -e SAUCE_REGION="<region>" \
  -e SAUCE_TUNNEL_NAME="<tunnel-name>" \
  saucelabs/sauce-connect
```

</TabItem>

<TabItem value="docker compose">

```yaml
services:
  sc:
    image: saucelabs/sauce-connect
    environment:
      SAUCE_USERNAME: <usename>
      SAUCE_ACCESS_KEY: <access-key>
      SAUCE_REGION: <region>
      SAUCE_TUNNEL_NAME: <tunnel-name>
```

</TabItem>

</Tabs>

### Command line arguments

To pass command line arguments, use the `sc` command followed by the desired arguments.

<Tabs defaultValue="docker" values={[{label: 'docker', value: 'docker'},{label: 'docker compose', value: 'docker compose'}]}>

<TabItem value="docker">

```bash
docker run saucelabs/sauce-connect run \
  --username=<username> \
  --access-key=<access-key> \
  --region=<region> \
  --tunnel-name=<tunnel-name>
```

</TabItem>

<TabItem value="docker compose">

```yaml
services:
  sc:
    image: saucelabs/sauce-connect
    command: run --username=<username> --access-key=<access-key> --region=<region> --tunnel-name=<tunnel-name>
```

</TabItem>

</Tabs>

### Mix and match

It is also possible to mix and match the configuration options.
For instance, you can use a configuration file for all the common settings and override some of them using environment variables.
The order of precedence is as follows:

1. Command line arguments
1. Environment variables
1. Configuration file

The following example demonstrates how to use a configuration file and provide username and access key using environment variables.

<Tabs defaultValue="docker" values={[{label: 'docker', value: 'docker'},{label: 'docker compose', value: 'docker compose'}]}>

<TabItem value="docker">

```bash
docker run \
  -e SAUCE_USERNAME="<usename>" \
  -e SAUCE_ACCESS_KEY="<access-key>" \
  -v /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml \
  saucelabs/sauce-connect
```

</TabItem>

<TabItem value="docker compose">

```yaml
services:
  sc:
    image: saucelabs/sauce-connect
    environment:
      SAUCE_USERNAME: <usename>
      SAUCE_ACCESS_KEY: <access-key>
    volumes:
      - /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml:ro
```

</TabItem>

</Tabs>

## Logs

Logs are handled automatically by Docker, and you can use the `docker logs` command to access them.
To access logs:

1. Find the container ID.

   ```bash
   docker ps
   ```
1. Use the container ID to get the logs.

   ```bash
   docker logs <container-id>
   ```

## Health checks

The docker container has a built-in health check that can be used to determine if the tunnel is ready to accept jobs.
You should see the container status as `healthy` in `docker ps` when the tunnel is ready.
See [Sauce Connect Proxy Readiness Checks](/secure-connections/sauce-connect-5/operation/readiness-checks) for more information.

## Additional Resources

- [Sauce Connect Proxy Readiness Checks](/secure-connections/sauce-connect-5/operation/readiness-checks)
- [Use host networking in Docker](https://docs.docker.com/network/host/)
- [Connect from a container to a service on the macOS host](https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds)
- [Docker Compose File](https://docs.docker.com/compose/compose-file/compose-file-v3/)
