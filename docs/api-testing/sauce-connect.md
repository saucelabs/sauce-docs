---
id: sauce-connect
title: Using Sauce Connect Proxy Tunnels for API Tests
sidebar_label: Sauce Connect Tunnels
description: Get a Sauce Connect Proxy tunnel up and running quickly for your API tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If your APIs exist behind a firewall on your private network, you'll need to use our Sauce Connect Proxy solution to open up a secure trusted connection between your network and Sauce Labs.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).
* Have the [Sauce Connect Proxy client installed](/secure-connections/sauce-connect/installation/) on your local machine. If you're new to the feature, check out the [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/).
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).

## Start API-Specific Tunnel

1. First, you'll need to create a .yaml configuration file. Copy and paste the sample template below into a text editor file and save it as a .yaml file. In this example, we'll name it **api-config.yaml**.
     ```yaml title="Sample Template (api-config.yaml)"
     ---
     rest-url: "https://api.us-west-4-i3er.saucelabs.com/rest/v1"
     user: "SAUCE_USERNAME"
     api-key: "SAUCE_ACCESS_KEY"
     vm-version: "v2alpha"
     tunnel-identifier: "SAUCE_USERNAME_TUNNEL"
     ```
2. In the yaml file, leave the `rest-url` and `vm-version` properties as-is, then substitute the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` values with your own credentials. Optionally, you can rename your tunnel by replacing the `tunnel-identifier` property value.
3. Save your .yaml file to the Sauce Connect Proxy folder parent level on your local machine. <br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-folders.png')} alt="API Testing Sauce Connect folder structure" width="350" />
4. Open your terminal and navigate to the Sauce Connect Proxy folder. If it's in the home directory, you'd run:

  <Tabs
    defaultValue="Mac"
    values={[
      {label: 'Mac', value: 'Mac'},
      {label: 'Windows', value: 'Windows'},
    ]}>

  <TabItem value="Mac">

  ```bash
  cd sc-4.7.1-osx
  ```

  </TabItem>
  <TabItem value="Windows">

  ```bash
  cd sc-4.7.1-win32
  ```
  </TabItem>
  </Tabs>

5. Start your tunnel by issuing:
  ```bash
  bin/sc -c api-config.yaml
  ```

  If the tunnel was launched successfully, you'll see a [CLI response](/secure-connections/sauce-connect/proxy-tunnels/#command-line-interface) indicating that you can start your tests.


## Configure Test to Use Tunnel

6. Find the test you'd like to run. Tests can be located and run under the **Tests** tab, **Compose** tab, **HTTP Client** tab, and **Schedule** tabs.

7. Under the **Run Configuration** section, click on the Sauce Connect Proxy dropdown menu (defaults to **No Tunnel**), then click the name of your tunnel.<br/><img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-nav1.png')} alt="API Testing Sauce Connect Nav" width="175"/>


### Session Stickiness

The **Tests** and **Compose** tabs have a _session stickiness_ feature (also known as session persistence) that binds your tunnel session to our API testing server. When you select a tunnel from the Sauce Connect Proxy dropdown, that tunnel will stay as the default selection, even if you close your browser.

This feature does not apply to the **HTTP Client** or **Schedule** tabs, where the tunnel dropdown will always default to **No Tunnel**.

If you shut down a tunnel that's currently selected in a Sauce Connect dropdown anywhere in the platform (**Tests**, **Compose**, **HTTP Client**, or **Schedule** tab), the test would fail and you'd see the below error message. This is something to be mindful of when selecting a tunnel in the **Schedule** tab to run in the future.<br/><img src={useBaseUrl('img/api-fortress/2021/12/api-sc-tunnel-error.png')} alt="API Testing Sauce Connect Nav error" width="250"/>

## Run Test through Tunnel

8. Once you've selected your tunnel from the dropdown, [run your test](/api-testing/quickstart/#run-test).
