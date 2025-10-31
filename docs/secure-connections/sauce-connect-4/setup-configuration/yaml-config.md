---
id: yaml-config
title: Sauce Connect Tunnel YAML File Configuration
sidebar_label: YAML File Configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The standard way to launch a Sauce Connect Proxy tunnel is to execute a single command line comprised of all [required flags](/dev/cli/sauce-connect-proxy/#main) and any [optional flags](/dev/cli/sauce-connect-proxy/) you want to use to customize tunnel behavior.

Another way to launch a tunnel is to fill out our YAML config file template and then use the [`-c (--config-file)`](/dev/cli/sauce-connect-proxy/#--config-file) flag in your command line to specify the YAML file path. Instead of writing out all tunnel configuration options on your command line, you'd just modify the properties in your YAML file.

Config file may contain any Sauce Connect Proxy CLI flag. It may also contain comments that could help make its content more readable, for example:

```yaml
---
region: 'us-west'
user: 'janedoe-sauce'
api-key: 'xxxx-xxx-xxx'
# this is my log file for SC I use for Mac OS tests.
logfile: '/tmp/sc-mac.log'
# this is the tunnel I use for Mac OS tests
tunnel-identifier: 'my-macos'
```

:::note
It's possible to pass the same command-line arguments on the command line, through a YAML config file, and as [environment variables](/secure-connections/sauce-connect-4/setup-configuration/environment-variables/).
When the same argument is passed through multiple methods, the order of precedence is as follows (from highest to lowest): command-line option, environment variable, YAML config file.
:::

For the reference, below is the complete config file that contains the latest Sauce Connect Proxy version defaults.
To view the description for a YAML file property, look up the corresponding [CLI flag](/dev/cli/sauce-connect-proxy/).

```bash
$ cat /sc-4.9.1-osx/config_examples/config.yml
api-key: ""
auth: []
cainfo: ""
capath: ""
direct-domains: []
dns: []
fast-fail-regexps: []
log-stats: 0
logfile: ""
max-logsize: 0
status-address: "localhost:0"
no-autodetect: false
no-proxy-caching: false
tunnel-pool: false
no-ssl-bump-domains: []
pac: ""
pidfile: ""
proxy: ""
proxy-tunnel: false
proxy-userpwd: ""
readyfile: ""
region: "us-west"
rest-url: ""
scproxy-port: 0
scproxy-read-limit: 0
scproxy-write-limit: 0
se-port: 0
shared-tunnel: false
tunnel-domains: []
tunnel-name: ""
user: ""
verbose: 0
```

:::note
You can find a complete configuration file example in the extracted .zip file content in `config_examples` folder (see [the download instructions](/secure-connections/sauce-connect-4/installation/)).
:::

## Use Cases

We recommend using a YAML config file in production environments.

- Facilitates tracking tunnel configuration changes because they're all included in a single YAML file.
- Facilitates management of potentially long CLI options such as tunnel-domains and direct-domains.
- Secures Sauce Connect Proxy credentials with tighter access control.

## What You'll Need

- See [Sauce Connect Proxy Basic Setup requirements](/secure-connections/sauce-connect-4/setup-configuration/basic-setup/#what-youll-need).

## Using the YAML Config File

To launch a tunnel using a **config.yml** file option.

1. Create Sauce Connect Proxy config file in any location, for example: `~/sc/config.yml`.
2. Enter values for the properties you'd like to use.
3. Navigate to the Sauce Connect Proxy client bin folder as described in [Basic Setup with a Test Script](/secure-connections/sauce-connect-4/setup-configuration/basic-setup#basic-setup-with-a-test-script).
4. Use the following command line to start Sauce Connect Proxy with the configuration from your YAML file.

<Tabs
    defaultValue="Mac/Linux"
    values={[
      {label: 'Mac/Linux', value: 'Mac/Linux'},
      {label: 'Windows', value: 'Windows'},
    ]}>

  <TabItem value="Mac/Linux">

```bash
./sc -c ~/sc/config.yml
```

  </TabItem>
  <TabItem value="Windows">

```bash
sc -c %HOMEPATH%\sc\config.yml
```

  </TabItem>
  </Tabs>

## More Information

- [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect-4/quickstart)
- [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy)
