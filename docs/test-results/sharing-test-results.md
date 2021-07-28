---
id: sharing-test-results
title: Sharing Test Results
sidebar_label: Sharing Test Results
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once your test has run and generated a **Test Details** page, you have several options for sharing a link to that page with others.

1. In Sauce Labs, in the left panel, click **LIVE** or **AUTOMATED**, and then click **Test Results**.
2. On the **Test Results** page, click a test in the list to view the test details.
3. In the **Visibility** dropdown, select a sharing option for the test results.

| Option            | Explanation                                                                                                                                                                                                                               |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Public            | Everyone will be able to view the test results, and they may be listed on public web pages and indexed by search engines.                                                                                                                 |
| Public Restricted | Everyone will be able to view the test results, but only you will have log access. By restricting access to the raw Selenium log and the job log, you can prevent sensitive information, such as passwords, from being visible to others. |
| Private           | Only you will be able to view the test results.                                                                                                                                                                                           |
| Team              | All members of your team will be able to view the test results.                                                                                                                                                                           |
| Share             | Only people who have the link to the test will be able to view the test results.                                                                                                                                                          |


:::tip Manually Share a Link
You can also manually build links to Test Results pages and set authentication for accessing them using the methods described in Building Sharable Links to Test Results. To manually share the test results, copy and send the URL of the Test Results page.
:::

## Building Sharable Links
You can generate a sharable link to your test results that limits who can view the results by requiring a login or authentication (auth) token. These links will allow recipients to view the results of that test, but the they will not appear on their dashboard.

You can also change the visibility of a test (e.g., Public, Private, or Team) directly on the **Test Results** page.

:::warning Does Not Work with Legacy RDC Platform
The following information does not currently work with the legacy RDC platform (TestObject).
:::

When generating a shareable link, you'll need to know your specific data center. All examples on this page use the US West 1 data center endpoint, app.saucelabs.com. If you're using a different data center, such as EU Central 1, your link should be edited accordingly:

```
https://app.eu-central-1.saucelabs.com/tests/YOUR_TEST_ID).
```

See [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints) for more info.

### Linking to Tests that Require a Login to View
You can create links to your tests that will only work if you're logged in with the account that ran the test.

In Selenium, when a client requests a new browser session, the server returns a session ID, which is used to identify that session throughout the test. The session ID is stored as a member variable of the instantiated Selenium object and named sessionId or session_id, depending on the client library. Sauce uses that session ID as the test ID for accessing test results.

To directly access a specific job, you will first need to note the session ID locally, usually by writing it to a log file. You can then use it to create a URL with the following format and replace `YOUR_TEST_ID` with the session ID:

```js
https://app.saucelabs.com/tests/YOUR_TEST_ID
```

As previously mentioned, all examples on this page use the US West 1 data center endpoint. If you're using a different data center, such as EU Central 1, your link should be edited accordingly:

```js
https://app.eu-central-1.saucelabs.com/tests/YOUR_TEST_ID
```

See [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints) for more info.

### Linking to Tests that Don't Require a Login to View

You can also create sharable links that are based on authentication (auth) tokens, meaning the recipient won't have to log in and use your credentials.

Auth tokens are generated on a per-test basis and grant viewers access using an hmac-based algorithm. You can also find hmac implementations for different programming languages.

The digest algorithm to use is MD5. The message and key used to generate the token should be the following:

* Key: `SAUCE_USERNAME`:`SAUCE_ACCESS_KEY`
* Message: `YOUR_TEST_ID`

#### Example - Python
The example below demonstrates how to generate the token in a Python interpreter for a test with the `id`: `5f9fef27854ca50a3c132ce331cb6034`:

```python
>>> import hmac
>>> from hashlib import md5
>>> hmac.new("SAUCE_USERNAME:SAUCE_ACCESS_KEY", "5f9fef27854ca50a3c132ce331cb6034", md5).hexdigest()
Once the auth token has been obtained, you can use it to build a link in this format: https://app.saucelabs.com/tests/YOUR_TEST_ID?auth=AUTH_TOKEN.
```

#### Example - Java
```java
package com.saucelabs.demo;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import static java.nio.charset.StandardCharsets.US_ASCII;

public class SauceShareableLink {

  private static final String SAUCE_USERNAME = System.getenv("SAUCE_USERNAME");
  private static final String SAUCE_ACCESS_KEY = System.getenv("SAUCE_ACCESS_KEY");
  private static final String KEY = String.format("%s:%s", SAUCE_USERNAME, SAUCE_ACCESS_KEY);
  private static final String SAUCE_TESTS_URL = "https://app.eu-central-1.saucelabs.com/tests";

  public static String getShareableLink(String sauceJobId) throws NoSuchAlgorithmException, InvalidKeyException {
    SecretKeySpec sks = new SecretKeySpec(KEY.getBytes(US_ASCII), "HmacMD5");
    Mac mac = Mac.getInstance("HmacMD5");
    mac.init(sks);
    byte[] result = mac.doFinal(sauceJobId.getBytes(US_ASCII));
    StringBuilder hash = new StringBuilder();
    for (byte b : result) {
      String hex = Integer.toHexString(0xFF & b);
      if (hex.length() == 1) {
        hash.append('0');
      }
      hash.append(hex);
    }
    String digest = hash.toString();
    return String.format("%s/%s?auth=%s", SAUCE_TESTS_URL, sauceJobId, digest);
  }

  public static void main(String[] args) {
    try {
      String sauceJobId = "c5eb67f00e124ba0a46f2b7869bd418c";
      String shareableLink = SauceShareableLink.getShareableLink(sauceJobId);
      System.out.println(shareableLink);
    } catch (NoSuchAlgorithmException | InvalidKeyException e) {
      // Handle appropriately according to your use case
      e.printStackTrace();
    }
  }
}
```

#### Example - Node.js

```js
const crypto = require('crypto');
const sessionId = 'f65a1ee87a77410189aba40f48ac1223';
const addDate = process.argv.includes('addDate');
const date = new Date();
const addedDays = date.setDate(date.getDate());
const newDate = (new Date(addedDays)).toISOString().slice(0,10);
const dateSecret = addDate ? `:${newDate}` : '';
const secret = `${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}${dateSecret}`;
const token = crypto
.createHmac('md5', secret)
.update(sessionId)
.digest('hex');
const usUrl = `https://app.saucelabs.com/tests/${sessionId}?auth=${token}`;
const euUrl = `https://app.eu-central-1.saucelabs.com/tests/${sessionId}?auth=${token}`;
console.log('usUrl = ', usUrl);
console.log('euUrl = ', euUrl);

```

## Support for Secondary Accounts
If you want to authenticate as another user, just prefix the auth token with your user name, followed by a colon.

For example:

```js
https://app.saucelabs.com/tests/YOUR_TEST_ID?auth=SAUCE_USERNAME:AUTH_TOKEN.
```

### Setting Your Test Links to Expire

You can extend the links generated with authentication tokens to make them work temporarily for one day (the day the URL is generated) or a specific hour during that day, based on the parameters that you set.

During the `hmac` generation, set the key like this: `SAUCE_USERNAME`:`SAUCE_ACCESS_KEY`:`YOUR_DATE_RANGE`.

The date range can take two formats: `YYYY-MM-DD-HH` and `YYYY-MM-DD`. These should be set in UTC time and will only work during the date or hour you set.

## Embedding Test Results in HTML Pages

### Authentication Required

Both of these configurations will only work for browsers logged in using your account, but you can use authentication tokens to make this work for anonymous viewers. For more information about creating authentication tokens, see [Building Sharable Links](/test-results/sharing-test-results).

```js
https://app.saucelabs.com/video-embed/YOUR_JOB_ID.js?auth=AUTH_TOKEN
```

### Embedding Pages for EU DC and Headless DC

To embed the page for EU DC test, you need to use the `app.eu-central-1.saucelabs.com` domain.

```js
https://app.[eu-central-1|us-east-1].saucelabs.com/video-embed/YOUR_JOB_ID.js?auth=AUTH_TOKEN
```

```js
https://app.saucelabs.com/video-embed/YOUR_JOB_ID.js?auth=AUTH_TOKEN
```

### Embedding Pages for EU DC and Headless DC

```js
https://app.saucelabs.com/job-embed/YOUR_JOB_ID.js
```

```js
https://app.[eu-central-1|us-east-1].saucelabs.com/video-embed/YOUR_JOB_ID.js?auth=AUTH_TOKEN
```

### Embedding Full Test Pages
You can embed test pages in CI test results or other test reports. Using the following format, add the HTML to any page where you need to embed test results, replacing YOUR_JOB_ID with the ID of the job you want:

```js
https://app.saucelabs.com/job-embed/YOUR_JOB_ID.js
```

### Embedding the Video Player
You can also embed videos in CI test results or other test reports. Using the format below, add the HTML to any page where you want to embed job videos, replacing YOUR_JOB_ID with the ID of the job you want:

```js
https://app.saucelabs.com/video-embed/YOUR_JOB_ID.js
```

### Optional Parameters
By default, an embedded test iframe has a width of 1024px and a height of 768px. If you want to change the iframe size, use the "width" and "height" query parameters.

For example:

```js
https://app.saucelabs.com/video-embed/YOUR_JOB_ID.js?width=100&height=100
```
