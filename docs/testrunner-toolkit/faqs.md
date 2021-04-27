---
id: faqs
title: Sauce Control FAQs
sidebar_label: FAQs
---

Below are list of frequently asked questions regarding some of the business and technical use cases surrounding Sauce Control.

## How Does Sauce Control Work?

Native testing is achieved through the combination of Sauce Labs, Jest, and the framework of your choice, giving you the power and expressiveness of different test frameworks with the dashboards, infrastructure, and analytics of [Sauce Labs](https://saucelabs.com/).

The specific framework you use for testing should be based on the types of tests you
need to run and the environment in which you are running them. Sauce Control also supports
running tests in your existing CI pipeline to benefit from low latency.

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
is called `testrunner`. It contains the tooling necessary to record videos, VNC etc., plus Chrome, and a Firefox version.
* [Base image + Playwright](https://hub.docker.com/r/saucelabs/stt-playwright-jest-node/tags)
contains `saucectl` with different versions of Playwright.
* [Base image + Puppeteer](https://hub.docker.com/r/saucelabs/stt-puppeteer-jest-node/tags)
contains `saucectl` with different versions of Puppeteer.
* [Base image + TestCafe](https://hub.docker.com/r/saucelabs/stt-testcafe-node/tags)
contains `saucectl` with different versions of TestCafe.
* [Base image + Cypress](https://hub.docker.com/r/saucelabs/stt-cypress-mocha-node/tags) contains `saucectl` with different versions of Cypress.

## Are There any Test Code Samples?

Yes! You can find them here: [Automation Framework Examples](testrunner-toolkit/running-tests.md#automation-framework-examples).
