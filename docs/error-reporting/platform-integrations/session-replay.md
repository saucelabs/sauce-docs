---
id: session-replay
title: Session Replay for Web
sidebar_label: Session Replay
description: Configure session replay in your web applications.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note

Session Replay is currently in beta and only available for web applications. Replays are limited during this phase.

:::

Session Replay allows you to capture a visual recreation of a user session. This simplifies the replication of user errors to determine the root cause. Combining session replays with breadcrumbs and callstacks can give a complete view of the user experience. 

## Overview of Session Replay
Session replay works by capturing the DOM state periodically when the user interacts wtih your application. The user session is then recreated when viewing the error in Backtrace. Unlike a video recording, these packages are lightweight and allow for additional processing prior to being sent and stored in Backtrace (e.g. masking PII). Backtrace SDK snips the session around a triggering error so your team can hone in on a specific issue.

The Backtrace implementation makes use of [rrweb](https://github.com/rrweb-io/rrweb/blob/master/guide.md).

## Prerequisites
- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Follow the [JavaScript integration guide](https://docs.saucelabs.com/error-reporting/language-integrations/javascript/).

## Setting Up Session Replay

### Install the package
```bash
 npm install @backtrace/session-replay
```
### Integrate the session replay module

Add the following code to the build the session replay module:

```javascript
import { BacktraceClient, BacktraceConfiguration } from '@backtrace/browser';
import { BacktraceSessionReplayModule } from '@backtrace/session-replay';

// Configure client options
const options: BacktraceConfiguration = {
    // Name of the website/application
    name: 'MyWebPage',
    // Version of the website
    version: '1.2.3',
    // Submission url
    // <universe> is the subdomain of your Backtrace instance (<universe>.backtrace.io)
    // <token> can be found in Project Settings/Submission tokens
    url: 'https://submit.backtrace.io/<universe>/<token>/json',
};

// Initialize the client with the options
// Make sure to add `useModule` with `BacktraceSessionReplayModule`
const client = BacktraceClient.builder(options)
    .useModule(
        new BacktraceSessionReplayModule({
            maxEventCount: 100,
        }),
    )
    .build();
```
Additional options for event limiting, masking, privacy, and more can be found on [Backtrace github](https://github.com/backtrace-labs/backtrace-javascript/tree/main/packages/session-replay).
