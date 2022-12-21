---
id: contributing
title: Contributing
sidebar_label: Overview
---

Thank you for your interest in making this project even better and more awesome. Your contributions are highly welcomed.

The Sauce Labs `sauce-docs` repo is an open source project. We are excited to engage with you
and the community.

Contribution can come in many forms: writing examples, making suggestions, pointing out bugs,
or updating docs. Most important is your patience and engagement. We are starting a
significant journey in the open instead of behind closed doors. Join us to make something great.

# Reporting Bugs

Reporting bugs is one of the best ways to contribute. Before creating a bug report, please check that an issue reporting the same problem does not already exist. If there is such an issue, you may add your information as a comment.

Feel free to start [here](https://github.com/saucelabs/sauce-docs/issues). Please fill out the
required information, be clear, specific, and add working examples of the problems you are
seeing. The problem will be resolved a lot faster if you do.

# Features

We have a lot of ideas and I'm sure you do, too. Please use our
[issues list](https://github.com/saucelabs/sauce-docs/issues) to suggest new features
that you would like to see added.

Once again, detail wins. Be clear and outcome oriented in your requests - it just makes
it easier for us to evaluate and prioritize.

# Contribute Code

If you would like to contribute either by fixing a bug or adding a feature, please make sure the code change is attached to a prior (or new) issue in the
[issues list](https://github.com/saucelabs/sauce-docs/issues).

We will likely reach out to you to ask questions and discuss approaches. Please understand this is about ensuring
that the repo stays easy for everyone to use.

### Step 1: Create a Fork

Make a fork and then clone the [sauce-docs](https://github.com/saucelabs/sauce-docs) repository.
If you need help, you can refer to the [GitHub help page](https://help.github.com/articles/fork-a-repo).

### Step 2: Make changes and commit them

First, make sure git knows your name and email address:

```shell
% git config --global user.name 'Santa Claus'
% git config --global user.email 'santa@example.com'
```

**Writing good commit messages is important.** A commit message
should describe what changed, why, and reference issues fixed (if
any). Follow these guidelines when writing one:

1. The first line should be around 50 characters or less and contain a
   short description of the change. It must be meaningful, as it's what people see when they
   run `git shortlog` or `git log --oneline`.
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.
4. Include `Fixes #N`, where _N_ is the issue number the commit
   fixes, if any.

A good commit message can look like this:

```text
explain commit normatively in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.

Fixes #141
```

### Step 3: Test

Bug fixes and features **should have tests**. Look at other tests to
see how they should be structured.

### Step 4: Submit a PR

Commit your changes to your fork and then create and submit a PR to `sauce-docs`.
Make sure your PR has a clear description of the problem/outcome you are addressing
and how you are approaching it. There is a template that simplifies this process.

For help, you can refer to
[submitting a pull request](https://help.github.com/articles/using-pull-requests).

### Step 5: Connect

We will reach out to ask any questions or make suggestions. Once done, we will
merge the change and... congratulations! You've contributed to improving digital confidence!

Have fun and enjoy hacking!
