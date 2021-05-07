---
id: the-working-copy-published-tests
title: "The Working Copy / Published Tests"
sidebar_label: "The Working Copy / Published Tests"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

When you work on a test you are not editing the actual test, but a working copy (a clone) of the test. The working copy can be edited, reset, and saved to continue the work later, but none of these actions alter the state of the live test.

When you're done editing you will need to **PUBLISH** the test so that the working copy replaces the current live test to become official.

<img src={useBaseUrl('img/api-fortress/2016/03/testControlPanel.jpeg')} alt="Test Control Panel"/>

## The Problem

API Fortress is meant to alert people when something goes wrong. So if you are editing a test, and an incomplete test runs based on the schedule, you will receive a failure notification (i.e. a false positive).

By using the working copy to make your edits, the scheduler will not execute a test unless it is finalized and published.

## Solution Summary

- You don't edit the live test. When you edit one, you're actually editing the working copy.
- If you want to start over from the live test you can 'Clear Working Copy' to create a fresh version of the live test that you can edit.
- When you are done editing click 'Publish' so your working copy goes live and the scheduler will use this new test for its executions.
- If you create a new test but never publish it, the test will be marked as 'incomplete.'
