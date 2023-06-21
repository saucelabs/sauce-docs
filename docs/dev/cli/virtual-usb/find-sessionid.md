---
id: find-sessionid
title: 'Virtual USB CLI: Find SessionID'
sidebar_label: Find SessionID
---

Look up the list of active Virtual USB (vUSB) device sessions available to a specified user, allowing you to obtain the session ID for use in other vUSB CLI requests.

## Usage

```bash
$ <main class> [OPTIONS] sessions [OPTIONS]
```

## Options Details

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

```java title="Session Lookup Request"
java -jar virtual-usb-client.jar sessions --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY
```

```bash title="Sample Response"
07:45:46.375 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
List of active sessions
d03a1b81-158d-4bb4-bcc9-074e43dd8465   Samsung Galaxy S10  ANDROID  10
c7729c7a-56a9-46cf-ba96-958709a86b4f   iPhone XS           IOS      14.3
e21abb6f-a08e-4685-ba6e-8c6586dd4264   iPhone SE 2020      IOS      14.3
```

### Full Example with Optional Flags

```bash
java -jar virtual-usb-client.jar sessions \
    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \
    --username $SAUCE_USERNAME \
    --accessKey $SAUCE_ACCESS_KEY \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
```
