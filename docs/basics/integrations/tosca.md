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

<p><small><span class="highlight beta">BETA</span></small></p>

[Tosca's Tricentis™](https://www.tricentis.com/) is one of the world's leading enterprising enterprise software testing platforms. Tricentis is "totally automated, fully codeless, and intelligently driven by AI". The Sauce Labs and Tosca Tricentis integrations allows you to run your Tricentis tests on the Sauce Labs platform—giving you access to all of the [features that the Sauce Labs continuous testing cloud](https://saucelabs.com/platform) has to offer.


Below is a guide to set up the Sauce Labs integration. This integration allows you to run your Tricentis tests on our platform.

## What You'll Need

* [A Sauce Labs Account](https://saucelabs.com/sign-up)
* [A Tosca Tricentis™ Account](https://www.tricentis.com/software-testing-tool-trial-demo/)


## Configure the Commander View

* In the Tricentis™ UI, navigate to **Event View** > **Commander View**.
* Set the `Url` to Sauce Lab's data center endpoint: `https://ondemand.sauclabs.com`

  :::note Data Center Location
  Selecting the appropriate data center in which to run your tests is important. Please read the following [documentation](https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints) to learn more about setting your tests configuration options to the correct data center location.
  :::

If you're using a proxy for your tests you must also point the upstream address to the Sauce Labs data center endpoint.


## Test Events

Open the **Test Events** and navigate to your **Test Execution Lists**

### Test Configuration Options

In the **Test Configuration** panel of the **Test Events** section we will set the following options:

* `BrowserName` : `string`
* `BrowserVersion` : `string`
* `PlatformName` : `string`
* `PlatformVersion` : `string`
* `SauceUsername` : `string`
* `SauceAccessKey` : `string`


## Run the Test

To run the test: TBD

:::warning Note on Scaling
Consult your licensing tiers for both Tosca and Sauce Labs to ensure your concurrency is aligned.
:::

## Security

If you wish to encrypt or run your tests using our secure tunnel, you must add the following option: `tunnelIdentifier`. For more information please refer to our [Secure Connection](https://docs.saucelabs.com/secure-connections/sauce-connect) documentation.

## Running Tests in Parallel

TBD