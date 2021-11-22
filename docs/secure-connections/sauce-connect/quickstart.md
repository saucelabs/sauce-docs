---
id: quickstart
title: Sauce Connect Proxy Quickstart Guide
sidebar_label: Quickstart
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get up and running with a Sauce Connect Proxy tunnel in just a few minutes by following the instructions below.

## Start a Tunnel

1. If you haven't yet, [download and install the latest version of the Sauce Connect Proxy client](/secure-connections/sauce-connect/installation). In this example, we'll download it to our home directory.
2. Open your local terminal and navigate to the bin folder, where the Sauce Connect Proxy client is located.<br/><img src={useBaseUrl('img/sauce-connect/scp-bin.png')} alt="Sauce Connect download file contents" width="350" />

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

3. Log in to Sauce Labs.
4. Go to the **TUNNELS** page.<br/><img src={useBaseUrl('img/sauce-connect/tunnelsPage.png')} alt="Sauce Connect Proxy Tunnels page" width="200"/>
5. Skip to **STEP 3: Configure & Authenticate**, then copy the code snippet.<br/><img src={useBaseUrl('img/sauce-connect/configureAuth.png')} alt="Sauce Connect Proxy Tunnels page code snippet" width="500"/>
6. Paste the entire snippet into your local terminal. Optionally, you can rename your tunnel by replacing the variable after the [`--tunnel-name`](/dev/cli/sauce-connect-proxy/#--tunnel-name) flag.
  ```bash
  ./sc -u {SAUCE_USERNAME} --k {SAUCE_ACCESS_KEY} --region us-west --tunnel-name {TUNNEL_NAME}
  ```
7. Run the snippet. This will authenticate you, connects you to a Sauce Labs Data Center, assign an ID for your tunnel, and start your tunnel.

## Verify Your Tunnel

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

With your tunnel up and running, try running a Live Cross-Browser Test on a local instance of your website. Without Sauce Connect, you'd get an error message if you try to run a local test.

9. Go back to Sauce Labs and click **LIVE** > **Cross Browser** > **Desktop** tab.
10. Select desired configurations:
    * In the **URL** field, input the URL for your local website under test (e.g., `http://localhost:3000`).
    * Click the **Sauce Connect Proxy** dropdown and select the name of the tunnel you've launched.
    * Choose a browser, resolution, and OS from the **BROWSER SELECTION**, **RESOLUTION**, and **OS VERSION** settings.
    * Click **Run Test** to launch your test.
11. Use your mouse cursor and keyboard to interact with your website under test. For more details, see [Live Desktop Test Interface](/web-apps/live-testing/live-cross-browser-testing/#live-desktop-test-interface). When you're done testing, move to the next step to learn how to stop a tunnel.

## Stop Your Tunnel

12. To stop your tunnel, choose from one of the below options:
    * [Stop a Tunnel from the Command Line](/secure-connections/sauce-connect/proxy-tunnels/#to-stop-a-single-tunnel-ctrlc)
    * [Stop a Tunnel from Sauce Labs](/secure-connections/sauce-connect/proxy-tunnels/#from-sauce-labs)


## More Information

* [Sauce School | Sauce Connect Proxy Course](https://training.saucelabs.com/sauceconnect/)
* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy/)
* [Sauce Connect Proxy Configurations](/secure-connections/sauce-connect/setup-configuration/basic-setup/)
* [Recommended: Set Your Username and Access Key as Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/)
