---
id: high-availability
title: Sauce Connect Proxy High Availability Setup
sidebar_label: High Availability Setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The High Availability (HA) setup enables you to run parallel tests through multiple Sauce Connect Proxy tunnels and run multiple tunnels grouped together as a tunnel pool. Pools are ideal for you're running 50 or more parallel tests (high concurrency) because tunnel capacity is limited by a single TCP connection.

A major benefit to using the HA setup is load balancing. Jobs will be distributed among the tunnels in your tunnel pool. If one of your tunnels goes down, any tests started after that will be routed through another tunnel. That said, if a tunnel instance on your side or a VM tunnel instance on the Sauce Labs side goes down once you've already started running tests, these tests in motion will be impacted.

With this setup, we strongly recommend applying a `--tunnel-name`, which will make it easier for tracking tunnels. Otherwise, test traffic initiated using your account will use an unnamed tunnel automatically.

## What You'll Need

Before getting started with the High Availability setup, we recommend trying the [Basic Setup](/secure-connections/sauce-connect-4/setup-configuration/basic-setup) first to confirm that your network architecture is compatible with Sauce Connect Proxy.

## Basic Setup Leveraging High Availability

The diagram below shows the basic Sauce Connect Proxy setup using HA.<br/><img src={useBaseUrl('img/sauce-connect/scp-basic-ha.webp')} alt="Basic setup using High Availability" width="600"/>

On the Sauce Labs side, there are three major components: **Sauce Test VM**, **Sauce Connect Tunnel VM**, and **Tunnel Pool**. The logic flow is:

1. Test framework makes a request for a new Sauce Test VM, which specifies the tunnel ID of the pool (or uses an unnamed "default" pool).
2. A service in Sauce Labs chooses a tunnel from the existing pool at random.
3. The resulting tunnel from step 2 is assigned to the new test VM.

## Multiple Network Routes to Site Under Test (SUT)

In this diagram, we see a setup that allows for multiple network routes when reaching the site(s) under test.

<img src={useBaseUrl('img/sauce-connect/scp-mult-routes.webp')} alt="Multiple network routes to Site Under Test (SUT)" width="600"/>

There are variations to this, of course. For example, some of the Sauce Connect Proxy instances could be in the same network infrastructure as the site(s) under test. You can also imagine leveraging different virtual routes inside the same physical network. What is gained by setting up tunnels in this manner is redundancy for Sauce Connect Proxy tests, should one network route fail.

## High Availability Tunnel Settings and Commands

You can customize your HA tests using these options below. For a full list of HA commands and other Sauce Connect Proxy options, see the [Sauce Connect Proxy CLI Guide](/dev/cli/sauce-connect-proxy).

### Tunnel Pools

Exclusive to our HA Sauce Connect Proxy Setup, you can launch multiple tunnels as a tunnel pool that's treated as a single tunnel. Each individual tunnel used in a pool will count toward your tunnel concurrency limit.

#### Launching Tunnel Pools

- In your test script configuration, provide the name of the Sauce Connect Proxy tunnel by using the [`tunnelName`](/secure-connections/sauce-connect-4/setup-configuration/basic-setup#using-tunnel-names) capability:
  ```java
  "tunnelName": "tunnel_name_here"
  ```
- In your CLI, tunnels in the individual pools need to be started with both the [`--tunnel-name`](/dev/cli/sauce-connect-proxy#--tunnel-name) and [`--tunnel-pool`](/dev/cli/sauce-connect-proxy#--tunnel-pool) flags.
  ```bash
  ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --tunnel-pool --tunnel-name $TUNNEL_NAME
  ```
  Tunnel names distinguish which tunnel or HA tunnel pool will be used to connect to your site under test.

#### What are Colliding Tunnels?

Normally, if you attempt to start multiple tunnels with the same tunnel name, only the latest instance of the tunnel with that name will stay running.

All tunnels with the same name started prior to the start of the latest instance will be considered colliding tunnels (tunnels with colliding names) and will shut down.

When creating a tunnel pool, you need to prevent tunnel name collision by using the [`--tunnel-pool`](/dev/cli/sauce-connect-proxy#--tunnel-pool) flag when starting the tunnels for your tunnel pool. Tunnels will then remain active and tests will be distributed among them.

#### Monitoring Tunnel Pools

When running a tunnel pool, we recommend monitoring your activity on the Sauce Labs [**Tunnels**](https://app.saucelabs.com/tunnels) page to ensure your tunnel configuration stability and overall testing efficiency. Here, you can gain insight into all individual tunnels and tunnel pools. See [Monitoring Tunnels](/secure-connections/sauce-connect-4/proxy-tunnels/#monitoring-tunnels) for more information.

### Launching Sauce Connect Proxy with High Availability

Once you've confirmed that your network is configured to use HA, launch Sauce Connect Proxy using one of these commands below. You'll need to run this command on each machine where you want to have access to the tunnel pool.

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

## Failover and Rolling Restart Functionality

Tunnel pools allow for failover and rolling restart functionality, which improves Sauce Connect Proxy test stability and performance. Test load distribution is balanced automatically and evenly across tunnels using the round-robin load balancing method (see [Round-robin scheduling](https://en.wikipedia.org/wiki/Round-robin_scheduling) for more information). This method accelerates test time and allow you to run a high volume of tests in parallel.

Tunnel pools also abide by general fault tolerance rules. For example, if one tunnel becomes unavailable or shuts down (i.e., due to user shutdown, crash, maintenance, or network partition), you can configure your tunnels to be restored automatically while the test traffic is routed to another tunnel in the pool.

:::note
Tunnel pools do not self-heal (see [Self-management](<https://en.wikipedia.org/wiki/Self-management_(computer_science)>) for more information) or restart automatically. If a tunnel stops, you'll need to restart it manually. Other than restarting a stopped or failed tunnel, tunnel pools generally run automatically without user intervention. If you're running a high number of tunnels, you may want to bypass the pool and specify which tunnel to use directly.
:::

When in High Availability mode, we recommend restarting Sauce Connect Proxy tunnels every 24 hours. The tunnel will stay open until all tests associated with it have completed. At the same time, once the shutdown command has been sent, the tunnel is marked inactive in the eyes of the pool, and no new jobs will use it.

- Windows users: [Running as a Microsoft Windows Service](/secure-connections/sauce-connect-4/proxy-tunnels/#running-nssm-for-windows)
- Linux users: [Monitoring with Service Management Tools](/secure-connections/sauce-connect-4/proxy-tunnels/#service-management-tools)

### Using Multiple Machines for Failover Functionality

If you're configuring your HA Setup with multiple tunnels to provide failover functionality, we recommend setting up each tunnel to run on a separate machine. This way, if a port availability issue or machine failure arises, you will still have active tunnels.

If you're using the same machine for multiple tunnels, you should start Sauce Connect Proxy with unique log file names.

## More Information

- [Sauce Connect Proxy Performance Metrics](/secure-connections/sauce-connect-4/proxy-tunnels/#improving-sauce-connect-proxy-performance)
