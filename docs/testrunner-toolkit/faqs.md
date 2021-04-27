---
id: faqs
title: Testrunner FAQs
sidebar_label: FAQs
---

Below are list of frequently asked questions regarding some of the business and technical use cases surrounding the Testrunner Toolkit.

## How Does Testrunner Toolkit Work?
Native JavaScript testing is achieved through the combination of Sauce Labs, Jest, and the
JavaScript framework of your choice. In the current beta, the toolkit supports:

* [Puppeteer](https://github.com/puppeteer/puppeteer)
* [Playwright](https://github.com/microsoft/playwright)
* [TestCafe](https://github.com/DevExpress/testcafe)
* [Cypress](https://github.com/cypress-io/cypress)

This approach gives you the power and expressiveness of different test frameworks with the dashboards, infrastructure, and analytics of [Sauce Labs](https://saucelabs.com/).

The specific framework you want to use to for testing should be based on the types of tests you
need to run and the environment in which you are running them. In this beta you will be able to
run tests in your existing CI pipeline and benefit from the low latency.

When tests are completed, logs, results, and videos will be uploaded to Sauce Labs to your account. After that, you can review, share, and analyze those results just as you would from any other test executed on Sauce Labs.

To learn more about:

* Jest, visit [https://jestjs.io/](https://jestjs.io/)
* The Google Puppeteer project, visit [https://developers.google.com/web/tools/puppeteer](https://developers.google.com/web/tools/puppeteer)
* The Microsoft Playwright project, visit [https://github.com/microsoft/playwright](https://github.com/microsoft/playwright)
* TestCafe, visit [https://devexpress.github.io/testcafe/](https://devexpress.github.io/testcafe/)
* Cypress, visit [https://github.com/cypress-io/cypress](https://github.com/cypress-io/cypress)

## Where are the Docker Images and Can I Inspect Them?

All images are hosted on Docker Hub.

* [Base image](https://hub.docker.com/r/saucelabs/testrunner-image/tags)
is called `testrunner`. It contains the tooling necessary to record videos, VNC etc. Plus Chrome, and a Firefox version.

* [Base image + Playwright](https://hub.docker.com/r/saucelabs/stt-playwright-jest-node/tags)
contains saucectl with different versions of Playwright.

* [Base image + Puppeteer](https://hub.docker.com/r/saucelabs/stt-puppeteer-jest-node/tags)
contains saucectl with different versions of Puppeteer.

* [Base image + TestCafe](https://hub.docker.com/r/saucelabs/stt-testcafe-node/tags)
contains saucectl with different versions of TestCafe.

* [Base image + Cypress](https://hub.docker.com/r/saucelabs/stt-cypress-mocha-node/tags) contains saucectl with different versions of Cypress.

## Are There any Test Code Samples?
Yes! You can find them here: [Automation Framework Examples](testrunner-toolkit/running-tests.md#automation-framework-examples).

## How Do I Use This in my Pipeline?
The GitHub repository includes CI/CD examples of `saucectl` using:
* [GitHub Actions Workflows](https://help.github.com/en/actions)
* [CircleCI Pipelines](https://circleci.com/docs/2.0/configuration-reference/)

## How Do I Use a Proxy ?

If you need to go through a proxy server, you can set it through the following variables.
- `HTTP_PROXY`: Proxy to use to access HTTP websites
- `HTTPS_PROXY`: Proxy to use to access HTTPS websites

SauceCtl reaches Sauce Labs infrastructure to get latest docker image available or upload the test package to Sauce Cloud.
When running in docker-mode, the docker container needs to access the tested website and Sauce Labs to upload results.

Therefore, you may be required to set twice the proxy settings.


``` title= "Example: Windows Powershell"
PS> $Env:HTTP_PROXY=http://my.proxy.org:3128/
PS> $Env:HTTPS_PROXY=http://my.proxy.org:3128/
PS> saucectl run -e HTTP_PROXY=${Env:HTTP_PROXY} -e HTTPS_PROXY=${Env:HTTPS_PROXY}
```

Example (Linux/MacOS):
```
$> export HTTP_PROXY=http://my.proxy.org:3128/
$> export HTTPS_PROXY=http://my.proxy.org:3128/
$> saucectl run -e HTTP_PROXY=${HTTP_PROXY} -e HTTPS_PROXY=${HTTPS_PROXY}
```


## What is the maximum execution time of TestCafe tests?

Execution time for TestCafe tests is limited to a maximum of 30 minutes. If the limit is exceeded, the test terminates and Sauce Control uploads assets (videos, screenshots, logs, etc..) to the Sauce Labs platform.

Consider breaking up longer TestCafe tests to optimize performance and ensure you do not exceed this time limit.
