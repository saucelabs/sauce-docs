---
id: quickstart
title: Sauce Connect Proxy Quickstart Guide
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect is required to run a local test on an app or website located behind a firewall. Get up and running with a basic Sauce Connect Proxy tunnel in minutes using the steps below.


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* The localhost URL for your site or app under test.

:::caution Always use the latest version
Using older Sauce Connect versions may impact your ability to launch a tunnel or cause other technical issues. Download the latest version [here](/secure-connections/sauce-connect/installation/).
:::


## Start Tunnel

1. Download and extract the Sauce Connect Proxy client folder on your machine: [Mac](https://saucelabs.com/downloads/sc-4.7.1-osx.zip) | [Windows](https://saucelabs.com/downloads/sc-4.7.1-win32.zip) | [Linux](https://saucelabs.com/downloads/sc-4.7.1-linux.tar.gz).
2. Move the folder to your machine's [home directory](https://en.wikipedia.org/wiki/Home_directory).
3. Open your terminal and navigate to the Sauce Connect Proxy client bin directory.
  <Tabs
    defaultValue="Mac/Linux"
    values={[
      {label: 'Mac/Linux', value: 'Mac/Linux'},
      {label: 'Windows', value: 'Windows'},
    ]}>
  <TabItem value="Mac/Linux">

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
4. Log in to Sauce Labs.
5. Go to the **Tunnels** page.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsPage.png')} alt="Sauce Connect Proxy Tunnels page" width="450"/>
6. Go to **STEP 3: Configure & Authenticate** and copy the code snippet.<br/><img src={useBaseUrl('img/sauce-connect/configureAuth.png')} alt="Sauce Connect Proxy Tunnels page snippet" width="500"/>
<details><summary>What is this?</summary>
This snippet contains your authentication credentials (username and access key), selects a Sauce Labs Data Center, and applies a name to your tunnel. Optionally, you can rename your tunnel by replacing the value after the <code>--tunnel-name</code> flag.
</details>
7. From your terminal, paste the snippet and run it. This will launch the tunnel.

## Verify Connection

To confirm your tunnel is up, look for the confirmation message in your terminal:<br/><img src={useBaseUrl('img/sauce-connect/cli-tunnel-confirmation.png')} alt="Sauce Connect Tunnel Success" width="350"/>

Alternatively, you can check your list of active tunnels on the **Tunnels** page:<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>


## Run a Live Local Test

With your tunnel up and running, try doing a Live <!--or Automated--> local test.

<Tabs
    defaultValue="Cross-Browser"
    values={[
      {label: 'Cross-Browser', value: 'Cross-Browser'},
      {label: 'Mobile Browser', value: 'Mobile Browser'},
      {label: 'Mobile App', value: 'Mobile App'},
    ]}>

<TabItem value="Cross-Browser">

1. From your terminal or IDE, launch a local instance of your website as you normally would.
2. From Sauce Labs, click **Live** > **Cross Browser** > **Desktop**.
3. In the **URL** field, enter your website's local URL (e.g., `http://localhost:3000`).
4. From the **Sauce Connect Proxy** dropdown, select your tunnel name.
5. Select your desired browser configuration.
6. Click **Start Test** to launch your live test in Sauce Labs.

</TabItem>
<TabItem value="Mobile Browser">

1. From your terminal or IDE, launch a local instance of your site as you normally would.
2. From Sauce Labs, click **Live** > **Cross Browser** > **Mobile Virtual** or **Mobile Real**.
3. Enter the local **URL** for your local website under test (e.g., `http://localhost:3000`)
4. From the **Sauce Connect Proxy** dropdown, select your tunnel name.
5. Select your desired **Mobile Virtual** or **Mobile Real** device configuration.
6. Click **Start Test** to launch your live test in Sauce Labs.

</TabItem>
<TabItem value="Mobile App">

1. From Sauce Labs, click **Live** > **Mobile App**.
2. Click **Upload App** to upload your iOS or Android mobile app file to Sauce Labs.
3. Find your app in the apps list, hover your mouse over it, and click **Choose Device**.
4. To test your app on a real device, click **Mobile Real**. To test it on an emulator or simulator, click **Mobile Virtual**.
5. Select your desired device configuration, including your tunnel name in the **Sauce Connect Proxy** dropdown.
6. Click **Start Test** to launch your live test in Sauce Labs.

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

When you've finished testing, you can stop your tunnel from the terminal where Sauce Connect is running by entering Ctrl+C.<br/><img src={useBaseUrl('img/sauce-connect/cli-tunnel-stop.png')} alt="Sauce Connect Proxy Tunnels page snippet" width="500"/>

Alternatively, you can go to the **Tunnels** page and click one of the **Stop Tunnels** buttons.<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Stop" width="800"/>


## More Information

### Related Links
* [Uploading and Managing Mobile Apps in Sauce Labs](/mobile-apps/app-storage)
* [Live Testing Web Apps](/web-apps/live-testing/live-cross-browser-testing/)
* [Live Testing Mobile Apps](/mobile-apps/live-testing/live-mobile-app-testing/)
* [Setting Sauce Labs Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/)

### Learning Resources
* [Sauce School | Sauce Connect Proxy Course](https://training.saucelabs.com/sauceconnect/)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Basic Configuration](/secure-connections/sauce-connect/setup-configuration/basic-setup/)
