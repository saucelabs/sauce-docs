---
id: getting-started
title: Web Console Getting Started
sidebar_label: Getting Started
description: Getting started with the web console to view and analyze crash and error data.
---
There are 4 key navigational components to help you analyze your crash and error data:
- Project Selector - Use this to switch between various projects that are reporting crashes or errors.
- Filters - Define your working set. Specify time frames and additional criteria to indicate which errors and fingerprints to analyze.
- Saved Views - Commonly used filters for quick access and sharing for the selected project. Admin users can save team default view for a given project, and users can further personalize their views with a user default.
- Tools and Result Lists - Triage, Explore, and Debug allow you to prioritize, analyze, and debug your crashes.

  <img src={useBaseUrl('img/error-reporting/web-console-getting-around.png/')} alt="Getting around in the web console views." />

## Filters
### Time Frame Filters
On the top left, you'll see filters for Time Frame. This allows you to filter for issues that have occurred during a certain time period, or when an issue was first seen, which is useful for identifying when specifically an issue may have been introduced.


### Filter Operators
Next, you can add filters identifying crashes from a certain version, a certain user, specific operating system, or more. Filters are available on any system or custom metadata that you provide with your crashes. You can take advantage of powerful filter operators that go beyond the normal equals or contains operators to include not-contains, regular-expression, inverse-regular-expression, at-least, or at-most, depending on the data type. See the image below for examples of the different operators available.
