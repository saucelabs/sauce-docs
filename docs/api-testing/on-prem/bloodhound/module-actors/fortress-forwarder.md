---
id: fortress-forwarder
title: "Bloodhound: Fortress Forwarder Module"
sidebar_label: Fortress Forwarder
---

Actors to serialize API conversations and send them using HTTP calls. Two formats are supported.

## Sidecars

### `FortressForwarderSerializerActor`

Serializes the API conversation using the default Bloodhound implementation and forwards the result via HTTP. While the
module has been originally designed to work with the API Fortress suite, it can easily be used with any other system.

**class:** `com.apifortress.afthem.modules.fortressforwarders.actors.sidecars.serializers.FortressForwarderSerializerActor`

**sidecars:** no

**configuration:**

General serializer settings:

* `disable_on_header`: if the provided header is present in the request, then the conversation will skip serialization
* `enable_on_header`: if the provided header is present in the request, then the conversation will be serialized
* `discard_request_headers`: list of request headers that should not appear in the serialized conversation
* `discard_response_headers`: list of response headers that should not appear in the serialized conversation
* `allow_content_types`: full or partial response content types which make the request eligible for serialization. If
the list is null or empty, all content types will be accepted

Extra serializer settings:

* `buffer_size`: the serializer can buffer a number of conversations and save them once the buffer is full to improve
DB communication performance. If absent or if the value is less than 1, the document is inserted as asson as the actor
receives it

Forwarder settings:

* `url`: the URL to POST the serialized conversation to
* `headers`: a key/value map of request headers to be added to the outbound request 

### `FortressLiveTestingActor`

Serializes the API **response** using the legacy API Fortress live testing format.

**class:** `com.apifortress.afthem.modules.fortressforwarders.actors.sidecars.serializers.FortressLiveTestingActor`

**sidecars:** no

**config:**

* `url`: the URL to submit the request to. The string will be evaluated if the `#msg` keyword is present.
* `params`: e key/value map of extra parameters to be sent to the receiving end 

