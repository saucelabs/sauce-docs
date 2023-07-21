---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If you're new to Sauce Orchestrate, this list of frequently asked questions can help you with what you need to know.

## Will Sauce Connect Continue to Work?

Yes, Sauce Connect will continue to work. Sauce Orchestrate is all about running your test scripts from in the Sauce Labs grid and does not change anything about the connection between the underlying Virtual Machine or Real Device and your Application Under Test (AUT).

## How Secure Is Sauce Orchestrate?

Sauce Labs utilizes the following security mechanisms in handling sensitive data:

- Each running container is created and destroyed as part of your request.
- Sauce Labs does not store or access your image outside of local caches for improved performance.
- Your running container is sandboxed from a networking perspective (virtually isolated from other containers).
- Sauce Labs maintains SOC 2 Type II and ISO 27001/27701 certifications.

## What Programming Languages and Frameworks are Supported by Sauce Orchestrate?

Sauce Orchestrate is framework and programming language agnostic - it means it is flexible and adaptable, enabling development teams to use any framework or programming language they choose.

## How Many Concurrent Sessions Can I Run with Sauce Orchestrate?

As far as concurrent sessions are concerned with Browsers and Real Devices, the same concurrency limits apply no matter how tests are run. However, there is an initial limit of 10 Orchestrate sessions available to run at a given time but this can be increased upon request.

## Can I Integrate Sauce Orchestrate With my Existing Testing Framework?

Yes. If you are already familiar with container technology, Sauce Orchestrate is designed specifically to be used with your existing testing framework.

## Can I use Sauce Orchestrate to Test My Website on Different Browsers and Devices?

Yes you can because Sauce Orchestrate is language, framework, location, OS/ browser, device agnostic.

## Can I Schedule Tests to Run Automatically Using Sauce Orchestrate?

Yes, with Sauce Labs Orchestrate you can automate your testing process, freeing up your time to focus on other critical tasks. By scheduling tests to run at regular intervals, you can also catch issues early in the development process, minimizing the risk of bugs making it to production.

## Does Sauce Orchestrate Support Debugging and Troubleshooting?

Yes, Sauce Orchestrate provides several debugging and troubleshooting features to help users identify and resolve issues with their tests.

## Is Sauce Orchestrate Free?

No, Sauce Orchestrate is a paid add-on that is available to all customers. Contact help@saucelabs.com for further assistance or to request a demo.

## Can I Customize the Testing Environment When Using Sauce Orchestrate?

Yes, Sauce Orchestrate provides a high degree of customization options to its users. The tool allows users to configure the testing environment based on their specific requirements, including browser versions, operating systems, and device types. Users can also specify the testing framework and programming language they prefer to use for their test automation.
