---
id: submission-actions
title: Submission Actions
sidebar_label: Submission Actions
description: Submission Actions allow customers to configure Backtrace to perform actions in response to incoming traffic.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview
Submission Actions allow customers to configure Backtrace to perform actions in response to incoming traffic. Actions can be performed based on a flexible rule system that can match strings or regex to modules, callstacks, or attributes and decide how to proceed. Highlights of the actions provided include: dropping traffic, automated assignment, setting classifiers and more.

## Supported Actions
Submission actions can be configured under Project Settings:

<img src={useBaseUrl('img/error-reporting/project-settings/submission-actions.png')} alt="" />

The following actions are supported:

### Reject Submission
This action will reject and never store the error. This is useful for customers who want to throw away crashes for specific noisy users, old versions, unsupported platforms, hacked games, etc.

### Drop Object and Index Only
This action will process (index) the minidump and any other error object (including file attachments) and then delete (drop) it so it is not counted towards storage quota. This is useful if the user has no need to retain the object for storage and external analysis.

<img src={useBaseUrl('img/error-reporting/project-settings/submission-actions-drop-object-and-index-only.png')} alt="" />

### Probability Sampling
Both "Reject Submission" and "Drop Object and Index Only" offer functionality to apply a created rule with some probability.  In the example below, the rule would filter out 20% of error reports whos error message equals "Test Error".  

<img src={useBaseUrl('img/error-reporting/project-settings/sampling-example.png')} alt="" />

### Set Values and Auto Assignment
This action can be used for automated assignment or to set specific attribute values.

<img src={useBaseUrl('img/error-reporting/project-settings/submission-action-set-value.png')} alt="" />


### Union Values
This action is like Set Values, but for ‘label’ types, like Tags or Classifiers, where instead of ‘setting’ a value, the system is ‘adding’ a value to the field, so it can contain multiple values.

<img src={useBaseUrl('img/error-reporting/project-settings/submission-action-union-values.png')} alt="" />
