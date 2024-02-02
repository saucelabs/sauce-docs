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

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- The localhost URL for your site or app under test.

## Start Tunnel

1. [Download the Sauce Connect Proxy client](/secure-connections/sauce-connect/installation/#downloading-sauce-connect-proxy) on your machine.
   :::caution Always use the latest version
   Using older Sauce Connect versions may impact your ability to launch a tunnel or cause other technical issues.
   :::
2. Extract the .zip file and move the folder to your machine's [home directory](https://en.wikipedia.org/wiki/Home_directory).
3. Open your terminal and navigate to the Sauce Connect Proxy client bin directory.
   <Tabs
     defaultValue="Linux"
     values={[
       {label: 'Linux', value: 'Linux'},
       {label: 'Windows', value: 'Windows'},
       {label: 'Mac', value: 'Mac'},
     ]}>

   <TabItem value="Linux">

   ```bash
   cd sc-4.9.2-linux/bin
   ```

   </TabItem>
   <TabItem value="Windows">

   ```bash
   cd C:\sc-4.9.2-win32\bin
   ```

   </TabItem>
   <TabItem value="Mac">

   ```bash
   cd sc-4.9.1-osx/bin
   ```

   </TabItem>
   </Tabs>
4. Run the command

```bash
sc -u <your-user> -k <your access key> --region <us-west|eu-central> --tunnel-name your_tunnel_name
```

## Verify Connection

To confirm your tunnel is up, look for the confirmation message in your terminal:<br/><img src={useBaseUrl('img/sauce-connect/cli-tunnel-confirmation.png')} alt="Sauce Connect Tunnel Success" width="350"/>

Alternatively, you can check your list of active tunnels on the **Tunnel Proxies** page:<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>

## Run Test

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

## Stop Tunnel

When you've finished testing, you can stop your tunnel from the terminal where Sauce Connect is running by entering Ctrl+C.<br/><img src={useBaseUrl('img/sauce-connect/cli-tunnel-stop.png')} alt="Sauce Connect Proxy Tunnels page snippet" width="500"/>

Alternatively, you can go to the **Tunnel Proxies** page and click one of the **Stop Tunnels** buttons.<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Stop" width="800"/>

## More Information

- [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
- [Setting Sauce Labs Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/)
- [Uploading and Managing Mobile Apps in Sauce Labs](/mobile-apps/app-storage)
- [Live Testing Web Apps](/web-apps/live-testing/live-cross-browser-testing/)
- [Live Testing Mobile Apps](/mobile-apps/live-testing/live-mobile-app-testing/)
