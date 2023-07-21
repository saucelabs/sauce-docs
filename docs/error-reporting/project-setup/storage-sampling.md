---
id: storage-sampling
title: Storage Sampling
sidebar_label: Storage Sampling
description: Learn how to configure storage sampling for your Backtrace instance to limit disk usage.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Popular games or applications can see volumes of 1,000,000 submitted crashes a week with average attached object files (i.e. dumps or attachments) ranging from 15-20 MB. Storing all these objects can easily fill up 17.5 TB of storage every week, or 200 TB for 90 days retention of data.

When a fingerprint has large numbers of objects, storing most objects beyond a certain amount, generally a few dozen, adds little value. Backtrace offers storage sampling to control object storage with respect to a unique combination of fingerprint and optional specified attribute values.

Storage sampling dynamically decides upon ingestion which files should be kept in long-term storage and which files can be discarded after processing is complete. Most Backtrace instances have disk quota associated to them, and storage sampling provides a way to control the usage of disk depending on your teams specific needs by limiting the number of objects stored within a fingerprint.

## Rate Limit Rules

Rate limit rules allow you to specify minimum time intervals between storing received objects. Rate limits include a count (number of objects to be stored) and an interval (minimum number of seconds between storing a received object).

:::note
A rate limit's time interval is a minimum and there is no guarantee of getting objects for a particular group in any particular timeframe.
:::

Indexing of objects always occurs even when an object is deleted by sampling, so metadata will always be updated by each object. The object deletion only impacts the Debug view and object download.

Storage sampling configurations include a reset interval at which the sampling counts are reset. Backtrace also provides a [Retention Policy](/error-reporting/project-setup/data-retention) system, and generally, this reset interval for storage sampling should be no more than the Retention Policy's deletion interval to ensure that if objects within a given sampling group continue to be submitted, then there are always objects available in it.

:::note
As of March 5, 2020, the reset interval begins when the final rate limit's bucket is filled. Note that we are considering updating this behavior so that the interval begins upon a group's first stored object. Backtrace will work with customers to enable sampling configurations that are appropriate for their instance or projects.
:::

## Configuration

Storage sampling can be configured by Admin users in **Project settings** > **Project** > **Storage sampling**.

See the example configuration below:

<img src={useBaseUrl('img/error-reporting/project-settings/storage-sampling-config.png')} alt="Shows an example configuration for storage sampling." width="750" />

The above configuration defines a unique combination of fingerprint and application version. It will store 2 objects with 0 minutes in between, then 4 more objects with at least 1 minute in between, then 8 objects with at least 60 minutes in between. After the final rate limit, nothing is stored until the reset interval (1 day) is reached. The rate limits will then start again from the first bucket.
