---
id: web-automated-faq
title: Automated Testing FAQ
sidebar_label: FAQ
---


## General

#### **Can I use any version of Cypress/TestCafe/Playwright?**

No, only certain versions of Cypress/TestCafe/Playwright can be used on Sauce Labs. The list of
supported versions for each framework can be found in our docs:

* [Using Cypress](https://docs.saucelabs.com/web-apps/automated-testing/cypress/#supported-testing-platforms)
* [Using Playwright](https://docs.saucelabs.com/web-apps/automated-testing/playwright/#supported-testing-platforms)
* [Using TestCafe](https://docs.saucelabs.com/web-apps/automated-testing/testcafe/#supported-testing-platforms)

#### **Can I use any version of Node.js to run my tests?**

No, the version of Node.js used is fixed for each framework version. It will generally be the current
LTS version at the time of release. A full list can be found in our docs:

* [Using Cypress](https://docs.saucelabs.com/web-apps/automated-testing/cypress/#supported-testing-platforms)
* [Using Playwright](https://docs.saucelabs.com/web-apps/automated-testing/playwright/#supported-testing-platforms)
* [Using TestCafe](https://docs.saucelabs.com/web-apps/automated-testing/testcafe/#supported-testing-platforms)

#### **My tests rely on private npm packages. How do I include them in my tests?**

If your registry is externally accessible, you can include it in your saucectl configuration 
under the `registries` setting:

```yaml
npm:
  registries:
    - url: https://registry.npmjs.org
    - url: https://private.registry
      scope: "@scope"
      authToken: secretToken
```

If your registry is only accessible inside your corporate network, you'll have to use 
Sauce Connect to allow the Sauce Labs cloud to securely connect to your registry. See the
[Sauce Connect](https://docs.saucelabs.com/secure-connections/sauce-connect-5/) docs for more
details.

#### **When I download test artifacts after the test completes, why don't I see all of the expected artifacts?**

Due to a current limitation of the platform, nested assets are stored **flat** in Sauce Labs. 
That means an artifact like `__assets__/log_dir/log.txt` is stored and downloaded simply as
`log.txt`.
