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
  ````

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

That's it! Now that your tunnel is up, we recommend continuing on by running a simple Live Test with Sauce Connect. [Learn more](#More-Information).


## Verifying a Tunnel

To verify that your tunnel is up and running, there are two places you can check:

#### TUNNELS Page
Look for the "Active Tunnel" confirmation.
<img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>

#### CLI/Terminal
Look for the confirmation message.

```bash title="Tunnel Success Response"
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

## Stopping a Tunnel

There are two ways to stop a tunnel:

#### TUNNELS Page
Go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page and click the **Stop** icon next to your tunnel.<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Success CLI" width="800"/>

#### CLI/Terminal
From your Terminal, enter CTRL+C.

```bash title="Tunnel Termination Response"
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

* [Sauce School | Sauce Connect Proxy](https://training.saucelabs.com/sauceconnect/): Learn how to run a Live (Manual) Cross-Browser test and lots more in this interactive course with video walkthroughs and practice activities.
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Configurations](/secure-connections/sauce-connect/setup-configuration/)
