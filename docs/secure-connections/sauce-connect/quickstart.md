---
id: quickstart
title: Sauce Connect Proxy Quickstart Guide
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get up and running with a Sauce Connect Proxy tunnel in just a few minutes by following the instructions below.

## Start Tunnel

1. If you haven't yet, [download the latest version of the Sauce Connect Proxy client](/secure-connections/sauce-connect/installation).
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
4. Go to the [**TUNNELS**](https://app.saucelabs.com/tunnels) page.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsPage.png')} alt="Sauce Connect Proxy Tunnels page" width="200"/>
5. Skip to **STEP 3: Configure & Authenticate** and copy the code snippet.<br/><img src={useBaseUrl('img/sauce-connect/configureAuth.png')} alt="Sauce Connect Proxy Tunnels page code snippet" width="500"/>
6. Paste the entire snippet into your local terminal. Although not required, we strongly recommend naming your tunnel using the `--tunnel-name` flag.
  ```bash
  ./sc -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY} --region us-west --tunnel-name {TUNNEL_NAME}
  ```
7. Run the snippet. This will authenticate you, connects you to a Sauce Labs Data Center, assign an ID for your tunnel, and start your tunnel.

## Verify Tunnel

8. To verify that your tunnel is up and running, there are two places you can check:

#### From the CLI
<details><summary><strong>Click here to expand</strong><br/>If successful, you'll see a confirmation response like this, indicating that you can start your tests.</summary>

   ```bash

                       ,,                    
                      .;,                    
                 ..,,::i:,,..                
              .:;i1111111111ii;,             
            .;11tttffLLLLLLLfft1i,           
            ;1tfffLLCCCCCCCCCCCL1i           
           ,i1ffLLCCCCCCCCCCCLLCti;          
           :i1fLCCCCCCCCCCCCCCCCti;          
            ;1tLLLCCCCCCCCCCCLLf1i   :;      
            .:;i11ttttttttttt11i;,  ,1.   ;:
                ..,::;iii::,,..     .;;,,;i,
                .,:;;iiii;;:,.       ;1;:,   
              :i1111tfLCft1111i:. .:ii,      
            ,i111i1CG80GC80ti111iii;,        
          ,i1ii11if00GGGC0GGi11i1:.          
        .i1:.;1i1it08GC0080Li11i1.           
      .,1i.  i1111itCLG0GCfi11111.           
    :;:;i;   :iii11iii111ii111ii;.           
    .    1:    .i1i11,  .i1ii1:.             
        :i.    ,1iii1:  ,1iii1;              
        .      :11111:  ,i1111;              
                .,,,.    .,,,.               


   Sauce Connect Proxy™ opens a secure connection between Sauce Labs and a locally hosted application.

     Find more information at: https://docs.saucelabs.com/dev/cli/sauce-connect-proxy

   Sauce Connect 4.7.1, build 5439 fb74241

   Sauce Connect runtime information:
   - Name: YOUR-TUNNEL-NAME
   - PID: 68102
   - PID file: /tmp/sc_client-YOUR-TUNNEL-NAME.pid
   - Log file: /var/folders/xj/9gxlps1566917q90pdb707cm0000gn/T/sc-YOUR-TUNNEL-NAME.log
   - SCProxy Port: 61602
   - Metric Port: None
   - Selenium listener: None
   - External proxy for REST API: None
   Please wait for 'you may start your tests' to start your tests: \
   Secure remote tunnel provisioned. Tunnel ID: 09313680b3ff433ebbb6bca5cb87919c

   Sauce Connect is up, you may start your tests.
   ```

</details>

#### From the TUNNELS Page
Look for the **Active Tunnel** confirmation.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsuccess-ui.png')} alt="Sauce Connect Tunnel Success" width="500"/>

## Run a Local Test

With your tunnel up and running, try running a Live Cross-Browser or Mobile App Test on a local instance of your website. Sauce Connect is required to run a local test (otherwise, you'll get an error message).

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

9. If you haven't yet, [upload your mobile app](/mobile-apps/live-testing/live-mobile-app-testing/#uploading-an-app).
10. Hover your mouse over the app line item and click **Choose Device**, then select desired configuration:
    * Click the **Sauce Connect Proxy** dropdown and select the name of the tunnel you've launched.
    * For **Mobile Virtual**, choose a **MANUFACTURER**, **DEVICE**, and **OS VERSION** from those dropdown menus. For **Mobile Real**, click a device from the menu.
    * Click **Start Test** to launch your test.
11. Use your mouse cursor and keyboard to interact with your website under test. For more details, see [Live Mobile App Test Interface](/mobile-apps/live-testing/live-mobile-app-testing/#live-test-interface). When you're done testing, move to the next step to learn how to stop a tunnel.

</TabItem>
</Tabs>

## Stopping a Tunnel

12. There are two ways to stop a tunnel:

#### From the CLI
Enter CTRL+C to terminate your tunnel.
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

#### From the TUNNELS Page
Click the **Stop** icon next to your tunnel.<br/><img src={useBaseUrl('img/sauce-connect/tunnelstop-ui.png')} alt="Sauce Connect Tunnel Success CLI" width="800"/>

## More Information

* [Sauce School | Sauce Connect Proxy Course](https://training.saucelabs.com/sauceconnect/)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Configurations](/secure-connections/sauce-connect/setup-configuration/basic-setup/)
