---
id: using-environment-variables
title: Using Environment Variables for Authentication Credentials
sidebar_label: Using Environment Variables for Authentication Credentials
---

As a best practice, we recommend setting your Sauce Labs authentication credentials as environment variables on your local system, which can then be referenced from within your tests. This provides an extra layer of security for your tests, and also enables other members of your development and testing team to write tests that will authenticate against a single account.

## What You'll Need
* The SAUCE_USERNAME and SAUCE_ACCESS_KEY specific to your Sauce Labs account. To find them, log in to Sauce Labs, click **Account**, and then click **User settings**.

## Setting Up Environment Variables on Mac OSX/Linux Systems
1. In a Terminal window, enter **vi ~/.bash_profile**, and then press **return**.
2. Enter **i** to insert text into your profile file.
3. Enter the following code:
```js
export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your sauce access key"
```
4. Press **esc**.
5. Hold down the **shift** key and press **Z** twice ([shift]+Z+Z) to save your file and quit vi.

6. In the Terminal window, enter **source ~/.bash_profile**.

## Setting Up Environment Variables on Windows Systems
1. Click **Start** and then enter **environment variables** in the search field.
3. Click **Edit the system environment variables**.
4. In the **System Properties** box, on the **Advanced** tab, click **Environment Variables**.
5. In the **User variables** section, click **New**.
6. In the **Variable name** field, enter **SAUCE_USERNAME**.
7. In the **Variable value** field, enter your **Sauce username**.
8. Click **OK**.
9. Repeat steps 5-8 to set up the **SAUCE_ACCESS_KEY** variable.

## Referencing Environment Variables in Test Scripts
Once you've set up the environment variables for your credentials, you need to reference them within the test scripts that you want to run on Sauce. You can find examples of test scripts that use environment variables for authentication in the demo directory for each language in the [Sauce Labs Training repo](https://github.com/saucelabs-training) on GitHub.

The following are examples of how to set environment variables in a given language/framework:
