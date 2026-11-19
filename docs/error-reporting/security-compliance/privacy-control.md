---
id: privacy-control
title: Privacy Control
sidebar_label: Privacy Control
description: Scrub personally identifiable information from error dumps with built-in and custom regular expression scrubbers before Error Reporting stores them.
---

Error Reporting provides several facilities for scrubbing personally identifiable information (PII) from error data. There are mechanisms for both native UNIX core dump formats and the minidump format used by Windows, Breakpad, and Crashpad.

## How Data Scrubbers Work

Minidump files contain raw data of the crashed process, which may include sensitive data, such as PII. When they are submitted to Error Reporting, metadata and attributes are extracted from them, and the minidump files are persisted on disk. Developers can view these dumps directly in their web browser or download them for root cause analysis.

Data scrubbers let administrators remove sensitive data from dump files submitted to Error Reporting before they are committed to disk. All data contained in the dump, including register values, memory, and crash attributes, is scanned for patterns that may indicate PII.

All PII is mutated in place before it is committed to disk. The offending information is masked, and the overall structure of the file is unmodified, so the file can still be loaded by your system debugger.

There are two classes of data scrubbers:

| Scrubber | Description |
| --- | --- |
| **Built-in scrubbers** | Scrub common types of PII, such as credit card numbers and social security numbers. See [Manage Built-In Privacy Scrubbers](#manage-built-in-privacy-scrubbers). |
| **Regular expression scrubbers** | Scrub data that matches a regular expression you define. See [Create Custom Regex Scrubbers](#create-custom-regex-scrubbers). |

You manage scrubbers with the morgue command-line tool. For more information about how to use morgue, see [Morgue](/error-reporting/advanced/morgue/).

### Scrubber Fields

Each scrubber is given an `id` number and consists of the following fields:

| Field | Description |
| --- | --- |
| `name` | A human-readable name for the scrubber. |
| `regexp` | A regular expression defined by the user. |
| `builtin` | The built-in scrubber: `ccn`, `ssn`, `key`, or `env`. |
| `format` | The applicable error and crash format. It must be `minidump`. |
| `target` | The data regions of the error to scrub. Valid values are `memory`, `map`, `registers`, `variable`, and `all`. However, the current implementation doesn't enforce the target, and all data is scrubbed instead. |
| `enable` | Whether the scrubber is applied to error data. `0` disables the scrubber, and any other integer value enables it. |

## Manage Built-In Privacy Scrubbers

Built-in scrubbers detect common types of PII without requiring you to write a regular expression. The following built-in scrubbers are available:

| Built-in | Scrubs |
| --- | --- |
| `ccn` | Credit card numbers |
| `ssn` | Social security numbers |
| `key` | Encryption keys |
| `env` | Environment variables. If this scrubber is enabled, all environment variables are scrubbed. |

Built-in scrubbers are applied to filesystem paths, register values, and memory regions.

**Step 1:** Create the built-in scrubbers for your project with the `--builtin` option. Use `--builtin=all` to create all built-in scrubbers at once, or specify one of them, such as `--builtin=ccn`.

**Step 2:** Enable or disable a scrubber with the `--enable` option. Use `--enable=1` to enable the scrubber, or `--enable=0` to disable it.

**Step 3:** To see the commands for modifying or deleting scrubbers, run `morgue scrubber` without any additional parameters.

## Create Custom Regex Scrubbers

Create a regular expression scrubber when you need to scrub data that the built-in scrubbers don't cover, such as IP addresses. Regular expression scrubbers use POSIX regular expressions and are applied to any data in the dump that looks like it may be a string.

**Step 1:** Write the regular expression that matches the data to scrub. For example, string representations of IP addresses can be scrubbed with the regular expression `[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+`.

**Step 2:** Create the scrubber with the `--regexp` option. The following example creates a scrubber named `ip_scrubber` for the project `minetest`:

```bash
morgue scrubber minetest create --name=ip_scrubber --regexp='[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+' --enable=1
```

You must specify either `--regexp` or `--builtin`, but not both. Optionally, use the `--format=` and `--target=` options. If you don't specify them, both `format` and `target` are set to `all`.

## Configure Scrubbers for On-Premise Servers

If you use an on-premise coronerd server, enable data scrubbing on the server before your scrubbers are applied.

**Step 1:** Add the following to your `coronerd.conf` file:

```json
"data_scrub": {
    "enable": true
}
```

**Step 2:** Restart the coronerd service.

## List the Scrubbers of a Project

List the scrubbers of a project to check which scrubbers exist and whether they are enabled. For example, the following command lists the scrubbers of the project `minetest`:

```bash
morgue scrubber minetest list
```

```
[1] credit_card
        regexp: null
       builtin: ccn
        format: minidump
        target: memory
        enable: 0
[2] social_security
        regexp: null
       builtin: ssn
        format: minidump
        target: memory
        enable: 0
[3] security_key
        regexp: null
       builtin: key
        format: minidump
        target: memory
        enable: 0
[4] environment_variable
        regexp: null
       builtin: env
        format: all
        target: all
        enable: 1
[5] ip_addr
        regexp: [0-9]+\.[0-9]+\.[0-9]+\.[0-9]+
       builtin: null
        format: all
        target: all
        enable: 1
```

This project has five data scrubbers. The `environment_variable` and `ip_addr` scrubbers are enabled, and the other three are disabled. For a description of each field, see [Scrubber Fields](#scrubber-fields).

## Extensions for Native UNIX Dumps

If you use the advanced debugger for Linux, FreeBSD, and IllumOS-based systems, you can modify and censor PII through the plugin system, with either Lua or C plugins. For more information, see [Plugins for ptrace](/error-reporting/advanced/ptrace/).
