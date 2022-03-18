---
id: overview
title: Overview
sidebar_label: Overview
description: The Web Console’s Overview page provides an ‘at a glance’ view of your project’s health by displaying different top down views of your error / crash data.
---
The Web Console’s Overview page provides an ‘at a glance’ view of your project’s health by displaying different top down views of your error / crash data. The widgets in place were designed to serve that goal by enabling a number of important use cases:
- Top Down Synthesis: Aggregate widgets allow developers or project leads to quickly see their application's stability and how many total, unique, and open errors have been reported in their project for a fast, simple status update
- Application Stability Over Time: Users can visualize their error count through time, broken out by application version to monitor their app’s stability across releases.
- Error Distributions Across Customizable Attributes: The stacked bar chart widgets at the bottom of the page show how your errors are distributed across relevant attribute values. For example, errors by operating system, classifiers, etc. Note that these can be configured to distribute by any indexed attribute to allow users to customize the page to fit their needs. More on this below.    
- Filter the Overview: As with the Web Console’s Explore, Triage, and Debug view, the Overview page can also be manipulated using the global filter bar to suit your specific needs.

## Errors Through Time, By Version
On the Overview page, you will have access to one of our new visualization tools:  A line chart that shows you your project’s errors through time, by version.  This tool makes it easy to see if  a particular build is problematic; great for monitoring a new release.
