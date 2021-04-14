---
id: badges-browser-matrix
title: Status Badges and the Browser Matrix Widget
sidebar_label: Status Badges and the Browser Matrix Widget
---
Status badges and the Sauce Labs browser matrix widget help you keep track of the status of your latest test runs. All you have to do is add either markdown or HTML code to your GitHub README or project site that references your Sauce Labs username and access key, and annotate your tests with the REST API.

Status Badges and the Browser Matrix
There are four status badges that correspond to the three states of a finished test: Passing, Failed, Error, and Unknown.

| Column 1 | Column 2 |
| :--- | :--- |
| Left Aligned | Centered | 

Passing

Failing

This status is set if the build errors out due to an internal error (one or more sessions have crashed)

This status is set if one or more jobs of the latest build haven't been reported as passed or failed. This state is equivalent to Finished.
With the browser matrix, you can keep track of the test status of your project for various browser/platform/operating system combinations.



Build Status Badge Example

Sauce Test Status



Browser Matrix Badge Example

Sauce Test Status

Setting Up Status Badges for Test Results
Copy this markdown code into your GitHub README.

[![Sauce Test Status](https://app.saucelabs.com/buildstatus/YOUR_SAUCE_USERNAME)](https://app.saucelabs.com/u/YOUR_SAUCE_USERNAME)
Alternatively, you can use this HTML code on your project site.

<a href="https://app.saucelabs.com/u/YOUR_SAUCE_USERNAME">
  <img src="https://app.saucelabs.com/buildstatus/YOUR_SAUCE_USERNAME" alt="Sauce Test Status"/>
</a>
Multiple Projects, Multiple Accounts

If you just have one project, you can use your main Sauce account name. If you have multiple projects, you will want to create a sub-account for each project.

Run your tests.

Make sure to set a build number, a pass/fail status, and a public, share, or public restricted visibility for every test that runs using the Test Configuration Options.
You'll know that these are set correctly if your tests have a status of Pass or Failed instead of Finished on your dashboard, and that a build number is also displayed.

Setting Up the Browser Matrix Widget
Copy this markdown code into your project's GitHub README.

[![Sauce Test Status](https://app.saucelabs.com/browser-matrix/YOUR_SAUCE_USERNAME.svg)](https://app.saucelabs.com/u/YOUR_SAUCE_USERNAME)
Alternatively, you can add this HTML to your project site.

<a href="https://app.saucelabs.com/u/YOUR_SAUCE_USERNAME">
  <img src="https://app.saucelabs.com/browser-matrix/YOUR_SAUCE_USERNAME.svg" alt="Sauce Test Status"/>
</a>


Note that the above information applies to Open Sauce accounts only. Open Sauce accounts are public, meaning tests and build status can be viewed without authentication. In order to use the above for any other type of account, read on.

Status Images for Private Accounts
If you want to display the build status of a private Sauce account, you need to provide a Hash-based Message Authentication Code (HMAC) token generated from your username and access key.

This example shows how to generate an HMAC token using Python:

python
from hashlib import md5
import hmac
"?auth=" + hmac.new("YOUR_SAUCE_USERNAME:YOUR_SAUCE_ACCESSKEY", None, md5).hexdigest()
This is an example to show that the HMAC token should be generated using your Sauce Labs username and access key. You can find many examples of how to accomplish this in other languages with a quick web search, such as here. As the above example shows, the HMAC token should be generated using the md5 cryptographic algorithm, and with no secret.

Once you have the token, append it to the badge URL:

https://app.saucelabs.com/buildstatus/YOUR_SAUCE_USERNAME?auth=HMAC_TOKEN


Example Demo
Follow the instructions below to run the sample demo that exists in the saucelabs-training GitHub organization:


How to Run This Demo:
Clone this repository:

git clone https://github.com/saucelabs-training/demo-sauce-status-badge.git
Set your Sauce Labs Credentials as environment variables

Add the username for the badge and matrix URLs like so:

Build Status Badge Example URL:
[![Build Status](https://app.saucelabs.com/buildstatus/SAUCE_USERNAME)](https://app.saucelabs.com/u/SAUCE_USERNAME)

Browser Matrix Example URL:
[![Browser Matrix](https://app.saucelabs.com/browser-matrix/SAUCE_USERNAME.svg)](https://app.saucelabs.com/u/SAUCE_USERNAME)
Navigate to the project directory and run:

npm install
Run the tests with the following command:
