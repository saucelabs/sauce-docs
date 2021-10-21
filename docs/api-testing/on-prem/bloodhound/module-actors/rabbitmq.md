---
id: rabbitmq
title: "Bloodhound: RabbitMQ Module"
sidebar_label: RabbitMQ
---

The module implements an actor that connects to RabbitMQ and publishes the JSON-marshaled API conversation to a
RabbitMQ exchange.

## Sidecars

### `RabbitSerializerActor`

Connects to RabbitMQ and publishes the JSON-marshaled API conversation to a
RabbitMQ exchange.

**class:** `com.apifortress.afthem.modules.rabbitmq.actors.sidecars.serializers.RabbitSerializerActor`

**configuration:**

General serializer settings:

* `disable_on_header`: if the provided header is present in the request, then the conversation will skip serialization
* `enable_on_header`: if the provided header is present in the request, then the conversation will be serialized
* `discard_request_headers`: list of request headers that should not appear in the serialized conversation
* `discard_response_headers`: list of response headers that should not appear in the serialized conversation
* `allow_content_types`: full or partial response content types which make the request eligible for serialization. If
the list is null or empty, all content types will be accepted

RabbitMQ settings:

* `uri`: a RabbitMQ URI, as in `amqp://username:password@host/virtualHost`
* `exchange`: the ID of the RabbitMQ exchange
* `routing_key`: the routing key to be applied to the message (empty string is the default)
* `ttl`: time-to-live in milliseconds of the message. default: -1, no ttl