---
id: server-installation
title: Coroner Server Installation
sidebar_label: Server Installation
description: Backtrace's object-store for post-mortem assets.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This guide provides step-by-step instructions for installing and setting up coronerd, Backtrace's object-store for post-mortem assets.

If you are using Backtrace's hosted service, refer to the [Object Store Configuration](/error-reporting/advanced/coroner/server-setup/) guide.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## Installation

Follow the steps in Package Installation to install the Backtrace repository.

### Ubuntu/Debian

If you are running Ubuntu 12.04, install libhwloc4:

```bash
$ apt-get install libhwloc4
```

If you are running Ubuntu 14.04 or 16.04, install libhwloc5:

```bash
$ apt-get install libhwloc5
```

To install coronerd using apt, run:

```bash
$ apt-get install backtrace-coronerd backtrace-gimli
```

### RHEL

To install coronerd using yum, run:

```bash
$ yum install backtrace-coronerd backtrace-gimli
```

## System Configuration

The following steps outline the preliminary system configuration required before starting `coronerd`.

### Increase File Descriptor Limits

For RHEL/CentOS and Ubuntu 14 (and other non-systemd distros), edit `/etc/security/limits.conf` and add the following lines:

```bash
* hard nofile 131072
* soft nofile 131072
root hard nofile 131072
root soft nofile 131072
```

Exit and re-login to the terminal for the changes to take effect.

For Ubuntu 16 and other systemd-based distros, check `/etc/systemd/system/coronerd.service` and verify that the following line is present under the **Service** section:

```bash
LimitNOFILE=131072
```

If you modified `coronerd.service` above, run the following command:

```bash
systemctl daemon-reload
```

### Increase `max_map_count`

Run the following commands:

```bash
echo "vm.max_map_count=16000000" /etc/sysctl.conf
sysctl -p
```

### SSL Configuration

If you want to disable SSL on coronerd, refer to the [Disable SSL](/error-reporting/advanced/coroner/server-advanced/#disable-ssl) section.

If you want to use CA-trusted certificates, see the [CA-trusted Certificates](#ca-trusted-certificates) section below.
If you want to use self-signed certificates, see the [Self-signed Certificates](#self-signed-certificates) section below.

### CA-Trusted Certificates

First, copy your certificate chain file (or certificate file) and private key file to `/etc/coronerd/ssl/`.

For security reasons, ensure that the private key has strict permissions:

```bash
$ chmod 600 /etc/coronerd/ssl/key.pem
$ ls -lptr /etc/coronerd/ssl/key.pem
-rw------- 1 root root 1704 Nov 24 11:43 /etc/coronerd/ssl/key.pem
```

In the `/etc/coronerd/coronerd.conf` file, specify the certificate and key file paths for the SSL configuration. All SSL objects must point to your certificate and key files.

```json title="Example"
{
    //...
    "console" : {
        "path" : "/var/run/coronerd/coronerd.socket",
        "bind" : {
            "hostname" : "0.0.0.0",
            "service" : "9040"
        },
        "backlog" : 16,
        "ssl" : {
            "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",
            "key" : "/etc/coronerd/ssl/key.pem"
        }
    },
    //...
    "listener" : {
        "write" : {
            "http_bind" : [
                {
                    "hostname" : "0.0.0.0",
                    "service" : "6097",
                    "concurrency" : 2000
                }
            ],
            "https_bind" : [
                {
                    "hostname" : "0.0.0.0",
                    "service" : "6098",
                    "concurrency" : 2000
                }
            ],
            "threads" : 1,
            "ssl" : {
                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",
                "key" : "/etc/coronerd/ssl/key.pem"
            }
        },
        "read" : {
            "bind" : [
                {
                    "hostname" : "0.0.0.0",
                    "service" : "4097"
                }
            ],
            "threads" : 1,
            "ssl" : {
                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",
                "key" : "/etc/coronerd/ssl/key.pem"
            }
        },
        "http-console" : {
            "bind" : [
                {
                    "hostname" : "0.0.0.0",
                    "service" : "443",
                    "concurrency" : 1000
                }
            ],
            "columns" : {
        //...
            },
            "threads" : 1,
            "ssl" : {
                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",
                "key" : "/etc/coronerd/ssl/key.pem"
            }
        }
    }
}
```

If you are using a certificate file, add the `certificate` setting alongside the `key` setting. Refer to the [Self-signed Certificates](#self-signed-certificates) section for more information.

### Self-Signed Certificates

A self-signed certificate is not issued by a trusted certificate authority (CA). However, it can be used to establish a secure channel if manually configured as a trusted certificate authority. Using self-signed certificates only affects the secure channels initiated by coroner and does not affect the system's overall secure channels and web-of-trust.

To generate a self-signed certificate (coronerd-cert.pem) and key (coronerd-key.pem), use the command below. You will be prompted to provide a "Common Name" value during the generation process. This value must match the host portion of the https://:port entry in the "write" configuration key of the desired universe section in the coroner client's configuration.

```bash
$ sudo mkdir /etc/coronerd/ssl
$ openssl req -nodes -new -x509  -keyout /etc/coronerd/ssl/coronerd-key.pem -out /etc/coronerd/ssl/coronerd-cert.pem
Generating a 2048 bit RSA private key
......................+++
......+++
writing new private key to '/etc/coronerd/ssl/coronerd-key.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:New York
Locality Name (eg, city) []:New York
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Backtrace I/O, LLC
Organizational Unit Name (eg, section) []:.
Common Name (e.g. server FQDN or YOUR name) []:127.0.0.1
Email Address []:support@backtrace.io
$ ls -lptr /etc/coronerd/ssl/coronerd-key.pem /etc/coronerd/ssl/coronerd-cert.pem
-rw-rw-r-- 1 root root 1704 Nov 24 11:43 /etc/coronerd/ssl/coronerd-key.pem
-rw-rw-r-- 1 root root 1415 Nov 24 11:43 /etc/coronerd/ssl/coronerd-cert.pem
```

For security reasons, ensure that the private key has strict permissions:

```bash
$ chmod 600 /etc/coronerd/ssl/coronerd-key.pem
$ ls -lptr /etc/coronerd/ssl/coronerd-key.pem
-rw------- 1 root root 1704 Nov 24 11:43 /etc/coronerd/ssl/coronerd-key.pem
```

The `coronerd-key.pem` file must remain private and only be accessible on the host(s) running coronerd. The `coronerd-cert.pem` file is public and must be accessible on all hosts running the coroner client.

## Step 2: Configure Coronerd

Make sure that both the certificate and key files are accessible on the host where coronerd is running. In your coronerd configuration file, update the `console`, `write`, `read`, and `http-console` sections under the listener with the SSL configuration.

```json title="Example"
{
    //...
    "console" : {
        "path" : "/var/run/coronerd/coronerd.socket",
        "bind" : {
            "hostname" : "0.0.0.0",
            "service" : "9040"
        },
        "backlog" : 16,
        "ssl" : {
            "certificate" : "/etc/coronerd/ssl/coronerd-cert.pem",
            "key" : "/etc/coronerd/ssl/coronerd-key.pem"
        }
    },
    //...
    "listener" : {
        "write" : {
            "http_bind" : [
                {
                    "hostname" : "0.0.0.0",
                    "service" : "6097",
                    "concurrency" : 2000
                }
            ],
            "https_bind" : [
                {
                    "hostname" : "0.0.0.0",
                    "service" : "6098",
                    "concurrency" : 2000
                }
            ],
            "threads" : 1,
            "ssl" : {
                "certificate" : "/etc/coronerd/ssl/coronerd-cert.pem",
                "key" : "/etc/coronerd/ssl/coronerd-key.pem"
            }
        },
        "read" : {
            "bind" : [
                {
                    "hostname" : "0.0.0.0",
                    "service" : "4097"
                }
            ],
            "threads" : 1,
            "ssl" : {
                "certificate" : "/etc/coronerd/ssl/coronerd-cert.pem",
                "key" : "/etc/coronerd/ssl/coronerd-key.pem"
            }
        },
        "http-console" : {
            "bind" : [
                {
                    "hostname" : "0.0.0.0",
                    "service" : "443",
                    "concurrency" : 1000
                }
            ],
            "columns" : {
        //...
            },
            "threads" : 1,
            "ssl" : {
                "certificate" : "/etc/coronerd/ssl/coronerd-cert.pem",
                "key" : "/etc/coronerd/ssl/coronerd-key.pem"
            }
        }
    }
}
```

## Step 3: Configure Coroner Client

Set up the coroner client configuration file (coroner.cf) as described in the [Configuration using self-signed certificates](/error-reporting/advanced/coroner/client-getting-started) guide.

### Troubleshooting

Problem:

```bash
"error: cURL failure (SSL peer certificate or SSH remote key was not OK): SSL: certificate subject name 'XXX' does not match target host name 'YYY'"
```

This error indicates that the certificate was generated with a `Common Name` field set to XXX, but the client is accessing the server using the name YYY (using a `write` configuration value of `https://YYY:port`).

#### Solution 1:

Ensure that the client accesses the server using the name specified in the certificate's `Common Name`. This may require correcting DNS entries, IP addresses, or routes.

#### Solution 2:

Regenerate the certificate and key used by the coronerd server, ensuring that the new certificate's `Common Name` matches the new YYY hostname used in the `write`` configuration value.

## Starting `coronerd`

To start coronerd, run the following command:

```bash
$ /etc/init.d/coronerd start
```

To verify that coronerd is running properly, use the following command:

```bash
$ /etc/init.d/coronerd status
```

## Create Organization and Admin User

Before accessing the coronerd object store via the Web UI, you need to create the organization object and an initial admin user using the command-line utility `morgue`.

To install `morgue`, use the Node.js NPM utility. Run `npm install backtrace-morgue -g`. If you need Node.js, refer to the [Node.js website](https://nodejs.org/en/).

Launch `morgue setup`, specifying the URL of your coronerd instance. Follow the prompts to create the organization and initial admin user, and then proceed to set up via the Web UI.

If you are using self-signed SSL certificates, pass the `-k` flag to `morgue setup`.

```bash
$ morgue setup https://coronerd.mydomain.com

Determining system state...unconfigured
```

### Create an Organization

Start by configuring the organization that uses the object store. Provide a one-word name for the organization using the object store. For example, if your company name is "Appleseed Systems I/O," you could use the name "appleseed." The name must be lowercase.

### Create an Administrator

Create an administrator user who will be used to configure the server and perform system-wide administrative tasks.

```bash
Username: jdoe
E-mail address: jdoe@mydomain.com
Password: ************

Confirm password: ************
```

[Next step: Coroner Server Setup](/error-reporting/advanced/coroner/server-setup)
