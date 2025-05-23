---
id: monitoring
title: Monitoring
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Connect Proxy provides server-side monitoring via the REST API and the Sauce Labs [web application](https://app.saucelabs.com/) as well as the client-side monitoring via the local API server and [Prometheus](https://prometheus.io/) metrics.

## Sauce Labs Web UI

You can manage and monitor all Sauce Connect Proxy tunnel activity from the Sauce Labs [**Tunnels**](https://app.saucelabs.com/tunnels) page, which displays useful information, such as the number of active tunnels, tunnel status, and specific attributes for each tunnel. You can also check the health of an individual tunnel by running a test on it.

| Column          | Description                                                                                                                                   |
| :-------------- |:----------------------------------------------------------------------------------------------------------------------------------------------|
| Type            | The icon shows whether the tunnel is a Sauce Connect Proxy, or an IPSec Proxy.                                                                |
| State           | The icon shows whether the tunnel is running or stopped.                                                                                      |
| Tunnel Name     | The name of the tunnel. This is the [`--tunnel-name`](/dev/cli/sauce-connect-5/run/#tunnel-name) used when starting the Sauce Connect tunnel. |
| Client Hostname | The name of the machine where the Sauce Connect Proxy client is running.                                                                      |
| Owner           | The name of the account that is running the tunnel.                                                                                           |
| Sharing         | Indicates whether or not the tunnel is shared.                                                                                                |
| Duration        | The amount of time the tunnel has been running.                                                                                               |

## Grafana Dashboard

[Prometheus](https://prometheus.io/) can be used to monitor Sauce Connect Proxy.
The `/metrics` endpoint is available on [the local API server](/secure-connections/sauce-connect-5/guides/api-server).
Note that the API server must be enabled with the `--api-address` option, and by default it's disabled.

Grafana dashboard using these metrics is available at [Grafana Dashboards](https://grafana.com/grafana/dashboards/20232-sauce-connect/).
See [this demo](https://github.com/saucelabs/sauce-connect-docker/tree/main/examples/docker-compose-prometheus-grafana) for an example of running Sauce Connect Proxy along with [Prometheus](https://prometheus.io/) server and [Grafana](http://grafana.org/) dashboard.

<img src={useBaseUrl('img/sauce-connect/sc5-dashboard.png')} alt="Sauce Connect Proxy 5 Grafana dashboard" width="650"/>

## Prometheus Metrics

The following metrics are available:

### `sauce_connect_dialer_closed_total`

Number of closed connections

Labels:
- host

### `sauce_connect_dialer_dialed_total`

Number of dialed connections

Labels:
- host

### `sauce_connect_dialer_errors_total`

Number of dialer errors

Labels:
- host

### `sauce_connect_errors_total`

Number of errors

Labels:
- name

### `sauce_connect_http_request_duration_seconds`

The HTTP request latencies in seconds.

Labels:
- code
- method

### `sauce_connect_http_request_size_bytes`

The HTTP request sizes in bytes.

Labels:
- code
- method

### `sauce_connect_http_requests_in_flight`

Current number of HTTP requests being served.

Labels:
- method

### `sauce_connect_http_requests_total`

Total number of HTTP requests processed.

Labels:
- code
- method

### `sauce_connect_http_response_size_bytes`

The HTTP response sizes in bytes.

Labels:
- code
- method

### `sauce_connect_process_cpu_seconds_total`

Total user and system CPU time spent in seconds.

### `sauce_connect_process_max_fds`

Maximum number of open file descriptors.

### `sauce_connect_process_network_receive_bytes_total`

Number of bytes received by the process over the network.

### `sauce_connect_process_network_transmit_bytes_total`

Number of bytes sent by the process over the network.

### `sauce_connect_process_open_fds`

Number of open file descriptors.

### `sauce_connect_process_resident_memory_bytes`

Resident memory size in bytes.

### `sauce_connect_process_start_time_seconds`

Start time of the process since unix epoch in seconds.

### `sauce_connect_process_virtual_memory_bytes`

Virtual memory size in bytes.

### `sauce_connect_process_virtual_memory_max_bytes`

Maximum amount of virtual memory available in bytes.

### `sauce_connect_proxy_errors_total`

Number of proxy errors

Labels:
- reason

### `sauce_connect_tunnel_connect_duration_seconds`

The time it takes to establish a tunnel connection.

Labels:
- address

### `sauce_connect_tunnel_dialer_closed_total`

Number of closed connections

Labels:
- host

### `sauce_connect_tunnel_dialer_dialed_total`

Number of dialed connections

Labels:
- host

### `sauce_connect_tunnel_dialer_errors_total`

Number of dialer errors

Labels:
- host

### `sauce_connect_tunnel_errors_total`

Total number of errors by type.

Labels:
- type

### `sauce_connect_tunnel_info`

Information about Sauce Connect tunnel, value is always 1

Labels:
- addr
- hostname
- id
- name

### `sauce_connect_tunnel_received_bytes`

Total number of bytes received.

Labels:
- conn

### `sauce_connect_tunnel_sent_bytes`

Total number of bytes sent.

Labels:
- conn

### `sauce_connect_version`

Sauce Connect Proxy version, value is always 1

Labels:
- commit
- time
- version

### `go_gc_duration_seconds`

A summary of the wall-time pause (stop-the-world) duration in garbage collection cycles.

### `go_gc_gogc_percent`

Heap size target percentage configured by the user, otherwise 100. This value is set by the GOGC environment variable, and the runtime/debug.SetGCPercent function. Sourced from /gc/gogc:percent

### `go_gc_gomemlimit_bytes`

Go runtime memory limit configured by the user, otherwise math.MaxInt64. This value is set by the GOMEMLIMIT environment variable, and the runtime/debug.SetMemoryLimit function. Sourced from /gc/gomemlimit:bytes

### `go_goroutines`

Number of goroutines that currently exist.

### `go_info`

Information about the Go environment.

Labels:
- version

### `go_memstats_alloc_bytes`

Number of bytes allocated in heap and currently in use. Equals to /memory/classes/heap/objects:bytes.

### `go_memstats_alloc_bytes_total`

Total number of bytes allocated in heap until now, even if released already. Equals to /gc/heap/allocs:bytes.

### `go_memstats_buck_hash_sys_bytes`

Number of bytes used by the profiling bucket hash table. Equals to /memory/classes/profiling/buckets:bytes.

### `go_memstats_frees_total`

Total number of heap objects frees. Equals to /gc/heap/frees:objects + /gc/heap/tiny/allocs:objects.

### `go_memstats_gc_sys_bytes`

Number of bytes used for garbage collection system metadata. Equals to /memory/classes/metadata/other:bytes.

### `go_memstats_heap_alloc_bytes`

Number of heap bytes allocated and currently in use, same as go_memstats_alloc_bytes. Equals to /memory/classes/heap/objects:bytes.

### `go_memstats_heap_idle_bytes`

Number of heap bytes waiting to be used. Equals to /memory/classes/heap/released:bytes + /memory/classes/heap/free:bytes.

### `go_memstats_heap_inuse_bytes`

Number of heap bytes that are in use. Equals to /memory/classes/heap/objects:bytes + /memory/classes/heap/unused:bytes

### `go_memstats_heap_objects`

Number of currently allocated objects. Equals to /gc/heap/objects:objects.

### `go_memstats_heap_released_bytes`

Number of heap bytes released to OS. Equals to /memory/classes/heap/released:bytes.

### `go_memstats_heap_sys_bytes`

Number of heap bytes obtained from system. Equals to /memory/classes/heap/objects:bytes + /memory/classes/heap/unused:bytes + /memory/classes/heap/released:bytes + /memory/classes/heap/free:bytes.

### `go_memstats_last_gc_time_seconds`

Number of seconds since 1970 of last garbage collection.

### `go_memstats_mallocs_total`

Total number of heap objects allocated, both live and gc-ed. Semantically a counter version for go_memstats_heap_objects gauge. Equals to /gc/heap/allocs:objects + /gc/heap/tiny/allocs:objects.

### `go_memstats_mcache_inuse_bytes`

Number of bytes in use by mcache structures. Equals to /memory/classes/metadata/mcache/inuse:bytes.

### `go_memstats_mcache_sys_bytes`

Number of bytes used for mcache structures obtained from system. Equals to /memory/classes/metadata/mcache/inuse:bytes + /memory/classes/metadata/mcache/free:bytes.

### `go_memstats_mspan_inuse_bytes`

Number of bytes in use by mspan structures. Equals to /memory/classes/metadata/mspan/inuse:bytes.

### `go_memstats_mspan_sys_bytes`

Number of bytes used for mspan structures obtained from system. Equals to /memory/classes/metadata/mspan/inuse:bytes + /memory/classes/metadata/mspan/free:bytes.

### `go_memstats_next_gc_bytes`

Number of heap bytes when next garbage collection will take place. Equals to /gc/heap/goal:bytes.

### `go_memstats_other_sys_bytes`

Number of bytes used for other system allocations. Equals to /memory/classes/other:bytes.

### `go_memstats_stack_inuse_bytes`

Number of bytes obtained from system for stack allocator in non-CGO environments. Equals to /memory/classes/heap/stacks:bytes.

### `go_memstats_stack_sys_bytes`

Number of bytes obtained from system for stack allocator. Equals to /memory/classes/heap/stacks:bytes + /memory/classes/os-stacks:bytes.

### `go_memstats_sys_bytes`

Number of bytes obtained from system. Equals to /memory/classes/total:byte.

### `go_sched_gomaxprocs_threads`

The current runtime.GOMAXPROCS setting, or the number of operating system threads that can execute user-level Go code simultaneously. Sourced from /sched/gomaxprocs:threads

### `go_threads`

Number of OS threads created.

## More Information

- [Sauce Connect Proxy Overview](/secure-connections/sauce-connect-5/)
- [Sauce Connect Proxy 5 CLI Reference](/dev/cli/sauce-connect-5/run/)
- [Sauce Connect Grafana Dashboard](https://grafana.com/grafana/dashboards/20232-sauce-connect/)
