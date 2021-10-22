---
id: sauce-connect
title: Using Sauce Connect Proxy for API Testing
sidebar_label: Sauce Connect Proxy
description: Get a Sauce Connect Proxy tunnel up and running quickly for your API tests.
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your APIs exist behind a firewall on your private network, you'll need to use our Sauce Connect Proxy solution to open up a secure trusted connection between your network and Sauce Labs.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings)
* Have the Sauce Connect Proxy client on your local machine ([download here](/secure-connections/sauce-connect/installation/)).

:::info
If you're new to Sauce Connect Proxy, check out [Using Sauce Connect Proxy](/secure-connections/sauce-connect), [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements/), and [Sauce Connect Proxy Quickstart Guide](/secure-connections/sauce-connect/quickstart/).

:::

## Starting a Tunnel for API Testing

1. On your local machine, create a .yaml configuration file using the sample text below. Substitute your SAUCE_USERNAME and SAUCE_ACCESS_KEY where indicated. Optionally, you can define a name for your tunnel using the `tunnel-identifier` property.
  ```yaml title="api-config.yaml"
  ---
  rest-url: "https://api.us-west-4-i3er.saucelabs.com/rest/v1"
  user: "SAUCE_USERNAME"
  api-key: "SAUCE_ACCESS_KEY"
  vm-version: "v2alpha"
  tunnel-identifier: "YOUR-TUNNEL-NAME"
  ```
2. Save your .yaml file to the same folder as your Sauce Connect Proxy client. In this example, the file is named `api-config.yaml`.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-folders.png')} alt="API Testing Sauce Connect folder structure" width="500" />
3. Open your CLI terminal and navigate to your Sauce Connect Proxy folder.
  ```bash
  cd sc-4.7.1-osx
  ```
4. Start your tunnel by issuing:
  ```bash
  bin/sc -c api-config.yaml
  ```
5. Log in to Sauce Labs.
:::tip
[Verify that your tunnel is active](/secure-connections/sauce-connect/quickstart/#verifying-a-tunnel).
:::
6. Click **API TESTING** > **Get Started** to launch Sauce Labs API Testing.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/01/APIlandingpage.png')} alt="API Testing landing page" width="600" />
7. From the **API TESTING** homepage > **Projects** tab, click on your project name.
8. Under **Run Configuration**, click the Sauce Connect Proxy tunnels dropdown menu (which defaults to **No Tunnel**), then click the name of your tunnel.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-nav1.png')} alt="API Testing Sauce Connect Nav" width="600"/>

Now you're set up to run your API tests through a Sauce Connect Proxy tunnel.
