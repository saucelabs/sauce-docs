---
id: logger
title: Using the Test Logger
sidebar_label: Logger
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Logger tool helps with API call recording by facilitating complete captures of HTTP requests and responses (including the request and response bodies). Once this data is captured, it is sent to the API Testing **Logger** section for further inspections.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Running the Logger

### Access Project
1. Log in to Sauce Labs, then click **API Testing** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Go into a Project.

### Create Webhook
3. Create a webhook for your Project by clicking **Webhooks** > **Create Hook**.
4. Enter a **Hook Name** (**Hook Description** is optional), then click **Save**.<br/><img src={useBaseUrl('img/api-fortress/2021/04/sampleHook.png')} alt="sample webhook details" width="450" />
5. Copy the **Hook URL**. Your Sauce Labs username, Sauce API Testing endpoint, and `{hook_id}` will populate automatically. For security reasons, you'll need to add your own access key. Then append the URL with `/logger`.
   ```bash
   https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/logger
   ```

### Launch Piestry via CLI
6. From your CLI, launch [Piestry, our API Mocking server tool](/api-testing/mocking), by running the following code. The last line will be the `--logger` switch, followed by the URL from the previous step:
   ```bash
  docker run -v "$(pwd)/myspec:/specs" \
  -p 5000:5000 quay.io/saucelabs/piestry \
  -u /specs/myspec.yaml \
  --logger https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/logger
  ```
7. In your CLI, make a call to any mocking endpoint (i.e., `curl localhost:5000/api/v1/release-notes`).

### Review Results
8. From Sauce Labs API Testing, open the **Logger** section.
  <img src={useBaseUrl('img/api-fortress/2021/09/logger.png')} alt="Logger UI"/>
9. Inspect the data related to the captured request (e.g., Request and Response).
10. From here, you can see the call in the HTTP Client by clicking the **Open** button. Optionally, you can generate a test here by clicking the **Generate Test** button.

<img src={useBaseUrl('img/api-fortress/2021/09/logger1.png')} alt="Logger UI"/>

<img src={useBaseUrl('img/api-fortress/2021/09/logger2.png')} alt="Logger UI"/>

<img src={useBaseUrl('img/api-fortress/2021/09/logger3.png')} alt="Logger UI"/>


## More Information

:::info Coming Soon
The Logger is the first tool in an upcoming larger suite of API debugging tools.
:::
