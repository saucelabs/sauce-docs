---
id: sauce-connect
title: Using Sauce Connect Proxy for API Testing
sidebar_label: Sauce Connect Proxy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your APIs exist behind a firewall on your private network, you'll need to use our Sauce Connect Proxy solution to open up a secure trusted connection between your network and Sauce Labs.

## What You'll Need

* Have the Sauce Connect Proxy client on your local machine ([download here](/secure-connections/sauce-connect/installation/)).

:::info
If you're new to Sauce Connect Proxy, check out [Using Sauce Connect Proxy](/secure-connections/sauce-connect), [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements/), and [Sauce Connect Proxy Quickstart Guide](/secure-connections/sauce-connect/quickstart/).

:::

## Starting a Tunnel for API Testing

1. Create a .yaml configuration file using the text below. Substitute your [SAUCE_USERNAME](https://app.saucelabs.com/user-settings) and [SAUCE_ACCESS_KEY](https://app.saucelabs.com/user-settings) where indicated. Optionally, you can define a name for your tunnel (`tunnel-identifier` variable).
  ```yaml
  rest-url: "https://api.us-west-4-i3er.saucelabs.com/rest/v1"
  user: "SAUCE_USERNAME"
  api-key: "SAUCE_ACCESS_KEY"
  no-remove-colliding-tunnels: true
  vm-version: "v2alpha"
  tunnel-cert: private
  tunnel-identifier: your-tunnel-name
  ```
2. Save your .yaml file to the same folder as your Sauce Connect Proxy client. In this example, the file is named `api-config.yaml`.
  <img src={useBaseUrl('img/api-fortress/2021/api-sauceconnect-folders.png')} alt="API Testing Sauce Connect Nav" width="500" />
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
6. Click [**API TESTING**](https://app.saucelabs.com/apitesting/landing) > **Get Started** to launch Sauce Labs API Testing.
7. Click the **Projects** tab to view all of your projects, then click on your project name.
8. Under **Run Configuration**, click **No Tunnel** (default) to trigger the Sauce Connect Proxy dropdown menu, then click the name of your tunnel.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/api-sauceconnect-nav1.png')} alt="API Testing Sauce Connect Nav" width="600"/>

Now you're set up to run your API tests through Sauce Connect Proxy.


## More Information

To learn how to verify tunnel activity and stop tunnels, see [Sauce Connect Proxy Quickstart Guide](/secure-connections/sauce-connect/quickstart/).
