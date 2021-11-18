---
id: yaml-config
title: Launching Sauce Connect via YAML Configuration
sidebar_label: YAML Configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## What You'll Need
* Have Sauce Connect Proxy installed on your local machine.


## Command Line

As described in the [Quickstart](/secure-connections/sauce-connect/quickstart/), the standard way to launch a Sauce Connect Proxy tunnel is by writing and executing one command line consisting all required and optional flags.


## Command Line Plus YAML Configuration File

Another way is to write YAML specification file consisting of all optional flags, then point to the file path from your command line using the `--config-file` flag. To customize Sauce Connect Proxy tunnels, modify the properties of the YAML file accordingly.

1. Go to your Sauce Connect Proxy folder and open the config.yml template.<br/><img src={useBaseUrl('img/sauce-connect/scp-yaml.png')} alt="Sauce Connect download file contents" width="500" />
2. Enter values for the properties you'd like to use. To view the definitions for the properties supported for launching Sauce Connect Proxy tunnels, look up the corresponding CLI flag.
3. Save the config.yml to a location of your choice.
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
  ./sc -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY} --config
  ```
