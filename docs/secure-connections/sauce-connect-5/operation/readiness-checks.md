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

There are a few approaches to check whether this Sauce Connect Proxy instance is ready to accept jobs:

- Manual testing
- Using the local API server readiness endpoint
- Using the REST API

## Manual Testing

If you are starting a tunnel manually for local testing, the SC client will print a message to console (or log file):

```
2024/01/29 22:19:47.559711 [control] [INFO] Sauce Connect is up, you may start your tests
```

## Kubernetes or CI/CD Testing

### API Server Readiness Endpoint

Sauce Connect Proxy (5.0.0 or newer) provides a local [API server](/secure-connections/sauce-connect-5/operation/api-server). The following simple shell script allows blocking execution until the tunnel is ready.

```bash
sc --api-address :8032 …
until [ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8032/readyz)" == "200" ]
do
    sleep 2
done
echo "Sauce Connect Proxy is ready"
```

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
