---
id: readiness-checks
title: Sauce Connect Proxy Readiness Checks
sidebar_label: Readiness Checks
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To run tests using an ephemeral tunnel, it's important to be sure the tunnel is ready to accept jobs. Jobs that are run when the tunnel is still in a booting state could fail because the tunnel won't be available.

There are four approaches to check for readiness:

* Manual testing
* Using the Status Server HTTP Endpoint
* Using the ready file
* Using the REST API

## Manual Testing

If you are starting a tunnel manually for local testing, the SC client will print a message to stdout:

```
Sauce Connect is up, you may start your tests.
```

or its logfile:

```
2023-01-31 16:15:41.574 [56684] [CLI] [info] Sauce Connect is up, you may start your tests.
```

## CI/CD Testing

If you're starting ephemeral tunnels from a CI/CD system, there are multiple methods of readiness testing. The choice will depend on what the CI/CD server has access to.

### Status Server HTTP Endpoint

The SC client (4.8.x or newer) provides an HTTP endpoint for [various health checks](/secure-connections/sauce-connect-4/proxy-tunnels/#status-server-endpoints). This can be used when the CI/CD system has access to the SC process' network.

It's enabled with the [`--status-address`](/dev/cli/sauce-connect-proxy/#--status-address) option, and takes a `host:port` parameter.

```bash
--status-address :8080 # listens on all the interfaces' port 8080
--status-address 1.2.3.4:80 # listens on 1.2.3.4 port 80
```

`/readiness` returns 200 response code when Sauce Connect Proxy is ready, 503 otherwise.

```bash
± curl -v localhost:8080/readiness
*   Trying 127.0.0.1:8080...
* Connected to localhost (127.0.0.1) port 8080 (#0)
> GET /readiness HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.84.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 503 Service Unavailable
< Content-Type: text/plain; charset=utf-8
< X-Content-Type-Options: nosniff
< Date: Wed, 01 Feb 2023 18:50:22 GMT
< Content-Length: 44
<
server isn't ready. tunnel failed readiness
* Connection #0 to host localhost left intact

$ sleep 5

$ curl -v localhost:8080/readiness
*   Trying 127.0.0.1:8080...
* Connected to localhost (127.0.0.1) port 8080 (#0)
> GET /readiness HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.84.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Content-Type: text/plain; charset=utf-8
< Date: Wed, 01 Feb 2023 18:48:32 GMT
< Content-Length: 3
<
OK
* Connection #0 to host localhost left intact
```

### Ready File

The SC client can create a file when it's ready using the [`--readyfile`](/dev/cli/sauce-connect-proxy/#--readyfile) option. This can be used when the CI/CD system has access to the filesystem that the SC process is running in.

### Tunnels REST API

The [Sauce Connect REST API](/dev/api/connect/#get-tunnels-for-a-user) provides metadata on tunnels. One of the keys `is_ready` is a boolean that tracks the state of the tunnel. This method can be used for jobs that don't have access to the tunnel's filesystem or network. It will need some logic to find the right tunnel, since the `tunnel_id` is probably not known when the request is sent.

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
