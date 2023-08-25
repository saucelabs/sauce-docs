---
id: python
title: Python Integration Guide
sidebar_label: Python
description: Use Python in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## Download

The `backtracepython` package is available on `pip` or at [https://github.com/backtrace-labs/backtrace-python](https://github.com/backtrace-labs/backtrace-python).

## Supported Platforms

The `backtracepython` package supports both Python 2 and 3.

## Basic Usage

```python
import backtracepython as bt

bt.initialize(
    endpoint="https://yourcompany.sp.backtrace.io:6098",
    token="51cc8e69c5b62fa8c72dc963e730f1e8eacbd243aeafc35d08d05ded9a024121"
)
```

## Sending Reports From Unhandled Exceptions

By default, the `backtracepython` module automatically captures unhandled exceptions and creates and sends error reports from them. This behavior can be adjusted with the `disable_global_handler` option in `bt.initialize` (see below).

## Sending Reports Manually

You can also send error reports manually in your code. However, to get a correct callstack and source code context, you must send an error with a Python exception context. To do this, you can raise a Python exception and then immediately send a report using the `send_last_exception` call. Here's an example:

```python
try:
    raise Exception("This report was sent manually.")
except:
    bt.send_last_exception()
```

## Documentation

### `bt.initialize(**kwargs)`

#### Arguments

- `endpoint` (required): Example: `https://yourcompany.sp.backtrace.io:6098`. Sets the HTTP/HTTPS endpoint that error reports will be sent to.
- `token` (required): Example: `51cc8e69c5b62fa8c72dc963e730f1e8eacbd243aeafc35d08d05ded9a024121`. Sets the token that will be used for authentication when sending an error report.
- `attributes`: Dictionary that contains additional attributes to be sent along with every error report. These can be overridden on an individual report with `report.set_attribute`. Example: `{ 'application': "ApplicationName", 'serverId': "foo" }`.
- `timeout`: Defaults to 4. Maximum amount of seconds to wait for error report processing and sending before concluding it failed.
- `debug_backtrace`: Defaults to False. Set to True to have an error during collecting the report raise an exception and print some debugging information to stderr.
- `disable_global_handler`: Defaults to False. If set to False, this module will insert itself in the `sys.excepthook` chain and report those errors automatically before re-raising the exception. Set to True to turn this off. In this case, error reports are only reported if you manually create and send them.
- `context_line_count`: Defaults to 200. When an error is reported, this many lines above and below each stack function are included in the report.
- `tab_width`: Defaults to 8. If there are any hard tabs in the source code, it is unclear how many spaces they should be indented to display the source code correctly. Therefore, the error report can override this number to specify how many spaces a hard tab is represented by when viewing the source code.

### `bt.BacktraceReport`

Create a report object that you can later choose whether or not to send.

This may be useful to track something like a request.

- `report.set_attribute(key, value)`: Adds an attribute to a specific report. Valid types for value are `str`, `float`, `int`, and `bool`. Attributes are indexed and searchable. See also `addAnnotation`.
- `report.set_dict_attributes(dict)`: Adds all key-value pairs of dict into the report recursively.
- `report.set_annotation(key, value)`: Adds an annotation to a specific report. Annotations, unlike attributes, are not indexed and searchable. However, they are available for inspection when you view a specific report.
  - `key`: String which is the name of the annotation.
  - `value`: Any type which is JSON-serializable.
- `report.set_dict_annotations(dict)`: Adds all key-value pairs of dict into the report.
- `report.set_exception(ExceptionType, exception, traceback)`: `error` is an Error object. Backtrace will extract information from this object, such as the error message and stack trace, and send this information along with the report.
- `report.capture_last_exception()`: This is the same as `report.set_exception(*sys.exc_info())`.
- `report.log(line)`: Adds a timestamped log message to the report. Log output is available when you view a report.
- `report.send()`: Sends the error report to the endpoint specified in `initialize`.

### `bt.send_last_exception(**kwargs)`

- `attributes`: Dictionary of attributes to add to the report. See `report.set_dict_attributes`.
- `annotations`: Dictionary of annotations to add to the report. See `report.set_dict_annotations`.

## Installation

### Requirements

This module supports Python 2, Python 3, and PyPy.

```bash
python -m pip install backtracepython
```

## Contributing

To run the test suite:

```bash
python setup.py test
```

Since all of these implementations of Python are supported, ensure to run the test suite with all of them:

- Python 2
- Python 3
- PyPy

### Publishing to PyPI

Make sure all tests pass (see above).
Update the version number in the `backtracepython` module.
Tag the version in git.

```bash
python2 setup.py bdist_wheel --universal
twine upload dist/*
```
