---
id: faq
title: Visual Testing FAQ
sidebar_label: FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## General

### Can I revert a recently accepted snapshot?
Yes. After accepting a snapshot, you can revert its acceptance before running another build:
1. Go to the **State Detail** page.
2. Click on the **Accepted** status dropdown
3. Select **Revert**.<br/>
   <img src={useBaseUrl('img/visual/revertAccepted.png')} alt="Revert accepted screenshot" width="150" />

### How do I show lazy-loaded content in my screenshot?
You need to trigger the lazy-loaded content so that it loads and displays in your web page. How to do this depends on how the lazy-loaded content is triggered to load.

For example, if content is loaded based on scrolling down to a particular section of your web page, then you will need to scroll to that section using JavaScript:

```js
window.scroll(0, 1000);
```

### Why is my screenshot not full-page?
Screener captures a full-page screenshot by default in all browsers. But the height of the full-page screenshot is based on the scrollable height of the main document body.

If the body is not scrollable, then the screenshot captured will appear to be cut off. For example, if the "overflow" style on the body is set to "hidden", then the body cannot be scrolled.

#### Are there workarounds?
Yes, but the workaround depends on how the website CSS was built and understanding what is causing the body to not be scrollable.

If the overflow style on the body is "hidden", then the client could execute the following JS in an Execute Script command in the test to set body overflow to `'auto'` before capturing a snapshot:

```js
document.body.style.overflow = 'auto'
```

### Does Screener capture iframes?
Yes; it is a Visual E2E feature. Look for [`iframes`](/visual/e2e-testing/commands-options) and [`iframesOptions`](/visual/e2e-testing/commands-options).



## Visual E2E

### What Sauce Labs browsers are supported by Visual E2E?
Visual E2E is unified with Sauce VMs, and uses Sauce browsers exclusively. For a detailed list, see [Visual E2E Supported Browsers and Operation Systems](https://docs.saucelabs.com/visual/e2e-testing/supported-browsers).

### How do I test smaller mobile web viewport sizes for responsive design testing?
This can be done by setting [`viewportSize` in your `sauce:visual` capabilities](/visual/e2e-testing/commands-options/#saucevisual-capability-options).

### How do I run functional tests only after integrating Visual E2E?
If you want to run their functional tests only, you do not need to modify any of your visual integration code. Just change your WebDriver endpoint from `hub.screener.io` to `ondemand.saucelabs.com`.



## Component Testing

### What Storybook versions are supported?
screener-storybook supports Storybook version 3.0 to 6.x (latest).

### Why is Screener not picking up data from my CI build?
For screener-storybook and screener-runner tests run within a CI tool, Screener will automatically set build, branch, and commit options if you are using one of the following CI tools:

* Jenkins
* CircleCI
* Travis CI
* Visual Studio Team Services
* Codeship
* GitLab CI
* Drone
* Bitbucket Pipelines
* Semaphore
* Buildkite

This works by pulling data from environment variables in the CI job.
<details><summary><strong>Click here to view sample code containing expected Environment variables</strong></summary>

```js reference title="Screener Runner"
https://github.com/screener-io/screener-runner/blob/master/src/ci.js
```

</details>

As an example, Jenkins looks for the following environment variables: `JENKINS_URL` or `JENKINS_HOME`, and `BUILD NUMBER`:
```js reference title="Screener Runner"
https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L23
```

CircleCI looks for the following environment variables: `CI`, `CIRCLECI`, `CIRCLE_BUILD_NUM`:
```js reference title="Screener Runner"
https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L31
```

If these environment variables are NOT accessible in the build, the reason is most likely that the CI is running the test job inside a separate container, and the variables need to be passed into the container.

### How do I add Screener Steps to Storybook Component Story Format (CSF) stories?
Screener Storybook supports version 3.0 to 6.x (latest) and [CSF](https://storybook.js.org/docs/react/api/csf)-formatted stories. For more information, see [Three ways to add Screener Steps to a React Component in Storybook to CSF](https://gist.github.com/screener-io/dfbd4b9aa5284e555ea83c936fc0b2ba).

### How do I add Screener Steps to my Storybook project that uses React Hooks?
React Hooks messes up using the Screener component because it executes its magic at runtime. So to use Screener Steps with React Hooks, you need to use Storybook Decorators to wrap the component story. Here is an example script: [Storybook + Screener Steps with Hooks](https://gist.github.com/screener-io/ada0e3c51137c907ba80728ad7fab23b).

### Does Sauce Visual interact with knobs within stories in Storybook and test as needed?
Screener-storybook does not automatically interact with knobs, as there would be potentially an infinite number of permutations. but if there's a UI state that the user wants to get to using knobs, then this is possible with Screener Steps.

In the Storybook knobs add-on, there's a knobs UI where the user can copy a query string for the knobs configuration. They can copy this querystring, and use it with Screener Steps `executeScript` method to reproduce those knobs values.

Click on the copy button in the lower right, then paste into an editor, then copy only the query-string portion (after the `?`) and paste that into a Screener step.

```js title="Example"
<Screener steps={new Steps()
  .executeScript('window.location.href = "?path=/story/button&knob-Label=works"')
  .snapshot('Knobs')
  .end()
}>
```

### How do I resolve `Error: Storybook object not found`?

1. Run test with `--debug` flag enabled. For example: `npm run test-storybook -- --debug`.
2. After running with debug flag, reach out to Sauce Labs Support Team and provide them with your log output.

If the following logs are found, it means that Puppeteer could not be launched because of missing dependencies:
  ```txt
  Error: Failed to launch chrome!
  /node-packages/kanan_ui/node_modules/puppeteer/.local-chromium/linux-662092/chrome-linux/chrome: error while loading shared libraries: libX11-xcb.so.1: cannot open shared object file: No such file or directory
  ```

The [Troubleshooting for Puppeteer documentation](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md) contains info on how to resolve this for various environments, such as TravisCI and CircleCI.

For information on setting up Puppeteer in GitLab, see [How to set up Chrome Headless on GitLab CI with Puppeteer & Docker](https://ali-dev.medium.com/how-to-setup-chrome-headless-on-gitlab-ci-with-puppeteer-docker-fbb562cbaee1), which suggests installing all dependencies with the following command:

```bash
apt-get install gconf-service libasound2 libatk1.0–0 libc6 \
libcairo2 libcups2 libdbus-1–3 libexpat1 libfontconfig1 \
libgcc1 libgconf-2–4 libgdk-pixbuf2.0–0 libglib2.0–0 libgtk-3–0 \
libnspr4 libpango-1.0–0 libpangocairo-1.0–0 libstdc++6 libx11–6 \
libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 \
libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \
libxtst6 ca-certificates fonts-liberation libappindicator1 \
libnss3 lsb-release xdg-utils wget -y
```
