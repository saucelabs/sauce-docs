---
id: integrating
title: Coresnap Integration Guide
sidebar_label: Coresnap Integration Guide
description: Integrating Backtrace for system-wide core dump analysis with Coresnap.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Welcome to Backtrace! This section will get you started with integrating Backtrace for system-wide core dump analysis with coresnap, our core dump aggregation service. It is lightweight and non-intrusive to applications when idle.

Coresnap is the Backtrace service that will automatically process coredumps on the machine which it is installed. By default, Coresnap will generate Backtrace snapshots from coredumps on the system and send them to the object store. This is the recommended path for those integrating via C/C++ applications.

These steps require a license number from Backtrace to install the necessary packages. Please contact us to receive a license number before proceeding.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.

:::

## Install Coresnap and Dependencies

### RHEL

To install Backtrace packages, first install Backtrace's RPM mirror by running:

```bash
curl -s https://<LICENSE>:@packagecloud.io/install/repositories/backtrace/stork/script.rpm.sh | sudo bash
```

- LICENSE: Contact us if you haven't received your license yet.
- RELEASE: RHEL/CentOS Release Number

This will configure yum to pull from Backtrace's RPM mirror. To verify proper yum configuration, run:

```bash
# Clean and update yum package listing
$ sudo yum clean; sudo yum update

# Confirm that the backtrace-* packages are available
$ yum list ^backtrace-*
backtrace-coresnap
backtrace-coronerd
backtrace-coroner
backtrace-ptrace
backtrace-hydra
[...]
```

Then install the packages:

```bash
# Install packages (on machines which submit snapshots)
$ yum install backtrace-coroner
$ yum install backtrace-coresnap
$ yum install backtrace-ptrace
```

### Debian-based Systems (Including Ubuntu)

To install Backtrace packages, first install Backtrace's APT mirror by running:

```bash
curl -s https://<LICENSE>:@packagecloud.io/install/repositories/backtrace/stork/script.deb.sh | sudo bash
```

- LICENSE: Contact us if you haven't received your license yet.
- DISTRO: ubuntu or debian
- RELEASE: trusty (Ubuntu 14.04), precise (Ubuntu 12.04), xenial (Ubuntu 16.04.2), bionic (Ubuntu 18.04), focal (Ubuntu 20.04), wheezy (Debian 7), jessie (Debian 8), stretch (Debian 9), buster (Debian 10)

This will configure apt to pull from Backtrace's APT mirror. To verify proper apt configuration, run:

```bash
# Clean and update apt package listing
$ apt-get clean; apt-get update

# Confirm that backtrace-* packages are available
$ apt-cache search ^backtrace-*
backtrace-coresnap
backtrace-coronerd
backtrace-coroner
backtrace-ptrace
backtrace-hydra
[...]
```

Then install the packages:

```bash
# Install packages (on machines which submit snapshots)
$ apt-get install backtrace-coroner
$ apt-get install backtrace-coresnap
$ apt-get install backtrace-ptrace
```

### FreeBSD

Consult the dedicated page for FreeBSD.

### Install Morgue Command-Line Querying Tool

To install morgue, you'll need [Node.js](https://nodejs.org/en/). Simply run:

```bash
$ npm install backtrace-morgue -g
```

## Basic Testing

Now we will run a basic test to ensure connectivity to the object store before continuing.

### Testing with Morgue

Login to the object store by issuing the following login command with the credentials provided by Backtrace:

```bash
$ morgue login https://yourcompany.sp.backtrace.io
Username: jdoe
Password:
```

Now, list the contents of the `blackhole` project. It should return an empty result set, like below:

```bash
$ morgue list blackhole
jdoe: yourcompany/blackhole as of 1M ago [384 us]
```

#### Troubleshooting

If you run into any issues querying the object store with `morgue` at this point, please ensure that your machine is able to communicate with yourcompany.sp.backtrace.io via the following TCP ports:

- 443
- 4097
- 6098
- 9040

### Integration

Before proceeding, please disable any services which process coredumps or modify `/proc/sys/kernel/core_pattern` (such as apport)

### Deploy Client Configuration

Coresnap requires a copy of the coroner client configuration file (coroner.cf), which should be provided to you by a Backtrace rep. Place a copy of this file in `/usr/local/etc/coroner.cf`.

Note that this file will need to be updated for each new project token (see [Create Additional Projects](#create-additional-projects))

### Prepare Coresnap.conf

Copy `/opt/backtrace/etc/coresnap/coresnap.conf` to either `/usr/local/etc/coresnap/coresnap.conf` or `/etc/coresnap/coresnap.conf`. The new file is where you'll make changes to the coresnap configuration when customizing your installation later on.

On FreeBSD, copy `/opt/backtrace/etc/coresnap/coresnap.conf.sample` to `/opt/backtrace/etc/coresnap/coresnap.conf` instead.

Note that installing coresnap does not create the paths `/usr/local/etc/coresnap/coresnap.conf` or `/etc/coresnap/coresnap.conf` - If they do not exist, go ahead and create them yourself.

### Start and Test Coresnap

```bash
$ service coresnapd start
```

or

```bash
$ /etc/init.d/coresnapd start
```

Now we'll test out coresnap by triggering a coredump. A simple way to do this is to send a SIGABRT to the PID for a running `vim` process, but if your own application already handles this signal in the correct way to generate coredumps, you can use its PID as well:

```bash
$ kill -SIGABRT
```

### Verify Object Store

Now we verify that the snapshot was sent to the object store. One simple way to do this is to re-run `morgue list blackhole`, and verify that it now shows a single crash:

```bash
$ morgue list blackhole
*                         ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▂ 5 seconds ago
Date: Mon Jan 23 2017 17:25:12 GMT-0500 (EST)
      Mon Jan 23 2017 17:25:12 GMT-0500 (EST)
Occurrences: 1

jdoe: yourcompany/blackhole as of 1M ago [497 us]
```

You can also view this via the Web Console UI. Simply browse to `https://<yourcompany>.sp.backtrace.io` and login with the credentials you previously created.

## Troubleshooting

### First Steps

The first step in troubleshooting is to check the system log for messages from the coresnap service:

```bash
$ cat /var/log/syslog | grep coresnap
```

When coresnap processes a snapshot normally, you'll see a series of log messages similar to this:

```bash
Oct  6 17:49:06 mbreauxpc coresnap[27337]: Crash dump archived in /var/coresnap/archive/pending/a78771dc-b687-4e28-b885-8fa9ed43894d
Oct  6 17:49:06 mbreauxpc coresnap[27338]: Executing slave: /opt/backtrace/bin/ptrace --faulted -o/var/coresnap/archive/sending/a78771dc-b687-4e28-b885-8fa9ed43894d --load=libc- --kv=coresnap.object:a78771dc-b687-4e28-b885-8fa9ed43894d --resource=/var/coresnap/archive/assets/a78771dc-b687-4e28-b885-8fa9ed43894d --core /var/coresnap/archive/pending/a78771dc-b687-4e28-b885-8fa9ed43894d /usr/bin/vim.basic
Oct  6 17:49:07 mbreauxpc coresnap[27339]: Executing slave: /opt/backtrace/bin/coroner -c /usr/local/etc/coroner.cf put blackhole blackhole /var/coresnap/archive/sending/a78771dc-b687-4e28-b885-8fa9ed43894d
Oct  6 17:49:07 mbreauxpc coresnap[847]: crash a78771dc-b687-4e28-b885-8fa9ed43894d processed in 1 second
```

**If you don't see any of these messages, your system or application is not set up to generate coredumps:** - First check ulimit -a and make sure your core file size is set to unlimited for the user that the faulting appication is running under. If it isn't, execute a ulimit -c unlimited as that user. - Try to run vim as the same user you'll be running your application as, and send it a SIGABRT to verify that it generates a coredump. If this does not trigger coresnap, then your system is not set up to generate coredumps.

**If coresnap is failing after the second step:**

    - Make a note of the error message that follows, and attempt to manually run the full ptrace command listed after Executing slave: as the coresnap user. If there are any permissions issues with either ptrace reading the coredump, or with ptrace generating the output file, this should help reveal it. Also see Troubleshooting Tools below.

**If coresnap is failing after the third step:**

    - There may be a connectivity issue with sending the snapshot to the object store. Attempt to manually run the coroner command listed after Executing slave:. If this fails, verify that nothing is blocking traffic on port 6098 between the client and the object store (yourcustomername.sp.backtrace.io).

### Troubleshooting Tools

You can use the `coresnap list` command the view the state of unprocessed core dumps, and snapshots that haven't yet been sent:

```bash
$ /opt/backtrace/bin/coresnap list

   sending/3d22c19c-09c... -s- vim.basic   Fri Apr 14 22:48:44 2017    9.45kB
   pending/84605573-9de... c-- vim.basic   Fri Apr 14 22:49:40 2017    3.12mB
   pending/143fc129-afc... c-- vim.basic   Fri Apr 14 22:50:01 2017    3.12mB

[pending]/1O/6.24mB [sending]/1O/9.45kB
```

You can have coresnap attempt to reprocess an object in one of these stages by running `coresnap retry`.

```bash
$ /opt/backtrace/bin/coresnap retry pending/84605573
$ /opt/backtrace/bin/coresnap list
   sending/3d22c19c-09c... -sa vim.basic   Fri Apr 14 22:48:44 2017    9.45kB
   sending/84605573-9de... -sa vim.basic   Fri Apr 14 22:53:44 2017    9.44kB
   pending/143fc129-afc... c-- vim.basic   Fri Apr 14 22:50:01 2017    3.12mB
```

**For an object stuck in pending state**

Objects in `pending` status are core dumps that coresnap has not yet generated a Backtrace snapshot from. This may indicate a failure when coresnap runs `ptrace` against the core dump.

You can try to manually create a snapshot to submit to the object store by running `ptrace --core` . By default, coresnap places core dumps and snapshots in subfolders of `/var/coresnap/archive` (you can verify this in coresnap.conf). In the example above, the core dump still in `pending` state is located at `/var/coresnap/archive/pending`, and you can try to create a snapshot with:

```bash
$ ptrace --core /var/coresnap/archive/pending/143fc129-afc* `which vim`
```

If `ptrace` is failing, you can try this with the `bt` tool:

```bash
$ bt --core /var/coresnap/archive/pending/143fc129-afc* `which vim`
```

**For an object stuck in sending state**

Snapshots in `sending` status have not yet been submitted to the object store. If an object gets stuck in `pending` status, coresnap may be having trouble sending the snapshot up to the object store. See [If coresnap is failing after the third step](#first-steps).

## Advanced

Now that the Backtrace components are up and running on a basic level, we can begin making customizations.

### Create Additional Projects

As noted, coresnap sends everything to the `blackhole` project by default. But it's really more useful to sort your applications' snapshots into their own projects in the object store.

Return to the Web UI, click the Menu Icon on the top right, and select Configure Configuration.

<img src={useBaseUrl('/img/error-reporting/coresnap/5e601cedc71a7.png')} alt=""/>

On top of the project listing, you have the option to Create a new project. Click this, type in a name, and your new project will be created.

<img src={useBaseUrl('/img/error-reporting/coresnap/5e601cee9715f.png')} alt=""/>

Before you can use this project, you need to configure the project's token:

Select the project in the project listing, click the Tokens option in the menu on the left, and click the green "Create a new token" button, select your user, then click Create.

<img src={useBaseUrl('/img/error-reporting/coresnap/5e601cef9bdfb.png')} alt=""/>

Now click the clipboard icon to the left of the newly created token - this will copy that long token string to your clipboard.

<img src={useBaseUrl('/img/error-reporting/coresnap/5e601cf0cbc4e.png')} alt=""/>

Edit your `/usr/local/etc/coroner.cf` and add this token to the `[tokens]` section using the same format you see for the `blackhole` project: `projectname = `. You'll need to repeat this process for each new project you create.

### Create Additional Users

While you're in the Web UI, you have the option of creating additional users for those you wish to grant UI access. Simply return to the first configuration screen, click Users in the left-hand menu, and click "Create a new User" and follow the prompts.

### Route Snapshots to the Correct Projects

Now that you have new projects created, and tokens set up for them, let's make sure coresnap sends snapshots to the correct place:

Edit either `/usr/local/etc/coresnap/coresnap.conf` or `/etc/coresnap/coresnap.conf` (depending on which one you created in the earlier step above) and find the line `format.1 = blackhole`. **Above** this line, add additional `format.1` lines for each projects, following this pattern:

```bash
format.1 = projectname %e /end-of-executablename$
```

:::note

For this to work, the token name you added to `coroner.cf` in the previous section must be exactly the same as the name of the project you set up in object store Web UI, and the `projectname` in the `format.1` line must match these both!

:::

The `%e` specifies that we're matching on the process' executable name, and the part after it is a regular expression match. Here we're saying to set the project and token name we're passing to the `coroner put` command later on to `projectname` if the executable ends in `end-of-executablename`.

Long story short: The effect here is that if the executable matches, your snapshot will go to the project that you specify.

If you wish to do deeper customization here, please feel free to consult the inline notes in the coresnap.conf just above the `format.1` line, or ask your Backtrace support representative.

Remember to restart coresnapd after any coresnap.conf changes.

### Configure Workflow Integrations

With your Backtrace integration up and running, now Backtrace can assist you with setting up alerting to your favorite third-party ticketing or messaging services. Head to the product guide to learn more about workflow integrations.

### Attach and Display Attributes

Finally, you can add custom attributes to your snapshots to assist with querying and grouping in both the Web UI and via the morgue command-line tool.

Backtrace automatically populates the following attributes to your snapshots:

- hostname
- application
- uname.machine
- uname.release
- uname.version

To add additional key-value pairs to your snapshots, you'll need to populate the `BACKTRACE_DEFAULTS` environment variable. This variable contains line-delimited key-value pairs, like:

`version=1.2.3`
`dc=newyork`

Furthermore, you can specify a program or script for coresnap to call that will populate this environment variable. This is useful if you need to run code at snapshot generation time to populate these values.

By default, coresnap will attempt to execute `/opt/backtrace/etc/coresnap/defaults` and will pass the faulted process' executable name to the script as its first parameter. You can change this path by modifying `defaults.command` in coresnap.conf.

Again, remember to restart coresnapd after any changes to coresnap.conf.

Finally, return to the configuration section of the Web UI, select your project, then select Attributes in the left-hand menu. Click "Create a new attribute" and enter the name, type, and format of the Attribute, and click Create.

Make sure the attribute name is identical to the key that you set in the `BACKTRACE_DEFAULTS`.

To display these in `morgue list`, include an aggregation flag such as `--select=` or `--histogram=` to your `morgue list` invocation.

```bash
$ morgue list blackhole --select=hostname
*
#9c5f
hostname: jdoepc
jdoe: yourcompany/blackhole as of 1M ago [529 us]
```

For more information, see the [Morgue README](https://github.com/backtrace-labs/backtrace-morgue).

### Go Application Integration

To use Coresnap to capture errors from your Go application, make sure your application's environment includes the environment variable `GOTRACEBACK=crash`. This enables your application to generate a core dump when it panics, or when it receives a SIGABRT signal

### Managing Disk Space

Coresnap provides a few useful settings for managing your disk space:

```bash
#
# Do not archive dumps if the target has less than 10% of
# free space rounded to the next disk block size.
#
dump.quota = 10%

#
# These options dictate how the coresnapd process will behave.
#
[daemon]
#
# The purge.age option specifies when coresnapd should unlink files according
# to the age of the files. The format is
```

The `dump.quota` option allows you to tell coresnap not to archive any core dumps if free disk space is smaller than a certain level. Note that once the quota is met, new core dumps won't be processed. This includes processing snapshots from the core dump, sending the snapshot to the object store, and notifications about new groups or errors via workflow integrations. We recommend setting the quota as generously as possible, alongside the `purge.age` setting.

The `purge.age` setting causes coresnap to unlink archived files according to age. Combined with `dump.quota`, this is a good way to manage your disk space. If you anticipate a low error volume and wish to keep your files indefinitely, set `purge.disabled` to `true`.

Remember to restart `coresnapd` after any configuration changes.
