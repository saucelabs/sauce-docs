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
java -jar virtual-usb-client-2.0.0.jar server --datacenter US
```

## Start Server (Optional)

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


## Start Test Session (Required)

### `startSession` `--username` `--accessKey` `--deviceName`

__Description__: provides the server with your authentication credentials, then connects your local machine to your desired device (static allocation).

__Example__:
```java
java -jar virtual-usb-client-2.0.0.jar startSession --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03 --deviceName iPhone_XS
```

## Start Test Session (Optional)

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

## Disconnect From Device (Required)

### `disconnect` `--sessionId`
__Description__: provides server with the session ID, then disconnects the device your local machine.

__Example__:
```java
java -jar virtual-usb-client-2.0.0.jar disconnect --sessionId 12345
```

## Disconnect From Device (Optional)

### `--serverHost`
__Description__: vUSB-Server host. Default: `http://127.0.0.1`.

### `--serverPort`
__Description__: vUSB-Server port. Default: `33657`.

## Connect to Device (Required)

### `connect` `--sessionId` `--username` `--accessKey`
__Description__: provides the server with your user credentials for authentication, then connects your local machine to your desired device (static allocation).

__Example__:
```java
java -jar virtual-usb-client-2.0.0.jar connect --sessionId 12345 --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03
```

## Connect to Device (Optional)         

### `--serverHost`
__Description__: Virtual USB server host. Default: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default: `33657`.


## Delete Session (Required)

### `deleteSession` `--sessionId` `--username` `--accessKey`
__Description__: provides the server with your authentication credentials, then reconnects your local machine to your desired device (static allocation).

__Example__:
```java
java -jar virtual-usb-client-2.0.0.jar deleteSession --sessionId 12345 --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03
```

## Delete Session (Optional)            

### `--serverHost`
__Description__: Virtual USB server host. Default value: `http://127.0.0.1`.

### `--serverPort`
__Description__: Virtual USB server port. Default value: `33657`.

## List Sessions (Required)

### `sessions` `--username` `--accessKey`
__Description__: returns a list of available, active device sessions.

__Example__:
```java
java -jar virtual-usb-client-2.0.0.jar sessions --username john.smith --accessKey ab015c1e-1997-4794-8g52-32f7fe110e03
```

## List Sessions (Optional)

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
