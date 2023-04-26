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

- We provide many secure mechanisms for [Handling Sensitive Data](./best-practices#sensitive-data)
- Each running container is created and destroyed as part of your request
- We do not store or access your image outside of some local cahces to improve performance
- Your running container is sandboxed from a networking perspective from any other containers
