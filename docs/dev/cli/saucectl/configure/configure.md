---
id: configure
title: saucectl configure
sidebar_label: configure
---

Generate a credentials file with your Sauce Labs Username and Access Key.

## Usage

```bash
$ saucectl configure [OPTIONS]
```

## Extended Description

Your Sauce Labs `username` and `accessKey` are required to post your test results to the Sauce Labs platform. These values are available on your [User Settings](https://app.saucelabs.com/user-settings) page.

The `saucectl configure` command prompts you to provide your Sauce Labs credentials for the purpose of generating a `credentials.yml` file that `saucectl` can access to automatically authenticate commands without requiring manual authentication. The `credentials.yml` file is created in a `$HOME/.sauce` folder (or `%USERPROFILE%\.sauce` on Windows). If a user's home directory is not defined, the credentials are instead saved in your `saucectl` project root.

You can run the `configure` command without flags, invoking it to prompt you for your credential values, or you can supply the values inline using the username and access key flags.

### Environment Variables Prioritized

If you have set your credentials as [environment variables](/basics/environment-variables), `saucectl` will apply those values before it looks for the `credentials.yml` file. This is important to note because, if you want to run tests under a different account, and you edit your credentials file, but not your environment variables, the authentication account will be unchanged.

:::warning Protect your Credentials
Whether you are using environment variables or a credentials file, make sure your authentication data is protected. Use secrets or context variables to mask your environment variables, or add `credentials.yml` to your `gitignore` file to ensure your credentials are not exposed in your commits.
:::

## Options Details

### <span className="cli">--accessKey</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The authentication access key associated with the Sauce Labs user account making this request. If you have not set your authentication credentials as environment parameters or generated a `credentials.yml` file, this value is required.

**Shorthand:** `-a`

</div>

### <span className="cli">--username</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

A valid Sauce Labs user account. If you have not set your authentication credentials as environment parameters or generated a `credentials.yml` file, this value is required.

**Shorthand:** `-u`

</div>

## Examples

### Interactive Example

```bash
$ saucectl configure
Don't have an account? Signup here:
https://bit.ly/saucectl-signup

Already have an account? Get your username and access key here:
https://app.saucelabs.com/user-settings

? SauceLabs username tester.ninja
? SauceLabs access key 2a4a9x11-56b7-4d83-8f6o-b601bg67555e

You're all set!
```

### Inline Example

```bash
$ saucectl configure -u tester.ninja -a 2a4a9x11-56b7-4d83-8f6o-b601bg67555e
You're all set!
```
