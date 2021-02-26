---
id: jobs
title: Jobs API Methods
sidebar_label: Jobs
description: View and manage jobs and builds running on Sauce Labs.
---

The Jobs REST API methods allows you to review and edit the metadata associated with the tests you are running on Sauce Labs. You can also start and stop tests, delete jobs, and filter lists of jobs by a variety of attributes, such as owner, time period, build, or environment.

> **NOTE:** These calls are specific to jobs running in simulation. For methods related to Real Device testing, see [Real Device API Methods](rdc).

`DELETE	 /rest/v1.1/<USERNAME>/jobs`

`GET	 /rest/v1/<USERNAME>/builds`

`GET	 /rest/v1/<USERNAME>/jobs`

`PUT	 /rest/v1/<USERNAME>/jobs/<JOB_ID>`

`DELETE	 /rest/v1/<USERNAME>/jobs/<JOB_ID>` (Classic)
        `/rest/v1.1/jobs/<JOB_ID>` (XTM)

`DELETE	 /rest/v1/<USERNAME>/jobs/<JOB_ID>/assets`

`GET	 /rest/v1/<USERNAME>/jobs/<JOB_ID>/assets`

`GET	 /rest/v1/<USERNAME>/jobs/<JOB_ID>/assets/<FILE_NAME>`

`PUT	 /rest/v1/<USERNAME>/jobs/<JOB_ID>/stop`

`POST	 /rest/v1/<USERNAME>/js-tests`

`POST	 /rest/v1/<USERNAME>/js-tests/status`
