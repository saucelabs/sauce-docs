---
id: environment-variables
title: Using Environment Variables for Authentication Credentials
sidebar_label: Using Environment Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As a best practice, we recommend setting your Sauce Labs authentication credentials as environment variables on your local system, that can then be referenced from within your tests. This provides an extra layer of security for your tests, and also enables other members of your development and testing team to write tests that will authenticate against a single account.

## What You'll Need
* The SAUCE_USERN98i09AME and SAUCE_ACCESS_KEY specific to your Sauce Labs account. You can find them by logging into saucelabs.com and going to Account > User Settings.

## Setting Up Environment Variables on macOS and Linux Systems
1. In Terminal mode, enter `vi ~/.bash_profile`, and then press **Enter**.
Press i to insert text into your profile file.
Enter these lines:

export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your Sauce access key"
Press Escape.
Hold Shift and press Z twice (z z) to save your file and quit vi.

In the terminal, enter source ~/.bash_profile.

Setting Up Environment Variables on Windows Systems
Click Start on the task bar.
For Search programs and fields, enter Environment Variables.
Click Edit the environment variables.
This will open the System Properties dialog.
Click Environment Variables.
This will open the Environment Variables dialog.
In the User variables section, click New.
This will open the New System Variable dialog.
For Variable name, enter SAUCE_USERNAME.
For Variable value, enter your Sauce username.
Click OK.
Repeat 4 - 8 to set up the SAUCE_ACCESS_KEY.
Referencing Environment Variables in Test Scripts
Once you've set up the environment variables for your credentials, you need to reference them within the test scripts that you want to run on Sauce. You can find examples of test scripts that use environment variables for authentication in the demo directory for each language in the Sauce Labs Training repo on GitHub.

Below are examples of how to set environment variables in a given language/framework:

Java
C# Example
NodeJS
Ruby
Python
JUnit
TestNG
String sauceUserName = System.getenv("SAUCE_USERNAME");
String sauceAccessKey = System.getenv("SAUCE_ACCESS_KEY");
 Click here to view the full example
