---
id: badges-browser-matrix
title: Status Badges and the Browser Matrix Widget
sidebar_label: Status Badges and the Browser Matrix Widget
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Status badges and the Sauce Labs browser matrix widget help you keep track of the status of your latest test runs. All you have to do is add either markdown or HTML code to your GitHub README or project site that references your Sauce Labs username and access key, and annotate your tests with the REST API.

Status Badges and the Browser Matrix
There are four status badges that correspond to the three states of a finished test: Passing, Failed, Error, and Unknown.

| Badge                                                                                | Status                                                                                                                                                  |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| <img src={useBaseUrl('img/test-results/browser-badges/passing.png')} alt="Passing"/> | __Passing__: All tests in the build passed                                                                                                              |
| <img src={useBaseUrl('img/test-results/browser-badges/failing.png')} alt="Failing"/> | __Failing__: There are failing tests in the build                                                                                                       |
| <img src={useBaseUrl('img/test-results/browser-badges/error.png')} alt="Error"/>     | __Error__: This status is set if the build errors out due to an internal server error (one or more sessions have crashed)                               |
| <img src={useBaseUrl('img/test-results/browser-badges/unknown.png')} alt="Unknown"/> | __Unknown__ This status is set if one or more jobs of the latest build haven't been reported as passed or failed. This state is equivalent to Finished. |


## Build Status Badge Examples

### Sauce Test Status Badge

To set up a Build Status Badge for your saucelabs test results, copy this markdown code into your GitHub README:

```jsx title="Markdown Example"
[![Sauce Test Status](https://app.saucelabs.com/buildstatus/SAUCE_USERNAME)](https://app.saucelabs.com/u/SAUCE_USERNAME)
```

```jsx title="HTML Example
<a href="https://app.saucelabs.com/u/SAUCE_USERNAME"><img src=https://app.saucelabs.com/buildstatus/SAUCE_USERNAME" alt= "Sauce Test Status"/></a>
```

__Output Example__:

<img src={useBaseUrl('img/test-results/browser-badges/sauce-passing.svg')} alt="Test Status"/>

### Browser Matrix Badge Example

To set up a Browser Matrix Badge for your saucelabs browser test results, copy this markdown code into your GitHub README:

```jsx title="Markdown Example"
[![Sauce Browser Matrix](https://app.saucelabs.com/browser-matrix/SAUCE_USERNAME)](https://app.saucelabs.com/u/SAUCE_USERNAME.svg)
```

```jsx title="HTML Example
<a href="https://app.saucelabs.com/u/SAUCE_USERNAM"><img src=https://app.saucelabs.com/browser-matrix/SAUCE_USERNAM.svg?" alt= "Sauce Browser Matrix"/></a>
```

__Output Example__:

<img src={useBaseUrl('img/test-results/browser-badges/browserMatrix.svg')} alt="Browser Matrix"/>


## Multiple Projects, Multiple Accounts

If you just have one project, you can use your main Sauce account name. If you have multiple projects, you will want to create a sub-account for each project.

### Tips for Successful Badges
* Make sure to set a build number, a pass/fail status, and a public, share, or public restricted visibility for every test that runs using the Test Configuration Options. 
* You'll know that these are set correctly if your tests have a status of Pass or Failed instead of Finished on your dashboard, and that a build number is also displayed.

:::caution
The above information applies to Open Sauce accounts only. Open Sauce accounts are public, meaning tests and build status can be viewed without authentication. In order to use the above for any other type of account, read on.
:::

## Status Images for Private Accounts


If you want to display the build status of a private Sauce account, you need to provide a Hash-based Message Authentication Code (HMAC) token generated from your username and access key.

This example shows how to generate an HMAC token using Python:

```python
from hashlib import md5
import hmac
"?auth=" + hmac.new("SAUCE_USERNAME:SAUCE_ACCES_KEY", None, md5).hexdigest()
```

This is an example to show that the HMAC token should be generated using your Sauce Labs username and access key. You can find many examples of how to accomplish this in other languages with a quick web search, such as [here](https://www.devglan.com/online-tools/hmac-sha256-online). 

As the above example shows, the HMAC token should be generated using the md5 cryptographic algorithm, and with no secret.

Once you have the token, append it to the badge URL:

```
https://app.saucelabs.com/buildstatus/SAUCE_USERNAME?auth=HMAC_TOKEN
```
