---
id: jira
title: Jira Integration with Backtrace
sidebar_label: Jira
description: Connect errors from Backtrace with issues in Jira to easily manage and track bug fixes.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Integrate your Backtrace and Atlassian Jira accounts so you can create and update issues in Jira for errors reported to Backtrace.

## What You'll Need
- A Backtrace Account ([log in](https://backtrace.io/login) or [sign up](https://backtrace.io/sign-up) for a free license)
- A [Jira Cloud Account](https://www.atlassian.com/software/jira)

## Jira Cloud v1
### Setup
1. Go to **Project settings** > **Worfklow Integrations**.
1. Click **+**, then select **issue tracking** > **Jira**. <br></br>
    You can configure the following settings:
    - Jira API (required): The Jira Endpoint URL (see below for examples).
    - E-mail (required): E-mail associated with your Jira instance. For some users, the username of the Jira instance may be used.
    - API Token (required): Jira API Token obtained here. Some Jira instances also support passwords in lieu of API Tokens, but that functionality is deprecated and will be removed.
    - Project Key (required): The Jira Project Key.
    - Issue Type: Jira Issue Type. Defaults to "Bug" if not present.
    - Subject (required): Content to put in the "Summary" field of the ticket.
    - Custom Field Mapping - Labels: See below
    - Custom Field Mapping - Description: See below
    - Custom Fields: See below

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.


### Fix Version Sync
At the bottom of the **Configure connection** tab is a new beta feature to allow Jira Fix Versions to drive Backtrace's [Resolved Until](/error-reporting/web-console/triage/#reopen-criteria---mute-or-resolve-until) feature, and drive workflows for detected regressions. This feature is considered beta as we want to restructure our schema to provide more flexibility for how the UI exposes this configuration. Please work with our support team during this phase.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/jira-resolve-until.png')} alt="" />

### Custom Field Mapping
Backtrace populates the default Jira description fields. If you use a customized screen where this is removed or renamed, you will need to specify alternate field name for Backtrace to use to populate with data in the **Field for Main Body Text** field.  

### Custom Fields
Backtrace also supports populating other custom Jira fields. This is useful when you are using a Jira screen with added custom fields that are required - if you don't populate these, then the integration will fail to create the Jira ticket.

The Custom Fields setting is an optional list of additional fields you wish to populate within your Jira issue. You can use the value of an attribute within the text by preceding it with $ (e.g. $version). For array-type fields (such as labels), separate values with commas. If an error group has more than one value for the specified attribute, the value with the highest count will be used.

You can use combinations of literal strings and attribute values. For example, you can set a field's value to "Hostname: $hostname, Version: $version" and the Jira integration will put the values of those attributes within the string, as expected.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/jira-custom-fields.png')} alt="" />

:::note
 If you refer to an attribute within a custom field with the $attribute syntax, but are not seeing the attribute populated within the field in Jira, make sure you've added the attribute to your Project Settings configuration under Attributes. See [here](/error-reporting/project-setup/attributes/).
:::

### Data Synchronization
On the **Setup behavior** tab, you can see options for when to synchronize data.

One-way synchronization  updates from Backtrace issues to Jira, and two-way synchronization updates Backtrace issues when Jira issues are updated.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/jira-two-way-sync.png')} alt="" />

- Backtrace can update linked Jira issues with new values for State and Assignee when those values are changed in Backtrace.
- Jira can update the linked Backtrace fingerprints with new values for State and Assignee when those values are changed in Jira.


### Jira URL Examples
The Jira URL generally takes one of the following formats:
- https://yourhost.yourdomain.com/rest/api/2/
- https://yourhost.yourdomain.com/jira/rest/api/2/
- https://yourname.atlassian.net/rest/api/2/ (for Atlassian-hosted Jira sites)

Atlassian now also offers a v3 API that is currently in Beta, at this time v3 is not currently supported. Be sure to use a v2 endpoint.

For more detailed information, see the reference for [Jira's REST APIs](https://developer.atlassian.com/server/jira/platform/rest-apis/). 

### OAuth
Backtrace can also support OAuth for users self-hosting Jira. 

This will involve creating an application link in Atlassian with a Backtrace provided public key, setting up an integration similar to the description below, and finally opening a link from a Backtrace initiated process to accept Backtrace's requested access.

Please reach out to our support team at support@backtrace.io in order to begin the process for configuring OAuth.

### Troubleshooting
If you've set up a Backtrace integration with Jira, but are not receiving any new Jira issues from Backtrace, check the following:
- Is your Jira endpoint correct? Your Jira endpoint should end in /Jira/rest/api/2/  or /rest/api/2/, depending on your Jira configuration. Atlassian has recently released v3 in Beta, at this time it is not currently supported. Be sure to use a v2 endpoint.
- Is your project key correct?  
- Does the Jira user associated with the e-mail you provided have permissions to create new issues within the project you specified?
- Are you using e-mail/password or username/password combination instead of e-mail/API Token or username/API Token? API Token can be obtained here.
- Do you have any required custom fields? If so, you'll need to provide values for these fields within the Custom Fields section of the Backtrace Jira workflow configuration.
- Are you using an Issue Type other than "Bug"? If so, make sure to specify this in the Issue Type configuration setting.
- Does your screen have fields called "labels" and "description"? If one of these is missing, you'll need to specify an alternative for these in the Custom Field Mapping section.

#### Required Jira Fields

Backtrace requires the following fields, and automatically populates them based on your settings. You can override the content of any of these settings by specifying their value in the appropriate Backtrace Jira config setting, or by specifying it as a Custom Field

It is important to ensure that these fields are specified properly, as the Jira API will reject any request that has invalid fields or missing required fields.

- Project Key - This is specified by the "Project Key" setting.
- Summary - This is specified by the "Subject" setting.
- Issue type - This is specified by the "Issue Type" setting, set to "Bug" by default.
- Labels - Backtrace assumes a labels-type field named "labels" and will populate this with the label "Backtrace", but you can override this by adding "labels" as a Custom Field. You can also specify an alternate name for this field with the Custom Field Mapping option.
- Description - Backtrace assumes a text field named "description" and populates this with the main error information, but you can override this by adding "description" as a Custom Field (not recommended). You can also specify an alternate name for this field with the Custom Field Mapping option.

## Jira Cloud v2

### Install and Set Up the Plugin

1. Go to **Project settings** > under **Workflow** > select **Integrations**.
1. Click **+**, then select **Issue tracking** > **Jira Cloud**.
1. If you haven't previously installed the plugin, click **Install Jira Plugin**.
1. From the [Jira Marketplace](https://marketplace.atlassian.com/apps/1228456?tab=overview&hosting=cloud), click **Get it now**.
1. Select the Jira instance to connect with, then do one of the following:
    - If you are a Jira product and site administrator, click **Install app**.
    - If you are not a Jira product and site administrator, click **Request app** and wait for admin approval.
1. After the plugin is installed, enter the URL for your Backtrace instance, then click **Continue to Backtrace**.
1. To complete the setup, enter the **Integration Name** and select the **Project Name**.
1. Click **Save**.

After the integration is setup, you can test the integration to verify that it works.

<details>
<summary> Test the integration </summary>
<ol> 
<li>Go to <b>Project settings</b> > under <b>Workflow</b> > select <b>Integrations</b>.</li>
<li>Find the Jira Cloud integration then click <b>⌄</b>.</li>
<li>Click <b>Test integration</b>.</li>
</ol>
</details>

You can then continue to configure the Jira Cloud integration.

### Configure the Integration
1. Go to **Project settings** > under **Workflow** > select **Integrations**.
1. Find the Jira Cloud integration then click **Edit**. 
1. Configure the settings as required.
    

