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
- A `su`-level access to a Linux machine
- Basic knowledge of Linux administration and systemd

## Running systemd service on Debian-based Linux

1. [Install](/secure-connections/sauce-connect-5/installation/) Debian package. The installation process will create
  - `sauce-connect` user.
  - An environment variable `SAUCE_CONFIG_FILE=/etc/sauce-connect/sauce-connect.yaml` for the `sauce-connect` systemd unit.
  - A default Sauce Connect [configuration file](/secure-connections/sauce-connect-5/operation/configuration/#config-file) at `/etc/sauce-connect/sauce-connect.yaml`.
2. Modify or replace the Sauce Connect [configuration file](/secure-connections/sauce-connect-5/operation/configuration/#config-file) that is created during the installation process.

```bash
cat /etc/sauce-connect/sauce-connect.yaml
# --- Required ---
# access-key <UUID>
#
# Sauce Labs Access Key, you can get it from the User Settings page. For
# additional security, we recommend setting this as an environment variable.
#access-key:
# region <data center>
…
```

For example:

```bash
cat <<EOF >> /etc/sauce-connect/sauce-connect.yaml
region: us-west
username: xxx
access-key: xxx
tunnel-name: my-systemd-sc
EOF
```

4. Start the service

```bash
systemctl start sauce-connect
```

5. Validate the service is running

```bash
systemctl status sauce-connect
```

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect/)
- [Sauce Connect Configuration File](/secure-connections/sauce-connect-5/operation/configuration/#config-file)
- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/)
