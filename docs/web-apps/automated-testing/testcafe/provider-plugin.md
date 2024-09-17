---
id: provider-plugin
title: Provider Plugin
sidebar_label: Provider Plugin
---

# TestCafe Provider Plugin

TestCafe can also connect to Sauce Labs _remotely_ via our [Provider Plugin](https://github.com/saucelabs/testcafe-provider).

Unlike [saucectl](/dev/cli/saucectl/), which transmits and runs your TestCafe
tests directly on a Sauce Labs VM, the Sauce Labs [Provider Plugin](https://github.com/saucelabs/testcafe-provider)
allows TestCafe to connect to a browser session remotely, allowing for a greater
project setup flexibility.

We recommend that you give both approaches a try and pick the one that suits
your use case best.

🚧 This plugin is currently in beta. We caution against using it in production
pipelines. We do seek feedback and encourage you to report any issues you
encounter.

## Requirements

- Node.js 20+
- [TestCafe Sauce Labs Browser Provider Plugin](https://github.com/saucelabs/testcafe-provider)
- [TestCafe Sauce Labs Reporter](https://github.com/saucelabs/testcafe-reporter)
- [Sauce Connect](/secure-connections/sauce-connect-5)

## Install

Install the provider plugin and the reporter:
```shell
npm install testcafe-browser-provider-sauce
npm install testcafe-reporter-saucelabs
```

## Start Tunnel

A tunnel is necessary for the remote browser to establish a connection back to
TestCafe.

```shell
sc run -u <your-user> -k <your-access-key> --region us-west --tunnel-name <your-tunnel>
```

For more details, please follow our [Sauce Connect Quickstart](/secure-connections/sauce-connect-5/quickstart/)
instructions.

## Run TestCafe

Set the necessary environment variables.

```shell
export SAUCE_USERNAME=your-user
export SAUCE_ACCESS_KEY=your-access-key
export SAUCE_TUNNEL_NAME=your-tunnel
```

Verify that the provider has been properly installed and is able to talk to
Sauce Labs by asking TestCafe to print out a list of supported remote browsers:
```shell
testcafe -b sauce
```

You are ready to run tests, using a browser alias that the previous command
returned:
```shell
testcafe "sauce:chrome@latest:Windows 11" path/to/test/file.js --reporter saucelabs
```

## Limitations

- TestCafe may incorrectly report the platform of a remote browser session, such
as mistaking Windows 11 for Windows 10.
