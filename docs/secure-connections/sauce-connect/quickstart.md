---
id: quickstart
title: Sauce Connect Proxy Quickstart Guide
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Always use latest version
Using older Sauce Connect versions may impact your ability to launch a tunnel or cause other technical issues. Download the latest version [here](/secure-connections/sauce-connect/installation/).
:::

Sauce Connect is required to run a local test on an app or website located behind a firewall. Get up and running with a basic Sauce Connect Proxy tunnel in minutes using the steps below.


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).


## Start Tunnel

1. Download and extract the Sauce Connect Proxy client to your machine's home directory.
   * [Sauce Connect Proxy client for Mac](https://saucelabs.com/downloads/sc-4.7.1-osx.zip)
   * [Sauce Connect Proxy client for Windows](https://saucelabs.com/downloads/sc-4.7.1-win32.zip)
2. Open your terminal and navigate to the Sauce Connect Proxy client bin directory.
  <Tabs
    defaultValue="Mac"
    values={[
      {label: 'Mac', value: 'Mac'},
      {label: 'Windows', value: 'Windows'},
    ]}>

  <TabItem value="Mac">

  ```bash
  cd sc-4.7.1-osx/bin
  ```

  </TabItem>
  <TabItem value="Windows">

  ```bash
  cd C:\sc-4.7.1-win32\bin
  ```
  </TabItem>
  </Tabs>

3. Log in to Sauce Labs.
4. Go to the **Tunnels** page.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsPage.png')} alt="Sauce Connect Proxy Tunnels page" width="200"/>
5. Go to **STEP 3: Configure & Authenticate** and copy the code snippet.<br/><img src={useBaseUrl('img/sauce-connect/configureAuth.png')} alt="Sauce Connect Proxy Tunnels page snippet" width="500"/>
<details><summary>What is this?</summary>
This snippet contains your authentication credentials (username and access key), selects a Sauce Labs Data Center, and applies a name to your tunnel.
</details>
6. Paste the snippet into your terminal. Optionally, you can rename your tunnel by replacing the value after the `--tunnel-name` flag.
7. Run the snippet, then confirm your tunnel is up by checking for the confirmation message in your terminal:<br/><img src={useBaseUrl('img/sauce-connect/cli-tunnel-confirmation.png')} alt="Sauce Connect Tunnel Success" width="300"/>

  Additionally, you can check the **Tunnels** page to confirm it's in the list of active tunnels:<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>


## Run a Local Test

With your tunnel up and running, try doing a Live <!--or Automated--> local test.

### Live

<Tabs
    defaultValue="Cross-Browser (Web)"
    values={[
      {label: 'Cross-Browser (Web)', value: 'Cross-Browser (Web)'},
      {label: 'Mobile Browser', value: 'Mobile Browser'},
      {label: 'Mobile App', value: 'Mobile App'},
    ]}>

<TabItem value="Cross-Browser (Web)">

1. From your terminal or IDE, launch a local instance of your site or app as you normally would.
2. From Sauce Labs, click **Live** > **Cross Browser** > **Desktop**.
3. In the **URL** field, enter your local website under test (e.g., `http://localhost:3000`).
4. From the **Sauce Connect Proxy** dropdown, select your tunnel name.
5. Choose your [desired browser configuration](/web-apps/live-testing/live-cross-browser-testing/#testing-on-a-desktop-browser).
6. Click **Start Test** to launch your [live test in Sauce Labs](/web-apps/live-testing/live-cross-browser-testing/#live-desktop-test-interface).

</TabItem>
<TabItem value="Mobile Browser">

1. From your terminal or IDE, launch a local instance of your site or app as you normally would.
2. From Sauce Labs, click **Live** > **Cross Browser** > **Mobile Virtual** or **Mobile Real**.
3. Enter the local **URL** for your local website under test (e.g., `http://localhost:3000`)
4. From the **Sauce Connect Proxy** dropdown, select your tunnel name.
5. Choose your [**Mobile Virtual**](/web-apps/live-testing/live-cross-browser-testing/#virtual-device) or [**Mobile Real**](/web-apps/live-testing/live-cross-browser-testing/#real-device) configuration.
6. Click **Start Test** to launch your [live test in Sauce Labs](/web-apps/live-testing/live-cross-browser-testing/#testing-on-a-mobile-browser).

</TabItem>
<TabItem value="Mobile App">

1. From Sauce Labs, click **Live** > **Mobile App**.
2. Click **Upload App** to upload your iOS or Android mobile app file to Sauce Labs ([more info](/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app)).
3. Find your app in the apps list, hover your mouse over it, and click **Choose Device**.
4. To test your app on a real device, click **Mobile Real**. To test it on an emulator or simulator, click **Mobile Virtual**.
5. For **Mobile Real**, select a device, then select your tunnel name from the **Sauce Connect Proxy** dropdown ([more info](/mobile-apps/live-testing/live-mobile-app-testing/#real-devices)). For **Mobile Virtual**, select your tunnel name from the **Sauce Connect Proxy** dropdown, then select your desired device/OS configuration ([more info](/mobile-apps/live-testing/live-mobile-app-testing/#virtual-devices)).
6. Click **Start Test** to launch your [live test in Sauce Labs](/mobile-apps/live-testing/live-mobile-app-testing/#live-test-interface).

</TabItem>
</Tabs>


<!--

### Automated

<Tabs
    defaultValue="Cross-Browser (Web)"
    values={[
      {label: 'Cross-Browser (Web)', value: 'Cross-Browser (Web)'},
      {label: 'Mobile Browser', value: 'Mobile Browser'},
      {label: 'Mobile App', value: 'Mobile App'},
    ]}>

<TabItem value="Cross-Browser (Web)">

1. Open your automated test script. If you don't have one, try using one of our [sample scripts](https://github.com/saucelabs-training).
2. In your `sauce:options` capabilities section, add the `tunnelName` capability. The value needs to match what you named your tunnel in the CLI terminal (`--tunnel-name`) at launch. Here's an example:
  ```js
  capabilities: {
    browserName: 'chrome',
    browserVersion: '87.0',
    'sauce:options': {
      username: <your username>,
      accessKey: <your access key>,
      tunnelName: <your tunnel name>,
    },
  },
  ```

</TabItem>
<TabItem value="Mobile Browser">

1. Open your automated test script. If you don't have one, try using one of our [sample scripts](https://github.com/saucelabs-training).
2. In your `sauce:options` capabilities section, add the `tunnelName` capability. The value needs to match what you named your tunnel in the CLI terminal (`--tunnel-name`) at launch. Here's an example:
  ```js
  capabilities: {
    browserName: 'chrome',
    browserVersion: '87.0',
    'sauce:options': {
      username: <your username>,
      accessKey: <your access key>,
      tunnelName: <your tunnel name>,
    },
  },
  ```

</TabItem>
<TabItem value="Mobile App">

1. First, you'll need to upload your iOS or Android mobile app file to Sauce Storage. You can either [upload it through the UI](/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app) - or - [upload it programmatically via our REST API](/dev/api/storage/#upload-file-to-app-storage) so that Sauce Labs emulators, simulators, and real devices can connect to it.
2. Open your automated test script. If you don't have one, try using one of our [sample scripts](https://github.com/saucelabs-training).
3. In your `sauce:options` capabilities section, add the `tunnelName` capability. The value needs to match what you named your tunnel in the CLI terminal (`--tunnel-name`) at launch. Here's an example:
  ```js
  capabilities: {
    browserName: 'chrome',
    browserVersion: '87.0',
    'sauce:options': {
      username: <your username>,
      accessKey: <your access key>,
      tunnelName: <your tunnel name>,
    },
  },
  ```

</TabItem>
</Tabs>

-->

## Stop Tunnel

When you're finished testing, you can stop your tunnel from the terminal window where Sauce Connect is running. Just enter Ctrl+C ([more info](/secure-connections/sauce-connect/proxy-tunnels/#to-stop-a-single-tunnel-ctrlc)).<br/><img src={useBaseUrl('img/sauce-connect/cli-tunnel-stop.png')} alt="Sauce Connect Proxy Tunnels page snippet" width="500"/>

You can also do this from the **Tunnels** page by clicking one of the **Stop Tunnels** buttons ([more info](/secure-connections/sauce-connect/proxy-tunnels/#from-the-tunnels-page)).<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Stop" width="800"/>


## More Information

* [Sauce School | Sauce Connect Proxy Course](https://training.saucelabs.com/sauceconnect/)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Basic Configuration](/secure-connections/sauce-connect/setup-configuration/basic-setup/)
* [Setting Sauce Labs Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/)
* [Uploading and Managing Mobile Apps in Sauce Labs](/mobile-apps/app-storage)
