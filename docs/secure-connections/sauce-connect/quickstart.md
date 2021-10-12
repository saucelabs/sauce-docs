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

  Navigate to the folder where you downloaded Sauce Connect.

  ```bash
  cd sc-4.7.1-osx
  ```

  </TabItem>
  <TabItem value="Windows">

  Navigate to the folder where you downloaded Sauce Connect.

  ```bash
  cd sc-4.7.1-win32
  ````

  </TabItem>
  <TabItem value="Linux">

  Copy [this snippet](/secure-connections/sauce-connect/installation/#linux), then paste and run it in your local terminal.

  </TabItem>
  </Tabs>

4. Log in to Sauce Labs.
5. Go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page, scroll to **STEP 3: Configure & Authenticate**, and copy the code snippet listed there.
6. Paste the snippet into your local terminal and then run it. This authenticates you, connects you to a Sauce Labs Data Center, assigns an ID for your tunnel, and starts your tunnel.

That's it! Now that your tunnel is up, try running a test. To view additional configuration options, see the [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy/).


## Verifying a Tunnel

To verify that your tunnel is up and running, there are two places you can check:

#### Tunnel Page
<img src={useBaseUrl('img/sauce-connect/sauceconnect-tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="800"/>

#### CLI/Terminal
<img src={useBaseUrl('img/sauce-connect/sauceconnect-tunnelsuccess-cli.png')} alt="Sauce Connect Tunnel Success CLI" width="700"/>


## Stopping a Tunnel

To stop a tunnel, go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page and click the **Stop** icon next to your tunnel.

<img src={useBaseUrl('img/sauce-connect/sauceconnect-tunnelstop-ui.png')} alt="Sauce Connect Tunnel Success CLI" width="800"/>


## More Information

* [Sauce School | Sauce Connect Proxy](https://training.saucelabs.com/sauceconnect/): an interactive course with video walkthroughs and practice activities.
