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

```
python -m pip install backtracepython
```

```python
import backtracepython as bt
bt.initialize(
    endpoint="https://submit.backtrace.io/{universe}/{token}/json"
)
```

### Sending Reports from Unhandled Exceptions

By default, the `backtracepython` module automatically captures unhandled exceptions and creates and sends error reports from them. This behavior can be adjusted with the `disable_global_handler` option in `bt.initialize` (see below).

### Sending Reports Manually

You can also send error reports manually in your code. However, to get a correct callstack and source code context, you must send an error with a Python exception context. To do this, you can raise a Python exception and then immediately send a report using the `send_last_exception` call. Here's an example:

```python
try:
    raise Exception("This report was sent manually.")
except:
    bt.send_last_exception()
```

## Documentation

### bt.initialize

| Argument | Explanation |
| :--- | :--- |
| `endpoint` | **Required.** Sets the HTTP/HTTPS endpoint that error reports will be sent to. Endpoint URL format: `https://submit.backtrace.io/{subdomain}/{token}/json`. |
| `attributes` | Dictionary that contains additional attributes to be sent along with every error report. These can be overridden on an individual report with `report.set_attribute`. Example: `{ 'application': "ApplicationName", 'serverId': "foo" }`. Attribute values should be set to a primitive value such as boolean, integer, or string. |
| `attachments` | A list of file paths that will be sent with each report. |
| `ignore_ssl_certificate` | Defaults to `False`. If `True`, SSL verification will be ignored during HTTP submission. |
| `timeout` | Defaults to `4`. Maximum amount of seconds to wait for error report processing and sending before concluding it failed. |
| `debug_backtrace` | Defaults to `False`. Set to `True` to have an error during collecting the report raise an exception, and to print some debugging information to stderr. |
| `disable_global_handler` | Defaults to `False`. If this is `False`, this module will insert itself in the `sys.excepthook` chain and report those errors automatically before re-raising the exception. Set to `True` to disable this. Note that in this case, the only way error reports will be reported is if you manually create and send them. |
| `context_line_count` | Defaults to `200`. When an error is reported, this many lines above and below each stack function are included in the report. |
| `tab_width` | Defaults to `8`. If there are any hard tabs in the source code, it is unclear how many spaces they should be indented to correctly display the source code. Therefore the error report can override this number to specify how many spaces a hard tab should be represented by when viewing source code. |
| `collect_source_code` | Defaults to `True`. By default, the Backtrace client collects the corresponding source code and sends it with the report. If set to `False`, the source code will not be collected. |

### bt.BacktraceReport

Create a report object that you can later choose whether or not to send. This may be useful to track something like a request.

| Argument | Explanation |
| :--- | :--- |
| `report.set_attribute(key, value)` | Adds an attribute to a specific report. Valid types for `value` are `str`, `float`, `int`, and `bool`. Attributes are indexed and searchable. See also `addAnnotation`. |
| `report.set_dict_attributes(dict)` | Adds all key-value pairs of `dict` into the report recursively. |
| `report.get_attributes()` | Returns all report attributes. |
| `report.set_annotation(key, value)` | Adds an annotation to a specific report. Annotations, unlike attributes, are not indexed and searchable, but are available for inspection when viewing a specific report.<br />**key**: String which is the name of the annotation.<br />**value**: Any type which is JSON-serializable. |
| `report.set_dict_annotations(dict)` | Adds all key-value pairs of `dict` into the report. |
| `report.add_attachment(attachment_path)` | Adds an attachment to the report. |
| `report.get_attachments()` | Returns a list of attachment paths. |
| `report.set_exception(ExceptionType, exception, traceback)` | `error` is an Error object. Backtrace will extract information from this object such as the error message and stack trace and send this information along with the report. |
| `report.capture_last_exception()` | This is the same as `report.set_exception(*sys.exc_info())`. |
| `report.log(line)` | Adds a timestamped log message to the report. Log output is available when you view a report. |
| `report.send()` | Sends the error report to the endpoint specified in initialize. |

### bt.send_last_exception(\*\*kwargs)

| Argument | Explanation |
| :--- | :--- |
| `attributes` | Dictionary of attributes to add to the report. See `report.set_dict_attributes`. |
| `annotations` | Dictionary of annotations to add to the report. See `report.set_dict_annotations`. |
