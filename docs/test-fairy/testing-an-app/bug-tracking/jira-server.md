---
id: jira-server
title: Jira Server
sidebar_label: Jira Server
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To connect TestFairy to JIRA Server that is installed on-prem, start by [installing TestFairy Connect](/test-fairy/testing-an-app/bug-tracking/tf-connect)

## Configuring TestFairy Connect with JIRA Server

This guide explains configuring the TestFairy Connect agent to work with an on-premise JIRA using basic authentication (user/password token) or OAuth.

### Using the wizard

Start the wizard by typing the following command in your terminal or command prompt:

```sh
$ testfairy-connect configure
```

#### Welcome to the TestFairy Connect configuration wizard

- **What is your TestFairy API Key?**
  Put your `Upload API key` here; you can access it via the [Settings Page](https://app.testfairy.com/settings/#api-key).

- **What kind of issue tracking system will you use with TestFairy Connect?**
  Choose `JIRA`.

- **What is your JIRA URL (for example, https://example.atlassian.net)?**
  Provide the URL address of your JIRA server. Remember to include the `http://` or `https://` prefix.

- **How shall TestFairy Connect authenticate to JIRA?**
  Choose `basic`.

- **What is the type of JIRA issues to be created using TestFairy Connect?**
  Choose the appropriate issue type used in your JIRA. JIRA uses `Bug` by default, but it varies on project type. Other examples are `Defect` or `Task`.

- **JIRA username:**
  Enter your JIRA login username.

- **JIRA password:**
  And your JIRA login password

- Sometimes, depending on your user definitions in JIRA, you may need to use an API token as your password. You can create one here at [https://id.atlassian.com/manage/api-tokens](https://id.atlassian.com/manage/api-tokens)

- **Please enter HTTP proxy server address; leave empty if none:**
  Send it here if you require an HTTP proxy to access this JIRA server. For example, `http://user@10.0.0.1:8080`.

When done, the configuration wizard displays the success message: `Successfully connected to the issue tracker`.

You have successfully configured TestFairy Connect with JIRA using Basic authentication. Next, [start the agent from the command line](/test-fairy/testing-an-app/bug-tracking/tf-connect.md)

---

## Configure JIRA with OAuth

#### Access token & Secret Generation:

1.  Obtain a key pair:

    ```bash
    openssl genrsa -out jira_rsa 2048
    openssl rsa -in jira_rsa -pubout > jira_rsa.pub
    ```

2.  Configure JIRA the Application Link for TestFairy Connect integration.

    1.  In your browser, go to your JIRA Admin page, like `http://localhost:2990/jira/plugins/servlet/applinks/listApplicationLinks`.
    2.  Enter `URL` or any string to use for Application Link identification.
        <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/1-create-application-link.png')} alt="Create an application link"/>
    3.  In the next screen, click **Continue**.
        <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/2-continue.png')} alt="Continue"/>
        <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/3-setup-application-link.png')} alt="Set Application link"/>

            - Application Name: `TestFairy`
            - Application Type: `Generic Application`
            - Service Provider Name: `TestFairy`
            - Consumer Key: `testfairy-connect`
            - Shared Secret: `[paste public key contents here]`
            - Request Token URL: `/plugins/servlet/oauth/request-token`
            - Request Token URL: `/plugins/servlet/oauth/access-token`
            - Request Token URL: `/plugins/servlet/oauth/authorize`

        <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/4-verify-access-token.png')} alt="Verify access token"/>

3.  Run the [token generation script](https://docs.testfairy.com/js/download/oauth.js). Right-click to copy the .js file path.

    ```bash
    wget [paste file path here]
    npm install oauth
    node oauth.js
    ```

4.  Update your `config.json` with `access_token` and `access_token_secret`.

5.  (optional) Install the TestFairy Chrome Extension.

The TestFairy Chrome Extension is available at [https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee](https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee). With this Chrome extension, every JIRA issue that has a link to a TestFairy session will contain the proper TestFairy session, timeline, logs, and crash reports embedded in the JIRA issue.
