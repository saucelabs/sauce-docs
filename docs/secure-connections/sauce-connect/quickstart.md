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

1. Download the Sauce Connect Proxy client [here](/secure-connections/sauce-connect/installation).
2. Extract the .zip download contents to your local machine.
3. Open your local terminal.

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
4. Log in to Sauce Labs.
5. Go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page > Scroll to **STEP 3: Configure & Authenticate** > Copy the code snippet.
6. Paste the snippet into your local terminal. You can re-name your tunnel or leave it as-is.
7. Run the snippet. This will authenticate you, connects you to a Sauce Labs Data Center, assign an ID for your tunnel, and start your tunnel.

 ```bash
 ./sc -u {SAUCE_USERNAME} \
 -k {SAUCE_ACCESS_KEY} \
 --region us-west \
 --tunnel-name {TUNNEL_NAME}
 ```

## Verifying a Tunnel

8. To verify that your tunnel is up and running, there are two places you can check:

   * **TUNNELS Page**: Look for the "Active Tunnel" confirmation.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>
   * **CLI**: Look for the confirmation message in your terminal.
     ```bash
     Sauce Connect 4.7.1, build 5439 fb74241

     Sauce Connect runtime information:
      - Name: {SAUCE_USERNAME}_tunnel_name
      - PID: 45650
      - PID file: /tmp/sc_client-{SAUCE_USERNAME}_tunnel_name.pid
      - Log file: /var/folders/xj/9gxlps1566917q90pdb707cm0000gn/T/sc-{SAUCE_USERNAME}_tunnel_name.log
      - SCProxy Port: 51915
      - Metric Port: None
      - Selenium listener: None
      - External proxy for REST API: None
      - Region: us-west

     Secure remote tunnel provisioned. Tunnel ID: 4e22f9950e0d4ef6a7b04dd935a1dad3

     Sauce Connect is up, you may start your tests.
     ```

## Running a Local Test

With your tunnel up and running, try using it to run a Live Cross-Browser Test on a local instance of your website. Without Sauce Connect, you'll get an error message if you try to run a local test.

9. Go back to Sauce Labs and click **LIVE** > **Cross Browser**.
10. From the **LIVE / Cross Browser** test page: In the **URL** field, input the local URL for your website under test (e.g., http://localhost:3000). Click the **Sauce Connect Proxy** dropdown and select the name of the tunnel you launched. Choose a browser/resolution/OS configuration from the **BROWSER SELECTION**, **RESOLUTION**, and **OS VERSION** selections. When you're done, click **Run Test**.
11. For details on using Live Testing, see [Live Desktop Test Interface](/web-apps/live-testing/live-cross-browser-testing/#live-desktop-test-interface). When you're done testing, move on to the next step.

## Stopping a Tunnel

12. There are two ways to stop a tunnel:
    * **TUNNELS Page**: Go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page and click the **Stop** icon next to your tunnel.<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Success CLI" width="800"/>
    * **CLI**: From your Terminal, enter CTRL+C to terminate the connection.
     ```bash
     Sauce Connect is up, you may start your tests.
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
