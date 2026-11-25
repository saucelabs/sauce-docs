---
id: manage-ai-features
title: Manage AI Feature Settings
sidebar_label: Manage AI Feature Settings
description: Turn Error Reporting AI features, such as Natural Language Query, on or off for your whole organization from the AI feature settings page in Universe settings.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **AI feature settings** page in **Universe settings** is where admins turn AI features on or off for the whole organization. It controls every admin-managed AI feature in Error Reporting.

## Available AI Features

| Feature | Description |
| --- | --- |
| **Natural Language Query** (Public Beta) | Lets users search their error data by typing a question in plain language. Available for cloud customers. For more information, see [Natural Language Query](/error-reporting/web-console/getting-started/#natural-language-query). |

## How Your Data Is Used

Error Reporting AI features are designed to minimize queries on your data:

- They don't use your application data or user data. Natural Language Query uses only attribute names and attribute descriptions.
- Each query uses the credentials of the user who runs it, so users only get results from data they already have access to.
- Attribute names and descriptions are processed in secure cloud environments, using a compliant large language model.

For more information, see [Responsible Usage of AI at Sauce Labs](https://trust.saucelabs.com/resources?s=tcd1vcgj9ya80ahtrhj65&name=responsible-usage-of-ai-at-sauce-labs) in the [Sauce Labs Trust Center](https://trust.saucelabs.com/).

## Prerequisites

You need the admin role in your Error Reporting instance. For more information, see [User Roles](/error-reporting/org-settings/user-mgmnt/#user-roles).

## Turn an AI Feature On or Off

**Step 1:** Click your profile icon in the upper-right corner, and then select **Universe Settings**. In the left menu, click **AI feature settings**.

<img src={useBaseUrl('img/error-reporting/universe-settings/universe-settings-menu.png')} alt="Universe Settings option in the profile menu" />

**Step 2:** Use the toggle next to the feature to turn it on or off. The change applies to everyone in your organization.

## Related Topics

- [Natural Language Query](/error-reporting/web-console/getting-started/#natural-language-query)
- [Error Reporting MCP](/error-reporting/mcp/error-reporting-mcp/)
