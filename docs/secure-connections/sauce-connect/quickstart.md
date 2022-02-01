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

Get up and running with a basic Sauce Connect Proxy tunnel in minutes using the steps below.


## What You'll Need

* Have the [Sauce Connect Proxy client](/secure-connections/sauce-connect/installation) downloaded to your local machine.


## Start Tunnel

These instructions assume that Sauce Connect Proxy is downloaded to your machine's home directory (i.e., ~/sc-4.7.1-osx).

1. Open your local terminal and navigate to the bin folder, which contains the Sauce Connect Proxy client.
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
  cd sc-4.7.1-win32/bin
  ```
  </TabItem>
  </Tabs>

  <img src={useBaseUrl('img/sauce-connect/scp-bin.png')} alt="Sauce Connect download file contents" width="350" />

2. Log in to Sauce Labs.
3. Go to the **Tunnels** page.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsPage.png')} alt="Sauce Connect Proxy Tunnels page" width="200"/>
4. On the **Tunnels** page, skip to **STEP 3: Configure & Authenticate** and copy the run command. This snippet contains your [username](/dev/cli/sauce-connect-proxy/#--user), [access key](/dev/cli/sauce-connect-proxy/#--api-key), [data center](/dev/cli/sauce-connect-proxy/#--region), and a [tunnel name](/dev/cli/sauce-connect-proxy/#--tunnel-identifier).<br/><img src={useBaseUrl('img/sauce-connect/configureAuth.png')} alt="Sauce Connect Proxy Tunnels page snippet" width="500"/>
5. Paste the entire snippet into your local terminal. Optionally, you can rename your tunnel by replacing the value after the [`--tunnel-name`](/dev/cli/sauce-connect-proxy/#--tunnel-identifier) flag.
6. Run the snippet. This will authenticate you, connect you to a Sauce Labs Data Center, assign an ID for your tunnel, and start your tunnel.

## Verify Tunnel Success

7. To verify that your tunnel is up and running, there are two places you can check: the [CLI](/secure-connections/sauce-connect/proxy-tunnels/#command-line-interface) or the [**Tunnels** page](/secure-connections/sauce-connect/proxy-tunnels/#tunnels-page).


## Run Local Test

Try running a Live local test (either Cross-Browser or Mobile App) through your tunnel. Sauce Connect is required to run a test on an app or website located on your local machine or behind a firewall.

<Tabs
    defaultValue="Web"
    values={[
      {label: 'Web', value: 'Web'},
      {label: 'Mobile Browser', value: 'Mobile Browser'},
      {label: 'Mobile App', value: 'Mobile App'},
    ]}>

<TabItem value="Web">

8. From Sauce Labs, click **Live** > **Cross Browser** > **Desktop**.
9. Enter the URL for your local website under test (e.g., `http://localhost:3000`), select your tunnel from the **Sauce Connect Proxy** dropdown, and choose your [desired browser configuration](/web-apps/live-testing/live-cross-browser-testing/#testing-on-a-desktop-browser).
10. Click **Start Test** to launch your test, then use your mouse cursor and keyboard to [interact with your website under test](/web-apps/live-testing/live-cross-browser-testing/#live-desktop-test-interface).

</TabItem>
<TabItem value="Mobile Browser">

8. From Sauce Labs, click **Live** > **Cross Browser** > **Mobile Virtual** or **Mobile Real**.
9. Enter the URL for your local website under test (e.g., `http://localhost:3000`), select your tunnel from the **Sauce Connect Proxy** dropdown, and choose your [**Mobile Virtual**](/web-apps/live-testing/live-cross-browser-testing/#virtual-device) or [**Mobile Real** configuration](/web-apps/live-testing/live-cross-browser-testing/#real-device).
10. Click **Start Test** to launch your test, then use your mouse cursor and keyboard to [interact with your site under test](/web-apps/live-testing/live-cross-browser-testing/#testing-on-a-mobile-browser).

</TabItem>
<TabItem value="Mobile App">

8. Upload your native mobile app file to [Sauce Storage](/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app) or to another location where our emulators, simulators, and real devices can connect to it (see [Uploading via REST API](/mobile-apps/app-storage/#uploading-apps-via-rest-api)).
9. [Choose your device](/mobile-apps/live-testing/live-mobile-app-testing/#selecting-a-device), select your desired [**Mobile Virtual**](/mobile-apps/live-testing/live-mobile-app-testing/#virtual-devices) or [**Mobile Real**](/mobile-apps/live-testing/live-mobile-app-testing/#real-devices) configuration, and select your tunnel from the **Sauce Connect Proxy** dropdown.
10. Click **Start Test** to launch your test, then use your mouse cursor and keyboard to [interact with your app under test](/mobile-apps/live-testing/live-mobile-app-testing/#live-test-interface).

</TabItem>
</Tabs>

## Stop Tunnel

11. To stop your tunnel when you're finished testing, you can do so from the [CLI](/secure-connections/sauce-connect/proxy-tunnels/#to-stop-a-single-tunnel-ctrlc) or [Tunnels Page](/secure-connections/sauce-connect/proxy-tunnels/#from-the-tunnels-page).


## More Information

* [Sauce School | Sauce Connect Proxy Course](https://training.saucelabs.com/sauceconnect/)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Basic Configuration](/secure-connections/sauce-connect/setup-configuration/basic-setup/)
* [Setting Your Username and Access Key as Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/)
