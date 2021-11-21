---
id: yaml-config
title: Configuring Tunnels with a YAML File
sidebar_label: YAML Configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The standard way to launch a Sauce Connect Proxy tunnel is executing a command line comprised of all required and optional flags, as described in the [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/).

Another way is to write YAML specification file comprised of all flags, then point to that file path from your command line using the [`-c (--config-file)`](/dev/cli/sauce-connect-proxy/#--config-file) flag. To customize Sauce Connect Proxy tunnels, you'd just modify the properties in the YAML file.


## What You'll Need

* Review the requirements under [Sauce Connect Proxy Basic Setup > What You'll Need](/secure-connections/sauce-connect/setup-configuration/basic-setup/#what-youll-need).
* The `config.yml` template file, which is part of the Sauce Connect Proxy download package.

## Use Cases
In production environments, we recommend using a YAML config file, rather than writing out all tunnel configuration options on a command line.
* Helps with tracking configuration changes.
* Facilitates management of tunnel-domains and direct-domains options, which can get very long.
* Secures Sauce Connect Proxy credentials with tighter access control.

## Writing a YAML Configuration File

1. Go to your Sauce Connect Proxy folder and open the config.yml template.<br/><img src={useBaseUrl('img/sauce-connect/scp-yaml.png')} alt="Sauce Connect download file contents" width="400" />
2. Enter values for the properties you'd like to use. To view the definitions for the properties supported for launching Sauce Connect Proxy tunnels, look up the corresponding CLI flag.
3. Save the `config.yml` to a location of your choice. For this example, we'll save it to this path: ~/sc-4.7.1-osx/config_examples/config.yml.
4. From your command line, navigate to the Sauce Connect Proxy client bin folder on your local machine.

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

5. Use the following configuration at runtime to direct Sauce Connect Proxy to pull from your YAML configuration file.
  ```bash
  ./sc -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}-c ~/sc-4.7.1-osx/config_examples/config.yml --region us-west --tunnel-name {TUNNEL_NAME}
  ```


## More Information
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy)
