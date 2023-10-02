---
id: operation
title: Sauce Connect Proxy 5 operations and administration
sidebar_label: Operations and Administration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What You'll Need

- If you haven't already, make sure you can access the website or mobile app that you'll be testing from the Sauce Connect Proxy host.
- Check to see if you have any proxies that are required to access the public Internet.

## Best Practice for Using Tunnels

We recommend using a single Sauce Connect Proxy tunnel or tunnel pool for each test suite or build, and tearing it down at the end of your test. Your test automation framework should launch Sauce Connect Proxy before the test suite is triggered and shut it down when the suite finishes.

### Security Considerations

We recommend using a [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/) or [setting environment variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/) to hide sensitive information like your password ([--access-key](/dev/cli/sauce-connect-5/run/#--access-key)) and proxy credentials. This way, they won't be visible in the list of running processes.

### Shared Tunnels

Sauce Connect Proxy tunnel can be shared between multiple accounts in the same organization. To share a tunnel, start Sauce Connect Proxy with the [`--shared-tunnel`](/dev/cli/sauce-connect-proxy/#--shared-tunnel) flag.
For most Sauce Labs customers, your access to shared tunnels is determined by the permissions of the user who creates them.
Organization admins can create tunnels that any user on any team can use.
Team admins can create tunnels that any member of their team can use. Team members cannot share tunnels they create with any other team member.

For more information about user roles and permissions, see [User Roles](/basics/acct-team-mgmt/managing-user-info).

In order to use a tunnel that an admin or team member shares with you, you'll need to add [`tunnelOwner`](https://docs.saucelabs.com/dev/test-configuration-options/#tunnelowner) to your test capabilities and specify that person's username.

## Installing Sauce Connect Proxy

See the [installation instructions](/secure-connections/sauce-connect-5/installation/)

## Starting Sauce Connect Proxy

Every Sauce Connect Proxy tunnel spins up a fresh virtual machine (VM) that is used only for your tests. Once the tunnel is closed, VMs are destroyed.

1. Make sure that the directory containing the `sc` binary is in the `$PATH`. Otherwise, you will have to specify the path to the binary in the command line, `/path/to/sc`
2. Define environment variables containing the required values: your user name, access key and Sauce Labs region

```bash
SAUCE_USER=<username>
SAUCE_ACCESS_KEY=<your access key>
SAUCE_REGION=<us-west|eu-central>
```

:::note
If you don't define environment variables, you can specify the command line options or you can add all values to the configuration file.
:::

3. Start Sauce Connect Proxy

<Tabs
  defaultValue="Mac/Linux"
  values={[
    {label: 'Mac/Linux', value: 'Mac/Linux'},
    {label: 'Windows', value: 'Windows'},
  ]}>

  <TabItem value="Mac/Linux">

```bash
sc run --tunnel-name $SAUCE_TUNNEL_NAME
```

Or without environment variables:

```bash
sc run --user <your user> --access-key <your access key> --region <us-west|eu-central> --tunnel-name $SAUCE_TUNNEL_NAME
```

  </TabItem>
  <TabItem value="Windows">

```bash
sc run --tunnel-name $SAUCE_TUNNEL_NAME
```

Or without environment variables:

```bash
sc run --user <your user> --access-key <your access key> --region <us-west|eu-central> --tunnel-name $SAUCE_TUNNEL_NAME
```

  </TabItem>
  </Tabs>

## Monitoring Tunnels

### Web UI

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

## Service Management Tools

Running Sauce Connect Proxy as a service is recommended when your tests often require an active secure connection and, operationally, it's complicated to set up a tunnel just before each test suite.
The following options are available:

- [Running a containerized Sauce Connect Proxy](/secure-connections/sauce-connect/setup-configuration/docker/#running-the-sauce-connect-proxy-container-indefinitely-in-kubernetes)
- Running a systemd service

### Running systemd service on Debian-based Linux

1. [Install](/secure-connections/sauce-connect-5/installation/) Debian package
2. Create your Sauce Connect configuration file

- Sauce Connect Proxy YAML config file
- Create an env file containing `SAUCE_CONFIG_FILE` for the systemd service to be able to locate your YAML configuration file

```bash
mkdir /etc/sauce-connect
cat <<EOF >> /etc/sauce-connect/env
SAUCE_CONFIG_FILE=/etc/sauce-connect/sc.yaml
EOF
```

- Create a configuration file containing your Sauce Connect Proxy configuration

```bash
cat <<EOF >> /etc/sauce-connect/sc.yaml
region=us-west
user=xxx
access-key=xxx
tunnel-name=my-systemd-sc
EOF
```

3. Customize the systemd unit file

- Running `systemctl edit sauce-connect` will open an editor that allows adding overrides
- Add your overrides (that systemd will save in `/etc/systemd/system/sauce-connect.service.d/override.conf`)

```bash
[Service]
EnvironmentFile=/etc/sauce-connect/env
```

4. Validate your systemd overrides

```bash
systemctl cat sauce-connect
  # /lib/systemd/system/sauce-connect.service
  [Unit]
  Description=Sauce Connect Proxy Service
  After=network-online.target

  [Service]
  EnvironmentFile=/etc/default/sauce-connect
  …

  # /etc/systemd/system/sauce-connect.service.d/override.conf
  [Service]
  EnvironmentFile=/etc/sauce-connect/env
```

5. Start the service

```bash
systemctl start sauce-connect
```

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect/)
- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/)
