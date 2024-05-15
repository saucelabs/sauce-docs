---
id: releases
title: Releases
sidebar_label: Releases
description: Monitor stability across released versions of your app with the Releases page.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The Backtrace Web Console's Release view gives team leads, project managers, and developers an easy way to monitor and compare release stability, user adoption, and other health metrics.

- Monitor an important release as it is launched to quickly identify and prioritize impactful issues
- Retroactively compare and explore release stability to learn and improve your processes going forward
- Quickly understand the state of your application across versions

<img src={useBaseUrl('img/error-reporting/console-views/new_releases_page.png')} alt="The Releases view allows you to monitor release stability." />
<img src={useBaseUrl('img/error-reporting/console-views/new_health-metrics-table.png')} alt="Shows the stability metrics for your project's releases." />

You can see the user adoption of the versions, the error-free application launches, errors over time, and new errors over time. Additionally, there are quick toggles for error types (crashes, hangs, exceptions) and platforms (iOS, Android, ps4, Nintendo Switch, Xbox, Windows, Linux). The quick toggles are also available in the Overview section.

## Configuration

### Set the Version Attribute

You will want to ensure the Release Comparison View's concept of a "Release" is represented by the attribute most relevant to you. Use the pencil icon next to the "Comparing by \{attribute}" text at the top of the view to set this as desired.

<img src={useBaseUrl('img/error-reporting/console-views/edit-version-attribute.png')} alt="Shows how to set the version attribute for the Releases view." />

This will bring up a dialogue box that will let you change the attribute which underlies the view. If you are using a custom attribute, make sure that it is properly configured and indexed or it won't show up as an option here.

<img src={useBaseUrl('img/error-reporting/console-views/version-attribute-dialog.png')} alt="Shows the dialog to set the version attribute for the Releases view." />

### Select Versions to Compare

To edit which release versions are being compared on the page, use the pencil icon next to the version numbers towards the top of the page. Note that you can also press the "x" icon next to each version number to quickly exclude it from the list.

<img src={useBaseUrl('img/error-reporting/console-views/edit-compare-versions.png')} alt="Shows the dialog to set the version attribute for the Releases view." />

Pressing the pencil icon will bring up the following dialogue box which can be used to include / exclude versions. Note that you can compare up to 4 versions at a time.

<img src={useBaseUrl('img/error-reporting/console-views/select-versions-dialog.png')} alt="Shows the dialog to set the version attribute for the Releases view." />

## Release Health Metrics

The Release Comparison View offers a number of metrics + visualizations. Note that every metric on the page is responsive to updates in the global filter bar at the top of the page (as with other Backtrace views).

### Through Time Monitoring

The top section of the page provides a view into the error rates of your project's releases through time, a great way to track the evolution of a release's stability through a launch window and beyond.

- Errors over time: Shows your project's error count through time, broken down by release.

- New Errors over time: Shows the count of errors never before seen through time, broken down by release. Great for distinguishing errors introduced by a new release from existing errors / backlog items.

To see a quick breakdown of errors by release at a given point in time, hover your mouse over the charts.

<img src={useBaseUrl('img/error-reporting/console-views/errors-over-time-by-version.png')} alt="Shows errors over time by version." />

Note that as of October 2021, the Backtrace team is planning to add metrics to the page over the coming month including a visualization of user adoption through time and session stability through time.

### Stability Metrics Table

The bottom of the page lays out each release with aggregated health / stability metrics. This includes:

- User adoption %
- Error-free sessions (% of sessions in which there were no errors)
- Error-free users (% of users who have not experienced an error)
- New errors
- Unique errors
- Total errors
- Triage status (distribution %)

<img src={useBaseUrl('img/error-reporting/console-views/new_health-metrics-table.png')} alt="Shows the stability metrics for your project's releases." />

Note that you can see more information for each of the % metrics by hovering over it with your mouse. For example, by hovering over one of the error-free sessions metrics, you can see the number of error-free sessions and total number of sessions.

<img src={useBaseUrl('img/error-reporting/console-views/health-metrics-hover-details.png')} alt="Shows hover over details for error-free sessions in the stability metrics table." />

#### View Release Details

If you want to drill into a release's details, you can use the button next to the release's name in the health metrics table to quickly open the Triage view, filtered to the selected release.

<img src={useBaseUrl('img/error-reporting/console-views/view-release-details.png')} alt="Drills into the release's details in the Triage view." />

## Global Filter

Every widget / health metric on the Release Comparison View is responsive to filters via the global filter bar. Use this in combination with the other features on the page to get the most value out of the page

Example use cases:

- Time frame: Filter to only the most recent couple days / errors to carefully monitor a release during the launch window.
- Logs vs. Errors vs. Crashes: Add the filter "error.type = Crash" to compare crashes only. This can be especially helpful in identifying and prioritizing the most problematic errors
- Filter Out Irrelevant Builds: If your release attribute has a pattern that makes it easy to identify development builds vs. production builds, you can filter out non-production builds to reduce noise on the page to focus on what you really care about.
