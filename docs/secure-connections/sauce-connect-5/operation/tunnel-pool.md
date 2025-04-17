---
id: tunnel-pool
title: Sauce Connect Proxy Tunnel Pool Setup
sidebar_label: Tunnel Pool Setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Tunnel Pool enables you to run parallel tests through multiple Sauce Connect Proxy tunnels, improving test reliability and scalability. It is ideal for high-concurrency environments, allowing for automatic load balancing and increased fault tolerance.

Benefits of Tunnel Pools
* Load balancing: Jobs are evenly distributed across available tunnels.
* Failover: If a tunnel fails, new tests will be rerouted through another active tunnel.
* Rolling restarts: You can restart individual tunnels without interrupting ongoing tests.

Limitations
* If a Sauce Connect client on your side or a tunnel VM on Sauce Labs' side goes down during a test, the test may fail.
* Tunnel pools are not self-healing or automatically restarted. If a tunnel stops, you'll need to restart it manually. This can be automated using a service manager like [systemd](https://en.wikipedia.org/wiki/Systemd).

## Prerequisites

Before setting up a tunnel pool, ensure your environment is compatible with Sauce Connect Proxy by following the [Quickstart guide](/secure-connections/sauce-connect-5/quickstart/).

Consider your needs:
* Total number of parallel tests
* Expected throughput in bytes/s and requests/s
* Performance requirements ([performance comparison of SC4 vs SC5](https://saucelabs.com/resources/blog/sauce-connect-5-2-0-migration))

:::note Concurrency
Each tunnel in a pool counts toward your tunnel concurrency limit.
:::

## Architecture

The following diagram illustrates the basic architecture of a Sauce Connect Proxy setup using a tunnel pool:<br/>
<img src={useBaseUrl('img/sauce-connect/scp-basic-ha.webp')} alt="Basic setup using tunnel pool" width="600"/>

Flow:
* A test framework requests a new Sauce Test VM, referencing a tunnel name.
* Sauce Labs selects an available tunnel from the pool.
* The chosen tunnel is used for proxying traffic between Sauce Test VM and your site under test.

## Setup Instructions

### Launching Tunnels for a Tunnel Pool

You must start multiple tunnels with the same name and the [--tunnel-pool](/dev/cli/sauce-connect-5/run/#tunnel-pool) flag. Each tunnel should be started from a separate VM for maximum fault tolerance.

<Tabs
defaultValue="maclinux"
values={[
{label: 'Linux or Mac OS', value: 'maclinux'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="maclinux">

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY \
  --tunnel-name tunnel_name_here \
  --tunnel-pool
```

</TabItem>

<TabItem value="windows">

```bash
.\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% ^
  --tunnel-name tunnel_name_here ^
  --tunnel-pool
```

</TabItem>
</Tabs>

#### Avoiding Colliding Tunnels

Without [--tunnel-pool](/dev/cli/sauce-connect-proxy#--tunnel-pool), launching multiple tunnels with the same [`--tunnel-name`](/dev/cli/sauce-connect-proxy#--tunnel-name) will cause older instances to shut down. Always use the --tunnel-pool flag to allow multiple tunnels with the same name to coexist as a pool.

### Running Tests using Tunnel Pool

In your test script, specify the tunnel pool name using the [`tunnelName`](/dev/test-configuration-options/#tunnelname) capability:
  ```java
  "tunnelName": "tunnel_pool_name_here"
  ```

## Tips for Production Use

### Load Balancing and Failover

Tunnel pools use a round-robin algorithm to distribute test traffic evenly. If a tunnel fails, traffic is routed to another in the pool. For optimal resilience run Sauce Connect Proxy on separate machines.
* Monitor the [Sauce Labs Tunnels Dashboard](https://app.saucelabs.com/tunnels)

### Monitoring and Maintenance

* Visit the [Sauce Labs Tunnels Dashboard](https://app.saucelabs.com/tunnels) for live tunnel status.
* Regularly check for inactive or crashed tunnels and restart them as needed.
* See [Monitoring Tunnels](/secure-connections/sauce-connect-5/monitoring/) for more information.

## Summary

Tunnel pools increase test capacity, reliability, and performance by enabling multiple tunnels to operate under the same name. With proper configuration and monitoring, tunnel pools provide a powerful solution for high-concurrency test environments.