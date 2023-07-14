---
id: disconnect-session
title: 'Virtual USB CLI: Disconnect Session'
sidebar_label: Disconnect Session
---

Close a Virtual USB (vUSB) session that you joined originally using the [`connect` command](/dev/cli/virtual-usb/connect-session).

:::note Android Only
After disconnecting a session with an Android device, [disconnect your device from ADB](/mobile-apps/features/virtual-usb#close-test) by running `adb disconnect` followed by your `<IPAddress>:<portNumber>`.  
:::

## Usage

```bash
$ <main class> [OPTIONS] disconnect [OPTIONS]
```

## Options Details

### <span className="cli">--sessionId</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

The unique identifier of the test session to disconnect. You can retrieve the session ID of an active session using the [`sessions` command](/dev/cli/virtual-usb/find-sessionid).

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

```java title="Disconnect Request"
java -jar virtual-usb-client.jar disconnect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465
```

```bash title="Sample Response"
07:57:34.700 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
Disconnected
```

### Full Example with Optional Flags

```bash
java -jar virtual-usb-client.jar disconnect \
    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \
    --serverHost http://127.0.0.1 \
    --serverPort 33657 \
```
