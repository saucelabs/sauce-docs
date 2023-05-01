---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

If you're new to Sauce Orchestrate, this list of frequently asked questions can help you with what you need to know.

## Will Sauce Connect continue to work?

Yes, Sauce Connect will continue to work. Sauce Orchestrate is all about running your test scripts from within the Sauce Labs grid and does not change anything about the connection between the underlying Virtual Machine or Real Device and your Application Under Test (AUT).

## How secure is Sauce Orchestrate?

Sauce Orchestrate is a different way of repurposing existing technology available in Sauce Labs today. Most importantly, this means it falls within the Sauce Labs SOC 2 Type II and ISO 27001 certifications.

As part of our standard annual SOC 2 Type II audit ISO 27001 re-certification audit, we intentionally do not exclude any platforms from our audit. Sauce Orchestrate does not represent a change in our security protocols, our tools, our policies and procedures, etc.

We also provide many additional security mechanisms to keep your data safe.

- We provide many secure mechanisms for [Handling Sensitive Data](./best-practices.md#sensitive-data)
- Each running container is created and destroyed as part of your request
- We do not store or access your image outside of some local caches to improve performance
- Your running container is sandboxed from a networking perspective from any other containers

## What programming languages and frameworks are supported by Sauce Orchestrate?

Sauce Orchestrate is framework and programming language agnostic - it means it is flexible and adaptable, enabling development teams to use any framework or programming language they choose.

## How many concurrent sessions can I run with Sauce Orchestrate?

As far as concurrent sessions are concerned with Browsers and Real Devices, the same concurrency limits apply no matter how tests are executed. However, there is an initial limit of 10 Orchestrate sessions available to run at a given time but this can be increased upon request.

## Can I integrate Sauce Orchestrate with my existing testing framework?

Yes. If you are already familiar with container technology, Sauce Orchestrate is designed specifically to be used with your existing testing framework.

## Can I use Sauce Orchestrate to test my website on different browsers and devices?

Yes you can because Sauce Orchestrate is language, framework, location, OS/ browser, device agnostic.

## Can I schedule tests to run automatically using Sauce Orchestrate?

Yes, with Sauce Labs Orchestrate you can automate your testing process, freeing up your time to focus on other critical tasks. By scheduling tests to run at regular intervals, you can also catch issues early in the development process, minimizing the risk of bugs making it to production.

## Does Sauce Orchestrate support debugging and troubleshooting?

Yes, Sauce Orchestrate provides several debugging and troubleshooting features to help users identify and resolve issues with their tests.

## Can I customize the testing environment when using Sauce Orchestrate?

Yes, Sauce Orchestrate provides a high degree of customization options to its users. The tool allows users to configure the testing environment based on their specific requirements, including browser versions, operating systems, and device types. Users can also specify the testing framework and programming language they prefer to use for their test automation.
