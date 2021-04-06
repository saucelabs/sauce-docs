---
id: virtual-usb
title: Virtual USB CLI Reference
sidebar_label: Full Reference
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

The following commands and options are specifically use with the Virtual USB (vUSB) client test runner. For more information, see [Virtual USB Testing on Real Mobile Devices](/mobile-apps/virtual-usb).

## Command Line Structure

The formatting for vUSB command lines is as follows: `<main class> [options] [command] [command options]`.

**Example**:
```java
java -jar virtual-usb-client-2.0.0.jar --help
```

## `server`

### `--datacenter`
<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: connects your local machine to a Sauce Labs Data Center, where your Real Device Cloud tests will run. Possible values: `EU` or `US`.

__Example__:
```java
server --datacenter US
```

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.

### `--adbPortMin`
__Description__: Virtual USB server Android Debug Bridge (ADB) port. Default value: `7000`.

### `--adbPortRange`
__Description__: Virtual USB server ADB port range. Default value: `100`.

### `--proxyHost`
__Description__: HTTP proxy host.

### `--proxyPort`
__Description__: HTTP proxy port. Default value: `0`.

### `--proxyUser`
__Description__: HTTP proxy user.

### `--proxyPassword`
__Description__: HTTP proxy password.

### `--startUsbmuxd`
__Description__: Starts the usbmuxd server immediately. Default value: `false`.


## `startSession`

__Full Example__:

```bash
java -jar virtual-usb-client-2.0.0.jar startSession \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxx \
    --deviceName iPhone_XS \
    --serverHost http://127.0.0.1 \
    --serverPort 8080 \
    --tunnelIdentifier my-tunnel
```


### `--username`

<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides the `server` with your username credentials. then connects your local machine to your desired device (static allocation).

__Example__:
```java
startSession --username john.smith
```

### `--accessKey`

<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides the `server` with your API credentials.

__Example__:
```java
startSession --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxx 
```

### `--deviceName`

<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: connects your local machine to the desired device (static allocation).

__Example__:
```java
startSession --deviceName iPhone_XS
```

### `--serverHost`

__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.


### `--serverPort`

__Description__: Virtual USB server port. Default value: `33657`.


### `--proxyHost`

__Description__: specifies a proxy host to be set on the device.


### `--proxyPassword`

__Description__: specifies a proxy password to be set on the device.


### `--proxyPort`

__Description__: specifies a proxy port to be set on the device. Default value: `0`.


### `--proxyUser`

__Description__: specifies a proxy user to be set on the device.


### `--tunnelIdentifier`

__Description__: specifies a tunnel identifier for Sauce Connect Proxy.

__Example__:
```java
startSession --tunnelIdentifier my-tunnel
```

## `disconnect`

__Full Example__:

```java
java -jar virtual-usb-client-2.0.0.jar disconnect \
    --sessionId 12345 \
    --serverHost http://127.0.0.1 \
    --serverPort 33657 \
```

### `--sessionId`
<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides `server` with the session ID, then disconnects the device from your local machine.

__Example__:

```java
disconnect --sessionId 12345
```

### `--serverHost`

__Description__: vUSB-Server host. Default: `http://127.0.0.1`.


### `--serverPort`

__Description__: vUSB-Server port. Default: `33657`.

## `connect`

__Full Example__:

```java
java -jar virtual-usb-client-2.0.0.jar connect \
    --sessionId 12345 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

### `--sessionId` 
<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides `server` with the session ID, then connects the device to your local machine.

__Example__:

```java
connect --sessionId 12345
```

### `--username` 
<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides the `server` with your username credentials. then connects the device to your local machine.

__Example__:
```java
connect --username john.smith
```

### `--accessKey`
<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides the `server` with your API key for authentication, then connects the device to your local machine.

__Example__:
```java
connect --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```        

### `--serverHost`
__Description__: Virtual USB server host. Default: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default: `33657`.


## `deleteSession`

__Full Example__:

```java
java -jar virtual-usb-client-2.0.0.jar deleteSession \
    --sessionId 12345 \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

### `--sessionId` 
<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides `server` with the session ID, then reconnects your local machine to your desired device (static allocation).

__Example__:

```java
deleteSession --sessionId 12345
```

### `--username` 
<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides the `server` with your username credentials, then reconnects your local machine to your desired device (static allocation).

__Example__:
```java
deleteSession --username john.smith
```

### `--accessKey`
<p><small><Highlight color="#003A70">Required</Highlight></small></p>

__Description__: provides the `server` with your API key for authentication, then reconnects your local machine to your desired device (static allocation).

__Example__:
```java
deleteSession --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
``` 

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.

## `sessions`

__Full Example__:

```java
java -jar virtual-usb-client-2.0.0.jar sessions \
    --username john.smith \
    --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

### `--username`
__Description__: returns a list of available, active device sessions based on `username`.

__Example__:
```java
sessions --username john.smith
```

### `--accessKey`
__Description__: returns a list of available, active device sessions based on `accessKey`.

__Example__:
```java
sessions --accessKey ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.

## Logging Options

### `--help`
__Description__: generates a complete list of Virtual USB commands and options.

### `--logFile`
__Description__: specifies a path for creating a logfile.

### `-v`
__Description__: enables verbose logging. Default value: `false`.

### `-vv`
__Description__: enables very verbose logging. Default value: `false`.
