---
id: protecting-test-log-credentials
title: Protecting Test Log Credentials
sidebar_label: Protecting Test Log Credentials
---
Sauce Labs test logs are securely stored, protecting them from external access. However, there are still some groups that can see test logs, including Sauce Support, your parent account, and other accounts in your company (depending on test privacy settings).

## Don't Use Real Credentials

The best way to avoid this is to avoid using real credentials in tests by creating temporary accounts.

## Transmit Session Tokens Only

You can avoid sensitive credentials with Selenium's ability to extract and inject cookies into accounts:

1. Create a session in your environment, either directly in the application engine, or by using a local Selenium session or headless browser.
2. Extract the session tokens (local storage objects, credentials, cookies, etc.).
3. Use Selenium to push these objects and tokens into the browser under the control of Sauce Labs.

This technique avoids sending plain text passwords, however, the sent tokens and cookies are still logged. If your session tokens are not time sensitive, this only provides security through obscurity. We recommend using time-sensitive session tokens.

## Change Passwords After Tests

If generating tokens and using unique temporary accounts is not possible, we recommend you establish test actions that your suite always takes, in order to change to a new, randomly generated password.  

After each test, use a locally automated browser, a direct connection to your application database, or a headless browser to change your test account's password to a new, randomly generated password. Ensure this password is stored in your CI environment or a credential store, or by some other method.

In order to prevent credential loss from blocking test suites, you may want to start each test suite by changing the password, again, either by using a headless browser or local Selenium session to perform your password recovery process, or by directly interacting with your application's database.
