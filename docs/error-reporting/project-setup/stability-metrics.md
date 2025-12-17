---
id: stability-metrics
title: Stability Metrics
sidebar_label: Stability Metrics
description: Allow users to augment snapshot data with custom analysis, annotations, pretty-printed data.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace now allows you to track trends in your software's stability as observed by unique end users.

This builds on the ability to compute error rates against metrics you provide/upload into our system. The functionality allows you to normalize your errors by useful metrics such as "number of sessions," "minutes played," or any other stability metric that you want to track in your app.

For more information, see [Importing Metrics and Generating Stability Scores](/error-reporting/project-setup/metrics-stability-scores/).

Now, Backtrace's SDKs have built-in functionality to automatically generate these metrics. This means that you can see session and user stability metrics like "Error-free sessions" in the Backtrace Web Console out of the box. Our APIs also allow you to create your own events so you can track custom metrics and have them sent to your Backtrace instance as well.

### How Does This Feature Help Me?

Often, assessing an end user's experience by looking at crash/error data alone can be difficult. Stability metrics allow you as a developer, producer, or project manager to more easily monitor your project's health in those terms.

### Getting Started

By default, Backtrace's SDKs are configured to capture session and user metrics and use them to calculate and display the following on your project's [Overview page](/error-reporting/web-console/overview/):

- Error-free sessions: The percentage of sessions that did not trigger any error reports. A great measure of your app's aggregate session stability.
- Error-free users: The percentage of unique users who have not experienced an error. Perfect for tracking user experiences.
- Error-free session % through time: A line chart showing the percentage of error-free sessions over time to help you closely monitor your app's stability evolution.

<img src={useBaseUrl('/img/error-reporting/project-settings/EventAgg1.png')} alt="metrics events"/>

This functionality also works in conjunction with the Web Console's filtering. You can filter your data set to get a sense of these stability metrics in a more specific domain. For example, if you want to see the stability of a specific release or only view crashes, you can add that to the filter bar as shown below.

:::note

For filtering with a specific attribute to work, that attribute must be properly configured to be associated with the metric group in question (in the case of Error-free users/sessions, the `Application Launches` metric group). For more information on how to configure this, refer to [Web Console Metric Group / Attribute Linking](/error-reporting/platform-integrations/unity/metrics/#web-console-metric-group--attribute-linking) documentation.

:::

<img src={useBaseUrl('/img/error-reporting/project-settings/EventAgg2.png')} alt="add to filter bar"/>

Another common use case is to exclude non-fatal errors to see these metrics with regard to only fatal errors (Crashes, hangs). The exact filter you use to do this depends on the attributes you are indexing/SDK you are using (for example, errorType = "crash").

### Prioritizing Crash/Error Resolution

The Web Console's Triage and Explore views allow you to normalize your fingerprints against these metrics as well. This allows developers and tech leads to prioritize resolving crashes/errors that have the most impact on your app's stability.

Once your SDK is sending these metrics, use the dropdown list at the top right of the Triage and/or Explore view to normalize your errors by the metric of your choice.

<img src={useBaseUrl('/img/error-reporting/project-settings/EventAgg3.png')} alt="dropdown list to normalize your errors"/>

In this example, we have selected to normalize our errors by sessions. Now, in the "Errors by sessions" column, you can see the impact of each fingerprint relative to the number of sessions it occurred in. In the screenshot below, you can see that even though the fingerprint "8206af2" had the most occurrences, it only manifested in 0.0034% of sessions (1/29,220 total sessions in this time period). So it may make more sense for an engineer to investigate and resolve fingerprint "002e365" instead, which is present in a higher percentage of sessions.

<img src={useBaseUrl('/img/error-reporting/project-settings/EventAgg4.png')} alt="errors by sessions"/>

## Advanced Use Cases and Customization

We understand that different applications are likely to require different metrics to properly monitor stability. While our SDKs provide session and unique user metrics out of the box, we have built this set of features to allow users to define custom metric events to suit the needs of their applications.

For example, you can configure metrics to normalize for:

- How many minutes of app usage were crash/error-free?
- How many "levels" in your game had a crash/error occur?

The configuration steps for this functionality vary by SDK. For more information about the required configuration steps, see the SDK-specific documentation below.

## Data Resolution

Data retention limitations require us to aggregate session data into time slices and discard the original session-level data. The resolution of stability metrics is dependent on the time slices, which are 30 minutes for recent events, and larger over longer periods of time.

Note also that the following factors influence stability metrics. These factors are unique to each performance and observability tool and, because they are unique, 1:1 comparison will not be possible between tools.

- The precise definitions of user and application sessions
- The exact moment in the application lifecycle when session reports begin sending (For Sauce Labs Error Reporting, this excludes application startup time before SDK initialization)
- The time slice selected for view (older periods have less granular calculations)
- Time span and customer-applied filters

## SDK Support Links

As of August 2021, only our Unity SDK supports this functionality. Support for the Unreal Engine, native Android and iOS SDKs will be introduced in a future release.

[Unity SDK - Stability Metrics Configuration Documentation](/error-reporting/platform-integrations/unity/metrics/)
