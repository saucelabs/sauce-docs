---
id: linux
title: Install Sauce Connect on Linux
sidebar_label: Linux
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Debian/Ubuntu

Sauce Connect provides `.deb` package with Systemd service for [Sauce Connect run](/dev/cli/sauce-connect-5/sc_run.md) command.
Other commands are available as well, but you will need to start them manually.

### Install package

<Tabs
defaultValue="ARM64"
  values={[
    {label: 'ARM64', value: 'ARM64'},
    {label: 'x86-64', value: 'x86-64'},
  ]}>
    <TabItem value="ARM64">

```bash
curl -L -o sauce-connect.deb https://saucelabs.com/downloads/sauce-connect/5.0.1/sauce-connect_5.0.1.linux_arm64.deb
sudo dpkg -i sauce-connect.deb
```
  </TabItem>

  <TabItem value="x86-64">

```bash
curl -L -o sauce-connect.deb https://saucelabs.com/downloads/sauce-connect/5.0.1/sauce-connect_5.0.1.linux_amd64.deb
sudo dpkg -i sauce-connect.deb
```

  </TabItem>
</Tabs>

### Edit config file

```bash
sudo vim /etc/sauce-connect/sauce-connect.yaml
```

### Enable and start Sauce Connect service

```bash
sudo systemctl enable sauce-connect
sudo systemctl start sauce-connect
```

### Check Sauce Connect Status

```bash
sudo systemctl status sauce-connect
```

## RedHat/CentOS/Fedora

Sauce Connect provides `.rpm` package with Systemd service for [Sauce Connect run](/dev/cli/sauce-connect-5/sc_run.md) command.
Other commands are available as well, but you will need to start them manually.


### Install package

<Tabs
defaultValue="ARM64"
  values={[
    {label: 'ARM64', value: 'ARM64'},
    {label: 'x86-64', value: 'x86-64'},
  ]}>
<TabItem value="ARM64">

```bash
sudo rpm -i https://saucelabs.com/downloads/sauce-connect/5.0.1/sauce-connect-5.0.1_linux.aarch64.rpm
```
  </TabItem>

  <TabItem value="x86-64">

```bash
sudo rpm -i https://saucelabs.com/downloads/sauce-connect/5.0.1/sauce-connect-5.0.1_linux.x86_64.rpm
```

  </TabItem>
</Tabs>

### Edit config file

```bash
sudo vim /etc/sauce-connect/sauce-connect.yaml
```

### Enable and start Sauce Connect service

```bash
sudo systemctl enable sauce-connect
sudo systemctl start sauce-connect
```

### Check Sauce Connect Status

```bash
sudo systemctl status sauce-connect
```

## Generic

### Unpack the tarball

<Tabs
defaultValue="ARM64"
  values={[
    {label: 'ARM64', value: 'ARM64'},
    {label: 'x86-64', value: 'x86-64'},
  ]}>
<TabItem value="ARM64">

```bash
curl -L -o sauce-connect.tar.gz https://saucelabs.com/downloads/sauce-connect/5.0.1/sauce-connect-5.0.1_linux.aarch64.tar.gz
sudo mkdir -p /opt/sauce-connect
sudo tar -C /opt/sauce-connect -xzf sauce-connect.tar.gz
```
  </TabItem>

  <TabItem value="x86-64">

```bash
curl -L -o sauce-connect.tar.gz https://saucelabs.com/downloads/sauce-connect/5.0.1/sauce-connect-5.0.1_linux.x86_64.tar.gz
sudo mkdir -p /opt/sauce-connect
sudo tar -C /opt/sauce-connect -xzf sauce-connect.tar.gz
```

  </TabItem>
</Tabs>


### Link the binary

```bash
sudo ln -s /opt/sauce-connect/sc /usr/local/bin/sc
```

### Add bash completion

<Tabs
defaultValue="User"
  values={[
    {label: 'User', value: 'User'},
    {label: 'System', value: 'System'},
  ]}>
<TabItem value="User">

```bash
echo 'source <(sc completion bash)' >>~/.bash_profile
```
  </TabItem>

  <TabItem value="System">

```bash
sudo mkdir -p /etc/bash_completion.d
sudo ln -s /opt/sauce-connect/completions/sc.bash /etc/bash_completion.d/sc
```

  </TabItem>
</Tabs>

### Edit config file

This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.
See [CLI reference](/dev/cli/sauce-connect-5/) for more details.


```bash
vim /opt/sauce-connect/sauce-connect.yaml
```

### Start Sauce Connect

```bash
sc run --config-file /opt/sauce-connect/sauce-connect.yaml
```
