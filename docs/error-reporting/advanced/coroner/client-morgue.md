---
id: client-morgue
title: Coroner Client - Morgue Documentation
sidebar_label: Client Morgue
description: Install Coroner Client Morgue.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

`morgue` is a command-line interface to the Backtrace object store. It allows you to upload, download and issue queries on objects in the object store.

## Installation

It is recommended to install morgue using npm.

```shell
npm install backtrace-morgue -g
```

If you are working from the repository, use the following command instead.

```
npm install -g
```

This will install the `morgue` tool in your configured path. Refer to the `morgue --help` command to learn more.

## Usage

### Login

The first step to using morgue is to log in to a server.

```shell
$ morgue login http://localhost
User: sbahra
Password: **************

Logged in.
```

Now, you can issue queries.

### Describe

Requests a list and description of all metadata that can be queried against.

```shell
morgue describe <[/]project> [substring]
```

#### Example

```shell title="Example"
$ morgue describe bidder uname
              uname.machine: machine hardware name
              uname.release: kernel release
              uname.sysname: kernel name
              uname.version: kernel version
```

### Get

Downloads the specified object from the Backtrace object store and prints it to the standard output. Optionally, you can output the file to disk.

```shell
morgue get <[/]project> [options] [-o]
```

The following options are available:

| Option            | Description                                          |
| :---------------- | :--------------------------------------------------- |
| `--resource=name` | Fetch the specified resource rather than the object. |

### Put

Uploads object file to the Backtrace object store.

```shell
morgue put <[/]project> <--format=btt|minidump|json|symbols> [options]
```

User has the following options:

| Option                                       | Description                                      |
| :------------------------------------------- | :----------------------------------------------- |
| `--compression=gzip` `--compression=deflate` | Uploaded file is compressed.                     |
| `--kv=key1:value1,key2:value2,... `          | Upload key-values.                               |
| `--form_data`                                | Upload file by multipart/form-data post request. |

### Modify

Modifies the attributes of the given object as specified. Both options below may be specified more than once.

```bash
morgue modify <[universe/]project> (| ...) [--set ...] [--clear ...]
```

| Option    | Description                         |
| :-------- | :---------------------------------- |
| `--set`   | Set the given attribute=value pair. |
| `--clear` | Clear the given attribute.          |

You can also modify multiple objects by specifying filters. The `--filter`, `--age`, and `--time` arguments are accepted for modification.

#### Examples

- Set hostname to fqdn.example.com for object identifier 0:

  ```shell title="Example"
  $ morgue modify --set hostname=fqdn.example.com myproject 0
  ```

- Set custom attribute reason to oom for all crashes containing memory_abort:

  ```shell title="Example"
  $ morgue modify --set reason=oom --filter=callstack,regular-expression,memory_abort
  ```

### Attachment

Manages attachments associated with an object.

```bash
morgue attachment add [options] <[universe/]project>
```

| Option                | Description                                                                 |
| :-------------------- | :-------------------------------------------------------------------------- |
| `--content-type=CT`   | Specify Content-Type for attachment. The server may auto-detect this.       |
| `--attachment-name=N` | Use this name for the attachment name. Default is the same as the filename. |

```bash
morgue attachment get [options] <[universe/]project>
```

Must specify one of the following options:

| Option                | Description             |
| :-------------------- | :---------------------- |
| `--attachment-id=ID`  | Attachment ID to get.   |
| `--attachment-name=N` | Attachment name to get. |

```bash
morgue attachment list [options] <[universe/]project>
```

```bash
morgue attachment delete [options] <[universe/]project
```

Must specify one of the following options:

| Option                | Description              |
| :-------------------- | :----------------------- |
| `--attachment-id=ID`  | Attachment ID to delete. |
| `--attachment-name=N` | Attachment name to get.  |

### List

Allows you to perform queries on object metadata. You can perform either selection queries or aggregation queries, but not both at the same time. You may pass `--verbose` in order to get more detailed query performance data.

```bash
morgue list <[/]project> [substring]
```

### Filters

The filter option expects a comma-delimited list of the form .

The currently supported operations are `equal`, `regular-expression`, `inverse-regular-expression`, `at-least`, `greater-than`, `at-most`, `less-than`, `contains`, `not-contains`, `is-set`, and `is-not-set`.

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
The term refers to a valid column in the table. This is only effective for selection type query, that is, when using the `--select` option.
The is an expression pointing to a fold operation. The expression language for fold operation is one of the following literal:

- `;group`: sort by the group key itself.
- `;count`: sort by the group count (number of crashes).
- `column;idx`: where column is a string referencing a `column` in the fold dictionary and `idx` is an indice in the array.
  Multiple sort terms can be provided to break ties in case the previously referenced sort term has ties.

#### Examples

- Request all faults from application deployments owned by jdoe. Provide the timestamp, hostname, callstack and classifiers.

  ```shell
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
  classifiers: abort stop
  callstack:
      assert ← an_discovery_get_instances ← budget_init_discovery ←
      main
  ```

- Request faults owned by jdoe, group them by fingerprint and aggregate the number of unique hosts, display a histogram of affected versions and provide a linear histogram of process age distribution.

  ```shell
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

- Request faults for the last 2 years, group them by fingerprint, show the first object identifier in the group, sort the results by descending fingerprint, limit the results to 5 faults and skip the first 10 (according to sort order).

  ```shell
  $ morgue list blackhole --age=2y --factor=fingerprint --object=fingerprint --limit=5 --offset=10 --sort="-;group"
  fec4bfecf8e077cf44024f5668fa... ▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 2 years ago
  First Occurrence: Tue Jan 12 2016 13:30:12 GMT-0500 (EST)
      Occurrences: 360
  object(fingerprint): 1c653d

  fe7294a780a16e30b619e8d94a8a... █▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 2 years ago
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

- Request faults for the two years, group them by fingerprint, sum process.age, sort the results by descending sum of process.age per fingerprint, limit the results to 3 faults. Note here that 1 in -process.age;1 is the second operator (--sum) in this case.

  ```shell
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
morgue delete <[universe/]project> [... oidN]
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
morgue flamegraph [--filter=] [--reverse] [--unique] [-o file.svg]
```

The `--filter` option is used to specify filter criteria for selecting objects. The `--filter` option behaves identically to the `morgue list` sub-command. This functionality requires Perl to be installed. For more information about flamegraphs, see [Flamegraphs](http://www.brendangregg.com/flamegraphs.html).

The `--unique` option samples only unique crashes, while the `--reverse` option begins sampling from leaf functions.

### Report

Create and manage scheduled reports.

```bash
morgue report [--project=...] [--universe=...]
```

#### Create Report

Create a new scheduled report.

```bash
morgue report create
  <--rcpt=...>
  <--title=...>
  [--filter=...]
  [--fingerprint=...]
  [--histogram=...]
  [--hour=...]
  [--day=...]
  --period=
```

```shell title="Example"
$ morgue report MyProject create --rcpt=null@backtrace.io
    --rcpt=list@backtrace.io --filter=environment,equal,prod
    --title="Production Crashes weekly" --period=week
```

#### Delete Report

```shell
morgue report delete
```

#### List Report

```shell
morgue report list
```

### Repair

This command repairs the attribute database for a project. It reprocesses the affected objects (if possible) for each corrupted page of the database. Once completed successfully, the database transitions into normal mode.

```bash
morgue repair <[universe/]project>
```

### Reprocess

Reprocess the objects in a project.

```bash
morgue reprocess <[universe/]project> [| ...] [--first N] [--last N]
```

| Option      | Description                                              |
| :---------- | :------------------------------------------------------- |
| `--first=N` | Specify the first object ID (default: earliest known).   |
| `--last=N`  | Specify the last object ID (default: most recent known). |

This command can be used to re-execute indexing, fingerprinting, and symbolification (where needed) for the objects in a project. If a set of objects or a query is specified, the `--first` and `--last` options are replaced to match the object list. If no query, object list, or range is provided, all objects in the project are reprocessed.

### Retention

Configure the retention policy for a given namespace, which can cover the coroner instance, or a specific universe or project.

```bash
morgue retention [options]
```

The `morgue retention` command without any additional parameters lists the available commands for managing the retention policy.

Options for set/clear:

| Option      | Description                                                                        |
| :---------- | :--------------------------------------------------------------------------------- |
| `--type=T ` | Specify retention type (default: project) valid: `instance`, `universe`, `project` |

Options for status:

| Option     | Description |
| :--------- | :---------- |
| [--type= ] |             |

Options for set:

| Option            | Description                                                                       |
| :---------------- | :-------------------------------------------------------------------------------- |
| `--max-age=N`     | Specify time limit for objects, in seconds.                                       |
| `--physical-only` | Specifies that the policy only delete physical copies; indexing will be retained. |

#### Example

```shell title="Example"
$ morgue retention clear a_project
success
$ morgue retention set blackhole --max-age=3600
$ morgue retention list
Project-level:
  blackhole: max age: 1h
$
```

### Sampling

Retrieve the object sampling status, or reset it. Project is a required flag if `fingerprint` is specified.

```bash
morgue sampling [options]
```

The `--fingerprint` option specifies the fingerprint of the object to retrieve the sampling status for. The `--project` option is required if `--fingerprint` is specified.

Options for either status or reset:

| Option                         | Description                                                      |
| :----------------------------- | :--------------------------------------------------------------- |
| `--fingerprint=group`          | Specify a fingerprint to apply to. Without this, applies to all. |
| `--project=[universe/]project` | Specify a project to apply to. Without this, applies to all.     |

Options for status only:

| Option           | Description                                          |
| :--------------- | :--------------------------------------------------- |
| `--max-groups=N` | Specify max number of groups to display per project. |

### Symbol

Retrieve a list of uploaded symbols or symbol archives.

```bash
morgue symbol <[/]project> [summary | list | missing | archives] [-o ]
```

By default, `morgue symbol` will return a summary of uploaded archives, available symbols, and missing symbols.

- If `archives` is used, a list of uploaded symbols, in-process symbols, and symbol processing errors will be outputted.
- If `list` is used, a list of uploaded symbols will be returned.
- If `missing` is used, the set of missing symbols for the project will be included.

### Scrubber

Create, modify, and delete data scrubbers.

```bash
morgue scrubber
```

The `morgue scrubber` command without any additional parameters lists the available commands for managing data scrubbers.

| Option      | Description                                                                                                                                                                                                                                              |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--name`    | Specify the name of the scrubber.                                                                                                                                                                                                                        |
| `--regexp`  | Specify the pattern to match and scrub.                                                                                                                                                                                                                  |
| `--builtin` | Specify a built-in scrubber (`ssn`, `ccn`, `key`, and `env` are currently supported for social security number, credit card number, encryption key, and environment variable). If `--builtin=all` is used, all supported built-in scrubbers are created. |
| `--enable`  | Activate the scrubber (use `0` to disable the scrubber).                                                                                                                                                                                                 |

The `--regexp` and `--builtin` options are mutually exclusive.

### Setup

Configure the initial organization and user for an on-premise version of coronerd.

```bash
morgue setup
```

If you are using an on-premise version of coronerd, use the `morgue setup` command to configure the initial organization and user. Replace `<coronerd_url>` with the URL of your coronerd server. For example, if the server is `backtrace.mycompany.com`, you would run:

```bash
morgue setup http://backtrace.mycompany.com
```

We recommend resetting your password after enabling SSL (done by configuring your certificates).

### Nuke

Delete an object and all its dependencies.

```bash
morgue nuke --universe= [--project=]
```

Use this command to nuke an object and all its dependencies. Make sure to back up your data before using this command.

### Token

Manage API tokens for authentication and authorization.

```bash
morgue token [create | list | delete] [--project=...] [--universe=...]
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

Currently, it can only be used to reset user passwords. If the `--user` or `--password` options are not specified, the command will prompt for the user and password.

### Tenant

Create isolated tenants for receiving error data and logging in. Tenants provide namespace isolation. Users in one tenant are unable to interact with any objects outside of their tenant. This is an enterprise feature and not enabled by default for self-serve customers. The tenant commands require superuser access.

```shell
morgue tenant [create | list | delete]
```

The `morgue tenant` command without any additional parameters lists the available commands for managing tenants.

- `morgue tenant create`: Create a tenant with the specified name
- `morgue tenant delete`: Delete a tenant with the specified name.
- `morgue tenant list`: List all tenants on your instance.

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
morgue invite
  create
    --role=<"guest" | "member" | "admin">
    --metadata=
    --tenant=
    --method=<"password" | "saml" | "pam">
  delete
  resend
```

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
