---
id: logger
title: Using the Test Logger
sidebar_label: Logger
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Logger tool helps with API Call recording by facilitating complete captures of HTTP requests and responses (including the request and response bodies). Once this data is captured, it is sent to the Logger section in API Testing tool for further inspections.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).


## Running the Logger
1. From your Sauce Labs API Testing account, go to a Project.
2. Create a webhook for that project by clicking **Webhooks** > **Create hook**.
3. Copy Hook URL and add `/logger` at the end as in:
`https://{user}:{key}@api.us-west-1.saucelabs.com/api-testing/rest/v4/{hook_id}/logger`.
4. From your CLI, launch our API Mocking tool, along with the `--logger` switch, followed by the URL mentioned in the previous step:
   ```bash
  docker run -v "$(pwd)/myspec:/specs" \
  -p 5000:5000 quay.io/saucelabs/piestry \
  -u /specs/myspec.yaml \
  --logger https://{user}:{key}@api.us-west-1.saucelabs.com/api-testing/rest/v4/{hook_id}/logger
  ```
5. Make a call to any mocking endpoint (i.e., `curl localhost:5000/api/v1/release-notes`).
6. Open the **Logger** section.
  <img src={useBaseUrl('img/api-fortress/2021/09/logger.png')} alt="Logger UI"/>
7. See the data related to the captured request.
8. Inspect the Request and Response.
9. From here, you can see the call in the HTTP Client (by clicking the **Open** button) or generate a test (by clicking the **Generate Test** button).

<img src={useBaseUrl('img/api-fortress/2021/09/logger1.png')} alt="Logger UI"/>

<img src={useBaseUrl('img/api-fortress/2021/09/logger2.png')} alt="Logger UI"/>

<img src={useBaseUrl('img/api-fortress/2021/09/logger3.png')} alt="Logger UI"/>


## More Information

The Logger is the first tool in an upcoming larger suite of API debugging tools.
