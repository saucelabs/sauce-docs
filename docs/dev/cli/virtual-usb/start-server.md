---
id: start-server
title: 'Virtual USB CLI: Start the Server'
sidebar_label: Start Server
---

[Connect your local machine to the Sauce Labs Data Center](/mobile-apps/features/virtual-usb#start-server) where your Real Device Cloud private devices are hosted. You must initiate this command in its own separate command line terminal, since it acts as a continuously running log.

## Usage

```bash
$ <main class> [OPTIONS] server [OPTIONS]
```

## Options Details

### <span className="cli">--datacenter</span>

<div className="cli-desc">
<p><small>| REQUIRED | ENUM |</small></p>

Specifies the Sauce Labs data center where your Real Device Cloud private devices are hosted. Valid values are `EU`, `US`, `US_EAST`.

</div>

### <span className="cli">--serverHost</span>

<div className="cli-desc">
<p><small>| OPTIONAL | URL ADDRESS |</small></p>

A specific Virtual USB server host address. The default value, if not specified, is `http://127.0.0.1`.

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

### <span className="cli">--startUsbmuxd</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Starts the `usbmuxd` server. Default value: `false`.

</div>

## Examples

### Basic Example with Required Flags

```java title="Start Server Request"
java -jar virtual-usb-client.jar server --datacenter US
```

```bash title="Sample Response"
19:06:10.060 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0
19:06:11.032 [main] INFO com.saucelabs.vusb.client.server.VirtualUsbServer - Initializing vUSB-Server...
19:06:11.038 [main] INFO com.saucelabs.vusb.client.server.VirtualUsbServer - vUSB-Server initialized
19:06:11.039 [main] INFO com.saucelabs.vusb.client.server.rest.WebServer - Starting Virtual USB server on port 33657.
19:06:11.103 [main] INFO com.saucelabs.vusb.client.server.rest.WebServer - Virtual USB server is up.
```

### Full Example with Optional Flags

```bash
java -jar virtual-usb-client.jar server \
    --datacenter US \
    --adbPortRange 700 \
    --adbPortMin 1000 \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
    --startUsbmuxd true
```
