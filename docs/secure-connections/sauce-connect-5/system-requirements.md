---
id: system-requirements
title: System Requirements
sidebar_label: System Requirements
---

This document outlines the system requirements for Sauce Connect 5. The guidelines provided here are based on typical usage scenarios and are intended as rough estimates. Actual performance and resource needs may vary depending on your specific environment, workload, and network conditions.

## Supported Platforms

Sauce Connect 5 is available for **macOS**, **Linux**, and **Windows**.
We offer builds that support both **ARM** and **Intel/AMD** processor architectures on these platforms.

**Ensure that your operating system is up-to-date**.
We do not provide support for running Sauce Connect 5 on operating systems that are past their End-Of-Life (EOL) date.

## CPU and Memory Resources

### Connection Autoscaling and Throughput

Sauce Connect (5.2.0 and newer) leverages the available CPU resources to automatically scale tunnel connections:

- **Connections per CPU:**
  The tunnel establishes **4 connections per CPU core**.
- **Maximum Connections:**
  Each tunnel is capped at a total of **16 connections**.
- **Concurrent HTTP Requests:**
  Each connection can handle up to **256 concurrent HTTP requests**.

Thus, a tunnel running with 4 CPU cores achieves the maximum capacity:

- **Total Concurrent Requests per Tunnel:**
  16 connections * 256 requests = **4096 concurrent HTTP requests**

### CPU Recommendations

- **Optimal CPU Allocation:**
  We recommend using **1-4 CPU units per tunnel**, with **4 CPU units being optimal** for maximum efficiency.
- **Scaling Strategy:**
  If your workload exceeds the capacity of a single tunnel (more than the maximum concurrent requests allowed per tunnel), it is more effective to run an additional tunnel rather than increasing the CPU count beyond 4 per tunnel.

### Memory Recommendations

- **Minimum Memory Requirement:**
  While Sauce Connect 5 operates efficiently with minimal memory, to fully leverage its capabilities, we recommend allocating at least **300MiB** of memory per tunnel.
- **Optional Memory Tuning with GOMEMLIMIT:**
  If you wish to allocate more memory for improved performance or to handle larger workloads, it is recommended to set the `GOMEMLIMIT` environment variable.
  It controls the soft memory limit for the Sauce Connect process.
  See example:
  ```
  GOMEMLIMIT=500MiB sc run ...
  ```
  Adjust this value based on your workload requirements.

  To ensure that it is configured correctly, run Sauce Connect in [debug mode](/dev/cli/sauce-connect-5/run#log-level).
  Look for a log line that displays the configured limits:
  ```
  limits: GOMAXPROCS=4 GOMEMLIMIT=300MiB
  ```
  This line prints the effective configured values for GOMAXPROCS and GOMEMLIMIT.
