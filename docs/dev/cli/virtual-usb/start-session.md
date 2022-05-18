---
id: start-session
title: "Virtual USB CLI: Start Test Session"
sidebar_label: Start Session
---

### Description

[Launch a Virtual USB (vUSB) session](/mobile-apps/features/virtual-usb#start-test-session) between your local machine and a Sauce Labs device. Alternatively, you can [connect to an existing vUSB session](/dev/cli/virtual-usb/connect-session).

## Usage

<span className="cli">$ &lt;main class&gt; [OPTIONS] startSession [OPTIONS]</span>


## Options Details

### <span className="cli">--username </span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

A valid Sauce Labs user account. You can find your username on the Sauce Labs [User Settings page](https://app.saucelabs.com/user-settings). This option supports environment variable values.

</div>

### <span className="cli">--accessKey</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

The authentication access key associated with your Sauce Labs user account. You can find your access key on the Sauce Labs [User Settings page](https://app.saucelabs.com/user-settings). This option supports environment variable values.

</div>

### <span className="cli">--deviceName</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

The name of the private device that you want to use for testing.

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

### <span className="cli">--adbPortMin</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

 Specifies a vUSB server Android Debug Bridge (ADB) port. Default value: `7000`.

 </div>


### <span className="cli">--adbPortRange</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies a vUSB server ADB port range. Default value: `100`.

</div>

### <span className="cli">--proxyHost</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the HTTP proxy host.

</div>

#### <span className="cli">--proxyPort</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the HTTP proxy port. Default value: `0`.

</div>

### <span className="cli">--proxyUser</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the HTTP proxy user.

</div>

### <span className="cli">--proxyPassword</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the HTTP proxy password.

</div>

### <span className="cli">--tunnelIdentifier</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The name of an active [Sauce Connect](/secure-connections/sauce-connect/) tunnel to use for secure connectivity to the Sauce Labs platform.

:::note Identifying a Tunnel
The value expected here is the value shown under the **Tunnel Name** column on the Sauce Labs Tunnels page, not the Tunnel ID numerical value.
:::

</div>

## Examples

### Basic Example with Required Flags

```java title="Start Session Request"
java -jar virtual-usb-client.jar startSession --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY --deviceName iPhone_XS
```

```java title="Sample Response"
07:43:22.551 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
Started new session:
e21abb6f-a08e-4685-ba6e-8c6586dd4264		iPhone SE 2020		IOS		14.3		https://app.eu-central-1.saucelabs.com/live/mobile/dataCenters/EU/devices/iPhone_SE_2020_14_POC05/shared/e21abb6f-a08e-4685-ba6e-8c6586dd4264
localhost:-1	online
```

### Full Example with Optional Flags

```bash
java -jar virtual-usb-client.jar startSession \
    --username $SAUCE_USERNAME \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxx \
    --deviceName iPhone_XS \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
    --tunnelIdentifier my-tunnel
```
