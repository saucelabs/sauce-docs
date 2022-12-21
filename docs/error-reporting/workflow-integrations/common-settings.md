---
id: common-settings
title: Common Settings
sidebar_label: Common Settings
description: Describes common workflow integration settings.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Common Workflow Integration Settings

After configuring the settings that are specific to each workflow integration, the workflow integration wizard will prompt you to configure the following settings:

### Display Settings

First you see the Display Settings section, which lets you specify which sections to show in the main body of the notification or ticket.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/common-display-settings.png')} alt="" />

You can show or hide:

- Classifiers
- Callstack
- Attributes

For the Attributes section, you can also limit display to a list of attribute names. Simply add each item you want displayed to the Attribute List section. If this list is empty, then all attributes are displayed if Show Attributes Section is enabled.

### Actions

Here, you can specify whether you would like to see the hostname in the list of attributes.

But what's more interesting on this page is the list of Actions. These are lists of actions that you can apply to all of our workflow integrations, and allow you to filter out events based on certain criteria, or add additional text to the output of the event to mention a particular username. This is especially useful for chat-based services such as Slack, where you might want to call attention to a particular username with @username, or something similar. This also works in ticket-tracking services such as GitHub.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/common-actions.png')} alt="" />

- Include hostname in attributes (1): Check if you would like the see the hostname includes in your errors' attribute list.
- Remove action button (2): Removes this action from the list.
- Add action button (3): Adds an action to the list.
- Submit (4): Proceed to the next page.
- Action: Specifies to submit or filter out the event if certain criteria are met, or to trigger a mention to a particular user. (e.g. @username on a chat service). If more than one submit/filter action is specified, then the last successful match on the list (from top down) takes effect.
- Attribute: Test against this custom attribute to determine if the action is taken.
- Regular Expression: Test the attribute against this regular expression.
- Target: For Mentions, specifies the user or channel to mention when the criteria are met.

### Submit/Filter

The ability to use submit or filter actions gives you a large amount of flexibility in determining which events you want to be notified on.

By default, all events can trigger a notification. However, if you add in one or more submit or filter actions, you can customize this behavior to only alert you when crash attributes meet certain criteria.

When you specify one or more submit/filter actions, the system goes from the top item in the list to the bottom, along the way checking the attribute you specify against the regular expression. If the last match is "submit", then the system will ultimately send the notification. If the last match is "filter", then it will not.

For example, let's say that for a workflow integration, you only want to be notified if the "datacenter" attribute is equal to "nyc". You would set up the following actions, in this order:

- "filter" on any attribute with the regular expression .\*
- "submit" on the datacenter attribute with the regular expression nyc

If datacenter equals nyc, then "submit" is the last match, therefore the notification is sent. Otherwise, "filter" takes effect.

Attributes you wish to match against must be defined in the Attributes section of Project Settings. See [Attributes](/error-reporting/project-setup/attributes/) for more information.

### Event/Frequency/Threshold

After you click Submit, the UI presents you with the following options:

- Name: Unique Name for the Integration
- Event: "Group" to receive events only when a new Group is created. "Trace" to receive events on each error.
- Frequency: This is the minimum amount of time the system will wait before firing the next event.
- Threshold: An event will be fired when this number of events has aggregated, regardless of frequency.

<img src={useBaseUrl('img/error-reporting/workflow-integrations/common-event-freq-thresh.png')} alt="" />

Enter these settings, click "Create Integration", and you're all done!
