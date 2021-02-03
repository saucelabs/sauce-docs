---
id: small-atomic-autonomous
title: Running Small, Atomic, Autonomous Tests
sidebar_label: Running Small, Atomic, Autonomous Tests
---
When a test fails, the most important thing is knowing what went wrong so you can easily come up with a fix. The best way to know what went wrong is to keep three characteristics in mind when designing your tests: small, atomic, and autonomous.

## Small

Small refers to the idea that your tests should be short and succinct. If you have a test suite of 100 tests running concurrently on 100 VMs, then the time it will take to run the entire suite will be determined by the longest/slowest test case. Keeping your tests small ensures that your suite will run efficiently and provide you with results faster.

## Atomic

An atomic test is one that focuses on testing a single feature, and which makes clear exactly what it is that you're testing. If the test fails, then you should also have a very clear idea of what needs to be fixed.

## Autonomous

An autonomous test is one that runs completely independently of other tests, and is not dependent on the results of one test to run successfully. In addition, an autonomous test should use its own data to test against, and not create potential conflicts with other tests over the same data.
