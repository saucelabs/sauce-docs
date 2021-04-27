---
id: test-status
title: Setting Test Statuses
sidebar_label: Setting Test Statuses
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What You'll Learn
* How to use the JavaScript Executor to update the status of your test at the end of the session
* How to use the Sauce Labs REST API to update the status of your test after it has already completed

## Update Test Status in Session
You can use the Selenium JavaScript Executor to annotate your test in the @after hook. This is the ideal means of writing your tests to interpret the results as a pass/fail and update the status accordingly.

:::caution JavaScript Executor
The JavaScript Executer commands can only be run while the test is in session. Once the test is complete, the JavaScript Executor commands are no longer applicable and you must use the REST API to update the test.
:::

### Video: Setting Test Status to Pass Fail
Watch this video for a demonstration of using the Selenium JavaScript Executor to annotate your test result with a Passed/Failed status.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iaKRGjO-L8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Code Examples

The annotation for calling the JavaScript Executor in your test differs slightly for each framework and language, which are provided in the following code snippet examples. Refer to our Sauce Labs Demonstration Code Repositories on GitHub for further information, and more context, on annotating your tests to record the pass/fail status.

<Tabs
defaultValue="java"
values={[
    {label: 'Java', value: 'java'},
    {label: 'C#', value: 'c#'},
    {label: 'Python', value: 'python'},
    {label: 'NodeJS', value: 'node'},
    {label: 'Ruby', value: 'ruby'},
]}>

<TabItem value="java">
Coming Soon!
</TabItem>

<TabItem value="c#">
Coming Soon!
</TabItem>

<TabItem value="python">
Coming Soon!
</TabItem>

<TabItem value="node">
Coming Soon!
</TabItem>

<TabItem value="ruby">
Coming Soon!
</TabItem>
</Tabs>


## Updating Test Status After Completion

If you did not use the JavaScript Executor to update the status of your test as an assertion in the test code, you can still use the Sauce Labs REST API to update the test status.

### What You'll Need
* Your Sauce Labs account credentials
* The JOB_ID for the test you wish to update

Call the `update_jobs` REST API and pass the parameter "passed" with a value of "true" or "false".


```bash title="Update Test Status"
curl PUT -X -u USERNAME:ACCESS_KEY \'https://saucelabs.com/rest/v1/USERNAME/jobs/JOB_ID' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": {
        "passed": "true"
    }
}'
```

You can obtain the JOB_ID either by:

* Collecting and storing the web driver SessionId for the test, which Sauce Labs uses as the JOB_ID
* testFinding the Id value in the test's Metadata tab in the Sauce Labs app, as shown in the following figure

<img src={useBaseUrl('img/test-results/test-results-meta-id.png')} alt="Test results metadata - JOB_ID"/>
