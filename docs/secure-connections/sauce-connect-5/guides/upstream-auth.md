---
id: upstream-auth
title: Sauce Connect Upstream Authentication
sidebar_label: Upstream Authentication
---

Sauce Connect supports upstream HTTP authentication via the [`--auth`](/dev/cli/sauce-connect-5/run/#auth) flag.
This flag allows the proxy to automatically send credentials to specified hosts.
It is necessary when your site under test is protected by basic authentication, and you want Sauce Connect to handle authentication transparently for you.

## Overview

By using the [`--auth`](/dev/cli/sauce-connect-5/run/#auth) flag, you can instruct Sauce Connect to send authentication credentials automatically whenever a request matches a specific host and port. This works for:

- Standard HTTP basic authentication prompts.
- Authentication challenges triggered by clicks or form submissions.

:::note
All domains specified via the [`--auth`](/dev/cli/sauce-connect-5/run/#auth) flag are automatically [resigned](https://docs.saucelabs.com/secure-connections/sauce-connect-5/advanced/security-authentication/#ssl-certificate-bumping), as if they were passed using the [`--tls-resign-domains`](/dev/cli/sauce-connect-5/run/#tls-resign-domains) flag.
:::

## Usage

To configure Sauce Connect to send credentials to an upstream server, use the following format:

```bash
--auth <username[:password]@host:port,...>
```

### Example

If your application is hosted at `mysite.com` and uses basic authentication with the username `awesometester` and password `supersekrit`, your command would look like this:

```bash
--auth awesometester:supersekrit@mysite.com:80
```
You can also use HTTPS (port `443`) or any other port that your upstream server is listening on.

### Multiple Hosts

You can provide the `--auth` flag multiple times to support multiple upstream hosts:

```bash
--auth awesometester:supersekrit@mysite.com:80 \
--auth awesometester:supersekrit@myothersite.com:443 \
--auth awesometester:supersekrit@mythirdsite.com:80
```

### Wildcard Matching

You can use asterisks (*) to match any host and/or any port:

```bash
--auth awesometester:supersekrit@*:*
``` 

This instructs Sauce Connect to send the credentials to all hosts and all ports it connects to.

## Security Tip

If you're concerned about exposing credentials in the command line (where they can be viewed in process lists), consider using environment variables instead. For more details, see [Using Environment Variables](/secure-connections/sauce-connect-5/guides/configuration/#environment-variables)
