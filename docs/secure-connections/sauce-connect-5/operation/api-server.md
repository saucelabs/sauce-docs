---
id: api-server
title: Sauce Connect Proxy API Server
sidebar_label: API Server
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy, optionally, exposes an API server that allows obtain information about the local Sauce Connect Proxy instance.
The API interface is configured with the [`--api-address`](/dev/cli/sauce-connect-5/run/#--api-address) flag.

```bash
--api-address :8080 # listens on all the interfaces' port 8080
--api-address 127.0.0.1:8081 # listens on 127.0.0.1 port 8081
```

## Endpoints

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

### Info

The `/info` response contains a JSON document containing runtime information of the Sauce Connect instance:

```json
{
  "tunnel_id": "ab2cf344d4fc40d2bdc36b2fe6535c6b",
  "tunnel_name": "ci-tunnel-1",
  "tunnel_server": "1.2.3.4:443",
  "tunnel_host": "tunnel-123abc.tunnels.us-west-4.saucelabs.com"
}
```

### Readiness

The `/readyz` response is used to determine when Sauce Connect Proxy is ready to accept jobs. It returns 200 response code when Sauce Connect Proxy is ready, and 503 otherwise.

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect/)
- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/)
