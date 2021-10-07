---
id: high-availability
title: High Availability Setup
sidebar_label: High Availability Setup
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The High Availability Sauce Connect Proxy setup enables you to run tests using multiple Sauce Connect Proxy tunnels and run multiple tunnels grouped together as a tunnel pool,
which will be treated as single tunnel. Pools are ideal for running 100 or more parallel tests (high concurrency) because tunnel capacity is limited by a single TCP connection.

A major benefit to using the High Availability setup is load balancing; jobs will be distributed among the tunnels in your tunnel pool.
If one of your tunnels goes down, any tests started after that will be routed through another tunnel.
That said, if a tunnel instance on your side or a VM tunnel instance on the Sauce Labs side goes down once you've already started running tests, these tests in motion will be impacted.

A strongly recommend best practice is to apply and track tunnels with tunnel identifiers. Otherwise, test traffic initiated using your account will use an unnamed tunnel automatically.  

## What You'll Need
Before getting started with the High Availability setup, our recommendation is to first try the [Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup)
to confirm that your system and network architecture is compatible with Sauce Connect Proxy.

## Basic Setup Leveraging High Availability
The following diagram shows the basic Sauce Connect Proxy setup using High Availability.
On the Sauce Labs side, there are three major components: Sauce Test VM, Sauce Connect Tunnel VM, and Tunnel Pool. The logic flow is:

1. Test framework makes a request for a new Sauce Test VM, which specifies the tunnel ID of the pool (or uses an unnamed, "default" pool).
2. A service in Sauce Labs chooses a tunnel from the existing pool at random.
3. The resulting tunnel from step 2 is assigned to the new test VM.

### Basic Setup Using High Availability

<img src={useBaseUrl('img/sauce-connect/scp-basic-ha.png')} alt="Basic setup using High Availability" width="400"/>

## Multiple Network Routes
In this diagram, we see a setup that allows for multiple network routes when reaching the site(s) under test. There are variations to this, of course. For example, some of the Sauce Connect Proxy instances could be in the same network infrastructure as the site(s) under test. You can also imagine leveraging different virtual routes inside the same physical network. What is gained by setting up tunnels in this manner is redundancy for Sauce Connect Proxy tests, should one network route fail.

### Multiple Network Routes to Site Under Test (SUT)

<img src={useBaseUrl('img/sauce-connect/scp-mult-routes.png')} alt="Multiple network routes to Site Under Test (SUT)" width="400"/>

## High Availability Tunnel Settings and Commands
You can customize your High Availability tests using these options below. For a full list of High Availability commands and other Sauce Connect Proxy options,
see the [Sauce Connect Proxy Command Line Quick Reference Guide](/dev/cli/sauce-connect-proxy).

### Tunnel Pools
Exclusive to our High Availability Sauce Connect Proxy Setup, you can launch multiple tunnels as a tunnel pool that's treated as a single tunnel.
Be mindful that each tunnel used in a pool will count toward your tunnel concurrency limit.

#### Launching Tunnel Pools
When using Sauce Connect Proxy (either a single tunnel or High Availability pool) to test your app, you'll need to provide the name of the Sauce Connect Proxy tunnel by using the desired capability
[tunnelName](/secure-connections/sauce-connect/setup-configuration/basic-setup#using-tunnel-names) in your test configuration (e.g. '"tunnelName": "tunnel_name_here"').
Tunnel names distinguish which tunnel or High Availability tunnel pool will be used to connect to your site under test.

All tunnels in the individual pools need to be started with both the  [--tunnel-name "tunnel_name_here"](/dev/cli/sauce-connect-proxy#--tunnel-name-or---tunnel-identifier)
and [--tunnel-pool](/dev/cli/sauce-connect-proxy#--tunnel-pool-or---no-remove-colliding-tunnels) command line options.

#### What are Colliding Tunnels?
Normally, if you attempt to start multiple tunnels with the same tunnel name, only the latest instance of the tunnel with that name will stay running.

All tunnels with the same name started prior to the start of the latest instance will be considered colliding tunnels (tunnels with colliding names) and will shut down.

When creating a tunnel pool, you need to prevent tunnel name collision by using Sauce Connect Proxy client command line option
[--tunnel-pool](/dev/cli/sauce-connect-proxy#--tunnel-pool-or---no-remove-colliding-tunnels) when starting the tunnels for your tunnel pool.
Tunnels will then remain active and tests will be distributed among them.

#### Monitoring Tunnel Pools
When running a tunnel pool, we recommend monitoring your activity in Sauce Labs to ensure your tunnel configuration stability and overall testing efficiency.
Here, you can gain insight into all individual tunnels and tunnel pools. You can also check the health of an individual tunnel by running a test on it.

### Launching Sauce Connect Proxy with High Availability
Once you've confirmed that your network is configured to use High Availability, launch Sauce Connect Proxy using one of these commands below.
You'll need to run this command on each machine where you want to have access to the tunnel pool.

<Tabs
  defaultValue="maclinux"
  values={[
    {label: 'Linux or Mac OS', value: 'maclinux'},
    {label: 'Windows', value: 'windows'},
  ]}>

<TabItem value="maclinux">

```
$ ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY \
    --tunnel-name tunnel_name_here --tunnel-pool
```

</TabItem>

<TabItem value="windows">

```
> sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% ^
    --tunnel-name tunnel_name_here --tunnel-pool
```

</TabItem>
</Tabs>

## Failover and Rolling Restart Functionality
Tunnel pools allow for failover and rolling restart functionality, which improves Sauce Connect Proxy test stability and performance.
Test load distribution is balanced automatically and evenly across tunnels using the round-robin load balancing method
(see [Round-robin scheduling](https://en.wikipedia.org/wiki/Round-robin_scheduling) for more information).
This method accelerates test time and allow you to run a high volume of tests in parallel.

Tunnel pools also abide by general fault tolerance rules. For example, if one tunnel becomes unavailable or shuts down
(i.e., due to user shutdown, crash, maintenance, or network partition), you can configure your tunnels to be restored automatically while the test traffic is routed to another tunnel in the pool.

:::note
Tunnel pools do not self-heal (see [Self-management](https://en.wikipedia.org/wiki/Self-management_(computer_science)) for more information) or restart automatically. If a tunnel stops, you'll need to restart it manually. Other than restarting a stopped or failed tunnel, tunnel pools generally run automatically without user intervention. If you're running a high number of tunnels, you may want to bypass the pool and specify which tunnel to use directly.
:::

When in High Availability mode, we recommend restarting Sauce Connect Proxy tunnels every 24 hours.
The tunnel will stay open until all tests associated with it have completed. At the same time, once the shutdown command has been sent,
the tunnel is marked inactive in the eyes of the pool, and no new jobs will use it.

* Windows users: [Running as a Microsoft Windows Service](/secure-connections/sauce-connect/proxy-tunnels)
* Linux users: [Monitoring with Service Management Tools](/secure-connections/sauce-connect/proxy-tunnels)

### Using Multiple Machines for Failover Functionality
If you're configuring your High Availability Setup with multiple tunnels to provide failover functionality, we recommend setting up each tunnel to run on a separate machine.
This way, if a port availability issue or machine failure arises, you will still have active tunnels.

If you're using the same machine for multiple tunnels, you should start Sauce Connect Proxy with unique log file names.
