---
id: expressions
title: "Bloodhound: Expressions"
sidebar_label: Expressions
---

In Bloodhound actors configuration, you may find fields allowing dynamic expressions. These expressions get evaluated to generate a dynamic value.

## SpEL - Spring Expression Language

The language used by Bloodhound is the [**Spring Expression Language**](https://docs.spring.io/spring/docs/4.3.10.RELEASE/spring-framework-reference/html/expressions.html).

## Uses in Bloodhound

All of expressions will make use of the current message being processed. The message is accessible using the `#msg` keyword.

Here's a breakdown of many internal members, accessed using SpEL.

* `#msg`: the current message;
* `#msg.request()`: the request object;
* `#msg.request().getHeader('key')`: returns a certain request header;
* `#msg.request().payload()`: the request payload, in the form of an array of bytes;
* `#msg.request().callId()`: the call id, as defined by the EndpointIdentifierActor
* `#msg.response()`: when evaluating a message after the upstream phase, this expression will access the response object;
* `#msg.response().getHeader('key')`: returns a certain response header;
* `#msg.response().payload()`: the response payload, in the form of an array of bytes;
* `#msg.meta()`: the metadata map;
* `#msg.meta().getOrElse('key','defaultValue')`: returns the value of the metadata identified by the key. 'defaultValue' in case the metadata does not exist
