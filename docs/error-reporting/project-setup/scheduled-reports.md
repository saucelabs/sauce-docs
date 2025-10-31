---
id: scheduled-reports
title: Scheduled Reports
sidebar_label: Scheduled Reports
description: Scheduled reports are e-mail digests containing the latest trends and anomalies of instability for your projects.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Scheduled reports are e-mail digests containing the latest trends and anomalies of instability for your projects. An excerpt from a report is presented below.

<img src={useBaseUrl('img/error-reporting/project-settings/scheduled-report.png')} alt="" />

The report includes trends for the current reporting period, the previous reporting period, histograms of attribute values, classifiers as well as an activity of recent unique crashes. If your project is configured with Stability Monitoring, the report will also include error free user metrics (percentage of users who have not experienced an error).

## Creating and Modifying Reports

The Scheduled Reports settings are in the project settings page. From there, click on the Create a New Report button to begin setting up a scheduled report.

The following criteria are used to modify the contents of a report.

### Report Name

This is the title of the report. Since you are able to create multiple reports, it is good practice to provide sufficient context in the title so the readers have visibility into the context of the report. For example, "Production Crashes for HelloWorld" is a good title.

### Frequency

This is the frequency which a report should be generated and sent. The two options today are daily or weekly.

### Day of Week

If a Weekly frequency is selected, Day of Week specifies the day of the week the report should be generated and sent.

### Time to Send

This is the time of day that the report should be generated and scheduled for delivery.

### Timezone

This specifies the timezone of the report, dictating which timezone timestamps in the report should be rendered in as well as the time the report should be sent. For example, "9:00 AM EST" would specify a report should be sent around "9:00 AM EST" and that the timestamps of the report should be in "EST".

### Recipients

This section specifies who should receive a copy of the report. If the Send to all team members checkbox is checked, then all users with accounts on the Backtrace instance will receive an e-mail with the report. The Other Recipients section allows you to include people that may not have accounts on the system as well as mailing lists.

### Filter Report Content

This section allows you to include or exclude crashes for the purposes of reporting. You are able to filter on any attribute using query builder filters.

### Custom Content (Histograms)

This section allows you to add histograms to the report. For example, you may want a histogram of affected versions, operating systems or more included in your report. Simply provide the attribute names which you would like histograms for.

## Saving the Report

You are able to save the report with Save and Close. If you would like to save the report and see a preview, then use Save and send me a preview.

## Sending Previews

In the scheduled report list, you are able to click on the Preview button to have a report scheduled for immediate delivery to your e-mail for review.

## Common Questions

### How can I see only fatal errors in my report?

In the filter settings, you can enter `error.type` equals `crash`. This will modify the statistics to only reflect crashes. Error-free user rate would reflect the crash-free user rates. `error.type` can be used for hangs, exceptions, and other values as well.

### Can I have individual users opt-out of reports?

No, not at the moment. You are able to use a manual recipient list or may want to consider using a mailing list which will have finer-grained control over membership and distribution lists.

#### Can I save multiple reports?

Yes! This is a common use-case when coupled with filters. For example, you may want a report for every version of your application or facet by other attributes.
