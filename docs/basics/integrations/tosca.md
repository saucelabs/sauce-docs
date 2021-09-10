---
id: tosca
title: "Tosca Tricentis™ Integration"
sidebar_label: "Tosca Tricentis"
keywords:
- tosca
- tricentis
- quickstart
- how-to
---

<p><small><span class="highlight beta">BETA</span> <span class="highlight sauceRed">EXPERIMENTAL</span></small></p>

[Tosca's Tricentis™](https://www.tricentis.com/) is one of the world's leading enterprising enterprise software testing platforms. Tricentis is "totally automated, fully codeless, and intelligently driven by AI". The Sauce Labs and Tosca Tricentis integrations allows you to run your Tricentis tests on the Sauce Labs platform—giving you access to all of the [features that the Sauce Labs continuous testing cloud](https://saucelabs.com/platform) has to offer.

Below is a guide to set up the Sauce Labs integration. This integration allows you to run your Tricentis tests on our platform.

:::warning This integration is experimental!
Blah blah blah [important link](#)
:::

## What You'll Need

* [A Sauce Labs Account](https://saucelabs.com/sign-up)
* [A Tosca Tricentis™ Account](https://www.tricentis.com/software-testing-tool-trial-demo/)
* [A Sauce Connect tunnel (for encrypted test runs)](#encrypted-test-runs)

## Start a VM with the Tosca Agent
To start a virtual machine with a Tosca Agent, you need to send a `POST` request to the Sauce Labs `ondemand` endpoint using an HTTP client (e.g. `curl` or Postman). First, you must pass your [Sauce Labs authentication credentials](https://app.saucelabs.com/user-settings) using Basic Auth. Then, your `POST` body request must contain the required settings:

* `platformName`: the operating system to run tests against (e.g. Windows 10)
* `browserName`: the browser(s) to run tests against (e.g. Chrome, Firefox, etc.)
* `browserVersion`: the browser version to run tests against
* Tosca settings: the Tosca server address, as well as the required licensing information (e.g. `license_user` and `license_password`)

The `ondemand` endpoints vary depending on your geographic location, for example below is the endpoint for the North American west coast:

```http request
https://ondemand.us-west-1.saucelabs.com/wd/hub
```

For further information regarding the `ondemand` endpoints, refer to the [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints/) page.

### Platform and Browser Support
The Sauce Labs Integration with Tricentis Tosca currently supports the following Tosca versions, as well as the respective platforms and browsers:

#### Tosca Version 13.3
| Platforms  | Browser Versions                                          |
|------------|-----------------------------------------------------------|
| Windows 10 | <ul><li>`googlecrhome`: 88, 87, 86</li> <li>`firefox`: 85, 84, 83</li>  <li>`edge`: 88, 87, 86</li></ul> |

### Sauce Labs Options

The Sauce Labs VMs also require specific test configuration options if you plan to use the W3C Webdriver protocol. These options vary depending on your test needs, and exist under the `sauce:option` capability.

:::info W3C Protocol
Read more about the `sauce:options` setting, and other test configuration options [here](/dev/test-configuration-options/#webdriver-w3c-capabilities--required).
:::

### Encrypted Test Runs

If you wish to encrypt or run your tests using a secure tunnel, you must add `tunnelIdentifier` in the `sauce:options` section of your `POST` request like in the example above.

For more information regarding the `tunnelIdentifier` option, please refer to the [Secure Connection](https://docs.saucelabs.com/secure-connections/sauce-connect) page.


### Example Request
Below is an example `POST` body request that starts a Sauce Labs VM with the Tosca Agent using `curl`, and passes session the information with a file called `tosca.json`:

```bash
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
-x POST -H "Content-Type: application/json" \
-d @../data/tosca.json \
https://ondemand.us-west-1.saucelabs.com/wd/hub
```

```json title="tosa.json"
{
  "capabilities": {
    "alwaysMatch": {
      "app": "sauce:test-batch.zip",
      "platformName": "Windows 10",
      "browserName": "googlechrome",
      "browserVersion": "88",
      "goog:chromeOptions": {
        "w3c": true
      },
      "sauce:options": {
        "name": "Testing for Tricentis preparation",
        "maxDuration": 10800,
        "idleTimeout": 9999,
        "commandTimeout": 600,
        "tunnelIdentifier": "my_tunnel_id",
        "framework": "tosca",
        "frameworkVersion": "1.7.1",
        "runnerVersion": "1.7.2",
        "testFile": "suiteName",
        "_batch": {
          "args": {
            "cloud_server_id": "xxxxx",
            "dex_server_url": "http://xxx/DistributionServerService/CommunicationService.svc",
            "license_password":"xxx",
            "license_user":"xxx"
          }
        }
      },
      "firstMatch":[{}]
    }
  }
}
```

## Configure Tricentis Tosca

Once the Sauce Labs VM starts with the Tosca agent, the next step is to configure Tosca. The general steps are as follows:

* As with any other distributed run in Tosca, Create a _TestEvent_ and link your desired _ExecutionList_
* **OperatingSystem/Browser/BrowserVersion** capabilities are set in the `POST` request for the **VM/Agent Machine**
* After right-clicking on **Configurations** to refresh the agents, you should see the agent machine in the list.
* Finally, right-click on the desired _TestEvent_ and then execute the test(s).

For detailed information about configuring Tosca for distributed test runs, please consult [the documentation](https://documentation.tricentis.com/tosca/1300/en/content/resources/webhelp/cover_web.htm).

:::caution Note on Scaling
Consult the licensing tiers for both Tosca and Sauce Labs to ensure your account concurrency is aligned with your testing requirements.
:::

## Tear Down the VM

To tear down the VM once the test(s) complete, use a `DELETE` HTTP request. You must use the same Sauce Labs Basic Auth credentials, and also the `sessionId` returned from the previous `POST` request:

```bash
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" -x DELETE \
https://ondemand.us-west-1.saucelabs.com/wd/hub/session/<sessionId>
```