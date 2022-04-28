---
id: functional-testing
title: How to do Functional Testing
sidebar_label: Functional Testing
description: "How to do functional testing using Sauce Labs API Testing"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

__Functional Testing__ is a type of software testing that validates the software system agains the functional requirements. 
The testing agent will behave as a client, interacting with the service and check for inconsistencies with the expectations.

## What You'll Need

* An existing API Testing Project. For details on how to create one, see the [Quickstart](/api-testing/quickstart/) guide.

## Functional Testing

In Sauce Labs API Testing platform you can create functional tests in different ways.

### Build a Test from Spec File

One of the easiest ways to build a Functional Test is importing a Spec File into the HTTP Client and let the system generate a test for you. Learn more on how to [Build a Test from Spec File](/api-testing/build-from-spec/)

### Build a Test from a Postman Collection

Another easy way to generate a Functional Test is importing a Postman Collection in the same way as a Spec file. Learn more on how to [Build a Test from a Postman Collection](/api-testing/import-postman-collection/)

### Create a Test from Scratch

You can also create a test from scratch using the [Composer](/api-testing/composer/). You can add your calls using the [I/O Components](/api-testing/composer/io-components/) and validate the responses using the [Assertions](/api-testing/composer/assertion-components/). To add some logic to your tests you can use the [Logical Components](/api-testing/composer/logical-components/) and all the [Other Components](/api-testing/composer/other-components/) available.

