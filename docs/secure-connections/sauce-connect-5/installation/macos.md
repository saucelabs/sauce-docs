---
id: macos
title: Install Sauce Connect on macOS
sidebar_label: macOS
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## With Homebrew

On macOS you can install Sauce Connect with [Homebrew](https://brew.sh)

### Install

```bash
brew tap saucelabs/tap
brew install sauce-connect
```

### Edit config file

This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.
See [CLI reference](/dev/cli/sauce-connect-5/) for more details.

Get the default configuration file:

```bash
sc run config-file > sauce-connect.yaml
```

Edit the configuration file with your favorite editor:

```bash
vim sauce-connect.yaml
```

### Start Sauce Connect

```bash
sc run --config-file sauce-connect.yaml
```

## With zip package

Sauce Connect provides `.zip` package with a signed binary that can be used on any macOS version.

### Unpack the zip file

```bash
curl -L -o sauce-connect.zip https://saucelabs.com/downloads/sauce-connect/5.2.0/sauce-connect-5.2.0_darwin.all.zip
sudo mkdir -p /opt/sauce-connect
sudo unzip -d /opt/sauce-connect sauce-connect.zip
```

### Check the signature

Run the following command, you should see `Developer ID Application: SAUCE LABS INC`.
```bash
codesign -dvv /opt/sauce-connect/sc
```

### Link the binary

```bash
sudo ln -s /opt/sauce-connect/sc /usr/local/bin/sc
```

### Add completion

<Tabs
defaultValue="Zsh"
  values={[
    {label: 'Zsh', value: 'Zsh'},
    {label: 'Bash', value: 'Bash'},
  ]}>
<TabItem value="Zsh">

```bash
echo 'source <(sc completion zsh)' >>~/.zshrc
```
  </TabItem>

  <TabItem value="Bash">

```bash
echo 'source <(sc completion bash)' >>~/.bash_profile
```

  </TabItem>
</Tabs>

### Edit config file

This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.
See [CLI reference](/dev/cli/sauce-connect-5/) for more details.

Edit the configuration file with your favorite editor:

```bash
vim /opt/sauce-connect/sauce-connect.yaml
```

### Start Sauce Connect

```bash
sc run --config-file /opt/sauce-connect/sauce-connect.yaml
```
