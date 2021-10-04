---
id: sauce-connect
title: Using Sauce Connect Proxy for API Testing
sidebar_label: Sauce Connect Proxy
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your APIs exist behind a firewall on your private network, you'll need to use our Sauce Connect Proxy solution to open up a secure trusted connection between your network and Sauce Labs.

## What You'll Need

If you've never used Sauce Connect Proxy:
* Review [Using Sauce Connect Proxy](/secure-connections/sauce-connect)
  * See [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy) for additional, optional configuration options
* Confirm that your local environment meets the [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements/)
* [Download Sauce Connect Proxy](/secure-connections/sauce-connect/installation/) to your local machine

## Using Sauce Connect Proxy

1. Log in to Sauce Labs.
2. Start a Sauce Connect Proxy tunnel per standard procedure.
3. Verify that the tunnel is running. There are two places to do this.
   * via [**TUNNELS**](https://app.saucelabs.com/tunnels) page

     <img src={useBaseUrl('img/api-fortress/2021/api-sauceconnect-tunnelsuccess-UI.png')} alt="API Testing Sauce Connect Tunnel Success" width="650"/>
   * via CLI

     <img src={useBaseUrl('img/api-fortress/2021/api-sauceconnect-tunnel-success.png')} alt="API Testing Sauce Connect Tunnel Success CLI" width="650"/>
4. Click [**API TESTING**](https://app.saucelabs.com/apitesting/landing) > **Get Started** to launch Sauce Labs API Testing.
5. Click the **Projects** tab to view all of your projects, then click on your project name.
6. Under **Run Configuration**, click **No Tunnel** (default) to trigger the Sauce Connect Proxy dropdown menu, then click the name of the tunnel you started in Step 2.

  <img src={useBaseUrl('img/api-fortress/2021/api-sauceconnect-nav1.png')} alt="API Testing Sauce Connect Nav" width="600"/>
7. Now you're set up to run your API tests through Sauce Connect Proxy.

To stop the tunnel, return to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page and click the **Stop** icon next to your tunnel.
