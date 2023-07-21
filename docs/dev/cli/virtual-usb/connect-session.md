---
id: connect-session
title: 'Virtual USB CLI: Connect to Existing Session'
sidebar_label: Connect to Session
---

Connect to an existing Virtual USB (vUSB) session in lieu of launching a new vUSB session.

## Usage

```bash
$ <main class> [OPTIONS] connect [OPTIONS]
```

## Options Details

### <span className="cli">--sessionId</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

The unique identifier of your test session. You can retrieve the session ID of an active session using the [`sessions` command](/dev/cli/virtual-usb/find-sessionid).

</div>

### <span className="cli">--username</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

A valid Sauce Labs user account. You can find your username on the Sauce Labs [User Settings page](https://app.saucelabs.com/user-settings). This option supports environment variable values.

</div>

### <span className="cli">--accessKey</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

The authentication access key associated with your Sauce Labs user account. You can find your access key on the Sauce Labs [User Settings page](https://app.saucelabs.com/user-settings). This option supports environment variable values.

</div>

### <span className="cli">--serverHost</span>

<div className="cli-desc">
<p><small>| OPTIONAL | URL ADDRESS |</small></p>

A specific vUSB server host address. The default value, if not specified, is `http://127.0.0.1`.

</div>

### <span className="cli">--serverPort</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

A specific vUSB server port. The default value, if not specified, is `33657`.

</div>

## Examples

### Basic Example with Required Flags

```java title="Connection Request"
java -jar virtual-usb-client.jar connect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY
```

```bash title="Sample Response"
07:51:46.814 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
localhost:7000  online
```

### Full Example with Optional Flags

```bash
java -jar virtual-usb-client.jar connect \
    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \
    --username $SAUCE_USERNAME \
    --accessKey $SAUCE_ACCESS_KEY \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
```
