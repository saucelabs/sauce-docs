---
id: quickstart
title: Sauce Connect Proxy Quickstart Guide
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Always use the latest version
Using older Sauce Connect versions may impact your ability to launch a tunnel or cause other technical issues. Download the latest version [here](/secure-connections/sauce-connect/installation/).
:::

Get up and running with a basic Sauce Connect Proxy tunnel in minutes using the steps below.

## What You'll Need

* Have the [latest Sauce Connect Proxy client version](/secure-connections/sauce-connect/installation) downloaded to your local machine's home directory.

## Start Tunnel

1. Open your local terminal and navigate to the bin folder, which contains the Sauce Connect Proxy client.<br/><img src={useBaseUrl('img/sauce-connect/scp-bin.png')} alt="Sauce Connect download file contents" width="350" />

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
  cd sc-4.7.1-win32/bin
  ```
  </TabItem>
  </Tabs>

2. Log in to Sauce Labs.
3. Go to the **Tunnels** page.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsPage.png')} alt="Sauce Connect Proxy Tunnels page" width="200"/>
4. On the **Tunnels** page, skip to **STEP 3: Configure & Authenticate** and copy the run command. This snippet contains your [username](/dev/cli/sauce-connect-proxy/#--user), [access key](/dev/cli/sauce-connect-proxy/#--api-key), [data center](/dev/cli/sauce-connect-proxy/#--region), and a [tunnel name](/dev/cli/sauce-connect-proxy/#--tunnel-name).<br/><img src={useBaseUrl('img/sauce-connect/configureAuth.png')} alt="Sauce Connect Proxy Tunnels page snippet" width="500"/>
5. Paste the entire snippet into your local terminal. Optionally, you can rename your tunnel by replacing the variable after the [`--tunnel-name`](/dev/cli/sauce-connect-proxy/#--tunnel-name) flag.
6. Run the snippet. This will authenticate you, connects you to a Sauce Labs Data Center, assign an ID for your tunnel, and start your tunnel.

## Verify Tunnel Success

7. To verify that your tunnel is up and running, there are two places you can check:
   * [Command Line](/secure-connections/sauce-connect/proxy-tunnels/#from-the-command-line-1)
   * [TUNNELS Page](/secure-connections/sauce-connect/proxy-tunnels/#from-the-tunnels-page-1)

#### From the TUNNELS Page
Look for the **Active Tunnel** confirmation.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>

## Run Local Test

Try running a Live Cross-Browser or Mobile App local test through your tunnel. Sauce Connect is required to run a test on app or website that's on your local machine or behind a firewall.

<Tabs
    defaultValue="Web"
    values={[
      {label: 'Web', value: 'Web'},
      {label: 'Mobile Browser', value: 'Mobile Browser'},
      {label: 'Mobile App', value: 'Mobile App'},
    ]}>

<TabItem value="Web">

9. Go back to Sauce Labs and click **LIVE** > **Cross Browser** > **Desktop** tab.
10. Select desired configuration:
    * In the **URL** field, input the URL for your local website under test (e.g., `http://localhost:3000`).
    * Click the **Sauce Connect Proxy** dropdown and select the name of the tunnel you've launched.
    * Choose a **BROWSER SELECTION**, **RESOLUTION**, and **OS VERSION** from those dropdown menus.
    * Click **Start Test** to launch your test.
11. Use your mouse cursor and keyboard to interact with your website under test. For more details, see [Live Desktop Test Interface](/web-apps/live-testing/live-cross-browser-testing/#live-desktop-test-interface). When you're done testing, move to the next step to learn how to stop a tunnel.

</TabItem>
<TabItem value="Mobile Browser">

9. Go back to Sauce Labs and click **LIVE** > **Cross Browser** > **Mobile Virtual** or **Mobile Real** tab.
10. Select desired configuration:
    * In the **URL** field, input the URL for your local website under test (e.g., `http://localhost:3000`).
    * Click the **Sauce Connect Proxy** dropdown and select the name of the tunnel you've launched.
    * For **Mobile Virtual**, choose a **MANUFACTURER**, **DEVICE**, and **OS VERSION** from those dropdown menus. For **Mobile Real**, click a device from the menu.
    * Click **Start Test** to launch your test.
11. Use your mouse cursor and keyboard to interact with your website under test. For more details, see [Testing on a Mobile Browser](/web-apps/live-testing/live-cross-browser-testing/#testing-on-a-mobile-browser). When you're done testing, move to the next step to learn how to stop a tunnel.

</TabItem>
<TabItem value="Mobile App">

9. If you want to test a native mobile app, you'll need to [upload it to Sauce Storage](/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app) or to [another location](/mobile-apps/app-storage/#uploading-apps-via-rest-api) where our emulators, simulators, and real devices can connect to it.
10. Hover your mouse over the app line item and click **Choose Device**, then select desired configuration:
    * Click the **Sauce Connect Proxy** dropdown and select the name of the tunnel you've launched.
    * For **Mobile Virtual**, choose a **MANUFACTURER**, **DEVICE**, and **OS VERSION** from those dropdown menus. For **Mobile Real**, click a device from the menu.
    * Click **Start Test** to launch your test.
11. Use your mouse cursor and keyboard to interact with your website under test. For more details, see [Live Mobile App Test Interface](/mobile-apps/live-testing/live-mobile-app-testing/#live-test-interface). When you're done testing, move to the next step to learn how to stop a tunnel.

</TabItem>
</Tabs>

## Stop Tunnel

12. To stop your tunnel, choose from one of the below options:
    * [Command Line (Using Ctrl+C)](/secure-connections/sauce-connect/proxy-tunnels/#to-stop-a-single-tunnel-ctrlc)
    * [TUNNELS Page (Using Stop button)](/secure-connections/sauce-connect/proxy-tunnels/#to-stop-a-single-tunnel)


## More Information

* [Sauce School | Sauce Connect Proxy Course](https://training.saucelabs.com/sauceconnect/)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Configurations](/secure-connections/sauce-connect/setup-configuration/basic-setup/)
* [Recommended: Set Your Username and Access Key as Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/)
