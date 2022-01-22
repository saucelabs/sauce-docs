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


## What You'll Need
* See [Sauce Connect Proxy Basic Setup requirements](/secure-connections/sauce-connect/setup-configuration/basic-setup/#what-youll-need).


## Use Cases

We recommend using a YAML config file in production environments.
* **Facilitates tracking tunnel configuration changes** because they're all included in a single YAML file.
* **Facilitates management of tunnel-domains and direct-domains options**, which can get very long.
* **Secures Sauce Connect Proxy credentials with tighter access control**.


## Introduction

Config file may contain any Sauce Connect Proxy CLI flag and comments, for example:

```yaml
---
region: "us-west"
user: "johndoe"
api-key: "xxxx-xxx-xxx"
# this is my log file location
logfile: "/tmp/sc.log"
# this is my tunnel name
tunnel-identifier: "my-tunnel"
```

You can find full configuration file examples in Sauce Connect Proxy download file in `config_examples` folder.
<br/><img src={useBaseUrl('img/sauce-connect/sc-config1.png')} alt="Sauce Connect download file contents" width="265" /> <img src={useBaseUrl('img/sauce-connect/sc-config2.png')} alt="Sauce Connect download file contents" width="200" />

To view the description for a YAML file property, look up the corresponding [CLI flag](/dev/cli/sauce-connect-proxy/).

## Using the YAML Config File

To launch a tunnel using our **config.yml** file template:

1. Create Sauce Connect Proxy configuration file in some location, for example: `~/sc/config.yml`.
2. Enter values for the properties you'd like to use.
3. From your command line, navigate to the Sauce Connect Proxy client bin folder.
4. Use the following command line will direct Sauce Connect Proxy to use the configuration from your YAML file.

  <Tabs
      defaultValue="Mac"
      values={[
        {label: 'Mac', value: 'Mac'},
        {label: 'Windows', value: 'Windows'},
        {label: 'Linux', value: 'Linux'},
      ]}>

  <TabItem value="Mac">

  ```bash
  ./sc -c ~/sc/config.yml
  ```

  </TabItem>
  <TabItem value="Windows">

  ```bash
  sc -c %HOMEPATH%\sc\config.yml
  ```

  </TabItem>
  <TabItem value="Linux">

  ```bash
  ./sc -c ~/sc/config.yml
  ```

  </TabItem>
  </Tabs>


## More Information
* [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy)
