---
id: xctest-plan
title: Run XCTest plans on Sauce Labs
sidebar_label: XCTest plan
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

### XCTest Plan Support at Sauce Labs

Sauce Labs provides native support for XCTest Plans, making it easier than ever to run your entire iOS test suite in the cloud with
minimal configuration changes. With this new feature, you can leverage XCTest Plans to organize, customize, and efficiently scale your test runs
on Sauce Labs' real devices.***

### What is an XCTest Plan?

An XCTest Plan is a feature in Xcode that allows you to define multiple configurations for running your test suite. It enables better test
organization, selective execution of test cases, and more granular control over test behaviors—without modifying your test code.

### Why Use XCTest Plans on Sauce Labs?

XCTest Plans offer increased flexibility and control over test execution. With Sauce Labs' real device cloud, you can maximize
efficiency, scalability, and reliability. Here’s why running XCTest Plans on Sauce Labs is a game-changer:

- ✅ ***Seamless Integration***
    * Run your existing XCTest Plans on Sauce Labs' real devices with minimal setup.
    * No need to modify test code. Upload your test artifacts and start testing.
- 🎯 ***Granular Test Selection & Configuration***
    * Use different XCTest Plan configurations to run specific test groups.
    * Define test priorities, set environment variables, and control execution behaviors—all without modifying your test suite.
- ☁ ***Scalable, Cloud-Based Testing***
    * Run tests on a wide range of real iOS devices without managing physical hardware.
    * Access the latest iOS versions and devices.
- 📊 ***Comprehensive Test Insights***
    * View detailed test reports, logs, and video recordings directly in the Sauce Labs dashboard.
    * Debug failures with rich artifacts, including device logs and screenshots.

By running your XCTest Plans on Sauce Labs, you gain a more efficient, reliable, and scalable testing workflow—allowing you to ship
high-quality apps faster.

### How to Use XCTest Plans on Sauce Labs

Using XCTest Plans on Sauce Labs is simple. Just follow these steps:

1. Prepare Your XCTest Plan – Ensure your test suite includes an .xctestplan file configured in Xcode.
1. Upload Your Test Artifacts – Provide your .xctestrun file and associated test bundle when starting a test on Sauce Labs.
1. Run Tests in the Cloud – Run your test plan using Sauce Labs' test runner, specifying your desired configurations.
1. Analyze Results – View test reports, logs, and insights directly in the Sauce Labs dashboard.

## Get Started Today

XCTest Plan support is now available for iOS testing on Sauce Labs. Start optimizing your test execution and improve test efficiency with
our seamless cloud-based solution.

For more details, check out our [documentation](/mobile-apps/automated-testing/espresso-xcuitest/xctest/).

