---
id: sauce-connect
title: Using Sauce Connect Proxy for API Testing
sidebar_label: Sauce Connect Proxy
description: Get a Sauce Connect Proxy tunnel up and running quickly for your API tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your APIs exist behind a firewall on your private network, you'll need to use our Sauce Connect Proxy solution to open up a secure trusted connection between your network and Sauce Labs.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).
* Have the Sauce Connect Proxy client on your local machine ([download here](/secure-connections/sauce-connect/installation/)).
* If you're new to Sauce Connect Proxy, check out the links under [More Information](#more-information).

## Starting a Tunnel for API Testing

1. First, you'll need to create a .yaml configuration file on your local machine.
   * Copy and paste the sample template below into a text editor and save it as a .yaml file. In this example, we'll name it **api-config.yaml**.
     ```yaml title="Sample Template: API Config YAML File"
     ---
     rest-url: "https://api.us-west-4-i3er.saucelabs.com/rest/v1"
     user: "SAUCE_USERNAME"
     api-key: "SAUCE_ACCESS_KEY"
     vm-version: "v2alpha"
     tunnel-identifier: "YOUR-TUNNEL-NAME"
     ```
   * Substitute the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` placeholders with your [credentials](https://app.saucelabs.com/user-settings).
   * Although not required, we recommend naming your Sauce Connect Proxy tunnel. Just use the [`tunnel-identifier`](/dev/cli/sauce-connect-proxy/#--tunnel-name-or---tunnel-identifier) property to define your tunnel name.
2. Save your .yaml file to the same folder as your Sauce Connect Proxy client. <br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-folders.png')} alt="API Testing Sauce Connect folder structure" width="500" />
3. Open your CLI terminal and navigate to the folder where you have Sauce Connect Proxy saved. If it's in the home directory, you'd run:
  ```bash
  cd sc-4.7.1-osx
  ```
4. Start your tunnel by issuing:
  ```bash
  bin/sc -c api-config.yaml
  ```

:::tip
<details><summary><small>If successful, you'll see a response like this, indicating that you may start your tests.</small></summary>

```bash title="Success Response"

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
:::

5. Log in to Sauce Labs.
6. Launch Sauce Labs API Testing by clicking **API TESTING** > **Get Started**.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="600" />
7. From the **API TESTING** homepage > **Projects** tab, then click on your project name.
8. Under **Run Configuration**, click the Sauce Connect Proxy tunnels dropdown menu (which defaults to **No Tunnel**), then click the name of your tunnel.<br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-nav1.png')} alt="API Testing Sauce Connect Nav" width="600"/>

Now you're set up to run your API tests through a Sauce Connect Proxy tunnel.


## More information

* [Using Sauce Connect Proxy](/secure-connections/sauce-connect)
* [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements/)
* [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/)
