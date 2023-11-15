---
id: monitoring
title: Sauce Connect Proxy Monitoring
sidebar_label: Monitoring
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy provides server-side monitoring via the REST API and the Sauce Labs [web application](https://app.saucelabs.com/) as well as the client-side monitoring via the local API server and [Prometheus](https://prometheus.io/) metrics.

## Sauce Labs Web UI

You can manage and monitor all Sauce Connect Proxy tunnel activity from the Sauce Labs [**Tunnels**](https://app.saucelabs.com/tunnels) page, which displays useful information, such as the number of active tunnels, tunnel status, and specific attributes for each tunnel. You can also check the health of an individual tunnel by running a test on it.

| Column          | Description                                                                                                                                     |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| Type            | The icon shows whether the tunnel is a Sauce Connect Proxy, or an IPSec Proxy.                                                                  |
| State           | The icon shows whether the tunnel is running or stopped.                                                                                        |
| Tunnel Name     | The name of the tunnel. This is the [`--tunnel-name`](/dev/cli/sauce-connect-5/run/#--tunnel-name) used when starting the Sauce Connect tunnel. |
| Client Hostname | The name of the machine where the Sauce Connect Proxy client is running.                                                                        |
| Owner           | The name of the account that is running the tunnel.                                                                                             |
| Sharing         | Indicates whether or not the tunnel is shared.                                                                                                  |
| Duration        | The amount of time the tunnel has been running.                                                                                                 |

## Local API Server

Sauce Connect Proxy exposes an API that allows obtain information about the local Sauce Connect Proxy instance. The API interface is configured with the [`--api-address`](/dev/cli/sauce-connect-5/run/#--api-address) flag.
The table below summarizes available endpoints.

| Path       | Description                                                                                            |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| `/readyz`  | Returns 200 response code when Sauce Connect Proxy is ready, 503 otherwise.                            |
| `/healthz` | Returns 200 response code when Sauce Connect Proxy is connected, 503 otherwise.                        |
| `/info`    | Returns runtime information about the tunnel instance.                                                 |
| `/metrics` | Exposes [Prometheus](https://prometheus.io/) metrics.                                                  |
| `/configz` | Returns the configuration values.                                                                      |
| `/pac`     | Returns the PAC content being configured with the [`--pac`](/dev/cli/sauce-connect-5/run/#--pac) flag. |
| `/version` | Returns the Sauce Connect Proxy instance version and build info.                                       |

### Info Endpoint

The `/info` Endpoint contains a JSON document about the tunnel instance:

```json
{
  "tunnel_id": "ab2cf344d4fc40d2bdc36b2fe6535c6b",
  "tunnel_name": "ci-tunnel-1",
  "tunnel_server": "1.2.3.4:443",
  "tunnel_host": "tunnel-123abc.tunnels.us-west-4.saucelabs.com"
}
```

## Prometheus metrics

[Prometheus](https://prometheus.io/) metrics could be used to monitor Sauce Connect Proxy traffic.
See an example of a [Grafana](http://grafana.org/) dashboard [here](https://github.com/saucelabs/sauce-connect-docker/tree/main/examples/docker-compose-prometheus-grafana).

<img src={useBaseUrl('img/sauce-connect/sc5-dashboard.png')} alt="Sauce Connect Proxy 5 Grafana dashboard" width="650"/>

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect/)
- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/)
