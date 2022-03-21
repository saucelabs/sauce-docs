---
id: github
title: GitHub
sidebar_label: GitHub
description: Integrate Backtrace with GitHub.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## GitHub Integration
This guide goes through the steps necessary to integrate Backtrace with GitHub. Setting up integration with GitHub requires a valid GitHub endpoint URL, as well as an API token.

The steps in this process are:
- Generate an API token
- Set up the integration

## Generate an API Token
In GitHub, click the menu in the upper-right and select "Settings". In the Personal Settings menu on the left, click "Personal Access Tokens", then "Generate new token" on the upper-right to generate an API token.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/github-generate-token.png')} alt="" />

Customize the security settings as desired, making sure that the token is granted access to create new Issues. Make a note of the token, you will need it for configuration below.

## Set Up the Integration
To set up the integration, first go to the Configuration page within the Web Console:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/configure-org.png')} alt="" />

Next, select the project you want to add a integration for:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/projects.png')} alt="" />

Then click Integrations in the left-hand menu, then Create a New Integration on the right, and pick the integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/legacy-add-integration.png')} alt="" />

These are the settings that you can configure for your GitHub integration:

<img src={useBaseUrl('img/error-reporting/workflow-integrations/github-settings.png')} alt="" />

For more information about these settings, please refer to the [GitHub API Documentation](https://developer.github.com/enterprise/2.3/v3/issues/#create-an-issue).

Next: After filling in the integration-specific settings, proceed to [Common Settings](/error-reporting/workflow-integrations/common-settings) to finish configuring the integration.
