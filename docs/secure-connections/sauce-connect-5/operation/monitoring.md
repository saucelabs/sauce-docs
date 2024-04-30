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
| Tunnel Name     | The name of the tunnel. This is the [`--tunnel-name`](/secure-connections/sauce-connect-5/cli/run/#--tunnel-name) used when starting the Sauce Connect tunnel. |
| Client Hostname | The name of the machine where the Sauce Connect Proxy client is running.                                                                        |
| Owner           | The name of the account that is running the tunnel.                                                                                             |
| Sharing         | Indicates whether or not the tunnel is shared.                                                                                                  |
| Duration        | The amount of time the tunnel has been running.                                                                                                 |

## Local API Server

See [Sauce Connect Proxy API Server](/secure-connections/sauce-connect-5/operation/api-server).

## Prometheus metrics

[Prometheus](https://prometheus.io/) metrics could be used to monitor Sauce Connect Proxy traffic. Grafana dashboard using these metrics is available at [Grafana Dashboards](https://grafana.com/grafana/dashboards/20232-sauce-connect/).

See [this demo](https://github.com/saucelabs/sauce-connect-docker/tree/main/examples/docker-compose-prometheus-grafana) for an example of running Sauce Connect Proxy along with [Prometheus](https://prometheus.io/) server and [Grafana](http://grafana.org/) dashboard.

<img src={useBaseUrl('img/sauce-connect/sc5-dashboard.png')} alt="Sauce Connect Proxy 5 Grafana dashboard" width="650"/>

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect/)
- [Sauce Connect Proxy 5 CLI Reference](/secure-connections/sauce-connect-5/cli/sc/)
- [Sauce Connect Grafana Dashboard](https://grafana.com/grafana/dashboards/20232-sauce-connect/)
