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


## Using the YAML Config File

To launch a tunnel using our **config.yml** file template:

1. Go to your Sauce Connect Proxy folder and open the **config.yml** template.<br/><img src={useBaseUrl('img/sauce-connect/scp-yaml.png')} alt="Sauce Connect download file contents" width="400" />
2. Enter values for the properties you'd like to use. To view the description for a YAML file property, look up the corresponding [CLI flag](/dev/cli/sauce-connect-proxy/).<br/><img src={useBaseUrl('img/sauce-connect/sc-config1.png')} alt="Sauce Connect download file contents" width="265" /> <img src={useBaseUrl('img/sauce-connect/sc-config2.png')} alt="Sauce Connect download file contents" width="200" />
3. Save your **config.yml** to its original location, `~/sc-4.7.1-osx/config_examples/config.yml`.
4. From your command line, navigate to the Sauce Connect Proxy client bin folder.

  <Tabs
      defaultValue="Mac"
      values={[
        {label: 'Mac', value: 'Mac'},
        {label: 'Windows', value: 'Windows'},
        {label: 'Linux', value: 'Linux'},
      ]}>

  <TabItem value="Mac">

  ```bash
  cd sc-4.7.1-osx/bin
  ```

  </TabItem>
  <TabItem value="Windows">

  ```bash
  cd sc-4.7.1-win32/bin
  ```

  </TabItem>
  <TabItem value="Linux">

  ```bash
  cd sc-4.7.1-linux.tar.gz/bin
  ```

  </TabItem>
  </Tabs>

5. Use the following command line configuration at runtime to direct Sauce Connect Proxy to pull from your YAML configuration file.
  ```bash
  ./sc -u $SAUCE_USERNAME \
       -k $SAUCE_ACCESS_KEY \
       -c ~/sc-4.7.1-osx/config_examples/config.yml \
       --region us-west \
       --tunnel-identifier $TUNNEL_NAME
  ```


## More Information
* [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy)
