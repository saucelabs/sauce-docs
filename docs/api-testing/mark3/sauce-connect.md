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
If you're new to Sauce Connect Proxy, we also recommend reviewing [Using Sauce Connect Proxy](/secure-connections/sauce-connect), [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements/), and [Sauce Connect Proxy Quickstart Guide](/secure-connections/sauce-connect/quickstart/).

:::

## Using Sauce Connect Proxy

1. Log in to Sauce Labs.
2. Start a Sauce Connect Proxy tunnel from your CLI terminal as you would normally, with one difference &#8212 append the API option, `--vm-version v2alpha`, to your command line.

  ```bash
  ./sc   -u $SAUCE_USERNAME \
         -k $SAUCE_ACCESS_KEY \
         -x https://saucelabs.com/rest/v1 \
         -i SAUCE_TUNNEL_ID \
         --vm-version v2alpha
  ```

3. Click [**API TESTING**](https://app.saucelabs.com/apitesting/landing) > **Get Started** to launch Sauce Labs API Testing.
4. Click the **Projects** tab to view all of your projects, then click on your project name.
5. Under **Run Configuration**, click **No Tunnel** (default) to trigger the Sauce Connect Proxy dropdown menu, then click the name of the tunnel you started in Step 2.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/api-sauceconnect-nav1.png')} alt="API Testing Sauce Connect Nav" width="600"/>

Now you're set up to run your API tests through Sauce Connect Proxy.


## More Information

To learn how to verify tunnel activity and stop tunnels, see [Sauce Connect Proxy Quickstart Guide](/secure-connections/sauce-connect/quickstart/).
