---
id: sauce-connect
title: Using Sauce Connect Proxy Tunnels for API Tests
sidebar_label: Using Sauce Connect
description: Get a Sauce Connect Proxy tunnel up and running quickly for your API tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Sauce Labs API Testing fully integrates with Sauce Connect Proxy tunnels, enabling you to test and monitor both internal and public APIs. If your APIs are behind a firewall on your private network, follow the steps below to launch a secure trusted connection between your network and Sauce Labs.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).
* Have the [Sauce Connect Proxy client installed](/secure-connections/sauce-connect/installation/) on your local machine. If you're new to the feature, check out the [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/).
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).

## Start API-Specific Tunnel

1. First, you'll need to create a YAML configuration file. From a text editor or IDE, create a file called **api-config.yaml**, then copy and paste in the template below.

  <Tabs
      defaultValue="US Data Center"
      values={[
        {label: 'US Data Center', value: 'US Data Center'},
        {label: 'EU Data Center', value: 'EU Data Center'},
      ]}>

  <TabItem value="US Data Center">

  ```yaml
  ---
  region: us-west
  user: "$SAUCE_USERNAME"
  api-key: "$SAUCE_ACCESS_KEY"
  vm-version: "v2alpha"
  tunnel-identifier: "$SAUCE_USERNAME_TUNNEL"
  ```

  </TabItem>
  <TabItem value="EU Data Center">

  ```yaml
  ---
  region: eu-central
  user: "$SAUCE_USERNAME"
  api-key: "$SAUCE_ACCESS_KEY"
  vm-version: "v2alpha"
  tunnel-identifier: "$SAUCE_USERNAME_TUNNEL"
  ```

  </TabItem>
  </Tabs>

2. In the **api-config.yaml** file:
   * Leave the `rest-url` and `vm-version` values as-is
   * Set the `user` and `api-key` values as your own Sauce username and access key, respectively
   * Set the `tunnel-identifier` value to whatever you'd like to name your tunnel
3. Save the **api-config.yaml** file to the Sauce Connect Proxy root folder on your local machine. <br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-folders.png')} alt="API Testing Sauce Connect folder structure" width="350" />
4. Open your terminal and navigate to the Sauce Connect Proxy folder. If your folder is in your home directory, you'd run:

  <Tabs
    defaultValue="Mac/Linux"
    values={[
      {label: 'Mac/Linux', value: 'Mac/Linux'},
      {label: 'Windows', value: 'Windows'},
    ]}>

  <TabItem value="Mac/Linux">

  ```bash
  cd sc-4.8.0-osx
  ```

  </TabItem>
  <TabItem value="Windows">

  ```bash
  cd C:\sc-4.8.0-win32
  ```
  </TabItem>
  </Tabs>

5. Start your tunnel by issuing:
  ```bash
  bin\sc.exe -c api-config.yaml
  ```

  If the tunnel was launched successfully, you'll see a [CLI response](/secure-connections/sauce-connect/proxy-tunnels/#command-line-interface) indicating that you can start your tests.


## Configure Test to Use Tunnel

6. Find the test you'd like to run. Tests can be located and run under the **Tests** tab, **Compose** tab, **HTTP Client** tab, and **Schedule** tabs.

7. Under the **Run Configuration** section, click on the Sauce Connect Proxy dropdown menu (defaults to **No Tunnel**), then click the name of your tunnel.<br/><img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-nav1.png')} alt="API Testing Sauce Connect Nav" width="175"/>

:::tip Session Stickiness
The **Tests** and **Compose** tabs have a _session stickiness_ feature (also known as session persistence) that binds your tunnel session to our API testing server. When you select a tunnel from the Sauce Connect Proxy dropdown, that tunnel will stay as the default selection, even if you close your browser.

<details><summary>Learn more</summary>

This feature does not apply to the **HTTP Client** or **Schedule** tabs, where the tunnel dropdown will always default to **No Tunnel**.

If you shut down a tunnel that's currently selected in a Sauce Connect dropdown anywhere in the platform (**Tests**, **Compose**, **HTTP Client**, or **Schedule** tab), the test would fail and you'd see the below error message. This is something to be mindful of when selecting a tunnel in the **Schedule** tab to run in the future.

<img src={useBaseUrl('img/api-fortress/2021/12/api-sc-tunnel-error.png')} alt="API Testing Sauce Connect Nav error" width="350"/>
</details>

:::

## Run Test through Tunnel

8. Once you've selected your tunnel from the dropdown, [run your test](/api-testing/quickstart/#run-test).

## More Information

* [Using Sauce Connect Proxy](/secure-connections/sauce-connect)
* [Specialized Sauce Connect Proxy Setups](/secure-connections/sauce-connect/setup-configuration/specialized-environments/#api-testing-setup)
