---
id: diffing-engines
title: Sauce Labs Visual Testing
sidebar_label: Diffing Engines
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Diffing Engines

Sauce Visual Testing supports the various diffing engines, which are described below.
Our SDKs give you the ability to select a specific engine for each snapshot, if you don't want to rely on the default engine.


### Balanced

The Balanced engine will soon be our default engine.
It support all features like selective diffing and provides great all around performance.
It is able to detect single pixel changes while ignoring barely visible rendering artifacts such as anti-aliasing or small color inaccuracies.


### Simple

Our first engine. It is similar to the Balanced engine, but we specifically developed the Balanced engine to address some corner cases that the Simple engine didn't handle well.
We will support the Simple engine for the forseeable future, but we won't backport new features to it.
In particular, selective diffing is not available for the Simple engine.

We recommend using the Balanced engine instead of the Simple engine.


### (Experimental)

We have am Experimental engine that is constantly changing and used for showcasing and troubleshooting.
Please don't use this engine in production.
