---
id: getting-started
title: Error and Crash Reporting
sidebar_label: Getting Started
description: Capture error and crash reports from your games and mobile apps with Backtrace.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The following provides the steps and best practices for integrating your project with Backtrace.

## Set Up a Project

You must first create a project in your Backtrace instance. A project is a container that lets you organize your errors. You have to create at least one project to submit your errors to.

Best practice is to create one project for each application you wish to capture errors for. Each project has its own workflow integrations, attributes, symbol archives, and submission tokens.

## Upload Symbols

If you are using a minidump-based integration, which includes Breakpad, Crashpad, Unreal and C#, you will need to upload your symbol files to see full debug info on your errors.

For Windows users, make sure that you upload both the symbol file (.sym or .pdb format) as well as the corresponding .exe or .dll file. We recommend that you upload these together in a .zip file.

For more information about working with symbols, see [Symbolication](/error-reporting/project-setup/symbolication/).

## Submit Errors

Submit one or more errors to your instance to verify that your integration is set up properly.

The way to do this varies depending on your integration type. Make sure you have the correct submission token and submission URL.

For more information about submitting errors, see our [Integration Guides](/error-reporting/platform-integrations/overview).

## Add Attributes

We highly recommend that you add attributes to your project and your errors - the more, the better. Attributes are important because they allow you to aggregate and filter on important data in the query builder.

Make sure to attach the attributes to your errors, as well as declare those attributes in the Backtrace UI.

For more information, see [Attributes](/error-reporting/project-setup/attributes/).

## Add a Workflow Integration

Workflow integrations allow you to have Backtrace automatically alert users of new errors via a popular collaboration platform such as Slack, or a ticketing system like Jira.

We recommend setting up an integration to any third-party service you use that we support. For more information, see [Workflow Integrations](/error-reporting/workflow-integrations/overview/).

## Invite Team Members

Backtrace makes it easy to add additional engineers to the system. For Backtrace-hosted instances, you can invite team members to join your projects. You also can allow team members to request an invitation from the login page by adding a whitelisted domain.

For enterprise users who are hosting their own instance, you'll also need to [set up SMTP in coronerd](/error-reporting/advanced/coroner/server-setup/) before users can receive invitations.

For more information, see [Account Management](/error-reporting/org-settings/user-mgmnt/).

## View and Analyze Errors

View and analyze error and crash data in the web console so you can triage, prioritize, and resolve each error.

For more information, see [Web Console Getting Started](/error-reporting/web-console/getting-started/).
