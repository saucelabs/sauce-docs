---
id: systemd
title: Sauce Connect Proxy With Systemd
sidebar_label: Systemd
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy release includes [Debian](https://wiki.debian.org/deb) and [RPM](https://en.wikipedia.org/wiki/RPM_Package_Manager) packages with built-in systemd unit file.
[Systemd](https://wiki.archlinux.org/title/systemd) is a Linux service manager that includes features like on-demand starting of services, logging management and other tools and utilities to help with common system administration tasks.
Sauce Connect Proxy can run as a systemd service on Linux platform.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- A `root`-level access to a Linux machine
- Basic knowledge of Linux administration and systemd

## Running systemd service on Debian-based Linux

1. [Install](/secure-connections/sauce-connect-5/installation/) Debian package
2. Create your Sauce Connect configuration file

- Sauce Connect Proxy [configuration file](/secure-connections/sauce-connect-5/operation/configuration/#config-file)
- Create an env file containing `SAUCE_CONFIG_FILE` for the systemd service to be able to locate your [configuration file](/secure-connections/sauce-connect-5/operation/configuration/#config-file)

```bash
mkdir /etc/sauce-connect
cat <<EOF >> /etc/sauce-connect/env
SAUCE_CONFIG_FILE=/etc/sauce-connect/sc.yaml
EOF
```

- Create a file containing your Sauce Connect Proxy [configuration](/secure-connections/sauce-connect-5/operation/configuration/#config-file)

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
