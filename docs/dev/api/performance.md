---
id: performance
title: Performance API Methods
sidebar_label: Performance
description: View and  manage front-end performance test data.
---

The Performance REST API methods allow you to retrieve the results from your front-end performance testing as programmatic data so you can represent them in a custom dashboard that is meaningful for your organization.

`POST	 /v2/performance/metrics/`

`POST	 /v2/performance/metrics/<JOB_ID>`

`POST	 /v2/performance/metrics/<JOB_ID>/assert/`

`GET	 /v2/performance/metrics/<JOB_ID>/baseline/`

`GET	 /v2/performance/metrics/<JOB_ID>/baseline/reset/`

`POST	 /v2/performance/metrics/<JOB_ID>/baseline/reset/`

`GET	 /v2/performance/metrics/<JOB_ID>/discarded/`

`POST	 /v2/performance/metrics/<JOB_ID>/discarded/`

`GET	 /v2/performance/metrics/<JOB_ID>/history/`

`GET	 /v2/performance/metrics/<JOB_ID>/regimes/`

`POST	 /v2/performance/metrics/<JOB_ID>/regimes/acknowledge/`
