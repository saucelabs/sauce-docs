---
id: quickstart
title: Sauce Connect Proxy Quickstart Guide
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get up and running with a Sauce Connect Proxy tunnel in just a few minutes by following the instructions below.

## Starting a Tunnel

1. If you haven't yet, download the Sauce Connect Proxy client from [Sauce Connect Proxy Installation](/secure-connections/sauce-connect/installation). If you already have it, confirm you're using the latest version (otherwise, you may run into technical issues).
2. Open your local terminal.

  <Tabs
    defaultValue="Mac"
    values={[
      {label: 'Mac', value: 'Mac'},
      {label: 'Windows', value: 'Windows'},
      {label: 'Linux', value: 'Linux'},
    ]}>

  <TabItem value="Mac">

  On your local machine, navigate to the bin folder, where the Sauce Connect Proxy client is located. If you've saved it to your home directory:

  ```bash
  cd sc-4.7.1-osx/bin
  ```

  </TabItem>
  <TabItem value="Windows">

  On your local machine, navigate to the bin folder, where the Sauce Connect Proxy client is located. If you've saved it to your home directory:

  ```bash
  cd sc-4.7.1-win32/bin
  ```
  </TabItem>
  <TabItem value="Linux">

  Copy [this Linux snippet](/secure-connections/sauce-connect/installation/#linux), then paste and run it in your local terminal.

  </TabItem>
  </Tabs>
3. Log in to Sauce Labs.
4. Go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsPage.png')} alt="Sauce Connect Proxy Tunnels page" width="250"/>
5. Skip to **STEP 3: Configure & Authenticate** and copy the code snippet.<br/><img src={useBaseUrl('img/sauce-connect/configureAuth.png')} alt="Sauce Connect Proxy Tunnels page code snippet" width="500"/>
6. Paste the entire snippet into your local terminal. Optionally, you can re-name your tunnel using the `--tunnel-name` flag.
  ```bash
  ./sc -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY} --region us-west --tunnel-name {TUNNEL_NAME}
  ```
7. Run the snippet. This will authenticate you, connects you to a Sauce Labs Data Center, assign an ID for your tunnel, and start your tunnel.

## Verifying a Tunnel

8. To verify that your tunnel is up and running, there are two places you can check:
   * From the **CLI**, look for the confirmation message.
    ```bash
    Secure remote tunnel provisioned. Tunnel ID: 4e22f9950e0d4ef6a7b04dd935a1dad3
    Sauce Connect is up, you may start your tests.
    ```
   * From the **TUNNELS** page, look for the "Active Tunnel" confirmation.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>

## Running a Local Test

With your tunnel up and running, try running a Live Cross-Browser Test on a local instance of your website. Without Sauce Connect, you'd get an error message if you try to run a local test.

9. Go back to Sauce Labs and click **LIVE** > **Cross Browser** > **Desktop** tab.
10. Select desired configurations:
    * In the **URL** field, input the URL for your local website under test (e.g., `http://localhost:3000`).
    * Click the **Sauce Connect Proxy** dropdown and select the name of the tunnel you've launched.
    * Choose a browser, resolution, and OS from the **BROWSER SELECTION**, **RESOLUTION**, and **OS VERSION** settings.
    * Click **Run Test** to launch your test.
11. Use your mouse cursor and keyboard to interact with your website under test. For more details, see [Live Desktop Test Interface](/web-apps/live-testing/live-cross-browser-testing/#live-desktop-test-interface). When you're done testing, move on to the next step.

## Stopping a Tunnel

12. There are two ways to stop a tunnel:
    * From the **TUNNELS** page, click the **Stop** icon next to your tunnel.<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Success CLI" width="800"/>
    * From the **CLI**, enter CTRL+C to terminate your SC connection.
     ```bash
     ^C
     Stopping client
     Will wait for up to 300s for any active jobs using this tunnel to finish.
     Note: Press CTRL-C again to shut down immediately.
     Note: If you do this, tests that are still running will fail.
     Waiting for the connection to terminate...
     Connection closed (8).
     Goodbye.
     ```

## More Information

* [Sauce School | Sauce Connect Proxy Course](https://training.saucelabs.com/sauceconnect/)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Configurations](/secure-connections/sauce-connect/setup-configuration/)
