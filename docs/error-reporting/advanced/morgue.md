---
id: morgue
title: Morgue
sidebar_label: Morgue
description: Upload, download and issue queries on objects with-in the object store with Morgue.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Morgue is a command-line interface to the Backtrace object store. It allows you to upload, download, and issue queries on objects in the object store. It is also used as a mechanism to extract formatted responses to queries for integration with other environments.

For full details on how to download, install, and use the Morgue tool, refer to the readme file located at [https://github.com/backtrace-labs/backtrace-morgue/blob/master/README.md](https://github.com/backtrace-labs/backtrace-morgue/blob/master/README.md).

The information below is retained for reference and is up to date as of May 2018. Some new features have been introduced and are fully documented in the readme above.

## Installation

It is recommended to install `morgue` using `npm`.

```bash
npm install backtrace-morgue -g
```

If you are working from the repository, use the following command instead.

```bash
npm install -g
```

This will install the `morgue` tool in your configured path. Refer to the `morgue --help` command to learn more.

## Introduction

`morgue` is a command-line interface to the Backtrace object store. It allows you to upload, download, and issue queries on objects in the object store.

## Usage

:::note Default Timeframe Filter in Morgue

Morgue applies a default/implicit timeframe filter of 30 days (30d) to the data. This means that by default, when querying data, Morgue will return results from the past 30 days. If you need to retrieve data from timeframes larger than 30 days, you need to explicitly specify the desired timeframe in the query.

For instance, if you want results from all time, you can use something like 49 years (`--age=49y`) as the timeframe filter.

:::

### Login

The first step to using Morgue is to log in to a server.

```bash
$ morgue login http://localhost
User: sbahra
Password: **************

Logged in.
```

Now, you can issue queries.

### Describe

Requests a list and description of all metadata that can be queried against.

```bash
morgue describe
```

#### Example

```bash
$ morgue describe bidder uname
              uname.machine: machine hardware name
              uname.release: kernel release
              uname.sysname: kernel name
              uname.version: kernel version
```

### Get

Downloads the specified object from the Backtrace object store and prints it to standard output. Optionally, you can output the file to disk.

```bash
morgue get
```

The following options are available:

| Option            | Description                                          |
| :---------------- | :--------------------------------------------------- |
| `--resource=name` | Fetch the specified resource rather than the object. |

### Put

Uploads an object file to the Backtrace object store.

```bash
morgue put
```

The user has the following options:

| Option                                       | Description                                      |
| :------------------------------------------- | :----------------------------------------------- |
| `--compression=gzip` `--compression=deflate` | Uploaded file is compressed.                     |
| `--kv=key1:value1,key2:value2,... `          | Upload key-values.                               |
| `--form_data`                                | Upload file by multipart/form-data post request. |

### Set

The command modifies attributes of the given object as specified. Both options below may be specified more than once.

```bash
morgue set <[universe/]project> <query> <key>=<value>
```

You can also modify multiple objects by specifying filters. The `--filter`, `--age`, and `--time` arguments are accepted for modification. You must specify some filter criteria.

#### Example

Set custom attribute `reason` to `oom` for all crashes containing `memory_abort`.

```bash
$ morgue set reason=oom --filter=callstack,regular-expression,memory_abort
```

Set reason to `boomboom` for object `cb`.

```bash
$ morgue set reason=boomboom --filter=_tx,equal,206
```

:::note Decimal Format
Morgue expects the default attribute `_tx` value to be in decimal format.
:::

### Modify

Modifies the attributes of the given object as specified.

```bash
morgue modify
```

Both options below may be specified more than once.

| Option    | Description                         |
| :-------- | :---------------------------------- |
| `--set`   | Set the given attribute=value pair. |
| `--clear` | Clear the given attribute.          |

You can also modify multiple objects by specifying filters. The `--filter`, `--age`, and `--time` arguments are accepted for modification.

#### Example

Set the hostname to `fqdn.example.com` for object identifier 0.

```bash
$ morgue modify --set hostname=fqdn.example.com myproject 0
```

Set the custom attribute reason to `oom` for all crashes containing `memory_abort`.

```bash
$ morgue modify --set reason=oom --filter=callstack,regular-expression,memory_abort
```

### Attachment

Manages attachments associated with an object.

```bash
morgue attachment
```

### Filters

The filter option expects a comma-delimited list of the form .

The supported operations are `equal`, `regular-expression`, `inverse-regular-expression`, `at-least`, `greater-than`, `at-most`, `less-than`, `contains`, `not-contains`, `is-set`, and `is-not-set`.

### Pagination

Pagination is handled with two flags:

| Option      | Description                                                                          |
| :---------- | :----------------------------------------------------------------------------------- |
| `--limit=`  | Controls the number of returned rows.                                                |
| `--offset=` | Controls the offset at which rows are returned, which means it skips the first rows. |

### Aggregations

Aggregation is expressed through a myriad of command-line options that express different aggregation operations. Options are of the form `--=`.

The `*` factor is used when aggregations are performed when no factor is specified or if an object does not have a valid value associated with the factor.

| Option           | Description                                                         |
| :--------------- | :------------------------------------------------------------------ |
| `--age`          | Specify a relative timestamp to now. For example, 1h ago or 1d ago. |
| `--time `        | Specify a range using Chrono.                                       |
| `--unique`       | Provide a count of distinct values.                                 |
| `--histogram `   | Provide all distinct values.                                        |
| `--distribution` | Provide a truncated histogram.                                      |
| `--mean`         | Calculate the mean of a column.                                     |
| `--sum`          | Sum all values.                                                     |
| `--range`        | Provide the minimum and maximum values.                             |
| `--count`        | Count all non-null values.                                          |
| `--bin`          | Provide a linear histogram of values.                               |
| `--head`         | Provide the first value in a factor.                                |
| `--tail`         | Provide the last value in a factor.                                 |
| `--object `      | Provide the maximum object identifier of a column.                  |

### Sorting

Sorting of results is done with the stackable option `--sort=`. The term syntax is `-`.

The optional `-` reverses the sort term order to descending, otherwise, it defaults to ascending.
Multiple sort terms can be provided to break ties in case the previously referenced sort term has ties.

#### Example

Request all faults from application deployments owned by jdoe. Provide the timestamp, hostname, callstack and classifiers.

```bash
$ morgue list bidder --filter=tag_owner,equal,jdoe --select=timestamp --select=hostname --select=callstack --select=classifiers
*
#9d33    Thu Oct 13 2016 18:36:01 GMT-0400 (EDT)     5 months ago
  hostname: 2235.bm-bidderc.prod.nym2
  classifiers: abort stop
  callstack:
    assert ← int_set_union_all ← all_domain_lists ←
    setup_phase_unlocked ← bid_handler_slave_inner ← bid_handler_slave ←
    an_sched_process_task ← an_sched_slave ← event_base_loop ←
    an_sched_enter ← bidder_slave ← an_sched_pthread_cb
#ef2f    Thu Oct 13 2016 18:36:01 GMT-0400 (EDT)     5 months ago
  hostname: 2066.bm-impbus.prod.nym2
  classifiers: abort stop
  callstack:
    assert ← an_discovery_get_instances ← budget_init_discovery ←
    main
#119bf   Thu Oct 13 2016 18:36:01 GMT-0400 (EDT)     5 months ago
  hostname: 2066.bm-impbus.prod.nym2
  classifiers

: abort stop
  callstack:
    assert ← an_discovery_get_instances ← budget_init_discovery ←
    main
```

Request faults owned by jdoe, group them by fingerprint and aggregate the number of unique hosts, display a histogram of affected versions and provide a linear histogram of process age distribution.

```bash
$ morgue list bidder --age=1y --factor=fingerprint --filter=tag_owner,equal,jdoe --head=callstack --unique=hostname --histogram=tag --bin=process.age
823a55fb15bf697ba3041d736ade... ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁ 5 months ago
Date: Wed May 18 2016 18:44:35 GMT-0400 (EDT)
callstack:
    assert ← int_set_union_all ← all_domain_lists ←
    setup_phase_unlocked ← bid_handler_slave_inner ← bid_handler_slave ←
    an_sched_process_task ← an_sched_slave ← event_base_loop ←
    an_sched_enter ← bidder_slave ← an_sched_pthread_cb
histogram(tag):
  8.20.4.adc783.0 ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆ 1
unique(hostname): 1
bin(process.age):
          7731         7732 ▆▆▆▆▆▆▆▆▆▆ 1

3b851ac1ab1421409159cc38edb2... ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁ 5 months ago
Date: Tue May 17 2016 17:28:26 GMT-0400 (EDT)
      Tue May 17 2016 17:30:07 GMT-0400 (EDT)
callstack:
    assert ← an_discovery_get_instances ← budget_init_discovery ←
    main
histogram(tag):
  4.44.0.adc783.1 ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆ 2
unique(hostname): 1
bin(process.age):
            23           24 ▆▆▆▆▆▆▆▆▆▆ 1
            24           25 ▆▆▆▆▆▆▆▆▆▆ 1
```

Request faults for the last 2 years, group them by fingerprint, show the first object identifier in the group, sort the results by descending fingerprint, limit the results to 5 faults and skip the first 10 (according to sort order).

```bash
$ morgue list blackhole --age=2y --factor=fingerprint --object=fingerprint --limit=5 --offset=10 --sort="-;group"
fec4bfecf8e077cf44024f5668fa... ▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 2 years ago
First Occurrence: Tue Jan 12 2016 13:30:12 GMT-0500 (EST)
     Occurrences: 360
object(fingerprint): 1c653d

fe7294a780a16e30b619e8d94a8a... ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁ 2 years ago
First Occurrence: Wed Oct 28 2015 11:30:47 GMT-0400 (EDT)
 Last Occurrence: Wed Oct 28 2015 12:16:19 GMT-0400 (EDT)
     Occurrences: 203
object(fingerprint): 1c23b3

fe5e0dda6cf0fb996a521dde4087... ▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 1 year ago
First Occurrence: Tue Jun 14 2016 11:54:35 GMT-0400 (EDT)
     Occurrences: 1
object(fingerprint): 2de5

fe46d9af7c65c084091fed51ef02... █▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 2 years ago
First Occurrence: Tue Oct 27 2015 16:59:34 GMT-0400 (EDT)
 Last Occurrence: Tue Oct 27 2015 20:05:30 GMT-0400 (EDT)
     Occurrences: 3
object(fingerprint): 8f41

fdc0860ef6dfd3d0397b53043ab9... ▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 1 year ago
First Occurrence: Tue Jun 07 2016 11:51:55 GMT-0400 (EDT)
     Occurrences: 211
object(fingerprint): 1c1958
```

Request faults for the two years, group them by fingerprint, `sum process.age`, sort the results by descending sum of `process.age` per fingerprint, limit the results to 3 faults. Note here that 1 in `-process.age;1` is the second operator (`--sum`) in this case.

```bash
$ morgue list blackhole --age=2y --factor=fingerprint --first=process.age --sum=process.age --limit=3 --sort="-process.age;1"
d9358a6fdb7eaa143254b6987d00... ▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 1 year ago
First Occurrence: Tue Sep 20 2016 21:59:46 GMT-0400 (EDT)
 Last Occurrence: Tue Sep 20 2016 22:03:23 GMT-0400 (EDT)
     Occurrences: 38586
sum(process.age): 56892098354615 sec

524b9f988c8ff9dfc1b3a0c71231... ▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 1 year ago
First Occurrence: Tue Sep 20 2016 22:01:52 GMT-0400 (EDT)
 Last Occurrence: Tue Sep 20 2016 22:03:19 GMT-0400 (EDT)
     Occurrences: 25737
sum(process.age): 37947233900547 sec

bffd05c6b745229fd1c648bbe2a7... ▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 1 year ago
First Occurrence: Tue Sep 20 2016 21:59:46 GMT-0400 (EDT)
 Last Occurrence: Tue Sep 20 2016 22:03:01 GMT-0400 (EDT)
     Occurrences: 20096
sum(process.age): 29630010305216 sec
```

### Delete Objects

Allows deleting objects.

```bash
morgue delete [object_id ...]
```

The `object_id` parameter specifies the ID(s) of the objects to be deleted. Object IDs can be found in the output of the `morgue list` command. For example:

```shell
$ morgue list
Object ID: 9d33
...

$ morgue delete 9d33
```

The following options support partial deletes:

| Option            | Description                                                        |
| :---------------- | :----------------------------------------------------------------- |
| `--physical-only` | Only delete the physical object; retain indexing.                  |
| `--crdb-only`     | Only delete the indexed data; requires physically deleted objects. |

### Flamegraph

Generate a flamegraph of call stacks of objects matching specified filter criteria.

```shell
morgue flamegraph [--filter=<filter_expression>] [--unique] [--reverse]
```

The `--filter` option is used to specify filter criteria for selecting objects. The `--filter` option behaves identically to the `morgue list` sub-command. This functionality requires Perl to be installed. For more information about flamegraphs, see [Flamegraphs](http://www.brendangregg.com/flamegraphs.html).

The `--unique` option samples only unique crashes, while the `--reverse` option begins sampling from leaf functions.

### Report

Create and manage scheduled reports.

```bash
morgue report [command]
```

The `morgue report` command without any additional parameters lists the available commands for managing reports.

### Create Report

Create a new scheduled report.

```bash
morgue report create [--rcpt=<recipients>] [--filter=<filter_expression>]
    [--title=<report_title>] [--period=<report_period>]
```

#### Example

```bash
$ morgue report create --rcpt=null@backtrace.io,list@backtrace.io
    --filter=environment,equal,prod --title="Production Crashes Weekly"
    --period=week
```

### Repair

Repair a project's attribute database.

```bash
morgue repair
```

This command repairs the attribute database for a project. It reprocesses the affected objects (if possible) for each corrupted page of the database. Once completed successfully, the database transitions into normal mode.

### Reprocess

Reprocess the objects in a project.

```bash
morgue reprocess [--filter=<filter_expression>] [--first=<first_object>]
    [--last=<last_object>]
```

This command can be used to re-execute indexing, fingerprinting, and symbolification (where needed) for the objects in a project. If a set of objects or a query is specified, the `--first` and `--last` options are replaced to match the object list. If no query, object list, or range is provided, all objects in the project are reprocessed.

### Retention

Configure the retention policy for a given namespace, which can cover the coroner instance, or a specific universe or project.

```bash
morgue retention [command]
```

The `morgue retention` command without any additional parameters lists the available commands for managing the retention policy.

#### Example

```bash
$ morgue retention clear a_project
success

$ morgue retention set blackhole --max-age=3600

$ morgue retention list
Project-level:
  blackhole: max age: 1h
```

### Sampling

Retrieve the object sampling status or reset it.

```bash
morgue sampling [--fingerprint=<fingerprint>] [--project=<project>]
```

The `--fingerprint` option specifies the fingerprint of the object to retrieve the sampling status for. The `--project` option is required if `--fingerprint` is specified.

### Symbol

Retrieve a list of uploaded symbols or symbol archives.

```bash
morgue symbol [command]
```

The `morgue symbol` command without any additional parameters lists the available commands for managing symbols.

By default, `morgue symbol` will return a summary of uploaded archives, available symbols, and missing symbols.

- If `archives` is used, a list of uploaded symbols, in-process symbols, and symbol processing errors will be outputted.
- If `list` is used, a list of uploaded symbols will be returned.
- If `missing` is used, the set of missing symbols for the project will be included.

### Scrubber

Create, modify, and delete data scrubbers.

```bash
morgue scrubber [command]
```

The `morgue scrubber` command without any additional parameters lists the available commands for managing data scrubbers.

Use the `--name` option to specify the name of the scrubber. Use the `--regexp` option to specify the pattern to match and scrub. Use the `--builtin` option to specify a built-in scrubber (`ssn`, `ccn`, `key`, and `env` are supported for social security number, credit card number, encryption key, and environment variable). If `--builtin=all` is used, all supported built-in scrubbers are created. The `--regexp` and `--builtin` options are mutually exclusive. Use the `--enable` option to activate the scrubber (use `0` to disable the scrubber).

### Setup

Configure the initial organization and user for an on-premise version of coronerd.

```bash
morgue setup <coronerd_url>
```

If you are using an on-premise version of coronerd, use the `morgue setup` command to configure the initial organization and user. Replace `<coronerd_url>` with the URL of your coronerd server. For example, if the server is `backtrace.mycompany.com`, you would run:

```bash
morgue setup http://backtrace.mycompany.com
```

We recommend resetting your password after enabling SSL (done by configuring your certificates).

### Nuke

Delete an object and all its dependencies.

```bash
morgue nuke --universe=<universe>
```

Use this command to nuke an object and all its dependencies. Make sure to back up your data before using this command.

### Token

Manage API tokens for authentication and authorization.

```bash
morgue token  [create | list | delete] [--project=<project>] [--universe=<universe>]
```

The `morgue token` command without any additional parameters lists the available commands for managing API tokens.

#### Create Token

Create a new API token.

```bash
morgue token create --project=<project>
    [--capability=<capability> ...]
```

The `--capability` option specifies the capabilities of the API token. Multiple capabilities can be specified by using the `--capability` option multiple times or by using a comma-separated list. Valid capabilities include:

- `symbol:post`: Enable symbol uploads with the specified API token.
- `error:post`: Enable error and dump submission with the specified API token.
- `query:post`: Enable queries to be issued using the specified token.

#### List Token

Lists the API tokens in the specified universe or project.

```bash
morgue token list [--universe=<universe>] [--project=<project>]
```

##### Example

Allows you to perform queries on object metadata. You can perform either selection queries or aggregation queries, but not both at the same time.

```bash
$ morgue token list --universe=my_universe --project=my_project
```

You may pass `--verbose` to get more detailed query performance data.

#### Delete Token

Deletes the specified token by substring or exact match.

```bash
morgue token delete
```

### User

Modify users.

```bash
morgue user reset [--universe=<universe>] [--user=<user>] [--password=<password>]
```

It can only be used to reset user passwords. If the `--user` or `--password` options are not specified, the command will prompt for the user and password.

### Tenant

Create isolated tenants for receiving error data and logging in. Tenants provide namespace isolation. Users in one tenant are unable to interact with any objects outside of their tenant. This is an enterprise feature and not enabled by default for self-serve customers. The tenant commands require superuser access.

```shell
morgue tenant [command]
```

The `morgue tenant` command without any additional parameters lists the available commands for managing tenants.

#### Examples

- Create a Tenant

  After logging into an object store as a superuser, use the following command to create a tenant:

  ```bash
  $ morgue tenant create <tenant_name>
  ```

  This command creates a tenant with the specified name and provides the URL for the newly created tenant:

  ```bash
  Tenant successfully created at https://<tenant_name>.sp.backtrace.io
  Wait a few minutes for propagation to complete.
  ```

  Tenants are required to be contained within the same TLD. For example, a tenant with the name "X" is expected to be contained in "X.sp.backtrace.io".

  After creating a tenant, you will likely need to invite an initial administrator user for the tenant. For that, refer to the `invite` sub-command listed below. To invite an administrator to a specific tenant, use the `--tenant` option.

- Delete a Tenant

  After logging into an object store as a superuser, use the following command to delete a tenant:

  ```bash
  $ morgue tenant delete <tenant_name>
  Tenant successfully deleted.
  ```

:::warning

This is a destructive command from a configuration perspective. Unless you have backups, there is no way to restore your configuration data.

:::

- List Tenants

  Use the following command to list existing tenants:

  ```shell
  $ morgue tenant list
  ```

  This command lists the ID, tenant name, and URL for each tenant.

  ```bash
  ID Tenant               URL
  1 test                 https://test.sp.backtrace.io
  4 test1                https://test1.sp.backtrace.io
  ```

### Invite

Invite new users into your system. Requires you to have logged in.

```bash
morgue invite [command]
```

The `morgue invite` command without any additional parameters lists the available commands for inviting users.

#### Examples

- Invite a User

  To invite a new user into the currently logged-in tenant, use the following command:

  ```bash
  $ morgue invite create user user@gmail.com
  Invitation successfully created for user@backtrace.io
  Sending e-mail...done
  ```

  This command invites a new user with the specified email address. The default settings for the user are to use password authentication and have a member role.

- Invite a User as an Administrator

  To invite a user as an administrator, use the `--role=admin` option:

  ```bash
  $ morgue invite create user <user_email> --role=admin
  Invitation successfully created for user@backtrace.io
  Sending e-mail...done
  ```

- Invite a User into a Particular Tenant

  To invite a user into a specific tenant, use the `--tenant=<tenant_name>` option:

  ```bash
  $ morgue invite create user <user_email> --tenant=<tenant_name>
  Invitation successfully created for <user_email>
  Sending e-mail...done
  ```

- List Pending Invitations

  To list invitations that have not been accepted or activated, use the following command:

  ```bash
  $ morgue invite list
  Tenant             Username   Method     Role                          Email Token
      1              ashley2 password    admin          ashley2@backtrace.io f892200fa564...
      1                jack1 password   member            jack@backtrace.io 39c1b80a7e00...
      1                jack2 password   member          jack+2@backtrace.io c399bdf23873...
      1            jack17131 password   member       jack+4512@backtrace.io 784d2a8ffe12...
      1            jack25262 password   member      jack+24688@backtrace.io 97e306d3373a...
      1            jack25629 password   member      jack+28155@backtrace.io ed02ceea2ba4...
      1            jack28000 password   member       jack+3644@backtrace.io 3f87906bd5d9...
      1            jack19468 password   member      jack+28771@backtrace.io 3c6b3a3aaf41...
      1            jack15686 password   member       jack+4203@backtrace.io 78bd9cd127a8...
      4             jack2268 password   member      jack+19325@backtrace.io 776c6d389f89...
      4            jack20597 password   member      jack+24692@backtrace.io 48972737a85e...
      4             jack4803 password   member      jack+30407@backtrace.io 4943913c86f3...
  ```

  This command lists the tenant, username, method, role, email, and token for each pending invitation.

- Delete an Invitation

  To delete an invitation, use the following command:

  ```bash
  $ morgue invite delete <token>
  Invitation successfully deleted.
  ```

  This command deletes the invitation with the specified token or unique substring.
