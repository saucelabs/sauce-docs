---
id: jira
title: Jira
sidebar_label: Jira
description: Integrate Backtrace with Jira.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Jira Integration
This guide goes through the steps necessary to integrate Backtrace with Jira. Setting up integration with the Jira ticketing system requires a valid Jira REST API URL, a user and either a password for the user or an API token.

### OAuth
Note that Backtrace can also support OAuth for users self hosting Jira. Please reach out to our support team at support@backtrace.io in order to begin the process for configuring OAuth.

This will involve creating an application link in Atlassian with a Backtrace provided public key, setting up an integration similar to the description below, and finally opening a link from a Backtrace initiated process to accept Backtrace's requested access.

## Set Up the Integration
To set up the integration, navigate to the integration settings through Project Settings > Integrations > Issue Trackers > JIRA .

<img src={useBaseUrl('img/error-reporting/workflow-integrations/add-jira-integration.gif')} alt="" />

If you wish to enable one-way synchronization or two-way synchronization, this is available from the behavior tab during configuration. One-way synchronization synchronizes updates from Backtrace issues to JIRA, and two-way synchronization updates Backtrace issues when JIRA issues are updated.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/jira-integration-settings.gif')} alt="" />

These are the settings that you can configure for your Jira integration:
- Jira API (required): Jira Endpoint URL (see below for examples)
- E-mail (required): E-mail associated with your Jira instance. For some users, the username of the Jira instance may be used.
- API Token (required):  Jira API Token obtained here. Some Jira instances also support passwords in lieu of API Tokens, but that functionality is deprecated and will be removed.
- Project Key (required): Jira Project Key
- Issue Type: Jira Issue Type.  Defaults to "Bug" if not present.
- Subject (required): Content to put in the "Summary" field of the ticket.
- Custom Field Mapping - Labels: See below
- Custom Field Mapping - Description: See below
- Custom Fields: See below

## Synchronization between Backtrace and Jira
### Data Sync Control - Setup Behavior tab
Backtrace supports various options to sync with Jira. On the 'Setup Behavior' tab, you can see options for when to synchronize data.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/jira-two-way-sync.png')} alt="" />

- Backtrace can update linked Jira issues with new values for State and Assignee when those values are changed in Backtrace.
- Jira can update the linked Backtrace fingerprints with new values for State and Assignee when those values are changed in Jira.

### Jira Fix Version Sync - Configure Connection tab
At the bottom of the first Configure Connection tab is a new beta feature to allow Jira Fix Versions to drive Backtrace's [Resolved Until](/error-reporting/web-console/triage/#reopen-criteria---mute-or-resolve-until) feature, and drive workflows for detected regressions. This feature is considered beta as we want to restructure our schema to provide more flexibility for how the UI exposes this configuration. Please work with our support team during this phase.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/jira-resolve-until.png')} alt="" />

### Jira URL Examples
The Jira URL generally takes one of the following formats

https://yourhost.yourdomain.com/rest/api/2/
https://yourhost.yourdomain.com/jira/rest/api/2/
https://yourname.atlassian.net/rest/api/2/ (For Atlassian-hosted Jira sites)
Atlassian now also offers a v3 API that is currently in Beta, at this time v3 is not currently supported. Be sure to use a v2 endpoint.

For more detailed information, see [The Jira API Documentation](https://developer.atlassian.com/server/jira/platform/rest-apis/).

## Custom Field Mapping
Backtrace populates the default Jira description fields. If you use a customized screen where this is removed or renamed, you will need to specify alternate field name for Backtrace to use to populate with data under Field for Main Body Text.

## Custom Fields
Backtrace also supports populating other custom Jira fields.  This is useful when you are using a Jira screen with added custom fields that are required - if you don't populate these, then the integration will fail to create the Jira ticket.

The Custom Fields setting is an optional list of additional fields you wish to populate within your Jira issue. You can use the value of an attribute within the text by preceding it with $ (e.g. $version). For array-type fields (such as labels), separate values with commas. If an error group has more than one value for the specified attribute, the value with the highest count will be used.

You can use combinations of literal strings and attribute values.  For example, you can set a field's value to "Hostname: $hostname, Version: $version" and the Jira integration will put the values of those attributes within the string, as expected.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/jira-custom-fields.png')} alt="" />

Note: If you refer to an attribute within a custom field with the $attribute  syntax, but are not seeing the attribute populated within the field in Jira, make sure you've added this attribute to your Project Settings configuration under Attributes. See [here](https://support.backtrace.io/hc/en-us/articles/360040517191).

## Required Fields
Backtrace requires the following fields, and automatically populates them based on your settings.  You can override the content of any of these settings by specifying their value in the appropriate Backtrace Jira config setting, or by specifying it as a Custom Field

It is important to ensure that these fields are specified properly, as the Jira API will reject any request that has invalid fields or missing required fields.

- Project Key - This is specified by the "Project Key" setting.
- Summary - This is specified by the "Subject" setting.
- Issue type - This is specified by the "Issue Type" setting, set to "Bug" by default.
- Labels - Backtrace assumes a labels-type field named "labels" and will populate this with the label "Backtrace", but you can override this by adding "labels" as a Custom Field. You can also specify an alternate name for this field with the Custom Field Mapping option.
- Description - Backtrace assumes a text field named "description" and populates this with the main error information, but you can override this by adding "description" as a Custom Field (not recommended). You can also specify an alternate name for this field with the Custom Field Mapping option.

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.


## Troubleshooting
If you've set up a Backtrace integration with JIRA, but are not receiving any new JIRA issues from Backtrace, check on the following:

- Is your JIRA endpoint correct? Your JIRA endpoint should end in /jira/rest/api/2/  or /rest/api/2/, depending on your JIRA configuration. Atlassian has recently released v3 in Beta, at this time it is not currently supported. Be sure to use a v2 endpoint.
- Is your project key correct?  
- Does the JIRA user associated with the e-mail you provided have permissions to create new issues within the project you specified?
- Are you using e-mail/password or username/password combination instead of e-mail/API Token or username/API Token? API Token can be obtained here.
- Do you have any required custom fields? If so, you'll need to provide values for these fields within the Custom Fields section of the Backtrace JIRA workflow configuration.
- Are you using an Issue Type other than "Bug"? If so, make sure to specify this in the Issue Type config setting.
- Does your screen have fields called "labels" and "description"? If one of these is missing, you'll need to specify an alternative for these in the Custom Field Mapping section.
