---
id: on-prem-platform
title: Introduction to the Self-Hosted Platform
sidebar_label: Introduction
keywords:
    - api
    - api-fortress
    - onpremises
    - selfhosted
---

## What Is It?

API Fortress can be deployed in nearly any manner that works for you - whether hosted cloud, self-hosted/on-premises, or hybrid.

Our most popular is self-hosted/on-premises, which means the _entire_ platform lives in your environment behind your firewall, or in your VPC.

## Why?

There are multiple reasons for having an on-prem engine, and these are some of the most common:

- Satisfies Any Security Requirements
- Complete Data Ownership
- Access to Private Staging Environments, Click here to learn more about the [Downloaders](https://apifortress.com/doc/downloader-101/).
- Mocking
- Load Testing
- Unlimited Use
- Customization

## Customization

API Fortress is extremely **modular,** and most functionalities can be enhanced with extensions and integrations. Some use cases are:

- Forwarding the results of the tests in a dedicated platform for further analysis, another database, or an object storage.
- Customizing the chain of alerts with internal tools.
- Storing the code of the tests in a location that is not the API Fortress cloud.
- Adding the ability to ingest and analyze exotic data types.
- Adding functionalities provided by 3rd party libraries

All this is done with a few lines of Java/Groovy that we can help you with.

## Deployment

A simple [Docker](/api-testing/mark2/self-hosted/deployment-docker) / [Kubernetes](/api-testing/mark2/self-hosted/deployment-kubernetes) / [Open Shift](/api-testing/mark2/self-hosted/red-hat-openshift) deployment. 

We ask a handful of questions, setup a configuration file for you, and then you deploy with your preferred container. The system requirements [here](/api-testing/mark2/self-hosted/on-premises-requirements).

If you would like to trial API Fortress on-premises, simply [fill out this survey](https://apifortress.com/doc/on-premises-questionnaire/) and we will work on a configuration file for you.

## Operations

The engine operates exactly the same way API Fortress does in the cloud. Self-hosted/on-premises actually offers even more features which we discussed above under Customizations.
