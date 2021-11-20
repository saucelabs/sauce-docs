---
id: sauce-connect
title: Using Sauce Connect Proxy Tunnels for API Tests
sidebar_label: Sauce Connect Proxy Tunnels
description: Get a Sauce Connect Proxy tunnel up and running quickly for your API tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your APIs exist behind a firewall on your private network, you'll need to use our Sauce Connect Proxy solution to open up a secure trusted connection between your network and Sauce Labs.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username](https://app.saucelabs.com/user-settings) and [Access Key](https://app.saucelabs.com/user-settings).
* Have the Sauce Connect Proxy client [installed on your local machine](/secure-connections/sauce-connect/installation/).
  * If you're new to Sauce Connect Proxy, check out the links under [More Information](#more-information).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Start an API-Specific Tunnel

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
   * Substitute the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` placeholders with your own [credentials](https://app.saucelabs.com/user-settings).
   * Although not required, we strongly recommend naming your Sauce Connect Proxy tunnel using [`tunnel-identifier`](/dev/cli/sauce-connect-proxy/#--tunnel-identifier) to define your tunnel name.
2. Save your .yaml file to the same folder as your Sauce Connect Proxy client. <br/>
  <img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-folders.png')} alt="API Testing Sauce Connect folder structure" width="350" />
3. Open your CLI terminal and navigate to the folder where you have Sauce Connect Proxy saved. If it's in the home directory, you'd run:
  ```bash
  cd sc-4.7.1-osx
  ```
4. Start your tunnel by issuing:
  ```bash
  bin/sc -c api-config.yaml
  ```
5. If the tunnel was launched successfully, you'll see a [CLI response like this](/secure-connections/sauce-connect/quickstart/#verifying-a-tunnel), indicating that you can start your tests.

## Run an API Test with a Tunnel

6. Now that you're set up to run API tests through a Sauce Connect Proxy tunnel, follow the directions under [Quickstart](/api-testing/quickstart/) to Create a Test (using your local API endpoint), Send a Request, Generate Test.
7. Tunnels can be selected in all of the places where you can run tests: from the **HTTP Client**, **Schedule** tab, and the **Compose** tab (Composer). Under **Run Configuration**, click the Sauce Connect Proxy tunnels dropdown menu (which defaults to **No Tunnel**), then click the name of your tunnel.<br/><img src={useBaseUrl('img/api-fortress/2021/09/sauceconnect-nav1.png')} alt="API Testing Sauce Connect Nav" width="200"/>
8. Now you can [run your test](/api-testing/quickstart/#run-test).


## More Information

* [Sauce Connect Proxy homepage](/secure-connections/sauce-connect)
* [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/)
