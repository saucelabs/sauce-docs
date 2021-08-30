---
id: jira
title: Jira Cloud Integration
sidebar_label: Jira
description: Link your Sauce Labs account with your Jira account to create an issue directly from the Sauce Labs app.
keywords:
- create-jira-issue
- share-test-results
- jira
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Integrate your Sauce Labs and [Atlassian Jira](https://www.atlassian.com/software/jira) user accounts so you can create or update Jira issues from within the Sauce Labs dashboard.


## What You'll Need
* [A Sauce Labs Account](https://saucelabs.com/sign-up)
* [A Jira Cloud Account](https://www.atlassian.com/software/jira)

:::note
The Sauce Labs Jira integration is only compatible with Jira Cloud. We do not support Jira Server accounts at this time.
:::


## Install and Set up the Jira Plugin

1. From your Sauce Labs dashboard, navigate to the [Account Integrations](https://app.staging.saucelabs.net/integrations) page.
1. Click the Jira Software **Install** button.
1. Enter your Jira account details in the **Jira Integration** form:
    * **Atlassian Cloud URL**: The base URL for your company's Jira Cloud account. This value is typically `https://<your-jira-account>.atlassian.net`.
    * **Jira Email**: The email address associated with your personal Jira login account.
    * **Jira API Token**: The Jira integration utilizes Atlassian's Jira API to communicate with your Jira account. To do this, it passes authentication credentials in the API requests on your behalf. If you don't know your API token value or don't have one, you can create a new one for your sauce integration through your [Jira Account Profile](https://id.atlassian.com/manage-profile/security/api-tokens).
1. Click **Save**.

:::note Multiple Data Centers
The Jira Plugin is specific to the data center that is active for your Sauce Labs account during integration. If you have access to multiple data centers, you must switch into each data center and repeat the Plugin install and setup process in order to integrate each data center.
:::


## Create an Issue

Once you have successfully connected your Sauce Labs and Jira accounts, you can access the Jira Issue button from the **Test Results** page for any completed job.

1. Click the Jira Issue button to open the menu and select **Create an issue**. If other issues have been previously created for this test, the menu will also include an option to update any of those issues.
1. Provide the Jira issue details in the form.
    <table id="table-api">
        <tr>
         <td><b>PROJECT</b></td>
         <td><p><small>| REQUIRED |</small></p><p>Use the drop down menu to select the project within your company's Jira org in which to create the issue. The list is populated alphabetically, so if you do not actively change the project, the value defaults to the first one in the list.</p></td>
        </tr>
        <tr>
         <td><b>ISSUE TYPE</b></td>
         <td><p><small>| REQUIRED | </small></p><p>Use the drop down to specify the type of issue you are creating. The list includes all issue types defined by your organization and if not actively specified, defaults to the first value in the list.</p></td>
        </tr>
        <tr>
         <td><b>SUMMARY</b></td>
         <td><p><small>| REQUIRED |</small></p><p>Enter a title to identify the issue.</p></td>
        </tr>
        <tr>
         <td><b>DESCRIPTION</b></td>
         <td><p><small>| OPTIONAL |</small></p><p>Describe the purpose of the issue.</p></td>
        </tr>
        <tr>
         <td><b>ASSIGN TO</b></td>
         <td><p><small>| REQUIRED |</small></p><p>Use the drop down menu to select the member within your company's Jira org who is responsible for the issue. The list is populated alphabetically, so if you do not actively set the assignment, the value defaults to the first one in the list.</p></td>
        </tr>
        <tr>
         <td><b>PRIORITY</b></td>
         <td><p><small>| REQUIRED |</small></p><p>Use the drop down to set the issue urgency. The list is populated alphabetically with all priorities defined by your organization, so if you do not actively specify a priority, the value defaults to the first one in the list.</p></td>
        </tr>
    </table>
  1. Click **CREATE ISSUE**.

## Update an Issue

If the job you are viewing already has Jira issues associated with it, the number of previously filed issues appears in parentheses next to the Jira Issue button. When you click the button, you can select an existing issue to open the issue in your Jira account in another tab of your browser. There, you can edit the issue as you normally would.

:::note
Attaching assets from your Sauce Labs job to your Jira issue is not yet supported.
:::
