---
id: fine-tuning
title: "Bloodhound: Fine Tuning"
sidebar_label: Fine Tuning
description: "This page covers recommendations on how to fine-tune Bloodhound's configurations."
---

Bloodhound can be fine-tuned for your needs. This ability comes with the price of complexity, so it is important to understand the inner mechanisms before modifying the configuration files.

## Actors

The `implementers.yml` file defines which actors need to be instantiated, as in:

```yaml
  - id: request
    class: com.apifortress.afthem.actors.proxy.RequestActor
    type: proxy
```

An actor instance can do one thing at a time, and if new tasks come up as it's involved in a task, the new inbound tasks get queued in a "mailbox". The actor will proceed with the next task when available.

You can clearly declare multiple actors of the same type in `implementers.yml`, using different IDs, and in that case the actors will be completely distinct and will need to be explicitly referenced.

For Example:

```yaml
  - id: transform_headers_1
    class: com.apifortress.afthem.actors.transformers.TransformHeadersActor
    type: transformer
  - id: transform_headers_2
    class: com.apifortress.afthem.actors.transformers.TransformHeadersActor
    type: transformer
```

This is useful if you need to proxy completely different APIs, and you want to make sure they will not interfere one with the other. In that case you will use `transformer/transform_headers_1` in one flow, and `transformer/transform_headers_2` in another flow.

A single actor implementer, however, can have a multiplicity. In other words, one ID in the `implementers.yml` file could represent a team of actors of the same type, sharing the effort in parallel and share the same mailbox. This allows a step in the sequence to be served by multiple actors, and ideally, speed up the process. This is important, for example, when a step is CPU-intensive. As in:

```yaml
  - id: request
    class: com.apifortress.afthem.actors.proxy.RequestActor
    type: proxy
    instances: 3
```

Notice the `instances` keyword.

## Thread pools

Actors, as previously said, **could** allow you to work in parallel, but actors need tools to do so. The tools are the threads. Threads are expensive both in terms of memory and CPU so you don't want to spawn too many. Bloodhound gives you the option to decide how the system resources need to be utilized with great detail.

In the `implementers.yml` file, the `thread_pools` section allows you to create pools of threads that can be assigned to actors.

```yaml
thread_pools:
  default:
    min: 1
    max: 2
    factor: 1
  computational:
    min: 2
    max: 2
    factor: 2
```

* `min` is the minimum number of threads created for this thread pool.
* `max` is the maximum number of threads created for this thread pool (the threads exceeding `min` get decommissioned when not in use)
* `factor` is a multiplier that depends on the server Bloodhound is operating on and it works like this `factor` * `cpu` = `number_of_threads`. A way to make the system more adaptive to the context.

The `default` thread pool is used when no pool is assigned to an implementer. To assign a specific thread pool, update the implementer like so:

```yaml
  - id: header_filter
    class: com.apifortress.afthem.actors.filters.FilterActor
    type: filter
    instances: 2
    thread_pool: computational
```

Thread pools can be assigned to a specific implementer or to multiple implementers. This is crucial because a good balance strongly reduces resource waste. In `etc.simplest`, for example, two instances of `header_filter` and two instances of `transform_headers` share a single pool with 2 threads max. This means that at most, 2 filter operations OR 2 transformation operations OR 1 filter and 1 transformation operations can happen at the same time.

## HTTP Client Configuration

The HTTP Client is the component that will perform the call from Bloodhound to the upstreams. The client, one for the whole application, can be fine tuned based on your knowledge of your use case. The configuration of these aspects happen in the `application.properties` file.

* `httpclient.max_threads`: number of I/O dispatchers thread to be created and reserved to the HTTP Client;
* `httpclient.idle_timeout_seconds`: number of seconds before an idle open connection needs to be considered _stale_ and candidate for removal;
* `httpclient.max_connections`: max number of open connections the system should be able to keep up, before it starts dropping some;

## This is Complicated!

Indeed, but if you understand how this can help you, good things will happen.

:::tip Think about this

* Actors are about how many tasks can potentially be executed at the same time, but also how things will line up. A team of actors (instead of just one) make so that if a task is taking longer than expected, the tasks lining up will get assigned to the other actors of the team and not wait forever.
* Threads, instead, are about how you want to assign the resources of your system to the actors.
:::