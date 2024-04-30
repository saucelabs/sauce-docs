---
id: overview
title: Sauce Connect Proxy 5 operations and administration
sidebar_label: Getting Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy operations and administration involve everything required to install, configure, maintain and use secure connections.

## Installation and Configuration

- See the [installation instructions](/secure-connections/sauce-connect-5/installation/)
- See the [configuration guide](/secure-connections/sauce-connect-5/operation/configuration/)

## Administration

We recommend using a single Sauce Connect Proxy tunnel or tunnel pool for each test suite or build, and tearing it down at the end of your test. Your test automation framework should launch Sauce Connect Proxy before the test suite is triggered and shut it down when the suite finishes.

### Security Considerations

We recommend using a [config file](/secure-connections/sauce-connect-5/operation/configuration/#config-file) or [setting environment variables](/secure-connections/sauce-connect-5/operation/configuration/#environment-variables/) to hide sensitive information like your password ([--access-key](/secure-connections/sauce-connect-5/cli/run/#--access-key)) and proxy credentials. This way, they won't be visible in the list of running processes.

[Sauce Connect Proxy white paper](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview) contains an in-depth overview of the proxy and its security.

### Shared Tunnels

Sauce Connect Proxy tunnel can be shared between multiple accounts in the same organization. To share a tunnel, start Sauce Connect Proxy with the [`--shared all`](/secure-connections/sauce-connect-5/cli/run/#--shared) flag.
For most Sauce Labs customers, your access to shared tunnels is determined by the permissions of the user who creates them.
Organization admins can create tunnels that any user on any team can use.
Team admins can create tunnels that any member of their team can use. Team members cannot share tunnels they create with any other team member.

For more information about user roles and permissions, see [User Roles](/basics/acct-team-mgmt/managing-user-info).

In order to use a tunnel that an admin or team member shares with you, you'll need to add [`tunnelOwner`](https://docs.saucelabs.com/dev/test-configuration-options/#tunnelowner) to your test capabilities and specify that person's username.

### Running Sauce Connect Proxy

Every Sauce Connect Proxy tunnel spins up a fresh virtual machine (VM) that is used only for your tests. Once the tunnel is closed, VMs are destroyed.

1. Make sure that the directory containing the `sc` binary (or `sc.exe`, for Windows) is in the `$PATH`. Otherwise, you will have to specify the path to the binary in the command line, i.e. `/path/to/sc`
2. Define environment variables containing sensitive data: your user name, access key, proxy authentication (if needed), etc.

```bash
SAUCE_USERNAME=<username>
SAUCE_ACCESS_KEY=<your access key>
```

3. Start Sauce Connect Proxy

<Tabs
  defaultValue="Mac/Linux"
  values={[
    {label: 'Mac/Linux', value: 'Mac/Linux'},
    {label: 'Windows', value: 'Windows'},
  ]}>

  <TabItem value="Mac/Linux">

```bash
sc run --tunnel-name $SAUCE_TUNNEL_NAME --region <us-west|eu-central>
```

Or without environment variables:

```bash
sc run --username <your user> --access-key <your access key> --region <us-west|eu-central> --tunnel-name $SAUCE_TUNNEL_NAME
```

  </TabItem>
  <TabItem value="Windows">

```bash
sc.exe run --tunnel-name $SAUCE_TUNNEL_NAME --region <us-west|eu-central>
```

Or without environment variables:

```bash
sc.exe run --username <your user> --access-key <your access key> --region <us-west|eu-central> --tunnel-name $SAUCE_TUNNEL_NAME
```

  </TabItem>
  </Tabs>

### Monitoring Tunnels

See the [monitoring overview](/secure-connections/sauce-connect-5/operation/monitoring)

### Service Management Tools

Running Sauce Connect Proxy as a service is recommended when your tests often require an active secure connection and, operationally, it's complicated to set up a tunnel just before each test suite.
The following options are available:

- [Running Sauce Connect Proxy in Kubernetes](/secure-connections/sauce-connect-5/installation/kubernetes).
- [Running a containerized Sauce Connect Proxy](/secure-connections/sauce-connect/setup-configuration/docker/#running-the-sauce-connect-proxy-container-indefinitely-in-kubernetes).
- Running a [systemd service](/secure-connections/sauce-connect-5/installation/linux/).

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect/)
- [Sauce Connect Proxy 5 CLI Reference](/secure-connections/sauce-connect-5/cli/sc)
