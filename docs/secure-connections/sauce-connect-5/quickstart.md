---
id: quickstart
title: Sauce Connect Proxy 5 Quickstart Guide
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy is essential for securely testing applications or websites that are hosted behind a firewall or on a local network.
This guide walks you through the fastest way to get up and running with a basic Sauce Connect 5 tunnel, so you can start testing in just a few minutes.

## Prerequisites

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- If you haven't already, make sure you can access the website or mobile app that you'll be testing from the Sauce Connect Proxy host.
- Sauce Connect Proxy 5 client installed on your machine. See the [installation instructions](/secure-connections/sauce-connect-5/installation/)

## Getting Started

### Run Sauce Connect Proxy

1. Make sure that the directory containing the `sc` binary (or `sauce-connect.exe`, for Windows) is in the `$PATH`. Otherwise, you will have to specify the path to the binary in the command line(e.g., `/path/to/sc`).
2. Define environment variables containing sensitive data: your username and access key

```bash
SAUCE_USERNAME=<username>
SAUCE_ACCESS_KEY=<your access key>
```

3. Start Sauce Connect Proxy

<Tabs
  defaultValue="Mac/Linux"
  values={[
    {label: 'Mac/Linux', value: 'Mac/Linux'},
    {label: 'Windows', value: 'Windows'},
  ]}>

  <TabItem value="Mac/Linux">

```bash
sc run --tunnel-name $SAUCE_TUNNEL_NAME --region <us-west|us-east|eu-central>
```

  </TabItem>
  <TabItem value="Windows">

```bash
sauce-connect.exe run --tunnel-name $SAUCE_TUNNEL_NAME --region <us-west|us-east|eu-central>
```

  </TabItem>
  </Tabs>

### Verify Connection

To confirm your tunnel is up, look for the confirmation message in your terminal:

```bash
Sauce Connect is up, you may start your tests
```

Alternatively, you can check your list of active tunnels on the **Tunnel Proxies** page:<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>

### Run Test

With your tunnel up and running, try doing a Live <!--or Automated--> local test.

<Tabs
  defaultValue="Cross-Browser"
  values={[
    {label: 'Cross-Browser', value: 'Cross-Browser'},
    {label: 'Mobile Browser', value: 'Mobile Browser'},
    {label: 'Mobile App', value: 'Mobile App'},
  ]}>

<TabItem value="Cross-Browser">

1. From Sauce Labs, click **Live** > **Cross Browser** > **Desktop**.
2. In the **URL** field, enter your website's local URL (e.g., `http://localhost:3000`).
3. From the **Sauce Connect Proxy** dropdown, select your tunnel name.
4. Select your desired browser configuration.
5. Click **Start Test** to launch your live test in Sauce Labs.

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

### Stop Tunnel

When you've finished testing, you can stop your tunnel from the terminal where Sauce Connect is running by entering Ctrl+C.
If there are jobs that use the Sauce Connect Proxy connection, it will wait for them to finish.

```bash
2024/01/23 15:19:33.152509 [control] [INFO] Sauce Connect is up, you may start your tests
^C
2024/01/23 15:29:12.617959 [control] [INFO] waiting for 1 active job(s) to finish, timeout: 3h0m0s
2024/01/23 15:29:27.622295 [control] [INFO] waiting for 1 active job(s) to finish, timeout: 2h59m45s
2024/01/23 15:29:42.600553 [control] [INFO] waiting for 1 active job(s) to finish, timeout: 2h59m30s
2024/01/23 15:30:00.924115 [control] [INFO] tunnel was shutdown gracefully
```

Alternatively, you can go to the **Tunnel Proxies** page and click one of the **Stop Tunnels** buttons.<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Stop" width="800"/>

## Best Practices

- **Security**: Store credentials securely via [config file](/secure-connections/sauce-connect-5/guides/configuration/#config-file) or [environment variables](/secure-connections/sauce-connect-5/guides/configuration/#environment-variables).
- **Monitoring**: See [monitoring guide](/secure-connections/sauce-connect-5/guides/monitoring).
- **Readiness Check**: See [readiness check guide](/secure-connections/sauce-connect-5/guides/readiness-checks/).

## More Information

- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/)
- [Uploading and Managing Mobile Apps in Sauce Labs](/mobile-apps/app-storage)
- [Live Testing Web Apps](/web-apps/live-testing/live-cross-browser-testing/)
- [Live Testing Mobile Apps](/mobile-apps/live-testing/live-mobile-app-testing/)
