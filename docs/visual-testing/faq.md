---
id: faq
title: Sauce Visual Testing FAQ
sidebar_label: FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Is Sauce Visual's image comparison pixel-based or DOM-based?

The current implementation is Pixel-based only.

### Does Sauce Visual support "ignore regions"?

Yes, "ignore regions" are supported. Currently, you can define these regions in code by specifying the locator of a Web Element or by setting the coordinates of a rectangle.

```java
  // This rectangular area would be ignored, no  pixel
  // changes will be diffed in this zone.
  IgnoreRegion ignoreRegion = new IgnoreRegion(200,200,100,100);
```

### Can I integrate this into CI/CD testing?

Yes, Sauce Visual is 100% API-based and natively utilizes the same tools as the rest of the Sauce product line. When integrating Visual testing into your scripts, you can execute them just like any other scripts.

### What languages/frameworks will be supported at launch?

Sauce Visual will support the following languages/frameworks at launch: Selenium/Appium/Cypress, WebDriverIO, Java JUnit/TestNG, and JavaScript. You can find examples of some of these at [https://github.com/saucelabs/visual-examples](https://github.com/saucelabs/visual-examples).

### What subsequent languages/frameworks will be supported?

Support for additional languages/frameworks will be determined based on demand. Frameworks like Playwright, TestCafe, XCUIT, Espresso, etc., are currently under consideration. Contributions are encouraged. Check out the [examples project](https://github.com/saucelabs/visual-examples). If you create your own public library or binding, feel free to add another example to that project.

### When will it support "my favorite framework"?

The support for any framework depends on the client-side implementation using the underlying API. If you require an SDK, submit a new idea at [Productboard](https://portal.productboard.com/sauceprod/2-sauce-labs-portal/tabs/4-under-consideration/submit-idea).

### How to use Sauce Visual behing a Proxy?

When using Sauce Visual, the client libraries need to connect with Sauce Labs APIs. This connection is essential for uploading snapshots of your application and performing visual difference analysis. If your computer is set up to access the internet through a proxy, you will need to configure an environment variable named `HTTPS_PROXY`. This setup is required to ensure that Sauce Visual can communicate with Sauce Labs APIs through your proxy.

#### Setting the `HTTPS_PROXY` Environment Variable

1. **Identify your proxy URL**: This URL is typically provided by your organization's IT department. It could look like one of these examples:
    - `http://myorgproxy:3128`
    - `http://user:pass@myorgproxy:3128` (if authentication is required)
    - `socks://username:password@myorgsocksproxy.com:9050` (for SOCKS proxy)

2. **Configure the environment variable**:
    - **On Windows**:
      - Open the Start Search, type in "env", and choose "Edit the system environment variables".
      - In the System Properties window, click the "Environment Variables..." button.
      - Under "System variables", click "New..." to create a new variable.
      - Enter `HTTPS_PROXY` as the variable name and your proxy URL as the value.
      - Click OK to save and exit.
    - **On macOS/Linux**:
      - Open a terminal.
      - Use the export command to set the variable. For example:
        
        ```bash
        export HTTPS_PROXY=http://myorgproxy:3128
        ```

      - To make this change permanent, add the export command to your shell's profile script (e.g., `.bash_profile` or `.bashrc`).

3. **Run your Sauce Visual job**: After setting the `HTTPS_PROXY` variable, you can proceed to run your Sauce Visual tests as usual.
---

This version is designed to be easily understood by a broad audience, including those who might not be deeply technical, and it covers steps for different operating systems to ensure wide accessibility.