---
id: logger
title: Using the Test Logger
sidebar_label: Logger
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Logger tool helps with API call recording by facilitating complete captures of HTTP requests and responses (including the request and response bodies). Once this data is captured, it is sent to the **Logger** section in API Testing tool for further inspections.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).


## Running the Logger
1. From your Sauce Labs API Testing account, go to a Project.
2. Create a webhook for that project by clicking **Webhooks** > **Create hook** > then entering a name and description for it.
3. Copy the Hook URL and append it with `/logger`. Your Sauce Labs username, Sauce API Testing endpoint, and `hook_id` will populate automatically. For security reasons, you'll need to add your own access key.
   ```bash
   https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/logger
   ```
4. From your CLI, launch [Piestry, our API Mocking server tool](/api-testing/mocking), by running the following code. The last line will be the `--logger` switch, followed by the URL from the previous step:
   ```bash
  docker run -v "$(pwd)/myspec:/specs" \
  -p 5000:5000 quay.io/saucelabs/piestry \
  -u /specs/myspec.yaml \
  --logger https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/logger
  ```
5. In your CLI, make a call to any mocking endpoint (i.e., `curl localhost:5000/api/v1/release-notes`).
6. From Sauce Labs API Testing, open the **Logger** section.
  <img src={useBaseUrl('img/api-fortress/2021/09/logger.png')} alt="Logger UI"/>
7. See the data related to the captured request.
8. Inspect the Request and Response.
9. From here, you can see the call in the HTTP Client (by clicking the **Open** button) or generate a test (by clicking the **Generate Test** button).

<img src={useBaseUrl('img/api-fortress/2021/09/logger1.png')} alt="Logger UI"/>

<img src={useBaseUrl('img/api-fortress/2021/09/logger2.png')} alt="Logger UI"/>

<img src={useBaseUrl('img/api-fortress/2021/09/logger3.png')} alt="Logger UI"/>


## More Information

The Logger is the first tool in an upcoming larger suite of API debugging tools.
