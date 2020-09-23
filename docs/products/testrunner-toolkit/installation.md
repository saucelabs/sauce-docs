---
id: installation
title: Testrunner Installation
sidebar_label: Installation
---

Sauce Labs Testrunner Toolkit is a containerized testing solution that simplifies user setup, speeds up test execution time and supports native Javascript frameworks like [Puppeteer](https://developers.google.com/web/tools/puppeteer), [Playwright](https://playwright.dev/), and [TestCafe](https://devexpress.github.io/testcafe/) for running end-to-end web tests with [Sauce Labs](https://saucelabs.com/).

## What You'll Need

* A [Sauce Labs](https://saucelabs.com/) account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* [Docker](https://docs.docker.com/get-docker/) installed
* Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g. `docker info` works in your terminal)


## Installing Testrunner Toolkit

There are multiple ways to install the Sauce Labs Testrunner Toolkit (colloquially known as `saucectl`):

* Use [NPM](https://www.npmjs.com/)
    ```bash
    npm i -g saucectl
    ```
* Use our one line installer via command line tools such as [cURL]():
    ```bash
    curl -L https://saucelabs.github.io/saucectl/install | bash
    ```
  
If you would like to inspect the content of our one line installer, download it, have a look, and execute it:
```bash
curl -fsSL -o get_saucectl.sh https://saucelabs.github.io/saucectl/install \
chmod 700 get_saucectl.sh \
./get_saucectl.sh
```

## Connecting to Sauce Labs

You need to retrieve your Sauce Labs `username` and `accessKey` in order post your test results. To retireve your Sauce Labs account credentials navigate to [Account > User Settings](https://app.saucelabs.com/user-settings).

Sauce Labs recommends as a best practice to set your account credentials as environment variables like so:

```bash
SAUCE_USERNAME='valid.username'
SAUCE_ACCESS_KEY='valid.key'
```

For specific instructions on how to set environment variables visit, the following links:
* [Set Environment Variables with Windows 10](https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/) 
* [Set Environment Variables with MacOS](https://apple.stackexchange.com/questions/106778/how-do-i-set-environment-variables-on-os-x)
* [Set Environment Variables with Linux](https://askubuntu.com/questions/58814/how-do-i-add-environment-variables)

> 
> If you are using a cloud CI/CD tool, we strongly suggest protecting these values through secrets or context variables.
>

___