---
id: configure
title: saucectl configure
sidebar_label: saucectl configure
---

## Description

Generate a credentials file with your Sauce Labs Username and Access Key.

## Usage

<span className="cli">$ saucectl configure [OPTIONS]</span>


## Extended Description

Your Sauce Labs `username` and `accessKey` are required to post your test results to the Sauce Labs platform. These values are available on your [User Settings](https://app.saucelabs.com/user-settings) page.

The `saucectl configure` command prompts you to manually enter your credentials if it cannot detect relevant environment variables, then generates a `credentials.yml` file in a `.sauce` directory in your home folder, which it will reference for subsequent `saucectl` operations that require authentication.

```bash
saucectl configure
```

Allows you to provide your [Sauce Labs credentials]((https://app.saucelabs.com/user-settings) for the purpose of generating a `credentials.yml` file that `saucectl` can access to automatically authenticate commands without requiring manual authentication. The `credentials.yml` file is created in a `.sauce` folder in your  home directory.

:::note Environment Variable credentials prioritized
`saucectl` will also detect your credentials as [environment variables](/basics/environment-variables) if you have set them. In fact, if both exist, the environment variable values take precedence.
:::

You can run the `configure` command without flags, invoking it to prompt you for your credential values, or you can supply the values inline using the username and access key flags.

```bash title="Inline Example"
$ saucectl configure
Don't have an account? Signup here:
https://bit.ly/saucectl-signup

Already have an account? Get your username and access key here:
https://app.saucelabs.com/user-settings

? SauceLabs username tester.ninja
? SauceLabs access key 2a4a9x11-56b7-4d83-8f6o-b601bg67555e

You're all set!
```

```bash title="Interactive Example"
$ saucectl configure -u tester.ninja -a 2a4a9x11-56b7-4d83-8f6o-b601bg67555e
You're all set!
```


### Use Environment Variables

From the root of your project directory, enter the following to set your credentials as environment variables:

```bash
SAUCE_USERNAME='valid.username'
SAUCE_ACCESS_KEY='valid.key'
```

:::warning Protect your Credentials
Whether you are using environment variables or a credentials file, make sure your authentication data is protected. Use secrets or context variables to mask your environment variables, or add `credentials.yml` to your `gitignore` file to ensure your credentials are not exposed in your commits.
:::


## Options Summary

### `--accessKey <string>`
<p><small>| REQUIRED | STRING |</small></p>

The authentication access key for the Sauce Labs user account interacting with `saucectl`.

**Shorthand:** `-a <string>`

---

### `--username <string>`
<p><small>| REQUIRED | STRING |</small></p>

The valid Sauce Labs user account that will be interacting with `saucectl`.

**Shorthand:** `-u <string>`

---
